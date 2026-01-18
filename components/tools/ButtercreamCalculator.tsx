import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { PastryBagIcon, PlusCircleIcon, Trash2Icon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface ButtercreamCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type CakeShape = 'round' | 'square';
type FrostingStyle = 'naked' | 'standard' | 'generous' | 'extra';

interface Tier {
    id: number;
    shape: CakeShape;
    size: string;
    layers: string;
}

const FROSTING_MULTIPLIERS: Record<FrostingStyle, number> = {
    naked: 0.4,       // Filling + very light scrape
    standard: 1.0,    // Filling + standard coat
    generous: 1.5,    // Filling + thick coat + simple border
    extra: 2.0,       // Filling + thick coat + complex piping/flowers
};

// Standard assumptions
const LAYER_HEIGHT_INCHES = 2;
const FILLING_HEIGHT_INCHES = 0.25;
const CUPS_PER_POUND = 2;
const GRAMS_PER_POUND = 453.592;
const CUPS_TO_CUBIC_INCHES = 14.4375; // 1 US cup is approx 14.44 cubic inches

export const ButtercreamCalculator: React.FC<ButtercreamCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [tiers, setTiers] = useState<Tier[]>([
        { id: 1, shape: 'round', size: '8', layers: '3' },
    ]);
    const [frostingStyle, setFrostingStyle] = useState<FrostingStyle>('standard');
    const [copied, setCopied] = useState<string | null>(null);

    const { totalCups, fillingCups, coatingCups } = useMemo(() => {
        let totalVolume = 0;
        let fillingVolume = 0;
        let coatingVolume = 0;

        tiers.forEach(tier => {
            const size = parseFloat(tier.size) || 0;
            const layers = parseFloat(tier.layers) || 0;
            const { shape } = tier;

            if (size <= 0 || layers <= 1) return;

            const radius = size / 2;
            const area = shape === 'round' ? Math.PI * radius * radius : size * size;
            const circumference = shape === 'round' ? 2 * Math.PI * radius : 4 * size;
            const cakeHeight = layers * LAYER_HEIGHT_INCHES;

            // Calculate filling volume
            const tierFillingVolume = area * FILLING_HEIGHT_INCHES * (layers - 1);
            fillingVolume += tierFillingVolume;

            // Calculate coating volume (top + sides)
            const topVolume = area * 0.25; // 1/4 inch thick top coat
            const sideVolume = circumference * cakeHeight * 0.25; // 1/4 inch thick side coat
            coatingVolume += topVolume + sideVolume;
        });

        const baseVolume = fillingVolume + coatingVolume;
        // totalVolume = baseVolume * FROSTING_MULTIPLIERS[frostingStyle]; // Logic adjustment: multiplier applies mainly to coating/decor

        const styleMultiplier = FROSTING_MULTIPLIERS[frostingStyle];
        // Distribute the multiplier effect. Assume filling is constant, multiplier affects coating.
        const adjustedCoatingVolume = coatingVolume * styleMultiplier;

        return {
            totalCups: (fillingVolume + adjustedCoatingVolume) / CUPS_TO_CUBIC_INCHES,
            fillingCups: fillingVolume / CUPS_TO_CUBIC_INCHES,
            coatingCups: adjustedCoatingVolume / CUPS_TO_CUBIC_INCHES,
        };
    }, [tiers, frostingStyle]);

    const addTier = () => {
        setTiers([...tiers, { id: Date.now(), shape: 'round', size: '6', layers: '3' }]);
    };

    const removeTier = (id: number) => {
        setTiers(tiers.filter(t => t.id !== id));
    };

    const updateTier = (id: number, field: keyof Tier, value: string) => {
        if ((field === 'size' || field === 'layers') && parseFloat(value) < 0) return;
        setTiers(tiers.map(t => (t.id === id ? { ...t, [field]: value } : t)));
    };

    const handleCopy = (value: string, field: string) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(field);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const totalLbs = totalCups / CUPS_PER_POUND;
    const totalGrams = totalLbs * GRAMS_PER_POUND;

    return (
        <ToolContainer
            title="Free Buttercream Quantity Calculator"
            description="Estimate the exact amount of buttercream frosting you need for any size cake with our free calculator, including layers, crumb coat, and final decorations."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="buttercream-calculator"
        >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Input Section */}
                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-serif font-bold text-2xl text-brand-text-title">Cake Tiers</h3>
                            <div className="text-sm text-brand-text-body/60">
                                Define your cake structure
                            </div>
                        </div>

                        <div className="space-y-4">
                            {tiers.map((tier, index) => (
                                <div key={tier.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 relative group">
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 className="font-bold text-brand-text-title text-lg">Tier {index + 1}</h4>
                                        {tiers.length > 1 && (
                                            <button
                                                onClick={() => removeTier(tier.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                title="Remove Tier"
                                            >
                                                <Trash2Icon className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 mb-1">Shape</label>
                                            <select
                                                value={tier.shape}
                                                onChange={e => updateTier(tier.id, 'shape', e.target.value as CakeShape)}
                                                className="w-full px-3 py-2 bg-gray-50 border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            >
                                                <option value="round">Round</option>
                                                <option value="square">Square</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 mb-1">Size (inches)</label>
                                            <input
                                                type="number"
                                                value={tier.size}
                                                onChange={e => updateTier(tier.id, 'size', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-50 border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                                min="0"
                                                step="any"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 mb-1">Layers</label>
                                            <input
                                                type="number"
                                                value={tier.layers}
                                                onChange={e => updateTier(tier.id, 'layers', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-50 border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                                min="0"
                                                step="any"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={addTier} className="mt-4 w-full py-3 border-2 border-dashed border-brand-pink/30 text-brand-pink font-bold rounded-xl hover:bg-brand-pink/5 transition-colors flex items-center justify-center gap-2">
                            <PlusCircleIcon className="w-5 h-5" /> Add Another Tier
                        </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h3 className="font-serif font-bold text-xl mb-3 text-brand-text-title">Frosting Style</h3>
                        <select
                            value={frostingStyle}
                            onChange={e => setFrostingStyle(e.target.value as FrostingStyle)}
                            className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg text-brand-text-body focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                        >
                            <option value="naked">Naked / Semi-Naked (Minimal Frosting)</option>
                            <option value="standard">Standard Coat (Smooth Finish)</option>
                            <option value="generous">Generous Coat & Simple Piping</option>
                            <option value="extra">Fully Decorated (Complex Piping)</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-2 ml-1">
                            Select how heavily you plan to frost and decorate the cake.
                        </p>
                    </div>
                </div>

                {/* Results Section */}
                <div className="sticky top-6">
                    <div className="bg-brand-pink-light p-8 rounded-2xl border border-brand-pink/20 text-center shadow-sm">
                        <PastryBagIcon className="w-12 h-12 mx-auto text-brand-pink mb-4" />
                        <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-2">Total Buttercream Needed</h3>

                        <div className="bg-white p-6 rounded-xl border border-brand-pink/20 shadow-sm my-6">
                            <div className="flex items-center justify-center gap-3">
                                <p className="font-serif font-bold text-7xl text-brand-pink tracking-tighter">{totalCups.toFixed(1)}</p>
                                <div className="text-left">
                                    <p className="text-xl font-bold text-brand-text-title">Cups</p>
                                    <button onClick={() => handleCopy(totalCups.toFixed(1), 'cups')} className="text-xs text-brand-pink hover:underline flex items-center gap-1">
                                        {copied === 'cups' ? <CheckCircleIcon className="w-3 h-3" /> : <ClipboardIcon className="w-3 h-3" />}
                                        {copied === 'cups' ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                            <div className="bg-white/60 p-4 rounded-xl border border-brand-pink/10">
                                <p className="font-bold text-brand-text-title text-2xl">{totalLbs.toFixed(2)}</p>
                                <p className="font-medium text-brand-text-body/70">Pounds</p>
                            </div>
                            <div className="bg-white/60 p-4 rounded-xl border border-brand-pink/10">
                                <p className="font-bold text-brand-text-title text-2xl">{totalGrams.toFixed(0)}</p>
                                <p className="font-medium text-brand-text-body/70">Grams</p>
                            </div>
                        </div>

                        <div className="text-left text-sm space-y-3 bg-white/40 p-4 rounded-xl border border-brand-pink/10">
                            <div className="flex justify-between items-center border-b border-brand-pink/10 pb-2">
                                <span className="text-brand-text-body/80">For Filling:</span>
                                <span className="font-bold text-brand-text-title">~{fillingCups.toFixed(1)} cups</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-brand-text-body/80">For Coating & Decor:</span>
                                <span className="font-bold text-brand-text-title">~{coatingCups.toFixed(1)} cups</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ButtercreamCalculatorContent />
        </ToolContainer>
    );
};

const ButtercreamCalculatorContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Define Tiers:</strong> Add the size and shape of each cake tier. You can add multiple tiers for wedding cakes.</li>
                <li><strong>Select Style:</strong> Choose how much frosting you plan to use (Naked, Standard, or Extra for piping).</li>
                <li><strong>Get Estimate:</strong> The calculator provides the total volume in cups, plus weight in pounds and grams.</li>
                <li><strong>Plan Ahead:</strong> Use the "Filling" vs "Coating" breakdown to manage your batch production.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Does this work for Swiss Meringue?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes! While the weight (grams) might vary slightly due to air content, the volume (cups) estimate remains accurate for covering the surface area of the cake.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        How much is 1 cup of buttercream?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        For American Buttercream, 1 cup weighs approximately 227g (0.5 lbs). Swiss and Italian Meringue buttercreams are lighter, weighing around 150-170g per cup.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Should I make extra?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Always! We recommend making 10-15% more than calculated to account for waste, tasting, and accidents. It freezes beautifully if you have leftovers.
                    </p>
                </details>
            </div>
        </div>
    </div>
);
