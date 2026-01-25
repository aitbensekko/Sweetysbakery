import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import { blogPosts } from '@/data/blogPosts';
import { newSeoBlogPosts } from '@/data/newSeoBlogPosts';
import { affiliateProducts } from '@/data/affiliateProducts';
import { allToolIds, toolIdToSlug } from '@/components/utils/slugs';

const baseUrl = 'https://sweetysbakery.com';

async function run() {
    const sitemapPath = path.join(process.cwd(), 'out', 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
        console.error('❌ Sitemap not found at', sitemapPath);
        process.exit(1);
    }

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(sitemapContent);
    const actualUrls = new Set<string>();
    const duplicates = new Set<string>();

    if (result.urlset && result.urlset.url) {
        result.urlset.url.forEach((entry: any) => {
            if (entry.loc && entry.loc[0]) {
                const url = entry.loc[0];
                if (actualUrls.has(url)) {
                    duplicates.add(url);
                }
                actualUrls.add(url);
            }
        });
    }

    console.log(`🔎 Found ${result.urlset.url.length} entries in sitemap`);
    console.log(`🔎 Found ${actualUrls.size} UNIQUE URLs`);
    if (duplicates.size > 0) {
        console.warn(`⚠️ Found ${duplicates.size} DUPLICATE URLs in sitemap!`);
        console.warn('Samples:', [...duplicates].slice(0, 5));
    }

    // --- Generate Expected ---
    const expectedUrls = new Set<string>();

    // Core
    allToolIds.forEach((id: any) => {
        const path = toolIdToSlug(id); // Returns /...
        const isHome = path === '/';
        if (path) {
            // Handle root specially if needed, but normally https://.../ is normalized to https://...
            // sitemap.ts logic: `${baseUrl}${isHome ? '' : path}`
            expectedUrls.add(`${baseUrl}${isHome ? '' : path}`);
        }
    });

    // Physical
    ['marrakech-custom-cakes', 'gold'].forEach(route => {
        expectedUrls.add(`${baseUrl}/${route}`);
    });

    // Blogs
    // Note: sitemap.ts combines both lists
    [...blogPosts, ...newSeoBlogPosts].forEach((post) => {
        // sitemap.ts logic: `${baseUrl}/${post.type === 'recipe' ? 'recipes' : 'blog'}/${post.slug}`
        const url = `${baseUrl}/${post.type === 'recipe' ? 'recipes' : 'blog'}/${post.slug}`;
        expectedUrls.add(url);
    });

    // Products
    affiliateProducts.forEach((product) => {
        expectedUrls.add(`${baseUrl}/products/${product.slug}`);
    });

    // Manual 'my-art' entry in sitemap.ts (lines 101+)
    // url: `${baseUrl}/tools/my-art`
    // This is already covered by allToolIds?
    // 'my-art' -> '/tools/my-art'
    // So it is already in expectedUrls.

    // --- Verification ---
    const missing: string[] = [];
    const extra: string[] = [];

    expectedUrls.forEach(url => {
        if (!actualUrls.has(url)) missing.push(url);
    });

    actualUrls.forEach(url => {
        if (!expectedUrls.has(url)) {
            extra.push(url);
        }
    });

    console.log(`✅ Expected: ${expectedUrls.size}`);
    console.log(`❌ Missing: ${missing.length}`);
    console.log(`⚠️ Extra  : ${extra.length}`);

    if (missing.length > 0) {
        console.log('\nMissing URLs (Sample):');
        missing.slice(0, 10).forEach(u => console.log(' - ' + u));
    }

    if (extra.length > 0) {
        console.log('\nExtra URLs (Sample):');
        extra.slice(0, 10).forEach(u => console.log(' - ' + u));
    }
}

run();
