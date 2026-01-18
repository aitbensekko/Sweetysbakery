
import React, { useState, useCallback } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

const WEIGHT_FACTORS: Record<string, number> = {
    'grams': 1,
    'kilograms': 1000,
    'ounces': 28.3495,
    'pounds': 453.592,
};
const UNITS = Object.keys(WEIGHT_FACTORS);

interface WeightConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
    });
};

export const WeightConverter: React.FC<WeightConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [amount, setAmount] = useState('1');
    const [fromUnit, setFromUnit] = useState('pounds');
    const [toUnit, setToUnit] = useState('grams');
    const [copied, setCopied] = useState(false);

    const result = useCallback(() => {
        const value = parseFloat(amount);
        if (isNaN(value)) return 0;
        const amountInGrams = value * WEIGHT_FACTORS[fromUnit];
        return amountInGrams / WEIGHT_FACTORS[toUnit];
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
            title="Free Weight Converter"
            description="A free tool to convert between grams, kilograms, ounces, and pounds. A quick and easy tool for dry ingredient weights."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="weight-converter"
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
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Weight Converter</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool helps you convert dry ingredient weights between metric and imperial systems.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Select Units:</strong> Choose the unit you have (From) and the unit you need (To).</li>
                            <li><strong>Enter Amount:</strong> Type in the weight you want to convert.</li>
                            <li><strong>Get Result:</strong> The conversion happens instantly. You can copy the result with a single click.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Why is weighing ingredients better?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Weighing is far more accurate than using cups. A cup of flour can vary from 120g to 150g depending on how it's packed, which can ruin a recipe. A scale ensures you use exactly the right amount every time.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>What is the difference between ounces and fluid ounces?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Ounces (oz) measure weight (mass), while fluid ounces (fl oz) measure volume. This tool converts weight (ounces). If you need to convert fluid ounces, please use our <button onClick={() => setActiveTool('volume-converter')} className="text-brand-pink font-bold hover:underline">Volume Converter</button>.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
