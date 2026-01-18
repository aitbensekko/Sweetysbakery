import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://sweetysbakery.com';

function getToolUrls() {
    const slugsPath = path.join(process.cwd(), 'components/utils/slugs.ts');
    const content = fs.readFileSync(slugsPath, 'utf8');
    const urls = [];

    // Match case 'tool-id': return '/path';
    const regex = /case\s+'([^']+)':\s*return\s+'([^']+)';/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        const path = match[2];
        if (path !== '/' && !path.startsWith('http')) {
            urls.push({
                loc: `${DOMAIN}${path}`,
                changefreq: 'weekly',
                priority: '0.8'
            });
        }
    }

    // Add home manually with higher priority
    urls.push({
        loc: DOMAIN + '/',
        changefreq: 'daily',
        priority: '1.0'
    });

    console.log(`Found ${urls.length} tool/static pages`);
    return urls;
}

function getProductUrls() {
    const productsPath = path.join(process.cwd(), 'data/affiliateProducts.ts');
    const content = fs.readFileSync(productsPath, 'utf8');
    const urls = [];

    // Match slug: 'some-slug'
    const regex = /slug:\s*['"`]([^'"`]+)['"`]/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        urls.push({
            loc: `${DOMAIN}/products/${match[1]}`,
            changefreq: 'monthly',
            priority: '0.7'
        });
    }

    console.log(`Found ${urls.length} product pages`);
    return urls;
}

function getBlogUrls() {
    const blogPath = path.join(process.cwd(), 'data/blogPosts.tsx');
    const content = fs.readFileSync(blogPath, 'utf8');
    const urls = [];

    // Match slug and type to determine path
    // We look for objects that have both matching properties
    // This simple regex strategy assumes consistent formatting
    const regex = /slug:\s*['"`]([^'"`]+)['"`][\s\S]*?type:\s*['"`]([^'"`]+)['"`]/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        const slug = match[1];
        const type = match[2];
        const prefix = type === 'recipe' ? '/recipes/' : '/blog/';

        urls.push({
            loc: `${DOMAIN}${prefix}${slug}`,
            changefreq: 'monthly',
            priority: '0.7'
        });
    }

    console.log(`Found ${urls.length} blog/recipe pages`);
    return urls;
}

function generateSitemap() {
    console.log('Starting sitemap generation...');

    const toolUrls = getToolUrls();
    const productUrls = getProductUrls();
    const blogUrls = getBlogUrls();

    const allUrls = [...toolUrls, ...productUrls, ...blogUrls];

    // Remove duplicates based on loc
    const uniqueUrls = Array.from(new Map(allUrls.map(item => [item.loc, item])).values());

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const outDir = path.join(process.cwd(), 'out');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
    console.log(`✅ Generated sitemap with ${uniqueUrls.length} unique URLs in out/sitemap.xml`);
}

generateSitemap();
