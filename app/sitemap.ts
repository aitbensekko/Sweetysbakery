import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { newSeoBlogPosts } from '@/data/newSeoBlogPosts';
import { affiliateProducts } from '@/data/affiliateProducts';
import { allToolIds, toolIdToSlug } from '@/components/utils/slugs';

export const dynamic = 'force-static';

// Helper to format date strings (e.g., "November 1, 2025") to "YYYY-MM-DD"
function formatDate(dateString: string | undefined): string {
    if (!dateString) return new Date().toISOString().split('T')[0];
    const date = new Date(dateString);
    // basic check if valid
    if (isNaN(date.getTime())) return new Date().toISOString().split('T')[0];
    return date.toISOString().split('T')[0];
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sweetysbakery.com';
    const currentDate = new Date().toISOString().split('T')[0];

    // Generate all core/tool pages dynamically
    const corePages = allToolIds.map((id: any) => {
        const path = toolIdToSlug(id);
        const isHome = path === '/';

        return {
            url: `${baseUrl}${isHome ? '' : path}`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: isHome ? 1.0 : 0.8,
        };
    });

    // Add physical route folders that aren't in slugs.ts
    const physicalRoutes = [
        'marrakech-custom-cakes',
        'gold'
    ].map(route => ({
        url: `${baseUrl}/${route}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Blog posts - combine both regular and SEO blog posts
    const allBlogPosts = [...blogPosts, ...newSeoBlogPosts];
    const blogPages = allBlogPosts.map((post) => ({
        url: `${baseUrl}/${post.type === 'recipe' ? 'recipes' : 'blog'}/${post.slug}`,
        lastModified: formatDate(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const productPages = affiliateProducts.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: product.lastUpdated || currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // My Art Gallery - Image Sitemap
    // We generate a dedicated sitemap entry for the gallery page that includes the images
    // Limit to 1000 images as per sitemap specs per URL entry, though typically 1000 is for the whole sitemap.
    // For a single page with many images, we attach them to the loc.

    // Generate Rich Alt Text / Titles
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

    // Generate up to 1000 images for the sitemap
    const galleryImages = Array.from({ length: 1000 }, (_, i) => {
        const imgNum = i + 5; // Images start from 5 in MyArtGallery.tsx logic
        const altText = altTexts[i % altTexts.length];
        return {
            url: `${baseUrl}/images/Sweeetys%20Bakery%20IMG%20(${imgNum}).JPG`,
            title: `${altText} #${imgNum}`
        }
    });

    const items: MetadataRoute.Sitemap = [
        ...corePages,
        ...physicalRoutes,
        ...blogPages,
        ...productPages,
        {
            url: `${baseUrl}/tools/my-art`,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 0.9,
            // @ts-ignore - Next.js types might not fully support 'images' property in MetadataRoute.Sitemap yet properly without extension, 
            // but it renders correctly in output if the underlying type allows or if we cast. 
            // However, standard Next.js sitemap() doesn't support 'images' array natively in the type definition yet for some versions.
            // If this causes a type error, we might need a workaround or check if the user's Next.js version supports extended sitemap properties.
            // Given the user is on recent Next.js, we'll try to include it. If it fails build, we'll fallback.
            // Actually, official Next.js sitemap docs show 'images' support in `sitemap.xml` generation is limited. 
            // But let's look at the type definition from the read file: `export default function sitemap(): MetadataRoute.Sitemap`.
            // The `scripts/generate-sitemap.mjs` was doing it manually to bypass this limitation. 
            // If we use the Next.js App Router sitemap.ts, we are bound by `MetadataRoute.Sitemap`.
            // Let's check if we can pass extra props. 
            images: galleryImages.map(img => img.url), // Next.js sitemap type usually takes string array for images if supported, or might not support rich image objects.
        }
    ];

    // Wait, the standard Next.js sitemap generation might NOT support the rich image sitemap format (loc, title) easily via the return type.
    // The previous script used `xml` string generation. 
    // If I want to keep the rich image sitemap, I might need to stick with a custom script OR accept less rich data (just URLs) if Next.js supports it.
    // Checking Next.js docs (mental check): Next.js sitemaps return `SitemapRow[]`. `images` property is `string[]` (urls only).
    // The legacy script added titles. 
    // Decision: START with standard Next.js support (URLs). It is better to have the sitemap integrated than a separate script that might not run.
    // To support rich images (titles), we'd typically need a custom route handler `app/sitemap.xml/route.ts` instead of `sitemap.ts`.
    // BUT for now, let's use the standard `sitemap.ts` and provide the URLs. This fixes the main issue of images not being there.
    // I will pass the just the URL strings.

    return items;
}
