'use client';

import { useState, useEffect } from 'react';
import { BookOpenIcon, ChevronDownIcon, ChevronUpIcon, StarIcon, CheckCircleIcon, FlameIcon, ChevronRightIcon } from '../../../components/Icons';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ProgressBar from '../../../components/ProgressBar';
import RelatedContent from '../../../components/RelatedContent';

export default function MasterGuidePage() {
    const [openChapter, setOpenChapter] = useState<number | null>(0);
    const [isPrinting, setIsPrinting] = useState(false);

    useEffect(() => {
        document.title = "Sourdough Master Guide | Created by Sarah Ait dahan - Sweety's Bakery";
    }, []);

    const handlePrint = () => {
        setIsPrinting(true);
        // Wait for state to update and animations/DOM to settle before printing
        setTimeout(() => {
            window.print();
            setIsPrinting(false);
        }, 100);
    };

    const chapters = [
        {
            title: "The Starter: Creating Life",
            subtitle: "Day 1-7 • The Foundation of Flavour",
            content: (
                <div className="space-y-6 text-stone-600 leading-relaxed font-sans">
                    <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 print:border-stone-200">
                        <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2 print:text-black">
                            <StarIcon className="w-4 h-4 text-orange-500 print:text-black" />
                            The Science
                        </h4>
                        <p className="text-sm text-orange-800/80 print:text-black">
                            You are capturing wild yeast and lactobacillus bacteria from the environment and the flour itself. The yeast provides the rise (CO2), while the bacteria provides the complex sour flavor (lactic and acetic acid).
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">The 7-Day Protocol</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-100 text-stone-500 font-bold text-xs flex items-center justify-center mt-1 print:border print:border-stone-300">1</span>
                                <div>
                                    <strong className="block text-stone-900">Day 1: Initial Mix</strong>
                                    50g Whole Wheat Flour + 50g Water. Mix in a clean jar, cover loosely, and leave for 24 hours at room temp (70°F-75°F).
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-100 text-stone-500 font-bold text-xs flex items-center justify-center mt-1 print:border print:border-stone-300">2</span>
                                <div>
                                    <strong className="block text-stone-900">Day 2: The First Feed</strong>
                                    You may see bubbles (often bad activity). Discard half (50g). Add 50g White Flour + 50g Water. Mix well.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-100 text-stone-500 font-bold text-xs flex items-center justify-center mt-1 print:border print:border-stone-300">3+</span>
                                <div>
                                    <strong className="block text-stone-900">Days 3-7: Stabilization</strong>
                                    Repeat the discard and feed daily. By Day 7, it should double in size within 4-6 hours of feeding and smell like ripe fruit or yogurt.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "The Mix: Autolyse & Rubaud",
            subtitle: "Building Strength Early",
            content: (
                <div className="space-y-6 text-stone-600 leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 print:border-stone-200">
                            <h4 className="font-bold text-blue-900 mb-2 print:text-black">Why Autolyse?</h4>
                            <p className="text-sm text-blue-800/80 print:text-black">Mixing flour and water (no salt/starter) allows protease enzymes to break down connections, making the dough extensible (stretchy) before we build elasticity.</p>
                        </div>
                        <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-100 print:border-stone-200">
                            <h4 className="font-bold text-purple-900 mb-2 print:text-black">When to Add Salt?</h4>
                            <p className="text-sm text-purple-800/80 print:text-black">Salt tightens gluten and inhibits yeast. We add it 30 mins *after* the initial mix to ensure the yeast gets a head start.</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-bold text-stone-900 mb-3">The Rubaud Method</h4>
                        <p className="mb-4">For wet doughs (75%+ hydration), standard kneading fails. Use the Rubaud method:</p>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 bg-stone-50 p-4 rounded-xl print:bg-transparent print:border print:border-stone-200">
                            <li>Cup your hand like a scoop.</li>
                            <li>Dive under the dough in the center.</li>
                            <li>Lift the dough and stretch it upwards.</li>
                            <li>Slap it against the bowl wall and let it fall.</li>
                            <li>Repeat rapidly for 5-8 minutes until smooth.</li>
                        </ol>
                    </div>

                    {/* Video Tutorial */}
                    <div className="mt-6 print:hidden">
                        <h4 className="font-serif text-lg font-bold text-stone-900 mb-3">Video Tutorial</h4>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/nDDnm0OiBpE"
                                title="Sourdough Mixing and Autolyse Technique"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Bulk Fermentation: The Rise",
            subtitle: "Temperature & Timing",
            content: (
                <div className="space-y-6 text-stone-600 leading-relaxed">
                    <p className="text-lg font-medium text-stone-900">This is 90% of the bread's success. Under-proofed = gummy. Over-proofed = flat.</p>

                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">The "Stretch & Fold" Technique</h4>
                        <p>Perform these every 30 minutes for the first 2 hours (4 sets total).</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border p-4 rounded-xl text-center print:border-stone-300">
                                <span className="block text-2xl mb-2">North</span>
                                <span className="text-xs uppercase font-bold text-stone-400 print:text-black">Pull Up & Fold Over</span>
                            </div>
                            <div className="bg-white border p-4 rounded-xl text-center print:border-stone-300">
                                <span className="block text-2xl mb-2">South</span>
                                <span className="text-xs uppercase font-bold text-stone-400 print:text-black">Pull Up & Fold Over</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 text-stone-300 p-6 rounded-2xl print:bg-white print:border print:border-stone-200 print:text-black">
                        <strong className="text-white block mb-2 text-lg print:text-black">⚠️ The Poke Test</strong>
                        <p className="text-sm print:text-black">Poke the dough 1/2 inch deep. If it springs back instantly, it needs more time. If it springs back slowly and leaves a small indent, it's ready. If it collapses, it's over-proofed.</p>
                    </div>

                    {/* Video Tutorial */}
                    <div className="mt-6 print:hidden">
                        <h4 className="font-serif text-lg font-bold text-stone-900 mb-3">Video Tutorial</h4>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/HlJEjW-QSnQ"
                                title="Sourdough Bulk Fermentation Guide"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Shaping: Creating Tension",
            subtitle: "Batard vs Boule",
            content: (
                <div className="space-y-6 text-stone-600 leading-relaxed">
                    <p>Shaping isn't just aesthetic. It creates a "skin" on the dough that forces it to rise UP instead of OUT in the oven.</p>

                    <div className="space-y-4">
                        <h4 className="font-bold text-stone-900">Key Movements</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                                <span><strong>The Pre-Shape:</strong> Roughly shape into a ball. Let rest on the bench for 20 mins uncovered. This relaxes the gluten.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                                <span><strong>The Stitch:</strong> Fold sides into the middle like a shoelace to create a tight structural spine.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                                <span><strong>The Roll:</strong> Roll it up tight (like a sleeping bag) and pinch the ends.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Video Tutorial */}
                    <div className="mt-6 print:hidden">
                        <h4 className="font-serif text-lg font-bold text-stone-900 mb-3">Video Tutorial</h4>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/2FVfJTGpXnU"
                                title="Sourdough Shaping Technique"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Cold Retard: Flavor Development",
            subtitle: "12-24 Hours Fridge Rest",
            content: (
                <div className="space-y-6 text-stone-600 leading-relaxed">
                    <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 flex gap-4 print:border-stone-200">
                        <div className="text-3xl">❄️</div>
                        <div>
                            <h4 className="font-bold text-indigo-900 print:text-black">Why Cold?</h4>
                            <p className="text-sm text-indigo-800/80 print:text-black">Yeast slows down at 4°C, but lactobacillus (bacteria) keeps working. This creates that tangy sourdough flavor without over-proofing the dough. It also firms up the dough, making it much easier to score.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "The Bake: Oven Spring",
            subtitle: "Heat & Steam",
            content: (
                <div className="space-y-6 text-stone-600 leading-relaxed">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-stone-50 rounded-xl print:border print:border-stone-200">
                            <strong className="block text-xl text-stone-900">500°F</strong>
                            <span className="text-xs text-stone-500">Preheat (1 hour)</span>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-xl print:border print:border-stone-200">
                            <strong className="block text-xl text-stone-900">20 min</strong>
                            <span className="text-xs text-stone-500">Lid ON (Steam)</span>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-xl print:border print:border-stone-200">
                            <strong className="block text-xl text-stone-900">25 min</strong>
                            <span className="text-xs text-stone-500">Lid OFF (Crust)</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-stone-900">Scoring Tips</h4>
                        <p>Use a razor blade (lame). Hold it at a 45° angle to create an "ear". Determine your score depth—too shallow and it won't open; too deep and it collapses.</p>
                    </div>

                    {/* Video Tutorial */}
                    <div className="mt-6 print:hidden">
                        <h4 className="font-serif text-lg font-bold text-stone-900 mb-3">Video Tutorial</h4>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/bSYdABrPrtM"
                                title="How to Bake Sourdough Bread"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <>
            <ProgressBar />
            <div className="space-y-8 max-w-4xl mx-auto pb-24 print:pb-0 print:max-w-none">
                {/* Breadcrumbs */}
                <nav className="text-sm print:hidden">
                    <ol className="flex items-center gap-2 text-stone-500">
                        <li>
                            <Link href="/" className="hover:text-brand-pink transition-colors">Home</Link>
                        </li>
                        <li>
                            <ChevronRightIcon className="w-4 h-4" />
                        </li>
                        <li>
                            <Link href="/dashboard" className="hover:text-brand-pink transition-colors">Dashboard</Link>
                        </li>
                        <li>
                            <ChevronRightIcon className="w-4 h-4" />
                        </li>
                        <li className="text-stone-900 font-semibold">Sourdough Master Guide</li>
                    </ol>
                </nav>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 pb-8 print:border-none">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="bg-brand-pink/10 px-3 py-1 rounded-full text-brand-pink font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-brand-pink/20 print:border-stone-900 print:text-black print:bg-transparent">
                                <FlameIcon className="w-3 h-3" />
                                Premium Course
                            </div>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-2">Sourdough Master Guide</h1>
                        <p className="text-lg text-stone-500 max-w-2xl">A comprehensive 6-stage framework to mastering open crumb and artisan crusts. Updated for Winter 2024.</p>
                        <p className="text-sm text-stone-400 mt-2 font-medium">Created by Sarah Ait dahan - Sweety's Bakery</p>
                    </div>
                    <button
                        onClick={handlePrint}
                        className="px-6 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors shadow-lg flex items-center gap-2 print:hidden"
                    >
                        <span>Print Guide</span>
                    </button>
                </div>

                <div className="grid gap-6 print:gap-8 print:block">
                    {chapters.map((chapter, i) => (
                        <motion.div
                            initial={false}
                            key={i}
                            className={`bg-white rounded-[1.5rem] border transition-all duration-300 overflow-hidden group 
                            ${(openChapter === i || isPrinting) ? 'border-brand-pink shadow-[0_10px_40px_rgba(236,72,153,0.1)] ring-1 ring-brand-pink' : 'border-stone-100 hover:border-brand-pink/30 hover:shadow-lg'}
                            print:shadow-none print:border-none print:rounded-none print:ring-0 print:mb-8 print:break-inside-avoid
                        `}
                        >
                            <button
                                onClick={() => setOpenChapter(openChapter === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left print:p-0 print:mb-4"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold transition-colors 
                                    ${(openChapter === i || isPrinting) ? 'bg-brand-pink text-white shadow-lg' : 'bg-stone-50 text-stone-400 group-hover:bg-stone-100'}
                                    print:bg-transparent print:text-black print:shadow-none print:border print:border-stone-900 print:w-8 print:h-8 print:text-sm
                                `}>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className={`font-serif text-2xl font-bold transition-colors 
                                        ${(openChapter === i || isPrinting) ? 'text-brand-pink' : 'text-stone-900'}
                                        print:text-black
                                    `}>{chapter.title}</h3>
                                        <p className="text-sm font-medium text-stone-400 uppercase tracking-wider mt-1 print:text-stone-600">{chapter.subtitle}</p>
                                    </div>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all 
                                ${(openChapter === i || isPrinting) ? 'bg-brand-pink/10 text-brand-pink rotate-180' : 'bg-transparent text-stone-300 group-hover:bg-stone-50'}
                                print:hidden
                            `}>
                                    <ChevronDownIcon className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={openChapter === i || isPrinting ? 'block' : 'hidden'}>
                                <div className="px-8 pb-8 md:pl-[6.5rem] max-w-3xl print:pl-12 print:px-0">
                                    {chapter.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Print Footer */}
                <div className="hidden print:flex fixed bottom-0 left-0 right-0 justify-between items-center px-8 py-4 bg-white border-t border-stone-200">
                    <div className="flex items-center gap-2 text-stone-900 font-bold font-serif">
                        <FlameIcon className="w-4 h-4 text-brand-pink" />
                        <span>Sweety's Bakery</span>
                    </div>
                    <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">
                        Created by Sarah Ait dahan
                    </div>
                </div>
            </div>

            {/* Related Content */}
            <RelatedContent />
        </>
    );
}
