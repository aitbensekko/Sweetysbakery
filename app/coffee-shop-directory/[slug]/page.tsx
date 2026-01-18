import { shops } from '@/data/shops';
import ShopDetails from '@/components/ShopDetails';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate static params for all shops
export function generateStaticParams() {
    return shops.map((shop) => ({
        slug: shop.slug,
    }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const shop = shops.find((s) => s.slug === slug);

    if (!shop) {
        return {
            title: 'Shop Not Found',
        };
    }

    return {
        title: `${shop.name} - ${shop.city} | Bakery & Coffee Shop Directory`,
        description: shop.description,
        openGraph: {
            title: `${shop.name} in ${shop.city}`,
            description: shop.description,
            images: [shop.imageUrl],
        },
    };
}

export default async function ShopPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const shop = shops.find((s) => s.slug === slug);

    if (!shop) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <ShopDetails shop={shop} />
        </div>
    );
}
