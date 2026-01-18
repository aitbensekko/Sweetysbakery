'use client';

import { Shop } from '../data/shops';
import Link from 'next/link';

interface ShopCardProps {
    shop: Shop;
    onClick?: () => void;
}

export default function ShopCard({ shop, onClick }: ShopCardProps) {
    const Wrapper = ({ children }: { children: React.ReactNode }) => {
        return (
            <Link
                href={`/coffee-shop-directory/${shop.slug}`}
                className="block h-full"
                onClick={onClick}
            >
                {children}
            </Link>
        );
    };

    return (
        <Wrapper>
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                        src={shop.imageUrl}
                        alt={shop.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                        {shop.priceRange}
                    </div>
                    <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-md text-xs font-bold shadow-sm uppercase tracking-wider ${shop.type === 'bakery'
                            ? 'bg-pink-100/90 text-pink-800 backdrop-blur-sm'
                            : 'bg-amber-100/90 text-amber-800 backdrop-blur-sm'
                            }`}>
                            {shop.type === 'coffee_shop' ? 'Coffee Shop' : 'Bakery'}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-pink-600 transition-colors">
                            {shop.name}
                        </h3>
                        <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold shrink-0 ml-2">
                            <span>★</span>
                            <span className="ml-1">{shop.rating}</span>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {shop.city}, {shop.state}
                    </p>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                        {shop.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {shop.specialties.slice(0, 3).map(specialty => (
                            <span
                                key={specialty}
                                className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full border border-gray-100"
                            >
                                {specialty}
                            </span>
                        ))}
                        {shop.specialties.length > 3 && (
                            <span className="text-xs text-gray-400 px-1 py-1">
                                +{shop.specialties.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
