"use client";

import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
    client?: string;
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    responsive?: boolean;
    style?: React.CSSProperties;
    className?: string;
    width?: number | string;
    height?: number | string;
}

export const AdUnit: React.FC<AdUnitProps> = ({
    client = 'ca-pub-8209081290130316', // Default to user's pub ID
    slot,
    format = 'auto',
    responsive = true,
    style,
    className = "",
    width,
    height
}) => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            // Check if window.adsbygoogle is available and push the ad
            if (typeof window !== 'undefined') {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    // Combine custom styles with width/height if provided directly
    const adStyle: React.CSSProperties = {
        display: 'block',
        ...style,
    };

    if (width) adStyle.width = width;
    if (height) adStyle.height = height;

    return (
        <div className={`ad-container ${className} my-4 flex justify-center overflow-hidden`}>
            <ins
                className="adsbygoogle"
                style={adStyle}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format={format !== 'rectangle' ? format : undefined} // Don't set format for fixed size units usually
                data-full-width-responsive={responsive}
            />
        </div>
    );
};
