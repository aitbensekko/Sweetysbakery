"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { affiliateProducts } from '../data/affiliateProducts';
import { ProductCard } from './ProductCard'; // Import ProductCard
import Image from 'next/image';
import AdSenseAd from './AdSenseAd';
import { Footer } from './Footer';
import { ToolId, toolIdToSlug } from './utils/slugs';

interface ProductDetailPageProps {
    slug: string; // The slug will be passed from the router
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-brand-border/50 rounded-xl overflow-hidden bg-gray-50/50 hover:bg-white transition-colors duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className="font-bold text-lg text-brand-text-title">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 pt-0 text-brand-text-body/90 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
    const router = useRouter();
    const handleNavigate = (path: string) => router.push(path);
    const setActiveTool = (toolId: ToolId) => {
        router.push(toolIdToSlug(toolId));
    };
    // Initialize state synchronously to avoid flash of "Not Found"
    const [product] = useState<typeof affiliateProducts[0] | null>(() => {
        return affiliateProducts.find(p => p.slug === slug) || null;
    });

    const similarProducts = product ? affiliateProducts.filter(
        p => p.category === product.category && p.id !== product.id
    ).slice(0, 4) : []; // Get up to 4 similar products

    const newArrivals = affiliateProducts.slice(-4).reverse(); // Get last 4 products as new arrivals, reversed for latest first.

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-4xl font-serif text-brand-text-title mb-4">Product Not Found</h1>
                <p className="text-brand-text-body mb-6">The product you are looking for does not exist.</p>
                <button
                    onClick={() => handleNavigate('/products')}
                    className="inline-block bg-brand-pink text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-300"
                >
                    Back to All Products
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AdSenseAd />

                {/* Breadcrumbs */}
                <nav className="flex mb-8 text-sm text-brand-text-body/60" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <button onClick={() => handleNavigate('/')} className="hover:text-brand-pink transition-colors">
                                Home
                            </button>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <button
                                    onClick={() => handleNavigate(product.category === 'Ebooks' ? '/baking-ebooks' : '/products')}
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    {product.category === 'Ebooks' ? 'Baking Ebooks' : 'Products'}
                                </button>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="text-brand-text-body font-medium truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="bg-white rounded-3xl shadow-sm border border-brand-border/50 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">


