import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { XIcon, ChevronRightIcon, ArrowLeftIcon } from '../Icons';
import AdSenseAd from '../AdSenseAd';

// Dynamic import for ImageModal - only loaded when needed
const ImageModal = dynamic(() => import('../ImageModal').then(mod => ({ default: mod.ImageModal })), {
    ssr: false,
    loading: () => null
});

// Generate full range of possible images (1000+) to ensure no content is hidden.
// We use unoptimized={true} in the Image component to prevent server-side 404 errors for missing files.
// Production images from Hostinger (IMG 5 to IMG 1151)
export const allImages = Array.from({ length: 1147 }, (_, i) =>
    `https://sweetysbakery.com/images/Sweeetys Bakery IMG (${i + 5}).JPG`
);

const IMAGES_PER_PAGE = 20;

// Helper to get optimized thumbnail via wsrv.nl
export const getThumbnail = (url: string, width: number = 500) => {
    // Remove protocol for wsrv.nl (optional, but cleaner)
    const cleanUrl = url.replace(/^https?:\/\//, '');
    return `https://wsrv.nl/?url=${encodeURIComponent(cleanUrl)}&w=${width}&q=75&output=webp`;
};

interface MyArtGalleryProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

// Category filters for better organization
const categories = [
    { id: 'all', name: 'All', icon: '🎨', keywords: 'all custom cakes edible art' },
    { id: 'cakes', name: 'Custom Cakes', icon: '🎂', keywords: 'birthday wedding sculptural 3D cakes' },
    { id: 'cookies', name: 'Decorated Cookies', icon: '🍪', keywords: 'sugar cookies royal icing decorated' },
    { id: 'cupcakes', name: 'Cupcakes', icon: '🧁', keywords: 'cupcakes buttercream frosting' },
    { id: 'pastries', name: 'Pastries', icon: '🥐', keywords: 'pastries desserts sweet treats' },
];

export const MyArtGallery: React.FC<MyArtGalleryProps> = ({ setActiveTool, breadcrumbs }) => {
    const images = allImages;
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

    // Ad Interstitial State
    // Ad Interstitial State
    const [hasSeenAd, setHasSeenAd] = useState<boolean>(false);
    const [showAdModal, setShowAdModal] = useState<boolean>(false);
    const [showAdContent, setShowAdContent] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(3);
    const [pendingImageIndex, setPendingImageIndex] = useState<number | null>(null);

    // Countdown Timer Effect
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showAdModal && !showAdContent && countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (showAdModal && countdown === 0 && !showAdContent) {
            // Timer finished, show ad content
            setShowAdContent(true);
        }
        return () => clearTimeout(timer);
    }, [showAdModal, countdown, showAdContent]);

    const handleAdContinue = () => {
        setShowAdModal(false);
        setHasSeenAd(true);
        setShowAdContent(false);
        if (pendingImageIndex !== null) {
            setSelectedImageIndex(pendingImageIndex);
            setPendingImageIndex(null);
        }
    };

    const openModal = (index: number) => {
        if (!hasSeenAd) {
            setPendingImageIndex(index);
            setShowAdModal(true);
            setShowAdContent(false);
            setCountdown(3);
        } else {
            setSelectedImageIndex(index);
        }
    };
    const closeModal = () => setSelectedImageIndex(null);

    const getAltText = (index: number) => {
        const altTexts = [
            `Custom cake design - Wedding cake, birthday cake, cake decorating ideas`,
            `Edible art cake - Sculptural cake design, 3D cake, artistic dessert`,
            `Professional cake decorating - Custom birthday cake, celebration cake`,
            `Wedding cake design - Elegant wedding cake, custom cake, cake gallery`,
            `Birthday cake ideas - Custom birthday cake, decorated cake, cake inspiration`,
            `Cake decorating inspiration - Unique cake design, artistic cake, edible masterpiece`,
            `3D sculptural cake - Modern cake design, geometric cake, gravity-defying cake`,
            `Custom dessert art - Hand-painted cake, metallic cake, textured buttercream`,
            `Specialty cake design - Anniversary cake, celebration cake, custom order`,
            `Artisan cake creation - Fondant cake, buttercream cake, cake art`,
            `Gourmet cake design - Premium cake, luxury dessert, custom bakery`,
            `Creative cake decorating - Innovative cake design, trendy cake, modern pastry art`
        ];
        return altTexts[index % altTexts.length];
    };

    return (
        <>
            <ToolContainer
                title=""
                description=""
                setActiveTool={setActiveTool}
                breadcrumbs={breadcrumbs}
                toolId="my-art"
            >
                {/* SEO-Rich Header Section */}
                <div className="mb-8 text-center pt-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-text-title mb-4 bg-gradient-to-r from-brand-gold via-brand-pink to-brand-gold bg-clip-text text-transparent leading-tight px-2">
                        Edible Art Gallery
                    </h1>
                    <p className="text-base sm:text-lg text-brand-text-body max-w-full md:max-w-4xl md:mx-auto mb-8 px-2">
                        Discover <strong>custom cake designs</strong>, <strong>cake decorating inspiration</strong>, and <strong>edible art</strong> from our professional bakery.
                        Browse through <strong>sculptural cakes</strong>, <strong>3D cake designs</strong>, <strong>wedding cakes</strong>, <strong>birthday cakes</strong>,
                        and <strong>artistic desserts</strong> that showcase the latest trends in <strong>cake decoration</strong> and <strong>pastry art</strong>.
                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-full md:max-w-3xl md:mx-auto mb-8 px-2">
                        <div className="bg-gradient-to-br from-brand-cream to-white p-3 md:p-4 rounded-lg shadow-md border border-brand-gold/20">
                            <div className="text-2xl md:text-3xl font-bold text-brand-gold">1000+</div>
                            <div className="text-xs md:text-sm text-brand-text-body">Cake Designs</div>
                        </div>
                        <div className="bg-gradient-to-br from-brand-pink/10 to-white p-3 md:p-4 rounded-lg shadow-md border border-brand-gold/20">
                            <div className="text-2xl md:text-3xl font-bold text-brand-gold">500+</div>
                            <div className="text-xs md:text-sm text-brand-text-body">Custom Cakes</div>
                        </div>
                        <div className="bg-gradient-to-br from-brand-cream to-white p-4 rounded-lg shadow-md border border-brand-gold/20">
                            <div className="text-3xl font-bold text-brand-gold">300+</div>
                            <div className="text-sm text-brand-text-body">Wedding Cakes</div>
                        </div>
                        <div className="bg-gradient-to-br from-brand-pink/10 to-white p-4 rounded-lg shadow-md border border-brand-gold/20">
                            <div className="text-3xl font-bold text-brand-gold">200+</div>
                            <div className="text-sm text-brand-text-body">3D Sculptures</div>
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8 mx-0 sm:-mx-8">
                    <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 px-0 sm:px-8 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${activeCategory === cat.id
                                    ? 'bg-gradient-to-r from-brand-gold to-brand-pink text-white shadow-lg scale-105'
                                    : 'bg-white text-brand-text-title border-2 border-brand-gold/30 hover:border-brand-gold hover:shadow-md'
                                    }`}
                            >
                                <span className="text-lg sm:text-xl">{cat.icon}</span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* View Mode Toggle */}
                <div className="mb-6 flex justify-end gap-2">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${viewMode === 'grid'
                            ? 'bg-brand-gold text-white'
                            : 'bg-white text-brand-text-title border border-brand-gold/30 hover:border-brand-gold'
                            }`}
                    >
                        Grid View
                    </button>
                    <button
                        onClick={() => setViewMode('masonry')}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${viewMode === 'masonry'
                            ? 'bg-brand-gold text-white'
                            : 'bg-white text-brand-text-title border border-brand-gold/30 hover:border-brand-gold'
                            }`}
                    >
                        Masonry View
                    </button>
                </div>

                {/* Image Gallery */}
                <div className="mx-0 sm:-mx-8">
                    <div className={viewMode === 'grid'
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                        : "columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
                    }>
                        {images.slice(0, visibleCount).map((img, index) => (
                            <div
                                key={`${img}-${index}`}
                                className={`${viewMode === 'grid' ? 'aspect-square' : 'break-inside-avoid mb-4'} bg-gradient-to-br from-brand-cream to-brand-pink/20 rounded-xl overflow-hidden shadow-md border-2 border-brand-gold/20 group relative hover:shadow-2xl hover:border-brand-gold transition-all duration-300 cursor-pointer`}
                                onClick={() => openModal(images.indexOf(img))}
                            >

                                <Image
                                    src={getThumbnail(img)}
                                    // Keep original alt logic ...
                                    alt={getAltText(index)}
                                    width={400}
                                    height={400}
                                    priority={index < 4}
                                    unoptimized={true}
                                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 opacity-0 transition-opacity duration-300`}
                                    onLoad={(e) => {
                                        (e.currentTarget as HTMLImageElement).classList.remove('opacity-0');
                                    }}
                                    onError={(e) => {
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) parent.style.display = 'none';
                                    }}
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <p className="text-xs font-semibold">View Details</p>
                                        <p className="text-xs opacity-90">Cake #{index + 1}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {images.length === 0 && (
                            <div className="col-span-full text-center py-16 bg-gradient-to-br from-brand-cream to-brand-pink/20 rounded-xl border-2 border-brand-gold/30">
                                <div className="text-6xl mb-4">🎨</div>
                                <p className="font-bold text-xl text-brand-text-title mb-2">Your Cake Gallery is Empty</p>
                                <p className="text-sm text-brand-text-body/80">Start creating beautiful custom cakes and edible art!</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Load More Button */}
                {visibleCount < images.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setVisibleCount(prev => Math.min(prev + IMAGES_PER_PAGE, images.length))}
                            className="bg-gradient-to-r from-brand-gold to-brand-pink text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white"
                        >
                            Load More Cake Designs ({images.length - visibleCount} remaining)
                        </button>
                    </div>
                )}

                {/* SEO Keywords Section */}
                <div className="mt-16 p-8 bg-gradient-to-br from-brand-cream via-white to-brand-pink/10 rounded-xl border-2 border-brand-gold/20">
                    <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-4 text-center">
                        Professional Cake Decorating & Edible Art
                    </h2>
                    <div className="text-sm text-brand-text-body leading-relaxed space-y-3">
                        <p>
                            Welcome to our comprehensive <strong>cake decorating gallery</strong> featuring over 1000 stunning examples of <strong>custom cakes</strong>,
                            <strong>edible art</strong>, and <strong>artistic desserts</strong>. Whether you're looking for <strong>wedding cake inspiration</strong>,
                            <strong>birthday cake ideas</strong>, or <strong>sculptural cake designs</strong>, our portfolio showcases the latest trends in
                            <strong>cake decoration</strong> and <strong>pastry art</strong>.
                        </p>
                        <p>
                            Explore our collection of <strong>3D cakes</strong>, <strong>textured buttercream designs</strong>, <strong>metallic cakes</strong>,
                            <strong>hand-painted cakes</strong>, <strong>geometric cakes</strong>, and <strong>gravity-defying cakes</strong>. Our gallery includes
                            <strong>custom cake designs</strong> for all occasions including weddings, birthdays, anniversaries, and special events.
                        </p>
                        <p className="text-xs opacity-75">
                            <strong>Popular searches:</strong> custom cakes near me, wedding cakes, birthday cakes, cake decorating ideas, edible art,
                            sculptural cakes, 3D cake designs, cake gallery, professional cake decorator, artistic desserts, cake design inspiration,
                            unique cake designs, modern cake trends, cake decorating techniques, fondant cakes, buttercream cakes, specialty cakes
                        </p>
                    </div>
                </div>
            </ToolContainer>

            {/* Ad Interstitial Modal */}
            {showAdModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl p-5 md:p-8 max-w-md w-full text-center animate-in fade-in zoom-in duration-300">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {!showAdContent ? `Please wait ${countdown} seconds` : 'Advertisement'}
                        </h3>

                        {/* Always show Ad - 300x250 Medium Rectangle */}
                        <div className="w-full min-h-[250px] bg-gray-50 mb-4 flex items-center justify-center overflow-hidden rounded-lg border border-gray-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <span className="text-gray-300 font-bold tracking-widest text-2xl opacity-20 select-none">ADVERTISEMENT</span>
                            </div>
                            <AdSenseAd
                                slotId="9928505998"
                                width={300}
                                height={250}
                                format="rectangle"
                                responsive={false}
                                style={{ display: 'block', width: '300px', height: '250px' }}
                            />
                        </div>

                        {!showAdContent ? (
                            <>
                                <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                <p className="text-sm text-gray-500">Loading your image...</p>
                            </>
                        ) : (
                            <button
                                onClick={handleAdContinue}
                                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                            >
                                <span>Continue to Image</span>
                                <ChevronRightIcon className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Image Modal */}
            {selectedImageIndex !== null && (
                <ImageModal
                    imageUrl={getThumbnail(images[selectedImageIndex], 1200)} // Use proxy for modal to avoid localhost hotlink blocks
                    altText={getAltText(selectedImageIndex)}
                    onClose={closeModal}
                    onPrev={() => setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length)}
                    onNext={() => setSelectedImageIndex((selectedImageIndex + 1) % images.length)}
                    currentIndex={selectedImageIndex}
                    totalImages={images.length}
                />
            )}
        </>
    );
};
