import React from 'react';
import Link from 'next/link';
import { ToolSuggestion } from '@/data/toolSuggestions';
import { getThumbnail } from './tools/MyArtGallery';

interface ToolCardProps {
    tool: ToolSuggestion;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 w-full bg-gray-100">
                <img
                    src={getThumbnail(tool.imageUrl, 400)}
                    alt={tool.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-brand-text-title shadow-sm">
                    {tool.priceRange}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-brand-pink-light text-brand-pink text-xs font-semibold uppercase tracking-wide">
                        {tool.category}
                    </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-brand-text-title mb-2">
                    {tool.name}
                </h3>

                <p className="text-brand-text-body text-sm mb-4 flex-grow">
                    {tool.description}
                </p>

                <div className="mt-auto pt-4 border-t border-brand-border/50 flex gap-3">
                    <Link
                        href={`/${tool.reviewSlug}`}
                        className="flex-1 bg-brand-pink text-white text-center py-2 rounded-lg font-medium hover:bg-brand-pink-dark transition-colors text-sm"
                    >
                        Read Review
                    </Link>
                    {tool.affiliateLink && (
                        <a
                            href={tool.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer sponsored nofollow"
                            className="flex-1 border border-brand-pink text-brand-pink text-center py-2 rounded-lg font-medium hover:bg-brand-pink-light transition-colors text-sm"
                        >
                            Buy Now
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
