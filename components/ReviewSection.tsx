'use client';

import { useState, useEffect } from 'react';

interface Review {
    id: string;
    userName: string;
    rating: number;
    text: string;
    date: string;
}

interface ReviewSectionProps {
    shopId: string;
}

export default function ReviewSection({ shopId }: ReviewSectionProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newReview, setNewReview] = useState({ rating: 5, text: '', userName: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Initial mock reviews to populate empty states
    const mockReviews: Review[] = [
        {
            id: 'mock-1',
            userName: 'Sarah J.',
            rating: 5,
            text: 'Absolutely amazing! The atmosphere is perfect and the staff is so friendly.',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString() // 5 days ago
        },
        {
            id: 'mock-2',
            userName: 'Mike T.',
            rating: 4,
            text: 'Great coffee, but can get a bit crowded on weekends.',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString() // 12 days ago
        }
    ];

    useEffect(() => {
        setMounted(true);
        const storedReviews = localStorage.getItem(`reviews-${shopId}`);
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        } else {
            setReviews(mockReviews);
        }
    }, [shopId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReview.text.trim() || !newReview.userName.trim()) return;

        setIsSubmitting(true);

        const review: Review = {
            id: Date.now().toString(),
            userName: newReview.userName,
            rating: newReview.rating,
            text: newReview.text,
            date: new Date().toISOString()
        };

        const updatedReviews = [review, ...reviews];
        setReviews(updatedReviews);
        localStorage.setItem(`reviews-${shopId}`, JSON.stringify(updatedReviews));

        setNewReview({ rating: 5, text: '', userName: '' });
        setIsSubmitting(false);
    };

    if (!mounted) return null;

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Reviews</h3>

            {/* Review Form */}
            <form onSubmit={handleSubmit} className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-lg mb-4">Write a Review</h4>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                        value={newReview.userName}
                        onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                        placeholder="John Doe"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                className={`text-2xl focus:outline-none transition-transform hover:scale-110 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                    <textarea
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                        rows={3}
                        value={newReview.text}
                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                        placeholder="Share your experience..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-700 transition-colors disabled:opacity-50"
                >
                    {isSubmitting ? 'Posting...' : 'Post Review'}
                </button>
            </form>

            {/* Reviews List */}
            <div className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h5 className="font-bold text-gray-900">{review.userName}</h5>
                                <div className="text-yellow-400 text-sm">
                                    {'★'.repeat(review.rating)}
                                    <span className="text-gray-300">{'★'.repeat(5 - review.rating)}</span>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-gray-600">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
