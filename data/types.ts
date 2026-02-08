export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    content: string;
    type?: 'recipe' | 'article';
    recipeData?: {
        prepTime?: string;        // ISO 8601 Duration format (e.g., "PT15M" for 15 minutes)
        cookTime?: string;        // ISO 8601 Duration format (e.g., "PT30M" for 30 minutes)
        totalTime?: string;       // ISO 8601 Duration format (e.g., "PT45M" for 45 minutes)
        recipeYield?: string;     // e.g., "12 servings" or "1 loaf"
        calories?: number;        // Calories per serving
        rating?: {
            ratingValue: number;  // e.g., 4.5 (out of 5)
            ratingCount: number;  // e.g., 127 (number of ratings)
        };
        ingredients?: string[];
        instructions?: {
            name?: string;
            text: string;
        }[];
    };
}
