import React from 'react';
import { ChefHatIcon } from '../../components/Icons';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-pink">
                    <ChefHatIcon className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">About Sweety's Bakery</h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                    We are dedicated to helping home bakers master the art of sourdough through science-based tools, tested recipes, and a supportive community.
                </p>
            </div>

            <div className="prose prose-stone prose-lg mx-auto">
                <p>
                    Founded in 2024, Sweety's Bakery started as a simple blog to document sourdough experiments.
                    It has since grown into a comprehensive resource for bakers of all levels, offering interactive calculators,
                    directory listings, and expert guides.
                </p>
                <p>
                    Our mission is to demystify baking. We believe that with the right understanding of baker's math
                    and fermentation, anyone can bake bakery-quality bread at home.
                </p>
            </div>
        </div>
    );
}
