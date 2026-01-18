'use client';

import { Shop } from '../data/shops';
import CheckInButton from './CheckInButton';
import ReviewSection from './ReviewSection';
import Link from 'next/link';

interface ShopDetailsProps {
    shop: Shop;
}

export default function ShopDetails({ shop }: ShopDetailsProps) {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/coffee-shop-directory" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium mb-8 group transition-colors">
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Directory
            </Link>

            {/* Hero Section */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
                <div className="relative h-96">
                    <img
                        src={shop.imageUrl}
                        alt={shop.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-8 w-full">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider ${shop.type === 'bakery'
                                            ? 'bg-pink-500 text-white'
                                            : 'bg-amber-600 text-white'
                                            }`}>
                                            {shop.type === 'coffee_shop' ? 'Coffee Shop' : 'Bakery'}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md text-sm font-bold">
                                            {shop.priceRange}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 shadow-sm">
                                        {shop.name}
                                    </h1>
                                    <div className="flex items-center text-white/90 font-medium">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {shop.address}, {shop.city}, {shop.state} {shop.zip}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 shrink-0">
                                    <CheckInButton shopId={shop.id} />
                                    {shop.website && (
                                        <a
                                            href={shop.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-center transition-all flex items-center justify-center gap-2"
                                        >
                                            Visit Website
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-gray-100 border-b border-gray-100">
                    <div className="p-8">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Rating</h3>
                        <div className="flex items-center gap-4">
                            <div className="text-5xl font-extrabold text-gray-900">{shop.rating}</div>
                            <div>
                                <div className="text-yellow-400 text-xl tracking-wide">
                                    {'★'.repeat(Math.floor(shop.rating))}
                                    {shop.rating % 1 !== 0 && '½'}
                                </div>
                                <div className="text-gray-500 font-medium">{shop.reviewCount.toLocaleString()} reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 md:col-span-2">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">About</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {shop.description}
                        </p>
                    </div>
                </div>

                <div className="p-8 bg-gray-50/50">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Specialties</h3>
                    <div className="flex flex-wrap gap-3">
                        {shop.specialties.map(specialty => (
                            <span
                                key={specialty}
                                className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium shadow-sm"
                            >
                                {specialty}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <ReviewSection shopId={shop.id} />
        </div>
    );
}
