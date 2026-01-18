import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import {
    RecipeScalerIcon,
    DollarSignIcon,
    UsersIcon,
    ClipboardIcon,
    CheckCircleIcon,
    PlusCircleIcon,
    Trash2Icon
} from '../Icons';

interface Ingredient {
    id: number;
    name: string;
    baseQuantity: string; // The quantity in the original recipe
    unit: string;
    packageCost: string;
    packageWeight: string; // Weight of the package in grams (standardizing to grams for cost calc)
    recipeWeight: string; // Weight used in the original recipe in grams
}

interface RecipeScalingCostingToolProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const RecipeScalingCostingTool: React.FC<RecipeScalingCostingToolProps> = ({ setActiveTool, breadcrumbs }) => {
    const [recipeName, setRecipeName] = useState('');
    const [baseServings, setBaseServings] = useState('12');
    const [targetServings, setTargetServings] = useState('24');
    const [profitMargin, setProfitMargin] = useState('30');

    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { id: 1, name: 'Flour', baseQuantity: '250', unit: 'g', packageCost: '5.00', packageWeight: '2000', recipeWeight: '250' },
        { id: 2, name: 'Sugar', baseQuantity: '200', unit: 'g', packageCost: '4.00', packageWeight: '1000', recipeWeight: '200' },
        { id: 3, name: 'Butter', baseQuantity: '113', unit: 'g', packageCost: '6.00', packageWeight: '454', recipeWeight: '113' },
    ]);

    const [copied, setCopied] = useState(false);

    // Calculations
    const scalingFactor = useMemo(() => {
        const base = parseFloat(baseServings) || 1;
        const target = parseFloat(targetServings) || 1;
        return target / base;
    }, [baseServings, targetServings]);

    const scaledIngredients = useMemo(() => {
        return ingredients.map(ing => {
            const baseQty = parseFloat(ing.baseQuantity) || 0;
            const scaledQty = baseQty * scalingFactor;

            const pCost = parseFloat(ing.packageCost) || 0;
            const pWeight = parseFloat(ing.packageWeight) || 0;
            const rWeight = parseFloat(ing.recipeWeight) || 0;

            // Cost for the ORIGINAL recipe amount
            const originalCost = pWeight > 0 ? (rWeight / pWeight) * pCost : 0;

            // Cost for the SCALED amount
            const scaledCost = originalCost * scalingFactor;

            return {
                ...ing,
                scaledQuantity: scaledQty,
                scaledCost: scaledCost
            };
        });
    }, [ingredients, scalingFactor]);

    const financials = useMemo(() => {
        const totalCost = scaledIngredients.reduce((sum, ing) => sum + ing.scaledCost, 0);
        const costPerServing = totalCost / (parseFloat(targetServings) || 1);

        const margin = parseFloat(profitMargin) || 0;
        // Price = Cost / (1 - Margin%)
        const suggestedPriceTotal = margin < 100 ? totalCost / (1 - margin / 100) : 0;
        const suggestedPricePerServing = margin < 100 ? costPerServing / (1 - margin / 100) : 0;

        return { totalCost, costPerServing, suggestedPriceTotal, suggestedPricePerServing };
    }, [scaledIngredients, targetServings, profitMargin]);

    // Handlers
    const handleIngredientChange = (id: number, field: keyof Ingredient, value: string) => {
        if (field !== 'name' && field !== 'unit' && parseFloat(value) < 0) return;
        setIngredients(prev => prev.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const addIngredient = () => {
        setIngredients([...ingredients, {
            id: Date.now(),
            name: '',
            baseQuantity: '',
            unit: 'g',
            packageCost: '',
            packageWeight: '',
            recipeWeight: ''
        }]);
    };

    const removeIngredient = (id: number) => {
        if (ingredients.length > 1) {
            setIngredients(prev => prev.filter(ing => ing.id !== id));
        }
    };

    const handleCopy = () => {
        const text = `
Recipe: ${recipeName || 'Untitled'}
Scaled for: ${targetServings} servings (Factor: ${scalingFactor.toFixed(2)}x)

Ingredients:
${scaledIngredients.map(ing => `- ${ing.name}: ${ing.scaledQuantity.toFixed(1)} ${ing.unit}`).join('\n')}

Financials:
Total Cost: $${financials.totalCost.toFixed(2)}
Cost/Serving: $${financials.costPerServing.toFixed(2)}
Suggested Price: $${financials.suggestedPriceTotal.toFixed(2)} ($${financials.suggestedPricePerServing.toFixed(2)}/item)
        `.trim();

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolContainer
            title="Recipe Scaling & Costing Tool"
            description="Scale your recipes and calculate costs in one go. Perfect for catering, large orders, or adjusting batch sizes while keeping track of profitability."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="recipe-scaling-costing"
        >
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: Inputs */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Recipe Basics */}
                    <section className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">1. Recipe Details</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Recipe Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Vanilla Cupcakes"
                                    value={recipeName}
                                    onChange={e => setRecipeName(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Original Servings</label>
                                <input
                                    type="number"
                                    value={baseServings}
                                    onChange={e => setBaseServings(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Target Servings</label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        value={targetServings}
                                        onChange={e => setTargetServings(e.target.value)}
                                        className="w-full p-2.5 bg-brand-pink/5 border border-brand-pink/30 rounded-lg font-bold text-brand-pink"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <button onClick={() => setTargetServings((parseFloat(baseServings) * 2).toString())} className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">x2</button>
                                        <button onClick={() => setTargetServings((parseFloat(baseServings) * 4).toString())} className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">x4</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ingredients Input */}
                    <section className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">2. Ingredients & Costs</h3>
                        <div className="space-y-4">
                            <div className="hidden sm:grid grid-cols-12 gap-2 text-xs font-bold text-gray-400 uppercase">
                                <div className="col-span-3">Name</div>
                                <div className="col-span-2">Qty (Orig)</div>
                                <div className="col-span-1">Unit</div>
                                <div className="col-span-2">Pkg Cost ($)</div>
                                <div className="col-span-2">Pkg Wgt (g)</div>
                                <div className="col-span-2">Used Wgt (g)</div>
                            </div>

                            {ingredients.map((ing) => (
                                <div key={ing.id} className="grid sm:grid-cols-12 gap-2 items-center bg-gray-50 p-3 rounded-lg sm:bg-transparent sm:p-0">
                                    <div className="col-span-3">
                                        <label className="sm:hidden text-xs font-bold text-gray-400">Name</label>
                                        <input
                                            type="text"
                                            value={ing.name}
                                            onChange={e => handleIngredientChange(ing.id, 'name', e.target.value)}
                                            className="w-full p-2 border border-gray-200 rounded"
                                            placeholder="Ingredient"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="sm:hidden text-xs font-bold text-gray-400">Qty</label>
                                        <input
                                            type="number"
                                            value={ing.baseQuantity}
                                            onChange={e => handleIngredientChange(ing.id, 'baseQuantity', e.target.value)}
                                            className="w-full p-2 border border-gray-200 rounded"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="sm:hidden text-xs font-bold text-gray-400">Unit</label>
                                        <input
                                            type="text"
                                            value={ing.unit}
                                            onChange={e => handleIngredientChange(ing.id, 'unit', e.target.value)}
                                            className="w-full p-2 border border-gray-200 rounded"
                                            placeholder="g"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="sm:hidden text-xs font-bold text-gray-400">Pkg Cost</label>
                                        <input
                                            type="number"
                                            value={ing.packageCost}
                                            onChange={e => handleIngredientChange(ing.id, 'packageCost', e.target.value)}
                                            className="w-full p-2 border border-gray-200 rounded"
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="sm:hidden text-xs font-bold text-gray-400">Pkg Wgt</label>
                                        <input
                                            type="number"
                                            value={ing.packageWeight}
                                            onChange={e => handleIngredientChange(ing.id, 'packageWeight', e.target.value)}
                                            className="w-full p-2 border border-gray-200 rounded"
                                            placeholder="g"
                                        />
                                    </div>
                                    <div className="col-span-2 relative">
                                        <label className="sm:hidden text-xs font-bold text-gray-400">Used Wgt</label>
                                        <input
                                            type="number"
                                            value={ing.recipeWeight}
                                            onChange={e => handleIngredientChange(ing.id, 'recipeWeight', e.target.value)}
                                            className="w-full p-2 border border-gray-200 rounded pr-8"
                                            placeholder="g"
                                        />
                                        <button
                                            onClick={() => removeIngredient(ing.id)}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-red-500 sm:static sm:translate-y-0"
                                        >
                                            <Trash2Icon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={addIngredient}
                                className="flex items-center gap-2 text-brand-pink font-bold hover:text-brand-pink-dark transition-colors"
                            >
                                <PlusCircleIcon className="w-5 h-5" />
                                Add Ingredient
                            </button>
                        </div>
                    </section>
                </div>

                {/* Right Column: Results */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 space-y-6">

                        {/* Scaled Recipe Output */}
                        <div className="bg-brand-pink-light p-6 rounded-2xl border border-brand-pink/20 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-serif font-bold text-xl text-brand-text-title">Scaled Recipe</h3>
                                <span className="bg-brand-pink text-white text-xs font-bold px-2 py-1 rounded-full">{scalingFactor.toFixed(2)}x</span>
                            </div>

                            <div className="space-y-2 mb-6 max-h-60 overflow-y-auto pr-2">
                                {scaledIngredients.map(ing => (
                                    <div key={ing.id} className="flex justify-between text-sm border-b border-brand-pink/10 pb-1 last:border-0">
                                        <span className="text-brand-text-body">{ing.name}</span>
                                        <span className="font-bold text-brand-text-title">
                                            {ing.scaledQuantity.toFixed(1)} {ing.unit}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={handleCopy}
                                className="w-full py-2 bg-white border border-brand-pink text-brand-pink font-bold rounded-lg hover:bg-brand-pink hover:text-white transition-colors flex items-center justify-center gap-2 text-sm"
                            >
                                {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                {copied ? 'Copied!' : 'Copy Scaled Recipe'}
                            </button>
                        </div>

                        {/* Financials */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                                <DollarSignIcon className="w-5 h-5 text-green-600" />
                                Financials
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">Total Cost</span>
                                    <span className="font-bold text-lg text-brand-text-title">${financials.totalCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">Cost / Serving</span>
                                    <span className="font-bold text-lg text-brand-text-title">${financials.costPerServing.toFixed(2)}</span>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-bold text-brand-text-body">Profit Margin (%)</label>
                                        <input
                                            type="number"
                                            value={profitMargin}
                                            onChange={e => setProfitMargin(e.target.value)}
                                            className="w-20 p-1 text-right border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg border border-green-100 mt-2">
                                        <div className="text-xs text-green-800 uppercase font-bold tracking-wider mb-1">Suggested Price</div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-2xl font-serif font-bold text-green-700">${financials.suggestedPriceTotal.toFixed(2)}</span>
                                            <span className="text-sm text-green-600 font-medium">${financials.suggestedPricePerServing.toFixed(2)} / item</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
