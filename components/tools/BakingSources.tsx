import React, { useState } from 'react';

import type { ToolId } from '../utils/slugs';
import { DocumentIcon, SearchIcon } from '../Icons';

interface BakingSourcesProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const sources = [
    { url: "https://sallysbakingaddiction.com/recipe-index/", title: "Sally's Baking Addiction - Recipe Index" },
    { url: "https://sallysbakingaddiction.com/category/baking-tips/", title: "Sally's Baking Addiction - Baking Tips" },
    { url: "https://sallysbakingaddiction.com/ingredient-index/", title: "Sally's Baking Addiction - Ingredient Index" },
    { url: "https://sallysbakingaddiction.com/category/video/", title: "Sally's Baking Addiction - Videos" },
    { url: "https://www.zoebakes.com/2024/01/24/20-baking-recipes-for-beginners/", title: "Zoe Bakes - 20 Baking Recipes for Beginners" },
    { url: "https://www.loveandlemons.com/baking-recipes/", title: "Love and Lemons - Baking Recipes" },
    { url: "https://bakingthegoods.com/", title: "Baking The Goods" },
    { url: "https://www.janespatisserie.com/", title: "Jane's Patisserie" },
    { url: "https://www.bbcgoodfood.com/recipes/collection/baking-recipes", title: "BBC Good Food - Baking Recipes" },
    { url: "https://bakingwithgranny.co.uk/", title: "Baking with Granny" },
    { url: "https://cloudykitchen.com/", title: "Cloudy Kitchen" },
    { url: "https://www.kingarthurbaking.com/recipes", title: "King Arthur Baking - Recipes" },
    { url: "https://www.bbcgoodfood.com/recipes/collection/easy-baking-recipes", title: "BBC Good Food - Easy Baking Recipes" },
    { url: "https://www.allrecipes.com/gallery/easy-baking-recipes/", title: "AllRecipes - Easy Baking Recipes" },
    { url: "https://sallysbakingaddiction.com/quick-easy-dessert-recipes/", title: "Sally's Baking Addiction - Quick & Easy Desserts" },
    { url: "https://www.bbc.co.uk/food/collections/easy_baking_recipes", title: "BBC Food - Easy Baking Recipes" },
    { url: "https://www.taste.com.au/baking/galleries/top-100-easy-baking-recipes/7t2ouzx8", title: "Taste.com.au - Top 100 Easy Baking Recipes" },
    { url: "https://www.thekitchn.com/easy-baking-recipes-23731001", title: "The Kitchn - Easy Baking Recipes" },
    { url: "https://www.woolworths.co.nz/recipes/201/meals-and-courses/207/baking-recipes", title: "Woolworths NZ - Baking Recipes" },
    { url: "https://www.purewow.com/food/fun-things-to-bake", title: "PureWow - Fun Things to Bake" },
    { url: "https://www.aol.com/30-easy-recipes-anyone-bake-204500561.html", title: "AOL - 30 Easy Recipes Anyone Can Bake" },
    { url: "https://www.jamieoliver.com/recipes/baking/", title: "Jamie Oliver - Baking Recipes" },
    { url: "https://www.tamingtwins.com/category/collections/bake-sale-makes/", title: "Taming Twins - Bake Sale Makes" },
    { url: "https://www.aheadofthyme.com/50-easy-baking-recipes/", title: "Ahead of Thyme - 50 Easy Baking Recipes" },
    { url: "https://www.olivemagazine.com/recipes/collection/best-ever-quick-and-easy-baking-recipes-ready-in-under-an-hour/", title: "Olive Magazine - Quick & Easy Baking" },
    { url: "https://www.imthecheftoo.com/blogs/cooking-with-kids/30-easy-baking-recipes-for-kids-to-spark-joy-learning?srsltid=AfmBOoqg7PQuhi-ucEDgy_v09gQiymqOeHfK-RBVJVjD5WPaDgNR-lRr", title: "I'm The Chef Too - Baking Recipes for Kids" },
    { url: "https://realfood.tesco.com/baking/easy-baking-recipes.html", title: "Tesco Real Food - Easy Baking Recipes" },
    { url: "https://food52.com/story/25431-easy-baking-recipes", title: "Food52 - Easy Baking Recipes" },
    { url: "https://www.averiecooks.com/20-fast-and-easy-desserts-in-under-30-minutes/", title: "Averie Cooks - Fast & Easy Desserts" },
    { url: "https://www.deliciousmagazine.co.uk/easy-baking-recipes-in-under-an-hour/", title: "Delicious Magazine - Easy Baking Under an Hour" },
    { url: "https://camillestyles.com/food/cooking/fun-things-to-bake/", title: "Camille Styles - Fun Things to Bake" },
    { url: "https://www.bbcgoodfood.com/recipes/collection/kids-baking-recipes", title: "BBC Good Food - Kids Baking Recipes" },
    { url: "https://cloudykitchen.com/blog/butter-cookies/", title: "Cloudy Kitchen - Butter Cookies" },
    { url: "https://www.mybakingaddiction.com/thanksgiving-dessert-ideas/", title: "My Baking Addiction - Thanksgiving Desserts" },
    { url: "https://www.crazyforcrust.com/easy-baked-churros/", title: "Crazy for Crust - Easy Baked Churros" },
    { url: "https://www.bbc.co.uk/food/collections/baking_with_children", title: "BBC Food - Baking with Children" },
    { url: "https://www.thecookierookie.com/category/baking/", title: "The Cookie Rookie - Baking" },
];

