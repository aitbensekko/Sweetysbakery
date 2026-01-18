import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { DollarSignIcon, ClipboardIcon, CheckCircleIcon, UsersIcon, PercentIcon } from '../Icons';

interface TipCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const TipCalculator: React.FC<TipCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [bill, setBill] = useState('50.00');
    const [tipPercent, setTipPercent] = useState('20');
    const [customTipPercent, setCustomTipPercent] = useState('');
    const [numPeople, setNumPeople] = useState('1');
    const [tax, setTax] = useState('');
    const [includeTax, setIncludeTax] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    const handleInputChange = (setter: (value: string) => void, value: string) => {
        if (parseFloat(value) < 0) return;
        setter(value);
    };

    const handleCopy = (value: string, field: string) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(field);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const { subtotal, taxAmount, tipAmount, totalAmount, tipPerPerson, totalPerPerson } = useMemo(() => {
        const billAmount = parseFloat(bill) || 0;
        const taxRate = parseFloat(tax) / 100 || 0;
        const peopleCount = Math.max(parseInt(numPeople) || 1, 1);
        const percent = parseFloat(customTipPercent || tipPercent) / 100;

        const taxAmt = billAmount * taxRate;
        const baseForTip = includeTax ? billAmount + taxAmt : billAmount;
        const tip = baseForTip * percent;
        const total = billAmount + taxAmt + tip;
        const tipPer = tip / peopleCount;
        const totalPer = total / peopleCount;

        return {
            subtotal: billAmount.toFixed(2),
            taxAmount: taxAmt.toFixed(2),
            tipAmount: tip.toFixed(2),
            totalAmount: total.toFixed(2),
            tipPerPerson: tipPer.toFixed(2),
            totalPerPerson: totalPer.toFixed(2),
        };
    }, [bill, tipPercent, customTipPercent, numPeople, tax, includeTax]);

    const handleTipSelect = (percent: string) => {
        setTipPercent(percent);
        setCustomTipPercent('');
    };

    const handleCustomTipChange = (value: string) => {
        if (parseFloat(value) < 0) return;
        setCustomTipPercent(value);
        if (value !== '') {
            setTipPercent('');
        } else if (tipPercent === '') {
            handleTipSelect('20'); // Default back if custom is cleared
        }
    };

    const copyAllResults = () => {
        const text = `Bill Breakdown:\nSubtotal: $${subtotal}\nTax: $${taxAmount}\nTip (${customTipPercent || tipPercent}%): $${tipAmount}\nTotal: $${totalAmount}\n${parseInt(numPeople) > 1 ? `\nPer Person:\nTip: $${tipPerPerson}\nTotal: $${totalPerPerson}` : ''}`;
        handleCopy(text, 'all');
    };

    return (
        <ToolContainer title="Free Tip Calculator" description="Quickly calculate the tip amount and split the bill between any number of people with our free tool. Includes tax calculation and multiple tip percentage options." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="tip-calculator">
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Bill Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="billAmount" className="text-sm font-bold text-gray-500 mb-2 block">Bill Amount</label>
                                <div className="relative">
                                    <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-text-body/40" />
                                    <input
                                        id="billAmount"
                                        type="number"
                                        value={bill}
                                        onChange={e => handleInputChange(setBill, e.target.value)}
                                        className="w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-brand-border rounded-xl text-3xl font-bold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                        min="0"
                                        step="any"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="taxAmount" className="text-sm font-bold text-gray-500 mb-2 block">Tax Rate (Optional)</label>
                                <div className="relative">
                                    <PercentIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    <input
                                        id="taxAmount"
                                        type="number"
                                        value={tax}
                                        onChange={e => handleInputChange(setTax, e.target.value)}
                                        placeholder="0.00"
                                        className="w-full px-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                        min="0"
                                        step="any"
                                    />
                                </div>
                                {tax && (
                                    <label className="flex items-center gap-2 mt-2 text-sm cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={includeTax}
                                            onChange={e => setIncludeTax(e.target.checked)}
                                            className="w-4 h-4 text-brand-pink rounded focus:ring-brand-pink"
                                        />
                                        <span className="text-brand-text-body">Calculate tip on total including tax</span>
                                    </label>
                                )}
                            </div>

                            <div>
                                <label htmlFor="numPeople" className="text-sm font-bold text-gray-500 mb-2 block">Split Between</label>
                                <div className="relative">
                                    <UsersIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-text-body/40" />
                                    <input
                                        id="numPeople"
                                        type="number"
                                        min="1"
                                        step="1"
                                        value={numPeople}
                                        onChange={e => handleInputChange(setNumPeople, e.target.value)}
                                        className="w-full pl-14 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-xl font-bold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Tip Percentage</h3>
                        <div className="grid grid-cols-4 gap-3 mb-4">
                            {['15', '18', '20', '25'].map(p => (
                                <button
                                    key={p}
                                    onClick={() => handleTipSelect(p)}
                                    className={`py-4 font-bold rounded-xl transition-all transform hover:scale-105 ${tipPercent === p ? 'bg-brand-pink text-white shadow-lg' : 'bg-brand-pink-light text-brand-pink hover:bg-brand-pink/10'}`}
                                >
                                    {p}%
                                </button>
                            ))}
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                value={customTipPercent}
                                onChange={e => handleCustomTipChange(e.target.value)}
                                placeholder="Custom %"
                                className={`w-full py-4 px-4 font-bold rounded-xl text-center transition-all ${customTipPercent ? 'bg-brand-pink text-white placeholder-white/70 shadow-lg' : 'bg-gray-50 text-brand-pink placeholder-brand-pink/50 border border-brand-border'}`}
                                min="0"
                                step="any"
                            />
                            <PercentIcon className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 ${customTipPercent ? 'text-white/70' : 'text-brand-pink/50'}`} />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="sticky top-6 space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                            <h3 className="font-serif font-bold text-xl text-brand-text-title mb-6 text-center uppercase tracking-wider text-xs">Bill Summary</h3>

                            <div className="text-center mb-8">
                                <p className="text-sm font-bold text-brand-text-body/60 mb-2 uppercase tracking-wide">Total Bill</p>
                                <p className="font-serif font-bold text-6xl text-brand-text-title">${totalAmount}</p>
                            </div>

                            <div className="space-y-4 text-sm mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-text-body font-medium">Subtotal</span>
                                    <span className="font-bold text-brand-text-title text-lg">${subtotal}</span>
                                </div>
                                {tax && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-brand-text-body font-medium">Tax ({tax}%)</span>
                                        <span className="font-bold text-brand-text-title text-lg">${taxAmount}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                                    <span className="text-brand-text-body font-medium">Tip ({customTipPercent || tipPercent}%)</span>
                                    <span className="font-bold text-brand-pink text-xl">${tipAmount}</span>
                                </div>
                            </div>

                            {parseInt(numPeople) > 1 && (
                                <div className="bg-white p-4 rounded-xl border border-brand-border mb-8">
                                    <h4 className="font-bold text-xs uppercase tracking-wide text-brand-text-title mb-4 text-center">Per Person Split</h4>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-brand-text-body font-medium">Tip per person</span>
                                            <span className="font-bold text-brand-text-title">${tipPerPerson}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                            <span className="font-bold text-brand-text-title">Total per person</span>
                                            <span className="font-bold text-brand-pink text-lg">${totalPerPerson}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={copyAllResults}
                                className="w-full py-3 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all flex items-center justify-center gap-2"
                            >
                                {copied === 'all' ? <CheckCircleIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
                                {copied === 'all' ? 'Results Copied!' : 'Copy All Results'}
                            </button>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 shadow-sm">
                            <p className="flex gap-2 items-start">
                                <span className="font-bold text-lg leading-none">💡</span>
                                <span>
                                    <strong>Pro Tip:</strong> In the U.S., 15-20% is standard for good restaurant service. Consider tipping more for exceptional service or during busy times.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-border">
                <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">A Quick Guide to Tipping</h3>
                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <p>Tipping customs can vary, but here are some general guidelines in the U.S.:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Sit-Down Restaurants:</strong> 15-20% of the pre-tax bill is standard for good service. 20%+ for exceptional service.</li>
                        <li><strong>Food Delivery:</strong> 10-15% is customary. Consider tipping more for large orders, bad weather, or long distances.</li>
                        <li><strong>Coffee Shops/Counter Service:</strong> While not always expected, tipping $1-$2 or 10-20% for larger orders is a nice gesture for good service.</li>
                        <li><strong>Bartenders:</strong> $1-$2 per drink or 15-20% of the total tab.</li>
                        <li><strong>Takeout:</strong> 10% is a nice gesture, especially for large or complex orders.</li>
                    </ul>
                    <p className="mt-4"><strong>Should you tip on tax?</strong> This is a personal choice. Many people calculate the tip on the pre-tax amount, but some prefer to include tax. Our calculator gives you both options!</p>
                </div>
            </div>
        </ToolContainer>
    );
};
