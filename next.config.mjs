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
                destination: '/tools/ingredient-substitutions',
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
                destination: '/tools/ingredient-substitutions',
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
                destination: '/tools/temperature-converter',
                permanent: true,
            },
            {
                source: '/healthy-dessert-alternatives',
                destination: '/tools/ingredient-substitutions',
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
                destination: '/tools/oven-temp-converter',
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
                destination: '/recipes/fluffy-buttermilk-pancakes-recipe',
                permanent: true,
            },
            {
                source: '/blog/fluffy-buttermilk-pancakes-recipe',
                destination: '/recipes/fluffy-buttermilk-pancakes-recipe',
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
                destination: '/recipes/classic-banana-bread-recipe',
                permanent: true,
            },
            {
                source: '/blog/classic-banana-bread-recipe',
                destination: '/recipes/classic-banana-bread-recipe',
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
            {
                source: '/contact',
                destination: '/contact-us',
                permanent: true,
            },
            // Fixes for Crawled - Not Indexed (User Screenshot)
            {
                source: '/dough-hydration/',
                destination: '/tools/dough-hydration',
                permanent: true,
            },
            {
                source: '/ingredient-substitutions/',
                destination: '/tools/ingredient-substitutions',
                permanent: true,
            },
            {
                source: '/blog/baking-bucket-list',
                destination: '/tools/baking-bucket-list',
                permanent: true,
            },
            {
                source: '/blog/cake-pricing-guide',
                destination: '/tools/cake-pricing-calculator',
                permanent: true,
            },

            // Fixes for 503 Errors (Crawled - Not Indexed)
            {
                source: '/tools/ideal-weight-calculator/',
                destination: '/tools/ideal-weight-calculator',
                permanent: true,
            },
            {
                source: '/blog/baking-basics-easy-cake-recipes-for-beginners',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/blog/gluten-free-gold-mastering-gluten-free-baking-tips',
                destination: '/blog/common-gluten-free-baking-mistakes',
                permanent: true,
            },
            {
                source: '/blog/sweet-returns-understanding-compound-interest-in-baking-business',
                destination: '/blog/cake-pricing-guide',
                permanent: true,
            },
            {
                source: '/blog/gourmet-dessert-recipes',
                destination: '/blog/americas-favorite-desserts-gourmet-party-ideas',
                permanent: true,
            },
            {
                source: '/blog/gluten-free-flours-guide-almond-coconut-oat/',
                destination: '/blog/gluten-free-flours-guide-almond-coconut-oat',
                permanent: true,
            },

            {
                source: '/date-calculator',
                destination: '/tools/date-calculator',
                permanent: true,
            },
            {
                source: '/blog/trending-cake-designs-2025',
                destination: '/blog/trending-cake-designs-2025-birthday-wedding-ideas',
                permanent: true,
            },
            {
                source: '/blog/yeast-whisperer-your-guide-to-yeast-conversions',
                destination: '/tools/yeast-converter',
                permanent: true,
            },
            {
                source: '/blog/best-birthday-cake-ideas',
                destination: '/blog/trending-cake-designs-2025-birthday-wedding-ideas',
                permanent: true,
            },
            {
                source: '/blog/volume-versatility-your-baking-volume-converter',
                destination: '/tools/volume-converter',
                permanent: true,
            },
            {
                source: '/blog/how-to-store-cakes-properly',
                destination: '/blog/cake-care-101-flavors-storage-freshness',
                permanent: true,
            },
            {
                source: '/blog/age-calculator',
                destination: '/tools/age-calculator',
                permanent: true,
            },
            {
                source: '/blog/allergen-guide',
                destination: '/tools/allergen-guide',
                permanent: true,
            },
            {
                source: '/marrakech-custom-cakes',
                destination: '/contact-us',
                permanent: true,
            },


            {
                source: '/blog/date-calculator',
                destination: '/tools/date-calculator',
                permanent: true,
            },
            {
                source: '/blog/color-me-sweet-your-frosting-color-mixer-guide',
                destination: '/tools/frosting-color-mixer',
                permanent: true,
            },

            {
                source: '/recipes/soft-chewy-pretzels',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/cake-delivery-near-me',
                destination: '/',
                permanent: true,
            },
            {
                source: '/chocolate-fudge-cake-delivery',
                destination: '/blog/chocolate-fudge-cake-delivery',
                permanent: true,
            },
            {
                source: '/blog/weighty-matters-your-baking-weight-converter-guide',
                destination: '/tools/weight-converter',
                permanent: true,
            },
            {
                source: '/blog/little-bakers-big-fun-easy-kids-baking-recipes',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/blog/how-to-blind-bake-pie-crust',
                destination: '/blog/flaky-gluten-free-pie-crust',
                permanent: true,
            },
            {
                source: '/blog/the-digital-recipe-box-your-culinary-command-center',
                destination: '/tools/recipe-box',
                permanent: true,
            },
            {
                source: '/blog/bakers-percentage',
                destination: '/tools/bakers-percentage',
                permanent: true,
            },
            {
                source: '/blog/mastering-the-recipe-scaler-bake-for-any-crowd',
                destination: '/tools/recipe-scaler',
                permanent: true,
            },
            {
                source: '/blog/mastering-macarons',
                destination: '/blog/vegan-meringue-aquafaba-magic',
                permanent: true,
            },
            {
                source: '/why-you-need-a-kitchen-scale',
                destination: '/blog/why-you-need-a-kitchen-scale',
                permanent: true,
            },
            {
                source: '/products/le-creuset-bread-oven-oyster',
                destination: '/products',
                permanent: true,
            },
            {
                source: '/product-tools/pyrex-glass-measuring-cups-set',
                destination: '/products/pyrex-essentials-glass-measuring-cups',
                permanent: true,
            },
            {
                source: '/warm-brussels-sprouts-salad-with-bacon-and-apple',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/maillard-reaction-baking',
                destination: '/blog/oven-temperature-translations-your-baking-conversion-tool',
                permanent: true,
            },
            {
                source: '/apple-cinnamon-baked-oatmeal-cups',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/brown-sugar-butterscotch-cupcakes',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/product-tools/melissa-doug-slice-bake-cookies',
                destination: '/products/melissa-and-doug-slice-and-bake-cookies',
                permanent: true,
            },
            {
                source: '/sugar-free-baking-recipes',
                destination: '/blog/keto-desserts-delivery',
                permanent: true,
            },
            {
                source: '/drinks-videos',
                destination: '/tools/drinks-videos',
                permanent: true,
            },
            {
                source: '/product-tools/goodcook-nonstick-baking-sheet-set',
                destination: '/products/goodcook-everyday-baking-sheet-set',
                permanent: true,
            },
            // Batch 6 (User Screenshots) Fixes
            {
                source: '/product-tools/natures-own-brioche-hamburger-buns',
                destination: '/products/natures-own-brioche-hamburger-buns',
                permanent: true,
            },
            {
                source: '/product-tools/king-arthur-gf-flour',
                destination: '/products/king-arthur-measure-for-measure-gf-flour',
                permanent: true,
            },
            {
                source: '/tools/stopwatch',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/food-photography-tips-for-bakers',
                destination: '/blog/food-photography-tips-for-bakers',
                permanent: true,
            },
            {
                source: '/the-ultimate-guide-to-black-velvet-cupcakes',
                destination: '/recipes/red-velvet-cupcakes',
                permanent: true,
            },
            {
                source: '/baked-apple-cider-donuts',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/product-tools/etekcity-food-kitchen-scale',
                destination: '/products/etekcity-food-kitchen-scale-digital',
                permanent: true,
            },
            {
                source: '/brown-sugar-shortbread-cookies',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/product-tools/if-you-care-parchment-baking-paper',
                destination: '/products/if-you-care-parchment-baking-paper',
                permanent: true,
            },
            {
                source: '/apple-cinnamon-scones',
                destination: '/recipes/apple-cinnamon-crumb-muffins',
                permanent: true,
            },
            {
                source: '/easy-cake-recipes-for-beginners',
                destination: '/blog/baking-101-simple-cakes',
                permanent: true,
            },
            {
                source: '/black-velvet-cupcakes',
                destination: '/recipes/red-velvet-cupcakes',
                permanent: true,
            },
            {
                source: '/recipe-box',
                destination: '/tools/recipe-box',
                permanent: true,
            },
            {
                source: '/tools/my-art-generator',
                destination: '/tools/my-art',
                permanent: true,
            },
            {
                source: '/testimonials',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/glazed-doughnuts-recipe',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/products/fotile-chefcubii-combi-steam-oven',
                destination: '/products/fotile-chefcubii-steam-oven',
                permanent: true,
            },
            {
                source: '/products/amazon-basics-bakeware-set',
                destination: '/products/amazon-basics-6-piece-bakeware-set',
                permanent: true,
            },
            {
                source: '/product',
                destination: '/products',
                permanent: true,
            },
            {
                source: '/product-tools/pillsbury-ready-bake-cookie-dough',
                destination: '/products/pillsbury-ready-to-bake-cookie-dough',
                permanent: true,
            },
            {
                source: '/volume-converter',
                destination: '/tools/volume-converter',
                permanent: true,
            },
            {
                source: '/products/piping-bags-tips-set',
                destination: '/products/piping-bags-and-tips-set',
                permanent: true,
            },
            {
                source: '/common-bread-baking-mistakes',
                destination: '/blog/common-bread-baking-mistakes',
                permanent: true,
            },
            {
                source: '/kids-baking-recipes',
                destination: '/blog/little-bakers-big-fun-easy-kids-baking-recipes',
                permanent: true,
            },
            {
                source: '/the-ultimate-fudgy-brownies',
                destination: '/recipes/the-ultimate-fudgy-brownies',
                permanent: true,
            },
            {
                source: '/videos',
                destination: '/tools/drinks-videos',
                permanent: true,
            },
            {
                source: '/buttercream-calculator',
                destination: '/tools/buttercream-calculator',
                permanent: true,
            },
            {
                source: '/embrace-the-cozy-your-ultimate-guide-to-fall-baking-season',
                destination: '/blog/autumnal-delights-seasonal-baking-ideas-for-fall',
                permanent: true,
            },
            {
                source: '/calorie-calculator',
                destination: '/tools/calorie-calculator',
                permanent: true,
            },
            {
                source: '/dessert-calculator',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/banana-baked-oatmeal',
                destination: '/recipes/baked-oatmeal-cups',
                permanent: true,
            },
            {
                source: '/our-favorite-baking-bloggers-a-spotlight-on-sally-mckenney',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/measurement-converter',
                destination: '/tools/measurement-converter',
                permanent: true,
            },
            {
                source: '/pumpkin-crumb-cake-muffins',
                destination: '/recipes/apple-cinnamon-crumb-muffins',
                permanent: true,
            },
            {
                source: '/weight-converter',
                destination: '/tools/weight-converter',
                permanent: true,
            },
            {
                source: '/pregnancy-calculator',
                destination: '/tools',
                permanent: true,
            },
            {
                source: '/sweetener-converter',
                destination: '/blog/sweetener-conversion',
                permanent: true,
            },
            {
                source: '/homemade-pumpkin-pie-spice-blend',
                destination: '/recipes',
                permanent: true,
            },
            {
                source: '/ganache-calculator',
                destination: '/tools/ganache-calculator',
                permanent: true,
            },
            {
                source: '/relaxing-videos',
                destination: '/blog/relaxing-baking-videos',
                permanent: true,
            },
            {
                source: '/order-management',
                destination: '/tools/order-management',
                permanent: true,
            },
            {
                source: '/tip-calculator',
                destination: '/tools/tip-calculator',
                permanent: true,
            },
            // Batch 7: New User Screenshot URLs
            {
                source: '/get-your-spook-on-easy-halloween-dessert-recipes-for-2026',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/interest-calculator',
                destination: '/tools/investment-calculator',
                permanent: true,
            },
            {
                source: '/pumpkin-coffee-cake-with-crumb-topping',
                destination: '/blog/autumnal-delights-seasonal-baking-ideas-for-fall',
                permanent: true,
            },
            {
                source: '/pace-calculator',
                destination: '/tools/pace-calculator',
                permanent: true,
            },
            {
                source: '/bakers-percentage',
                destination: '/tools/bakers-percentage',
                permanent: true,
            },
            {
                source: '/cake-pricing',
                destination: '/tools/cake-pricing',
                permanent: true,
            },
            {
                source: '/flavor-pairing-guide',
                destination: '/tools/flavor-pairing-guide',
                permanent: true,
            },
            {
                source: '/multiple-timer',
                destination: '/tools/multiple-timer',
                permanent: true,
            },
            {
                source: '/privacy',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/comments/feed',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
