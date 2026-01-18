"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogPosts } from '../data/blogPosts';
import { affiliateProducts } from '../data/affiliateProducts';

// Available tools list
const availableTools = [
    { slug: 'cake-pricing-calculator', title: 'Cake Pricing Calculator', icon: '🎂' },
    { slug: 'recipe-scaler', title: 'Recipe Scaler', icon: '📏' },
    { slug: 'bakers-percentage', title: "Baker's Percentage", icon: '📊' },
    { slug: 'measurement-converter', title: 'Measurement Converter', icon: '⚖️' },
    { slug: 'dough-hydration-calculator', title: 'Dough Hydration Calculator', icon: '💧' },
    { slug: 'baking-pan-converter', title: 'Baking Pan Converter', icon: '🍰' },
    { slug: 'oven-temperature-converter', title: 'Oven Temperature Converter', icon: '🌡️' },
    { slug: 'sweetener-converter', title: 'Sweetener Converter', icon: '🍯' },
    { slug: 'yeast-converter', title: 'Yeast Converter', icon: '🍞' },
    { slug: 'ganache-calculator', title: 'Ganache Calculator', icon: '🍫' },
    { slug: 'buttercream-calculator', title: 'Buttercream Calculator', icon: '🧁' },
    { slug: 'fondant-calculator', title: 'Fondant Calculator', icon: '🎨' },
    { slug: 'cost-per-recipe-calculator', title: 'Cost Per Recipe', icon: '💰' },
    { slug: 'investment-calculator', title: 'Investment Calculator', icon: '📈' },
    { slug: 'mortgage-calculator', title: 'Mortgage Calculator', icon: '🏠' },
    { slug: 'calorie-calculator', title: 'Calorie Calculator', icon: '🥗' },
    { slug: 'bmi-calculator', title: 'BMI Calculator', icon: '⚕️' },
    { slug: 'ingredient-glossary', title: 'Ingredient Glossary', icon: '📖' },
    { slug: 'allergen-guide', title: 'Allergen Guide', icon: '⚠️' },
    { slug: 'flavor-pairing-guide', title: 'Flavor Pairing Guide', icon: '🎭' },
];

// Utility function to get random items from array
function getRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
}

export function InternalLinkRecommendations() {
    const [recommendations, setRecommendations] = useState<{
        tools: typeof availableTools;
        products: typeof affiliateProducts;
        articles: typeof blogPosts;
    }>({
        tools: [],
        products: [],
        articles: [],
    });

    useEffect(() => {
        // Generate random recommendations on client side
        setRecommendations({
            tools: getRandomItems(availableTools, 5),
            products: getRandomItems(affiliateProducts, 5),
            articles: getRandomItems(blogPosts, 5),
        });
    }, []);

    // Don't render until we have recommendations (avoid hydration mismatch)
    if (recommendations.tools.length === 0) {
        return null;
    }

    return (
        <div className="bg-gradient-to-br from-brand-cream via-white to-brand-pink/10 py-12 px-4 sm:px-6 lg:px-8 mt-12 border-t-2 border-brand-gold/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-brand-brown text-center mb-8">
                    You Might Also Like
                </h2>

                {/* Tools Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-serif font-semibold text-brand-brown mb-4 flex items-center gap-2">
                        <span className="text-brand-gold">🛠️</span>
                        Recommended Tools
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {recommendations.tools.map((tool) => (
                            <Link
                                key={tool.slug}
                                href={`/tools/${tool.slug}`}
                                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-brand-gold/20 hover:border-brand-gold hover:scale-105"
                            >
                                <div className="text-3xl mb-2 text-center">{tool.icon}</div>
                                <h4 className="text-sm font-semibold text-brand-brown text-center group-hover:text-brand-gold transition-colors">
                                    {tool.title}
                                </h4>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Products Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-serif font-semibold text-brand-brown mb-4 flex items-center gap-2">
                        <span className="text-brand-gold">🛍️</span>
                        Featured Products
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {recommendations.products.map((product) => (
                            <Link
                                key={product.slug}
                                href={`/products/${product.slug}`}
                                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-gold/20 hover:border-brand-gold hover:scale-105"
                            >
                                <div className="aspect-square relative overflow-hidden bg-gray-100">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.imageAlt || product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3">
                                    <h4 className="text-xs font-semibold text-brand-brown line-clamp-2 group-hover:text-brand-gold transition-colors">
                                        {product.name}
                                    </h4>
                                    {product.rating && (
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="text-yellow-500 text-xs">★</span>
                                            <span className="text-xs text-gray-600">{product.rating}</span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Articles Section */}
                <div>
                    <h3 className="text-2xl font-serif font-semibold text-brand-brown mb-4 flex items-center gap-2">
                        <span className="text-brand-gold">📝</span>
                        Popular Articles
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {recommendations.articles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/${article.slug}`}
                                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-gold/20 hover:border-brand-gold hover:scale-105"
                            >
                                <div className="aspect-video relative overflow-hidden bg-gray-100">
                                    <img
                                        src={article.imageUrl}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3">
                                    <h4 className="text-xs font-semibold text-brand-brown line-clamp-2 group-hover:text-brand-gold transition-colors mb-1">
                                        {article.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                                        <span>{article.readTime}</span>
                                        <span>•</span>
                                        <span>{article.category}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
