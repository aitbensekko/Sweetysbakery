import React from 'react';
import { affiliateProducts } from '../data/affiliateProducts';
import { ProductCard } from './ProductCard';
import AdSenseAd from './AdSenseAd';
import { ToolId } from './utils/slugs';

interface BakingEbooksPageProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const BakingEbooksPage: React.FC<BakingEbooksPageProps> = ({ setActiveTool, breadcrumbs }) => {
    const ebooks = affiliateProducts.filter(p => p.category === 'Ebooks');

    return (
        <div className="min-h-screen bg-brand-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-brand-pink/5 to-bg-brand-background pt-12 pb-16 px-4 sm:px-6 lg:px-8 mb-12 border-b border-brand-pink/10">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="mb-4 flex justify-center opacity-70 scale-90">{breadcrumbs}</div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-title mb-6 tracking-tight">
                        Popular Baking <span className="text-brand-pink">Ebooks</span>
                    </h1>
                    <p className="text-lg text-brand-text-body/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Curated guides to elevate your baking. From sourdough secrets to holiday cookie masterpieces.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <AdSenseAd className="mb-8" />

                <AdSenseAd slotId="4569891627" className="mb-8" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ebooks.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <AdSenseAd slotId="4784663984" className="mt-12" />

                <AdSenseAd slotId="1978473644" className="my-12" />
            </div>
        </div>
    );
};
