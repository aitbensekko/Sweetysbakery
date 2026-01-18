import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, InfoIcon, RefreshCwIcon } from '../Icons';
import { PremiumPromo } from '../PremiumPromo';

const QUICK_ADD_INGREDIENTS = [
    { name: 'Flour (AP)', cost: '2.50' },
    { name: 'Sugar (Granulated)', cost: '3.00' },
    { name: 'Butter (Unsalted)', cost: '5.00' },
    { name: 'Eggs (Large)', cost: '4.00' },
    { name: 'Vanilla Extract', cost: '12.00' },
    { name: 'Milk (Whole)', cost: '1.50' },
    { name: 'Cake Board', cost: '2.00' },
    { name: 'Cake Box', cost: '3.50' },
];

const PRICING_TEMPLATES = {
    custom: { name: 'Custom', laborRate: '20', overhead: '15', profitMargin: '50' },
    birthday: { name: 'Birthday Cake', laborRate: '25', overhead: '15', profitMargin: '40' },
    wedding: { name: 'Wedding Cake', laborRate: '35', overhead: '20', profitMargin: '60' },
    cupcakes: { name: 'Cupcakes (Dozens)', laborRate: '20', overhead: '10', profitMargin: '45' },
};

const inputStyles = "w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200 text-brand-text-body";

interface Ingredient {
    id: number;
    name: string;
    cost: string;
}

