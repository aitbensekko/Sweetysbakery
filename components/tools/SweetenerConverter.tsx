import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, SugarCubeIcon, HoneyDipperIcon, InfoIcon } from '../Icons';

const SWEETENER_DATA = {
    sugar: {
        name: 'Granulated Sugar',
        sweetness: 1.0,
        density: 200, // g/cup
        liquidAdjustment: 0,
        note: 'Baseline measurement.',
        type: 'solid'
    },
    brown_sugar: {
        name: 'Brown Sugar (Packed)',
        sweetness: 1.0,
        density: 220,
        liquidAdjustment: 0,
        note: 'Contains molasses. Adds moisture and chewiness.',
        type: 'solid'
    },
    powdered_sugar: {
        name: 'Powdered / Confectioners',
        sweetness: 1.0,
        density: 120,
        liquidAdjustment: 0,
        note: 'Contains cornstarch. Not always a direct sub for baking structure.',
        type: 'solid'
    },
    honey: {
        name: 'Honey',
        sweetness: 1.3, // sweeter than sugar
        density: 340,
        liquidAdjustment: -0.25, // Reduce liquid by 1/4 cup per cup used
        note: 'Reduce oven temp by 25°F. Adds moisture.',
        type: 'liquid'
    },
    maple: {
        name: 'Maple Syrup',
        sweetness: 1.3,
        density: 310,
        liquidAdjustment: -0.25,
        note: 'Reduce oven temp by 25°F. Adds distinct flavor.',
        type: 'liquid'
    },
    agave: {
        name: 'Agave Nectar',
        sweetness: 1.5,
        density: 310,
        liquidAdjustment: -0.25,
        note: 'Very sweet. Reduce oven temp by 25°F.',
        type: 'liquid'
    },
    stevia: {
        name: 'Stevia (Powder/Blend)',
        sweetness: 300, // Pure stevia is 300x, but blends vary. Let's assume a 1:1 baking blend for simplicity or clarify. 
        // Actually, let's use a standard "Cup-for-Cup" blend assumption or provide a warning.
        // Let's assume pure extract for the calculator logic: 1 cup sugar ~ 1 tsp stevia.
        // 1 cup sugar = 48 tsp. So sweetness ~48x?
        // Let's stick to a common conversion: 1 cup sugar = 1 tsp liquid stevia or 2 tbsp powder.
        // This is too variable. Let's use Erythritol instead as a standard keto sub.
        density: 0,
        liquidAdjustment: 0.3,
        note: 'Potency varies wildly by brand. Check package!',
        type: 'solid'
    },
    erythritol: {
        name: 'Erythritol',
        sweetness: 0.7,
        density: 190,
        liquidAdjustment: 0,
        note: 'Less sweet than sugar. May have a cooling effect.',
        type: 'solid'
    }
};

// Fix Stevia logic manually in calculation if needed, or remove "Stevia" generic and use "Stevia Blend"
// Let's refine Stevia to "Stevia (Liquid Concentrate)" -> 1 cup sugar = 1 tsp.
// And "Stevia (Baking Blend)" -> 1:1.
// I'll update the object above.

const SWEETENERS = {
    ...SWEETENER_DATA,
    stevia_liquid: {
        name: 'Stevia (Liquid Extract)',
        sweetness: 48, // 1 tsp stevia = 1 cup (48 tsp) sugar
        density: 240, // irrelevant really
        liquidAdjustment: 0.3,
        note: 'Extremely potent. Bulking agent (yogurt/applesauce) needed.',
        type: 'liquid'
    }
};
// Remove generic stevia
delete (SWEETENERS as any).stevia;


