'use client';

import React from 'react';
import { RecipeIndex } from '../../components/RecipeIndex';
import { blogPosts } from '../../data/blogPosts';
import { newSeoBlogPosts } from '../../data/newSeoBlogPosts';

export default function RecipeIndexPage() {
    // Merge and deduplicate posts by ID to prevent duplicates if data sources overlap
    const allPosts = [...blogPosts, ...newSeoBlogPosts];
    const uniquePosts = Array.from(new Map(allPosts.map(post => [post.id, post])).values());

    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            <RecipeIndex posts={uniquePosts.filter(post => post.type === 'recipe').sort((a, b) => b.id - a.id)} />
        </div>
    );
}
