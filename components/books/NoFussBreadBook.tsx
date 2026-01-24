"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const affiliateLink = "https://www.amazon.com/No-Fuss-Bread-Machine-Cookbook-Hands-Off/dp/1623157536?crid=1F9LQ8SI8I09F&dib=eyJ2IjoiMSJ9.gBerr9lVTuq8HqyCyxPtfw3PAl1WeSQIgTC3wN-RGRNsec-niU3Qbm0ejS4QJfPumzdbWgFRv0YyGRE7Szdi0154JqwY9YV2tliYZ4memDfmkdIGCLufZEZrRY5Lx4VTU001OoNHIMVYs57dLMksFNs7K_Um1Eg5HibM3Chd6I94_BxkXojh0YSHBdkSezOzxazIaLIPKsG39Os2JPUTNJPxdqyAvCLl7wGrAsWQUpxUD0AYkW1J1NI7zLWyl_V8iowlu4Kp4FPHBlnsXC_UWnKUj17TWCgOWqhmcggTtz0.b7XJYMqtKvzSiD_UqDuTXXbKvLUNuMbL-Iy10cVlUaM&dib_tag=se&keywords=recipe+baking+book&qid=1769254703&sprefix=recipe+baking%2Caps%2C294&sr=8-1&linkCode=ll1&tag=lahcenaitbens-20&linkId=f015f14a08fb577608d8b8ed93687ee6&language=en_US&ref_=as_li_ss_tl";

export default function NoFussBreadBook() {
    return (
        <div className="min-h-screen font-sans text-brand-text-body bg-stone-50 selection:bg-brand-pink selection:text-white">

            {/* 1. HERO SECTION: Immersive & Trust-Building */}
            <div className="relative bg-white overflow-hidden">
                {/* Background Blobs for specific "wow" factor */}
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl opacity-70"></div>
                <div className="absolute top-1/2 left-0 -ml-24 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-60"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                        {/* Text Content */}
                        <div className="lg:col-span-7 mb-12 lg:mb-0">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/10 text-brand-pink font-bold text-xs uppercase tracking-widest mb-8 border border-brand-pink/20">
                                <span className="w-2 h-2 rounded-full bg-brand-pink"></span>
                                #1 Amazon Bestseller
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-text-title mb-8 leading-[1.1] tracking-tight">
                                Bread Machines <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-rose-400">Finally Made Simple.</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                                Stop guessing. Start baking. Michelle Anderson's hands-off guide guarantees fluffy, bakery-quality loaves from <strong>any machine</strong>—first time, every time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <a
                                    href={affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-pink rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-pink hover:bg-brand-pink/90 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Check Price on Amazon
                                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                </a>

                                <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-text-title transition-all duration-200 bg-white border-2 border-stone-200 rounded-full hover:border-brand-pink hover:text-brand-pink hover:bg-brand-pink/5">
                                    Read Reviews
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                            {/* Ideally real user avatars here, defaulting to initials */}
                                            User
                                        </div>
                                    ))}
                                </div>
                                <p>Loved by <strong className="text-brand-text-title">12,000+</strong> home bakers</p>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:col-span-5 relative">
                            {/* Floating Elements */}
                            <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl z-20 transform rotate-6">
                                <span className="text-2xl">🥖</span>
                                <span className="font-bold text-brand-text-title ml-2">Perfect Crust</span>
                            </div>
                            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl z-20 transform -rotate-3">
                                <span className="text-2xl">🍞</span>
                                <span className="font-bold text-brand-text-title ml-2">Soft Crumb</span>
                            </div>

                            <div className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 border border-white/50 backdrop-blur-sm transform transition-transform hover:scale-[1.02] duration-500">
                                <Image
                                    src="/images/books/no-fuss-bread-machine-cookbook.png"
                                    alt="The No-Fuss Bread Machine Cookbook Cover"
                                    width={600}
                                    height={800}
                                    priority
                                    className="w-full h-auto rounded-lg shadow-lg rotate-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PROBLEM/SOLUTION GRID: More visual */}
            <div className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-3">Why This Book?</h2>
                        <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-text-title mb-6">Designed specifically for YOUR machine.</h3>
                        <p className="text-lg text-gray-600">Most cookbooks fail because they assume every bread maker is the same. Michelle Anderson solved this problem by testing recipes across all major brands.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "True Hands-Off Baking",
                                desc: "No taking dough out to shape it. These recipes are designed to go from ingredients to finished loaf entirely inside the machine.",
                                icon: "⚡",
                                color: "bg-amber-100 text-amber-600"
                            },
                            {
                                title: "Universal Sizing",
                                desc: "Don't do the math yourself. Every recipe includes measurements for 1-lb, 1.5-lb, and 2-lb loaves so you never overflow your pan.",
                                icon: "📏",
                                color: "bg-blue-100 text-blue-600"
                            },
                            {
                                title: "Pantry Staples Only",
                                desc: "No hunting for obscure flours. These recipes use standard ingredients you likely already have in your kitchen right now.",
                                icon: "🌾",
                                color: "bg-green-100 text-green-600"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-brand-pink/20 relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} opacity-10 rounded-bl-[100%] transition-transform group-hover:scale-110`}></div>
                                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-brand-text-title mb-4 font-serif">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. SHOWCASE / PREVIEW: Modern Aesthetic */}
            <div className="py-24 relative bg-brand-text-title overflow-hidden">
                {/* Texture */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:flex lg:items-center lg:gap-20">
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">More Than Just White Bread.</h2>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed">
                                Expand your baking repertoire with <strong>150+ recipes</strong> that push the limits of what a bread machine can do.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { name: "Rustic Sourdough", time: "4h 30m cycle" },
                                    { name: "Cinnamon Swirl Breakfast Bread", time: "3h 15m cycle" },
                                    { name: "Savory Tomato & Basil Loaf", time: "3h 45m cycle" },
                                    { name: "Gluten-Free Seeded Bread", time: "Custom cycle" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm">
                                        <div className="flex items-center gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold text-sm">
                                                {i + 1}
                                            </span>
                                            <span className="font-bold text-white text-lg">{item.name}</span>
                                        </div>
                                        <span className="text-white/50 text-sm font-mono">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-brand-pink/30 rounded-3xl blur-2xl"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <Image
                                    src="/images/blog/bread.png"
                                    alt="Freshly baked breads"
                                    width={800}
                                    height={600}
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-brand-pink font-bold uppercase tracking-wider text-sm mb-2">Featured Recipe</p>
                                        <h3 className="text-3xl font-serif font-bold text-white">Holiday Eggnog Bread</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. REDESIGNED CTA SECTION: The "Wow" Factor requested */}
            <div className="relative py-28 overflow-hidden group">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-brand-pink">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-pink via-rose-500 to-amber-500 opacity-90"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-lg bg-white/20 text-white font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md border border-white/30">
                        Limited Time Offer
                    </span>

                    <h2 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-sm">
                        Ready to Wake Up to<br />Fresh Bread?
                    </h2>

                    <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Join thousands of happy bakers. Your bread machine is waiting to be the hero of your kitchen.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href={affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="w-full sm:w-auto px-12 py-5 bg-white text-brand-pink font-bold rounded-full text-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <span>Get Your Copy Now</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>

                        <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            Secure Transaction via Amazon
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="bg-stone-50 py-8 text-center text-gray-400 text-sm">
                <p>© 2026 Sweety's Bakery. *As an Amazon Associate we earn from qualifying purchases.</p>
            </div>
        </div>
    );
}
