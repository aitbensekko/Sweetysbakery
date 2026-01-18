import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, WaterDropIcon, InfoIcon } from '../Icons';

interface GanacheCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const GANACHE_RATIOS: Record<string, Record<string, number>> = {
    // Ratios are Chocolate : Cream
    drip: {
        white: 3,
        ruby: 3,
        milk: 2.5,
        semisweet: 1,
        bittersweet: 1,
    },
    filling: {
        white: 3.5,
        ruby: 3.5,
        milk: 3,
        semisweet: 1.5,
        bittersweet: 1.5,
    },
    firm: {
        white: 4,
        ruby: 4,
        milk: 3.5,
        semisweet: 2,
        bittersweet: 2,
    },
    truffles: {
        white: 4.5,
        ruby: 4.5,
        milk: 4,
        semisweet: 2.5,
        bittersweet: 2.5,
    }
};

const chocolateTypes = [
    { value: 'white', label: 'White Chocolate' },
    { value: 'ruby', label: 'Ruby Chocolate' },
    { value: 'milk', label: 'Milk Chocolate' },
    { value: 'semisweet', label: 'Semi-Sweet Chocolate' },
    { value: 'bittersweet', label: 'Bittersweet Chocolate (60-70%)' },
];

const ganacheTypes = [
    { value: 'drip', label: 'Glaze / Drip' },
    { value: 'filling', label: 'Soft Filling / Frosting' },
    { value: 'firm', label: 'Firm Frosting / Piping' },
    { value: 'truffles', label: 'Truffles / Firm Set' },
];

const units = [
    { value: 'g', label: 'Grams (g)' },
    { value: 'oz', label: 'Ounces (oz)' },
];

export const GanacheCalculator: React.FC<GanacheCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [chocolateAmount, setChocolateAmount] = useState('200');
    const [chocolateType, setChocolateType] = useState('semisweet');
    const [ganacheType, setGanacheType] = useState('drip');
    const [unit, setUnit] = useState('g');
    const [copied, setCopied] = useState(false);

    const { creamAmount, ratio } = useMemo(() => {
        const amount = parseFloat(chocolateAmount) || 0;
        if (amount === 0) return { creamAmount: 0, ratio: 'N/A' };

        const ratioValue = GANACHE_RATIOS[ganacheType][chocolateType];
        const cream = amount / ratioValue;

        return {
            creamAmount: parseFloat(cream.toFixed(1)),
            ratio: `${ratioValue}:1`
        };
    }, [chocolateAmount, chocolateType, ganacheType]);

    const handleCopy = async () => {
        if (creamAmount > 0) {
            const textToCopy = `${creamAmount} ${unit}`;
            try {
                await navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                alert('Failed to copy result.');
            }
        }
    };

    return (
        <ToolContainer
            title="Ganache Ratio Calculator"
            description="Easily calculate the correct chocolate to cream ratios for any type of ganache. Create the perfect consistency for drips, fillings, or frosting."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="ganache-calculator"
        >
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-brand-text-title mb-2">1. Type of Chocolate</label>
                        <select value={chocolateType} onChange={e => setChocolateType(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg">
                            {chocolateTypes.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-brand-text-title mb-2">2. Desired Ganache Use</label>
                        <select value={ganacheType} onChange={e => setGanacheType(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg">
                            {ganacheTypes.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-brand-text-title mb-2">3. Amount of Chocolate</label>
                        <div className="flex gap-2">
                            <input type="number" value={chocolateAmount} onChange={e => setChocolateAmount(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                            <select value={unit} onChange={e => setUnit(e.target.value)} className="px-3 py-2 bg-white border border-brand-border rounded-lg">
                                {units.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-brand-pink-light p-6 rounded-lg text-center sticky top-6">
                    <WaterDropIcon className="w-12 h-12 mx-auto text-brand-pink mb-2" />
                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-2">Amount of Cream Needed</h3>
                    <div className="bg-white p-4 rounded-lg border border-brand-pink/20">
                        <div className="flex items-center justify-center gap-2">
                            <p className="font-serif font-bold text-6xl text-brand-pink">{creamAmount.toLocaleString()}</p>
                            <span className="text-2xl font-semibold text-brand-text-body pt-4">{unit}</span>
                            <button onClick={handleCopy} title="Copy amount of cream" className="p-1 self-start mt-2">
                                {copied ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/50 hover:text-brand-pink" />}
                            </button>
                        </div>
                        <p className="text-sm text-brand-text-body/80 mt-2">
                            Based on a <strong>{ratio}</strong> ratio of chocolate to cream.
                        </p>
                    </div>
                </div>
            </div>

            <GanacheCalculatorContent />
        </ToolContainer>
    );
};

const GanacheCalculatorContent: React.FC = () => (
    <div className="mt-12 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">Master Chocolate Ganache Ratios</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Chocolate ganache is one of the most versatile recipes in baking, used for everything from <strong>drip cakes</strong> and <strong>truffles</strong> to <strong>macaron fillings</strong> and <strong>whipped frosting</strong>. But getting the texture right depends entirely on the <strong>chocolate-to-cream ratio</strong>. Our <strong>Ganache Calculator</strong> does the math for you. Whether you're using white, milk, or dark chocolate, simply select your desired consistency, and we'll tell you exactly how much heavy cream to add.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    Understanding Ganache Ratios
                </h3>
                <ul className="space-y-3 text-sm text-brand-text-body/80 list-disc pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>1:1 Ratio (Semi-Sweet):</strong> Equal parts chocolate and cream. Perfect for <strong>glazes</strong>, <strong>drips</strong>, and thick fillings.</li>
                    <li><strong>2:1 Ratio (Semi-Sweet):</strong> Two parts chocolate to one part cream. This makes a firm "fudge-like" ganache perfect for <strong>truffles</strong> or piping.</li>
                    <li><strong>3:1 Ratio (White Chocolate):</strong> White chocolate contains no cocoa solids, so it needs much less cream to set firm.</li>
                    <li><strong>Whipped Ganache:</strong> Allow a 1:1 mixture to cool completely, then whip it like heavy cream for a fluffy frosting.</li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Why did my ganache split?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Splitting (when oil separates) happens if the cream is too hot or you stir too vigorously. To fix it, try whisking in a tablespoon of cold heavy cream until it comes back together.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Can I use chocolate chips?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            We don't recommend it. Chips contain stabilizers to help them hold their shape, which prevents them from melting into a smooth emulsion. Use high-quality <strong>baking bars</strong> or <strong>couverture chocolate</strong> for a silky finish.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How do I store ganache?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Ganache can be kept at cool room temperature for 2 days. For longer storage, refrigerate for up to 2 weeks or freeze for up to 3 months. Let it come to room temperature before using.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);