export const BakingSources: React.FC<BakingSourcesProps> = ({ setActiveTool, breadcrumbs }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSources = sources.filter(source =>
        source.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        source.url.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-brand-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-brand-pink/5 to-bg-brand-background pt-12 pb-16 px-4 sm:px-6 lg:px-8 mb-12 border-b border-brand-pink/10">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="mb-4 flex justify-center opacity-70 scale-90">{breadcrumbs}</div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-title mb-6 tracking-tight">
                        Baking Sources & <span className="text-brand-pink">Inspiration</span>
                    </h1>
                    <p className="text-lg text-brand-text-body/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of the best baking websites, recipe collections, and resources. Explore these amazing sites for more inspiration!
                    </p>

                    {/* Search Bar in Hero */}
                    <div className="max-w-lg mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-pink to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-brand-pink transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-11 pr-4 py-4 border-0 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 sm:text-base shadow-xl text-brand-text-body"
                                placeholder="Search magazines, blogs, and resources..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSources.length > 0 ? (
                        filteredSources.map((source, index) => (
                            <a
                                key={index}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 hover:border-brand-pink/20 hover:-translate-y-1"
                            >
                                {/* Decorative Gradient Header instead of generic image */}
                                <div className={`h-24 bg-gradient-to-r ${index % 3 === 0 ? 'from-pink-50 to-rose-100' : index % 3 === 1 ? 'from-purple-50 to-indigo-100' : 'from-orange-50 to-amber-100'} p-6 flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl transform rotate-45"></div>
                                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm text-brand-pink transform group-hover:scale-110 transition-transform duration-300">
                                        <DocumentIcon className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-serif font-bold text-xl text-brand-text-title group-hover:text-brand-pink transition-colors mb-2">
                                        {source.title}
                                    </h3>
                                    <p className="text-sm text-brand-text-body/60 mb-6 flex-1 break-all">
                                        {new URL(source.url).hostname}
                                    </p>

                                    {/* Action */}
                                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-brand-pink font-bold text-xs tracking-wider uppercase">
                                        <span className="group-hover:underline underline-offset-4 decoration-2">Visit Site</span>
                                        <div className="w-8 h-8 rounded-full bg-brand-pink/5 flex items-center justify-center group-hover:bg-brand-pink group-hover:text-white transition-colors duration-300">
                                            <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                            <div className="bg-gray-50 p-4 rounded-full mb-4">
                                <SearchIcon className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">No sources found</h3>
                            <p className="text-gray-500">No results matching "{searchQuery}". Try a different term.</p>
                        </div>
                    )}
                </div>

                <div className="mt-20 max-w-4xl mx-auto space-y-12">
                    <section className="bg-white rounded-3xl p-8 md:p-12 border border-brand-border/50 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                        <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-4 relative z-10">Why We Chose These Sources</h2>
                        <p className="text-brand-text-body/80 leading-relaxed relative z-10 text-lg">
                            Baking is both an art and a science, and having reliable teachers is crucial. We've hand-picked these websites because they offer more than just recipes—they explain the <strong>science behind the baking</strong>. Whether you're looking for metric measurements, troubleshooting guides, or step-by-step video tutorials, these creators are the best in the industry.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-10 text-center">How to Get the Most Out of These Resources</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "For Beginners", text: "Start with Sally's Baking Addiction or Joy of Baking. Their \"Baking 101\" series are like free culinary school courses.", bg: "bg-blue-50", border: "border-blue-100" },
                                { title: "For Visual Learners", text: "Check out sources like Preppy Kitchen or Cupcake Jemma (on YouTube) for high-quality video walkthroughs that show texture at every stage.", bg: "bg-pink-50", border: "border-pink-100" },
                                { title: "For Science Geeks", text: "Serious Eats (BraveTart) and King Arthur Baking dive deep into the chemistry of gluten, hydration, and temperature.", bg: "bg-purple-50", border: "border-purple-100" }
                            ].map((item, i) => (
                                <div key={i} className={`${item.bg} p-8 rounded-2xl border ${item.border} hover:-translate-y-1 transition-transform duration-300`}>
                                    <h3 className="font-bold text-xl text-brand-text-title mb-3">{item.title}</h3>
                                    <p className="text-brand-text-body/80 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
