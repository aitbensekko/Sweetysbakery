const fs = require('fs');
const path = require('path');

const files = [
    path.join(__dirname, '../data/seoBlogPosts.ts'),
    path.join(__dirname, '../data/additionalBlogPosts.ts')
];

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`File not found: ${file}`);
        return;
    }

    const content = fs.readFileSync(file, 'utf8');
    // Regex to find content between backticks assigned to 'content' property
    const regex = /content:\s*`([\s\S]*?)`/g;
    let match;
    let count = 0;
    let over1000 = 0;

    console.log(`\nAnalyzing ${path.basename(file)}:`);

    while ((match = regex.exec(content)) !== null) {
        const htmlContent = match[1];
        // Strip HTML tags
        const textContent = htmlContent.replace(/<[^>]*>/g, ' ');
        // Count words (split by whitespace)
        const wordCount = textContent.trim().split(/\s+/).length;

        console.log(`- Article (approx length): ${wordCount} words`);

        if (wordCount > 1000) {
            over1000++;
        }
        count++;
    }

    console.log(`Total articles: ${count}`);
    console.log(`Articles > 1000 words: ${over1000}`);
});
