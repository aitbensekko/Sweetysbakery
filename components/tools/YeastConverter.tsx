import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, YeastIcon, ScaleIcon, InfoIcon } from '../Icons';

const YEAST_RATIOS = {
    // Ratio relative to Active Dry (by weight/potency)
    'active-dry': 1,
    'instant': 0.75, // Instant is stronger, use less
    'fresh': 2.5,    // Fresh is weaker, use more
};

const YEAST_NAMES: Record<string, string> = {
    'active-dry': 'Active Dry Yeast',
    'instant': 'Instant Yeast (Rapid Rise)',
    'fresh': 'Fresh Yeast (Cake Yeast)'
};

interface YeastConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const YeastConverter: React.FC<YeastConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [amount, setAmount] = useState('1');
    const [unit, setUnit] = useState<'tsp' | 'grams'>('tsp');
    const [fromYeast, setFromYeast] = useState('active-dry');
    const [copied, setCopied] = useState(false);

    const results = useMemo(() => {
        const inputAmount = parseFloat(amount) || 0;
        const fromRatio = YEAST_RATIOS[fromYeast as keyof typeof YEAST_RATIOS];

        // 1. Normalize to "Active Dry Equivalent" amount
        const activeDryBase = inputAmount / fromRatio;

        // 2. Calculate others
        return {
            'active-dry': (activeDryBase * YEAST_RATIOS['active-dry']),
            'instant': (activeDryBase * YEAST_RATIOS['instant']),
            'fresh': (activeDryBase * YEAST_RATIOS['fresh']),
        };

    }, [amount, fromYeast]);

    const formatResult = (val: number) => {
        if (unit === 'grams') return `${val.toFixed(1)}g`;

        // For teaspoons, try to be helpful with fractions if possible, or just decimals
        // Round to nearest 1/8
        return `${val.toFixed(2)} tsp`;
    };

    const handleCopy = async () => {
        const text = `Active Dry: ${formatResult(results['active-dry'])}\nInstant: ${formatResult(results['instant'])}\nFresh: ${formatResult(results['fresh'])}`;
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
            title="Yeast Conversion Calculator"
            description="Instantly convert between active dry, instant, and fresh yeast. Supports both teaspoons and grams for professional accuracy."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="yeast-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-border shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg text-brand-text-title flex items-center gap-2">
                                <YeastIcon className="w-6 h-6 text-brand-pink" />
                                Input Amount
                            </h3>

                            <div className="flex bg-brand-bg rounded-lg p-1">
                                <button
                                    onClick={() => setUnit('tsp')}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${unit === 'tsp' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body/60 hover:text-brand-text-body'}`}
                                >
                                    Teaspoons
                                </button>
                                <button
                                    onClick={() => setUnit('grams')}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${unit === 'grams' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body/60 hover:text-brand-text-body'}`}
                                >
                                    Grams
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Yeast Type</label>
                                <select
                                    value={fromYeast}
                                    onChange={e => setFromYeast(e.target.value)}
                                    className="w-full px-4 py-3 bg-brand-bg/30 border border-brand-border rounded-lg text-lg focus:ring-2 focus:ring-brand-pink"
                                >
                                    {Object.keys(YEAST_NAMES).map(key => (
                                        <option key={key} value={key}>{YEAST_NAMES[key]}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-2">Amount ({unit})</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    className="w-full px-4 py-3 bg-white border-2 border-brand-border rounded-lg text-3xl font-bold text-brand-text-title focus:border-brand-pink focus:ring-0"
                                    placeholder="1"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-bg/30 p-4 rounded-lg border border-brand-border/50 text-sm text-brand-text-body">
                        <p><strong>Pro Tip:</strong> Instant yeast is more potent than active dry. Fresh yeast is mostly water, so you need about 3x as much by weight compared to instant.</p>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6 sticky top-6">
                    <div className="bg-brand-pink text-white p-6 rounded-xl shadow-lg">
                        <h3 className="font-serif font-bold text-xl mb-4 text-center border-b border-white/20 pb-4">Equivalents</h3>
                        <ul className="space-y-3">
                            {Object.keys(results).map(key => (
                                <li key={key} className={`flex justify-between items-center p-4 rounded-lg transition-colors ${key === fromYeast ? 'bg-white/20 ring-1 ring-white/50' : 'hover:bg-white/10'}`}>
                                    <span className="font-medium text-white/90">{YEAST_NAMES[key].split(' (')[0]}</span>
                                    <span className="font-bold text-2xl">{formatResult(results[key as keyof typeof results])}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 text-center">
                            <button onClick={handleCopy} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-brand-pink rounded-full text-sm font-bold hover:bg-brand-bg transition-colors shadow-sm">
                                {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                {copied ? 'Copied!' : 'Copy Results'}
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-brand-border">
                        <h4 className="font-bold text-brand-text-title mb-3 flex items-center gap-2">
                            <ScaleIcon className="w-5 h-5 text-brand-pink" />
                            Why Weigh Yeast?
                        </h4>
                        <p className="text-sm text-brand-text-body leading-relaxed">
                            Teaspoons can be inaccurate. A teaspoon of yeast can weigh anywhere from 2.8g to 4g depending on the brand and granule size. For consistent rise times, weighing your yeast in grams is always recommended.
                        </p>
                    </div>
                </div>
            </div>
            <YeastConverterContent />
        </ToolContainer>
    );
};

const YeastConverterContent: React.FC = () => (
    <div className="mt-8 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">Live Cake Yeast vs. Instant Yeast Converter</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Found a vintage recipe calling for <strong>Fresh Yeast (Cake Yeast)</strong> but only have packets of <strong>Instant</strong> in the cupboard? Or maybe you're converting a professional sourdough formula to commercial yeast. Different types of yeast have different potencies. Using the wrong amount can lead to collapsed dough or an overpowering yeast flavor. Our calculator uses precise <strong>industry-standard ratios</strong> to convert between Active Dry, Instant, and Fresh yeast.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    How to Convert Yeast
                </h3>
                <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>Identify Your Source:</strong> Select the yeast type listed in your recipe.</li>
                    <li><strong>Enter Amount:</strong> Input the quantity in teaspoons or grams (grams are more accurate!).</li>
                    <li><strong>Understand Potency:</strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                            <li><strong>Instant Yeast</strong> is the strongest (100% potency).</li>
                            <li><strong>Active Dry</strong> is moderate (need about 25% more than instant).</li>
                            <li><strong>Fresh Yeast</strong> is the weakest by weight (need 3x the weight of instant).</li>
                        </ul>
                    </li>
                    <li><strong>Standard Ratio:</strong> 7g Instant = 9g Active Dry = 21g Fresh.</li>
                </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Do I need to bloom Instant Yeast?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            No. Instant yeast (also called Rapid Rise) is processed to dissolve quickly and can be mixed directly into the flour. Active Dry yeast has a coating of dead cells and usually needs to be dissolved in warm water ("bloomed") first to wake it up.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            What is Fresh Yeast?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Fresh yeast (baker's yeast or cake yeast) is a moist block of live yeast cells. It's highly perishable and lasts only about 2 weeks in the fridge. Professional bakers prize it for its sweet, complex flavor and strong rising power in high-sugar doughs.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Can I freeze yeast?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Absolutely. Freezing extends the life of dry yeast significantly (often 1+ years past expiration). Just make sure it is in an airtight container or vacuum sealed to prevent moisture damage.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);
