import React, { useState } from 'react';
import Link from 'next/link';
import { SearchIcon, MenuIcon } from './Icons';

interface HeaderProps {
    onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header className="sticky top-0 z-30 w-full bg-white border-b border-stone-100/80 backdrop-blur-md shadow-sm">
            <div className="w-full px-3 sm:px-4 lg:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">

                <div className="flex items-center gap-3">
                    {/* Menu Toggle Button (Visible on all screens) */}
                    <button
                        onClick={onMenuClick}
                        className="p-2 -ml-2 lg:mr-2 text-stone-600 hover:bg-stone-50 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <MenuIcon className="w-6 h-6" />
                    </button>

                    {/* Logo - Always Visible */}
                    <Link href="/" className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-stone-900 tracking-tight flex-shrink-0" aria-label="Sweety's Bakery Home">
                        Sweety's <span className="text-brand-pink">Bakery</span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                    <Link href="/recipes" className="text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors">Recipes</Link>
                    <Link href="/blog" className="text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors">Baking Blog</Link>
                    <Link href="/products" className="text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors">Products</Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2 sm:gap-3">

                    {/* Search Bar - Desktop Only */}
                    <div className="relative hidden xl:block max-w-xs w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-4 w-4 text-stone-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-stone-200 rounded-lg leading-5 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand-pink focus:border-brand-pink sm:text-sm transition-colors"
                            placeholder="Search recipes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search recipes"
                        />
                    </div>

                    <div className="h-6 w-px bg-stone-200 hidden xl:block mx-1"></div>

                    {/* Login Button - Hidden on smallest screens */}
                    <Link href="/login" className="hidden sm:block">
                        <button className="px-3 md:px-4 py-2 text-xs md:text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors whitespace-nowrap">
                            Log In
                        </button>
                    </Link>

                    {/* Register Button - Responsive sizing */}
                    <Link href="/signup">
                        <button className="px-3 sm:px-4 md:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-brand-pink rounded-lg shadow-md hover:bg-brand-pink/90 hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap">
                            <span className="hidden sm:inline">Sign Up</span>
                            <span className="sm:hidden">Sign Up</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
