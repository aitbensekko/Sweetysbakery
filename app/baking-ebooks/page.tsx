"use client";

import React, { useState } from 'react';
import { affiliateProducts } from '../../data/affiliateProducts';
import { ProductCard } from '../../components/ProductCard';
import { BookOpenIcon } from '../../components/Icons';

export default function EbooksPage() {
    const ebooks = affiliateProducts.filter(product => product.category === 'Ebooks');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEbooks = ebooks.filter(ebook =>
        ebook.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ebook.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-brand-background">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white border-b border-brand-border">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink font-bold text-xs uppercase tracking-widest mb-6">
                        <BookOpenIcon className="w-4 h-4" />
                        Digital Library
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-title mb-6 leading-tight">
                        Baking Ebooks <span className="text-brand-pink">&</span> Guides
                    </h1>

                    <p className="text-xl text-brand-text-body/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Expand your culinary knowledge with our curated collection of essential baking guides, recipe books, and masterclasses.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-brand-pink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-12 pr-4 py-4 border-2 border-brand-border/50 rounded-full bg-white shadow-sm text-brand-text-title placeholder-gray-400 focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 focus:outline-none transition-all duration-300"
                            placeholder="Search library..."
                        />
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {filteredEbooks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredEbooks.map(ebook => (
                            <ProductCard key={ebook.id} product={ebook} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-brand-border shadow-sm">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <BookOpenIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text-title mb-2">No guides found</h3>
                        <p className="text-brand-text-body/70">Try adjusting your search criteria</p>
                    </div>
                )}

                {/* Amazon Link Fallback */}
                <div className="mt-16 text-center">
                    <p className="text-brand-text-body/70 mb-4">Looking for something specific?</p>
                    <a
                        href="https://www.amazon.com/s?k=baking+cookbooks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand-pink font-bold hover:underline"
                    >
                        Browse all baking books on Amazon
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
