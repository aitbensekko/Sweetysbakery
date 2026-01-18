import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ToolId } from './utils/slugs';
import {
    HeartIcon,
    CakePricingIcon,
    RecipeScalerIcon,
    ChecklistIcon,
    InstagramIcon,
    ChevronRightIcon,
    StarIcon,
    UsersIcon,
    BookOpenIcon,
    ArrowRightIcon
} from './Icons';

interface AboutProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; delay?: number }> = ({ icon, value, label, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-white/50 text-center relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-brand-pink/10 rounded-full blur-2xl group-hover:bg-brand-pink/20 transition-colors duration-500"></div>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-pink-light to-white shadow-inner text-brand-pink mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2, type: "spring", stiffness: 100 }}
            className="font-serif text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-text-title to-brand-pink-dark mb-2"
        >
            {value}
        </motion.div>
        <div className="text-sm text-brand-text-body font-bold uppercase tracking-widest">{label}</div>
    </motion.div>
);

const FeatureGridItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <motion.div
        variants={scaleIn}
        className="flex gap-5 items-start p-6 rounded-2xl hover:bg-white/50 transition-colors duration-300"
    >
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-pink-light flex items-center justify-center text-brand-pink shadow-sm">
            {icon}
        </div>
        <div>
            <h3 className="font-serif font-bold text-xl text-brand-text-title mb-2">{title}</h3>
            <p className="text-brand-text-body/80 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export const About: React.FC<AboutProps> = ({ setActiveTool, breadcrumbs }) => {
    return (
        <div className="md:min-h-screen bg-gray-50/50">
            <div className="p-4 sm:p-6 md:p-10 pb-0">
                {breadcrumbs}
            </div>

            {/* Hero Section */}
            <div className="relative w-full overflow-hidden mb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative shadow-2xl">
                    <div className="relative h-[500px] md:h-[600px] w-full">
                        <Image
                            src="/images/about-hero.png"
                            alt="Sweety's Bakery Kitchen"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>

                        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                                className="max-w-3xl"
                            >
                                <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-sm mb-6 tracking-widest uppercase border border-white/20 shadow-lg">
                                    Est. 2024 • Marrakech, Morocco
                                </motion.div>
                                <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                                    Baking the World<br />
                                    <span className="text-brand-pink-light italic">a Sweeter Place</span>
                                </motion.h1>
                                <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md mb-10 font-light">
                                    Empowering bakers everywhere with professional tools, expert guidance, and a whole lot of love.
                                </motion.p>
                                <motion.div variants={fadeInUp}>
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById('meet-sahara');
                                            el?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="bg-white text-brand-text-title font-bold py-4 px-10 rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300 shadow-xl flex items-center gap-2 group"
                                    >
                                        Meet the Baker
                                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-20">

                {/* Meet the Baker Section - Overlapping Layout */}
                <section id="meet-sahara" className="mb-32 pt-10">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        {/* Image Side */}
                        <div className="md:col-span-5 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4] group"
                            >
                                <Image
                                    src="/images/sarah-main.jpg"
                                    alt="Sarah Aitdahan"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                            </motion.div>
                            {/* Decorative Elements behind */}
                            <div className="absolute top-10 -left-10 w-full h-full border-2 border-brand-pink/20 rounded-[2.5rem] -z-10 hidden md:block"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-pink/10 rounded-full blur-3xl -z-10"></div>
                        </div>

                        {/* Content Side */}
                        <div className="md:col-span-7 bg-white/80 backdrop-blur-lg md:-ml-16 shadow-xl rounded-3xl p-8 md:p-16 border border-white relative z-20">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={staggerContainer}
                            >
                                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                                    <span className="h-px w-12 bg-brand-pink"></span>
                                    <span className="text-brand-pink font-bold uppercase tracking-widest text-sm">Founder & Head Baker</span>
                                </motion.div>

                                <motion.h2 variants={fadeInUp} className="font-serif text-5xl font-bold text-brand-text-title mb-8">
                                    Hi, I'm Sarah!
                                </motion.h2>

                                <motion.div variants={fadeInUp} className="space-y-6 text-brand-text-body/90 leading-relaxed text-lg font-light">
                                    <p>
                                        Welcome to my digital kitchen! Sweety's Bakery was born from a simple belief: <strong className="font-semibold text-brand-pink">baking should be a joy, not a math problem.</strong>
                                    </p>
                                    <p>
                                        As a lifelong baker from Morocco, I've spent years perfecting the classics—from flaky croissants to multi-tiered wedding cakes. But I realized that the technical side of baking (pricing, scaling, converting) often took the fun out of the creative process.
                                    </p>
                                    <p className="font-serif text-xl italic text-brand-text-title border-l-4 border-brand-pink pl-6 py-2 my-6">
                                        "My goal is to handle the numbers so you can focus on what really matters: creating delicious memories."
                                    </p>
                                    <p>
                                        That's why I built this collection of free tools. Whether you're a home baker or a small business owner, I'm here to help you succeed.
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="mt-10 pt-8 border-t border-brand-border/50 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                                            <Image src="/images/sarah-profile.jpg" width={64} height={64} alt="Sarah" className="object-cover w-full h-full" />
                                        </div>
                                        <div>
                                            <p className="font-serif font-bold text-brand-text-title text-lg">Sarah Aitdahan</p>
                                            <p className="text-sm text-brand-text-body/60">Marrakech, Morocco</p>
                                        </div>
                                    </div>
                                    <div className="h-12 w-auto opacity-70">
                                        {/* Signature Placeholder if image not perfect */}
                                        <img src="/images/signature.png" alt="Sarah Signature" className="h-full w-auto object-contain" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="mb-32">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard icon={<ChecklistIcon className="w-8 h-8" />} value="50+" label="Free Tools" delay={0.1} />
                        <StatCard icon={<UsersIcon className="w-8 h-8" />} value="10k+" label="Happy Bakers" delay={0.2} />
                        <StatCard icon={<BookOpenIcon className="w-8 h-8" />} value="100+" label="Recipes" delay={0.3} />
                        <StatCard icon={<StarIcon className="w-8 h-8" />} value="4.9" label="User Rating" delay={0.4} />
                    </div>
                </section>

                {/* Mission / Why Free Tools */}
                <section className="mb-32 relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-white to-brand-pink-light/20 border border-white shadow-xl p-8 md:p-16">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

                    <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block"
                        >
                            Our Commitment
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title mb-6"
                        >
                            Why We Keep It Free
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-brand-text-body/80 font-light"
                        >
                            We believe professional-grade baking resources should be accessible to everyone, from home bakers to small business owners.
                        </motion.p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10"
                    >
                        <FeatureGridItem
                            icon={<CakePricingIcon className="w-6 h-6" />}
                            title="Empowering Small Businesses"
                            description="Our pricing and management tools help home bakers turn their passion into a profitable business without expensive software fees eating into your margins."
                        />
                        <FeatureGridItem
                            icon={<RecipeScalerIcon className="w-6 h-6" />}
                            title="Precision & Consistency"
                            description="Baking is a science. Our calculators ensure your results are consistent every time, whether you're baking for just 2 people or a wedding of 200."
                        />
                        <FeatureGridItem
                            icon={<UsersIcon className="w-6 h-6" />}
                            title="Community First"
                            description="We grow with you. Many of our tools were built based on direct requests from our amazing community of bakers. We listen, and we build."
                        />
                        <FeatureGridItem
                            icon={<BookOpenIcon className="w-6 h-6" />}
                            title="Education for All"
                            description="We're committed to demystifying baking science through clear guides, tutorials, and easy-to-use converters. Knowledge should be free."
                        />
                    </motion.div>
                </section>

                {/* Join Community CTA */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <div className="bg-gradient-to-br from-brand-text-title to-gray-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-brand-pink rounded-full opacity-20 blur-[80px]"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-brand-pink rounded-full opacity-20 blur-[80px]"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="inline-block"
                            >
                                <HeartIcon className="w-16 h-16 text-brand-pink mx-auto mb-8 drop-shadow-lg" fill="currentColor" />
                            </motion.div>

                            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 tracking-tight">Join Our Baking Family</h2>
                            <p className="text-white/80 text-xl mb-12 leading-relaxed font-light">
                                Follow us for daily inspiration, new tool announcements, and behind-the-scenes peeks at what's baking in Sarah's kitchen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="https://www.instagram.com/sweetys.bakery/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-brand-pink text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-brand-pink transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                                >
                                    <InstagramIcon className="w-6 h-6" />
                                    <span>Follow on Instagram</span>
                                </a>
                                <a
                                    href="mailto:contact.sbakery@gmail.com"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-brand-text-title transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
                                >
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};