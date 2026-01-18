import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId. It is defined in '../utils/slugs'.
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

const DOUGH_PRESETS = [
    { name: 'Sourdough (75%)', flour: '500', ingredients: [{ name: 'Water', weight: '375' }, { name: 'Salt', weight: '10' }, { name: 'Starter', weight: '100' }] },
    { name: 'Bagels (55%)', flour: '500', ingredients: [{ name: 'Water', weight: '275' }, { name: 'Salt', weight: '10' }, { name: 'Yeast', weight: '5' }, { name: 'Malt/Sugar', weight: '15' }] },
    { name: 'Pizza (65%)', flour: '500', ingredients: [{ name: 'Water', weight: '325' }, { name: 'Salt', weight: '12' }, { name: 'Yeast', weight: '3' }, { name: 'Oil', weight: '10' }] },
    { name: 'Ciabatta (80%)', flour: '500', ingredients: [{ name: 'Water', weight: '400' }, { name: 'Salt', weight: '11' }, { name: 'Yeast', weight: '4' }] },
    { name: 'Focaccia (85%)', flour: '500', ingredients: [{ name: 'Water', weight: '425' }, { name: 'Salt', weight: '12' }, { name: 'Yeast', weight: '5' }, { name: 'Olive Oil', weight: '20' }] },
];

interface Ingredient {
    id: number;
    name: string;
    weight: string;
}