                        {/* Image Section */}
                        <div className="p-8 md:p-12 bg-gray-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-border/50">
                            <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center overflow-hidden">
                                <Image
                                    className="object-contain hover:scale-105 transition-transform duration-500"
                                    src={product.imageUrl}
                                    alt={product.imageAlt || product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-8 md:p-12 flex flex-col">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                                    {product.category}
                                </span>
                                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-title leading-tight mb-4">
                                    {product.name}
                                </h1>

                                {product.rating && (
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-yellow-400">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'text-gray-200 fill-current'}`}
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-brand-text-body font-medium">
                                            {product.rating.toFixed(1)} / 5.0
                                        </span>
                                    </div>
                                )}
                            </div>

                            <p className="text-lg text-brand-text-body/80 leading-relaxed mb-8">
                                {product.excerpt}
                            </p>

                            {/* Pros and Cons */}
                            {(product.pros || product.cons) && (
                                <div className="grid grid-cols-1 gap-6 mb-8">
                                    {product.pros && (
                                        <div className="bg-green-50/30 rounded-2xl p-6 border border-green-100/50 hover:shadow-sm transition-shadow duration-300">
                                            <h3 className="text-green-800 font-bold mb-4 flex items-center gap-2 text-lg">
                                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </span>
                                                What We Love
                                            </h3>
                                            <ul className="space-y-3">
                                                {product.pros.map((pro, index) => (
                                                    <li key={index} className="text-green-900/80 text-sm flex items-start gap-3">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 shadow-sm" />
                                                        <span className="leading-relaxed">{pro}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {product.cons && (
                                        <div className="bg-red-50/30 rounded-2xl p-6 border border-red-100/50 hover:shadow-sm transition-shadow duration-300">
                                            <h3 className="text-red-800 font-bold mb-4 flex items-center gap-2 text-lg">
                                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                </span>
                                                Things to Consider
                                            </h3>
                                            <ul className="space-y-3">
                                                {product.cons.map((con, index) => (
                                                    <li key={index} className="text-red-900/80 text-sm flex items-start gap-3">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 shadow-sm" />
                                                        <span className="leading-relaxed">{con}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="mt-auto pt-8 border-t border-brand-border/50">
                                <a
                                    href={product.affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored nofollow"
                                    className="group w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#FF9900] to-[#FFB84D] hover:from-[#e68a00] hover:to-[#FF9900] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <svg className="w-6 h-6 mr-2 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                                        <path d="M13.2 16.3c1.9 0 3.6-.4 5.2-1.1 0 0 .2-.1.2.2 0 .4-.5 1.7-.6 1.9-.1.2-.3.3-.6.4-1.5.6-3.2.9-4.8.9-2.9 0-5.4-1.3-7.2-3.6-.1-.1 0-.3.1-.4l1.4-1.2c.1-.1.3-.1.4 0 1.5 1.8 3.5 2.9 5.9 2.9zm6.6-6.3c.3.4.4.9.4 1.4 0 2.2-1.8 4-4 4-1.3 0-2.5-.6-3.2-1.6-.1-.1-.1-.3 0-.4l1.2-1.4c.1-.1.3-.1.4 0 .4.6 1 .9 1.6.9 1.1 0 2-.9 2-2 0-.3-.1-.6-.2-.8-.1-.1 0-.3.1-.4l1.3-1.1c.1-.1.3-.1.4 0 .1.1.2.2.4.4z" />
                                        <path d="M15.6 1.8c.2 0 .4.1.5.3l1.8 5.4c.1.2 0 .4-.2.5l-5.4 1.8c-.2.1-.4 0-.5-.2l-1.8-5.4c-.1-.2 0-.4.2-.5l5.4-1.8z" opacity="0" />
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
                                    </svg>
                                    Check Price on Amazon
                                </a>
                                <p className="mt-3 text-xs text-brand-text-body/60 text-center md:text-left">
                                    As an Amazon Associate, we earn from qualifying purchases.
                                </p>
                            </div>
                        </div>
                    </div>

                    <AdSenseAd slotId="4569891627" className="my-8" />


                    {/* Detailed Description and Features */}
                    <div className="p-8 md:p-12 bg-white border-t border-brand-border/50">
                        {product.detailedDescription && (
                            <div className="mb-12">
                                <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-6">Detailed Overview</h2>
                                <div className="prose prose-lg prose-pink max-w-none text-brand-text-body">
                                    <div dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
                                </div>
                            </div>
                        )}

                        {product.features && product.features.length > 0 && (
                            <div className="mb-12">
                                <h3 className="font-serif text-xl font-bold text-brand-text-title mb-6">Key Features</h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 bg-brand-pink-light/20 p-4 rounded-xl">
                                            <span className="mt-1 w-2 h-2 rounded-full bg-brand-pink flex-shrink-0" />
                                            <span className="text-brand-text-body font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <AdSenseAd slotId="4784663984" className="my-8" />

                        <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-6">Our Review</h2>
                        <div className="prose prose-lg prose-pink max-w-none text-brand-text-body">
                            <div dangerouslySetInnerHTML={{ __html: product.review }} />
                        </div>

                        {/* FAQ Section */}
                        {product.faq && product.faq.length > 0 && (
                            <div className="mt-16 pt-12 border-t border-brand-border/50">
                                <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-8 text-center">Frequently Asked Questions</h2>
                                <div className="max-w-3xl mx-auto space-y-4">
                                    {product.faq.map((item, index) => (
                                        <FAQItem key={index} question={item.question} answer={item.answer} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <AdSenseAd slotId="1978473644" className="my-12" />

                {/* Similar Products Section */}
                <div className="mt-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-serif font-bold text-brand-text-title">You Might Also Like</h2>
                        <button onClick={() => handleNavigate('/products')} className="text-brand-pink font-bold hover:underline hidden sm:block">View All Products</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {similarProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

                {/* New Arrivals Section */}
                <div className="mt-24 mb-12">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-8">New Arrivals</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {newArrivals.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

                <div className="mt-16">

                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
