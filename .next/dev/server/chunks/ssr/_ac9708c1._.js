module.exports = [
"[project]/components/utils/slugs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allToolIds",
    ()=>allToolIds,
    "slugToToolId",
    ()=>slugToToolId,
    "toolIdToSlug",
    ()=>toolIdToSlug
]);
const toolIdToSlug = (toolId)=>{
    switch(toolId){
        case 'home':
            return '/';
        case 'products':
            return '/products';
        case 'baking-sources':
            return '/tools/baking-sources';
        case 'all-tools':
            return '/tools/all-tools';
        case 'bakers-percentage':
            return '/tools/bakers-percentage';
        case 'baking-pan-converter':
            return '/tools/baking-pan-converter';
        case 'recipe-scaler':
            return '/tools/recipe-scaler';
        case 'measurement-converter':
            return '/tools/measurement-converter';
        case 'baking-blog':
            return '/blog';
        case 'recipe-index':
            return '/recipes';
        case 'about':
            return '/about';
        case 'contact-us':
            return '/contact-us';
        case 'privacy-policy':
            return '/privacy-policy';
        case 'terms-of-use':
            return '/terms-of-use';
        case 'disclaimer':
            return '/disclaimer';
        case 'shop-directory':
            return '/coffee-shop-directory';
        case 'allergen-guide':
            return '/tools/allergen-guide';
        case 'amortization-calculator':
            return '/tools/amortization-calculator';
        case 'baker-schedule':
            return '/tools/baker-schedule';
        case 'baking-bucket-list':
            return '/tools/baking-bucket-list';
        case 'baking-tutorials':
            return '/tools/baking-tutorials';
        case 'bmi-calculator':
            return '/tools/bmi-calculator';
        case 'bmr-calculator':
            return '/tools/bmr-calculator';
        case 'body-fat-calculator':
            return '/tools/body-fat-calculator';
        case 'buttercream-calculator':
            return '/tools/buttercream-calculator';
        case 'butterfat-converter':
            return '/tools/butterfat-converter';
        case 'cake-pricing':
            return '/tools/cake-pricing';
        case 'calorie-calculator':
            return '/tools/calorie-calculator';
        case 'cost-per-recipe':
            return '/tools/cost-per-recipe';
        case 'date-calculator':
            return '/tools/date-calculator';
        case 'dough-temperature':
            return '/tools/dough-temperature';
        case 'dessert-calculator':
            return '/tools/dessert-calculator';
        case 'digital-notebook':
            return '/tools/digital-notebook';
        case 'dough-hydration':
            return '/tools/dough-hydration';
        case 'drinks-videos':
            return '/tools/drinks-videos';
        case 'essential-recipes':
            return '/essential-recipes';
        case 'flavor-pairing-guide':
            return '/tools/flavor-pairing-guide';
        case 'fondant-calculator':
            return '/tools/fondant-calculator';
        case 'frosting-color-mixer':
            return '/tools/frosting-color-mixer';
        case 'ganache-calculator':
            return '/tools/ganache-calculator';
        case 'hydration-converter':
            return '/tools/hydration-converter';
        case 'ideal-weight-calculator':
            return '/tools/ideal-weight-calculator';
        case 'ingredient-glossary':
            return '/tools/ingredient-glossary';
        case 'ingredient-substitutions':
            return '/tools/ingredient-substitutions';
        case 'inventory-management':
            return '/tools/inventory-management';
        case 'macaron-troubleshooting':
            return '/tools/macaron-troubleshooting';
        case 'management-dashboard':
            return '/tools/management-dashboard';
        case 'mortgage-affordability':
            return '/tools/mortgage-affordability';
        case 'mortgage-payoff':
            return '/tools/mortgage-payoff';
        case 'my-art':
            return '/tools/my-art';
        case 'multiple-timer':
            return '/tools/multiple-timer';
        case 'order-management':
            return '/tools/order-management';
        case 'oven-temp-converter':
            return '/tools/oven-temp-converter';
        case 'pace-calculator':
            return '/tools/pace-calculator';
        case 'payment-calculator':
            return '/tools/payment-calculator';
        case 'percentage-calculator':
            return '/tools/percentage-calculator';
        case 'pregnancy-calculator':
            return '/tools/pregnancy-calculator';
        case 'protein-macro':
            return '/tools/protein-macro';
        case 'recipe-box':
            return '/tools/recipe-box';
        case 'relaxing-videos':
            return '/tools/relaxing-videos';
        case 'shopping-list':
            return '/tools/shopping-list';
        case 'simple-calculator':
            return '/tools/simple-calculator';
        case 'stopwatch':
            return '/tools/stopwatch';
        case 'sweetener-converter':
            return '/tools/sweetener-converter';
        case 'temperature-converter':
            return '/tools/temperature-converter';
        case 'time-calculator':
            return '/tools/time-calculator';
        case 'tip-calculator':
            return '/tools/tip-calculator';
        case 'volume-converter':
            return '/tools/volume-converter';
        case 'weight-converter':
            return '/tools/weight-converter';
        case 'weight-loss-calculator':
            return '/tools/weight-loss-calculator';
        case 'yeast-converter':
            return '/tools/yeast-converter';
        case 'age-calculator':
            return '/tools/age-calculator';
        case 'investment-calculator':
            return '/tools/investment-calculator';
        case 'custom-cake-order-builder':
            return '/tools/custom-cake-order-builder';
        case 'recipe-scaling-costing':
            return '/tools/recipe-scaling-costing';
        case 'cake-design-creator':
            return '/tools/cake-design-creator';
        case 'bakery-order-planner':
            return '/tools/bakery-order-planner';
        case 'label-generator':
            return '/tools/label-generator';
        case 'baking-ebooks':
            return '/baking-ebooks';
        case 'premium-templates':
            return '/premium-templates';
        case 'shop-directory':
            return '/coffee-shop-directory';
        case 'kitchenaid-reviews':
            return '/tools/kitchenaid-reviews';
        // Categories
        case 'core':
            return '/tools/core';
        case 'converters':
            return '/tools/converters';
        case 'management':
            return '/tools/management';
        case 'utilities':
            return '/tools/utilities';
        case 'kitchen':
            return '/tools/kitchen';
        case 'family':
            return '/tools/family';
        case 'financial':
            return '/tools/financial';
        case 'resources':
            return '/tools/resources';
        case 'beverages':
            return '/tools/beverages';
        default:
            return '/';
    }
};
const allToolIds = [
    'home',
    'products',
    'bakers-percentage',
    'baking-pan-converter',
    'baking-sources',
    'all-tools',
    'recipe-scaler',
    'measurement-converter',
    'baking-blog',
    'recipe-index',
    'about',
    'contact-us',
    'privacy-policy',
    'terms-of-use',
    'allergen-guide',
    'amortization-calculator',
    'baker-schedule',
    'baking-bucket-list',
    'baking-tutorials',
    'dough-temperature',
    'my-art',
    'bmi-calculator',
    'bmr-calculator',
    'body-fat-calculator',
    'buttercream-calculator',
    'butterfat-converter',
    'mortgage-payoff',
    'cake-pricing',
    'calorie-calculator',
    'cost-per-recipe',
    'date-calculator',
    'dessert-calculator',
    'mortgage-affordability',
    'digital-notebook',
    'dough-hydration',
    'drinks-videos',
    'essential-recipes',
    'flavor-pairing-guide',
    'fondant-calculator',
    'frosting-color-mixer',
    'ganache-calculator',
    'hydration-converter',
    'ideal-weight-calculator',
    'ingredient-glossary',
    'ingredient-substitutions',
    'inventory-management',
    'macaron-troubleshooting',
    'management-dashboard',
    'multiple-timer',
    'order-management',
    'oven-temp-converter',
    'pace-calculator',
    'payment-calculator',
    'percentage-calculator',
    'pregnancy-calculator',
    'protein-macro',
    'recipe-box',
    'relaxing-videos',
    'shopping-list',
    'simple-calculator',
    'stopwatch',
    'sweetener-converter',
    'temperature-converter',
    'time-calculator',
    'tip-calculator',
    'volume-converter',
    'weight-converter',
    'weight-loss-calculator',
    'yeast-converter',
    'age-calculator',
    'investment-calculator',
    'custom-cake-order-builder',
    'recipe-scaling-costing',
    'cake-design-creator',
    'disclaimer',
    'shop-directory',
    'baking-ebooks',
    'premium-templates',
    'bakery-order-planner',
    'label-generator',
    'kitchenaid-reviews',
    // Categories
    'core',
    'converters',
    'management',
    'utilities',
    'kitchen',
    'family',
    'financial',
    'resources',
    'beverages'
];
const slugToToolId = (slug)=>{
    if (slug === '/') return 'home';
    if (slug === '/blog') return 'baking-blog';
    if (slug === '/recipes') return 'recipe-index';
    if (slug === '/about') return 'about';
    if (slug === '/contact-us') return 'contact-us';
    if (slug === '/privacy-policy') return 'privacy-policy';
    if (slug === '/terms-of-use') return 'terms-of-use';
    if (slug === '/disclaimer') return 'disclaimer';
    if (slug === '/baking-ebooks') return 'baking-ebooks';
    if (slug === '/premium-templates') return 'premium-templates';
    if (slug === '/bakery-directory' || slug === '/coffee-shop-directory') return 'shop-directory';
    if (slug === '/essential-recipes' || slug.startsWith('/essential-recipes/')) return 'essential-recipes';
    const toolId = slug.replace('/tools/', '');
    if (allToolIds.includes(toolId)) {
        return toolId;
    }
    return undefined;
};
}),
"[project]/components/utils/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToolSeoData",
    ()=>getToolSeoData,
    "updateSchema",
    ()=>updateSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/slugs.ts [app-rsc] (ecmascript)");