interface BakersPercentageProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const BakersPercentage: React.FC<BakersPercentageProps> = ({ setActiveTool, breadcrumbs }) => {
    const [flourWeight, setFlourWeight] = useState('500');
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { id: 1, name: 'Water', weight: '350' },
        { id: 2, name: 'Salt', weight: '10' },
        { id: 3, name: 'Yeast', weight: '5' },
    ]);
    const [copied, setCopied] = useState(false);

    const handleIngredientChange = (id: number, field: keyof Omit<Ingredient, 'id'>, value: string) => {
        if (field === 'weight' && parseFloat(value) < 0) return;
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: '', weight: '' }]);
    };

    const removeIngredient = (id: number) => {
        setIngredients(ingredients.filter(ing => ing.id !== id));
    };

    const handleFlourChange = (value: string) => {
        if (parseFloat(value) < 0) return;
        setFlourWeight(value);
    };

    const loadPreset = (preset: typeof DOUGH_PRESETS[0]) => {
        setFlourWeight(preset.flour);
        setIngredients(preset.ingredients.map((ing, idx) => ({
            id: Date.now() + idx,
            name: ing.name,
            weight: ing.weight
        })));
    };

    const hydration = useMemo(() => {
        const baseFlour = parseFloat(flourWeight) || 0;
        const waterWeight = parseFloat(ingredients.find(i => i.name.toLowerCase() === 'water')?.weight || '0') || 0;
        return baseFlour > 0 ? (waterWeight / baseFlour) * 100 : 0;
    }, [flourWeight, ingredients]);

    const handleCopy = async () => {
        const baseFlour = parseFloat(flourWeight) || 0;
        const percentages = ingredients.map(ing => {
            const ingWeight = parseFloat(ing.weight) || 0;
            const percentage = baseFlour > 0 ? (ingWeight / baseFlour) * 100 : 0;
            return `${ing.name || 'Unnamed Ingredient'}: ${percentage.toFixed(2)}%`;
        });
        const hydrationText = `Total Hydration: ${hydration.toFixed(2)}%`;
        const textToCopy = `Flour: 100%\n${percentages.join('\n')}\n${hydrationText}`;

        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };


    return (
        <ToolContainer
            title="Free Baker's Percentage Calculator"
            description="Master bread and dough formulas with our free baker's math calculator. Instantly calculate ingredient weights, percentages, and total dough hydration for perfect results."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="bakers-percentage"
        >
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">Ingredients (in grams)</h3>
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-3 bg-white rounded-lg border border-brand-pink/20 shadow-sm">
                            <div className="flex-grow font-bold text-lg text-brand-text-title pl-2 w-full sm:w-auto">Flour (100%)</div>
                            <div className="w-full sm:w-32 relative">
                                <input
                                    type="number"
                                    placeholder="Weight (g)"
                                    value={flourWeight}
                                    onChange={e => handleFlourChange(e.target.value)}
                                    className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg font-bold text-right pr-8 focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                    min="0"
                                    step="any"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">g</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 my-2"></div>

                        {ingredients.map((ing, index) => (
                            <div key={ing.id} className="flex flex-col sm:flex-row gap-2 items-start sm:items-center group bg-white p-2 rounded-lg border border-gray-200 sm:border-none sm:bg-transparent sm:p-0">
                                <div className="flex-grow w-full sm:w-auto">
                                    <input
                                        type="text"
                                        placeholder={`Ingredient ${index + 2}`}
                                        value={ing.name}
                                        onChange={e => handleIngredientChange(ing.id, 'name', e.target.value)}
                                        className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                    />
                                </div>
                                <div className="flex gap-2 w-full sm:w-auto">
                                    <div className="w-full sm:w-32 relative">
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={ing.weight}
                                            onChange={e => handleIngredientChange(ing.id, 'weight', e.target.value)}
                                            className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg text-right pr-8 focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="any"
                                        />
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">g</span>
                                    </div>
                                    <button
                                        onClick={() => removeIngredient(ing.id)}
                                        className="text-gray-400 hover:text-red-500 p-2 transition-colors flex-shrink-0"
                                        title="Remove ingredient"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button onClick={addIngredient} className="w-full py-2 border-2 border-dashed border-brand-pink/30 text-brand-pink font-bold rounded-lg hover:bg-brand-pink/5 transition-colors">
                            + Add Ingredient
                        </button>
                    </div>

                    {/* Presets Section */}
                    <div className="mt-6">
                        <p className="text-xs font-bold text-brand-text-body/60 uppercase tracking-wide mb-2">Load Dough Presets</p>
                        <div className="flex flex-wrap gap-2">
                            {DOUGH_PRESETS.map((preset, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => loadPreset(preset)}
                                    className="px-3 py-1.5 bg-white border border-brand-border rounded-full text-xs font-medium text-brand-text-body hover:border-brand-pink hover:text-brand-pink transition-colors shadow-sm"
                                >
                                    {preset.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-0 lg:pl-8">
                    <div className="bg-brand-pink-light p-8 rounded-2xl border border-brand-pink/20 h-full flex flex-col">
                        <h3 className="font-serif font-bold text-3xl text-brand-text-title mb-6">Baker's Percentages</h3>

                        <div className="flex-grow">
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-brand-pink">
                                    <span className="font-bold text-lg text-brand-text-title">Flour</span>
                                    <span className="font-bold text-xl text-brand-pink">100%</span>
                                </li>
                                {ingredients.map(ing => {
                                    const baseFlour = parseFloat(flourWeight) || 0;
                                    const ingWeight = parseFloat(ing.weight) || 0;
                                    const percentage = baseFlour > 0 ? (ingWeight / baseFlour) * 100 : 0;
                                    return (
                                        <li key={ing.id} className="flex justify-between items-center p-3 px-4 bg-white/60 rounded-lg border border-brand-pink/10">
                                            <span className="font-medium text-brand-text-body">{ing.name || 'Unnamed Ingredient'}</span>
                                            <span className="font-bold text-brand-text-title">{percentage.toFixed(1)}%</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-brand-pink/20">
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-serif font-bold text-xl text-brand-text-title">Total Hydration</span>
                                <span className={`font-bold text-3xl ${hydration > 85 ? 'text-red-500' : hydration > 75 ? 'text-orange-500' : 'text-green-600'}`}>
                                    {hydration.toFixed(1)}%
                                </span>
                            </div>

                            <button
                                onClick={handleCopy}
                                className="w-full py-4 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                {copied ? <CheckCircleIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
                                {copied ? 'Percentages Copied!' : 'Copy Percentages'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BakersPercentageContent />
        </ToolContainer>
    );
};

const BakersPercentageContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Set Flour Weight:</strong> Enter the total amount of flour in grams. This is your 100% base.</li>
                <li><strong>Add Ingredients:</strong> List water, salt, yeast, and enrichments. Use grams for everything.</li>
                <li><strong>Check Percentages:</strong> The tool automatically calculates the baker's percentage for each item.</li>
                <li><strong>Monitor Hydration:</strong> Keep an eye on the "Total Hydration" to predict dough texture (e.g., 65% is standard, 80% is wet/open crumb).</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What is a good hydration for sourdough?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        For beginners, <strong>70-75%</strong> is a great sweet spot. It's manageable but still yields an open crumb. High hydration (80%+) requires more handling skill.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Why use grams instead of cups?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Accuracy! A cup of flour can vary by 20% in weight. Baker's math relies on precise ratios, so a digital scale is your best friend.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Does starter count as flour/water?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Technically, yes. A 100% hydration starter is half flour, half water. Advanced bakers subtract this from the total, but for simple formulas, listing it as a separate ingredient is fine.
                    </p>
                </details>
            </div>
        </div>
    </div>
);
