'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    BookOpenIcon,
    PlayIcon,
    CalendarIcon,
    SparklesIcon,
    HomeIcon,
    ChefHatIcon
} from '../../components/Icons';
import { motion } from 'framer-motion';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const text_navs = [
        { name: 'Overview', href: '/dashboard', icon: HomeIcon },
        { name: 'Master Guide', href: '/dashboard/guide', icon: BookOpenIcon },

        { name: 'Calculators', href: '/dashboard/calculators', icon: CalendarIcon },
    ];

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-stone-900 font-sans">

            {/* HEADER & HORIZONTAL NAVIGATION */}
            {/* MAIN CONTENT AREA */}

            {/* MAIN CONTENT AREA */}
            <main className="min-h-[calc(100vh-80px)]">
                <div className="p-4 w-full max-w-none">
                    {children}
                </div>
            </main>
        </div>
    );
}
