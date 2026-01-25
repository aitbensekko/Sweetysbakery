import { BlogPost } from '../../data/blogPosts';

export function generateBreadcrumbSchema(slug: string, title: string, type: 'blog' | 'recipe') {
    const parentName = type === 'recipe' ? 'Recipes' : 'Baking Blog';
    const parentUrl = type === 'recipe' ? 'https://sweetysbakery.com/recipes' : 'https://sweetysbakery.com/blog';
    const currentUrl = type === 'recipe' ? `https://sweetysbakery.com/recipes/${slug}` : `https://sweetysbakery.com/blog/${slug}`;

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sweetysbakery.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": parentName,
                "item": parentUrl
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": currentUrl
            }
        ]
    };
}

export function generateRecipeSchema(post: BlogPost) {
    if (!post.recipeData) return null;

    const {
        prepTime,
        cookTime,
        totalTime,
        recipeYield,
        calories,
        rating,
        ingredients,
        instructions
    } = post.recipeData;

    return {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": post.title,
        "image": [
            `https://sweetysbakery.com${post.imageUrl}`
        ],
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "datePublished": new Date(post.date).toISOString().split('T')[0], // Approximation
        "description": post.excerpt,
        "prepTime": prepTime,
        "cookTime": cookTime,
        "totalTime": totalTime,
        "recipeYield": recipeYield,
        "nutrition": calories ? {
            "@type": "NutritionInformation",
            "calories": `${calories} calories`
        } : undefined,
        "aggregateRating": rating ? {
            "@type": "AggregateRating",
            "ratingValue": rating.ratingValue,
            "ratingCount": rating.ratingCount,
            "bestRating": "5",
            "worstRating": "1"
        } : undefined,
        "recipeIngredient": ingredients,
        "recipeInstructions": instructions?.map(step => ({
            "@type": "HowToStep",
            "name": step.name,
            "text": step.text
        }))
    };
}

export function generateArticleSchema(post: BlogPost) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [
            `https://sweetysbakery.com${post.imageUrl}`
        ],
        "datePublished": new Date(post.date).toISOString().split('T')[0],
        "author": [{
            "@type": "Person",
            "name": post.author,
            "url": "https://sweetysbakery.com/about"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Sweety's Bakery",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sweetysbakery.com/icon.png"
            }
        },
        "description": post.excerpt
    };
}
