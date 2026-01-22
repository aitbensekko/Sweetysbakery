import { Metadata } from 'next';
import { MainContentWrapper } from '../../components/MainContentWrapper';
import { slugToToolId } from '../../components/utils/slugs';
import { findPostBySlug } from '../../data/blogPosts';
import { getToolSeoData } from '../../components/utils/seo';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
    const { allToolIds, toolIdToSlug } = await import('../../components/utils/slugs');

    // Explicitly exclude routes that have their own folder handlers
    const excludedPrefixes = [
        '/tools/', '/blog', '/recipes', '/products', '/coffee-shop-directory',
        '/about', '/auth', '/baking-ebooks', '/dashboard', '/gold',
        '/login', '/marrakech-custom-cakes', '/signup', '/tool-suggestions'
    ];

    const baseParams = allToolIds
        .map(id => {
            const path = toolIdToSlug(id);

            if (path === '/') return null; // Handled by app/page.tsx

            // If path starts with any excluded prefix, skip it
            if (excludedPrefixes.some(prefix => path.startsWith(prefix))) {
                return null;
            }

            // Return the segments for [...slug]
            return { slug: path.split('/').filter(Boolean) };
        })
        .filter(Boolean);

    // Add legacy blog routes (flat slugs)
    const { blogPosts } = await import('../../data/blogPosts');
    const legacyBlogParams = blogPosts.map(post => ({
        slug: [post.slug]
    }));

    // Add recipe routes (/recipes/[slug])
    const recipeParams = blogPosts
        .filter(post => post.type === 'recipe')
        .map(post => ({
            slug: ['recipes', post.slug]
        }));

    // Combine and deduplicate
    return [...baseParams, ...legacyBlogParams, ...recipeParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const path = '/' + slug.join('/');
    const toolId = slugToToolId(path);

    if (toolId) {
        const seoData = getToolSeoData(toolId);
        return {
            title: seoData.title,
            description: seoData.description,
            keywords: seoData.keywords,
            alternates: {
                canonical: `https://sweetysbakery.com${path}/`,
            },
        };
    }

    // Handle /blog/[slug]
    if (slug[0] === 'blog' && slug.length === 2) {
        const post = findPostBySlug(slug[1]);
        if (post) {
            return {
                title: `${post.title} | Sweety's Bakery Blog`,
                description: post.excerpt,
                keywords: [post.category, 'baking blog'],
                alternates: {
                    canonical: `https://sweetysbakery.com/blog/${slug[1]}/`,
                },
            };
        }
    }

    // Handle /recipes/[slug]
    if (slug[0] === 'recipes' && slug.length === 2) {
        const post = findPostBySlug(slug[1]);
        if (post && post.type === 'recipe') {
            return {
                title: `${post.title} | Sweety's Bakery Blog`,
                description: post.excerpt,
                keywords: [post.category, 'baking blog', 'recipe'],
                alternates: {
                    canonical: `https://sweetysbakery.com/recipes/${slug[1]}/`,
                },
            };
        }
    }

    // Handle /recipes (Recipe Index)
    if (slug.length === 1 && slug[0] === 'recipes') {
        return {
            title: "Recipe Index | Sweety's Bakery",
            description: "Browse our collection of delicious baking recipes.",
            keywords: ['recipes', 'baking', 'desserts'],
            alternates: {
                canonical: `https://sweetysbakery.com/recipes/`,
            },
        };
    }

    // Handle legacy /slug (for articles or old links)
    if (slug.length === 1) {
        const post = findPostBySlug(slug[0]);
        if (post) {
            return {
                title: `${post.title} | Sweety's Bakery Blog`,
                description: post.excerpt,
                keywords: [post.category, 'baking blog'],
                alternates: {
                    canonical: `https://sweetysbakery.com/${slug[0]}/`,
                },
            };
        }
    }

    return {};
}

