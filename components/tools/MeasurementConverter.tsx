import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, ArrowRightIcon, InfoIcon } from '../Icons';

// Comprehensive conversion data (grams per 1 cup)
// Base reference: King Arthur Baking, USDA
const INGREDIENT_DATA: Record<string, { gPerCup: number, category: string }> = {
    // Flours
    'all-purpose-flour': { gPerCup: 120, category: 'Flours' },
    'bread-flour': { gPerCup: 127, category: 'Flours' },
    'cake-flour': { gPerCup: 114, category: 'Flours' },
    'whole-wheat-flour': { gPerCup: 113, category: 'Flours' },
    'almond-flour': { gPerCup: 96, category: 'Flours' },
    'coconut-flour': { gPerCup: 112, category: 'Flours' },
    'cornstarch': { gPerCup: 128, category: 'Flours' },
    'rolled-oats': { gPerCup: 99, category: 'Flours' },

    // Sugars & Sweeteners
    'granulated-sugar': { gPerCup: 200, category: 'Sugars' },
    'brown-sugar': { gPerCup: 213, category: 'Sugars' }, // Packed
    'powdered-sugar': { gPerCup: 113, category: 'Sugars' }, // Unsifted
    'honey': { gPerCup: 340, category: 'Sugars' },
    'maple-syrup': { gPerCup: 312, category: 'Sugars' },
    'molasses': { gPerCup: 340, category: 'Sugars' },
    'corn-syrup': { gPerCup: 328, category: 'Sugars' },

    // Fats & Dairy
    'butter': { gPerCup: 227, category: 'Fats & Dairy' },
    'oil': { gPerCup: 218, category: 'Fats & Dairy' },
    'shortening': { gPerCup: 184, category: 'Fats & Dairy' },
    'heavy-cream': { gPerCup: 232, category: 'Fats & Dairy' },
    'sour-cream': { gPerCup: 240, category: 'Fats & Dairy' },
    'yogurt': { gPerCup: 245, category: 'Fats & Dairy' },
    'cream-cheese': { gPerCup: 225, category: 'Fats & Dairy' },
    'milk': { gPerCup: 240, category: 'Fats & Dairy' },
    'buttermilk': { gPerCup: 245, category: 'Fats & Dairy' },

    // Others
    'cocoa-powder': { gPerCup: 85, category: 'Others' },
    'chocolate-chips': { gPerCup: 170, category: 'Others' },
    'peanut-butter': { gPerCup: 270, category: 'Others' },
    'water': { gPerCup: 237, category: 'Others' },
};

const UNITS = {
    volume: [
        { value: 'cups', label: 'Cups', ratioToCup: 1 },
        { value: 'tbsp', label: 'Tablespoons', ratioToCup: 1 / 16 },
        { value: 'tsp', label: 'Teaspoons', ratioToCup: 1 / 48 },
        { value: 'ml', label: 'Milliliters', ratioToCup: 1 / 236.59 },
        { value: 'fl-oz', label: 'Fluid Ounces', ratioToCup: 1 / 8 },
    ],
    weight: [
        { value: 'g', label: 'Grams', ratioToGram: 1 },
        { value: 'oz', label: 'Ounces', ratioToGram: 1 / 28.35 },
        { value: 'kg', label: 'Kilograms', ratioToGram: 1000 },
        { value: 'lb', label: 'Pounds', ratioToGram: 453.59 },
    ]
};

