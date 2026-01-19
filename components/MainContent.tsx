"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    ClockIcon, ChevronRightIcon, CakePricingIcon, RecipeScalerIcon, PercentIcon, MeasurementIcon,
    SweetenerIcon, BakingPanIcon, ManagementIcon, DocumentIcon, InstagramIcon,
    PlayIcon, IngredientSwapIcon, PlusCircleIcon,
    AlertTriangleIcon, DollarSignIcon, ThermometerIcon, SimpleCalcIcon, ProteinIcon, YeastIcon,
    ClipboardIcon, CalendarIcon, ChecklistIcon, HeartIcon, CommentIcon,
    YoutubeIcon, XIcon, ShoppingCartIcon,
    WhatsAppIcon,
    MapPinIcon,
    WaterDropIcon,
    PastryBagIcon,
    PaletteIcon, MyArtIcon,
    FlavorWheelIcon,
    MacaronIcon,
    ArrowLeftIcon
} from './Icons';
import { ImageModal } from './ImageModal';
import type { ToolId } from './utils/slugs';
import { toolIdToSlug } from './utils/slugs';
import { ToolContainer } from './tools/ToolContainer';
import { CakePricingCalculator } from './tools/CakePricingCalculator';
import { RecipeScaler } from './tools/RecipeScaler';
import { BakersPercentage } from './tools/BakersPercentage';
import { MeasurementConverter } from './tools/MeasurementConverter';
import { SimpleCalculator } from './tools/SimpleCalculator';
import { PercentageCalculator } from './tools/PercentageCalculator';
import { SweetenerConverter } from './tools/SweetenerConverter';
import { ProteinMacroCalculator } from './tools/ProteinMacroCalculator';
import { BakingPanConverter } from './tools/BakingPanConverter';
import { YeastConverter } from './tools/YeastConverter';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

import { About } from './About';
import { Footer } from './Footer';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfUse } from './TermsOfUse';
import { ContactUs } from './ContactUs';
import { Disclaimer } from './Disclaimer';
import { OvenTemperatureConverter } from './tools/OvenTemperatureConverter';
import { VolumeConverter } from './tools/VolumeConverter';
import { WeightConverter } from './tools/WeightConverter';
import { ManagementDashboard } from './tools/ManagementDashboard';
import { OrderManagement } from './tools/OrderManagement';
import { DessertCalculator } from './tools/DessertCalculator';
import { BakerSchedule } from './tools/BakerSchedule';
import { DigitalNotebook } from './tools/DigitalNotebook';
import { MultipleTimer } from './tools/MultipleTimer';
import { RecipeBox } from './tools/RecipeBox';
import { AllergenGuide } from './tools/AllergenGuide';
import { IngredientSubstitutions } from './tools/IngredientSubstitutions';
import { BakingBucketList } from './tools/BakingBucketList';
import { BakingTutorials } from './tools/BakingTutorials';
import { BakingBlog } from './tools/BakingBlog';
import { BlogPostPage } from './tools/BlogPostPage';
import { PregnancyCalculator } from './tools/PregnancyCalculator';
import { CalorieCalculator } from './tools/CalorieCalculator';
import { WeightLossCalculator } from './tools/WeightLossCalculator';
import { BmrCalculator } from './tools/BmrCalculator';
import { IdealWeightCalculator } from './tools/IdealWeightCalculator';
import { PaceCalculator } from './tools/PaceCalculator';
import { AgeCalculator } from './tools/AgeCalculator';
import { DateCalculator } from './tools/DateCalculator';
import { TimeCalculator } from './tools/TimeCalculator';
import { TipCalculator } from './tools/TipCalculator';
import { BodyFatCalculator } from './tools/BodyFatCalculator';
import { PaymentCalculator } from './tools/PaymentCalculator';


import { navConfig } from './Sidebar';
import { EssentialRecipes } from './tools/EssentialRecipes';
// HeroIllustration is now dynamic below (line ~130)
import { DoughHydrationCalculator } from './tools/DoughHydrationCalculator';
import { InventoryManagement } from './tools/InventoryManagement';
import { CostPerRecipeCalculator } from './tools/CostPerRecipeCalculator';
import { GanacheCalculator } from './tools/GanacheCalculator';
import { ButtercreamCalculator } from './tools/ButtercreamCalculator';
import { FondantCalculator } from './tools/FondantCalculator';
import { FrostingColorMixer } from './tools/FrostingColorMixer';
import { FlavorPairingGuide } from './tools/FlavorPairingGuide';
import { MacaronTroubleshooting } from './tools/MacaronTroubleshooting';
import { Stopwatch } from './tools/Stopwatch';
import { IngredientGlossary } from './tools/IngredientGlossary';
import { TemperatureConverter } from './tools/TemperatureConverter';
import { ButterfatConverter } from './tools/ButterfatConverter';
import { BmiCalculator } from './tools/BmiCalculator';
import { HydrationConverter } from './tools/HydrationConverter';
import { RelaxingVideos } from './tools/RelaxingVideos';
import { DoughTemperatureCalculator } from './tools/DoughTemperatureCalculator';
import { DrinksVideos } from './tools/DrinksVideos';
import { MyArtGallery } from './tools/MyArtGallery';
import { KitchenAidReviews } from './tools/KitchenAidReviews';
import { BakingSources } from './tools/BakingSources';
import { AllTools } from './tools/AllTools';
import { allImages, getThumbnail } from './tools/MyArtGallery';
import { MortgageAffordabilityCalculator } from './tools/MortgageAffordabilityCalculator';
import { MortgagePayoffCalculator } from './tools/MortgagePayoffCalculator';
import { InvestmentCalculator } from './tools/InvestmentCalculator';
import { AmortizationCalculator } from './tools/AmortizationCalculator';
import { PremiumGuard } from './auth/PremiumGuard';
import { ShoppingList } from './tools/ShoppingList';
import ShopDirectory from './ShopDirectory';
import { CustomCakeOrderBuilder } from './tools/CustomCakeOrderBuilder';
import { RecipeScalingCostingTool } from './tools/RecipeScalingCostingTool';
import { CakeDesignCreator } from './tools/CakeDesignCreator';
import { BakeryOrderPlanner } from './tools/BakeryOrderPlanner';
import { LabelGenerator } from './tools/LabelGenerator';
import { RecipeIndex } from './RecipeIndex';
import type { BlogPost } from '../data/blogPosts';
import Ad from './Ad';
import AdSenseAd from './AdSenseAd';
import { BakingEbooksPage } from './BakingEbooksPage';
import { affiliateProducts } from '../data/affiliateProducts';
import { ProductCard } from './ProductCard';
import { PremiumTemplatesPage } from './PremiumTemplatesPage';
import { PremiumPromo } from './PremiumPromo';
import { AdUnit } from './AdUnit';
import dynamic from 'next/dynamic';

