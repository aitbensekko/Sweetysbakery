import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { PercentIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface PercentageCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type Mode = 'percentOf' | 'isWhatPercent' | 'increaseDecrease';

export const PercentageCalculator: React.FC<PercentageCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [mode, setMode] = useState<Mode>('percentOf');
    const [val1, setVal1] = useState('20');
    const [val2, setVal2] = useState('150');
    const [copied, setCopied] = useState(false);

    const result = useMemo(() => {
        const num1 = parseFloat(val1);
        const num2 = parseFloat(val2);
        if (isNaN(num1) || isNaN(num2)) return '...';

        switch (mode) {
            case 'percentOf':
                return ((num1 / 100) * num2).toLocaleString(undefined, { maximumFractionDigits: 4 });
            case 'isWhatPercent':
                if (num2 === 0) return '...';
                return `${((num1 / num2) * 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
            case 'increaseDecrease':
                if (num1 === 0) return '...';
                const change = ((num2 - num1) / num1) * 100;
                const type = change >= 0 ? 'increase' : 'decrease';
                return `${Math.abs(change).toLocaleString(undefined, { maximumFractionDigits: 2 })}% ${type}`;
            default:
                return '...';
        }
    }, [mode, val1, val2]);

    const handleCopy = () => {
        if (result !== '...') {
            navigator.clipboard.writeText(result).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    const renderInputs = () => {
        const inputClasses = "w-28 p-2 border border-brand-border rounded-lg text-center font-semibold text-lg focus:ring-2 focus:ring-brand-pink";
        switch (mode) {
            case 'percentOf':
                return <div className="flex flex-wrap items-center justify-center gap-2 text-lg text-brand-text-body">What is <input type="number" value={val1} onChange={e => setVal1(e.target.value)} className={inputClasses} aria-label="Percentage value" /> % of <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className={inputClasses} aria-label="Base value" />?</div>;
            case 'isWhatPercent':
                return <div className="flex flex-wrap items-center justify-center gap-2 text-lg text-brand-text-body"><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className={inputClasses} aria-label="Part value" /> is what percent of <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className={inputClasses} aria-label="Total value" />?</div>;
            case 'increaseDecrease':
                return <div className="flex flex-wrap items-center justify-center gap-2 text-lg text-brand-text-body">From <input type="number" value={val1} onChange={e => setVal1(e.target.value)} className={inputClasses} aria-label="Initial value" /> to <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className={inputClasses} aria-label="Final value" /> is what % change?</div>;
        }
    };

    return (
        <ToolContainer title="Percentage Calculator" description="A simple tool for common percentage calculations, like finding a percentage of a number or calculating percentage change." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="percentage-calculator">
            <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-1 bg-brand-pink-light rounded-lg mb-6">
                    <button onClick={() => setMode('percentOf')} className={`py-2 text-sm font-bold rounded-md transition-colors ${mode === 'percentOf' ? 'bg-white shadow text-brand-pink' : 'text-brand-text-body/90'}`}>% of a number</button>
                    <button onClick={() => setMode('isWhatPercent')} className={`py-2 text-sm font-bold rounded-md transition-colors ${mode === 'isWhatPercent' ? 'bg-white shadow text-brand-pink' : 'text-brand-text-body/90'}`}>X is what % of Y</button>
                    <button onClick={() => setMode('increaseDecrease')} className={`py-2 text-sm font-bold rounded-md transition-colors ${mode === 'increaseDecrease' ? 'bg-white shadow text-brand-pink' : 'text-brand-text-body/90'}`}>% Increase/Decrease</button>
                </div>

                <div className="bg-white p-6 rounded-lg border border-brand-border flex flex-col items-center gap-4 min-h-[8rem] justify-center">
                    {renderInputs()}
                </div>

                <div className="mt-8 bg-brand-pink-light p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-brand-text-body">Result</h3>
                    <div className="flex items-center justify-center gap-2">
                        <p className="font-mono font-bold text-5xl text-brand-pink my-2 break-all">{result}</p>
                        <button onClick={handleCopy} title="Copy result" className="p-1">
                            {copied ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/50 hover:text-brand-pink" />}
                        </button>
                    </div>
                </div>
                <div className="mt-12 space-y-8">
                    <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-pink/10 rounded-lg">
                                <InfoIcon className="w-6 h-6 text-brand-pink" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Calculator</h3>
                        </div>
                        <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                            <p>
                                This tool offers three modes to handle common percentage scenarios in baking and business:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong>% of a number:</strong> Use this to calculate ingredient amounts based on baker's percentages. For example, to find 2% salt for 500g of flour, enter "2" and "500".</li>
                                <li><strong>X is what % of Y:</strong> Use this to find out what percentage of your total dough weight is hydration. For example, if you have 350g water and 500g flour, enter "350" and "500".</li>
                                <li><strong>% Increase/Decrease:</strong> Perfect for calculating cost changes or scaling adjustments. Enter the old value and the new value to see the percentage difference.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                    <span>What is Baker's Percentage?</span>
                                    <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                    Baker's Percentage is a method where all ingredients are weighed relative to the flour, which is always set at 100%. This makes it easy to scale recipes up or down. You can use our dedicated <button onClick={() => setActiveTool('bakers-percentage')} className="text-brand-pink font-bold hover:underline">Baker's Percentage Calculator</button> for more complex dough formulas.
                                </div>
                            </details>
                            <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                    <span>How do I calculate a discount?</span>
                                    <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                    To calculate a discount, use the "% of a number" mode. If you want to offer 15% off a $50 cake, enter "15" and "50". The result ($7.50) is the discount amount. Subtract this from the original price to get the final price ($42.50).
                                </div>
                            </details>
                        </div>
                    </section>
                </div>
            </div>
        </ToolContainer>
    );
};
