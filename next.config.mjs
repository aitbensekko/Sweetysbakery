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
                destination: '/blog/cookie-decorating-ideas',
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
                destination: '/blog/cookie-decorating-ideas',
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
        ];
    },
};

export default nextConfig;
