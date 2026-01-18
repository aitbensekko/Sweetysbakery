'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { shops, Shop } from '../data/shops';
import ShopCard from './ShopCard';
import { toolSuggestions } from '@/data/toolSuggestions';
import ToolCard from './ToolCard';

// Dynamically import ShopMap to prevent SSR issues with Leaflet
const ShopMap = dynamic(() => import('./ShopMap'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">Loading Map...</div>
});

export default function ShopDirectory() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cityFilter, setCityFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState<'all' | 'bakery' | 'coffee_shop'>('all');

    const cities = useMemo(() => {
        return ['All', ...Array.from(new Set(shops.map(s => s.city))).sort()];
    }, []);

    const filteredShops = useMemo(() => {
        return shops.filter(shop => {
            const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                shop.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCity = cityFilter === 'All' || shop.city === cityFilter;
            const matchesType = typeFilter === 'all' || shop.type === typeFilter;

            return matchesSearch && matchesCity && matchesType;
        });
    }, [searchTerm, cityFilter, typeFilter]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Bakery & Coffee Shop Directory
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover the best spots for pastries and caffeine across the country. Curated by our community of food lovers.
                </p>
            </div>

            {/* Map Section */}
            <div className="mb-10">
                <ShopMap shops={filteredShops} />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Search */}
                    <div className="md:col-span-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by name or specialty..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* City Filter */}
                    <div className="md:col-span-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <select
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all appearance-none"
                            value={cityFilter}
                            onChange={(e) => setCityFilter(e.target.value)}
                        >
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Type Filter */}
                    <div className="md:col-span-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-200">
                            <button
                                onClick={() => setTypeFilter('all')}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${typeFilter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setTypeFilter('bakery')}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${typeFilter === 'bakery' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Bakeries
                            </button>
                            <button
                                onClick={() => setTypeFilter('coffee_shop')}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${typeFilter === 'coffee_shop' ? 'bg-white text-amber-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Coffee
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            {filteredShops.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredShops.map(shop => (
                        <ShopCard key={shop.id} shop={shop} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No shops found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                    <button
                        onClick={() => { setSearchTerm(''); setCityFilter('All'); setTypeFilter('all'); }}
                        className="mt-6 text-pink-600 font-medium hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}

            {/* CTA Section */}
            {/* CTA Section */}
            <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-amber-500 rounded-full opacity-20 blur-3xl"></div>

                <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Own a Bakery or Coffee Shop?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We'd love to feature your business in our directory! Join our curated list of the best spots in the country and reach thousands of food lovers every day.
                        </p>
                        <div className="inline-flex items-center gap-2 text-white font-medium bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>Send us a message at <a href="mailto:contact.sbakery@gmail.com" className="text-pink-400 hover:text-pink-300 underline decoration-2 underline-offset-4">contact.sbakery@gmail.com</a></span>
                        </div>
                    </div>

                    <div className="shrink-0">
                        <div className="bg-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">🏪</div>
                                <div>
                                    <div className="font-bold text-gray-900">Your Shop Here</div>
                                    <div className="text-xs text-gray-500">Join the community</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-100 rounded w-full"></div>
                                <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tool Suggestions Section */}
            <div className="mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Recommended Baking Tools & Articles
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Level up your baking with our curated selection of essential tools and in-depth reviews.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolSuggestions.map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>
            </div>
        </div>
    );
}
