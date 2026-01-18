'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { createClient } from '../../utils/supabase/client';
import {
    StarIcon,
    CheckCircleIcon,
    LockIcon,
    PlayIcon,
    DownloadIcon,
    GiftIcon,
    SparklesIcon
} from '../../components/Icons';

export default function GoldSubscriptionPage() {
    const [isPremium, setIsPremium] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    const CHECKOUT_URL = "https://uimortgage.lemonsqueezy.com/checkout/buy/106f1425-c5bf-4c61-ad34-f3a48d990285";

    useEffect(() => {
        const checkStatus = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data } = await supabase.from('profiles').select('is_premium').eq('id', user.id).single();
                setIsPremium(data?.is_premium || false);
            } else {
                setIsPremium(false);
            }
            setLoading(false);
        };
        checkStatus();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-stone-900 text-brand-gold animate-pulse">Loading Gold Access...</div>;
    }

    // -------------------------------------------------------------------------
    // VIEW 1: UNLOCKED CONTENT (The "Masterclass" itself)
    // -------------------------------------------------------------------------
    if (isPremium) {
        return (
            <div className="min-h-screen bg-stone-50 text-stone-900 md:ml-80">
                <div className="bg-stone-900 text-white py-12 px-4 border-b-4 border-brand-gold">
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-brand-gold p-2 rounded-lg text-stone-900">
                                <StarIcon className="w-6 h-6" />
                            </div>
                            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Gold Member Access</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sourdough Masterclass</h1>
                        <p className="text-stone-400 text-lg">Welcome back, baker. Here are your premium resources.</p>
                    </div>
                </div>

                <div className="container mx-auto max-w-5xl px-4 py-12">
                    {/* Access to Tools */}
                    <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm mb-12 flex items-center justify-between">
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Unlocked Tools</h3>
                            <p className="text-stone-500">Your account now fully supports the Business Suite.</p>
                        </div>
                        <a href="/tools/cake-pricing" className="px-6 py-3 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 transition-colors">
                            Go to Dashboard
                        </a>
                    </div>

                    {/* Course Content Grid */}
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Course Modules</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-100 shadow-lg group cursor-pointer hover:-translate-y-1 transition-transform">
                                <div className="aspect-video bg-stone-200 relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <PlayIcon className="w-6 h-6 text-brand-pink ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">24:00</div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-lg mb-2 text-stone-900 group-hover:text-brand-pink transition-colors">Module {i}: Advanced Fermentation</h4>
                                    <p className="text-stone-500 text-sm mb-4">Mastering bulk fermentation signs and dough strength.</p>
                                    <div className="flex gap-2">
                                        <button className="flex-1 py-2 bg-stone-50 text-stone-600 font-bold text-sm rounded hover:bg-stone-100 flex items-center justify-center gap-2">
                                            <DownloadIcon className="w-4 h-4" /> Resources
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // -------------------------------------------------------------------------
    // VIEW 2: LOCKED / SALES PAGE (This is "The Gold Subscription Page")
    // -------------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-[#0B0C15] text-white overflow-hidden selection:bg-brand-gold selection:text-black md:ml-80">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-24">

                {/* Header Badge */}
                <div className="flex justify-center mb-8">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-gold/5 border border-brand-gold/30 text-brand-gold font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        <SparklesIcon className="w-4 h-4" /> Sweety's Gold
                    </motion.div>
                </div>

                {/* Main Headline */}
                <div className="text-center mb-16 space-y-6">
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="font-serif text-5xl md:text-7xl font-bold leading-tight"
                    >
                        Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD34D] via-[#F59E0B] to-[#FCD34D]">Secret Art</span> <br />
                        of Professional Baking
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Join the <span className="text-white font-bold">Gold Subscription</span> to access our exclusive business calculators, advanced masterclasses, and private community.
                    </p>
                </div>

                {/* LOCK UI Visualization */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative max-w-4xl mx-auto bg-[#13141F] rounded-3xl border border-white/10 p-1 md:p-2 shadow-2xl mb-20"
                >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-b from-brand-gold to-[#B45309] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-gold/20 z-20">
                        <LockIcon className="w-8 h-8 text-white" />
                    </div>

                    {/* The "Content" being locked (Blurred) */}
                    <div className="rounded-2xl overflow-hidden relative min-h-[400px] bg-[#0B0C15] flex flex-col md:flex-row">
                        {/* Fake sidebar */}
                        <div className="w-64 bg-[#0F1018] border-r border-white/5 p-4 space-y-4 hidden md:block opacity-50 blur-sm">
                            <div className="h-4 bg-white/10 rounded w-3/4"></div>
                            <div className="h-4 bg-white/10 rounded w-1/2"></div>
                            <div className="h-8 bg-white/10 rounded w-full mt-8"></div>
                            <div className="h-8 bg-white/10 rounded w-full"></div>
                        </div>
                        {/* Fake Content */}
                        <div className="flex-1 p-8 opacity-50 blur-sm flex flex-col gap-6">
                            <div className="h-12 bg-white/10 rounded-lg w-1/2"></div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-32 bg-white/10 rounded-xl"></div>
                                <div className="h-32 bg-white/10 rounded-xl"></div>
                                <div className="h-32 bg-white/10 rounded-xl"></div>
                            </div>
                        </div>

                        {/* Overlay Message */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Members Only Content</h3>
                            <p className="text-gray-400 mb-8 max-w-md">
                                This content is reserved for Gold Subscribers. Upgrade today to get instant access.
                            </p>
                            <a
                                href={CHECKOUT_URL}
                                target="_blank"
                                className="px-8 py-4 bg-gradient-to-r from-brand-gold to-[#F59E0B] text-black font-black text-lg rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2"
                            >
                                <SparklesIcon className="w-5 h-5" /> SUBSCRIBE FOR $19/MO
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                    {[
                        { title: "Business Suite", desc: "Pricing, Inventory, and Order Management tools." },
                        { title: "Masterclass Videos", desc: "40+ Hours of high-definition baking techniques." },
                        { title: "Gold Community", desc: "Direct access to mentors and networking events." }
                    ].map((f, i) => (
                        <div key={i} className="bg-[#13141F] p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-colors">
                            <h3 className="text-brand-gold font-serif text-xl font-bold mb-3">{f.title}</h3>
                            <p className="text-gray-400">{f.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
