'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { toolIdToSlug } from './utils/slugs';
import { ChevronRightIcon, ChevronLeftIcon, MenuIcon } from './Icons';
import { Header } from './Header';
import { AdUnit } from './AdUnit';
import FloatingActionButton from './FloatingActionButton';
import NewsletterPopup from './NewsletterPopup';
import { Footer } from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // Default to false (closed) to prevent mobile flash, open on desktop via effect
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        // Automatically open sidebar on desktop
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        // Set initial state
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen flex flex-col bg-brand-background">

            {/* 1. Global Header (Sticky Top) */}
            <div className="print:hidden">
                <Header onMenuClick={toggleSidebar} />
            </div>

            {/* Global Top Ad - Desktop (728x90) */}
            <div className="print:hidden bg-stone-50 border-b border-brand-border/30 hidden md:block">
                <AdUnit
                    slot="1376752077"
                    width={728}
                    height={90}
                    format="auto"
                    responsive={true}
                    className="my-2"
                />
            </div>

            {/* Global Top Ad - Mobile (320x100) */}
            <div className="print:hidden bg-stone-50 border-b border-brand-border/30 md:hidden flex justify-center">
                <AdUnit
                    slot="6260723727"
                    width={320}
                    height={100}
                    format="rectangle"
                    responsive={false}
                    className="my-2"
                />
            </div>

            {/* 2. Main Layout Area (Below Header) */}
            <div className="flex flex-1 relative">

                {/* Sidebar Wrapper */}
                <div
                    className={`fixed left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out 
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:sticky md:translate-x-0 ${isSidebarOpen ? 'md:w-72' : 'md:w-0 md:overflow-hidden'}
                    top-16 bottom-0 print:hidden`}
                >
                    <div className="h-full w-72 relative border-r border-stone-100 bg-white">
                        <Sidebar
                            onToggle={toggleSidebar}
                            onNavigate={() => {
                                // Only close on mobile
                                if (window.innerWidth < 768) {
                                    setIsSidebarOpen(false);
                                }
                            }}
                        />
                    </div>
                </div>

                {/* Main Content Wrapper */}
                <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen ? '' : 'md:ml-0'}`}>
                    {children}

                    {/* Global Bottom Ad - Before Footer Logic */}
                    <div className="print:hidden mt-auto px-4 pb-20 md:pb-8">
                        <AdUnit
                            slot="1978473644"
                            format="auto"
                            responsive={true}
                            style={{ display: 'block', width: '100%', minHeight: '280px' }}
                            className="my-8"
                        />
                    </div>
                </div>

                {/* Overlay for Mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-30 md:hidden backdrop-blur-sm mt-16 print:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                        aria-label="Close sidebar"
                    ></div>
                )}
            </div>

            {/* Fixed Footer Ad - Mobile Only (320x50) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-white/90 backdrop-blur-md border-t border-stone-200 md:hidden pb-safe print:hidden">
                <AdUnit
                    slot="7981817746"
                    width={320}
                    height={50}
                    format="rectangle"
                    responsive={false}
                    className="my-0 py-1"
                />
            </div>

            <Footer setActiveTool={(toolId) => {
                // Determine path based on toolId (slug) and navigate
                // Use window.location for full reload to ensure state reset or use router
                window.location.href = toolIdToSlug(toolId);
            }} />

            {/* Floating Action Button */}
            <FloatingActionButton />

            {/* Newsletter Popup */}
            <NewsletterPopup />
        </div>
    );
}
