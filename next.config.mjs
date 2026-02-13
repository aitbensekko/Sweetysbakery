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
                source: '/tools/cake-pricing-calculator',
                destination: '/tools/cake-pricing',
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
        ];
    },
};

export default nextConfig;
