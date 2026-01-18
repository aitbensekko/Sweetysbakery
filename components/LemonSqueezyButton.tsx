"use client";

import React, { useEffect } from 'react';

interface LemonSqueezyButtonProps {
    checkoutUrl: string;
    buttonText: string;
    price?: string;
    className?: string;
}

export const LemonSqueezyButton: React.FC<LemonSqueezyButtonProps> = ({
    checkoutUrl,
    buttonText,
    price,
    className = ""
}) => {
    useEffect(() => {
        // Load Lemon Squeezy script
        const script = document.createElement('script');
        script.src = 'https://assets.lemonsqueezy.com/lemon.js';
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const defaultClassName = "bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 group";

    return (
        <a
            href={checkoutUrl}
            className={`lemonsqueezy-button ${className || defaultClassName}`}
        >
            <span className="relative z-10">{buttonText}</span>
            {price && (
                <span className="relative z-10 bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                    ${price}
                </span>
            )}
            <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
    );
};
