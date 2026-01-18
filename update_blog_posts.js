const fs = require('fs');
const path = require('path');

const blogPostsPath = path.join('C:', 'Users', 'Sara', 'Desktop', 'TEST', 'TEST3', 'data', 'blogPosts.tsx');
const galleryPath = path.join('C:', 'Users', 'Sara', 'Desktop', 'TEST', 'TEST3', 'components', 'tools', 'MyArtGallery.tsx');

// Read Gallery to get images
let galleryContent = fs.readFileSync(galleryPath, 'utf8');
const imageMatch = galleryContent.match(/export const allImages = \[([\s\S]*?)\];/);
if (!imageMatch) {
    console.error("Could not find allImages in MyArtGallery.tsx");
    process.exit(1);
}
const images = imageMatch[1]
    .split(',')
    .map(line => line.trim().replace(/['"]/g, ''))
    .filter(line => line.length > 0);

console.log(`Found ${images.length} images.`);

// Read Blog Posts
let blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');

// We will iterate through the file and replace content
// Regex to find each blog post object
// We assume standard formatting as seen in the file
const postRegex = /\{\s*id:\s*(\d+),[\s\S]*?content:\s*`([\s\S]*?)`\s*\}/g;

let updatedContent = blogPostsContent.replace(postRegex, (match, idStr, content) => {
    const id = parseInt(idStr);

    // Extract H2 for title
    const h2Match = content.match(/<h2>(.*?)<\/h2>/);
    let newTitle = h2Match ? h2Match[1] : null;

    // Clean up title (remove HTML tags if any inside H2, though unlikely for simple text)
    if (newTitle) {
        newTitle = newTitle.replace(/<[^>]*>/g, '');
        // Escape backticks if any
        newTitle = newTitle.replace(/`/g, '\\`');
    }

    // Select image
    const imageIndex = (id - 1) % images.length;
    const newImage = images[imageIndex];

    // Replace title
    let newBlock = match;
    if (newTitle) {
        // Look for title: `...`
        newBlock = newBlock.replace(/title:\s*`[^`]*`/, `title: \`${newTitle} | Sweety's Bakery\``);
    }

    // Replace imageUrl
    // Look for imageUrl: '...'
    newBlock = newBlock.replace(/imageUrl:\s*'[^']*'/, `imageUrl: '${newImage}'`);

    return newBlock;
});

fs.writeFileSync(blogPostsPath, updatedContent, 'utf8');
console.log("Successfully updated blog posts.");
