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
    SparklesIcon,
    BookOpenIcon,
    CalendarIcon
} from '../../components/Icons';

export default function GoldSubscriptionPage() {
    const [isPremium, setIsPremium] = useState<boolean | null>(false);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('overview'); // overview, master-guide, video-library, calculators
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
            <div className="min-h-screen bg-stone-50 text-stone-900 transition-all duration-300">
                {/* Header Section */}
                <div className="bg-stone-900 text-white pt-12 pb-24 px-4 border-b-4 border-brand-gold relative overflow-hidden">
                    {/* Abstract BG */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl"></div>

                    <div className="container mx-auto max-w-5xl relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-brand-gold p-2 rounded-lg text-stone-900">
                                <StarIcon className="w-6 h-6" />
                            </div>
                            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Sourdough Club</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Member Area</h1>
                        <p className="text-stone-400 text-lg">Welcome back, baker.</p>
                    </div>
                </div>

                {/* Horizontal Navigation Bar (The requested change) */}
                <div className="container mx-auto max-w-5xl px-4 -mt-8 relative z-20">
                    <div className="bg-white rounded-xl shadow-lg border border-stone-100 p-2 flex overflow-x-auto gap-2">
                        {[
                            { id: 'overview', label: 'Overview', icon: <StarIcon className="w-5 h-5" /> },
                            { id: 'master-guide', label: 'Master Guide', icon: <BookOpenIcon className="w-5 h-5" /> },
                            { id: 'video-library', label: 'Video Library', icon: <PlayIcon className="w-5 h-5" /> },
                            { id: 'calculators', label: 'Calculators', icon: <SparklesIcon className="w-5 h-5" /> },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${activeTab === tab.id
                                    ? 'bg-brand-pink text-white shadow-md'
                                    : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area based on Tab */}
                <div className="container mx-auto max-w-5xl px-4 py-8 min-h-[500px]">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 'overview' && (
                            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                                <h3 className="font-serif text-3xl font-bold text-stone-900 mb-6">Latest Updates</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start pb-6 border-b border-stone-100">
                                        <div className="bg-brand-pink/10 p-3 rounded-full text-brand-pink">
                                            <PlayIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-stone-900">New Video: High Hydration Handling</h4>
                                            <p className="text-stone-500 mt-1">Learned how to handle 85%+ hydration doughs without the sticky mess.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                            <CalendarIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-stone-900">Live Q&A: Friday at 2PM EST</h4>
                                            <p className="text-stone-500 mt-1">Join us for a deep dive into starter maintenance schedules.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'master-guide' && (
                            <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 border-dashed">
                                <BookOpenIcon className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-stone-900">The Sourdough Handbook</h3>
                                <p className="text-stone-500 mb-6 mt-2">Download the complete PDF guide (Version 2.0)</p>
                                <button className="px-6 py-2 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-700">Download PDF</button>
                            </div>
                        )}

                        {activeTab === 'video-library' && (
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Course Modules</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm group cursor-pointer hover:-translate-y-1 transition-transform">
                                            <div className="aspect-video bg-stone-200 relative">
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                                        <PlayIcon className="w-6 h-6 text-brand-pink ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-bold text-lg text-stone-900">Module {i}: Advanced Technique</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'calculators' && (
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Premium Calculators</h3>
                                <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                            <SparklesIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-stone-900">Cake & Bread Pricing</h4>
                                            <p className="text-stone-500">Calculate costs and profit margins.</p>
                                        </div>
                                    </div>
                                    <a href="/tools/cake-pricing" className="px-6 py-2 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 transition-colors">
                                        Open Tool
                                    </a>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        );
    }

    // -------------------------------------------------------------------------
    // VIEW 2: LOCKED / SALES PAGE (This is "The Gold Subscription Page")
    // -------------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-[#0B0C15] text-white overflow-hidden selection:bg-brand-gold selection:text-black">
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
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
                            Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD34D] via-[#F59E0B] to-[#FCD34D]">Secret Art</span> <br />
                            of Professional Baking
                        </h1>
                    </motion.div>
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
