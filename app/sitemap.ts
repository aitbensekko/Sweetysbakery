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

    // Affiliate Products
    const productPages = affiliateProducts.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: product.lastUpdated || currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        ...corePages,
        ...physicalRoutes,
        ...blogPages,
        ...productPages,
    ];
}
