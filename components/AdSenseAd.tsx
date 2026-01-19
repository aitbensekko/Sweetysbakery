'use client';

import React, { useEffect, useRef } from 'react';

interface AdSenseAdProps {
    slotId?: string;
    width?: number;
    height?: number;
    format?: string;
    layout?: string;
    style?: React.CSSProperties;
    className?: string;
    responsive?: boolean;
    layoutKey?: string;
}

declare global {
    interface Window {
        adsbygoogle: any[] & { loaded?: boolean };
    }
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({
    slotId = '4002915412',
    width,
    height,
    format = 'auto',
    layout,
    layoutKey,
    style,
    className = '',
    responsive = true
}) => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            // Wait for AdSense script to load
            const pushAd = () => {
                if (typeof window !== 'undefined') {
                    // Ensure adsbygoogle is defined
                    window.adsbygoogle = window.adsbygoogle || [];

                    // Simple push
                    try {
                        (window.adsbygoogle as any).push({});
                    } catch (e) {
                        console.error('AdSense push error:', e);
                    }
                }
            };

            // Small delay to ensure DOM is ready and layout is settled
            const timer = setTimeout(pushAd, 500);
            return () => clearTimeout(timer);
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, [slotId]);

    const defaultStyle: React.CSSProperties = {
        display: layout === 'in-article' ? 'block' : 'inline-block',
        textAlign: layout === 'in-article' ? 'center' : undefined,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        maxWidth: '100%',
        ...style
    };

    // if (process.env.NODE_ENV === 'development') {
    //     return (
    //         <div className={`flex justify-center my-6 ${className}`} style={{ ...defaultStyle, background: '#f0f0f0', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    //             <span style={{ color: '#999', fontSize: '12px', fontWeight: 'bold' }}>ADVERTISEMENT (Dev Mode)</span>
    //         </div>
    //     );
    // }

    return (
        <div className={`flex justify-center my-6 overflow-hidden ${className}`}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={defaultStyle}
                data-ad-client="ca-pub-8209081290130316"
                data-ad-slot={slotId}
                data-ad-format={format}
                data-ad-layout={layout}
                data-ad-layout-key={layoutKey}
                data-full-width-responsive={responsive}
            />
        </div>
    );
};

export default AdSenseAd;
