const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'affiliateProducts.ts');
const scrapedDataPath = path.join(__dirname, '..', 'data', 'scraped_products.json');

// Read existing file
let content = fs.readFileSync(productsPath, 'utf8');

// Read scraped data
const scrapedProducts = JSON.parse(fs.readFileSync(scrapedDataPath, 'utf8'));

// Find the last ID
const idMatch = content.match(/id:\s*(\d+)/g);
let lastId = 0;
if (idMatch) {
    const ids = idMatch.map(m => parseInt(m.split(':')[1].trim()));
    lastId = Math.max(...ids);
}

// Helper to generate slug
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
        .substring(0, 50); // Limit length
}

// Helper to generate excerpt
function generateExcerpt(title) {
    return title.length > 150 ? title.substring(0, 147) + '...' : title;
}

// Helper to generate placeholder review
function generateReview(title) {
    return `
            <p>The ${title} is a fantastic addition to any baker's kitchen. It offers great value and performance, making your baking tasks easier and more enjoyable.</p>
            <h3>Why We Love It</h3>
            <p>This product stands out for its quality and durability. Whether you are a beginner or a pro, you will appreciate the thoughtful design and practical features.</p>
            <p>Highly recommended for anyone looking to upgrade their baking tools!</p>
        `;
}

// Generate new entries
const newEntries = scrapedProducts.map((product, index) => {
    const id = lastId + index + 1;
    const slug = generateSlug(product.title);
    const excerpt = generateExcerpt(product.title);
    const review = generateReview(product.title);
    const affiliateLink = `https://www.amazon.com/dp/${product.asin}`;

    // Determine category based on title keywords (simple heuristic)
    let category = 'Baking Tools';
    const lowerTitle = product.title.toLowerCase();
    if (lowerTitle.includes('mat')) category = 'Baking Mats';
    else if (lowerTitle.includes('bowl')) category = 'Mixing Bowls';
    else if (lowerTitle.includes('pan') || lowerTitle.includes('sheet')) category = 'Bakeware';
    else if (lowerTitle.includes('decorat')) category = 'Decorating Tools';
    else if (lowerTitle.includes('book')) category = 'Books';

    return `
    {
        id: ${id},
        name: "${product.title.replace(/"/g, '\\"')}",
        slug: '${slug}',
        imageUrl: '${product.imageUrl}',
        category: '${category}',
        excerpt: "${excerpt.replace(/"/g, '\\"')}",
        review: \`${review}\`,
        affiliateLink: '${affiliateLink}',
        rating: 4.5,
        seoTitle: '${product.title.substring(0, 60).replace(/'/g, "\\'")}',
        seoDescription: '${excerpt.substring(0, 150).replace(/'/g, "\\'")}',
        seoKeywords: ['baking', '${category.toLowerCase()}', 'amazon'],
        imageAlt: "${product.title.substring(0, 100).replace(/"/g, '\\"')}",
        pros: ['High quality', 'Great value', 'Durable'],
        cons: ['Check size before buying']
    }`;
});

// Insert new entries before the closing bracket
const closingBracketIndex = content.lastIndexOf('];');
if (closingBracketIndex !== -1) {
    const updatedContent = content.slice(0, closingBracketIndex) +
        ',' +
        newEntries.join(',') +
        content.slice(closingBracketIndex);

    fs.writeFileSync(productsPath, updatedContent);
    console.log("Successfully added " + newEntries.length + " new products to affiliateProducts.ts");
} else {
    console.error('Could not find closing bracket in affiliateProducts.ts');
}
