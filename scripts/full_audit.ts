import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const outDir = path.join(process.cwd(), 'out');

interface AuditResult {
    url: string;
    onPage: {
        title: { exists: boolean; length: number; status: 'ok' | 'warning' | 'error' };
        description: { exists: boolean; length: number; status: 'ok' | 'warning' | 'error' };
        h1: { count: number; status: 'ok' | 'warning' | 'error' };
        headers: { h2Count: number; h3Count: number; hierarchyOk: boolean; status: 'ok' | 'warning' };
        images: { total: number; missingAlt: number; status: 'ok' | 'warning' | 'error' };
        content: { keywordInFirst100: boolean; status: 'ok' | 'warning' };
        internalLinks: number;
        schema: { exists: boolean; types: string[] };
    };
    offPage: {
        socialLinks: string[];
        status: 'ok' | 'warning';
    };
    local: {
        hasAddress: boolean;
        hasPhone: boolean;
        hasMapOrGmb: boolean;
    };
    tech: {
        canonical: boolean;
        viewport: boolean;
        httpsLinks: { total: number; httpCount: number; status: 'ok' | 'warning' };
    };
}

const auditResults: AuditResult[] = [];

// Helper to deduce URL from file path
function getUrlPath(filePath: string): string {
    let rel = path.relative(outDir, filePath).replace(/\\/g, '/');
    if (rel.endsWith('index.html')) rel = rel.replace('index.html', '');
    if (rel.endsWith('.html')) rel = rel.replace('.html', '');
    return '/' + rel;
}

function walkDir(dir: string, callback: (filePath: string) => void) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(f => {
        const fullPath = path.join(dir, f);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath, callback);
        } else if (f.endsWith('.html')) {
            callback(fullPath);
        }
    });
}

function auditPage(filePath: string) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);
    const url = getUrlPath(filePath);

    // 1. Title
    const title = $('title').text().trim();
    const titleLen = title.length;
    let titleStatus: 'ok' | 'warning' | 'error' = 'ok';
    if (!title) titleStatus = 'error';
    else if (titleLen < 30 || titleLen > 65) titleStatus = 'warning';

    // 2. Meta Desc
    const desc = $('meta[name="description"]').attr('content')?.trim() || '';
    const descLen = desc.length;
    let descStatus: 'ok' | 'warning' | 'error' = 'ok';
    if (!desc) descStatus = 'error';
    else if (descLen < 50 || descLen > 170) descStatus = 'warning';

    // 3. Header Hierarchy
    const h1Count = $('h1').length;
    let h1Status: 'ok' | 'warning' | 'error' = 'ok';
    if (h1Count === 0) h1Status = 'error';
    if (h1Count > 1) h1Status = 'warning';

    const h2Count = $('h2').length;
    const h3Count = $('h3').length;
    // Simple hierarchy check: H3 should generally come after H2, but simpler check is just presence
    // Better check: are H2s present if H3s are?
    const hierarchyOk = !(h3Count > 0 && h2Count === 0);
    const headerStatus = hierarchyOk ? 'ok' : 'warning';

    // 4. Keyword Placement (First 100 words)
    // Guess keyword from title (first phrase before | usually)
    const guessedKeyword = title.split('|')[0].trim().toLowerCase();
    const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
    const first100Words = bodyText.split(' ').slice(0, 100).join(' ').toLowerCase();
    const keywordInFirst100 = !!guessedKeyword && first100Words.includes(guessedKeyword.split(' ')[0]); // Check first word of keyword at least
    const contentStatus = keywordInFirst100 ? 'ok' : 'warning';

    // 5. Images
    const imgs = $('img');
    let missingAlt = 0;
    imgs.each((_, el) => {
        if (!$(el).attr('alt')) missingAlt++;
    });
    let imgStatus: 'ok' | 'warning' | 'error' = 'ok';
    if (missingAlt > 0) imgStatus = 'warning';

    // 6. Internal & Links HTTPS
    const links = $('a');
    let internalLinkCount = 0;
    let httpCount = 0;
    let socialLinks: string[] = [];
    const socialDomains = ['facebook.com', 'instagram.com', 'twitter.com', 'pinterest.com', 'linkedin.com', 'youtube.com', 'tiktok.com'];

    links.each((_, el) => {
        const href = $(el).attr('href') || '';
        if (href.startsWith('/')) internalLinkCount++;
        if (href.startsWith('http://')) httpCount++;
        if (socialDomains.some(d => href.includes(d))) socialLinks.push(href);
    });

    const httpsStatus = httpCount > 0 ? 'warning' : 'ok';
    const socialStatus = socialLinks.length > 0 ? 'ok' : 'warning';

    // 7. Schema
    const schemaScripts = $('script[type="application/ld+json"]');
    const schemas: string[] = [];
    schemaScripts.each((_, el) => {
        try {
            const json = JSON.parse($(el).html() || '{}');
            if (json['@type']) schemas.push(json['@type']);
            if (json['@graph']) json['@graph'].forEach((node: any) => {
                if (node['@type']) schemas.push(node['@type']);
            });
        } catch (e) { }
    });

    // 8. Tech
    const canonical = !!$('link[rel="canonical"]').attr('href');
    const viewport = !!$('meta[name="viewport"]').attr('content');

    // 9. Local (Footer/Body check)
    // Matches common phone formats: (123) 456-7890, 123-456-7890, +1 234 567 8900
    const phoneRegex = /(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/;
    const hasPhone = phoneRegex.test(bodyText);
    const hasAddress = bodyText.includes('Marrakech') || bodyText.toLowerCase().includes('morocco'); // Expanded check
    const hasMapOrGmb = links.toArray().some(el => {
        const href = $(el).attr('href') || '';
        return href.includes('maps.google.com') || href.includes('goo.gl/maps') || href.includes('business.google.com');
    });

    auditResults.push({
        url,
        onPage: {
            title: { exists: !!title, length: titleLen, status: titleStatus },
            description: { exists: !!desc, length: descLen, status: descStatus },
            h1: { count: h1Count, status: h1Status },
            headers: { h2Count, h3Count, hierarchyOk, status: headerStatus },
            images: { total: imgs.length, missingAlt, status: imgStatus },
            content: { keywordInFirst100, status: contentStatus },
            internalLinks: internalLinkCount,
            schema: { exists: schemas.length > 0, types: schemas }
        },
        offPage: {
            socialLinks: [...new Set(socialLinks)],
            status: socialStatus
        },
        local: { hasAddress, hasPhone, hasMapOrGmb },
        tech: {
            canonical,
            viewport,
            httpsLinks: { total: links.length, httpCount, status: httpsStatus }
        }
    });
}

