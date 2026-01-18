import ShopDirectory from '@/components/ShopDirectory';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bakery & Coffee Shop Directory | Find Best Cafes & Pastries',
    description: 'Discover the best bakeries and coffee shops in the USA and worldwide. Find top-rated cafes, artisan pastries, and specialty coffee near you. Featuring curated listings from New York to Marrakech.',
    keywords: [
        'bakery directory',
        'coffee shop finder',
        'best coffee shops usa',
        'local bakeries',
        'artisan coffee',
        'marrakech cafes',
        'pastry shop locator',
        'specialty coffee near me',
        'cafe guide',
        'bakery reviews'
    ],
    openGraph: {
        title: 'Bakery & Coffee Shop Directory | Find Best Cafes & Pastries',
        description: 'Discover the best bakeries and coffee shops in the USA and worldwide. Find top-rated cafes, artisan pastries, and specialty coffee near you.',
        type: 'website',
    }
};

export default function DirectoryPage() {
    return (
        <div className="bg-white min-h-screen">
            <ShopDirectory />
        </div>
    );
}
