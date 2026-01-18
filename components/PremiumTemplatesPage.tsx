"use client";

import React from 'react';
import { LemonSqueezyButton } from './LemonSqueezyButton';
import { ChecklistIcon, DollarSignIcon, ClockIcon, ShoppingCartIcon, StarIcon } from './Icons';
import AdSenseAd from './AdSenseAd';

interface PremiumTemplatesPageProps {
    setActiveTool: (toolId: any) => void;
    breadcrumbs: React.ReactNode;
}

export const PremiumTemplatesPage: React.FC<PremiumTemplatesPageProps> = ({ setActiveTool, breadcrumbs }) => {
    return (
        <div className="min-h-screen bg-brand-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-brand-pink/10 via-purple-50 to-brand-background pt-12 pb-20 px-4 sm:px-6 lg:px-8 mb-12 border-b border-brand-pink/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <div className="mb-4 flex justify-center opacity-70 scale-90">{breadcrumbs}</div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-pink/20 shadow-sm text-brand-pink text-sm font-bold uppercase tracking-wider backdrop-blur-sm mb-6">
                        <StarIcon className="w-4 h-4 fill-current" />
                        <span>Premium Business Tools</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-title mb-6 tracking-tight">
                        Professional <span className="text-brand-pink">Bakery Templates</span>
                    </h1>
                    <p className="text-lg md:text-xl text-brand-text-body/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Take your bakery business to the next level with our comprehensive, ready-to-use Google Sheets templates.
                        Designed by bakers, for bakers.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-brand-text-body/70">
                        <div className="flex items-center gap-2">
                            <ChecklistIcon className="w-5 h-5 text-brand-pink" />
                            <span>Instant Download</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ClockIcon className="w-5 h-5 text-brand-pink" />
                            <span>Lifetime Updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSignIcon className="w-5 h-5 text-brand-pink" />
                            <span>One-Time Payment</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <AdSenseAd />

                {/* Main Product Card */}
                <div className="mb-16 bg-white rounded-3xl shadow-xl border border-brand-border/50 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
                        {/* Left: Product Info */}
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4">
                                Best Seller
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text-title mb-4">
                                Bakery Business Operating System
                            </h2>
                            <p className="text-xl text-brand-pink font-bold mb-6">Premium Edition</p>
                            <p className="text-brand-text-body/80 leading-relaxed mb-8">
                                Everything you need to run a profitable bakery business in one comprehensive Google Sheets template.
                                Track inventory, manage orders, analyze costs, and invoice clients—all in one place.
                            </p>

                            {/* Features List */}
                            <div className="space-y-4 mb-8">
                                <h3 className="font-bold text-brand-text-title text-lg mb-4">What's Included:</h3>
                                {[
                                    { icon: '📊', title: 'Inventory Database', desc: 'Track all ingredients with automatic unit cost calculations' },
                                    { icon: '🎂', title: 'Cake Builder', desc: 'Design custom cakes and calculate exact costs' },
                                    { icon: '📝', title: 'Order History', desc: 'Manage all customer orders in one place' },
                                    { icon: '📈', title: 'Analytics Dashboard', desc: 'Visualize your business performance' },
                                    { icon: '💰', title: 'Client Invoicing', desc: 'Professional invoice templates ready to send' },
                                    { icon: '📚', title: 'Quick Start Guide', desc: 'PDF instructions to get you up and running fast' }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-pink-light/30 transition-colors">
                                        <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-brand-text-title">{feature.title}</h4>
                                            <p className="text-sm text-brand-text-body/70">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Pricing & CTA */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-brand-pink-light/30 to-purple-50 p-6 md:p-8 rounded-2xl border border-brand-pink/20">
                                {/* Pricing */}
                                <div className="text-center mb-8">
                                    <div className="text-brand-text-body/60 line-through text-lg mb-2">$47</div>
                                    <div className="text-5xl font-bold text-brand-text-title mb-2">
                                        $19
                                    </div>
                                    <div className="text-brand-pink font-bold text-sm uppercase tracking-wider">
                                        Limited Time Offer
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="mb-6">
                                    <LemonSqueezyButton
                                        checkoutUrl="https://sweetys-bakery.lemonsqueezy.com/checkout/buy/7d82cbde-e279-4a6e-9842-62925e8c9994?embed=1"
                                        buttonText="Get Instant Access"
                                        price="19"
                                        className="w-full justify-center bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white font-bold py-4 px-6 md:py-5 md:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 md:gap-3 group text-base md:text-lg"
                                    />
                                </div>

                                {/* Guarantee */}
                                <div className="text-center text-sm text-brand-text-body/70 mb-6">
                                    <p className="mb-2">✅ Instant download after purchase</p>
                                    <p className="mb-2">✅ Lifetime access & updates</p>
                                    <p>✅ Custom tool creation service included</p>
                                </div>

                                {/* Trust Badges */}
                                <div className="border-t border-brand-border/30 pt-6">
                                    <p className="text-xs text-center text-brand-text-body/60 mb-3">
                                        Secure checkout powered by Lemon Squeezy
                                    </p>
                                    <div className="flex justify-center gap-4 text-brand-text-body/40">
                                        <span className="text-xs">💳 All Cards Accepted</span>
                                        <span className="text-xs">🔒 SSL Secured</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bonus */}
                            <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl shadow-sm">
                                <p className="text-sm font-bold text-amber-900 mb-2">🎁 Exclusive Bonus Included:</p>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    <strong>Custom Tool Creation Service!</strong> After purchase, message us with your specific needs and we'll create a custom calculator or tool tailored to your bakery business—absolutely free!
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                <p className="text-sm font-bold text-blue-900 mb-2">📧 Contact Us:</p>
                                <a href="mailto:contact.sbakery@gmail.com" className="text-sm text-blue-700 hover:text-blue-900 font-semibold hover:underline">
                                    contact.sbakery@gmail.com
                                </a>
                                <p className="text-xs text-blue-600 mt-1">
                                    Send us your custom tool request after purchase
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <AdSenseAd />

                {/* Why This Template Section */}
                <section className="my-16">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title text-center mb-12">
                        Why Bakery Owners Love This Template
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <ClockIcon className="w-8 h-8" />,
                                title: 'Save 10+ Hours Per Week',
                                desc: 'Stop manually tracking inventory and costs. Everything updates automatically.'
                            },
                            {
                                icon: <DollarSignIcon className="w-8 h-8" />,
                                title: 'Increase Profitability',
                                desc: 'Know your exact costs and margins. Price your products correctly from day one.'
                            },
                            {
                                icon: <ChecklistIcon className="w-8 h-8" />,
                                title: 'Stay Organized',
                                desc: 'All your business data in one place. No more scattered spreadsheets and notes.'
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="bg-brand-pink-light text-brand-pink p-4 rounded-xl w-max mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-bold text-xl text-brand-text-title mb-3">{benefit.title}</h3>
                                <p className="text-brand-text-body/80 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="my-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How do I access the template after purchase?',
                                a: 'Immediately after purchase, you\'ll receive an email with a Google Sheets link. Click it to make a copy to your own Google Drive. You\'ll also get a PDF guide with setup instructions.'
                            },
                            {
                                q: 'Do I need any special software?',
                                a: 'No! This template works in Google Sheets, which is 100% free. You just need a Google account. It also works in Excel if you prefer.'
                            },
                            {
                                q: 'Can I customize it for my business?',
                                a: 'Absolutely! The template is fully customizable. Add your own ingredients, suppliers, branding, and pricing. We include a video tutorial showing you how.'
                            },
                            {
                                q: 'What if I need help?',
                                a: 'You get 30 days of free email support. Just reach out to contact.sbakery@gmail.com and we\'ll help you get set up.'
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="bg-white p-6 rounded-xl border border-brand-border group hover:border-brand-pink/50 transition-colors">
                                <summary className="font-bold text-brand-text-title cursor-pointer flex justify-between items-center">
                                    {faq.q}
                                    <svg className="w-5 h-5 text-brand-pink transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </summary>
                                <p className="mt-4 text-brand-text-body/80 leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="my-16 bg-gradient-to-br from-brand-pink to-brand-pink-dark p-12 rounded-3xl text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Ready to Transform Your Bakery Business?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Join hundreds of bakers who are already using this template to run more profitable, organized businesses.
                    </p>
                    <LemonSqueezyButton
                        checkoutUrl="https://sweetys-bakery.lemonsqueezy.com/checkout/buy/7d82cbde-e279-4a6e-9842-62925e8c9994?embed=1"
                        buttonText="Get Started Now"
                        price="19"
                        className="bg-white text-brand-pink font-bold py-5 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group text-lg"
                    />
                    <p className="mt-6 text-sm text-white/70">
                        One-time payment • Instant access • Lifetime updates
                    </p>
                </section>

                <AdSenseAd />
            </div>
        </div>
    );
};
