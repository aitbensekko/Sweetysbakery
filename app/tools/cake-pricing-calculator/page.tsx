'use client';

import { CakePricingCalculator } from '../../../components/tools/CakePricingCalculator';
import Link from 'next/link';

export default function CakePricingPage() {
    // Breadcrumbs for the standalone page
    const breadcrumbs = (
        <nav className="flex items-center text-sm font-medium text-stone-500 mb-4">
            <Link href="/dashboard" className="hover:text-brand-pink transition-colors">Dashboard</Link>
            <span className="mx-2">/</span>
            <Link href="/tools" className="hover:text-brand-pink transition-colors">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 font-bold">Cake Pricing Calculator</span>
        </nav>
    );

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <CakePricingCalculator
                setActiveTool={() => { }} // No-op
                breadcrumbs={breadcrumbs}
            />
        </div>
    );
}
