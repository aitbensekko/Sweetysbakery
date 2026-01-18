import React from 'react';
import { PinterestIcon } from './Icons';

interface PinItButtonProps {
    url: string;
    media: string;
    description: string;
    className?: string;
}

export const PinItButton: React.FC<PinItButtonProps> = ({ url, media, description, className = '' }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedMedia = encodeURIComponent(media);
    const encodedDesc = encodeURIComponent(description);

    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedMedia}&description=${encodedDesc}`;

    return (
        <a
            href={pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent triggering parent click events (like modals)
            className={`flex items-center gap-2 bg-[#E60023] hover:bg-[#ad081b] text-white px-4 py-2 rounded-full font-bold text-sm shadow-md transition-all duration-300 transform hover:scale-105 z-20 ${className}`}
            aria-label="Pin on Pinterest"
        >
            <PinterestIcon className="w-4 h-4 fill-current" />
            <span>Save</span>
        </a>
    );
};
