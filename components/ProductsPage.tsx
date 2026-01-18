"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { affiliateProducts } from '../data/affiliateProducts';
import { toolIdToSlug } from './utils/slugs';
import { ProductCard } from './ProductCard'; // Corrected import path
import AdSenseAd from './AdSenseAd';

interface ProductsPageProps {
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const router = useRouter();
  const handleNavigate = (path: string) => router.push(path);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = affiliateProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-brand-pink-light to-brand-background pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text-title mb-4">
            Curated Baking Essentials
          </h1>
          <p className="text-lg text-brand-text-body mb-8 max-w-2xl mx-auto">
            Discover our favorite tools, ingredients, and equipment to elevate your baking game. Handpicked for quality and performance.
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
              className="block w-full pl-12 pr-4 py-4 border-0 rounded-full bg-white shadow-md text-brand-text-title placeholder-gray-400 focus:ring-2 focus:ring-brand-pink focus:outline-none transition-shadow duration-300"
              placeholder="Search for pans, mixers, ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSenseAd />

        {/* Affiliate Disclaimer */}
        <div className="max-w-3xl mx-auto mb-12 text-center mt-8">
          <p className="text-sm text-brand-text-body/70 bg-white/50 inline-block px-4 py-2 rounded-full border border-brand-border/50">
            Transparency: As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
            <a href={toolIdToSlug('disclaimer')} onClick={(e) => { e.preventDefault(); handleNavigate('/disclaimer'); }} className="text-brand-pink hover:underline font-semibold ml-1">
              Read more.
            </a>
          </p>
        </div>

        <AdSenseAd slotId="4569891627" className="mb-8" />

        {filteredProducts.filter(p => p.category !== 'Ebooks').length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredProducts.filter(p => p.category !== 'Ebooks').map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-brand-border/50 mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink-light mb-4">
              <svg className="w-8 h-8 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-text-title mb-2">No products found</h3>
            <p className="text-brand-text-body mb-6">We couldn't find any matches for "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-brand-pink font-bold hover:underline"
            >
              Clear Search & Show All
            </button>
          </div>
        )}

        <AdSenseAd slotId="4784663984" className="mb-16" />

        {/* Recommended Resources Section */}
        <div className="mt-24 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-4">More Than Just Products</h2>
            <p className="text-brand-text-body max-w-2xl mx-auto">Explore our suite of free baking tools and guides designed to help you succeed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cake Pricing Calculator",
                desc: "Ensure your baking business is profitable with our easy-to-use pricing tool.",
                link: '/tools/cake-pricing',
                slug: 'cake-pricing',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                )
              },
              {
                title: "Baking Pan Converter",
                desc: "Adapt any recipe to fit the pans you have on hand without the math headache.",
                link: '/tools/baking-pan-converter',
                slug: 'baking-pan-converter',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                )
              },
              {
                title: "Baking Blog",
                desc: "Discover tips, tutorials, and delicious recipes to elevate your baking skills.",
                link: '/blog',
                slug: 'baking-blog',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl border border-brand-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-text-title mb-3">{item.title}</h3>
                <p className="text-brand-text-body/80 mb-6 leading-relaxed">{item.desc}</p>
                <a
                  href={toolIdToSlug(item.slug as any)}
                  onClick={(e) => { e.preventDefault(); handleNavigate(item.link); }}
                  className="inline-flex items-center text-brand-pink font-bold hover:underline"
                >
                  Explore Tool <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Ebooks Section */}
        {filteredProducts.filter(p => p.category === 'Ebooks').length > 0 && (
          <div className="mb-16" id="baking-ebooks">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-brand-text-title">Popular Baking Ebooks</h2>
              <a href="https://www.amazon.com/s?k=ebook+baking" target="_blank" rel="noopener noreferrer" className="text-brand-pink font-bold hover:underline flex items-center">
                View All on Amazon <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.filter(p => p.category === 'Ebooks').map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        <AdSenseAd slotId="1978473644" className="my-12" />
      </div>
    </div>
  );
};

export default ProductsPage;