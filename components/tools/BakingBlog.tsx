import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { SearchIcon } from '../Icons';
import { blogPosts, BlogPost } from '../../data/blogPosts';
import { toolIdToSlug } from '../utils/slugs';

interface BakingBlogProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
    activePost: BlogPost | null;
    handleNavigate: (path: string) => void;
}

const BlogCard: React.FC<{ post: BlogPost, handleNavigate: (path: string) => void }> = ({ post, handleNavigate }) => (
    <a
        href={`/blog/${post.slug}`}
        onClick={(e) => { e.preventDefault(); handleNavigate(`/blog/${post.slug}`); }}
        className="bg-white rounded-xl border border-brand-border shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
        <div className="p-4 flex flex-col flex-grow">
            <p className="text-xs font-semibold text-brand-pink uppercase">{post.category}</p>
            <h3 className="font-serif font-bold text-lg text-brand-text-title mt-1 group-hover:text-brand-pink transition-colors">{post.title}</h3>
            <p className="text-sm text-brand-text-body/80 mt-2 flex-grow">{post.excerpt}</p>
            <div className="text-xs text-brand-text-body/60 mt-3 pt-3 border-t border-brand-border">
                Last Updated: {post.date} · {post.readTime} read
            </div>
        </div>
    </a>
);

export const BakingBlog: React.FC<BakingBlogProps> = ({ setActiveTool, breadcrumbs, activePost, handleNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const sortedBlogPosts = useMemo(() => {
        return [...blogPosts]
            .filter(post => post.type !== 'recipe')
            .sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime(); // Descending order
            });
    }, [blogPosts]); // Dependency on blogPosts to re-sort if it ever changes

    const filteredPosts = useMemo(() => {
        if (!searchTerm) return sortedBlogPosts; // Use the sorted list here
        const lowerCaseSearch = searchTerm.toLowerCase();
        return sortedBlogPosts.filter(post => // Filter the sorted list
            post.title.toLowerCase().includes(lowerCaseSearch) ||
            post.excerpt.toLowerCase().includes(lowerCaseSearch) ||
            post.category.toLowerCase().includes(lowerCaseSearch)
        );
    }, [searchTerm, sortedBlogPosts]); // Dependency on searchTerm and sortedBlogPosts

    return (
        <ToolContainer
            title="The Sweety's Baking Blog"
            description="Explore our expert baking blog for professional advice, baking tutorials, and bakery business tips. Master cake pricing, recipe scaling, and baking science with guides for your home bakery or custom cake business."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
        >
            <div className="mb-6 max-w-lg mx-auto">
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-brand-pink-light/60 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200"
                        aria-label="Search articles"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => <BlogCard key={post.id} post={post} handleNavigate={handleNavigate} />)}
            </div>
        </ToolContainer>
    );
};
