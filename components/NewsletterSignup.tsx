'use client';

import React, { useState } from 'react';


export const NewsletterSignup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    // COPY YOUR GOOGLE APPS SCRIPT URL HERE AFTER DEPLOYMENT
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0w4ZmkNnqBwci3_sGhmr1XsCFVnY4nlHlnUrMTXAYDVkRkOZ4bmPnl7n73vIKZ0qGjw/exec';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus('loading');

        try {
            // Using 'no-cors' mode for Google Forms/Apps Script simplified submission
            // Note: In 'no-cors' mode we can't read the response status directly, 
            // so we assume success if no network error occurs.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
            });

            // Since we can't really verify success in no-cors, we simulate a success/delay
            setStatus('success');
            setMessage('Welcome to the club! 🍰');
            setEmail('');
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="my-16 bg-brand-pink-light/30 border border-brand-pink/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-pink/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-brand-pink/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-6 border border-brand-pink/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-pink">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-text-title mb-4">
                    Join Our Baking Community
                </h2>
                <p className="text-brand-text-body/80 mb-8 text-lg">
                    Get exclusive baking tips, free recipe card downloads, and updates on new tools delivered straight to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="flex-1 px-6 py-4 rounded-xl border-2 border-brand-border focus:border-brand-pink focus:outline-none focus:ring-4 focus:ring-brand-pink/10 transition-all text-brand-text-body placeholder:text-gray-400"
                        disabled={status === 'loading' || status === 'success'}
                        aria-label="Email address"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${status === 'success'
                            ? 'bg-green-500 text-white cursor-default hover:translate-y-0'
                            : 'bg-brand-pink text-white hover:bg-brand-pink-dark hover:shadow-xl'
                            }`}
                    >
                        {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Subscribe'}
                    </button>
                </form>

                {message && (
                    <p className={`mt-4 font-medium ${status === 'success' ? 'text-green-600' : 'text-red-500'} animate-fade-in`}>
                        {message}
                    </p>
                )}

                <p className="text-xs text-brand-text-body/60 mt-6">
                    No spam, just sugar. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};