export default async function CatchAllPage({ params }: Props) {
    const { slug } = await params;
    const path = '/' + slug.join('/');
    const toolId = slugToToolId(path);

    if (toolId) {
        return (
            <MainContentWrapper activeTool={toolId} activePost={null} />
        );
    }



    // Handle /blog/[slug]
    if (slug[0] === 'blog' && slug.length === 2) {
        const post = findPostBySlug(slug[1]);
        if (post) {
            const activeTool = post.type === 'recipe' ? 'recipe-index' : 'baking-blog';
            const jsonLd = generateArticleSchema(post);
            return (
                <>
                    {jsonLd && (
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                        />
                    )}
                    <MainContentWrapper activeTool={activeTool} activePost={post} />
                </>
            );
        }
    }

    // Handle /recipes/[slug]
    if (slug[0] === 'recipes' && slug.length === 2) {
        const post = findPostBySlug(slug[1]);
        if (post && post.type === 'recipe') {
            const jsonLd = generateRecipeSchema(post);
            return (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                    <MainContentWrapper activeTool="recipe-index" activePost={post} />
                </>
            );
        }
    }

    // Handle /recipes (Recipe Index)
    if (slug.length === 1 && slug[0] === 'recipes') {
        return (
            <MainContentWrapper activeTool="recipe-index" activePost={null} />
        );
    }

    // Handle legacy /slug
    if (slug.length === 1) {
        const post = findPostBySlug(slug[0]);
        if (post) {
            const activeTool = post.type === 'recipe' ? 'recipe-index' : 'baking-blog';
            // Also inject schema for legacy routes if it is a recipe
            if (post.type === 'recipe') {
                const jsonLd = generateRecipeSchema(post);
                return (
                    <>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                        />
                        <MainContentWrapper activeTool={activeTool} activePost={post} />
                    </>
                )
            }
            return (
                <MainContentWrapper activeTool={activeTool} activePost={post} />
            );
        }
    }

    return notFound();
}

function generateRecipeSchema(post: import('../../data/blogPosts').BlogPost) {
    // Basic validations to ensure we have necessary data
    if (!post.recipeData) return null;

    return {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: post.title,
        image: [`https://sweetysbakery.com${post.imageUrl}`],
        author: {
            '@type': 'Person',
            name: post.author || "Sweety's Bakery",
        },
        datePublished: new Date(post.date).toISOString(),
        description: post.excerpt,
        recipeCategory: post.category,
        keywords: `${post.category}, baking, dessert, ${post.title.split('|')[0].trim()}`,
        prepTime: post.recipeData.prepTime,
        cookTime: post.recipeData.cookTime,
        totalTime: post.recipeData.totalTime,
        recipeYield: post.recipeData.recipeYield,
        nutrition: post.recipeData.calories ? {
            '@type': 'NutritionInformation',
            calories: `${post.recipeData.calories} calories`
        } : undefined,
        aggregateRating: post.recipeData.rating ? {
            '@type': 'AggregateRating',
            ratingValue: post.recipeData.rating.ratingValue,
            ratingCount: post.recipeData.rating.ratingCount
        } : undefined,
        recipeIngredient: post.recipeData.ingredients,
        recipeInstructions: post.recipeData.instructions ? post.recipeData.instructions.map(step => ({
            '@type': 'HowToStep',
            name: step.name,
            text: step.text
        })) : undefined,
    };
}

function generateArticleSchema(post: import('../../data/blogPosts').BlogPost) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        image: [`https://sweetysbakery.com${post.imageUrl}`],
        author: {
            '@type': 'Organization',
            name: post.author || "Sweety's Bakery",
            url: "https://sweetysbakery.com"
        },
        datePublished: new Date(post.date).toISOString(),
        description: post.excerpt,
        articleSection: post.category,
        publisher: {
            '@type': 'Organization',
            name: "Sweety's Bakery",
            logo: {
                '@type': 'ImageObject',
                url: "https://sweetysbakery.com/icon.png"
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://sweetysbakery.com/blog/${post.slug}`
        }
    };
}