console.log('🚀 Starting Full SEO Audit...');
walkDir(outDir, auditPage);

// --- Stats ---
const total = auditResults.length;
const errors = auditResults.filter(r =>
    r.onPage.title.status === 'error' ||
    r.onPage.description.status === 'error' ||
    r.onPage.h1.status === 'error'
);
const warnings = auditResults.filter(r =>
    r.onPage.title.status === 'warning' ||
    r.onPage.description.status === 'warning' ||
    r.onPage.h1.status === 'warning' ||
    r.onPage.images.status === 'warning' ||
    r.onPage.headers.status === 'warning' ||
    r.tech.httpsLinks.status === 'warning'
);
const schemaCount = auditResults.filter(r => r.onPage.schema.exists).length;
const localCount = auditResults.filter(r => r.local.hasAddress || r.local.hasPhone).length;

console.log(`\n📊 Audited ${total} pages.`);
console.log(`❌ Critical Errors: ${errors.length}`);
console.log(`⚠️ Warnings: ${warnings.length}`);
console.log(`✅ Pages with Schema: ${schemaCount}`);
console.log(`📍 Pages with Local Info: ${localCount}`);

const sitemapExists = fs.existsSync(path.join(outDir, 'sitemap.xml'));
const robotsExists = fs.existsSync(path.join(outDir, 'robots.txt'));

// Write detailed results to file for analysis
fs.writeFileSync(path.join(process.cwd(), 'audit_results.json'), JSON.stringify({
    summary: {
        total,
        errors: errors.map(e => ({ url: e.url, issues: e.onPage })),
        warnings: warnings.map(e => ({ url: e.url, issues: e.onPage, tech: e.tech })),
        schemaCount,
        localCount,
        sitemapExists,
        robotsExists
    },
    details: auditResults
}, null, 2));

console.log('✅ Audit complete. Results saved to audit_results.json');

