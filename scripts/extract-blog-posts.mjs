
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

// --- Configuration ---
const SITEMAP_URL = 'https://sweetysbakery.com/sitemap.xml';
const OUTPUT_FILE = 'C:/Users/Sara/Desktop/TEST/TEST3/data/blogPosts.tsx';

// --- Helper Functions ---

/**
 * Fetches and parses a sitemap to extract URLs.
 */
async function getSitemapUrls(sitemapUrl) {
    console.log('Fetching sitemap...');
    try {
        const response = await fetch(sitemapUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch sitemap: ${response.statusText}`);
        }
        const xmlText = await response.text();
        const result = await parseStringPromise(xmlText);
        const urls = result.urlset.url.map(urlObj => urlObj.loc[0]);
        console.log(`Found ${urls.length} URLs in sitemap.`);
        return urls;
    } catch (error) {
        console.error(`Error fetching or parsing sitemap: ${error.message}`);
        return [];
    }
}

/**
 * Determines if a URL is likely a blog post.
 */
function isBlogPostUrl(url) {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname;

    const excludedPaths = [
        '/',
        '/about',
        '/contact-us',
        '/privacy-policy',
        '/terms-of-use',
        '/baking-blog',
        '/menu',
        '/services'
    ];
    if (excludedPaths.includes(path)) return false;

    if (path.startsWith('/products/') || path.startsWith('/product-tools/') || path.startsWith('/tools/')) {
        return false;
    }
    if (path.includes('/category/') || path.includes('/tag/')) {
        return false;
    }
     // Assuming posts are top-level paths
    if (path.split('/').filter(Boolean).length === 1) {
        return true;
    }

    return false;
}

/**
 * Scrapes a single blog post page for structured data.
 */
async function scrapePostData(url) {
    console.log(`Scraping: ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch page: ${response.statusText}`);
        }
        const html = await response.text();
        const $ = cheerio.load(html);

        const postData = {};

        // Title
        postData.title = $('h1.entry-title').text().trim() || $('title').text().split('–')[0].trim() || 'Title not found';

        // Slug
        postData.slug = new URL(url).pathname.replace(/^\/|\/$/g, '');

        // Excerpt
        postData.excerpt = $('meta[name="description"]').attr('content') || '';

        // Image URL
        postData.imageUrl = $('meta[property="og:image"]').attr('content') || '';

        // Category - Defaulting as it's not standard on the page
        postData.category = 'Baking Tips';

        // Author
        postData.author = $('meta[name="author"]').attr('content') || $('a.url.fn.n').text().trim() || 'Sweetys Bakery';
        
        // Date
        const dateStr = $('meta[property="article:published_time"]').attr('content') || $('time.entry-date').text().trim();
        if (dateStr) {
            postData.date = new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        } else {
            postData.date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }

        // Content & Read Time
        const contentDiv = $('div.entry-content');
        if (contentDiv.length) {
            // Remove unwanted elements like share buttons
            contentDiv.find('.sharedaddy, .jp-relatedposts').remove();
            
            // Add font-bold to headings
            contentDiv.find('h1, h2, h3').addClass('font-bold');
            
            const text = contentDiv.text();
            const wordCount = text.split(/\s+/).length;
            postData.readTime = `${Math.round(wordCount / 200)} min`;
            
            postData.content = contentDiv.html().trim();
        } else {
            postData.readTime = '5 min';
            postData.content = '<p>Content not found.</p>';
        }

        console.log(`  > Done: ${postData.title}`);
        return postData;

    } catch (error) {
        console.error(`Error scraping ${url}: ${error.message}`);
        return null;
    }
}

/**
 * Main function to orchestrate the scraping and file generation.
 */
async function main() {
    const allUrls = await getSitemapUrls(SITEMAP_URL);
    const blogUrls = allUrls.filter(isBlogPostUrl);

    console.log(`Filtered down to ${blogUrls.length} blog post URLs.`);

    const allPostsData = [];
    for (let i = 0; i < blogUrls.length; i++) {
        const postData = await scrapePostData(blogUrls[i]);
        if (postData) {
            postData.id = i + 1;
            allPostsData.push(postData);
        }
    }
    
    // Sort posts by date, most recent first
    allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Re-assign IDs after sorting
    allPostsData.forEach((post, index) => {
        post.id = index + 1;
    });


    // --- Generate the TypeScript file content ---
    let tsContent = `
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
`;

    for (const post of allPostsData) {
        const escapedContent = (post.content || '').replace(/`/g, '\\`').replace(/\\${/g, '\\${');
        const escapedTitle = (post.title || '').replace(/`/g, '\\`');
        const escapedExcerpt = (post.excerpt || '').replace(/`/g, '\\`');

        tsContent += "\n    {\n" +
            `        id: ${post.id},\n` +
            `        slug: '${post.slug || ''}',\n` +
            `        title: \`${escapedTitle}\`,\n` +
            `        excerpt: \`${escapedExcerpt}\`,\n` +
            `        imageUrl: '${post.imageUrl || ''}',\n` +
            `        category: '${post.category || ''}',\n` +
            `        author: '${post.author || ''}',\n` +
            `        date: '${post.date || ''}',\n` +
            `        readTime: '${post.readTime || ''}',\n` +
            `        content: \`${escapedContent}\`\n` +
            "    },";
    }

    tsContent = tsContent.trim().slice(0, -1); // Remove last comma
    tsContent += `
];

export const findPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug);
};
`;

    try {
        fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf-8');
        console.log(`\nSuccessfully generated ${OUTPUT_FILE}!`);
        console.log(`Total posts written: ${allPostsData.length}`);
    } catch (error) {
        console.error(`Error writing to file: ${error.message}`);
    }
}

main().catch(console.error);
