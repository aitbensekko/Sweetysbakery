import React from 'react';
import { FacebookIcon, InstagramIcon, PinterestIcon } from './Icons';

interface ShareButtonsProps {
    url: string;
    imageUrl: string;
    description: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, imageUrl, description }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedDesc = encodeURIComponent(description);
    const encodedImageUrl = encodeURIComponent(imageUrl);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImageUrl}&description=${encodedDesc}`,
        instagram: `https://www.instagram.com/sweetys.bakery/`, // Instagram doesn't have a direct share link, so we link to the profile.
    };

    return (
        <div className="flex items-center gap-4">
            <span className="font-bold text-brand-text-title">Share:</span>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="text-gray-500 hover:text-brand-pink transition-colors">
                <FacebookIcon className="w-6 h-6" />
            </a>
            <a href={shareLinks.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="text-gray-500 hover:text-brand-pink transition-colors">
                <PinterestIcon className="w-6 h-6" />
            </a>
            <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="text-gray-500 hover:text-brand-pink transition-colors">
                <InstagramIcon className="w-6 h-6" />
            </a>
        </div>
    );
};
