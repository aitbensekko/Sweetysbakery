import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ClientLayout from '../components/ClientLayout';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Free Baking Calculators & Tools | Cake Pricing, Recipe Scaler & More | Sweety's Bakery",
    metadataBase: new URL('https://sweetysbakery.com'),
    description: "The ultimate collection of free baking tools and calculators. Price cakes for profit, scale recipes instantly, convert measurements, and master sourdough with our professional-grade bakery tools.",
    keywords: [
        "baking calculators", "cake pricing calculator", "recipe scaler",
        "sourdough hydration calculator", "macaron troubleshooting", "bakery business tools",
        "cake cost calculator", "baking math", "dough calculator",
        "baking recipes", "easy baking recipes", "gluten-free baking",
        "cake recipes", "cookie recipes", "bread recipes", "sourdough bread",
        "baking tools", "Michelle Anderson cookbook", "bread machine recipes"
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // Icons are handled automatically by Next.js via file conventions (favicon.ico, apple-icon.png)
    icons: {
        icon: '/icon.png',
        apple: '/apple-icon.png',
    },
    verification: {
        google: 'M0bVdyUKKCEFYgt8zaBIEBxsHLT52M9vYN1oGCj3A5M',
        other: {
            'p:domain_verify': '03405095329c5661ddfdf31e2ee283dc',
        },
    },
    alternates: {
        canonical: 'https://sweetysbakery.com',
    },
    openGraph: {
        title: "Free Baking Calculators & Tools | Cake Pricing, Recipe Scaler & More",
        description: "The ultimate collection of free baking tools and calculators. Price cakes for profit, scale recipes instantly, convert measurements, and master sourdough.",
        url: 'https://sweetysbakery.com',
        siteName: "Sweety's Bakery",
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: '/opengraph-image.png', // Next.js App Router automatically handles opengraph-image.tsx/png/jpg
                width: 1200,
                height: 630,
                alt: "Sweety's Bakery",
            },
        ],
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Bakery",
                "@id": "https://sweetysbakery.com/#organization",
                "name": "Sweety's Bakery",
                "url": "https://sweetysbakery.com",
                "logo": "https://sweetysbakery.com/icon.png",
                "image": "https://sweetysbakery.com/icon.png",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Marrakech",
                    "addressLocality": "Marrakech",
                    "addressRegion": "Marrakech-Safi",
                    "postalCode": "40000",
                    "addressCountry": "MA"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 31.6295,
                    "longitude": -7.9811
                },
                "sameAs": [
                    "https://www.instagram.com/sweetys.bakery/",
                    "https://web.facebook.com/SaPatissl/",
                    "https://www.pinterest.com/Sweetysbakerys/"
                ],
                "description": "Free professional baking tools, calculators, and resources for bakers worldwide. Custom cakes in Marrakech."
            },
            {
                "@type": "WebSite",
                "@id": "https://sweetysbakery.com/#website",
                "url": "https://sweetysbakery.com",
                "name": "Sweety's Bakery Tools",
                "publisher": {
                    "@id": "https://sweetysbakery.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://sweetysbakery.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            }
        ]
    };

    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
                {/* Allow Amazon CDN images to load */}
                <link rel="preconnect" href="https://m.media-amazon.com" />
                <meta name="referrer" content="no-referrer-when-downgrade" />
            </head>
            <body className="min-h-screen bg-brand-background font-sans overflow-x-hidden">
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    strategy="lazyOnload"
                />

                {/* Google Analytics (GA4) */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-ZPSG8BCVLT"
                    strategy="lazyOnload"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-ZPSG8BCVLT');
                    `}
                </Script>

                {/* Google AdSense - Optimized for Next.js */}
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209081290130316"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                />


                {/* ClientLayout handles Sidebar toggle and main content area */}
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