interface MeasurementConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const MeasurementConverter: React.FC<MeasurementConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [amount, setAmount] = useState('1');
    const [fromUnit, setFromUnit] = useState('cups');
    const [toUnit, setToUnit] = useState('g');
    const [ingredient, setIngredient] = useState('all-purpose-flour');
    const [copied, setCopied] = useState(false);

    // Group ingredients by category
    const groupedIngredients = useMemo(() => {
        const groups: Record<string, string[]> = {};
        Object.keys(INGREDIENT_DATA).forEach(key => {
            const cat = INGREDIENT_DATA[key].category;
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(key);
        });
        return groups;
    }, []);

    const result = useMemo(() => {
        const val = parseFloat(amount);
        if (isNaN(val) || val === 0) return 0;

        const data = INGREDIENT_DATA[ingredient];
        if (!data) return 0;

        // 1. Convert Input to Grams
        let grams = 0;

        const fromVol = UNITS.volume.find(u => u.value === fromUnit);
        const fromWeight = UNITS.weight.find(u => u.value === fromUnit);

        if (fromWeight) {
            // Weight -> Weight conversion (easy)
            // Weight -> Volume conversion (needs density)
            grams = val * fromWeight.ratioToGram;
        } else if (fromVol) {
            // Volume -> Weight (needs density)
            // Volume -> Volume (easy)
            // Convert everything to cups first
            const cups = val * fromVol.ratioToCup;
            grams = cups * data.gPerCup;
        }

        // 2. Convert Grams to Output
        let output = 0;
        const toVol = UNITS.volume.find(u => u.value === toUnit);
        const toWeight = UNITS.weight.find(u => u.value === toUnit);

        if (toWeight) {
            output = grams / toWeight.ratioToGram;
        } else if (toVol) {
            const cups = grams / data.gPerCup;
            output = cups / toVol.ratioToCup;
        }

        return parseFloat(output.toFixed(2));
    }, [amount, fromUnit, toUnit, ingredient]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(result.toString());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // ignore
        }
    };

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    return (
        <ToolContainer
            title="Baking Measurement Converter"
            description="The ultimate baking converter for professional results. Convert cups to grams, ounces to milliliters, and more for over 25 common baking ingredients."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="measurement-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Converter Card */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-border shadow-sm">

                        {/* Ingredient Selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-brand-text-title mb-2 uppercase tracking-wide">Select Ingredient</label>
                            <select
                                value={ingredient}
                                onChange={e => setIngredient(e.target.value)}
                                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-border rounded-lg text-lg focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-all"
                            >
                                {Object.keys(groupedIngredients).map(category => (
                                    <optgroup key={category} label={category}>
                                        {groupedIngredients[category].map(key => (
                                            <option key={key} value={key}>
                                                {key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>

                        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
                            {/* From Section */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-brand-text-body mb-1">Amount</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={e => setAmount(e.target.value)}
                                        className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg text-xl font-bold text-brand-text-title focus:ring-2 focus:ring-brand-pink"
                                        placeholder="1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-brand-text-body mb-1">Unit</label>
                                    <select
                                        value={fromUnit}
                                        onChange={e => setFromUnit(e.target.value)}
                                        className="w-full px-3 py-2 bg-brand-bg/30 border border-brand-border rounded-lg text-sm"
                                    >
                                        <optgroup label="Volume">
                                            {UNITS.volume.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                                        </optgroup>
                                        <optgroup label="Weight">
                                            {UNITS.weight.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                                        </optgroup>
                                    </select>
                                </div>
                            </div>

                            {/* Swap Button */}
                            <div className="flex justify-center pb-4 md:pb-8">
                                <button
                                    onClick={handleSwap}
                                    className="p-2 rounded-full bg-brand-bg hover:bg-brand-pink/10 text-brand-pink transition-colors"
                                    title="Swap Units"
                                >
                                    <ArrowRightIcon className="w-6 h-6 md:rotate-0 rotate-90" />
                                </button>
                            </div>

                            {/* To Section */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-brand-text-body mb-1">Result</label>
                                    <div className="relative">
                                        <div className="w-full px-4 py-3 bg-brand-pink-light/30 border border-brand-pink/20 rounded-lg text-xl font-bold text-brand-pink flex items-center justify-between">
                                            <span>{result.toLocaleString()}</span>
                                            <button onClick={handleCopy} className="opacity-50 hover:opacity-100 transition-opacity">
                                                {copied ? <CheckCircleIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-brand-text-body mb-1">Unit</label>
                                    <select
                                        value={toUnit}
                                        onChange={e => setToUnit(e.target.value)}
                                        className="w-full px-3 py-2 bg-brand-bg/30 border border-brand-border rounded-lg text-sm"
                                    >
                                        <optgroup label="Weight">
                                            {UNITS.weight.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                                        </optgroup>
                                        <optgroup label="Volume">
                                            {UNITS.volume.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-bg/30 p-4 rounded-lg border border-brand-border/50 text-sm text-brand-text-body">
                        <p><strong>Note:</strong> Conversions are based on standard "dip and sweep" method for flour. For best results, we always recommend using a kitchen scale.</p>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-brand-pink text-white p-6 rounded-xl shadow-md">
                        <h3 className="font-serif font-bold text-xl mb-3">Why Weigh?</h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                            A cup of flour can weigh anywhere from 110g to 150g depending on how you pack it. That's a 30% difference!
                        </p>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Weighing ingredients ensures your cake turns out moist and fluffy every single time.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-brand-border">
                        <h3 className="font-bold text-brand-text-title mb-3">Quick Reference</h3>
                        <ul className="space-y-2 text-sm text-brand-text-body">
                            <li className="flex justify-between border-b border-brand-border/50 pb-2">
                                <span>1 cup All-Purpose Flour</span>
                                <span className="font-bold">120g</span>
                            </li>
                            <li className="flex justify-between border-b border-brand-border/50 pb-2">
                                <span>1 cup Sugar</span>
                                <span className="font-bold">200g</span>
                            </li>
                            <li className="flex justify-between border-b border-brand-border/50 pb-2">
                                <span>1 cup Butter</span>
                                <span className="font-bold">227g</span>
                            </li>
                            <li className="flex justify-between border-b border-brand-border/50 pb-2">
                                <span>1 tbsp Water</span>
                                <span className="font-bold">15ml</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <MeasurementConverterContent />
        </ToolContainer>
    );
};

const MeasurementConverterContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Select Ingredient:</strong> Choose the specific ingredient you are converting. Different ingredients have different densities (e.g., 1 cup of flour ≠ 1 cup of sugar).</li>
                <li><strong>Enter Amount:</strong> Type the quantity you have.</li>
                <li><strong>Choose Units:</strong> Select the unit you are starting with (e.g., Cups) and the unit you want (e.g., Grams).</li>
                <li><strong>Get Result:</strong> The tool instantly calculates the precise conversion.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Why is weighing better?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Volume measurements (cups) are notoriously inaccurate. Depending on how you scoop, a cup of flour can vary by 30%. Weighing ensures your recipe works every time.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What is "Dip and Sweep"?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        If you must use cups, fluff your flour, dip the cup in, and sweep the excess off with a knife. Do not pack it down!
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Are fluid ounces the same as ounces?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        No! Fluid ounces measure volume (like cups), while ounces measure weight (like grams). Water is the only ingredient where they are roughly equal.
                    </p>
                </details>
            </div>
        </div>
    </div>
);
