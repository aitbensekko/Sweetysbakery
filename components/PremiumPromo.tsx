"use client";

import React from 'react';
import { LemonSqueezyButton } from './LemonSqueezyButton';

interface PremiumPromoProps {
    variant: 'banner' | 'sidebar' | 'inline-tool';
}

export const PremiumPromo: React.FC<PremiumPromoProps> = ({ variant }) => {
    if (variant === 'sidebar') {
        return (
            <div className="bg-white border border-brand-pink/20 rounded-3xl p-6 text-center shadow-xl shadow-brand-pink/5 relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-300">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink to-brand-pink-light"></div>
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-pink/5 rounded-full blur-xl group-hover:bg-brand-pink/10 transition-colors"></div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink-light/30 text-brand-pink-dark text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse"></span>
                    Premium Tool
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-text-title mb-2 leading-tight">
                    Bakery Business <br />
                    <span className="text-brand-pink">Operating System</span>
                </h3>

                <p className="text-sm text-brand-text-body/80 mb-6 leading-relaxed">
                    The all-in-one spreadsheet to track inventory, calculate costs, and price your cakes for profit.
                </p>

                <div className="flex items-center justify-center gap-3 mb-6 bg-brand-pink-light/10 py-2 rounded-lg">
                    <span className="text-brand-text-body/40 line-through text-sm">$47</span>
                    <span className="text-3xl font-bold text-brand-text-title">$19</span>
                </div>

                <a
                    href="/premium-templates"
                    className="block w-full bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-brand-pink/20 hover:shadow-xl hover:shadow-brand-pink/30 hover:-translate-y-0.5 transition-all duration-300 text-sm mb-3"
                >
                    Get Instant Access
                </a>
                <p className="text-[10px] font-medium text-brand-text-body/50 uppercase tracking-wide">
                    + Free Custom Tool Included
                </p>
            </div>
        );
    }

    if (variant === 'inline-tool') {
        return (
            <div className="mt-6 bg-gradient-to-br from-brand-pink-light/30 to-white rounded-xl border border-brand-pink/20 p-5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-brand-pink/10 rounded-full blur-2xl group-hover:bg-brand-pink/20 transition-colors"></div>

                <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-pink/10 text-brand-pink text-[10px] font-bold uppercase tracking-wider mb-2">
                                <span className="w-1 h-1 rounded-full bg-brand-pink"></span>
                                Pro Feature
                            </div>
                            <h4 className="font-serif font-bold text-lg text-brand-text-title leading-tight">
                                Save Your Calculations?
                            </h4>
                        </div>
                        <div className="text-right">
                            <span className="block text-xs text-brand-text-body/60 line-through">$47</span>
                            <span className="block text-xl font-bold text-brand-pink">$19</span>
                        </div>
                    </div>

                    <p className="text-sm text-brand-text-body/80 mb-4">
                        Get the <strong>Bakery Business OS</strong> to save recipes, track inventory, and manage orders in one place.
                    </p>

                    <a
                        href="/premium-templates"
                        className="block w-full text-center bg-white border border-brand-pink text-brand-pink font-bold py-2.5 rounded-lg hover:bg-brand-pink hover:text-white transition-all duration-300 shadow-sm text-sm"
                    >
                        Reclaim Your Time →
                    </a>
                </div>
            </div>
        );
    }

    // Banner Variant
    return (
        <div className="my-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white shadow-2xl group border border-white/10 isolate">
            {/* Elegant Background Effects */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl mix-blend-screen opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen opacity-30"></div>

            {/* Texture/Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 p-8 sm:p-10 lg:p-12">
                <div className="text-center lg:text-left flex-1 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-brand-pink-light font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                        </span>
                        Limited Time Offer
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
                        Stop Guessing.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink-light via-pink-200 to-white">Start Profiting.</span>
                    </h2>

                    <p className="text-blue-100/80 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Get the complete <strong>Bakery Business Operating System</strong>. Track every gram of flour, manage orders, and price with confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/premium-templates"
                            className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 text-base"
                        >
                            Get It for $19
                        </a>
                        <a
                            href="/premium-templates"
                            className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/10 transition-colors text-base"
                        >
                            Learn More about Bakery Business OS
                        </a>
                    </div>
                </div>

                {/* Pricing Card / Visual */}
                <div className="relative transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out">
                    <div className="absolute inset-0 bg-brand-pink blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center min-w-[280px] shadow-2xl relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-pink to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            Save 60%
                        </div>
                        <p className="text-blue-200 line-through text-sm mb-1">Regular Price $47</p>
                        <div className="text-6xl font-serif font-bold text-white mb-2 tracking-tight">$19</div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>
                        <ul className="text-left text-sm text-blue-100 space-y-2 mb-0">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-brand-pink-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Inventory Tracker
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-brand-pink-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Cost Calculator
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-brand-pink-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Order Manager
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
