import React, { useRef, useEffect } from 'react';

const ChocolateChip: React.FC<{ top?: string; left?: string; right?: string; bottom?: string; size?: string; transform?: string }> = ({ top, left, right, bottom, size = 'w-4 h-4', transform = 'translateZ(2px)' }) => (
    <div
        className={`absolute ${size} bg-yellow-900/80 rounded-full shadow-inner`}
        style={{ top, left, right, bottom, transform }}
    ></div>
);

const HeroIllustration: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const interactionArea = container.closest('.hero-interaction-area') as HTMLElement;
        if (!interactionArea) { return; }

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = interactionArea.getBoundingClientRect();

            const x = (clientX - left - width / 2) / (width / 2);
            const y = (clientY - top - height / 2) / (height / 2);

            const rotateY = x * 15; // Max rotation 15deg
            const rotateX = -y * 15; // Max rotation 15deg

            if (container) {
                container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        const handleMouseLeave = () => {
            if (container) {
                container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 0) return;
            const { clientX, clientY } = e.touches[0];
            const { left, top, width, height } = interactionArea.getBoundingClientRect();

            const x = (clientX - left - width / 2) / (width / 2);
            const y = (clientY - top - height / 2) / (height / 2);

            const rotateY = x * 15; // Max rotation 15deg
            const rotateX = -y * 15; // Max rotation 15deg

            if (container) {
                container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        const handleTouchEnd = () => {
            if (container) {
                container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            }
        };

        interactionArea.addEventListener('mousemove', handleMouseMove);
        interactionArea.addEventListener('mouseleave', handleMouseLeave);
        interactionArea.addEventListener('touchmove', handleTouchMove);
        interactionArea.addEventListener('touchend', handleTouchEnd);

        return () => {
            interactionArea.removeEventListener('mousemove', handleMouseMove);
            interactionArea.removeEventListener('mouseleave', handleMouseLeave);
            interactionArea.removeEventListener('touchmove', handleTouchMove);
            interactionArea.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
            className="relative w-80 h-80 flex items-center justify-center"
        >
            {/* Single Cartoon Cookie */}
            <div
                className="relative w-64 h-64 bg-yellow-600 rounded-full shadow-2xl border-4 border-yellow-700/80"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Chocolate Chips */}
                <ChocolateChip top="15%" left="20%" size="w-6 h-6" transform="translateZ(5px) rotate(15deg)" />
                <ChocolateChip top="25%" right="15%" size="w-8 h-8" transform="translateZ(8px) rotate(-10deg)" />
                <ChocolateChip bottom="40%" left="10%" size="w-5 h-5" transform="translateZ(3px)" />
                <ChocolateChip bottom="20%" right="25%" size="w-7 h-7" transform="translateZ(6px) rotate(20deg)" />
                <ChocolateChip top="50%" left="45%" size="w-4 h-4" transform="translateZ(2px)" />

                {/* Face Elements */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(10px)' }}>
                    {/* Eyes */}
                    <div className="absolute top-1/3 flex gap-8">
                        <div className="w-8 h-8 bg-yellow-900 rounded-full shadow-inner flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 -translate-y-0.5"></div>
                        </div>
                        <div className="w-8 h-8 bg-yellow-900 rounded-full shadow-inner flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 -translate-y-0.5"></div>
                        </div>
                    </div>

                    {/* Smile */}
                    <div
                        className="absolute bottom-1/4 w-24 h-12 border-b-8 border-yellow-900 rounded-b-full"
                        style={{ transform: 'translateZ(5px)' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default HeroIllustration;