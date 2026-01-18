'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlameIcon } from './Icons';

export default function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if popup has been shown in this session
        const shown = sessionStorage.getItem('newsletterPopupShown');
        if (shown) {
            setHasShown(true);
            return;
        }

        // Exit-intent detection
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsOpen(true);
                setHasShown(true);
                sessionStorage.setItem('newsletterPopupShown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasShown]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with your email service
        console.log('Newsletter signup:', email);
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 print:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center text-stone-600"
                        >
                            ✕
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FlameIcon className="w-8 h-8 text-brand-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-2">
                                Wait! Don't Leave Yet 👋
                            </h2>
                            <p className="text-stone-600">
                                Get our <strong>free Sourdough Starter Guide PDF</strong> and join 10,000+ bakers mastering their craft
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full px-6 py-4 rounded-2xl border-2 border-stone-200 focus:border-brand-pink focus:outline-none transition-colors text-stone-900"
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-brand-pink text-white rounded-2xl font-bold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Get Free Guide →
                            </button>
                        </form>

                        <p className="text-xs text-stone-400 text-center mt-4">
                            No spam, unsubscribe anytime. We respect your privacy.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
