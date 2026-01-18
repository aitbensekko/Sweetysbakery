import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';
import { toolIdToSlug } from '../utils/slugs';
import { PremiumPromo } from '../PremiumPromo';

interface Ingredient {
    id: number;
    name: string;
    quantity: string;
    unit: string;
    weight: string;
}

interface RecipeScalerProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const RecipeScaler: React.FC<RecipeScalerProps> = ({ setActiveTool, breadcrumbs }) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ id: 1, name: 'Flour', quantity: '2', unit: 'cups', weight: '240' }]);
    const [scaleFactor, setScaleFactor] = useState('2');
    const [copied, setCopied] = useState(false);

    const handleIngredientChange = (id: number, field: keyof Omit<Ingredient, 'id'>, value: string) => {
        // Prevent negative numbers for quantity and weight
        if ((field === 'quantity' || field === 'weight') && parseFloat(value) < 0) return;
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: '', quantity: '', unit: '', weight: '' }]);
    };

    const removeIngredient = (id: number) => {
        if (ingredients.length > 1) {
            setIngredients(ingredients.filter(ing => ing.id !== id));
        }
    };

    const handleScaleFactorChange = (value: string) => {
        if (parseFloat(value) < 0) return;
        setScaleFactor(value);
    };

    const handleCopy = async () => {
        const factor = parseFloat(scaleFactor) || 1;
        const recipeText = ingredients.map(ing => {
            const originalQty = parseFloat(ing.quantity) || 0;
            const originalWeight = parseFloat(ing.weight) || 0;

            const newQty = (originalQty * factor).toLocaleString(undefined, { maximumFractionDigits: 2 });
            const newWeight = (originalWeight * factor).toLocaleString(undefined, { maximumFractionDigits: 2 });

            let resultText = '';
            if (originalQty > 0 && ing.unit) {
                resultText += `${newQty} ${ing.unit}`;
            }
            if (originalWeight > 0) {
                if (resultText) resultText += ' / ';
                resultText += `${newWeight} g`;
            }
            return `${ing.name}: ${resultText}`;
        }).join('\n');

        try {
            await navigator.clipboard.writeText(recipeText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    return (
        <ToolContainer
            title="Free Recipe Scaler & Converter"
            description="Easily scale any baking recipe up or down with our free recipe scaler. Our recipe multiplier calculator instantly changes ingredient quantities for any batch size."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="recipe-scaler"
        >
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-serif font-bold text-2xl text-brand-text-title">Original Recipe</h3>
                        <div className="text-sm text-brand-text-body/60">
                            Enter your ingredients below
                        </div>
                    </div>

                    <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        {ingredients.map((ing, index) => (
                            <div key={ing.id} className="relative flex flex-col sm:flex-row gap-2 items-start sm:items-center group bg-white p-2 rounded-lg border border-gray-200 sm:border-none sm:bg-transparent sm:p-0">
                                <div className="flex-grow w-full sm:w-auto">
                                    <input
                                        type="text"
                                        placeholder={`Ingredient ${index + 1}`}
                                        value={ing.name}
                                        onChange={e => handleIngredientChange(ing.id, 'name', e.target.value)}
                                        className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                        aria-label={`Ingredient ${index + 1} name`}
                                    />
                                </div>
                                <div className="grid grid-cols-3 sm:flex gap-2 w-full sm:w-auto items-center mt-2 sm:mt-0">
                                    <div className="w-full sm:w-20">
                                        <input
                                            type="number"
                                            placeholder="Qty"
                                            value={ing.quantity}
                                            onChange={e => handleIngredientChange(ing.id, 'quantity', e.target.value)}
                                            className="w-full px-2 sm:px-3 py-2 bg-white border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="any"
                                            aria-label="Quantity"
                                        />
                                    </div>
                                    <div className="w-full sm:w-24">
                                        <input
                                            type="text"
                                            placeholder="Unit"
                                            value={ing.unit}
                                            onChange={e => handleIngredientChange(ing.id, 'unit', e.target.value)}
                                            className="w-full px-2 sm:px-3 py-2 bg-white border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            aria-label="Unit"
                                        />
                                    </div>
                                    <div className="w-full sm:w-24 relative">
                                        <input
                                            type="number"
                                            placeholder="g"
                                            value={ing.weight}
                                            onChange={e => handleIngredientChange(ing.id, 'weight', e.target.value)}
                                            className="w-full px-2 sm:px-3 py-2 bg-white border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink pr-6"
                                            min="0"
                                            step="any"
                                            aria-label="Weight in grams"
                                        />
                                        <span className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] sm:text-xs pointer-events-none">g</span>
                                    </div>
                                    <button
                                        onClick={() => removeIngredient(ing.id)}
                                        className={`absolute -top-2 -right-2 bg-white rounded-full shadow-sm border border-gray-100 sm:static sm:bg-transparent sm:shadow-none sm:border-none text-gray-400 hover:text-red-500 p-1 sm:p-2 transition-colors flex-shrink-0 ${ingredients.length === 1 ? 'hidden sm:block sm:opacity-0 sm:pointer-events-none' : ''}`}
                                        title="Remove ingredient"
                                        aria-label="Remove ingredient"
                                    >
                                        <span className="sr-only">Remove</span>
                                        <span aria-hidden="true" className="text-lg leading-none">&times;</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button onClick={addIngredient} className="w-full py-2 border-2 border-dashed border-brand-pink/30 text-brand-pink font-bold rounded-lg hover:bg-brand-pink/5 transition-colors">
                            + Add Ingredient
                        </button>
                    </div>

                    <div className="bg-brand-pink/5 p-6 rounded-xl border border-brand-pink/20">
                        <label htmlFor="scaleFactor" className="block text-lg font-bold text-brand-text-title mb-2">Recipe Multiplier</label>
                        <div className="flex items-center gap-4">
                            <input
                                id="scaleFactor"
                                type="number"
                                value={scaleFactor}
                                onChange={e => handleScaleFactorChange(e.target.value)}
                                className="w-24 px-4 py-3 bg-white border border-brand-pink/30 rounded-lg text-xl font-bold text-brand-pink focus:ring-2 focus:ring-brand-pink focus:border-brand-pink text-center"
                                min="0"
                                step="any"
                            />
                            <div className="text-sm text-brand-text-body/70">
                                <p><strong>0.5</strong> = Half Batch</p>
                                <p><strong>2.0</strong> = Double Batch</p>
                            </div>
                        </div>
                    </div>

                    <PremiumPromo variant="inline-tool" />
                </div>

                <div className="bg-white p-0 lg:pl-8">
                    <div className="bg-brand-pink-light p-8 rounded-2xl border border-brand-pink/20 h-full">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="font-serif font-bold text-3xl text-brand-text-title">Scaled Recipe</h3>
                            <span className="bg-brand-pink text-white px-3 py-1 rounded-full text-sm font-bold">
                                {scaleFactor}x
                            </span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {ingredients.map((ing, i) => {
                                const originalQty = parseFloat(ing.quantity) || 0;
                                const originalWeight = parseFloat(ing.weight) || 0;
                                const factor = parseFloat(scaleFactor) || 1;

                                const newQty = (originalQty * factor).toLocaleString(undefined, { maximumFractionDigits: 2 });
                                const newWeight = (originalWeight * factor).toLocaleString(undefined, { maximumFractionDigits: 2 });

                                let resultText = null;
                                if (originalQty > 0 || originalWeight > 0) {
                                    resultText = (
                                        <div className="flex flex-col items-end gap-1">
                                            {originalQty > 0 && ing.unit && (
                                                <span className="whitespace-nowrap">
                                                    {newQty}&nbsp;{ing.unit}
                                                </span>
                                            )}
                                            {originalWeight > 0 && (
                                                <span className="whitespace-nowrap text-brand-pink/80 text-base">
                                                    {originalQty > 0 && ing.unit && <span className="mr-1">/</span>}
                                                    {newWeight}&nbsp;g
                                                </span>
                                            )}
                                        </div>
                                    );
                                }

                                if (!ing.name && !resultText) return null;

                                return (
                                    <li key={ing.id} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-brand-pink/10">
                                        <span className="font-medium text-brand-text-body text-lg">{ing.name || `Ingredient ${i + 1}`}</span>
                                        <div className="font-bold text-brand-pink text-xl">{resultText || '-'}</div>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="text-center">
                            <button
                                onClick={handleCopy}
                                className="w-full py-4 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                {copied ? <CheckCircleIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
                                {copied ? 'Copied to Clipboard!' : 'Copy Scaled Recipe'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <RecipeScalerContent />
        </ToolContainer>
    );
};

const PAN_SIZE_CONVERSIONS = [
    { from: '8" Round', to: '10" Round', factor: '1.56x' },
    { from: '8" Round', to: '9" Round', factor: '1.27x' },
    { from: '9" Round', to: '10" Round', factor: '1.23x' },
    { from: '9" Round', to: '8" Square', factor: '1.00x' },
    { from: '9" x 13"', to: 'Two 9" Rounds', factor: '1.00x' },
    { from: 'Cupcakes (12)', to: '8" Round', factor: '1.00x' },
];

const RecipeScalerContent: React.FC = () => (
    <div className="mt-12 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">Master Your Bakes with Our Free Recipe Resizer</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Baking is a science, and precision is key. Whether you're a home baker needing to <strong>double a recipe</strong> for a party or a professional looking to scale down a commercial formula, our <strong>Recipe Resizer</strong> is your ultimate tool. Stop doing mental math and risking ruined batches. This <strong>Batch Multiplier</strong> instantly recalculates ingredient quantities—cups, grams, or ounces—maintaining the perfect ratios for success.
            </p>
        </div>

        {/* Recommended Gear Section */}
        <div className="bg-gradient-to-br from-brand-pink/5 to-white p-6 rounded-2xl border border-brand-pink/10 shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Recommended Gear for Precise Scaling</h3>
            <div className="grid sm:grid-cols-2 gap-4">
                <a href="https://amzn.to/3PqXy8C" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-pink hover:shadow-md transition-all group">
                    <span className="text-3xl">⚖️</span>
                    <div>
                        <p className="font-bold text-brand-text-title group-hover:text-brand-pink transition-colors">Digital Kitchen Scale</p>
                        <p className="text-xs text-brand-text-body/70">Essential for weighing ingredients accurately.</p>
                    </div>
                </a>
                <a href="https://amzn.to/3PqXy8C" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-pink hover:shadow-md transition-all group">
                    <span className="text-3xl">🥣</span>
                    <div>
                        <p className="font-bold text-brand-text-title group-hover:text-brand-pink transition-colors">Mixing Bowl Set</p>
                        <p className="text-xs text-brand-text-body/70">Perfect for handling large batches effortlessly.</p>
                    </div>
                </a>
            </div>
            <p className="text-[10px] text-brand-text-body/40 mt-3 text-center">
                *As an Amazon Associate, we earn from qualifying purchases. This helps keep our tools free!
            </p>
        </div>

        {/* Pan Size Chart */}
        <div className="bg-brand-bg/30 p-6 rounded-2xl border border-brand-border/50">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Common Pan Size Conversions</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {PAN_SIZE_CONVERSIONS.map((item, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-brand-border flex justify-between items-center">
                        <div className="text-sm font-medium text-brand-text-body">
                            <span className="text-brand-text-body/60">{item.from}</span>
                            <span className="mx-2">→</span>
                            <span className="font-bold text-brand-text-title">{item.to}</span>
                        </div>
                        <span className="bg-brand-pink/10 text-brand-pink font-bold text-xs px-2 py-1 rounded-full">{item.factor}</span>
                    </div>
                ))}
            </div>
            <p className="text-xs text-center mt-4 text-brand-text-body/60">
                Need more precise calculations? Use our <a href="/tools/baking-pan-converter" className="text-brand-pink hover:underline font-bold">Baking Pan Converter</a>.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    How to Scale a Recipe Correctly
                </h3>
                <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>Input Your Ingredients:</strong> Enter the original amounts. For the most accuracy, convert volume (cups) to weight (grams) first.</li>
                    <li><strong>Set Your Multiplier:</strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                            <li>To <strong>Double a Recipe</strong>: Enter <strong>2</strong></li>
                            <li>To <strong>Half a Recipe</strong>: Enter <strong>0.5</strong></li>
                            <li>To <strong>Triple a Recipe</strong>: Enter <strong>3</strong></li>
                        </ul>
                    </li>
                    <li><strong>Review the New Totals:</strong> The <strong>recipe scaler</strong> instantly updates the values.</li>
                    <li><strong>Bake & Enjoy:</strong> Remember to adjust baking time for larger or smaller pans!</li>
                </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How do I double a recipe?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Simply set the "Recipe Multiplier" to <strong>2</strong>. This will multiply all ingredient quantities by 2. This is perfect for when you need more servings for a party or event.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Does baking time change when scaling?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Often, yes! If baking a larger batch in a single deeper pan, it will take longer. If splitting a double batch into two pans of the original size, the time stays roughly the same. Always checking for doneness with a toothpick is the safest bet.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Can I scale yeast recipes (bread, pizza dough)?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Yes, yeast scales linearly just like other ingredients. Calculating bakers percentages is often helpful here. Note that larger masses of dough might ferment slightly faster due to heat retention, so watch your dough, not just the clock.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How do I convert cups to grams?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Scaling is most accurate with weight. Use our separate <a href="/tools/measurement-converter" className="text-brand-pink hover:underline">Measurement Converter</a> to switch from volume to weight before scaling your recipe.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);
