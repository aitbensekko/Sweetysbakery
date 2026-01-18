'use client';

import { useState, useEffect } from 'react';

interface CheckInButtonProps {
    shopId: string;
}

export default function CheckInButton({ shopId }: CheckInButtonProps) {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const visited = localStorage.getItem(`visited-${shopId}`);
        if (visited === 'true') {
            setIsCheckedIn(true);
        }
    }, [shopId]);

    const toggleCheckIn = () => {
        const newState = !isCheckedIn;
        setIsCheckedIn(newState);
        localStorage.setItem(`visited-${shopId}`, String(newState));
    };

    if (!mounted) return null;

    return (
        <button
            onClick={toggleCheckIn}
            className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md
                ${isCheckedIn
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'
                }
            `}
        >
            {isCheckedIn ? (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Visited
                </>
            ) : (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Check In
                </>
            )}
        </button>
    );
}
