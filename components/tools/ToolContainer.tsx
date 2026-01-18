import React from 'react';
import dynamic from 'next/dynamic';

import { ArrowLeftIcon } from '../Icons';
// ... imports
import { ToolId, toolIdToSlug } from '../utils/slugs';
import { updateSchema, getToolSeoData } from '../utils/seo'; // Import updateSchema and getToolSeoData
import AdSenseAd from '../AdSenseAd';
import Ad from '../Ad';

// Dynamic import for InternalLinkRecommendations - loaded after main content
const InternalLinkRecommendations = dynamic(() => import('../InternalLinkRecommendations').then(mod => ({ default: mod.InternalLinkRecommendations })), {
    ssr: false
});

interface ToolContainerProps {
    title: string;
    description: string;
    children: React.ReactNode;
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
    toolId?: ToolId; // New optional prop
}

export const ToolContainer: React.FC<ToolContainerProps> = ({ title, description, children, setActiveTool, breadcrumbs, toolId }) => {

    React.useEffect(() => {
        if (toolId) {
            const seoData = getToolSeoData(toolId);
            updateSchema(toolId, seoData, null);
        }
    }, [toolId]);

    return (
        <div className="p-2 sm:p-6 md:p-10 fade-in">
            <div className="flex justify-between items-start">
                {breadcrumbs}
            </div>
            {title && (
                <header className="mb-8 max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title relative pb-2">
                        {title}
                    </h1>
                    <p className="mt-4 text-lg text-brand-text-body/80 max-w-3xl">{description}</p>
                </header>
            )}


            <div className="bg-white p-4 sm:p-8 rounded-2xl border border-brand-border shadow-sm overflow-hidden">
                {children}
            </div>


            <InternalLinkRecommendations />


        </div>
    );
};
