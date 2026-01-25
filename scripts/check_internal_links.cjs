const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const OUT_DIR = path.join(__dirname, '../out');
const REPORT_FILE = 'broken_links_report.txt';

// helper to get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

console.log('Scanning out/ directory...');
const allFiles = getAllFiles(OUT_DIR);
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));

// Build a set of valid relative paths from out/ root
// e.g. /about, /about.html, /images/foo.jpg
const validPaths = new Set();
allFiles.forEach(f => {
    const relative = f.replace(OUT_DIR, '').replace(/\\/g, '/');
    validPaths.add(relative);
    // Add directory index equivalents
    if (relative.endsWith('/index.html')) {
        validPaths.add(relative.replace('/index.html', ''));
        validPaths.add(relative.replace('/index.html', '/'));
    }
    // Add extensionless versions for .html files
    if (relative.endsWith('.html')) {
        validPaths.add(relative.replace('.html', ''));
    }
});

console.log(`Found ${htmlFiles.length} HTML files to scan.`);
console.log(`Indexed ${validPaths.size} valid paths.`);

let brokenLinks = [];
let scanCount = 0;

htmlFiles.forEach((file) => {
    scanCount++;
    if (scanCount % 50 === 0) console.log(`Scanned ${scanCount}/${htmlFiles.length} files...`);

    const content = fs.readFileSync(file, 'utf-8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;
    const links = doc.querySelectorAll('a[href]');

    links.forEach(a => {
        let href = a.getAttribute('href');

        // Ignore external, anchor-only, mailto, tel
        if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
            return;
        }

        // Clean href (remove query/hash)
        const cleanHref = href.split('#')[0].split('?')[0];

        if (!cleanHref) return; // was just a hash or empty

        // Check if exists in validPaths
        // NOTE: hrefs are usually root relative e.g. /about or relative ../about
        // We will normalize to root relative for checking

        let normalizedPath = cleanHref;

        // If not root relative, resolve from current file dir
        if (!cleanHref.startsWith('/')) {
            const relativeDir = path.dirname(file).replace(OUT_DIR, '').replace(/\\/g, '/');
            normalizedPath = path.posix.join(relativeDir, cleanHref);
        }

        if (!validPaths.has(normalizedPath)) {
            // Try valid path additions (e.g. adding / if it's a dir that exists)
            // But validPaths should already cover standard Next.js export patterns

            // Double check trailing slash issues
            let altPath = normalizedPath;
            if (normalizedPath.endsWith('/')) altPath = normalizedPath.slice(0, -1);
            else altPath = normalizedPath + '/';

            if (!validPaths.has(altPath)) {
                brokenLinks.push({
                    source: file.replace(OUT_DIR, ''),
                    link: href,
                    normalized: normalizedPath
                });
            }
        }
    });
});

console.log(`Scan complete. Found ${brokenLinks.length} broken links.`);

if (brokenLinks.length > 0) {
    const reportContent = brokenLinks.map(b => `Source: ${b.source}\nLink: ${b.link} (resolved: ${b.normalized})\n`).join('-------------------\n');
    fs.writeFileSync(REPORT_FILE, reportContent);
    console.log(`Report written to ${REPORT_FILE}`);
} else {
    console.log('No broken internal links found!');
}