interface SweetenerConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const SweetenerConverter: React.FC<SweetenerConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [amount, setAmount] = useState('1');
    const [fromId, setFromId] = useState('sugar');
    const [toId, setToId] = useState('honey');
    const [copied, setCopied] = useState(false);

    const result = useMemo(() => {
        const val = parseFloat(amount) || 0;
        const fromData = SWEETENERS[fromId as keyof typeof SWEETENERS];
        const toData = SWEETENERS[toId as keyof typeof SWEETENERS];

        // Logic: Match Sweetness
        // 1. Calculate total "Sweetness Units" of input
        // Sweetness Units = Amount * SweetnessFactor
        const totalSweetness = val * fromData.sweetness;

        // 2. Calculate required amount of target
        // Target Amount = Total Sweetness / Target SweetnessFactor
        let targetAmt = totalSweetness / toData.sweetness;

        // Special case for Stevia Liquid (measured in tsp usually, but input is cups)
        // If target is stevia_liquid, result is in cups. 1 cup = 48 tsp.
        // If we want to show tsp for small amounts, we can handle formatting.

        return {
            amount: targetAmt,
            note: toData.note,
            liquidAdj: toData.liquidAdjustment * targetAmt // Rough estimate
        };
    }, [amount, fromId, toId]);

    const formatAmount = (val: number, id: string) => {
        if (id === 'stevia_liquid') {
            // Convert cups to tsp for display if small
            const tsp = val * 48;
            return `${tsp.toFixed(2)} tsp`;
        }
        return `${val.toFixed(2)} cups`;
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(formatAmount(result.amount, toId));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // ignore
        }
    };

    return (
        <ToolContainer
            title="Sugar Substitute Calculator"
            description="Swap granulated sugar with honey, maple syrup, agave, erythritol, and more. Matches sweetness levels and provides baking tips."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="sweetener-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-border shadow-sm">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Convert From</label>
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={e => setAmount(e.target.value)}
                                        className="w-24 px-3 py-3 bg-white border-2 border-brand-border rounded-lg text-xl font-bold text-center focus:border-brand-pink focus:ring-0"
                                    />
                                    <div className="flex-1">
                                        <select
                                            value={fromId}
                                            onChange={e => setFromId(e.target.value)}
                                            className="w-full h-full px-4 bg-brand-bg/30 border border-brand-border rounded-lg font-medium focus:ring-2 focus:ring-brand-pink"
                                        >
                                            {Object.entries(SWEETENERS).map(([key, data]) => (
                                                <option key={key} value={key}>{data.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <p className="text-right text-sm text-brand-text-body/50 mt-1">cups</p>
                            </div>

                            <div className="flex justify-center text-brand-text-body/30">
                                <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Convert To</label>
                                <select
                                    value={toId}
                                    onChange={e => setToId(e.target.value)}
                                    className="w-full px-4 py-3 bg-brand-bg/30 border border-brand-border rounded-lg font-medium text-lg focus:ring-2 focus:ring-brand-pink"
                                >
                                    {Object.entries(SWEETENERS).map(([key, data]) => (
                                        <option key={key} value={key}>{data.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6 sticky top-6">
                    <div className="bg-brand-pink text-white p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <SugarCubeIcon className="w-32 h-32" />
                        </div>

                        <h3 className="font-serif font-bold text-2xl mb-2">Use Amount</h3>
                        <div className="flex items-center justify-center gap-3 my-6">
                            <span className="text-5xl font-bold tracking-tight">{formatAmount(result.amount, toId)}</span>
                        </div>
                        <button onClick={handleCopy} className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-sm font-bold mb-6">
                            {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>

                        <div className="bg-white/10 rounded-lg p-4 text-left backdrop-blur-sm">
                            <div className="flex gap-2 items-start mb-2">
                                <InfoIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="font-bold text-sm">Adjustment Needed:</span>
                            </div>
                            <p className="text-sm opacity-90 leading-relaxed">{result.note}</p>
                            {Math.abs(result.liquidAdj) > 0.05 && (
                                <p className="text-sm opacity-90 mt-2 pt-2 border-t border-white/20">
                                    <strong>Liquid:</strong> {result.liquidAdj > 0 ? 'Add' : 'Reduce'} other liquids by approx {Math.abs(result.liquidAdj).toFixed(2)} cups.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SweetenerConverterContent />
        </ToolContainer>
    );
};

const SweetenerConverterContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Select Original:</strong> Choose the sweetener called for in your recipe (usually Granulated Sugar).</li>
                <li><strong>Select Substitute:</strong> Choose the sweetener you want to use instead (e.g., Honey, Maple Syrup).</li>
                <li><strong>Enter Amount:</strong> Input the quantity from your recipe.</li>
                <li><strong>Check Adjustments:</strong> The tool calculates the amount needed and tells you if you need to reduce other liquids or change oven temperature.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Why reduce oven temp for honey?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Honey and maple syrup caramelize (burn) faster than sugar. Lowering the oven by 25°F helps prevent the outside from burning before the inside is done.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Can I swap brown and white sugar?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes, 1:1. However, brown sugar adds moisture and a chewiness to cookies, while white sugar makes them crispier. The flavor will also change slightly.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What about baking with Stevia?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Stevia is much sweeter than sugar but lacks bulk. You often need to add a bulking agent (like applesauce or yogurt) to make up for the lost volume in the batter.
                    </p>
                </details>
            </div>
        </div>
    </div>
);
