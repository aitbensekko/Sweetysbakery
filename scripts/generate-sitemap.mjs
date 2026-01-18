import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://sweetysbakery.com';

function getToolUrls() {
    const slugsPath = path.join(process.cwd(), 'components/utils/slugs.ts');
    const content = fs.readFileSync(slugsPath, 'utf8');
    const urls = [];

    // Match case 'tool-id': return '/path';
    const regex = /case\s+'([^']+)':\s*return\s+'([^']+)';/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        const path = match[2];
        if (path !== '/' && !path.startsWith('http')) {
            urls.push({
                loc: `${DOMAIN}${path}`,
                changefreq: 'weekly',
                priority: '0.8',
                images: [] // Tools usually don't have a specific main image in this context, but we keep structure consistent
            });
        }
    }

    // Add home manually with higher priority
    urls.push({
        loc: DOMAIN + '/',
        changefreq: 'daily',
        priority: '1.0',
        images: []
    });

    console.log(`Found ${urls.length} tool/static pages`);
    return urls;
}

function getProductUrls() {
    const productsPath = path.join(process.cwd(), 'data/affiliateProducts.ts');
    const content = fs.readFileSync(productsPath, 'utf8');
    const urls = [];

    // We need to parse objects. Since it's unstructured text, valid regex is tricky for nested data.
    // However, the file structure seems consistent.
    // We will use a regex that captures the block of a product object approx.
    // Assuming format: { ... slug: '...', ... imageUrl: '...', ... }

    // Simplistic parser: split by "{" to get blocks, then regex each block
    const blocks = content.split('    {'); // primitive splitting based on indentation

    for (const block of blocks) {
        const slugMatch = /slug:\s*['"`]([^'"`]+)['"`]/.exec(block);
        const imageMatch = /imageUrl:\s*['"`]([^'"`]+)['"`]/.exec(block);
        const nameMatch = /name:\s*['"`]([^'"`]+)['"`]/.exec(block); // For image title/caption relative to product

        if (slugMatch) {
            const img = imageMatch ? imageMatch[1] : null;
            const name = nameMatch ? nameMatch[1] : '';

            const images = [];
            if (img) {
                // specific correction for relative paths or absolute
                // If it starts with /, append domain. If http, keep as is.
                // Google Image Sitemap requires absolute URL.
                const imgUrl = img.startsWith('http') ? img : `${DOMAIN}${img}`;
                images.push({
                    loc: imgUrl,
                    title: name
                });
            }

            urls.push({
                loc: `${DOMAIN}/products/${slugMatch[1]}`,
                changefreq: 'monthly',
                priority: '0.7',
                images: images
            });
        }
    }

    console.log(`Found ${urls.length} product pages`);
    return urls;
}

function getBlogUrls() {
    const blogPath = path.join(process.cwd(), 'data/blogPosts.tsx');
    const content = fs.readFileSync(blogPath, 'utf8');
    const urls = [];

    // Similar split strategy
    const blocks = content.split('    {');

    for (const block of blocks) {
        const slugMatch = /slug:\s*['"`]([^'"`]+)['"`]/.exec(block);
        const typeMatch = /type:\s*['"`]([^'"`]+)['"`]/.exec(block);
        const imageMatch = /image:\s*['"`]([^'"`]+)['"`]/.exec(block);
        const titleMatch = /title:\s*['"`]([^'"`]+)['"`]/.exec(block);

        if (slugMatch && typeMatch) {
            const slug = slugMatch[1];
            const type = typeMatch[1];
            const prefix = type === 'recipe' ? '/recipes/' : '/blog/';

            const images = [];
            if (imageMatch) {
                const img = imageMatch[1];
                const imgUrl = img.startsWith('http') ? img : `${DOMAIN}${img}`;
                images.push({
                    loc: imgUrl,
                    title: titleMatch ? titleMatch[1] : ''
                });
            }

            urls.push({
                loc: `${DOMAIN}${prefix}${slug}`,
                changefreq: 'monthly',
                priority: '0.7',
                images: images
            });
        }
    }

    console.log(`Found ${urls.length} blog/recipe pages`);
    return urls;
}

function getMyArtUrl() {
    // Rich Alt Text / Titles for better SEO matching the UI component
    const altTexts = [
        "Custom cake design - Wedding cake, birthday cake, cake decorating ideas",
        "Edible art cake - Sculptural cake design, 3D cake, artistic dessert",
        "Professional cake decorating - Custom birthday cake, celebration cake",
        "Wedding cake design - Elegant wedding cake, custom cake, cake gallery",
        "Birthday cake ideas - Custom birthday cake, decorated cake, cake inspiration",
        "Cake decorating inspiration - Unique cake design, artistic cake, edible masterpiece",
        "3D sculptural cake - Modern cake design, geometric cake, gravity-defying cake",
        "Custom dessert art - Hand-painted cake, metallic cake, textured buttercream",
        "Specialty cake design - Anniversary cake, celebration cake, custom order",
        "Artisan cake creation - Fondant cake, buttercream cake, cake art",
        "Gourmet cake design - Premium cake, luxury dessert, custom bakery",
        "Creative cake decorating - Innovative cake design, trendy cake, modern pastry art"
    ];

    // Generate My Art Images (Limit 1000 per page as per Google specs)
    // Images 5 to 1151 exist, we take 5 to 1004 to stay <= 1000
    const myArtImages = Array.from({ length: 1000 }, (_, i) => {
        const imgNum = i + 5;
        // Hostinger image path format: /images/Sweeetys Bakery IMG (X).JPG
        // We must encode space as %20 for valid XML/URL

        // Use rotating alt text based on index
        const altText = altTexts[i % altTexts.length];

        return {
            loc: `${DOMAIN}/images/Sweeetys%20Bakery%20IMG%20(${imgNum}).JPG`,
            title: `${altText} #${imgNum}` // Combine rich text with unique ID
        };
    });

    return [{
        loc: `${DOMAIN}/tools/my-art`,
        changefreq: 'daily',
        priority: '0.9', // High priority for this gallery
        images: myArtImages
    }];
}

function generateSitemap() {
    console.log('Starting sitemap generation...');

    const toolUrls = getToolUrls();
    const productUrls = getProductUrls();
    const blogUrls = getBlogUrls();
    const myArtUrl = getMyArtUrl();

    // myArtUrl comes last to overwrite any generic entry from toolUrls
    const allUrls = [...toolUrls, ...productUrls, ...blogUrls, ...myArtUrl];

    // Remove duplicates based on loc
    const uniqueMap = new Map();
    allUrls.forEach(item => uniqueMap.set(item.loc, item));
    const uniqueUrls = Array.from(uniqueMap.values());

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${uniqueUrls.map(url => {
        let imageStr = '';
        if (url.images && url.images.length > 0) {
            imageStr = url.images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      ${img.title ? `<image:title><![CDATA[${img.title}]]></image:title>` : ''}
    </image:image>`).join('');
        }

        return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${imageStr}
  </url>`;
    }).join('\n')}
</urlset>`;

    const outDir = path.join(process.cwd(), 'out');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
    console.log(`✅ Generated sitemap with ${uniqueUrls.length} unique URLs in out/sitemap.xml`);
}

generateSitemap();
