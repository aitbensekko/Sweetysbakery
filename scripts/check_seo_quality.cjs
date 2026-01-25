const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const outDir = 'c:\\Users\\Sara\\Desktop\\Projects\\sb HOSTINGER\\out';
const sampleSize = 50;

function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else {
            if (path.extname(file) === '.html') {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

function run() {
    console.log('Starting SEO Quality Check...');

    const allFiles = getAllHtmlFiles(outDir);
    console.log(`Found ${allFiles.length} HTML files.`);

    // Pick specific important pages + random sample
    const importantPages = [
        path.join(outDir, 'index.html'),
        path.join(outDir, 'blog', 'easy-pistachio-cake-recipe.html'), // Example recipe
        path.join(outDir, 'recipes.html'),
        path.join(outDir, 'about.html')
    ];

    const sampleFiles = new Set(importantPages.filter(p => fs.existsSync(p)));

    while (sampleFiles.size < sampleSize && sampleFiles.size < allFiles.length) {
        const randomFile = allFiles[Math.floor(Math.random() * allFiles.length)];
        sampleFiles.add(randomFile);
    }

    console.log(`Checking ${sampleFiles.size} pages...`);

    let missingTitle = 0;
    let missingDescription = 0;
    let missingCanonical = 0;
    let titleIssues = [];

    sampleFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const $ = cheerio.load(content);
        const relativePath = path.relative(outDir, file);

        const title = $('title').text();
        const description = $('meta[name="description"]').attr('content');
        const canonical = $('link[rel="canonical"]').attr('href');

        if (!title || title.trim().length === 0) {
            missingTitle++;
            console.warn(`[MISSING TITLE] ${relativePath}`);
        } else if (title.trim().length < 10) {
            console.warn(`[SHORT TITLE] ${relativePath}: "${title}"`);
        }

        if (!description || description.trim().length === 0) {
            missingDescription++;
            console.warn(`[MISSING DESC] ${relativePath}`);
        }

        if (!canonical) {
            missingCanonical++;
            console.warn(`[MISSING CANONICAL] ${relativePath}`);
        }

        // Internal Link Check (Simple Heuristic for sampled pages)
        $('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.startsWith('/') && !href.startsWith('/blog/') && !href.startsWith('/recipes/') && !href.startsWith('/tools') && !href.startsWith('/_next') && !href.startsWith('/assets')) {
                // Check if it's one of the known "flat" pages
                const flatPages = ['/', '/about', '/contact', '/privacy', '/terms', '/recipes', '/blog', '/tools', '/products', '/shop-directory', '/kitchenaid-reviews', '/baking-sources', '/my-art', '/essential-recipes', '/baking-ebooks', '/premium-templates'];
                if (!flatPages.includes(href) && !href.startsWith('/images/')) {
                    // Potential broken link (missing prefix)
                    // We can be more aggressive check: does it look like a blog slug?
                    // For now, just log it if it looks suspicious (more than 1 segment, no known prefix)
                    if (href.split('/').length === 2 && href.length > 20) { // e.g. /some-long-slug
                        console.warn(`[SUSPICIOUS LINK] ${relativePath} -> ${href}`);
                        // You could potentially count this as an error if we are sure
                    }
                }
            }
        });
    });

    console.log('\n--- Report Summary ---');
    console.log(`Pages Checked: ${sampleFiles.size}`);
    console.log(`Missing Title: ${missingTitle}`);
    console.log(`Missing Description: ${missingDescription}`);
    console.log(`Missing Canonical: ${missingCanonical}`);

    if (missingTitle === 0 && missingDescription === 0) {
        console.log('SEO Meta Tags looking good!');
    }
}

run();
