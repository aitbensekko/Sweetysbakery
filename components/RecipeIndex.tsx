import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import AdSenseAd from './AdSenseAd';
import { BlogPost } from '../data/blogPosts';
import { useRouter } from 'next/navigation';
import { getFoodBlurDataURL } from './utils/imageBlur';

interface RecipeIndexProps {
    posts: BlogPost[];
}

export const RecipeIndex: React.FC<RecipeIndexProps> = ({ posts }) => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(posts.map(post => post.category).filter(Boolean));
        return ['All', ...Array.from(cats).sort()];
    }, [posts]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'All') return posts;
        return posts.filter(post => post.category === selectedCategory);
    }, [posts, selectedCategory]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-serif font-bold text-brand-text-title mb-8 text-center">
                Recipe Index
            </h1>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105
              ${selectedCategory === category
                                ? 'bg-brand-pink text-white shadow-lg'
                                : 'bg-white text-brand-text-body border border-brand-border hover:border-brand-pink hover:text-brand-pink'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Recipe Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                    <React.Fragment key={post.id}>
                        <div
                            onClick={() => router.push(`/recipes/${post.slug}`)}
                            className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    placeholder="blur"
                                    blurDataURL={getFoodBlurDataURL()}
                                    priority={index < 3}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-pink text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-brand-text-title mb-3 group-hover:text-brand-pink transition-colors line-clamp-2">
                                    {post.title.split('|')[0].trim()}
                                </h3>
                                <p className="text-xs text-brand-text-body/60 mb-2 font-medium">Last Updated: {post.date}</p>
                                <p className="text-brand-text-body/70 text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-brand-text-body/60 font-medium border-t border-brand-border/50 pt-4">
                                    <span>{post.readTime}</span>
                                    <span className="text-brand-pink group-hover:underline">Read Recipe →</span>
                                </div>
                            </div>
                        </div>
                        {/* Insert Ad after every 6 items */}
                        {(index + 1) % 6 === 0 && (
                            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-2xl border border-brand-border/50">
                                <div className="text-center w-full">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Advertisement</span>
                                    <AdSenseAd
                                        slotId="9025667689"
                                        layoutKey="-6t+ed+2i-1n-4w"
                                        format="fluid"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">No recipes found in this category.</p>
                </div>
            )}
        </div>
    );
};
