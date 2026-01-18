import React, { useState, useEffect } from 'react';
import { ToolContainer } from './ToolContainer';
import { WaterDropIcon, InfoIcon, ClipboardIcon, CheckCircleIcon } from '../Icons';
import type { ToolId } from '../utils/slugs';

interface HydrationConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const FLOUR_TYPES = [
    { name: 'All-Purpose Flour', absorption: 0.62 },
    { name: 'Bread Flour', absorption: 0.65 },
    { name: 'Whole Wheat Flour', absorption: 0.70 },
    { name: 'Rye Flour', absorption: 0.75 },
    { name: 'Cake Flour', absorption: 0.58 },
    { name: '00 Flour (Pizza)', absorption: 0.60 },
    { name: 'Semolina', absorption: 0.65 },
    { name: 'Spelt Flour', absorption: 0.68 },
    { name: 'Gluten-Free Blend (Avg)', absorption: 0.75 },
];

export const HydrationConverter: React.FC<HydrationConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [flour1, setFlour1] = useState('All-Purpose Flour');
    const [flour2, setFlour2] = useState('Bread Flour');
    const [originalLiquid, setOriginalLiquid] = useState('100');
    const [adjustedLiquid, setAdjustedLiquid] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const f1 = FLOUR_TYPES.find(f => f.name === flour1);
        const f2 = FLOUR_TYPES.find(f => f.name === flour2);
        const liquid = parseFloat(originalLiquid) || 0;

        if (f1 && f2 && liquid > 0) {
            // Logic: Calculate total water absorbed by original flour, then find how much liquid the new flour needs to achieve similar dough feel relative to its own absorption capacity?
            // Actually, the standard logic is: 
            // Original Hydration Feel = Liquid / FlourWeight (implied)
            // But we don't have flour weight.
            // Let's assume we are swapping 1:1 by weight of flour.
            // If I have 100g AP flour (absorbs 62g water) and I swap for 100g WW flour (absorbs 70g water).
            // To maintain the same "feel" or relative hydration, I need to increase water.
            // Formula: NewLiquid = OriginalLiquid * (NewAbsorption / OldAbsorption)

            const newLiquidAmount = liquid * (f2.absorption / f1.absorption);
            setAdjustedLiquid(parseFloat(newLiquidAmount.toFixed(1)));
        } else {
            setAdjustedLiquid(0);
        }
    }, [flour1, flour2, originalLiquid]);

    const handleCopy = async () => {
        const text = `Original: ${originalLiquid}g liquid (${flour1})\nNew: ${adjustedLiquid}g liquid (${flour2})`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // ignore
        }
    };

    return (
        <ToolContainer
            title="Free Flour Hydration Converter"
            description="Adjust the liquid in your recipe for free when substituting flours with different absorption rates, like swapping bread flour for whole wheat."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="hydration-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-8">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-border shadow-lg relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative space-y-6">
                            {/* Original Recipe Section */}
                            <div className="bg-brand-bg/30 p-4 rounded-xl border border-brand-border/50">
                                <h3 className="font-bold text-brand-text-title mb-4 flex items-center gap-2">
                                    <span className="bg-white text-brand-pink w-6 h-6 rounded-full flex items-center justify-center text-xs border border-brand-pink/20">1</span>
                                    Original Recipe
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Original Flour</label>
                                        <select
                                            value={flour1}
                                            onChange={e => setFlour1(e.target.value)}
                                            className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all outline-none appearance-none cursor-pointer font-medium"
                                        >
                                            {FLOUR_TYPES.map(f => <option key={f.name} value={f.name}>{f.name}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Liquid Amount (g)</label>
                                        <input
                                            type="number"
                                            value={originalLiquid}
                                            onChange={e => setOriginalLiquid(e.target.value)}
                                            className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all outline-none font-bold text-lg"
                                            placeholder="100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* New Flour Section */}
                            <div className="bg-brand-bg/30 p-4 rounded-xl border border-brand-border/50">
                                <h3 className="font-bold text-brand-text-title mb-4 flex items-center gap-2">
                                    <span className="bg-white text-brand-pink w-6 h-6 rounded-full flex items-center justify-center text-xs border border-brand-pink/20">2</span>
                                    New Flour
                                </h3>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Target Flour</label>
                                    <select
                                        value={flour2}
                                        onChange={e => setFlour2(e.target.value)}
                                        className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all outline-none appearance-none cursor-pointer font-medium"
                                    >
                                        {FLOUR_TYPES.map(f => <option key={f.name} value={f.name}>{f.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Card */}
                    <div className="bg-brand-pink text-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="relative">
                            <h3 className="font-serif font-bold text-2xl mb-2 opacity-90">Adjusted Liquid Amount</h3>
                            <p className="text-sm opacity-80 mb-6">Use this amount of water/milk with your new flour</p>

                            <div className="inline-block bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 mb-6 min-w-[200px]">
                                <p className="text-6xl font-bold tracking-tight">{adjustedLiquid}g</p>
                            </div>

                            <div>
                                <button onClick={handleCopy} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-pink rounded-full font-bold hover:bg-brand-pink-light transition-colors shadow-md">
                                    {copied ? <CheckCircleIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
                                    {copied ? 'Copied!' : 'Copy Result'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                    {/* Info Card */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                            How to Use
                        </h3>
                        <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                            <li><strong>Select Original Flour:</strong> Choose the flour called for in your original recipe (e.g., All-Purpose).</li>
                            <li><strong>Enter Liquid:</strong> Input the total amount of liquid (water, milk, etc.) in the recipe.</li>
                            <li><strong>Select New Flour:</strong> Choose the flour you want to use instead (e.g., Whole Wheat).</li>
                            <li><strong>Get Result:</strong> The calculator tells you how much liquid to use to keep the dough consistency the same.</li>
                        </ol>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    Why do flours absorb differently?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    Flours with more bran (like Whole Wheat) or higher protein (like Bread Flour) absorb more water. Bran acts like a sponge, soaking up liquid that would otherwise hydrate the gluten.
                                </p>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    What is "hydration percentage"?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    It's the ratio of water weight to flour weight. For example, 75g water / 100g flour = 75% hydration. This calculator adjusts that ratio to maintain the same dough feel.
                                </p>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    Does humidity affect this?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    Yes! In humid environments, flour absorbs moisture from the air, so you might need slightly less liquid than calculated. Always hold back a splash of water and add it only if needed.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
