'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
            setProgress(Math.min(scrollPercentage, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-stone-100 z-50 print:hidden">
            <motion.div
                className="h-full bg-gradient-to-r from-brand-pink to-orange-400"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
            />
        </div>
    );
}
