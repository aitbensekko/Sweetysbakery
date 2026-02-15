import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: __dirname,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    productionBrowserSourceMaps: false,
    images: {
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    async redirects() {
        return [
            {
                source: '/tools/dough-hydration-calculator',
                destination: '/tools/dough-hydration',
                permanent: true,
            },
            {
                source: '/tools/cake-pricing',
                destination: '/tools/cake-pricing-calculator',
                permanent: true,
            },
            {
                source: '/tools/cost-per-recipe-calculator',
                destination: '/tools/cost-per-recipe',
                permanent: true,
            },
            {
                source: '/tools/protein-macro-calculator',
                destination: '/tools/protein-macro',
                permanent: true,
            },
            {
                source: '/tools/dough-temperature-calculator',
                destination: '/tools/dough-temperature',
                permanent: true,
            },
            {
                source: '/tools/mortgage-payoff-calculator',
                destination: '/tools/mortgage-payoff',
                permanent: true,
            },
            {
                source: '/tools/oven-temperature-converter',
                destination: '/tools/oven-temp-converter',
                permanent: true,
            },
            {
                source: '/tools/temperature-converter',
                destination: '/tools/temp-converter',
                permanent: true,
            },
            {
                source: '/tools/mortgage-calculator',
                destination: '/tools/mortgage-affordability',
                permanent: true,
            },
            // Blog Redirects
            {
                source: '/cookie-decorating-essentials',
                destination: '/blog/ultimate-cookie-decorating-ideas',
                permanent: true,
            },
            {
                source: '/vegan-baking-substitutes',
                destination: '/blog/vegan-baking-essentials',
                permanent: true,
            },
            {
                source: '/macaron-troubleshooting',
                destination: '/blog/macaron-troubleshooting-15-common-problems-solutions',
                permanent: true,
            },
            // Product Redirects
            {
                source: '/product/goodcook-baking-sheet',
                destination: '/products/goodcook-everyday-baking-sheet-set',
                permanent: true,
            },
            {
                source: '/product/le-creuset-dutch-oven',
                destination: '/products/le-creuset-signature-dutch-oven',
                permanent: true,
            },
            {
                source: '/product/kitchenaid-mixer',
                destination: '/blog/best-stand-mixers-2025',
                permanent: true,
            },
            {
                source: '/product/overmont-dutch-oven',
                destination: '/products/overmont-enameled-cast-iron-dutch-oven',
                permanent: true,
            },
            // Specific Task.md Requests
            {
                source: '/ultimate-cookie-decorating-ideas',
                destination: '/blog/ultimate-cookie-decorating-ideas',
                permanent: true,
            },
            {
                source: '/products/goodcook-nonstick-baking-sheet-set',
                destination: '/products/goodcook-everyday-baking-sheet-set',
                permanent: true,
            },
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/products/le-creuset-bread-oven-oyster',
                destination: '/products/le-creuset-bread-oven',
                permanent: true,
            },
            {
                source: '/products/electric-hand-mixer-bowls-set',
                destination: '/products/5-speed-electric-hand-mixer-set',
                permanent: true,
            },
            {
                source: '/vegan-baking-essentials',
                destination: '/blog/vegan-baking-essentials',
                permanent: true,
            },
            {
                source: '/products/overmont-dutch-oven', // Duplicate source handling (handled by previous rule, but explicit match is fine or just rely on previous?)
                destination: '/products/overmont-enameled-cast-iron-dutch-oven', // Just kept for completeness of list
                permanent: true,
            },
            {
                source: '/baker-schedule',
                destination: '/blog/bakers-blueprint-crafting-your-perfect-schedule',
                permanent: true,
            },
            {
                source: '/time-calculator',
                destination: '/blog/the-bakers-clock-mastering-time-calculations-in-the-kitchen',
                permanent: true,
            },
            // Fixes for 404s from Task List
            {
                source: '/baking-pan-converter',
                destination: '/blog/pan-perfection-your-baking-pan-converter-guide',
                permanent: true,
            },
            {
                source: '/yeast-converter',
                destination: '/blog/yeast-whisperer-your-guide-to-yeast-conversions',
                permanent: true,
            },
            {
                source: '/blog/sugar-substitutes-guide',
                destination: '/blog/sweetener-conversion',
                permanent: true,
            },
            {
                source: '/blog/healthy-baking-substitutes',
                destination: '/blog/ingredient-substitutions',
                permanent: true,
            },
            {
                source: '/blog/fall-baking-trends-2025',
                destination: '/blog/autumnal-delights-seasonal-baking-ideas-for-fall',
                permanent: true,
            },
            {
                source: '/blog/best-frosting-for-cupcakes',
                destination: '/blog/frosting-finesse-the-best-frosting-for-cupcakes',
                permanent: true,
            },
            {
                source: '/blog/how-to-make-pastry-cream',
                destination: '/blog/french-patisserie-classics',
                permanent: true,
            },
            {
                source: '/blog/mastering-pie-crust',
                destination: '/blog/the-art-of-the-crust-pies-tarts-masterclass',
                permanent: true,
            },
            {
                source: '/blog/getting-started-with-sourdough',
                destination: '/blog/ultimate-sourdough-starter-guide-science-feeding-troubleshooting',
                permanent: true,
            },
            {
                source: '/blog/gluten-free-baking-tips',
                destination: '/blog/ingredient-substitutions',
                permanent: true,
            },
            {
                source: '/blog/advanced-cake-decorating',
                destination: '/blog/my-art-a-bakers-canvas-edible-artistry',
                permanent: true,
            },
            {
                source: '/blog/chocolate-tempering-guide',
                destination: '/blog/the-art-of-tempering-mastering-how-to-temper-chocolate',
                permanent: true,
            },
            {
                source: '/blog/holiday-gift-guide-bakers',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/blog/best-baking-books-2025',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/the-ultimate-weekend-guide-15-breakfast-brunch-recipes',
                destination: '/blog/fluffy-buttermilk-pancakes',
                permanent: true,
            },
            {
                source: '/basic-pastry-doughs',
                destination: '/blog/foundational-flakiness-mastering-basic-pastry-doughs',
                permanent: true,
            },
            {
                source: '/30-fall-cake-recipe-ideas',
                destination: '/blog/autumnal-delights-seasonal-baking-ideas-for-fall',
                permanent: true,
            },
            {
                source: '/understanding-leavening-agents',
                destination: '/blog/the-breath-of-baking-understanding-leavening-agents',
                permanent: true,
            },
            {
                source: '/temp-converter',
                destination: '/tools/temp-converter',
                permanent: true,
            },
            {
                source: '/healthy-dessert-alternatives',
                destination: '/blog/ingredient-substitutions',
                permanent: true,
            },
            {
                source: '/baking-blog',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/scaler',
                destination: '/tools/recipe-scaling-costing',
                permanent: true,
            },
            {
                source: '/weight-loss-calculator',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/best-frosting-for-cupcakes',
                destination: '/blog/frosting-finesse-the-best-frosting-for-cupcakes',
                permanent: true,
            },
            {
                source: '/tools/placeholder-tool',
                destination: '/tools',
                permanent: true,
            },
            // Additional 404 Fixes (Batch 2)
            {
                source: '/blog/cookie-decorating-ideas',
                destination: '/blog/ultimate-cookie-decorating-ideas',
                permanent: true,
            },
            {
                source: '/payment-calculator',
                destination: '/blog/sweet-transactions-payment-calculations-for-bakers',
                permanent: true,
            },
            {
                source: '/recipe-scaler',
                destination: '/tools/recipe-scaler',
                permanent: true,
            },
            {
                source: '/protein-macro',
                destination: '/blog/protein-macronutrients',
                permanent: true,
            },
            {
                source: '/podcasts',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/ideal-weight-calculator',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/sugar-free-baking-recipes',
                destination: '/blog/sweet-without-guilt-exploring-healthy-dessert-alternatives',
                permanent: true,
            },
            {
                source: '/digital-notebook',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/oven-temp-converter',
                destination: '/tools/temp-converter',
                permanent: true,
            },
            {
                source: '/fondant-calculator',
                destination: '/blog/fondant-formulas-mastering-the-art-of-cake-decorating',
                permanent: true,
            },
            {
                source: '/gallery',
                destination: '/tools/my-art',
                permanent: true,
            },
            {
                source: '/products/le-creuset-dutch-oven-licorice',
                destination: '/products/le-creuset-signature-dutch-oven',
                permanent: true,
            },
            {
                source: '/sourdough-bread-starter-guide',
                destination: '/blog/the-living-loaf-your-sourdough-bread-starter-guide',
                permanent: true,
            },
            {
                source: '/baking-for-special-occasions',
                destination: '/blog/best-birthday-cake-ideas',
                permanent: true,
            },
            {
                source: '/products/large-glass-food-storage',
                destination: '/products/large-glass-food-storage-container',
                permanent: true,
            },
            {
                source: '/chocolate-baking-hacks',
                destination: '/blog/chocolate-alchemy-essential-chocolate-baking-hacks',
                permanent: true,
            },
            {
                source: '/frosting-color-mixer',
                destination: '/blog/color-me-sweet-your-frosting-color-mixer-guide',
                permanent: true,
            },
            {
                source: '/body-fat-calculator',
                destination: '/tools',
                permanent: true,
            },
            // Final User Reported Fixes
            {
                source: '/tools/temp-converter',
                destination: '/tools/temperature-converter',
                permanent: true,
            },
            {
                source: '/blog/fluffy-buttermilk-pancakes',
                destination: '/blog/fluffy-buttermilk-pancakes-recipe',
                permanent: true,
            },
            // Batch 4 User Reported Fixes
            {
                source: '/my-art',
                destination: '/tools/my-art',
                permanent: true,
            },
            {
                source: '/category/photography',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/category/advertising',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/recipes/best-banana-bread-recipe',
                destination: '/blog/classic-banana-bread-recipe',
                permanent: true,
            },
            {
                source: '/tools/my-art-gallery',
                destination: '/tools/my-art',
                permanent: true,
            },
            {
                source: '/tools/mortgage-affordability-calculator',
                destination: '/tools/mortgage-affordability',
                permanent: true,
            },
            {
                source: '/management-dashboard',
                destination: '/tools/management-dashboard',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
