'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpenIcon, ScaleIcon, DollarSignIcon, ChefHatIcon, ArrowRightIcon } from './Icons';

interface RecommendedItem {
    title: string;
    description: string;
    href: string;
    icon: any;
    color: string;
}

const popularContent: RecommendedItem[] = [
    {
        title: 'Sourdough Master Guide',
        description: '6-stage framework to perfect artisan bread',
        href: '/dashboard/guide',
        icon: BookOpenIcon,
        color: 'bg-orange-50 text-orange-600'
    },
    {
        title: 'Recipe Scaler',
        description: 'Scale recipes perfectly every time',
        href: '/tools/recipe-scaler',
        icon: ScaleIcon,
        color: 'bg-blue-50 text-blue-600'
    },
    {
        title: 'Cost Calculator',
        description: 'Price your baked goods profitably',
        href: '/tools/cake-pricing-calculator',
        icon: DollarSignIcon,
        color: 'bg-green-50 text-green-600'
    },
    {
        title: 'All Tools',
        description: 'Explore our complete toolkit',
        href: '/tools',
        icon: ChefHatIcon,
        color: 'bg-pink-50 text-brand-pink'
    }
];

export default function RecommendedContent() {
    const [recommendations, setRecommendations] = useState<RecommendedItem[]>(popularContent);

    useEffect(() => {
        // Get recently viewed pages from localStorage
        const recentPages = localStorage.getItem('recentlyViewed');
        if (recentPages) {
            // TODO: Implement smart recommendations based on viewing history
            // For now, just use popular content
        }
    }, []);

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="font-serif text-3xl font-bold text-stone-900 mb-1">Recommended For You</h2>
                    <p className="text-stone-500">Based on your activity</p>
                </div>
                <Link href="/tools" className="text-sm font-bold text-stone-400 hover:text-brand-pink transition-colors flex items-center gap-1">
                    View all <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendations.map((item, index) => (
                    <Link key={index} href={item.href} className="group">
                        <div className="bg-white p-6 rounded-[2rem] border border-stone-100 hover:border-brand-pink/30 hover:shadow-lg transition-all h-full">
                            <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-stone-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-stone-500">{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
