import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, BirthdayCakeIcon, InfoIcon } from '../Icons';

interface FondantCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type CakeShape = 'round' | 'square';

// Ounces of fondant needed per square inch of cake surface area.
// This is an empirical value derived from common fondant charts, and it accounts for fondant thickness and waste/trimming.
const FONDANT_DENSITY_FACTOR = 0.34; // oz per in²

export const FondantCalculator: React.FC<FondantCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [shape, setShape] = useState<CakeShape>('round');
    const [size, setSize] = useState('8'); // Diameter or Side length in inches
    const [height, setHeight] = useState('4'); // Height in inches
    const [copied, setCopied] = useState(false);

    const { fondantOz, fondantG } = useMemo(() => {
        const sizeNum = parseFloat(size) || 0;
        const heightNum = parseFloat(height) || 0;

        if (sizeNum <= 0 || heightNum <= 0) {
            return { fondantOz: 0, fondantG: 0 };
        }

        let surfaceArea = 0;
        if (shape === 'round') {
            const radius = sizeNum / 2;
            const topArea = Math.PI * radius * radius;
            const sideArea = 2 * Math.PI * radius * heightNum;
            surfaceArea = topArea + sideArea;
        } else { // square
            const topArea = sizeNum * sizeNum;
            const sideArea = 4 * sizeNum * heightNum;
            surfaceArea = topArea + sideArea;
        }

        const oz = surfaceArea * FONDANT_DENSITY_FACTOR;
        const g = oz * 28.3495;

        return {
            fondantOz: oz,
            fondantG: g,
        };
    }, [shape, size, height]);

    const handleCopy = async () => {
        const textToCopy = `${fondantOz.toFixed(1)} oz / ${fondantG.toFixed(0)} g`;
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy result.');
        }
    };

    return (
        <ToolContainer
            title="Free Fondant Quantity Calculator"
            description="Estimate how much fondant you need to cover a round or square cake with our free calculator. This tool determines the fondant needed based on cake dimensions."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="fondant-calculator"
        >
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="text-sm font-bold text-brand-text-title mb-2 block">1. Cake Shape</label>
                        <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                            <button onClick={() => setShape('round')} className={`flex-1 py-2 text-sm font-bold rounded-md ${shape === 'round' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Round</button>
                            <button onClick={() => setShape('square')} className={`flex-1 py-2 text-sm font-bold rounded-md ${shape === 'square' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Square</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cake-size" className="text-sm font-bold text-brand-text-title mb-2 block">
                            2. Cake {shape === 'round' ? 'Diameter' : 'Side'} (in inches)
                        </label>
                        <input id="cake-size" type="number" value={size} onChange={e => setSize(e.target.value)} className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg text-lg" />
                    </div>
                    <div>
                        <label htmlFor="cake-height" className="text-sm font-bold text-brand-text-title mb-2 block">3. Cake Height (in inches)</label>
                        <input id="cake-height" type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg text-lg" />
                    </div>
                </div>

                {/* Results */}
                <div className="bg-brand-pink-light p-6 rounded-2xl text-center sticky top-6">
                    <BirthdayCakeIcon className="w-12 h-12 mx-auto text-brand-pink mb-2" />
                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-2">Estimated Fondant Needed</h3>

                    <div className="bg-white p-4 rounded-lg border border-brand-pink/20">
                        <p className="font-serif font-bold text-6xl text-brand-pink">{fondantOz.toFixed(1)}<span className="text-3xl"> oz</span></p>
                        <p className="text-2xl font-semibold text-brand-text-body mt-1">/ {fondantG.toFixed(0)} g</p>
                    </div>

                    <div className="mt-4">
                        <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:underline">
                            {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                            {copied ? 'Result Copied!' : 'Copy Result'}
                        </button>
                    </div>
                </div>
            </div>

            <FondantCalculatorContent />
        </ToolContainer>
    );
};

const FondantCalculatorContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Select Shape:</strong> Choose between a round or square cake.</li>
                <li><strong>Enter Dimensions:</strong> Input the diameter (or side length) and height of your cake in inches.</li>
                <li><strong>Get Estimate:</strong> The calculator gives you the weight of fondant needed in both ounces and grams.</li>
                <li><strong>Roll & Cover:</strong> Use the estimate to weigh out your fondant before rolling.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Does this include waste?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes! The calculation includes a buffer for the fondant that gets trimmed off the bottom. It assumes a standard 1/8 inch thickness.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        How thin should I roll it?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        We recommend rolling fondant to about 1/8 inch (3mm) thick. Too thin and it tears; too thick and it's heavy and unpleasant to eat.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What if I have multiple tiers?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Calculate the fondant needed for each tier individually and then sum them up to get the total amount required for the entire cake.
                    </p>
                </details>
            </div>
        </div>
    </div>
);
