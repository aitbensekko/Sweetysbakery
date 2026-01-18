import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, ButterIcon, InfoIcon } from '../Icons';

interface ButterfatConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const BUTTER_TYPES = [
    { name: 'American Butter', fat: 80 },
    { name: 'European Butter', fat: 82 },
    { name: 'Heavy Cream', fat: 36 },
    { name: 'Light Cream', fat: 20 },
    { name: 'Half & Half', fat: 12 },
    { name: 'Ghee / Clarified Butter', fat: 100 },
    { name: 'Coconut Oil / Lard', fat: 100 },
    { name: 'Custom', fat: 0 }
];

export const ButterfatConverter: React.FC<ButterfatConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [originalAmount, setOriginalAmount] = useState('227'); // 1 cup
    const [originalType, setOriginalType] = useState('American Butter');
    const [originalFat, setOriginalFat] = useState('80');

    const [targetType, setTargetType] = useState('European Butter');
    const [targetFat, setTargetFat] = useState('82');

    const [copied, setCopied] = useState(false);

    const handleOriginalTypeChange = (name: string) => {
        setOriginalType(name);
        const type = BUTTER_TYPES.find(t => t.name === name);
        if (type && name !== 'Custom') {
            setOriginalFat(type.fat.toString());
        }
    };

    const handleTargetTypeChange = (name: string) => {
        setTargetType(name);
        const type = BUTTER_TYPES.find(t => t.name === name);
        if (type && name !== 'Custom') {
            setTargetFat(type.fat.toString());
        }
    };

    const { newButterAmount, waterAdjustment } = useMemo(() => {
        const amount = parseFloat(originalAmount) || 0;
        const ogFat = parseFloat(originalFat) / 100 || 0;
        const tFat = parseFloat(targetFat) / 100 || 0;

        if (amount === 0 || ogFat === 0 || tFat === 0) {
            return { newButterAmount: 0, waterAdjustment: 0 };
        }

        // Calculate total fat in original amount
        const originalFatWeight = amount * ogFat;

        // Calculate new amount needed to get same fat content
        const newAmount = originalFatWeight / tFat;

        // Calculate water difference
        // Original water = amount * (1 - ogFat)
        // New water added by new amount = newAmount * (1 - tFat)
        // Adjustment = Original Water - New Water
        const waterAdj = (amount * (1 - ogFat)) - (newAmount * (1 - tFat));

        return {
            newButterAmount: parseFloat(newAmount.toFixed(1)),
            waterAdjustment: parseFloat(waterAdj.toFixed(1)),
        };
    }, [originalAmount, originalFat, targetFat]);

    const handleCopy = async () => {
        const textToCopy = `Original: ${originalAmount}g (${originalType})\nNew: ${newButterAmount}g (${targetType})\nLiquid Adjustment: ${waterAdjustment >= 0 ? 'Add' : 'Remove'} ${Math.abs(waterAdjustment)}g liquid`;
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // ignore
        }
    };

    return (
        <ToolContainer
            title="Free Butterfat Converter"
            description="Adjust your recipe for free when switching between butters, creams, or fats with different fat percentages."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="butterfat-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-8">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-border shadow-lg relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative space-y-6">
                            {/* Original Ingredient Section */}
                            <div className="bg-brand-bg/30 p-4 rounded-xl border border-brand-border/50">
                                <h3 className="font-bold text-brand-text-title mb-4 flex items-center gap-2">
                                    <span className="bg-white text-brand-pink w-6 h-6 rounded-full flex items-center justify-center text-xs border border-brand-pink/20">1</span>
                                    Original Ingredient
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Amount (g)</label>
                                        <input
                                            type="number"
                                            value={originalAmount}
                                            onChange={e => setOriginalAmount(e.target.value)}
                                            className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all outline-none font-bold text-lg"
                                            placeholder="227"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Type</label>
                                        <select
                                            value={originalType}
                                            onChange={e => handleOriginalTypeChange(e.target.value)}
                                            className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all outline-none appearance-none cursor-pointer font-medium"
                                        >
                                            {BUTTER_TYPES.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                                        </select>
                                    </div>
                                    {originalType === 'Custom' && (
                                        <div className="sm:col-span-2">
                                            <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Fat Percentage (%)</label>
                                            <input
                                                type="number"
                                                value={originalFat}
                                                onChange={e => setOriginalFat(e.target.value)}
                                                className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink transition-all outline-none"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Target Ingredient Section */}
                            <div className="bg-brand-bg/30 p-4 rounded-xl border border-brand-border/50">
                                <h3 className="font-bold text-brand-text-title mb-4 flex items-center gap-2">
                                    <span className="bg-white text-brand-pink w-6 h-6 rounded-full flex items-center justify-center text-xs border border-brand-pink/20">2</span>
                                    Target Ingredient
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Type</label>
                                        <select
                                            value={targetType}
                                            onChange={e => handleTargetTypeChange(e.target.value)}
                                            className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all outline-none appearance-none cursor-pointer font-medium"
                                        >
                                            {BUTTER_TYPES.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                                        </select>
                                    </div>
                                    {targetType === 'Custom' && (
                                        <div className="sm:col-span-2">
                                            <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Fat Percentage (%)</label>
                                            <input
                                                type="number"
                                                value={targetFat}
                                                onChange={e => setTargetFat(e.target.value)}
                                                className="w-full p-3 bg-white border-2 border-brand-border rounded-xl focus:border-brand-pink transition-all outline-none"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Card */}
                    <div className="bg-brand-pink text-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="relative text-center">
                            <h3 className="font-serif font-bold text-2xl mb-6 opacity-90">Adjusted Recipe Amounts</h3>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                    <p className="text-sm font-bold uppercase tracking-wide opacity-80 mb-1">Use This Amount</p>
                                    <p className="text-sm opacity-70 mb-2">of {targetType}</p>
                                    <p className="text-4xl font-bold tracking-tight">{newButterAmount}g</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                    <p className="text-sm font-bold uppercase tracking-wide opacity-80 mb-1">
                                        {waterAdjustment >= 0 ? 'Add Liquid' : 'Remove Liquid'}
                                    </p>
                                    <p className="text-sm opacity-70 mb-2">water or milk</p>
                                    <p className="text-4xl font-bold tracking-tight">{Math.abs(waterAdjustment)}g</p>
                                </div>
                            </div>

                            <button onClick={handleCopy} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-pink rounded-full font-bold hover:bg-brand-pink-light transition-colors shadow-md">
                                {copied ? <CheckCircleIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
                                {copied ? 'Copied!' : 'Copy Results'}
                            </button>
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
                            <li><strong>Enter Original Amount:</strong> Input the weight of the fat called for in your recipe (e.g., 227g of American Butter).</li>
                            <li><strong>Select Target Fat:</strong> Choose what you want to use instead (e.g., European Butter, Ghee, or Heavy Cream).</li>
                            <li><strong>Adjust Recipe:</strong> Use the calculated amount of the new fat. Then, add or remove liquid (water/milk) from your recipe to maintain the correct hydration balance.</li>
                        </ol>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    Why does butterfat matter?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    Butter is mostly fat and water. American butter is ~80% fat, while European is ~82%+. This small difference affects cookie spread, pastry flakiness, and cake tenderness. Adjusting ensures your recipe works perfectly.
                                </p>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    Can I substitute butter for oil?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    Yes, but texture will change. Oil is 100% fat, while butter has water. Use this calculator to find the oil amount (select "Coconut Oil/Lard" for 100% fat) and add the missing liquid (water/milk) to keep the dough hydrated.
                                </p>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    What if I use Ghee?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    Ghee is clarified butter, meaning all water and milk solids are removed (100% fat). You'll need less ghee than butter, and you MUST add liquid back to the recipe to prevent dryness.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
