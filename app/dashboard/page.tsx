'use client';

import { motion } from 'framer-motion';
import {
    PlayIcon, CalendarIcon, BookOpenIcon, ClockIcon,
    SimpleCalcIcon, ChefHatIcon, SparklesIcon,
    ScaleIcon, DollarSignIcon, HeartIcon,
    FlameIcon, StarIcon, ArrowRightIcon, GutHealthIcon,
    BloodSugarIcon, SubstitutionIcon, TrendingUpIcon,
    LeafIcon, CheckBadgeIcon, ChevronDownIcon, ChevronUpIcon,
    ProteinIcon, DumbbellIcon, ChevronRightIcon
} from '../../components/Icons';
import Link from 'next/link';
import { createClient } from '../../utils/supabase/client';
import { useEffect, useState, useRef } from 'react';
import { videoLibrary } from '../../data/videoLibrary';
import { bigThreeDemands, popularSubstitutions, keyBuzzwords, perfectRecipe } from '../../data/healthyBakingTrends';
import RecommendedContent from '../../components/RecommendedContent';

export default function DashboardOverview() {
    const [userName, setUserName] = useState('Baker');
    const [avatarUrl, setAvatarUrl] = useState('/images/generated_images/baker_avatar_placeholder.png');
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [expandedTrend, setExpandedTrend] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'substitutions' | 'buzzwords'>('substitutions');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: profile } = await supabase.from('profiles').select('full_name, avatar_url').eq('id', user.id).single();
                if (profile?.full_name) {
                    setUserName(profile.full_name.split(' ')[0]);
                }
                if (profile?.avatar_url) setAvatarUrl(profile.avatar_url);
            }
        };
        getUser();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const current = scrollContainerRef.current;
            const scrollAmount = direction === 'left' ? -500 : 500;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    const tools = [
        {
            title: "Calculators",
            subtitle: "Dough & Pricing",
            icon: SimpleCalcIcon,
            color: "bg-brand-pink",
            href: "/dashboard/calculators",
            delay: 0
        },
        {
            title: "Master Guide",
            subtitle: "Sourdough PDF",
            icon: BookOpenIcon,
            color: "bg-orange-400",
            href: "/dashboard/guide",
            delay: 1
        },
        {
            title: "Recipe Scaler",
            subtitle: "Resize Batches",
            icon: ScaleIcon,
            color: "bg-blue-500",
            href: "/tools/recipe-scaler",
            delay: 2
        },
        {
            title: "Cost Calc",
            subtitle: "Profit Analysis",
            icon: DollarSignIcon,
            color: "bg-green-500",
            href: "/tools/cake-pricing-calculator",
            delay: 3
        }
    ];

    return (
        <div className="w-full max-w-none pb-20">
            {/* Breadcrumbs */}
            <nav className="mb-6 text-sm">
                <ol className="flex items-center gap-2 text-stone-500">
                    <li>
                        <Link href="/" className="hover:text-brand-pink transition-colors">Home</Link>
                    </li>
                    <li>
                        <ChevronRightIcon className="w-4 h-4" />
                    </li>
                    <li className="text-stone-900 font-semibold">Dashboard</li>
                </ol>
            </nav>

            {/* Header Section - Compact Design */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative z-20">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-stone-200 shadow-sm overflow-hidden relative bg-stone-100">
                        <img
                            src={avatarUrl}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-0">
                            Hello, <span className="text-brand-pink">{userName}</span>
                        </h1>
                        <p className="text-stone-500 text-sm flex items-center gap-2 mt-1">
                            <SparklesIcon className="w-4 h-4 text-brand-gold" />
                            Turn your oven on. It's time to bake.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Link href="/tools/recipe-scaler">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all font-bold text-sm">
                            <FlameIcon className="w-4 h-4" />
                            <span>New Recipe</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-[2rem] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-stone-100 flex items-center gap-5 hover:border-brand-pink/30 hover:bg-stone-50/50 transition-all cursor-default">
                    <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-brand-pink shadow-sm">
                        <HeartIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Saved Recipes</div>
                        <div className="text-2xl font-bold text-stone-900">24</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-stone-100 flex items-center gap-5 hover:border-brand-pink/30 hover:bg-stone-50/50 transition-all cursor-default">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
                        <SimpleCalcIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Tools Used</div>
                        <div className="text-2xl font-bold text-stone-900">47</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-stone-100 flex items-center gap-5 hover:border-brand-pink/30 hover:bg-stone-50/50 transition-all cursor-default">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shadow-sm">
                        <FlameIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Baking Streak</div>
                        <div className="text-2xl font-bold text-stone-900">12 Days</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-stone-100 flex items-center gap-5 hover:border-brand-pink/30 hover:bg-stone-50/50 transition-all cursor-default">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm">
                        <StarIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Progress</div>
                        <div className="text-2xl font-bold text-stone-900">68%</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions Panel */}
            <section className="mb-12">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-stone-900 mb-1">Quick Actions</h2>
                        <p className="text-stone-500">Shortcuts to your most-used tools</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <Link href="/tools/recipe-scaler" className="group">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-[2rem] border border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer text-center">
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <ScaleIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-sm text-stone-900">Scale Recipe</h3>
                        </div>
                    </Link>

                    <Link href="/tools/cake-pricing-calculator" className="group">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-[2rem] border border-green-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer text-center">
                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <DollarSignIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-sm text-stone-900">Calculate Cost</h3>
                        </div>
                    </Link>

                    <Link href="/dashboard/calculators" className="group">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-[2rem] border border-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer text-center">
                            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <SimpleCalcIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-sm text-stone-900">All Tools</h3>
                        </div>
                    </Link>

                    <Link href="/dashboard/guide" className="group">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-[2rem] border border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer text-center">
                            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <BookOpenIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-sm text-stone-900">Master Guide</h3>
                        </div>
                    </Link>

                    <Link href="/tools" className="group">
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-[2rem] border border-pink-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer text-center">
                            <div className="w-12 h-12 bg-brand-pink rounded-2xl flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <ChefHatIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-sm text-stone-900">Browse Recipes</h3>
                        </div>
                    </Link>

                    <Link href="/dashboard/guide" className="group">
                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-[2rem] border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer text-center">
                            <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <SparklesIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-sm text-stone-900">Get Help</h3>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Saved Collections */}
            <section className="mb-12">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-stone-900 mb-1">Your Collections</h2>
                        <p className="text-stone-500">Quick access to your favorites</p>
                    </div>
                    <Link href="/tools" className="text-sm font-bold text-stone-400 hover:text-brand-pink transition-colors flex items-center gap-1">
                        View all <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.1)] hover:border-brand-pink/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                                <HeartIcon className="w-5 h-5 text-brand-pink" />
                            </div>
                            <h3 className="font-bold text-lg text-stone-900">Favorite Recipes</h3>
                        </div>
                        <p className="text-sm text-stone-500 mb-4">Your starred and saved recipes</p>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-stone-400">24 recipes</span>
                            <Link href="/tools" className="text-brand-pink font-bold hover:underline">View →</Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:border-blue-500/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                <ClockIcon className="w-5 h-5 text-blue-500" />
                            </div>
                            <h3 className="font-bold text-lg text-stone-900">Recent Tools</h3>
                        </div>
                        <p className="text-sm text-stone-500 mb-4">Your last used calculators</p>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-stone-400">5 tools</span>
                            <Link href="/tools" className="text-blue-500 font-bold hover:underline">View →</Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)] hover:border-green-500/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                                <BookOpenIcon className="w-5 h-5 text-green-600" />
                            </div>
                            <h3 className="font-bold text-lg text-stone-900">Learning Path</h3>
                        </div>
                        <p className="text-sm text-stone-500 mb-4">Your progress through guides</p>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-stone-400">68% complete</span>
                            <Link href="/dashboard/guide" className="text-green-600 font-bold hover:underline">Continue →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Content */}
            <RecommendedContent />

            {/* Main Layout: Vertical Flow */}
            <div className="space-y-12">

                {/* 1. Quick Access Tools (Grid of 4) */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-serif text-3xl font-bold text-stone-900">Studio Tools</h2>
                        <Link href="/tools" className="text-sm font-bold text-stone-400 hover:text-brand-pink transition-colors flex items-center gap-1">
                            View all <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tools.map((tool, i) => (
                            <Link key={i} href={tool.href} className="group">
                                <motion.div
                                    custom={i + 3}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    className="bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.1)] hover:border-brand-pink/20 transition-all h-full flex flex-col justify-between relative overflow-hidden min-h-[180px]"
                                >
                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl ${tool.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                                            <tool.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="font-bold text-xl text-stone-900 leading-tight mb-1 group-hover:text-brand-pink transition-colors">{tool.title}</h3>
                                        <p className="text-sm font-medium text-stone-400">{tool.subtitle}</p>
                                    </div>
                                    <div className={`absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-[0.03] ${tool.color} group-hover:scale-150 transition-transform duration-700`}></div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 2. Healthy Baking Trends Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-1">Healthy Baking Trends</h2>
                            <p className="text-stone-500">What today's health-conscious consumers are searching for</p>
                        </div>
                        <Link href="/dashboard/guide" className="text-sm font-bold text-stone-400 hover:text-brand-pink transition-colors flex items-center gap-1">
                            Learn more <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* The Big Three Demands - Expandable Hero Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {bigThreeDemands.map((trend, i) => {
                            const isExpanded = expandedTrend === trend.id;
                            const IconComponent = trend.id === 'gut-health' ? GutHealthIcon : trend.id === 'high-protein' ? DumbbellIcon : BloodSugarIcon;

                            return (
                                <motion.div
                                    key={trend.id}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    onClick={() => setExpandedTrend(isExpanded ? null : trend.id)}
                                    className="cursor-pointer group"
                                >
                                    <div className={`bg-white rounded-[2.5rem] border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all overflow-hidden ${isExpanded ? 'ring-2 ring-brand-pink/20' : ''
                                        }`}>
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div
                                                    className={`w-14 h-14 rounded-2xl ${trend.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                    style={trend.id === 'high-protein' ? { backgroundColor: '#f97316' } : {}}
                                                >
                                                    <IconComponent className="w-7 h-7" />
                                                </div>
                                                {isExpanded ? (
                                                    <ChevronUpIcon className="w-5 h-5 text-stone-400" />
                                                ) : (
                                                    <ChevronDownIcon className="w-5 h-5 text-stone-400" />
                                                )}
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-xs font-bold text-brand-pink uppercase tracking-wider">{trend.subtitle}</span>
                                            </div>
                                            <h3 className="font-bold text-2xl text-stone-900 leading-tight mb-3 group-hover:text-brand-pink transition-colors">{trend.title}</h3>
                                            <p className="text-sm text-stone-500 leading-relaxed">{trend.description}</p>
                                        </div>

                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-stone-100 p-6 bg-stone-50/50"
                                            >
                                                <div className="mb-4">
                                                    <h4 className="font-bold text-sm text-stone-900 mb-2 flex items-center gap-2">
                                                        <TrendingUpIcon className="w-4 h-4 text-brand-pink" />
                                                        Why It Matters
                                                    </h4>
                                                    <p className="text-sm text-stone-600 leading-relaxed">{trend.details.why}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <h4 className="font-bold text-sm text-stone-900 mb-2">Examples:</h4>
                                                    <ul className="space-y-1">
                                                        {trend.details.examples.map((example, idx) => (
                                                            <li key={idx} className="text-sm text-stone-600 flex items-start gap-2">
                                                                <span className="text-brand-pink mt-1">•</span>
                                                                <span>{example}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-stone-900 mb-2">Pro Tips:</h4>
                                                    <ul className="space-y-1">
                                                        {trend.details.tips.map((tip, idx) => (
                                                            <li key={idx} className="text-sm text-stone-600 flex items-start gap-2">
                                                                <StarIcon className="w-3 h-3 text-brand-gold mt-1 flex-shrink-0" />
                                                                <span>{tip}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Tabbed Interface - Substitutions & Buzzwords */}
                    <div className="bg-white rounded-[2.5rem] border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden mb-8">
                        {/* Tab Headers */}
                        <div className="flex border-b border-stone-100">
                            <button
                                onClick={() => setActiveTab('substitutions')}
                                className={`flex-1 px-6 py-4 font-bold text-sm transition-all ${activeTab === 'substitutions'
                                    ? 'text-brand-pink border-b-2 border-brand-pink bg-pink-50/30'
                                    : 'text-stone-400 hover:text-stone-600'
                                    }`}
                            >
                                <SubstitutionIcon className="w-5 h-5 inline-block mr-2" />
                                Popular Substitutions
                            </button>
                            <button
                                onClick={() => setActiveTab('buzzwords')}
                                className={`flex-1 px-6 py-4 font-bold text-sm transition-all ${activeTab === 'buzzwords'
                                    ? 'text-brand-pink border-b-2 border-brand-pink bg-pink-50/30'
                                    : 'text-stone-400 hover:text-stone-600'
                                    }`}
                            >
                                <TrendingUpIcon className="w-5 h-5 inline-block mr-2" />
                                Key Buzzwords
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {activeTab === 'substitutions' ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {popularSubstitutions.map((sub, idx) => {
                                        const SubIcon = sub.icon === 'scale' ? ScaleIcon : sub.icon === 'heart' ? HeartIcon : SparklesIcon;
                                        return (
                                            <div key={idx} className="bg-stone-50 rounded-2xl p-5 hover:bg-stone-100/50 transition-colors">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                                                        <SubIcon className="w-5 h-5 text-brand-pink" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-stone-900 mb-1">{sub.category}</h4>
                                                        <p className="text-xs text-stone-500 mb-2">
                                                            <span className="line-through">{sub.from}</span> → <span className="font-semibold text-brand-pink">{sub.to.join(', ')}</span>
                                                        </p>
                                                        <p className="text-xs text-stone-600 italic">{sub.benefit}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {keyBuzzwords.map((buzzword, idx) => (
                                        <div key={idx} className="bg-stone-50 rounded-2xl p-5 hover:bg-stone-100/50 transition-colors">
                                            <div className="flex items-center gap-2 mb-3">
                                                <CheckBadgeIcon className="w-5 h-5 text-brand-pink" />
                                                <h4 className="font-bold text-stone-900">{buzzword.term}</h4>
                                            </div>
                                            <p className="text-xs text-stone-600 mb-3 leading-relaxed">{buzzword.meaning}</p>
                                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${buzzword.color}`}>
                                                <TrendingUpIcon className="w-3 h-3" />
                                                {buzzword.searchVolume}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Perfect Recipe Example */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-[2.5rem] border border-green-100 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                <StarIcon className="w-8 h-8 text-brand-gold" />
                            </div>
                            <div className="flex-1">
                                <div className="mb-2">
                                    <span className="text-xs font-bold text-green-700 uppercase tracking-wider">{perfectRecipe.subtitle}</span>
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3">{perfectRecipe.title}</h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">{perfectRecipe.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {perfectRecipe.breakdown.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-pink mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-bold text-sm text-stone-900">{item.aspect}:</span>
                                                <span className="text-sm text-stone-600 ml-1">{item.detail}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/tools/recipe-scaler">
                                        <button className="px-6 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-brand-pink hover:shadow-lg transition-all shadow-md flex items-center gap-2 text-sm">
                                            <ScaleIcon className="w-4 h-4" />
                                            Scale This Recipe
                                        </button>
                                    </Link>
                                    <Link href="/tools/cake-pricing-calculator">
                                        <button className="px-6 py-3 bg-white text-stone-900 rounded-xl font-bold hover:bg-stone-50 transition-all shadow-md flex items-center gap-2 text-sm border border-stone-200">
                                            <DollarSignIcon className="w-4 h-4" />
                                            Calculate Costs
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Daily Tip Banner (Light Version) */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="relative w-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#FFF5F1] to-[#FFF0F5] border border-stone-100 p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.03)] group cursor-pointer"
                    >
                        {/* Decorative background elements - subtle blobs */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[80px] opacity-60 pointer-events-none mix-blend-soft-light"></div>
                        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[60px] pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-brand-pink border border-brand-pink/10 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                                    <SparklesIcon className="w-3 h-3 text-brand-gold" />
                                    Daily Wisdom
                                </div>
                                <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight text-stone-900">
                                    Autolyse for <span className="text-brand-pink relative inline-block">Better Crumbs<svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-pink/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" /></svg></span>
                                </h3>
                                <p className="text-stone-500 text-lg leading-relaxed mb-8">
                                    Letting your flour and water rest for 30 minutes before adding salt improves gluten development significantly. It's the secret to that artisan open crumb.
                                </p>
                                <Link href="/dashboard/guide">
                                    <button className="px-8 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-brand-pink hover:shadow-lg transition-all shadow-md flex items-center gap-3 active:scale-95">
                                        <BookOpenIcon className="w-5 h-5" />
                                        <span>Read the Master Guide</span>
                                    </button>
                                </Link>
                            </div>

                            {/* Visual Element - Chef Hat Illustration */}
                            <div className="hidden md:block relative group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                <div className="w-64 h-64 relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-orange-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
                                    <div className="absolute inset-4 bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl border border-white flex items-center justify-center">
                                        <div className="relative">
                                            <ChefHatIcon className="w-24 h-24 text-stone-900/80" />
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center text-white shadow-lg">
                                                <StarIcon className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Small floating elements */}
                                    <div className="absolute top-10 -left-6 bg-white p-3 rounded-2xl shadow-lg border border-stone-50 animate-bounce-slow" style={{ animationDelay: '0s' }}>
                                        <div className="text-2xl">🥐</div>
                                    </div>
                                    <div className="absolute bottom-10 -right-6 bg-white p-3 rounded-2xl shadow-lg border border-stone-50 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                                        <div className="text-2xl">🥖</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 4. Continue Learning / Videos (Horizontal Carousel) */}
                <section className="overflow-hidden grid grid-cols-1">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-1">Featured Videos</h2>
                            <p className="text-stone-500">Master the basics and discover new recipes.</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors text-stone-400 bg-white"
                            >
                                <ArrowRightIcon className="w-5 h-5 rotate-180" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-700 transition-colors shadow-lg"
                            >
                                <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide w-full"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {videoLibrary.map((video, i) => (
                            <motion.div
                                key={video.id}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                onClick={() => setSelectedVideo(video.id)}
                                className="min-w-[70vw] md:min-w-[300px] snap-center group cursor-pointer"
                            >
                                <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-4 shadow-md border border-stone-100">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                            <PlayIcon className="w-5 h-5 text-white fill-current ml-0.5" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-white text-[10px] font-bold border border-white/10">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="px-1">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest">{video.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                                        <span className="text-[10px] font-medium text-stone-400">YouTube</span>
                                    </div>
                                    <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug mb-1 group-hover:text-brand-pink transition-colors line-clamp-1">{video.title}</h3>
                                    <p className="text-xs text-stone-500 line-clamp-2">Watch the full tutorial to learn improved techniques for {video.title.toLowerCase()}.</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setSelectedVideo(null)}>
                    <div className="w-full max-w-4xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/10 bg-black" onClick={e => e.stopPropagation()}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-6 right-6 w-10 h-10 bg-black/50 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 group border border-white/10"
                        >
                            <span className="text-2xl font-light leading-none relative -top-0.5">&times;</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
