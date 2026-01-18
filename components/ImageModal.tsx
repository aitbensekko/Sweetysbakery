import React, { useEffect, useState } from 'react';
import { XIcon, ArrowLeftIcon, ChevronRightIcon } from './Icons';
import AdSenseAd from './AdSenseAd';

interface ImageModalProps {
    imageUrl: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    currentIndex?: number;
    totalImages?: number;
    altText?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose, onPrev, onNext, currentIndex = 0, totalImages = 0, altText = "Enlarged bakery item" }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrev, onNext]);

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm fade-in" onClick={onClose}>
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"><XIcon className="w-10 h-10" /></button>

            {/* Pagination Counter */}
            {totalImages > 0 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full font-semibold border border-white/20">
                    {currentIndex + 1} / {totalImages}
                </div>
            )}

            <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 bg-black/40 rounded-full transition-colors hover:bg-black/60 z-20">
                <ArrowLeftIcon className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 bg-black/40 rounded-full transition-colors hover:bg-black/60 z-20">
                <ChevronRightIcon className="w-8 h-8" />
            </button>

            <div className="relative flex flex-col items-center max-w-7xl w-full">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
                    onClick={e => e.stopPropagation()}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = '/baking-placeholder.png';
                    }}
                />
                <p className="mt-4 text-white text-lg font-medium text-center bg-black/50 px-6 py-2 rounded-lg backdrop-blur-sm">
                    {altText}
                </p>
            </div>
        </div>
    );
};
