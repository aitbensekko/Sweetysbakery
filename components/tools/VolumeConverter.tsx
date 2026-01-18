
import React, { useState, useCallback } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

const VOLUME_FACTORS: Record<string, number> = {
    'milliliters': 1,
    'liters': 1000,
    'teaspoons (US)': 4.92892,
    'tablespoons (US)': 14.7868,
    'fluid ounces (US)': 29.5735,
    'cups (US)': 236.588,
    'pints (US)': 473.176,
    'quarts (US)': 946.353,
    'gallons (US)': 3785.41,
};
const UNITS = Object.keys(VOLUME_FACTORS);

interface VolumeConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
    });
};

export const VolumeConverter: React.FC<VolumeConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [amount, setAmount] = useState('1');
    const [fromUnit, setFromUnit] = useState('cups (US)');
    const [toUnit, setToUnit] = useState('milliliters');
    const [copied, setCopied] = useState(false);

    const result = useCallback(() => {
        const value = parseFloat(amount);
        if (isNaN(value)) return 0;
        const amountInMl = value * VOLUME_FACTORS[fromUnit];
        return amountInMl / VOLUME_FACTORS[toUnit];
    }, [amount, fromUnit, toUnit])();

    const handleCopy = async () => {
        const text = `${formatNumber(result)} ${toUnit}`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    return (
        <ToolContainer
            title="Free Volume Converter"
            description="A free tool to convert between ml, liters, cups, pints, quarts, gallons, and fluid ounces for liquid measurements."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="volume-converter"
        >
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Amount</label>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg text-2xl font-bold" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">From</label>
                        <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg capitalize">
                            {UNITS.map(unit => <option key={unit} value={unit} className="capitalize">{unit}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">To</label>
                        <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg capitalize">
                            {UNITS.map(unit => <option key={unit} value={unit} className="capitalize">{unit}</option>)}
                        </select>
                    </div>
                </div>
                <div className="bg-brand-pink-light p-6 rounded-lg text-center sticky top-6">
                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-4">Result</h3>
                    <div className="bg-white p-4 rounded-lg border border-brand-pink/20">
                        <p className="font-serif font-bold text-6xl text-brand-pink break-words">{formatNumber(result)}</p>
                        <p className="text-xl font-semibold text-brand-text-body capitalize">{toUnit}</p>
                    </div>
                    <div className="mt-4">
                        <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:underline">
                            {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                            {copied ? 'Result Copied!' : 'Copy Result'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Volume Converter</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool helps you convert liquid measurements between different systems, ensuring accuracy in your recipes.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Select Units:</strong> Choose the unit you have (From) and the unit you need (To).</li>
                            <li><strong>Enter Amount:</strong> Type in the quantity you want to convert.</li>
                            <li><strong>Get Result:</strong> The conversion happens instantly. You can copy the result with a single click.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Why are there different types of cups?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                "Cups" can vary by country. This converter uses US Customary cups (approx. 236ml). If you're using a recipe from the UK or Australia, their cup sizes might differ slightly (250ml). When in doubt, milliliters are the most accurate unit.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Can I convert dry ingredients with this?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                No, this tool is strictly for volume (liquids). For dry ingredients like flour or sugar, weight is much more accurate. Please use our <button onClick={() => setActiveTool('weight-converter')} className="text-brand-pink font-bold hover:underline">Weight Converter</button> or <button onClick={() => setActiveTool('measurement-converter')} className="text-brand-pink font-bold hover:underline">Measurement Converter</button> for those.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
