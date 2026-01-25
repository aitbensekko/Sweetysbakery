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

function run() {
    console.log('Starting link fix process...');

    // Step 1: Build a map of slug -> type
    const slugMap = new Map();

    files.forEach(file => {
        const filePath = path.join(dataDir, file);
        if (fs.existsSync(filePath)) {
            console.log(`Scanning ${file}...`);
            const content = fs.readFileSync(filePath, 'utf8');

            // Split by object start to somewhat isolate fields
            // Assuming objects start with { and have an id property shortly after
            // This is a rough heuristic but sufficient for these structured files
            const chunks = content.split(/{\s*id:\s*/);

            chunks.forEach((chunk, index) => {
                if (index === 0) return; // Skip preamble

                const slugMatch = chunk.match(/slug:\s*['"]([^'"]+)['"]/);
                const typeMatch = chunk.match(/type:\s*['"]([^'"]+)['"]/);

                if (slugMatch && typeMatch) {
                    const slug = slugMatch[1];
                    const type = typeMatch[1];
                    slugMap.set(slug, type);
                }
            });
        } else {
            console.warn(`File not found: ${filePath}`);
        }
    });

    console.log(`Found ${slugMap.size} slugs.`);

    // Step 2: Replace links in content
    files.forEach(file => {
        const filePath = path.join(dataDir, file);
        if (!fs.existsSync(filePath)) return;

        let content = fs.readFileSync(filePath, 'utf8');
        let modifications = 0;

        // Regex to find href="/slug"
        // We look for href="/(capturing group)"
        // We exclude known prefixes like recipes, blog, tools, images, http
        const linkRegex = /href="\/([^"\/]+)"/g;

        content = content.replace(linkRegex, (match, slug) => {
            // Check if this slug exists in our map
            if (slugMap.has(slug)) {
                const type = slugMap.get(slug);
                let prefix = '';
                if (type === 'recipe') {
                    prefix = '/recipes/';
                } else if (type === 'article') {
                    prefix = '/blog/';
                } else {
                    return match; // Unknown type, leave it (or handle if necessary)
                }

                modifications++;
                return `href="${prefix}${slug}"`;
            }

            // If the slug is NOT in our map, it might be a static page (about, contact) or a tool
            // We leave it alone to be safe, unless we want to log it
            // console.log(`Skipping unknown slug link in ${file}: /${slug}`);
            return match;
        });

        if (modifications > 0) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}: Fixed ${modifications} links.`);
        } else {
            console.log(`No changes needed for ${file}.`);
        }
    });

    console.log('Link fix process completed.');
}

run();