// Dynamic Imports for Heavy Components
const RecipeGenerator = dynamic(() => import('./tools/RecipeGenerator').then(mod => ({ default: mod.RecipeGenerator })), { ssr: false });
const CakeVisualizerSection = dynamic(() => import('./tools/CakeVisualizerSection').then(mod => ({ default: mod.CakeVisualizerSection })), { ssr: false });
import { shops } from '../data/shops';
import ShopCard from './ShopCard';
// InternalLinkRecommendations is already dynamic below (line 124)

// Dynamic import for InternalLinkRecommendations
const InternalLinkRecommendations = dynamic(() => import('./InternalLinkRecommendations').then(mod => ({ default: mod.InternalLinkRecommendations })), {
    ssr: false
});

const HeroIllustration = dynamic(() => import('./HeroIllustration'), { ssr: false });

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
        <div className="inline-block bg-brand-pink-light text-brand-pink p-4 rounded-2xl mx-auto mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-300 transform group-hover:rotate-3">
            {icon}
        </div>
        <h3 className="text-xl font-serif font-bold text-brand-text-title mb-3">{title}</h3>
        <p className="text-brand-text-body/90 text-sm leading-relaxed flex-grow">{children}</p>
    </div>
);


interface ToolCardProps {
    icon: React.ReactNode;
    title: string;
    time: string;
    children: React.ReactNode;
    toolId: ToolId;
    setActiveTool: (toolId: ToolId) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title, time, children, toolId, setActiveTool }) => (
    <a href={toolIdToSlug(toolId)} onClick={(e) => { e.preventDefault(); setActiveTool(toolId); }} className="text-left bg-brand-pink-light p-5 rounded-2xl border border-transparent hover:shadow-lg hover:border-brand-pink/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
        <div className="bg-white text-brand-pink mb-4 rounded-full p-3 w-max shadow-sm group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-lg font-serif font-bold text-brand-text-title">{title}</h3>
        <p className="text-sm text-brand-text-body/80 mt-2 mb-4 flex-grow">{children}</p>
        <div className="flex items-center gap-2 text-brand-text-body/60">
            <ClockIcon className="w-4 h-4" />
            <span className="text-xs font-semibold">{time}</span>
        </div>
    </a>
);

const FaqItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <details className="border border-brand-border rounded-xl bg-white overflow-hidden transition-all duration-300 hover:border-brand-pink/50 group">
        <summary className="p-5 cursor-pointer flex justify-between items-center font-bold text-brand-text-title group-hover:text-brand-pink transition-colors">
            {title}
            <ChevronRightIcon className="accordion-arrow w-5 h-5 text-brand-pink transition-transform duration-300" />
        </summary>
        <div className="px-5 pb-5 text-brand-text-body/90 border-t border-brand-border">
            {children}
        </div>
    </details>
);

const UpdateItem: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="bg-brand-pink-light text-brand-pink p-3 rounded-full flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-brand-text-title">{title}</h4>
            <p className="text-sm text-brand-text-body/80 mt-1">{children}</p>
        </div>
    </div>
);



const GuideCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-border">
        <div className="bg-brand-pink-light text-brand-pink p-3 rounded-full w-max mb-4">
            {icon}
        </div>
        <h4 className="font-bold font-serif text-brand-text-title text-xl">{title}</h4>
        <p className="text-sm text-brand-text-body/80 mt-2">{children}</p>
    </div>
);

const InstagramPostCard: React.FC<{ imageUrl: string; onClick: () => void; }> = ({ imageUrl, onClick }) => (
    <div onClick={onClick} className="group relative aspect-square block w-full h-full overflow-hidden rounded-2xl shadow-md cursor-pointer border border-brand-border/50">
        <img src={imageUrl} alt="Art gallery image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-md transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-75">
                <PlusCircleIcon className="w-8 h-8 text-white" />
            </div>
        </div>
    </div>
);

const artGalleryImages = allImages.slice(0, 6).map(imageUrl => ({ imageUrl }));
const featuredCreationsImages = allImages.slice(6, 10).map(imageUrl => ({ imageUrl, likes: '...', comments: '...' }));
const instagramPosts = allImages.slice(10, 22).map(imageUrl => ({ imageUrl, likes: '...', comments: '...' }));

// Select Featured Shops: Sweety's Bakery + 3 others
const featuredShops = [
    shops.find(s => s.id === 'bakery-user')!,
    shops.find(s => s.id === 'coffee-26')!, // Bacha
    shops.find(s => s.id === 'coffee-28')!, // Nomad
    shops.find(s => s.id === 'coffee-29')!  // Le Jardin
].filter(Boolean);

const WelcomeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm fade-in-fast">
        <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md m-4 p-6 sm:p-8 text-center relative border border-brand-border"
            onClick={e => e.stopPropagation()}
        >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-brand-pink transition-colors" aria-label="Close welcome message">
                <XIcon className="w-7 h-7" />
            </button>
            <div className="text-brand-pink mb-4">
                <HeartIcon className="w-12 h-12 mx-auto" fill="currentColor" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-3">Welcome to Sweety's Bakery!</h2>
            <p className="text-brand-text-body/90 mb-6">
                I'm so glad you're here! Explore the free tools and resources designed to help you on your baking journey.
            </p>
            <div className="bg-brand-pink-light p-4 rounded-lg border border-brand-border">
                <p className="font-semibold text-brand-text-title">Need a personal consultation?</p>
                <p className="text-sm text-brand-text-body/80 mt-1">
                    For custom advice, recipe development, or business tips, feel free to reach out to me directly at: <br />
                    <a href="mailto:contact.sbakery@gmail.com" className="font-bold text-brand-pink hover:underline">contact.sbakery@gmail.com</a>
                </p>
            </div>
        </div>
    </div>
);

const HomepageContent: React.FC<{ setActiveTool: (toolId: ToolId) => void; handleNavigate: (path: string) => void }> = ({ setActiveTool, handleNavigate }) => {
    const [randomBackgroundImage, setRandomBackgroundImage] = useState('');
    const [selectedImageState, setSelectedImageState] = useState<{ index: number; gallery: 'art' | 'instagram' | 'featured' } | null>(null);

    const openModal = (index: number, gallery: 'art' | 'instagram' | 'featured') => setSelectedImageState({ index, gallery });
    const closeModal = () => setSelectedImageState(null);

    useEffect(() => {
        if (allImages.length > 0) {
            const randomIndex = Math.floor(Math.random() * allImages.length);
            setRandomBackgroundImage(allImages[randomIndex]);
        }
    }, []); // Run once on mount

    const handleExploreClick = () => {
        const toolSuiteElement = document.getElementById('tool-suite');
        if (toolSuiteElement) {
            toolSuiteElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getActiveGalleryImages = () => {
        if (!selectedImageState) return [];
        switch (selectedImageState.gallery) {
            case 'art': return artGalleryImages;
            case 'instagram': return instagramPosts;
            case 'featured': return featuredCreationsImages; // Assuming featuredCreationsImages is available
            default: return [];
        }
    };

    const activeGalleryImages = getActiveGalleryImages();

    return (
        <>
            <div className="p-3 sm:p-4 md:p-6 lg:p-10 fade-in">
                {/* Ads handled globally by ClientLayout */}

                <header className="relative my-6 sm:my-8 md:my-12 lg:my-16 hero-interaction-area overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-pink-light/30 to-white border border-brand-border/50 shadow-sm">
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink font-bold text-xs sm:text-sm mb-4 sm:mb-6 tracking-wide uppercase">
                                The #1 Baking Resource
                            </div>
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-text-title leading-tight mb-4 sm:mb-6" lang="en">
                                Free Baking Calculators<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-pink-dark">& Professional Tools</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-text-body/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0" lang="en">
                                Empower your <strong>online bakery</strong> or home kitchen with professional-grade <strong>bakery tools</strong>. From accurate <strong>cake pricing calculators</strong> to expert <strong>baking recipes</strong>, we help you turn every recipe into a masterpiece. Looking for a <strong>bakery near me</strong>? We've got you covered.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                                <button
                                    onClick={handleExploreClick}
                                    className="bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base lg:text-lg">
                                    Explore Free Tools
                                </button>
                                <button
                                    onClick={() => setActiveTool('baking-blog')}
                                    className="bg-white text-brand-text-title font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-sm border border-brand-border hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base lg:text-lg">
                                    Read the Blog
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full max-w-xs sm:max-w-md md:max-w-full flex justify-center">
                            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                <HeroIllustration />
                            </div>
                            {/* Decorative circles behind illustration */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-pink/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-brand-pink/10 rounded-full animate-reverse-spin-slow"></div>
                        </div>
                    </div>
                </header>

                {/* AI Recipe Generator - Moved to Top */}
                <RecipeGenerator />

                {/* AI Cake Visualizer Studio */}
                <CakeVisualizerSection />

                {/* Premium Tool Promo Banner */}
                <PremiumPromo variant="banner" />

                <AdSenseAd />

                <AdSenseAd />

                {/* About Me Section */}
                <section className="my-20 relative">
                    <div className="absolute inset-0 bg-brand-pink-light/30 skew-y-3 transform origin-top-left z-0 rounded-3xl"></div>
                    <div className="relative z-10 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-brand-border max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="md:flex-shrink-0 relative group">
                            <div className="absolute inset-0 bg-brand-pink rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <Image
                                src="/images/sarah-profile.jpg"
                                alt="Sarah Ait Dahan - Sweety's Bakery"
                                width={224}
                                height={224}
                                className="relative w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-brand-pink/20 transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg">
                                <HeartIcon className="w-8 h-8 text-brand-pink fill-current" />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-serif font-bold text-brand-text-title mb-4">Hi, I'm Sarah!</h2>
                            <h3 className="text-xl text-brand-pink font-medium mb-6 uppercase tracking-wider">Baker & Creator</h3>
                            <p className="text-brand-text-body/90 text-lg leading-relaxed mb-6">
                                Welcome to my digital kitchen! <strong>Sweety's Bakery</strong> is born from a simple belief: <strong>baking should be a joy, not a math problem.</strong> Based in the heart of <strong>Marrakech</strong>, we are proud to be the <strong>best bakery</strong> for <strong>custom cakes</strong> and sweet treats.
                            </p>
                            <p className="text-brand-text-body/80 leading-relaxed mb-8">
                                I've poured my heart into creating these <strong>free baking calculators</strong> to help you bake with confidence. Whether you're scaling a family recipe, pricing your first <strong>wedding cake</strong>, or perfecting a <strong>birthday cake</strong> for a loved one, I'm here to support your journey.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a href="mailto:contact.sbakery@gmail.com" className="inline-flex items-center gap-2 text-brand-pink font-bold hover:text-brand-pink-dark transition-colors">
                                    <span className="border-b-2 border-brand-pink/30 hover:border-brand-pink">Get in Touch</span>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ads handled globally by ClientLayout */}

                <section className="my-10 py-12 px-4 bg-brand-pink-light/10 rounded-3xl border border-brand-border/30">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-white p-3 rounded-full shadow-sm mb-4">
                            <PaletteIcon className="w-8 h-8 text-brand-pink" />
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-brand-text-title mb-4">My Art Gallery</h2>
                        <p className="text-lg text-brand-text-body/80 max-w-2xl mx-auto">
                            A curated selection from our <strong>cake shop</strong> gallery. From <strong>custom cakes</strong> and <strong>cupcakes</strong> to <strong>gourmet cookies</strong> and delicate <strong>pastry shop</strong> favorites, each piece tells a story of flavor and design.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto px-2">
                        {artGalleryImages.map((post, index) => (
                            <InstagramPostCard key={index} imageUrl={getThumbnail(post.imageUrl, 400)} onClick={() => openModal(index, 'art')} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href={toolIdToSlug('my-art')}
                            onClick={(e) => { e.preventDefault(); setActiveTool('my-art'); }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform hover:scale-105">
                            <span>View Full Gallery</span>
                            <ChevronRightIcon className="w-5 h-5" />
                        </a>
                    </div>
                </section>

                <section className="my-12 relative rounded-2xl overflow-hidden shadow-xl border border-brand-border text-center group min-h-[28rem] md:h-96 flex items-center justify-center">
                    {randomBackgroundImage && (
                        <img
                            src={randomBackgroundImage}
                            alt="Inspiration background"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; // Prevent infinite loop
                                target.src = getThumbnail('https://sweetysbakery.com/images/Sweeetys Bakery IMG (10).JPG', 1200); // Fallback to a likely existing image
                            }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-brand-pink-dark/20 to-transparent"></div>
                    <div className="relative p-8 sm:p-12 text-white max-w-4xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg mb-4">
                            Find Your Inspiration
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 drop-shadow-md leading-relaxed mb-8">
                            Explore our gallery of beautiful creations, from rich <strong>chocolate cake</strong> and classic <strong>vanilla cake</strong> to moist <strong>carrot cake</strong>, creamy <strong>cheesecake</strong>, and elegant <strong>red velvet cake</strong>. Your next masterpiece is just a click away.
                        </p>
                        <a
                            href={toolIdToSlug('my-art')}
                            onClick={(e) => { e.preventDefault(); setActiveTool('my-art'); }}
                            className="inline-block bg-white text-brand-pink font-bold py-4 px-10 rounded-full shadow-lg hover:bg-brand-pink hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-white">
                            Explore The Gallery
                        </a>
                    </div>
                </section>

                {/* Featured Ebooks Section */}
                <section className="my-16">
                    <div className="flex items-center justify-between mb-8 px-4">
                        <h2 className="text-3xl font-serif font-bold text-brand-text-title">Popular Baking Ebooks</h2>
                        <a href={toolIdToSlug('baking-ebooks')} onClick={(e) => { e.preventDefault(); setActiveTool('baking-ebooks'); }} className="text-brand-pink font-bold hover:underline flex items-center">
                            View All <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                        {affiliateProducts.filter(p => p.category === 'Ebooks').slice(0, 6).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* Featured Bakeries Section */}
                <section className="my-16">
                    <div className="flex items-center justify-between mb-8 px-4">
                        <h2 className="text-3xl font-serif font-bold text-brand-text-title">Featured Bakeries & Cafes</h2>
                        <a href={toolIdToSlug('shop-directory')} onClick={(e) => { e.preventDefault(); setActiveTool('shop-directory'); }} className="text-brand-pink font-bold hover:underline flex items-center">
                            View Directory <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                        {featuredShops.map((shop) => (
                            <div key={shop.id} className="h-[400px]">
                                <ShopCard shop={shop} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="my-12">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-8 text-center">Everything You Need to Succeed</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" lang="en">
                        <FeatureCard icon={<ClockIcon className="w-6 h-6" />} title="Master Your Baking Time">Automate complex calculations like baker's percentages and recipe scaling for your favorite baking recipes, so you can focus on what you love—baking delicious cakes, cookies, and bread.</FeatureCard>
                        <FeatureCard icon={<DollarSignIcon className="w-6 h-6" />} title="Price for Bakery Profit">Our free cake pricing calculator helps you understand your food costs and set profitable prices for your home bakery, whether you're selling birthday cakes or sugar cookies.</FeatureCard>
                        <FeatureCard icon={<HeartIcon className="w-6 h-6" />} title="Bake with Confidence">Master tricky recipes with our macaron troubleshooting guide and find the perfect flavor combinations with our flavor pairing wheel. Perfect for beginners and experienced bakers.</FeatureCard>
                    </div>
                </section>

                {/* AdSense: Middle Large Rectangle (336x280) */}
                <AdSenseAd slotId="4784663984" width={336} height={280} />

                <section className="my-16 bg-white p-8 sm:p-12 rounded-2xl border border-brand-border text-center">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-2">Find the Best Free Baking Tools & Recipe Calculators</h2>
                    <p className="text-brand-text-body/80 max-w-2xl mx-auto mb-6">Explore our complete suite of <strong>free bakery tools</strong> designed to help you succeed. From <strong>cake pricing</strong> to <strong>recipe scaling</strong>, access powerful <strong>baking calculators</strong> at your fingertips. No sign-up required.</p>
                    <button
                        onClick={handleExploreClick}
                        className="inline-block bg-brand-pink text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-pink-dark transition-all duration-300 transform hover:scale-105">
                        Explore All Tools
                    </button>
                </section>





                <section className="my-16">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-8 text-center">Latest Updates</h2>
                    <div className="bg-white p-8 rounded-2xl border border-brand-border max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            <UpdateItem icon={<DocumentIcon className="w-6 h-6" />} title="New Recipes Added!">We've added full recipes for classics like Apple Pie, Fudgy Brownies, and more to the <a href={toolIdToSlug('baker-schedule')} onClick={(e) => { e.preventDefault(); setActiveTool('baker-schedule'); }} className="font-bold text-brand-pink hover:underline">Checklist</a>.</UpdateItem>
                            <UpdateItem icon={<PlayIcon className="w-6 h-6" />} title="Fresh Video Tutorials">Learn from the pros with new videos covering everything from brownies to apple pie in our <a href={toolIdToSlug('baking-tutorials')} onClick={(e) => { e.preventDefault(); setActiveTool('baking-tutorials'); }} className="font-bold text-brand-pink hover:underline">Tutorials</a> section.</UpdateItem>
                            <UpdateItem icon={<PlusCircleIcon className="w-6 h-6" />} title="Expanded Ingredients Database">The <a href={toolIdToSlug('recipe-scaler')} onClick={(e) => { e.preventDefault(); setActiveTool('recipe-scaler'); }} className="font-bold text-brand-pink hover:underline">Recipe Scaler</a> and <a href={toolIdToSlug('measurement-converter')} onClick={(e) => { e.preventDefault(); setActiveTool('measurement-converter'); }} className="font-bold text-brand-pink hover:underline">Baking Converter</a> are now more accurate.</UpdateItem>
                            <UpdateItem icon={<IngredientSwapIcon className="w-6 h-6" />} title="More Ingredient Swaps">Stuck in a pinch? Find even more common swaps in the <a href={toolIdToSlug('ingredient-substitutions')} onClick={(e) => { e.preventDefault(); setActiveTool('ingredient-substitutions'); }} className="font-bold text-brand-pink hover:underline">Ingredient Substitutions</a> tool.</UpdateItem>
                        </div>
                    </div>
                </section>

                <section className="my-16 bg-brand-pink-light p-8 sm:p-12 rounded-2xl">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-2 text-center">Baking Guides for Beginners</h2>
                    <p className="text-center text-brand-text-body/80 max-w-2xl mx-auto mb-8">New to baking? These <strong>baking tips for beginners</strong> and tools will help you start your journey with confidence, covering everything from essential tools to avoiding common mistakes.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" lang="en">
                        <GuideCard icon={<ChecklistIcon className="w-6 h-6" />} title="Essential Baking Tools">Discover the 10 must-have tools that will make your baking more consistent and enjoyable, from kitchen scales to oven thermometers.</GuideCard>
                        <GuideCard icon={<MeasurementIcon className="w-6 h-6" />} title="Mastering Baking Measurements">Learn why baking by weight is more accurate and use our converter to easily switch between cups, grams, and ounces for any baking ingredient.</GuideCard>
                        <GuideCard icon={<AlertTriangleIcon className="w-6 h-6" />} title="Troubleshoot Common Baking Fails">From sinking cakes to flat cookies, learn the causes of the most common baking fails and how to fix them for perfect results every time, even with challenging muffin recipes.</GuideCard>
                        <GuideCard icon={<DollarSignIcon className="w-6 h-6" />} title="Starting Your Home Bakery">Our 10-step guide covers the essentials, from understanding cottage food laws to pricing your baked goods for profit, whether it's birthday cakes or chocolate chip cookies.</GuideCard>
                    </div>
                </section>

                <section className="my-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif font-bold text-brand-text-title">Featured Creations</h2>
                        <p className="mt-2 text-brand-text-body/80 max-w-2xl mx-auto">A glimpse into the custom cakes and treats we love to make.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
                        {instagramPosts.slice(0, 6).map((post, index) => (
                            <InstagramPostCard key={index} {...post} imageUrl={getThumbnail(post.imageUrl, 400)} onClick={() => openModal(index, 'instagram')} />
                        ))}
                    </div>
                </section>

                <section className="my-16">
                    <div className="text-center mb-8">
                        <a href="https://www.instagram.com/sweetys.bakery/" target="_blank" rel="noopener noreferrer" className="inline-block" aria-label="Visit our Instagram">
                            <InstagramIcon className="w-12 h-12 mx-auto text-brand-pink" />
                        </a>
                        <h2 className="text-3xl font-serif font-bold text-brand-text-title mt-4">Follow Us on Instagram</h2>
                        <p className="mt-2 text-brand-text-body/80">Discover new recipes, cake decorating ideas, and behind-the-scenes content. <br /> Follow <a href="https://www.instagram.com/sweetys.bakery/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-pink hover:underline">@sweetys.bakery</a> and get inspired!</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
                        {instagramPosts.map((post, index) => (
                            <InstagramPostCard key={index} {...post} imageUrl={getThumbnail(post.imageUrl, 400)} onClick={() => openModal(index, 'instagram')} />
                        ))}
                    </div>
                </section>

                <section id="tool-suite" className="my-16">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-8 text-center">Our Suite of Bakery Tools</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" lang="en">
                        <ToolCard toolId="cake-pricing" setActiveTool={setActiveTool} icon={<CakePricingIcon className="w-6 h-6" />} title="Free Cake Pricing Calculator" time="Approx. 3-5 min to price">Price your cakes, cookies, and other baked goods accurately. This free calculator helps with <strong>food costing</strong>, labor, and overhead for your <strong>baking business</strong>.</ToolCard>
                        <ToolCard toolId="recipe-scaler" setActiveTool={setActiveTool} icon={<RecipeScalerIcon className="w-6 h-6" />} title="Free Recipe Scaler & Converter" time="Approx. 2 min to scale">Easily scale any <strong>recipe for catering</strong> or different batch sizes. Adjust by servings or multiplier, convert units, and automatically calculate baker's percentages.</ToolCard>
                        <ToolCard toolId="bakers-percentage" setActiveTool={setActiveTool} icon={<PercentIcon className="w-6 h-6" />} title="Free Baker's Percentage Calculator" time="Approx. 2 min to calculate">Use our free <strong>baker's math</strong> calculator for bread and pastry formulas. Create new <strong>sourdough recipes</strong> with precision by adjusting total flour weight.</ToolCard>
                        <ToolCard toolId="dough-temperature" setActiveTool={setActiveTool} icon={<ThermometerIcon className="w-6 h-6" />} title="Desired Dough Temp Calculator" time="Instant calculations">Achieve perfect fermentation by calculating the exact water temperature needed for your bread dough. A crucial tool for consistent sourdough.</ToolCard>
                        <ToolCard toolId="macaron-troubleshooting" setActiveTool={setActiveTool} icon={<MacaronIcon className="w-6 h-6" />} title="Free Macaron Troubleshooting" time="Diagnose in 2 min">Fix common macaron issues like cracked shells, no feet, and hollows with our free visual guide and expert <strong>baking tips for beginners</strong>.</ToolCard>
                        <ToolCard toolId="buttercream-calculator" setActiveTool={setActiveTool} icon={<PastryBagIcon className="w-6 h-6" />} title="Free Buttercream Calculator" time="Instant calculations">Estimate how much buttercream you need for any sized cake with our free <strong>cake decorating</strong> tool, including filling, crumb coating, and piping.</ToolCard>
                        <ToolCard toolId="ganache-calculator" setActiveTool={setActiveTool} icon={<WaterDropIcon className="w-6 h-6" />} title="Free Ganache Ratio Calculator" time="Instant calculations">Find the perfect <strong>chocolate to cream ratio</strong> for any type of ganache with our free calculator, from drips to firm <strong>cake fillings</strong>.</ToolCard>
                        <ToolCard toolId="frosting-color-mixer" setActiveTool={setActiveTool} icon={<PaletteIcon className="w-6 h-6" />} title="Free Frosting Color Mixer" time="Instant recipes">Achieve the perfect shade every time. Get free <strong>food coloring mixing chart</strong> ratios for popular buttercream and royal icing colors.</ToolCard>
                        <ToolCard toolId="flavor-pairing-guide" setActiveTool={setActiveTool} icon={<FlavorWheelIcon className="w-6 h-6" />} title="Free Flavor Pairing Guide" time="Instant inspiration">Discover what flavors go well together with our free, creative guide to pairing ingredients for cakes, cookies, and other <strong>dessert ideas</strong>.</ToolCard>
                        <ToolCard toolId="measurement-converter" setActiveTool={setActiveTool} icon={<MeasurementIcon className="w-6 h-6" />} title="Free Baking Measurement Converter" time="Instant conversions">Your free, all-in-one <strong>baking converter</strong>. Convert ingredients from volume to weight (cups to grams), switch between yeast types, and more for your recipes.</ToolCard>
                        <ToolCard toolId="simple-calculator" setActiveTool={setActiveTool} icon={<SimpleCalcIcon className="w-6 h-6" />} title="Free Simple Calculator" time="Instant calculations">A free, straightforward, easy-to-use arithmetic calculator for quick math, styled after a classic desktop calculator for your <strong>baking business</strong> needs.</ToolCard>
                        <ToolCard toolId="sweetener-converter" setActiveTool={setActiveTool} icon={<SweetenerIcon className="w-6 h-6" />} title="Free Sweetener Converter" time="Adjust in <1 min">Use our free calculator to swap sugars like honey, maple syrup, and stevia. Adjust the sweetness level of any <strong>healthy recipe</strong>.</ToolCard>
                        <ToolCard toolId="protein-macro" setActiveTool={setActiveTool} icon={<ProteinIcon className="w-6 h-6" />} title="Free Protein & Macro Calculator" time="Calculate instantly">Calculate your daily protein requirements and macronutrient goals for free based on age, activity level, and fitness goals to create <strong>healthy dessert recipes</strong>.</ToolCard>
                        <ToolCard toolId="baking-pan-converter" setActiveTool={setActiveTool} icon={<BakingPanIcon className="w-6 h-6" />} title="Free Baking Pan Converter" time="Approx. <1 min to convert">Use our free converter to easily adapt any <strong>cake recipe</strong> to a different size or shape of pan for perfect results every time.</ToolCard>
                        <ToolCard toolId="yeast-converter" setActiveTool={setActiveTool} icon={<YeastIcon className="w-6 h-6" />} title="Free Yeast Conversion Calculator" time="Approx. <1 min to convert">Instantly convert between dry, instant, and fresh yeast for free. Get precise measurements for your <strong>homemade bread recipe</strong>.</ToolCard>
                        <ToolCard toolId="oven-temp-converter" setActiveTool={setActiveTool} icon={<ThermometerIcon className="w-6 h-6" />} title="Free Oven Temperature Converter" time="Instant conversion">Quickly convert oven temperatures between Celsius (°C) and Fahrenheit (°F) with our free and simple baking temperature converter for any <strong>baking recipe</strong>.</ToolCard>
                        <ToolCard toolId="management-dashboard" setActiveTool={setActiveTool} icon={<ManagementIcon className="w-6 h-6" />} title="Free Bakery Management Dashboard" time="Manage your daily ops">Streamline your production with our free <strong>bakery management</strong> tools. Track inventory, manage prep lists, and log waste for your <strong>home bakery</strong>.</ToolCard>
                        <ToolCard toolId="order-management" setActiveTool={setActiveTool} icon={<ClipboardIcon className="w-6 h-6" />} title="Free Bakery Order Management" time="Streamline your orders">Manage all your customer orders in one place for free. Keep track of order status, customer details, and delivery dates for your <strong>baking business</strong>.</ToolCard>
                        <ToolCard toolId="baking-tutorials" setActiveTool={setActiveTool} icon={<YoutubeIcon className="w-6 h-6" />} title="Free Baking Tutorials" time="Learn anytime">Learn from the pros with our curated collection of the best free baking video tutorials, from <strong>cupcake recipes</strong> to <strong>sourdough bread</strong>.</ToolCard>
                        <ToolCard toolId="investment-calculator" setActiveTool={setActiveTool} icon={<DollarSignIcon className="w-6 h-6" />} title="Free Investment Calculator" time="Approx. 5 min to calculate">Plan your financial future with our free investment calculator. See how your savings can grow over time with compound interest.</ToolCard>
                    </div>
                </section>

                <section className="my-16">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <FaqItem title="Are these bakery calculators really free to use?">
                            <p className="pt-2">Yes, absolutely! All the tools and calculators on Sweety's Bakery Tools are 100% free to use. We created this as a resource to give back to the baking community. There are no hidden fees or sign-ups required.</p>
                        </FaqItem>
                        <FaqItem title="How accurate are the baking conversion calculators?">
                            <p className="pt-2">Our conversion tools use standardized data for ingredient densities (e.g., grams per cup) based on the <strong>baking science</strong> of common ingredients. While there can be slight variations depending on how you pack your flour, our numbers are based on industry standards for high accuracy in most baking scenarios, from <strong>healthy recipes</strong> to indulgent desserts.</p>
                        </FaqItem>
                        <FaqItem title="Can I use the cake pricing calculator for other desserts?">
                            <p className="pt-2">Definitely! While it's named the "Cake Pricing Calculator," the principles are the same for <strong>cookie recipes</strong>, pies, bread, and any other baked good. Simply input your specific ingredient costs, labor time, and desired profit margin to get an accurate price for any <strong>dessert recipe</strong>.</p>
                        </FaqItem>
                    </div>
                </section>

                <InternalLinkRecommendations />


            </div>
            {selectedImageState !== null && activeGalleryImages.length > 0 && (
                <ImageModal
                    imageUrl={getThumbnail(activeGalleryImages[selectedImageState.index].imageUrl, 1200)}
                    altText={`Gallery image ${selectedImageState.index + 1}`}
                    onClose={closeModal}
                    onPrev={() => setSelectedImageState({ ...selectedImageState, index: (selectedImageState.index - 1 + activeGalleryImages.length) % activeGalleryImages.length })}
                    onNext={() => setSelectedImageState({ ...selectedImageState, index: (selectedImageState.index + 1) % activeGalleryImages.length })}
                    currentIndex={selectedImageState.index}
                    totalImages={activeGalleryImages.length}
                />
            )}
        </>
    );
};

// --- BREADCRUMBS LOGIC ---
interface Breadcrumb {
    title: string;
    toolId?: ToolId;
}

const getPath = (toolId: ToolId): Breadcrumb[] => {
    // Start with Home as the base for every path
    const path: Breadcrumb[] = [{ title: 'Home', toolId: 'home' }];

    const pageTitles: Partial<Record<ToolId, string>> = {
        about: 'About Us',
        'privacy-policy': 'Privacy Policy',
        'terms-of-use': 'Terms of Use',
        'contact-us': 'Contact Us',
        'baking-ebooks': 'Baking Ebooks',
    };

    const title = pageTitles[toolId];
    if (title) {
        path.push({ title, toolId });
        return path;
    }

    // Check if activeTool is a category itself
    const categoryMatch = navConfig.find(c => c.id === toolId);
    if (categoryMatch) {
        path.push({ title: categoryMatch.title, toolId: categoryMatch.id as ToolId });
        return path;
    }

    // Find the tool in the navigation config to get its category
    for (const category of navConfig) {
        const tool = category.tools.find(t => t.id === toolId);
        if (tool) {
            // Add the category title (clickable)
            path.push({ title: category.title, toolId: category.id as ToolId });
            // Add the tool itself
            path.push({ title: tool.title || '', toolId: tool.id as ToolId });
            return path;
        }
    }
    return path; // Fallback to just "Home"
};

interface BreadcrumbsProps {
    activeTool: ToolId;
    setActiveTool: (toolId: ToolId) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ activeTool, setActiveTool }) => {
    const path = getPath(activeTool);

    if (path.length <= 1) return null;

    const parent = path[path.length - 2];

    return (
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-brand-text-body/80 w-full">
            {/* Mobile View: Back Link */}
            <div className="sm:hidden">
                <a
                    href={parent.toolId ? toolIdToSlug(parent.toolId) : '#'}
                    onClick={(e) => {
                        e.preventDefault();
                        if (parent.toolId) setActiveTool(parent.toolId);
                    }}
                    className="flex items-center gap-2 font-semibold text-brand-text-body hover:text-brand-pink transition-colors"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to {parent.title}
                </a>
            </div>

            {/* Desktop View: Full Breadcrumbs */}
            <ol className="hidden sm:flex items-center gap-1.5">
                {path.map((crumb, index) => {
                    const isLast = index === path.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap">
                            {index > 0 && <ChevronRightIcon className="w-4 h-4 text-brand-text-body/50 flex-shrink-0" />}
                            {isLast ? (
                                <span className="font-semibold text-brand-text-title" aria-current="page">
                                    {crumb.title}
                                </span>
                            ) : (
                                crumb.toolId ? (
                                    <a href={toolIdToSlug(crumb.toolId)} onClick={(e) => { e.preventDefault(); setActiveTool(crumb.toolId!); }} className="hover:text-brand-pink transition-colors">
                                        {crumb.title}
                                    </a>
                                ) : (
                                    <span className="text-brand-text-body">
                                        {crumb.title}
                                    </span>
                                )
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
// --- END BREADCRUMBS LOGIC ---


interface MainContentProps {
    activeTool: ToolId;
    setActiveTool: (toolId: ToolId) => void;
    activePost: BlogPost | null;
    handleNavigate: (path: string) => void;
}

export const MainContent: React.FC<MainContentProps> = ({ activeTool, setActiveTool, activePost, handleNavigate }) => {
    const breadcrumbs = <Breadcrumbs activeTool={activeTool} setActiveTool={setActiveTool} />;



    const renderContent = () => {
        if (activePost) {
            return <BlogPostPage setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} post={activePost} handleNavigate={handleNavigate} />;
        }

        switch (activeTool) {
            case 'home':
                return <HomepageContent setActiveTool={setActiveTool} handleNavigate={handleNavigate} />;
            case 'about':
                return <About setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'cake-pricing':
                return <CakePricingCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'cost-per-recipe':
                return <CostPerRecipeCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'recipe-scaler':
                return <RecipeScaler setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'bakers-percentage':
                return <BakersPercentage setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'dough-hydration':
                return <DoughHydrationCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'ganache-calculator':
                return <GanacheCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'dough-temperature':
                return <DoughTemperatureCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'buttercream-calculator':
                return <ButtercreamCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'fondant-calculator':
                return <FondantCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'temperature-converter':
                return <TemperatureConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'bmi-calculator':
                return <BmiCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'butterfat-converter':
                return <ButterfatConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'hydration-converter':
                return <HydrationConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'measurement-converter':
                return <MeasurementConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'simple-calculator':
                return <SimpleCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'percentage-calculator':
                return <PercentageCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'sweetener-converter':
                return <SweetenerConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'protein-macro':
                return <ProteinMacroCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'baking-pan-converter':
                return <BakingPanConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'yeast-converter':
                return <YeastConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'privacy-policy':
                return <PrivacyPolicy setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'terms-of-use':
                return <TermsOfUse setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'contact-us':
                return <ContactUs setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'oven-temp-converter':
                return <OvenTemperatureConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'volume-converter':
                return <VolumeConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'weight-converter':
                return <WeightConverter setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'management-dashboard':
                return <ManagementDashboard setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'order-management':
                return (
                    <PremiumGuard>
                        <OrderManagement setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />
                    </PremiumGuard>
                );
            case 'inventory-management':
                return (
                    <PremiumGuard>
                        <InventoryManagement setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />
                    </PremiumGuard>
                );
            case 'dessert-calculator':
                return <DessertCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'shopping-list':
                return <ShoppingList setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'baker-schedule':
                return <BakerSchedule setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'digital-notebook':
                return <DigitalNotebook setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'multiple-timer':
                return <MultipleTimer setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'stopwatch':
                return <Stopwatch setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'recipe-box':
                return <RecipeBox setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'my-art':
                return <MyArtGallery setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'kitchenaid-reviews':
                return <KitchenAidReviews setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'frosting-color-mixer':
                return <FrostingColorMixer setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'flavor-pairing-guide':
                return <FlavorPairingGuide setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'pregnancy-calculator':
                return <PregnancyCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'calorie-calculator':
                return <CalorieCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'weight-loss-calculator':
                return <WeightLossCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'body-fat-calculator':
                return <BodyFatCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'shop-directory':
                return <ShopDirectory />;
            case 'bmr-calculator':
                return <CalorieCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} isBmrMode={true} />;
            case 'ideal-weight-calculator':
                return <IdealWeightCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'age-calculator':
                return <AgeCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'date-calculator':
                return <DateCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'time-calculator':
                return <TimeCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'payment-calculator':
                return <PaymentCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;

            case 'mortgage-affordability':
                return <MortgageAffordabilityCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'mortgage-payoff':
                return <MortgagePayoffCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'tip-calculator':
                return <TipCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;

            case 'allergen-guide':
                return <AllergenGuide setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'ingredient-glossary':
                return <IngredientGlossary setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'ingredient-substitutions':
                return <IngredientSubstitutions setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'baking-ebooks':
                return <BakingEbooksPage setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'premium-templates':
                return <PremiumTemplatesPage setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'macaron-troubleshooting':
                return <MacaronTroubleshooting setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'baking-bucket-list':
                return <BakingBucketList setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'essential-recipes':
                return <EssentialRecipes setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'baking-tutorials':
                return <BakingTutorials setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'relaxing-videos':
                return <RelaxingVideos setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'drinks-videos':
                return <DrinksVideos setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'baking-blog':
                return activePost
                    ? <BlogPostPage setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} post={activePost} handleNavigate={handleNavigate} />
                    : <BakingBlog setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} activePost={activePost} handleNavigate={handleNavigate} />;
            case 'recipe-index':
                return activePost
                    ? <BlogPostPage setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} post={activePost} handleNavigate={handleNavigate} />
                    : <RecipeIndex posts={require('../data/blogPosts').blogPosts.filter((post: BlogPost) => post.type === 'recipe')} />;
            case 'investment-calculator':
                return <InvestmentCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'amortization-calculator':
                return <AmortizationCalculator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'disclaimer':
                return <Disclaimer setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'baking-sources':
                return <BakingSources setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'all-tools':
                return <AllTools setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'custom-cake-order-builder':
                return <CustomCakeOrderBuilder setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'recipe-scaling-costing':
                return <RecipeScalingCostingTool setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'cake-design-creator':
                return (
                    <PremiumGuard>
                        <CakeDesignCreator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />
                    </PremiumGuard>
                );
            case 'bakery-order-planner':
                return <BakeryOrderPlanner setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;
            case 'label-generator':
                return <LabelGenerator setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} />;

            // Categories
            case 'core':
            case 'converters':
            case 'management':
            case 'utilities':
            case 'kitchen':
            case 'family':
            case 'financial':
            case 'resources':
            case 'beverages':
                return <AllTools setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} categoryId={activeTool} />;

            default:
                return <HomepageContent setActiveTool={setActiveTool} handleNavigate={handleNavigate} />;
        }
    };


    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-pink/20">
            {/* Header and Sidebar are now handled by ClientLayout */}

            {/* Main Content Area */}
            <main className="flex-grow pt-4 md:pt-0"> {/* Reduced pt since Header is handled globally */}
                {/* Width constraint container for large screens */}
                <div className="w-full">
                    {renderContent()}
                </div>
            </main>

            <div className="mt-auto border-t border-slate-200 bg-white">

            </div>
        </div>
    );
};