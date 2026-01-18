const fs = require('fs');
const path = require('path');

// Read sitemap
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf-8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>https:\/\/www\.sweetysbakery\.com\/([^<]*)<\/loc>/g)]
    .map(match => match[1])
    .filter(url => url !== ''); // Remove empty homepage

console.log(`\n📊 Sitemap contains ${sitemapUrls.length} URLs (excluding homepage)\n`);

// Get all tool files
const toolsDir = path.join(__dirname, 'components', 'tools');
const toolFiles = fs.readdirSync(toolsDir)
    .filter(f => f.endsWith('.tsx') && !f.includes('BlogPostPage'))
    .map(f => f.replace('.tsx', ''));

console.log(`🛠️  Found ${toolFiles.length} tool components\n`);

// Expected tool slugs (kebab-case conversion)
const toolSlugs = toolFiles.map(name => {
    return name
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '');
});

// Read blog posts
let blogSlugs = [];
try {
    const blogContent = fs.readFileSync('data/blogPosts.tsx', 'utf-8');
    const slugMatches = [...blogContent.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)];
    blogSlugs = slugMatches.map(m => m[1]);
    console.log(`📝 Found ${blogSlugs.length} blog post slugs\n`);
} catch (e) {
    console.log('⚠️  Could not read blog posts\n');
}

// Read recipes
let recipeSlugs = [];
try {
    const recipeContent = fs.readFileSync('data/recipeDatabase.ts', 'utf-8');
    const idMatches = [...recipeContent.matchAll(/id:\s*['"`]([^'"`]+)['"`]/g)];
    recipeSlugs = idMatches.map(m => m[1]);
    console.log(`🍰 Found ${recipeSlugs.length} recipe IDs\n`);
} catch (e) {
    console.log('⚠️  Could not read recipes\n');
}

// Read products
let productSlugs = [];
try {
    const productContent = fs.readFileSync('data/affiliateProducts.ts', 'utf-8');
    const slugMatches = [...productContent.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)];
    productSlugs = slugMatches.map(m => m[1]);
    console.log(`🛍️  Found ${productSlugs.length} product slugs\n`);
} catch (e) {
    console.log('⚠️  Could not read products\n');
}

// Static pages
const staticPages = [
    'products',
    'tools/baking-sources',
    'tools/all-tools',
    'blog',
    'about',
    'contact-us',
    'privacy-policy',
    'terms-of-use',
    'disclaimer',
    'gallery',
    'testimonials',
    'recipes',
    'coffee-shop-directory'
];

// Build expected URLs
const expectedUrls = new Set([
    ...staticPages,
    ...toolSlugs.map(slug => `tools/${slug}`),
    ...blogSlugs,
    ...recipeSlugs.map(slug => `recipes/${slug}`),
    ...productSlugs.map(slug => `products/${slug}`)
]);

console.log(`\n✅ Expected total URLs: ${expectedUrls.size}\n`);

// Find missing URLs
const missingInSitemap = [...expectedUrls].filter(url => !sitemapUrls.includes(url));
const extraInSitemap = sitemapUrls.filter(url => !expectedUrls.has(url));

if (missingInSitemap.length > 0) {
    console.log(`\n❌ Missing in sitemap (${missingInSitemap.length}):`);
    missingInSitemap.slice(0, 20).forEach(url => console.log(`   - ${url}`));
    if (missingInSitemap.length > 20) {
        console.log(`   ... and ${missingInSitemap.length - 20} more`);
    }
}

if (extraInSitemap.length > 0) {
    console.log(`\n⚠️  Extra in sitemap (${extraInSitemap.length}):`);
    extraInSitemap.slice(0, 20).forEach(url => console.log(`   - ${url}`));
    if (extraInSitemap.length > 20) {
        console.log(`   ... and ${extraInSitemap.length - 20} more`);
    }
}

if (missingInSitemap.length === 0 && extraInSitemap.length === 0) {
    console.log('\n✅ Sitemap is complete! All URLs are present.\n');
} else {
    console.log(`\n📋 Summary:`);
    console.log(`   - Sitemap URLs: ${sitemapUrls.length}`);
    console.log(`   - Expected URLs: ${expectedUrls.size}`);
    console.log(`   - Missing: ${missingInSitemap.length}`);
    console.log(`   - Extra: ${extraInSitemap.length}\n`);
}

// Save results
const results = {
    sitemapCount: sitemapUrls.length,
    expectedCount: expectedUrls.size,
    missing: missingInSitemap,
    extra: extraInSitemap,
    isComplete: missingInSitemap.length === 0 && extraInSitemap.length === 0
};

fs.writeFileSync('sitemap_verification.json', JSON.stringify(results, null, 2));
console.log('💾 Results saved to sitemap_verification.json\n');
