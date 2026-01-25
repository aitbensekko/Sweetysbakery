const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Sara\\Desktop\\Projects\\sb HOSTINGER';
const dataDir = path.join(projectRoot, 'data');

const files = [
    'blogPosts.tsx',
    'additionalBlogPosts.ts',
    'seoBlogPosts.ts',
    'newSeoBlogPosts.ts'
];

const knownStaticPages = new Set([
    'about', 'contact', 'privacy-policy', 'terms-of-use', 'tools', 'recipes', 'blog',
    'shop-directory', 'kitchenaid-reviews', 'baking-sources', 'my-art',
    'essential-recipes', 'baking-ebooks', 'premium-templates',
    // Add tools here if they are linked by ID-as-slug
    'cake-pricing-calculator', 'recipe-scaler', 'bakers-percentage',
    'dough-temperature', 'macaron-troubleshooting', 'buttercream-calculator',
    'ganache-calculator', 'frosting-color-mixer', 'flavor-pairing-guide',
    'measurement-converter', 'simple-calculator', 'sweetener-converter',
    'protein-macro', 'baking-pan-converter', 'yeast-converter',
    'oven-temp-converter', 'management-dashboard', 'order-management',
    'baking-tutorials', 'investment-calculator', 'weight-converter',
    'volume-converter', 'dessert-calculator', 'digital-notebook', 'multiple-timer',
    'ideal-weight-calculator',
    'inventory-management'
]);

const aliases = {
    'how-to-temper-chocolate': 'the-art-of-tempering-mastering-how-to-temper-chocolate'
};


function run() {
    console.log('Starting IMPROVED link fix process (Unlinking dead links)...');

    // Step 1: Build a map of slug -> type
    const slugMap = new Map();

    files.forEach(file => {
        const filePath = path.join(dataDir, file);
        if (fs.existsSync(filePath)) {
            console.log(`Scanning ${file} for slugs...`);
            const content = fs.readFileSync(filePath, 'utf8');

            const chunks = content.split(/{\s*id:/);
            chunks.forEach((chunk, i) => {
                if (i === 0) return;
                const slugMatch = chunk.match(/slug:\s*['"]([^'"]+)['"]/);
                const typeMatch = chunk.match(/type:\s*['"]([^'"]+)['"]/);
                if (slugMatch) {
                    const slug = slugMatch[1];
                    const type = typeMatch ? typeMatch[1] : 'article';
                    slugMap.set(slug, type);
                }
            });
        }
    });

    console.log(`Found ${slugMap.size} slugs.`);

    // Step 2: Replace or Unlink
    files.forEach(file => {
        const filePath = path.join(dataDir, file);
        if (!fs.existsSync(filePath)) return;

        let content = fs.readFileSync(filePath, 'utf8');
        let fixedCount = 0;
        let unlinkedCount = 0;

        // Strategy: 
        // 1. Find all <a> tags with href="/..."
        // Regex: <a\s+[^>]*href="\/([^"\/]+)"[^>]*>(.*?)<\/a>
        // Use non-greedy match for content.
        // This is fragile but works for the consistent formatting in these files.
        const tagRegex = /<a\s+[^>]*href="\/([^"\/]+)"[^>]*>(.*?)<\/a>/gs;

        content = content.replace(tagRegex, (match, slug, linkText) => {
            // Check aliases first
            if (aliases[slug]) {
                const newSlug = aliases[slug];
                // Check if new slug is in map to get type
                if (slugMap.has(newSlug)) {
                    const type = slugMap.get(newSlug);
                    let prefix = '/blog/';
                    if (type === 'recipe') prefix = '/recipes/';
                    fixedCount++;
                    console.log(`Aliasing /${slug} -> ${prefix}${newSlug}`);
                    return match.replace(`href="/${slug}"`, `href="${prefix}${newSlug}"`);
                }
            }

            // Check if slug is known internal page
            if (knownStaticPages.has(slug)) {
                return match; // Keep as is
            }

            if (slugMap.has(slug)) {
                // It is a blog post, fix prefix
                const type = slugMap.get(slug);
                let prefix = '/blog/';
                if (type === 'recipe') prefix = '/recipes/';

                fixedCount++;
                // We reconstruct the tag with the new href.
                // But replacing the whole tag is risky if we lose other attributes (style, class).
                // Better to just replace the href in the match string.
                return match.replace(`href="/${slug}"`, `href="${prefix}${slug}"`);
            } else {
                // Dead link! Unlink it.
                unlinkedCount++;
                console.log(`Unlinking dead link: /${slug} -> "${linkText}"`);
                return linkText; // Return just the text content
            }
        });

        // Also run the simple href replacer for any that didn't match the full tag regex (e.g. if checking non-tag usages?)
        // But unlinking requires tag replacement.

        if (fixedCount > 0 || unlinkedCount > 0) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}: Fixed ${fixedCount} links, Unlinked ${unlinkedCount} dead links.`);
        }
    });

    console.log('Done.');
}

run();
