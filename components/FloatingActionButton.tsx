'use client';

import { useState } from 'react';
import { ScaleIcon, DollarSignIcon, BookOpenIcon, ChefHatIcon, SparklesIcon } from './Icons';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActionButton() {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        { icon: ScaleIcon, label: 'Recipe Scaler', href: '/tools/recipe-scaler', color: 'bg-blue-500' },
        { icon: DollarSignIcon, label: 'Cost Calculator', href: '/tools/cake-pricing-calculator', color: 'bg-green-500' },
        { icon: BookOpenIcon, label: 'Master Guide', href: '/dashboard/guide', color: 'bg-orange-500' },
        { icon: ChefHatIcon, label: 'Browse Recipes', href: '/tools', color: 'bg-brand-pink' },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 print:hidden">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
                    >
                        {actions.map((action, index) => (
                            <motion.div
                                key={action.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={action.href} onClick={() => setIsOpen(false)}>
                                    <div className="flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all pr-5 pl-4 py-3 group">
                                        <div className={`w-10 h-10 ${action.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                                            <action.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-sm text-stone-900 whitespace-nowrap">{action.label}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 ${isOpen ? 'bg-stone-900 rotate-45' : 'bg-brand-pink'
                    }`}
                aria-label="Quick Actions"
            >
                <SparklesIcon className="w-7 h-7 text-white" />
            </button>
        </div>
    );
}