interface CakePricingCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const CakePricingCalculator: React.FC<CakePricingCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ id: 1, name: '', cost: '' }]);
    const [laborRate, setLaborRate] = useState('20');
    const [laborHours, setLaborHours] = useState('2');
    const [overhead, setOverhead] = useState('15');
    const [profitMargin, setProfitMargin] = useState('50');
    const [servings, setServings] = useState('12');

    // New State for Delivery & Tax
    const [deliveryBase, setDeliveryBase] = useState('0');
    const [deliveryMileage, setDeliveryMileage] = useState('0');
    const [mileageRate, setMileageRate] = useState('0.60'); // IRS standard-ish
    const [taxRate, setTaxRate] = useState('0');

    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (value: string, field: string) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(field);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const applyTemplate = (type: keyof typeof PRICING_TEMPLATES) => {
        const template = PRICING_TEMPLATES[type];
        setLaborRate(template.laborRate);
        setOverhead(template.overhead);
        setProfitMargin(template.profitMargin);
    };

    const handleIngredientChange = (id: number, field: 'name' | 'cost', value: string) => {
        // Prevent negative numbers for cost
        if (field === 'cost' && parseFloat(value) < 0) return;
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: '', cost: '' }]);
    };

    const addQuickIngredient = (name: string, cost: string) => {
        setIngredients([...ingredients, { id: Date.now(), name, cost }]);
    };

    const removeIngredient = (id: number) => {
        if (ingredients.length > 1) {
            setIngredients(ingredients.filter(ing => ing.id !== id));
        }
    };

    const handleNumberInput = (setter: (val: string) => void, value: string) => {
        if (parseFloat(value) < 0) return;
        setter(value);
    };

    const {
        subtotal,
        pricePerServing,
        totalPrice,
        isValid,
        deliveryTotal,
        taxAmount,
        profitAmount,
        overheadAmount,
        laborCost,
        ingredientCost
    } = useMemo(() => {
        const ingCost = ingredients.reduce((sum, ing) => sum + (parseFloat(ing.cost) || 0), 0);
        const labCost = (parseFloat(laborRate) || 0) * (parseFloat(laborHours) || 0);
        const baseCost = ingCost + labCost;

        const ovCost = baseCost * ((parseFloat(overhead) || 0) / 100);
        const subtotalVal = baseCost + ovCost; // Cost to make (Ingredients + Labor + Overhead)

        const profit = subtotalVal * ((parseFloat(profitMargin) || 0) / 100);
        const priceBeforeTaxDelivery = subtotalVal + profit;

        // Delivery
        const delBase = parseFloat(deliveryBase) || 0;
        const delMiles = parseFloat(deliveryMileage) || 0;
        const delRate = parseFloat(mileageRate) || 0;
        const delTotal = delBase + (delMiles * delRate);

        // Tax
        const tax = (priceBeforeTaxDelivery + delTotal) * ((parseFloat(taxRate) || 0) / 100);

        const finalPrice = priceBeforeTaxDelivery + delTotal + tax;
        const numServings = parseInt(servings) || 1;
        const pricePer = finalPrice / numServings;

        const isValid = ingCost > 0 && parseFloat(laborRate) >= 0 && parseFloat(laborHours) >= 0;

        return {
            subtotal: subtotalVal.toFixed(2),
            pricePerServing: pricePer.toFixed(2),
            totalPrice: finalPrice.toFixed(2),
            isValid,
            deliveryTotal: delTotal.toFixed(2),
            taxAmount: tax.toFixed(2),
            profitAmount: profit.toFixed(2),
            overheadAmount: ovCost.toFixed(2),
            laborCost: labCost.toFixed(2),
            ingredientCost: ingCost.toFixed(2)
        };
    }, [ingredients, laborRate, laborHours, overhead, profitMargin, servings, deliveryBase, deliveryMileage, mileageRate, taxRate]);

    return (
        <ToolContainer
            title="Free Cake Pricing Calculator & Bakery Cost App"
            description="Calculate the perfect price for your custom cakes and baked goods. Ideal for pricing wedding cakes, birthday cakes, cupcakes, and more. Factor in ingredients for chocolate, vanilla, or red velvet cake, plus labor and cake delivery costs."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="cake-pricing"
        >
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    {/* Templates Section */}
                    <section className="bg-brand-pink/5 p-4 rounded-xl border border-brand-pink/10">
                        <h3 className="font-bold text-brand-text-title mb-3 flex items-center gap-2">
                            <RefreshCwIcon className="w-5 h-5 text-brand-pink" />
                            Load Pricing Template
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {(Object.keys(PRICING_TEMPLATES) as Array<keyof typeof PRICING_TEMPLATES>).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => applyTemplate(key)}
                                    className="px-3 py-1.5 bg-white border border-brand-pink/20 rounded-full text-sm font-medium text-brand-text-body hover:bg-brand-pink hover:text-white transition-all shadow-sm"
                                >
                                    {PRICING_TEMPLATES[key].name}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title flex items-center gap-2">
                            <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                            Ingredient Costs
                        </h3>
                        <div className="space-y-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                            {ingredients.map((ing, index) => (
                                <div key={ing.id} className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center group bg-white sm:bg-transparent p-3 sm:p-0 rounded-lg shadow-sm sm:shadow-none border sm:border-none border-gray-100 relative">
                                    <div className="flex-grow">
                                        <label className="block text-xs font-bold text-brand-text-body/60 mb-1 sm:hidden">Ingredient Name</label>
                                        <input
                                            type="text"
                                            placeholder={`Ingredient ${index + 1} (e.g. Flour)`}
                                            value={ing.name}
                                            onChange={e => handleIngredientChange(ing.id, 'name', e.target.value)}
                                            className={inputStyles}
                                            aria-label={`Ingredient ${index + 1} name`}
                                        />
                                    </div>
                                    <div className="w-full sm:w-32 relative">
                                        <label className="block text-xs font-bold text-brand-text-body/60 mb-1 sm:hidden">Cost ($)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                value={ing.cost}
                                                onChange={e => handleIngredientChange(ing.id, 'cost', e.target.value)}
                                                className={`${inputStyles} pl-7`}
                                                aria-label={`Ingredient ${index + 1} cost`}
                                                min="0"
                                                step="0.01"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeIngredient(ing.id)}
                                        className={`absolute top-2 right-2 sm:static sm:top-auto sm:right-auto p-2 text-gray-400 hover:text-red-500 transition-colors ${ingredients.length === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                                        title="Remove ingredient"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                            <button onClick={addIngredient} className="w-full py-2 border-2 border-dashed border-brand-pink/30 text-brand-pink font-bold rounded-lg hover:bg-brand-pink/5 transition-colors">
                                + Add Ingredient
                            </button>
                        </div>

                        {/* Quick Add Section */}
                        <div className="mt-4">
                            <p className="text-xs font-bold text-brand-text-body/60 uppercase tracking-wide mb-2">Quick Add Common Items</p>
                            <div className="flex flex-wrap gap-2">
                                {QUICK_ADD_INGREDIENTS.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => addQuickIngredient(item.name, item.cost)}
                                        className="px-3 py-1.5 bg-white border border-brand-border rounded-full text-xs font-medium text-brand-text-body hover:border-brand-pink hover:text-brand-pink transition-colors shadow-sm"
                                    >
                                        + {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title flex items-center gap-2">
                            <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                            Labor & Details
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <div>
                                <label htmlFor="laborRate" className="block text-sm font-bold text-brand-text-body mb-1">Hourly Rate ($)</label>
                                <input id="laborRate" type="number" value={laborRate} onChange={e => handleNumberInput(setLaborRate, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                            <div>
                                <label htmlFor="laborHours" className="block text-sm font-bold text-brand-text-body mb-1">Hours Worked</label>
                                <input id="laborHours" type="number" value={laborHours} onChange={e => handleNumberInput(setLaborHours, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                            <div>
                                <label htmlFor="overhead" className="block text-sm font-bold text-brand-text-body mb-1">Overhead (%)</label>
                                <input id="overhead" type="number" value={overhead} onChange={e => handleNumberInput(setOverhead, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                            <div>
                                <label htmlFor="profitMargin" className="block text-sm font-bold text-brand-text-body mb-1">Profit Margin (%)</label>
                                <input id="profitMargin" type="number" value={profitMargin} onChange={e => handleNumberInput(setProfitMargin, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="servings" className="block text-sm font-bold text-brand-text-body mb-1">Number of Servings</label>
                                <input id="servings" type="number" value={servings} onChange={e => handleNumberInput(setServings, e.target.value)} className={inputStyles} min="1" step="any" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title flex items-center gap-2">
                            <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                            Delivery & Tax
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <div>
                                <label htmlFor="deliveryBase" className="block text-sm font-bold text-brand-text-body mb-1">Base Delivery Fee ($)</label>
                                <input id="deliveryBase" type="number" value={deliveryBase} onChange={e => handleNumberInput(setDeliveryBase, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                            <div>
                                <label htmlFor="taxRate" className="block text-sm font-bold text-brand-text-body mb-1">Tax Rate (%)</label>
                                <input id="taxRate" type="number" value={taxRate} onChange={e => handleNumberInput(setTaxRate, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                            <div>
                                <label htmlFor="deliveryMileage" className="block text-sm font-bold text-brand-text-body mb-1">Miles (Round Trip)</label>
                                <input id="deliveryMileage" type="number" value={deliveryMileage} onChange={e => handleNumberInput(setDeliveryMileage, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                            <div>
                                <label htmlFor="mileageRate" className="block text-sm font-bold text-brand-text-body mb-1">Rate per Mile ($)</label>
                                <input id="mileageRate" type="number" value={mileageRate} onChange={e => handleNumberInput(setMileageRate, e.target.value)} className={inputStyles} min="0" step="any" />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="sticky top-6 h-fit">
                    <div className="bg-gradient-to-br from-brand-pink-light to-white p-8 rounded-2xl shadow-sm border border-brand-pink/20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-brand-pink"></div>
                        <h3 className="font-serif font-bold text-3xl text-brand-text-title mb-8">Recommended Price</h3>

                        {!isValid ? (
                            <div className="text-brand-text-body/60 italic py-8">
                                Enter ingredients and labor details to see your pricing.
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <div>
                                    <div className="text-sm text-brand-text-body uppercase tracking-wider font-semibold mb-1">Total Price</div>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="font-serif font-bold text-6xl text-brand-pink tracking-tight">${totalPrice}</span>
                                        <button onClick={() => handleCopy(totalPrice, 'total')} title="Copy total price" className="p-2 hover:bg-brand-pink/10 rounded-full transition-colors">
                                            {copied === 'total' ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/40 hover:text-brand-pink" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-brand-pink/10 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-brand-text-body/70">Ingredients</span>
                                        <span className="font-bold text-brand-text-title">${ingredientCost}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-brand-text-body/70">Labor</span>
                                        <span className="font-bold text-brand-text-title">${laborCost}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-brand-text-body/70">Overhead</span>
                                        <span className="font-bold text-brand-text-title">${overheadAmount}</span>
                                    </div>
                                    <div className="flex justify-between text-green-600">
                                        <span className="font-medium">Profit</span>
                                        <span className="font-bold">+${profitAmount}</span>
                                    </div>
                                    {(parseFloat(deliveryTotal) > 0) && (
                                        <div className="flex justify-between text-blue-600">
                                            <span className="font-medium">Delivery</span>
                                            <span className="font-bold">+${deliveryTotal}</span>
                                        </div>
                                    )}
                                    {(parseFloat(taxAmount) > 0) && (
                                        <div className="flex justify-between text-brand-text-body/70">
                                            <span>Tax</span>
                                            <span className="font-bold">+${taxAmount}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-pink/10">
                                    <div>
                                        <div className="text-xs text-brand-text-body/70 mb-1">Cost Per Serving</div>
                                        <div className="font-bold text-2xl text-brand-text-title">${pricePerServing}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-brand-text-body/70 mb-1">Base Cost (No Profit)</div>
                                        <div className="font-bold text-2xl text-brand-text-title">${subtotal}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800">
                        <p className="flex gap-2">
                            <span className="font-bold">💡 Tip:</span>
                            <span>Don't forget to include the cost of packaging (boxes, boards, ribbon) in your ingredient list!</span>
                        </p>
                    </div>

                    {/* Related Tool Link */}
                    <div className="mt-6 bg-brand-pink/5 p-4 rounded-lg border border-brand-pink/10 text-center">
                        <p className="text-sm text-brand-text-body mb-2 font-medium">Need to resize your batch first?</p>
                        <a href="/tools/recipe-scaler" className="text-brand-pink hover:text-brand-pink-dark font-bold underline decoration-2 underline-offset-2 transition-colors">
                            Use Free Recipe Scaler →
                        </a>
                    </div>

                    {/* Upsell CTA */}
                    <PremiumPromo variant="inline-tool" />
                </div>
            </div>

            <CakePricingCalculatorContent />
        </ToolContainer>
    );
};

const CakePricingCalculatorContent: React.FC = () => (
    <div className="mt-12 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">The Ultimate Cake Pricing Calculator for Bakers</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Turning your baking passion into a business? The biggest challenge is ensuring you're actually making a profit. Our free <strong>Cake Pricing Calculator</strong> takes the guesswork out of billing. Whether you are selling <strong>custom birthday cakes</strong>, <strong>wedding cakes</strong>, or <strong>cupcakes</strong> by the dozen, this tool accounts for everything—total ingredient costs, your valuable time (labor), overhead expenses, and even delivery.
            </p>
            <p className="text-lg text-brand-text-body/80 leading-relaxed mt-4">
                Designed for home bakers and small business owners, this <strong>Bakery Cost App</strong> ensures you never undercharge for your hard work again.
            </p>
        </div>

        {/* Recommended Gear Section */}
        <div className="bg-gradient-to-br from-brand-pink/5 to-white p-6 rounded-2xl border border-brand-pink/10 shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Recommended Gear for Your Business</h3>
            <div className="grid sm:grid-cols-2 gap-4">
                <a href="https://amzn.to/3PqXy8C" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-pink hover:shadow-md transition-all group">
                    <span className="text-3xl">📦</span>
                    <div>
                        <p className="font-bold text-brand-text-title group-hover:text-brand-pink transition-colors">Cake Box Starter Kit</p>
                        <p className="text-xs text-brand-text-body/70">Professional packaging adds value to your cakes.</p>
                    </div>
                </a>
                <a href="https://amzn.to/3PqXy8C" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-pink hover:shadow-md transition-all group">
                    <span className="text-3xl">📝</span>
                    <div>
                        <p className="font-bold text-brand-text-title group-hover:text-brand-pink transition-colors">Order Order Pad</p>
                        <p className="text-xs text-brand-text-body/70">Keep track of every custom order detail.</p>
                    </div>
                </a>
            </div>
            <p className="text-[10px] text-brand-text-body/40 mt-3 text-center">
                *As an Amazon Associate, we earn from qualifying purchases. This helps keep our tools free!
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    How to Price a Cake Correctly
                </h3>
                <p className="text-sm text-brand-text-body/80 mb-4">
                    New to pricing? Read our <a href="/cake-pricing-guide" className="text-brand-pink font-bold hover:underline">Ultimate Guide to Cake Pricing</a> for a deep dive.
                </p>
                <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>Start with Ingredients:</strong> List every item, including packaging (cake boards, boxes). This is your base cost.</li>
                    <li><strong>Add Your Labor:</strong> Don't work for free! Charge a fair hourly rate for shopping, baking, decorating, and cleaning.</li>
                    <li><strong>Factor Overhead:</strong> Cover the "hidden" costs like electricity, water, insurance, and equipment wear (usually 10-20% is safe).</li>
                    <li><strong>Set Profit Margin:</strong> This is for business growth. A 30-50% margin is standard for sustainable bakeries.</li>
                    <li><strong>Delivery & Tax:</strong> Add mileage rates for delivery and ensure you calculate sales tax if local laws require it.</li>
                </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            What is a good profit margin for cakes?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            For custom cakes and baked goods, a profit margin of <strong>30% to 50%</strong> is recommended. This profit allows you to reinvest in your business (new mixers, branding, marketing) and protects you from unexpected costs.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How do I calculate overhead for a home bakery?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Since you can't easily meter your oven's specific usage, a simple method is to add a percentage (usually <strong>10-20%</strong>) to your direct costs (Ingredients + Labor). This creates a buffer that covers utilities and wear-and-tear.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Should I charge for cake tasting boxes?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Yes! Tasting boxes require ingredients, time, and packaging. Many professionals charge a consultation fee (e.g., $30-$50) which can be deducted from the final wedding cake order if the client books with you.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How do I price specialized diets (Vegan/GF)?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Niche items like <strong>Gluten-Free Cakes</strong>, <strong>Vegan Cakes</strong>, or <strong>Keto Desserts</strong> use specialty ingredients (almond flour, sweeteners) that cost more. Always use a calculator to track these higher costs and price accordingly.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How much should I charge for cake delivery?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Charge a base fee for your time plus a per-mile rate (IRS standard is ~67 cents/mile). For <strong>Wedding Cake Delivery</strong>, which involves setup and high stress, many bakers charge a premium hourly rate for the travel time.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);

