'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';

// Initialize Supabase client
const supabase = createClient();

interface RecipeRatingProps {
    slug: string;
    initialRating?: number;
    initialCount?: number;
}

export const RecipeRating: React.FC<RecipeRatingProps> = ({ slug, initialRating = 5, initialCount = 1 }) => {
    const [avgRating, setAvgRating] = useState<number>(initialRating);
    const [count, setCount] = useState<number>(initialCount);
    const [hoveredStar, setHoveredStar] = useState<number | null>(null);
    const [userRating, setUserRating] = useState<number | null>(null);
    const [hasRated, setHasRated] = useState(false);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        // Fetch live ratings from Supabase
        const fetchRatings = async () => {
            try {
                const { data, error } = await supabase
                    .from('recipe_ratings')
                    .select('rating')
                    .eq('slug', slug);

                if (error) {
                    console.error('Error fetching ratings:', error);
                    return;
                }

                if (data && data.length > 0) {
                    const totalCount = data.length;
                    const sum = data.reduce((acc, curr) => acc + curr.rating, 0);
                    const average = sum / totalCount;
                    setAvgRating(average);
                    setCount(totalCount);
                }
            } catch (err) {
                console.error('Error:', err);
            }
        };

        fetchRatings();
    }, [slug]);

    const handleRatingClick = async (rating: number) => {
        if (hasRated) return;

        setUserRating(rating);
        setHasRated(true);

        try {
            // Insert rating directly into Supabase
            const { error } = await supabase
                .from('recipe_ratings')
                .insert([{ slug, rating, ip_address: 'browser' }]);

            if (error) {
                console.error('Error submitting rating:', error);
                setMessage('Failed to submit rating. Please try again.');
                setHasRated(false);
                setUserRating(null);
                return;
            }

            // Optimistic update
            const newCount = count + 1;
            const newAvg = (avgRating * count + rating) / newCount;
            setAvgRating(newAvg);
            setCount(newCount);
            setMessage('Thank you for rating!');

            setTimeout(() => setMessage(''), 3000);
        } catch (err) {
            console.error('Error:', err);
            setMessage('Failed to submit rating. Please try again.');
            setHasRated(false);
            setUserRating(null);
        }
    };

    const displayRating = hoveredStar !== null ? hoveredStar : avgRating;

    return (
        <div className="bg-gradient-to-r from-brand-pink-light/20 to-brand-cream/30 rounded-2xl p-6 border border-brand-pink/20 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-serif text-lg font-bold text-brand-text-title mb-2">Rate this Recipe</h3>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => handleRatingClick(star)}
                                onMouseEnter={() => !hasRated && setHoveredStar(star)}
                                onMouseLeave={() => !hasRated && setHoveredStar(null)}
                                disabled={hasRated}
                                className={`transition-all duration-200 ${hasRated ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110'
                                    }`}
                                aria-label={`Rate ${star} stars`}
                            >
                                <svg
                                    className={`w-8 h-8 ${star <= displayRating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'fill-gray-200 text-gray-200'
                                        } ${hoveredStar !== null && star <= hoveredStar ? 'drop-shadow-lg' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-center sm:text-right">
                    <div className="text-3xl font-bold text-brand-pink">{avgRating.toFixed(1)}</div>
                    <div className="text-sm text-brand-text-body/60">
                        {count} {count === 1 ? 'vote' : 'votes'}
                    </div>
                </div>
            </div>
            {message && (
                <div className="mt-4 text-center text-sm font-medium text-brand-pink animate-fade-in">
                    {message}
                </div>
            )}
        </div>
    );
};
