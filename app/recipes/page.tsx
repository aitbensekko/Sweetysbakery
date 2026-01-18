'use client';

import React from 'react';
import { RecipeIndex } from '../../components/RecipeIndex';
import { blogPosts } from '../../data/blogPosts';

export default function RecipeIndexPage() {
    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            <RecipeIndex posts={blogPosts.filter(post => post.type === 'recipe')} />
        </div>
    );
}
