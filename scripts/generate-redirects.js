import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map of old URLs to new URLs
const redirects = {
    'dough-hydration-calculator': 'dough-hydration',
    'cake-pricing-calculator': 'cake-pricing',
    'cost-per-recipe-calculator': 'cost-per-recipe',
    'protein-macro-calculator': 'protein-macro',
    'dough-temperature-calculator': 'dough-temperature',
    'mortgage-payoff-calculator': 'mortgage-payoff',
    'oven-temperature-converter': 'oven-temp-converter',
    'temperature-converter': 'temp-converter',
    'mortgage-calculator': 'mortgage-affordability',
};

// Generate redirect HTML files
Object.entries(redirects).forEach(([oldSlug, newSlug]) => {
    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=/tools/${newSlug}/">
    <link rel="canonical" href="https://sweetysbakery.com/tools/${newSlug}/">
    <title>Redirecting...</title>
    <script>
        window.location.href = "/tools/${newSlug}/";
    </script>
</head>
<body>
    <p>Redirecting to <a href="/tools/${newSlug}/">the correct page</a>...</p>
</body>
</html>`;

    const dirPath = path.join(__dirname, '..', 'out', 'tools', oldSlug);
    const filePath = path.join(dirPath, 'index.html');

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the redirect file
    fs.writeFileSync(filePath, redirectHtml);
    console.log(`✅ Created redirect: /tools/${oldSlug}/ → /tools/${newSlug}/`);
});

console.log('\n✅ All redirect pages generated successfully!');
