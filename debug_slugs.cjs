const fs = require('fs');
const path = require('path');

const blogPostsPath = path.join('C:', 'Users', 'Sara', 'Desktop', 'TEST', 'TEST3', 'data', 'blogPosts.tsx');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');

const slugs = [];
const objectBlocks = blogPostsContent.split('    {');
objectBlocks.forEach(block => {
    const slugMatch = block.match(/slug:\s*'([^']+)'/);
    if (slugMatch) {
        slugs.push(slugMatch[1]);
    }
});

console.log("Slugs found:", slugs);
