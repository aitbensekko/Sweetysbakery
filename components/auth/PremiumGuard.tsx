'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import Link from 'next/link';
import { SparklesIcon, LockIcon } from '../Icons';

interface PremiumGuardProps {
    children: React.ReactNode;
}

export const PremiumGuard: React.FC<PremiumGuardProps> = ({ children }) => {
    const [isPremium, setIsPremium] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const checkPremiumStatus = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setIsPremium(false);
                setLoading(false);
                return;
            }

            const { data: profile } = await supabase
                .from('profiles')
                .select('is_premium')
                .eq('id', user.id)
                .single();

            setIsPremium(profile?.is_premium || false);
            setLoading(false);
        };

        checkPremiumStatus();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-64 flex items-center justify-center bg-stone-50 rounded-3xl animate-pulse">
                <div className="flex flex-col items-center gap-3">
                    <SparklesIcon className="w-8 h-8 text-brand-pink animate-spin" />
                    <span className="text-stone-400 font-bold text-sm tracking-widest">VERIFYING MEMBERSHIP...</span>
                </div>
            </div>
        );
    }

    if (isPremium) {
        return <>{children}</>;
    }

    // Locked State Overlay
    return (
        <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-screen overflow-hidden">
            {/* Blurred Tool Background */}
            <div className="absolute inset-0 z-0 blur-sm opacity-40 pointer-events-none select-none overflow-hidden h-full">
                <div className="pointer-events-none select-none h-full">
                    {children}
                </div>
            </div>

            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-white via-white/80 to-white/60 backdrop-blur-[2px]"></div>

            {/* Lock Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] h-full py-24 px-6 text-center max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-stone-900 text-brand-pink rounded-full flex items-center justify-center mb-8 shadow-2xl ring-4 ring-brand-pink/20 animate-bounce-slow">
                    <LockIcon className="w-12 h-12" />
                </div>

                <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 drop-shadow-sm">Premium Tool</h3>
                <p className="text-stone-600 max-w-lg mb-12 text-xl leading-relaxed mx-auto font-medium">
                    This advanced business calculator is reserved for <strong>Pro Members</strong>. Upgrade to unlock this and all other premium features.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                    <Link href="/signup">
                        <button className="w-full sm:w-auto px-12 py-5 bg-brand-pink text-white font-bold rounded-2xl shadow-xl shadow-brand-pink/30 hover:bg-brand-pink/90 hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg">
                            <SparklesIcon className="w-6 h-6" /> Unlock Premium Access
                        </button>
                    </Link>
                    <Link href="/login">
                        <button className="w-full sm:w-auto px-12 py-5 bg-white text-stone-600 font-bold rounded-2xl border-2 border-stone-200 hover:border-stone-900 hover:text-stone-900 transition-colors text-lg shadow-sm">
                            Already a Member? Log In
                        </button>
                    </Link>
                </div>

                <p className="mt-12 text-sm font-bold text-stone-400 uppercase tracking-widest">
                    Include in All-Access Pass • Cancel Anytime
                </p>
            </div>
        </div>
    );
};
