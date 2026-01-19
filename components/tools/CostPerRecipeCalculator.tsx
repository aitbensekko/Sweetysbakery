import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, UsersIcon, RecipeCostIcon, InfoIcon } from '../Icons';

const QUICK_ADD_INGREDIENTS = [
    { name: 'Flour (AP)', packageCost: '5.00', packageWeight: '2268' }, // 5lb
    { name: 'Sugar (Granulated)', packageCost: '4.00', packageWeight: '1814' }, // 4lb
    { name: 'Butter (Unsalted)', packageCost: '6.00', packageWeight: '454' }, // 1lb
    { name: 'Eggs (Dozen)', packageCost: '4.00', packageWeight: '600' }, // ~50g each
    { name: 'Vanilla Extract', packageCost: '12.00', packageWeight: '118' }, // 4oz
    { name: 'Milk (Gallon)', packageCost: '4.00', packageWeight: '3785' },
];

interface Ingredient {
    id: number;
    name: string;
    packageCost: string;
    packageWeight: string;
    recipeWeight: string;
}

interface CostPerRecipeCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const CostPerRecipeCalculator: React.FC<CostPerRecipeCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { id: 1, name: 'Flour', packageCost: '5.00', packageWeight: '2000', recipeWeight: '250' },
        { id: 2, name: 'Sugar', packageCost: '4.00', packageWeight: '1000', recipeWeight: '150' },
        { id: 3, name: 'Butter', packageCost: '6.00', packageWeight: '454', recipeWeight: '113' },
    ]);
    const [servings, setServings] = useState('12');
    const [copied, setCopied] = useState<string | null>(null);

    const handleIngredientChange = (id: number, field: keyof Omit<Ingredient, 'id'>, value: string) => {
        // Prevent negative numbers for numeric fields
        if (field !== 'name' && parseFloat(value) < 0) return;
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: '', packageCost: '', packageWeight: '', recipeWeight: '' }]);
    };

    const addQuickIngredient = (item: typeof QUICK_ADD_INGREDIENTS[0]) => {
        setIngredients([...ingredients, {
            id: Date.now(),
            name: item.name,
            packageCost: item.packageCost,
            packageWeight: item.packageWeight,
            recipeWeight: ''
        }]);
    };

    const removeIngredient = (id: number) => {
        if (ingredients.length > 1) {
            setIngredients(ingredients.filter(ing => ing.id !== id));
        }
    };

    const handleServingsChange = (value: string) => {
        if (parseFloat(value) < 0) return;
        setServings(value);
    };

    const calculatedCosts = useMemo(() => {
        return ingredients.map(ing => {
            const pCost = parseFloat(ing.packageCost) || 0;
            const pWeight = parseFloat(ing.packageWeight) || 0;
            const rWeight = parseFloat(ing.recipeWeight) || 0;
            if (pWeight <= 0) return 0;
            return (rWeight / pWeight) * pCost;
        });
    }, [ingredients]);

    const totalRecipeCost = useMemo(() => {
        return calculatedCosts.reduce((sum, cost) => sum + cost, 0);
    }, [calculatedCosts]);

    const costPerServing = useMemo(() => {
        const numServings = parseInt(servings) || 1;
        if (numServings === 0) return 0;
        return totalRecipeCost / numServings;
    }, [totalRecipeCost, servings]);

    const handleCopy = (value: string, field: string) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(field);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    return (
        <ToolContainer
            title="Free Recipe Cost Calculator"
            description="Calculate the exact cost of any recipe with our free tool. Break down ingredient costs to find your total recipe cost and cost per serving. Perfect for home bakers and small businesses."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="cost-per-recipe"
        >
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                        <h3 className="font-serif font-bold text-2xl text-brand-text-title">Ingredients</h3>
                        <div className="text-sm text-brand-text-body/60">
                            Enter package details & recipe usage
                        </div>
                    </div>

                    <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        {ingredients.map((ing, index) => {
                            const cost = calculatedCosts[index] || 0;
                            return (
                                <div key={ing.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 group">
                                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-3">
                                        <div className="flex-grow w-full sm:w-auto">
                                            <label className="block text-xs font-bold text-gray-400 mb-1 sm:hidden">Ingredient Name</label>
                                            <input
                                                type="text"
                                                placeholder={`Ingredient ${index + 1}`}
                                                value={ing.name}
                                                onChange={e => handleIngredientChange(ing.id, 'name', e.target.value)}
                                                className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg font-medium focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            />
                                        </div>
                                        <button
                                            onClick={() => removeIngredient(ing.id)}
                                            className={`text-gray-400 hover:text-red-500 p-2 transition-colors self-end sm:self-center ${ingredients.length === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                                            title="Remove ingredient"
                                        >
                                            &times;
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-1">Package Cost</label>
                                            <div className="relative">
                                                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                                <input
                                                    type="number"
                                                    placeholder="0.00"
                                                    value={ing.packageCost}
                                                    onChange={e => handleIngredientChange(ing.id, 'packageCost', e.target.value)}
                                                    className="w-full pl-6 pr-2 py-2 bg-gray-50 border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                                    min="0"
                                                    step="any"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-1">Pkg Weight (g)</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={ing.packageWeight}
                                                onChange={e => handleIngredientChange(ing.id, 'packageWeight', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-50 border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                                min="0"
                                                step="any"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-1">Used (g)</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={ing.recipeWeight}
                                                onChange={e => handleIngredientChange(ing.id, 'recipeWeight', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-50 border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                                min="0"
                                                step="any"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-xs text-gray-400 font-medium">Ingredient Cost:</span>
                                        <span className="font-bold text-brand-text-title">${cost.toFixed(2)}</span>
                                    </div>
                                </div>
                            );
                        })}
                        <button onClick={addIngredient} className="w-full py-3 border-2 border-dashed border-brand-pink/30 text-brand-pink font-bold rounded-xl hover:bg-brand-pink/5 transition-colors flex items-center justify-center gap-2">
                            <span>+ Add Ingredient</span>
                        </button>
                    </div>

                    {/* Quick Add Section */}
                    <div className="mt-4">
                        <p className="text-xs font-bold text-brand-text-body/60 uppercase tracking-wide mb-2">Quick Add Common Items</p>
                        <div className="flex flex-wrap gap-2">
                            {QUICK_ADD_INGREDIENTS.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => addQuickIngredient(item)}
                                    className="px-3 py-1.5 bg-white border border-brand-border rounded-full text-xs font-medium text-brand-text-body hover:border-brand-pink hover:text-brand-pink transition-colors shadow-sm"
                                >
                                    + {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-6 space-y-6">
                        <div className="bg-brand-pink-light p-6 rounded-2xl border border-brand-pink/20 text-center shadow-sm">
                            <RecipeCostIcon className="w-12 h-12 mx-auto text-brand-pink mb-3" />
                            <h3 className="font-serif text-xl font-bold text-brand-text-title mb-1">Total Recipe Cost</h3>
                            <div className="flex flex-col items-center mb-6">
                                <p className="font-bold text-5xl text-brand-pink tracking-tight mb-2">${totalRecipeCost.toFixed(2)}</p>
                                <button
                                    onClick={() => handleCopy(totalRecipeCost.toFixed(2), 'total')}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-brand-pink/20 shadow-sm text-xs font-bold text-brand-text-body/70 hover:text-brand-pink hover:border-brand-pink transition-all active:scale-95"
                                >
                                    {copied === 'total' ? (
                                        <>
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-green-500" />
                                            <span className="text-green-600">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <ClipboardIcon className="w-3.5 h-3.5" />
                                            <span>Copy Cost</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="pt-6 border-t border-brand-pink/10">
                                <label htmlFor="servings" className="block text-sm font-bold text-brand-text-body mb-2">Recipe Yields (Servings)</label>
                                <input
                                    id="servings"
                                    type="number"
                                    value={servings}
                                    onChange={e => handleServingsChange(e.target.value)}
                                    className="w-24 mx-auto px-4 py-2 bg-white border border-brand-pink/30 rounded-lg text-center font-bold text-lg focus:ring-2 focus:ring-brand-pink focus:border-brand-pink"
                                    min="1"
                                    step="any"
                                />

                                <div className="mt-6 bg-white/60 p-4 rounded-xl border border-brand-pink/10">
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <UsersIcon className="w-5 h-5 text-brand-pink" />
                                        <h4 className="font-bold text-brand-text-title">Cost Per Serving</h4>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="font-bold text-3xl text-brand-text-title mb-2">${costPerServing.toFixed(2)}</p>
                                        <button
                                            onClick={() => handleCopy(costPerServing.toFixed(2), 'serving')}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-brand-pink/20 shadow-sm text-xs font-bold text-brand-text-body/70 hover:text-brand-pink hover:border-brand-pink transition-all active:scale-95"
                                        >
                                            {copied === 'serving' ? (
                                                <>
                                                    <CheckCircleIcon className="w-3.5 h-3.5 text-green-500" />
                                                    <span className="text-green-600">Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <ClipboardIcon className="w-3.5 h-3.5" />
                                                    <span>Copy</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 shadow-sm">
                            <p className="flex gap-2 items-start">
                                <span className="font-bold text-lg leading-none">💡</span>
                                <span>
                                    <strong>Pro Tip:</strong> To get the most accurate cost, weigh your ingredients! A cup of flour can vary by 20% depending on how you scoop it.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CostPerRecipeCalculatorContent />
        </ToolContainer>
    );
};

const CostPerRecipeCalculatorContent: React.FC = () => (
    <div className="mt-12 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">Accurate Recipe Costing for Home Bakers</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Profitability starts with knowing your exact <strong>Cost of Goods Sold (COGS)</strong>. A common mistake for home bakery businesses is guessing ingredient costs. This free <strong>Recipe Cost Calculator</strong> helps you break down bulk ingredients (like a 50lb bag of flour) into the exact amount used in your cookie or cake recipe. It calculates the total batch cost and the cost per serving, so you know exactly how much to charge to make a profit.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    How to Price Your Baking
                </h3>
                <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>Calculate COGS:</strong> Use this tool to find the raw ingredient cost for one batch.</li>
                    <li><strong>Add Labor:</strong> Estimate how many hours the batch takes and multiply by your hourly rate.</li>
                    <li><strong>Add Overhead:</strong> Factor in utilities, packaging, and wear-and-tear on equipment (usually flat % or hourly rate).</li>
                    <li><strong>Add Profit:</strong> Most successful bakeries aim for a <strong>Food Cost Percentage</strong> of 20-30%. This means your final price should be 3x-5x the ingredient cost.</li>
                </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Why is my cost so high?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Small ingredients add up! Vanilla extract, nuts, and high-quality chocolate are often the most expensive parts of a recipe. To lower costs, consider buying these items in bulk or finding wholesale suppliers.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Should I include packaging costs?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Yes! Boxes, cake boards, ribbon, and stickers are part of the direct cost of the product. You can add them as "ingredients" in this calculator or add a flat "Packaging" fee to the final total.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            What is a good profit margin?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            A gross profit margin of <strong>70%</strong> is a good target for bakeries. This means if you sell a cake for $100, the ingredients (and direct labor) should cost no more than $30.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);