;
// Helper function to generate a canonical URL
const getCanonicalUrl = (path)=>`https://sweetysbakery.com${path}`;
// SEO data for each tool/page
const seoDataMap = {
    'home': {
        title: "Free Baking Calculators & Tools | Cake Pricing, Recipe Scaler & More | Sweety's Bakery",
        description: "The ultimate collection of free baking tools and calculators. Price cakes for profit, scale recipes instantly, convert measurements, and master sourdough with our professional-grade bakery tools.",
        keywords: [
            "free baking calculators",
            "cake pricing calculator",
            "recipe scaler",
            "baking conversion chart",
            "sourdough hydration calculator",
            "macaron troubleshooting guide",
            "bakery business tools",
            "cake cost calculator",
            "pastry chef tools",
            "baking math",
            "dough calculator",
            "baking",
            "baking recipes",
            "easy baking recipes",
            "baking for beginners",
            "baking soda",
            "baking powder",
            "gluten-free baking",
            "cake recipes",
            "vanilla cake",
            "chocolate cake",
            "red velvet cake",
            "cupcakes recipe",
            "frosting recipe",
            "cookie recipes",
            "chocolate chip cookies",
            "sugar cookies",
            "peanut butter cookies",
            "oatmeal cookies",
            "no-bake cookies",
            "cookie dough recipe",
            "soft cookie recipe",
            "brownie recipe",
            "fudgy brownies",
            "easy brownies",
            "blondies recipe",
            "brownie mix hacks",
            "bread recipes",
            "banana bread",
            "zucchini bread",
            "pumpkin bread",
            "sourdough bread",
            "quick bread recipes",
            "cinnamon rolls",
            "cheesecake recipe",
            "apple pie",
            "muffins recipe",
            "pastries",
            "desserts",
            "baking tools",
            "baking calculators",
            "baker's percentage"
        ],
        imageUrl: getCanonicalUrl('/placeholder-image.jpg')
    },
    'bakers-percentage': {
        title: "Baker's Percentage Calculator | Sweety's Bakery",
        description: "Easily calculate ingredient weights using baker's percentages. Ensure consistency and scalability for any recipe.",
        keywords: [
            "baker's percentage",
            "dough calculator",
            "recipe scaling",
            "baking math"
        ],
        imageUrl: getCanonicalUrl('/calculators/bakers-percentage.jpg')
    },
    'baking-pan-converter': {
        title: "Baking Pan Converter | Sweety's Bakery",
        description: "Convert recipes between different pan sizes and shapes effortlessly. Adjust baking times and temperatures for perfect results.",
        keywords: [
            "pan converter",
            "baking pan size",
            "recipe conversion",
            "cake pan calculator"
        ],
        imageUrl: getCanonicalUrl('/converters/baking-pan.jpg')
    },
    'recipe-scaler': {
        title: "Recipe Scaler | Sweety's Bakery",
        description: "Scale any recipe up or down with precision. Perfect for adjusting serving sizes for parties, small batches, or professional needs.",
        keywords: [
            "recipe scaler",
            "ingredient scaling",
            "baking adjustments",
            "quantity converter"
        ],
        imageUrl: getCanonicalUrl('/scalers/recipe-scaler.jpg')
    },
    'measurement-converter': {
        title: "Baking Measurement Converter | Sweety's Bakery",
        description: "Convert between weight (grams, ounces, pounds) and volume (cups, ml, tsp, tbsp) for all your baking ingredients.",
        keywords: [
            "measurement converter",
            "baking conversion",
            "grams to cups",
            "volume to weight"
        ],
        imageUrl: getCanonicalUrl('/converters/measurement.jpg')
    },
    'baking-blog': {
        title: "Baking Blog | Sweety's Bakery",
        description: "Explore baking tips, delicious recipes, and in-depth tutorials on the Sweety's Bakery blog. Your go-to resource for all things baking.",
        keywords: [
            "baking blog",
            "pastry recipes",
            "baking tutorials",
            "dessert ideas"
        ],
        imageUrl: getCanonicalUrl('/blog/main-image.jpg')
    },
    'recipe-index': {
        title: "Recipe Index | Sweety's Bakery",
        description: "Browse our complete collection of baking recipes, from cookies and cakes to breads and pastries. Filter by category to find your next baking project.",
        keywords: [
            "recipe index",
            "baking recipes",
            "cookie recipes",
            "cake recipes",
            "bread recipes"
        ],
        imageUrl: getCanonicalUrl('/images/recipe-index-seo.png')
    },
    'investment-calculator': {
        title: "Investment Calculator | Sweety's Bakery",
        description: "Calculate the future value of your investments with our free and easy-to-use investment calculator.",
        keywords: [
            "investment calculator",
            "future value",
            "compound interest",
            "investment return"
        ],
        imageUrl: getCanonicalUrl('/calculators/investment-calculator.jpg')
    },
    'baking-ebooks': {
        title: "Popular Baking Ebooks | Sweety's Bakery",
        description: "Discover our curated collection of the best baking ebooks. From sourdough guides to cookie cookbooks, find your next baking inspiration.",
        keywords: [
            "baking ebooks",
            "baking cookbooks",
            "recipe books",
            "baking guides",
            "ebooks"
        ],
        imageUrl: getCanonicalUrl('/images/baking-ebooks.jpg')
    },
    'cake-pricing': {
        title: "Free Cake Pricing Calculator | Sweety's Bakery",
        description: "Calculate the exact cost of your cakes, including ingredients, labor, and overhead. Price your cakes for profit with our free bakery calculator.",
        keywords: [
            "cake pricing calculator",
            "cake cost calculator",
            "price my cake",
            "bakery pricing",
            "food cost calculator"
        ],
        imageUrl: getCanonicalUrl('/calculators/cake-pricing.jpg')
    },
    'default': {
        title: "Free Baking Tools | Sweety's Bakery",
        description: "A collection of free tools and calculators to help you with your baking projects.",
        keywords: [
            "baking",
            "tools",
            "calculator",
            "free"
        ],
        imageUrl: getCanonicalUrl('/placeholder-default.jpg')
    }
};
const getToolSeoData = (toolId)=>{
    return seoDataMap[toolId] || seoDataMap.default;
};
const updateSchema = (toolId, seoData, post)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let schema;
    const url = undefined;
    // Helper to extract list items from HTML content based on a header
    const extractListFromHtml = undefined;
    // Remove existing schema script if it exists
    const existingScript = undefined;
    // Add new schema script
    const script = undefined;
};
}),
"[project]/app/recipes/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecipesLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/seo.ts [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getToolSeoData"])('recipe-index').title,
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getToolSeoData"])('recipe-index').description,
    alternates: {
        canonical: 'https://sweetysbakery.com/recipes/'
    }
};
function RecipesLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=_ac9708c1._.js.map