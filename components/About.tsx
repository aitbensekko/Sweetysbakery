
import React from 'react';
import Image from 'next/image';
import { Footer } from './Footer';
import { ToolId, toolIdToSlug } from './utils/slugs';
import {
    HeartIcon,
    CakePricingIcon,
    RecipeScalerIcon,
    ChecklistIcon,
    InstagramIcon,
    ChevronRightIcon,
    StarIcon,
    UsersIcon,
    BookOpenIcon
} from './Icons';

interface AboutProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-border text-center transform hover:-translate-y-1 transition-transform duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-pink-light text-brand-pink mb-4">
            {icon}
        </div>
        <div className="font-serif text-3xl font-bold text-brand-text-title mb-1">{value}</div>
        <div className="text-sm text-brand-text-body/80 font-medium uppercase tracking-wide">{label}</div>
    </div>
);

const FeatureGridItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex gap-4 items-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-brand-text-title mb-1">{title}</h3>
            <p className="text-sm text-brand-text-body/80 leading-relaxed">{description}</p>
        </div>
    </div>
);

export const About: React.FC<AboutProps> = ({ setActiveTool, breadcrumbs }) => {
    return (
        <div className="fade-in">
            <div className="p-4 sm:p-6 md:p-10 pb-0">
                {breadcrumbs}
            </div>

            {/* Hero Section */}
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden mb-16">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <Image
                    src="/images/about-hero.png"
                    alt="Sweety's Bakery Kitchen"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-sm mb-6 tracking-wide uppercase border border-white/30">
                        Est. 2024
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                        Baking the World<br />a Sweeter Place
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
                        Empowering bakers everywhere with professional tools, expert guidance, and a whole lot of love.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

                {/* Meet the Baker Section */}
                <section className="mb-24">
                    <section className="mb-24">
                        <div className="bg-white rounded-3xl shadow-xl border border-brand-border overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative h-96 md:h-auto md:w-1/2 min-h-[400px] bg-brand-pink-light flex items-center justify-center overflow-hidden group">
                                    {/* Placeholder / Fallback */}
                                    <div className="text-center">
                                        <div className="font-serif text-8xl text-brand-pink/20 font-bold tracking-widest mb-2">SA</div>
                                    </div>

                                    {/* Image (if available) */}
                                    <Image
                                        src="/images/sarah-main.jpg"
                                        alt="Sarah Aitdahan"
                                        fill
                                        className="object-cover transition-opacity duration-300"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                                    <div className="absolute bottom-6 left-6 text-white md:hidden">
                                        <h2 className="font-serif text-3xl font-bold">Sarah Aitdahan</h2>
                                        <p className="opacity-90">Founder & Head Baker</p>
                                    </div>
                                </div>
                                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center md:w-1/2 relative z-10 bg-white">
                                    <div className="hidden md:block mb-6">
                                        <h2 className="font-serif text-4xl font-bold text-brand-text-title mb-2">Hi, I'm Sarah!</h2>
                                        <p className="text-brand-pink font-bold uppercase tracking-wider text-sm">Founder & Head Baker</p>
                                    </div>
                                    <div className="space-y-6 text-brand-text-body/90 leading-relaxed text-lg">
                                        <p>
                                            Welcome to my digital kitchen! Sweety's Bakery was born from a simple belief: <strong>baking should be a joy, not a math problem.</strong>
                                        </p>
                                        <p>
                                            As a lifelong baker from Morocco, I've spent years perfecting the classics—from flaky croissants to multi-tiered wedding cakes. But I realized that the technical side of baking (pricing, scaling, converting) often took the fun out of the creative process.
                                        </p>
                                        <p>
                                            That's why I built this collection of free tools. My goal is to handle the numbers so you can focus on what really matters: creating delicious memories for your loved ones.
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-brand-border flex items-center gap-4">
                                        <div className="h-12 w-auto">
                                            <img src="/images/signature.png" alt="Sarah Aitdahan Signature" className="h-full w-auto object-contain opacity-80" />
                                        </div>
                                        <div>
                                            <p className="font-serif font-bold text-brand-text-title">Sarah Aitdahan</p>
                                            <p className="text-sm text-brand-text-body/60">Marrakech, Morocco</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Stats Section */}
                <section className="mb-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <StatCard icon={<ChecklistIcon className="w-6 h-6" />} value="50+" label="Free Tools" />
                        <StatCard icon={<UsersIcon className="w-6 h-6" />} value="10k+" label="Happy Bakers" />
                        <StatCard icon={<BookOpenIcon className="w-6 h-6" />} value="100+" label="Recipes" />
                        <StatCard icon={<StarIcon className="w-6 h-6" />} value="4.9" label="User Rating" />
                    </div>
                </section>

                {/* Mission / Why Free Tools */}
                <section className="mb-24 relative">
                    <div className="absolute inset-0 bg-brand-pink-light/30 -skew-y-3 rounded-3xl transform scale-105 z-0"></div>
                    <div className="relative z-10 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-border">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-text-title mb-4">Why We Keep It Free</h2>
                            <p className="text-lg text-brand-text-body/80">
                                We believe professional-grade baking resources should be accessible to everyone, from home bakers to small business owners.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            <FeatureGridItem
                                icon={<CakePricingIcon className="w-5 h-5" />}
                                title="Empowering Small Businesses"
                                description="Our pricing and management tools help home bakers turn their passion into a profitable business without expensive software."
                            />
                            <FeatureGridItem
                                icon={<RecipeScalerIcon className="w-5 h-5" />}
                                title="Precision & Consistency"
                                description="Baking is a science. Our calculators ensure your results are consistent every time, whether you're baking for 2 or 200."
                            />
                            <FeatureGridItem
                                icon={<UsersIcon className="w-5 h-5" />}
                                title="Community First"
                                description="We grow with you. Many of our tools were built based on direct requests from our amazing community of bakers."
                            />
                            <FeatureGridItem
                                icon={<BookOpenIcon className="w-5 h-5" />}
                                title="Education for All"
                                description="We're committed to demystifying baking science through clear guides, tutorials, and easy-to-use converters."
                            />
                        </div>
                    </div>
                </section>

                {/* Join Community CTA */}
                <section className="mb-24 text-center">
                    <div className="bg-brand-text-title text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-pink rounded-full opacity-20 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-brand-pink rounded-full opacity-20 blur-3xl"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <HeartIcon className="w-12 h-12 text-brand-pink mx-auto mb-6" fill="currentColor" />
                            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Join Our Baking Family</h2>
                            <p className="text-white/80 text-lg mb-10 leading-relaxed">
                                Follow us for daily inspiration, new tool announcements, and behind-the-scenes peeks at what's baking in Sarah's kitchen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.instagram.com/sweetys.bakery/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-brand-pink text-white font-bold py-3 px-8 rounded-full hover:bg-brand-pink-dark transition-colors duration-300"
                                >
                                    <InstagramIcon className="w-5 h-5" />
                                    <span>Follow on Instagram</span>
                                </a>
                                <a
                                    href="mailto:contact.sbakery@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-brand-text-title font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="p-4 sm:p-6 md:p-10 pt-0">

            </div>
        </div>
    );
};