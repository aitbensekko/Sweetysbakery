
import React, { useState, useMemo, useEffect } from 'react';
import { updateSchema, getToolSeoData } from '../utils/seo';
import { Footer } from '../Footer';
import type { ToolId } from '../utils/slugs';
import { RefreshCwIcon } from '../Icons';

interface Substitution {
    name: string;
    amount: string;
    notes: string;
}

const substitutionData: Record<string, Record<string, Substitution[]>> = {
    cake: {
        'gluten-free': [
            { name: 'All-Purpose Gluten-Free Flour Blend (with xanthan gum)', amount: '1:1 by weight', notes: 'Ensure your blend contains xanthan gum for structure.' },
            { name: 'Almond Flour + Tapioca Starch', amount: '3:1 ratio by weight', notes: 'Creates a tender, moist crumb. May require more binder.' },
        ],
        'egg-free': [
            { name: 'Flax Egg (1 tbsp flax + 3 tbsp water)', amount: '1 per egg', notes: 'Best for binding in dense cakes like brownies or some muffins.' },
            { name: 'Aquafaba (chickpea brine)', amount: '3 tbsp per egg', notes: 'Excellent for light, airy cakes. Can be whipped for meringue.' },
            { name: 'Carbonated Water', amount: '1/4 cup per egg', notes: 'Acts as a leavener in light, fluffy cakes like cupcakes.' },
        ],
        'dairy-free': [
            { name: 'Plant-Based Milk (Soy, Almond, Oat)', amount: '1:1 for milk', notes: 'Choose unsweetened, unflavored versions for best results.' },
            { name: 'Vegan Butter or Coconut Oil', amount: '1:1 for butter', notes: 'Coconut oil may impart a slight flavor. Vegan butter is a direct swap.' },
        ],
        'nut-free': [
            { name: 'Oat Flour', amount: '1:1 replacement for almond flour', notes: 'Use in place of nut flours. May result in a slightly denser texture.' },
            { name: 'Toasted Seeds (Sunflower, Pumpkin)', amount: '1:1 for chopped nuts', notes: 'Provides a similar crunch and texture inside cakes or as a topping.' },
        ],
        'soy-free': [
            { name: 'Plant-Based Milk (Oat, Rice, Almond)', amount: '1:1 for Soy Milk', notes: 'Choose a milk with a neutral flavor to avoid altering the taste.' },
            { name: 'Sunflower Lecithin', amount: '1:1 for Soy Lecithin', notes: 'A common emulsifier. Can also use soy-free chocolate chips.' },
            { name: 'Canola or Sunflower Oil', amount: '1:1 for Soybean Oil', notes: 'Use any neutral-flavored vegetable oil as a direct substitute.' },
        ],
        'corn-free': [
            { name: 'Arrowroot or Tapioca Starch', amount: '1:1 for Cornstarch', notes: 'Excellent for thickening fillings or creating a tender crumb in cakes.' },
            { name: 'Corn-Free Baking Powder', amount: '1:1 for standard baking powder', notes: 'Purchase a corn-free brand, or make your own (1 part baking soda + 2 parts cream of tartar).' },
        ],
    },
    cookies: {
        'gluten-free': [
            { name: 'All-Purpose Gluten-Free Flour Blend (with xanthan gum)', amount: '1:1 by weight', notes: 'The most reliable substitute for classic cookie texture.' },
            { name: 'Oat Flour', amount: '1.25 : 1 ratio to AP flour', notes: 'Creates a chewier, softer cookie. Great for oatmeal cookies.' },
        ],
        'egg-free': [
            { name: 'Flax Egg (1 tbsp flax + 3 tbsp water)', amount: '1 per egg', notes: 'Excellent binder, creates a chewy texture. Ideal for most cookies.' },
            { name: 'Mashed Banana or Applesauce', amount: '1/4 cup per egg', notes: 'Adds moisture and sweetness. Best for soft, cake-like cookies.' },
        ],
        'dairy-free': [
            { name: 'Vegan Butter or Solid Coconut Oil', amount: '1:1 for butter', notes: 'For best results, chill the dough well before baking.' },
            { name: 'Plant-Based Milk', amount: '1:1 for milk', notes: 'Use in any cookie recipe that calls for milk.' },
        ],
        'nut-free': [
            { name: 'Toasted Oats or Seeds', amount: '1:1 for chopped nuts', notes: 'Adds crunch and texture. Works perfectly in chocolate chip or oatmeal cookies.' },
            { name: 'SunButter (Sunflower Seed Butter)', amount: '1:1 for peanut butter', notes: 'A direct replacement for peanut butter in cookies.' },
        ],
        'soy-free': [
            { name: 'Oat, Almond, or Rice Milk', amount: '1:1 for Soy Milk', notes: 'Direct replacement. Use unsweetened for best results.' },
            { name: 'Soy-Free Chocolate Chips', amount: '1:1 for regular chocolate chips', notes: 'Many brands use soy lecithin, so check labels for a soy-free alternative.' },
        ],
        'corn-free': [
            { name: 'Golden Syrup or Brown Rice Syrup', amount: '1:1 for Corn Syrup', notes: 'This will affect the flavor and color. Use a syrup with a similar thickness.' },
            { name: 'Powdered Sugar (corn-free)', amount: '1:1 for regular powdered sugar', notes: 'Most commercial powdered sugars contain cornstarch. Look for brands made with tapioca starch.' },
        ],
    },
    bread: {
        'gluten-free': [
            { name: 'High-Protein GF Bread Flour Blend', amount: 'Per package instructions', notes: 'Look for blends containing psyllium husk or a high amount of protein for better structure.' },
            { name: 'Buckwheat Flour', amount: 'Up to 30% of total flour', notes: 'Adds an earthy, nutty flavor and good structure to GF loaves.' },
        ],
        'egg-free': [
            { name: 'Plant-Based Milk or Vegan Butter (for wash)', amount: 'Brush on before baking', notes: 'Creates a golden-brown crust without using an egg wash.' },
            { name: 'Aquafaba or Commercial Egg Replacer', amount: 'Per instructions', notes: 'For enriched doughs like brioche or challah that have eggs mixed in.' },
        ],
        'dairy-free': [
            { name: 'Water or Unsweetened Plant Milk', amount: '1:1 for milk', notes: 'Use water for lean doughs (baguettes) and plant milk for enriched doughs (sandwich bread).' },
            { name: 'Olive Oil or Vegan Butter', amount: '1:1 for butter', notes: 'Olive oil adds flavor, while vegan butter provides richness similar to dairy butter.' },
        ],
        'soy-free': [
            { name: 'Oat, Rice, or Almond Milk', amount: '1:1 for Soy Milk', notes: 'A simple swap for any enriched dough recipes.' },
        ],
    },
    brownies: {
        'gluten-free': [
            { name: 'All-Purpose Gluten-Free Flour Blend', amount: '1:1 by weight', notes: 'Works best for classic, cake-like or fudgy brownies. Ensure it has xanthan gum.' },
            { name: 'Almond Flour', amount: '1:1 by weight', notes: 'Creates incredibly dense, fudgy, and moist brownies. A fantastic gluten-free option.' },
        ],
        'egg-free': [
            { name: 'Flax Egg (1 tbsp flax + 3 tbsp water)', amount: '1 per egg', notes: 'The ultimate binder for fudgy brownies. It enhances the rich, dense texture.' },
            { name: 'Silken Tofu, pureed', amount: '1/4 cup per egg', notes: 'Adds protein and creates a very rich, almost truffle-like texture.' },
        ],
        'dairy-free': [
            { name: 'Melted Coconut Oil or Vegan Butter', amount: '1:1 for butter', notes: 'Coconut oil pairs wonderfully with chocolate and enhances the fudgy texture.' },
            { name: 'Full-Fat Coconut Milk', amount: '1:1 for heavy cream', notes: 'Can be used to create rich, dairy-free ganache toppings.' }
        ],
        'nut-free': [
            { name: 'Chocolate Chips or Pretzels', amount: '1:1 for chopped nuts', notes: 'Add texture and crunch without using nuts.' },
            { name: 'Oat Flour', amount: '1:1 for almond flour', notes: 'If the recipe calls for almond flour as a base, oat flour is a good nut-free alternative.' },
        ],
    },
    muffins: {
        'gluten-free': [
            { name: 'All-Purpose Gluten-Free Flour Blend (with xanthan gum)', amount: '1:1 by weight', notes: 'The most reliable choice for a classic muffin texture.' },
            { name: 'Oat Flour + Almond Flour', amount: '1:1 ratio by weight', notes: 'Creates a heartier, more tender muffin. If nut-free, use all oat flour.' },
        ],
        'egg-free': [
            { name: 'Mashed Banana', amount: '1/2 medium banana per egg', notes: 'Adds moisture and sweetness. Best for banana muffins or spiced muffins.' },
            { name: 'Applesauce', amount: '1/4 cup per egg', notes: 'Provides moisture. Best for spice, carrot, or zucchini muffins.' },
            { name: 'Flax Egg (1 tbsp flax + 3 tbsp water)', amount: '1 per egg', notes: 'Works well in heartier muffins like bran or oatmeal.' },
        ],
        'dairy-free': [
            { name: 'Plant-Based Milk + Vinegar', amount: '1:1 for buttermilk', notes: 'Use 1 cup plant milk + 1 tbsp vinegar to mimic buttermilk.' },
            { name: 'Neutral Oil or Melted Vegan Butter', amount: '1:1 for butter', notes: 'Oil creates a softer, moister crumb in muffins.' },
        ],
        'nut-free': [
            { name: 'Sunflower Seeds or Toasted Oats', amount: '1:1 for chopped nuts', notes: 'Adds texture and crunch to the muffin batter or topping.' },
            { name: 'Oat Flour', amount: '1:1 for almond flour', notes: 'A direct substitute for recipes calling for almond flour.' },
        ],
    },
    pancakes: {
        'gluten-free': [
            { name: 'Buckwheat Flour', amount: '1:1 for wheat flour', notes: 'Classic earthy flavor. Naturally gluten-free and delicious in pancakes.' },
            { name: 'Oat Flour', amount: '1:1 for wheat flour', notes: 'Makes for fluffy, hearty pancakes. Ensure oats are certified gluten-free.' },
            { name: 'Almond Flour', amount: '1:1 for wheat flour', notes: 'Creates tender, lower-carb pancakes. Watch heat as they brown quickly.' },
        ],
        'egg-free': [
            { name: 'Mashed Banana', amount: '1/2 banana per egg', notes: 'Adds sweetness and moisture. Perfect for pancakes.' },
            { name: 'Baking Powder + Oil', amount: '1.5 tbsp oil + 1.5 tbsp water + 1 tsp baking powder per egg', notes: 'Great for light, fluffy pancakes without adding flavor.' },
        ],
        'dairy-free': [
            { name: 'Almond Milk + Vinegar', amount: '1 cup milk + 1 tbsp vinegar', notes: 'Let sit for 5 mins to curdle. Perfect buttermilk substitute.' },
            { name: 'Coconut Oil', amount: '1:1 for melted butter', notes: 'Adds a subtle tropical flavor and richness.' },
        ],
        'nut-free': [
            { name: 'Sunflower Seed Butter', amount: '1:1 for nut butters', notes: 'Great for protein pancakes or toppings.' },
        ],
    },
    pie_crust: {
        'gluten-free': [
            { name: '1:1 Gluten-Free Flour Blend', amount: '1:1 by weight', notes: 'Keep ingredients very cold. May need slightly more water.' },
            { name: 'Almond Flour Press-In Crust', amount: '1.5 cups flour + 1/4 cup butter/oil', notes: 'No rolling required. Great for tarts and cheesecakes.' },
        ],
        'dairy-free': [
            { name: 'Vegetable Shortening', amount: '1:1 for butter', notes: 'Creates an incredibly flaky crust, though less flavorful than butter.' },
            { name: 'Vegan Butter Sticks', amount: '1:1 for butter', notes: 'Freeze before cutting into flour for best flakes.' },
            { name: 'Solid Coconut Oil', amount: '1:1 for butter', notes: 'Freeze solid first. Adds a slight coconut flavor.' },
        ],
        'egg-free': [
            { name: 'Ice Water', amount: 'As needed', notes: 'Most standard pie crusts are naturally egg-free.' },
            { name: 'Maple Syrup + Plant Milk', amount: 'Brush on top', notes: 'Excellent vegan egg-wash substitute for golden color.' },
        ],
    },
    frosting: {
        'dairy-free': [
            { name: 'Vegan Butter Sticks', amount: '1:1 for dairy butter', notes: 'Best for a classic American buttercream texture. Choose a firm brand.' },
            { name: 'High-Ratio Shortening', amount: '1:1 for dairy butter', notes: 'Creates a very stable, pure white frosting. Lacks butter flavor.' },
            { name: 'Chilled Coconut Cream', amount: 'Use solid cream from the top of the can', notes: 'Excellent for a whipped cream-style frosting. Must be well-chilled.' },
            { name: 'Avocado + Cocoa Powder', amount: '1 ripe avocado per 2 cups sugar', notes: 'Makes a rich, creamy chocolate frosting. You cannot taste the avocado!' },
        ],
        'corn-free': [
            { name: 'Corn-Free Powdered Sugar', amount: '1:1 for regular powdered sugar', notes: 'Look for brands made with tapioca starch, or make your own by blending granulated sugar with tapioca starch.' },
            { name: 'Arrowroot Starch', amount: 'Use sparingly to thicken', notes: 'If your frosting is too thin, a small amount can help thicken it without adding grit.' },
        ],
    },
    general_baking: {
        'dairy-free': [
            { name: 'Buttermilk Substitute', amount: '1 cup milk + 1 tbsp lemon juice/vinegar', notes: 'Let sit for 5-10 mins until curdled. Essential for tender cakes and biscuits.' },
            { name: 'Heavy Cream Substitute', amount: '2/3 cup milk + 1/3 cup melted butter', notes: 'Works for baking and cooking, but will not whip.' },
            { name: 'Sour Cream Substitute', amount: '1:1 Greek Yogurt or Coconut Cream', notes: 'Greek yogurt is a perfect 1:1 swap for moisture and tang.' },
        ],
        'sugar-free': [
            { name: 'Coconut Sugar', amount: '1:1 for brown sugar', notes: 'Lower glycemic index with a similar caramel flavor.' },
            { name: 'Maple Syrup / Honey', amount: '3/4 cup per 1 cup sugar', notes: 'Reduce other liquids by 2-3 tbsp. Lower oven temp by 25°F to prevent burning.' },
            { name: 'Applesauce', amount: '1:1 for sugar', notes: 'Drastically reduces calories. Reduce liquid in recipe by 1/4 cup.' },
        ],
        'leavener': [
            { name: 'Baking Powder Substitute', amount: '1/4 tsp baking soda + 1/2 tsp cream of tartar', notes: 'Equals 1 tsp baking powder. Use immediately.' },
            { name: 'Self-Rising Flour', amount: '1 cup AP flour + 1.5 tsp baking powder + 1/4 tsp salt', notes: 'Make your own self-rising flour in seconds.' },
        ],
    },
};

const productTypes = [
    { value: 'cake', label: 'Cake (Birthday, Wedding, etc.)' },
    { value: 'cookies', label: 'Cookies' },
    { value: 'bread', label: 'Bread' },
    { value: 'brownies', label: 'Brownies' },
    { value: 'muffins', label: 'Muffins' },
    { value: 'pancakes', label: 'Pancakes/Waffles' },
    { value: 'pie_crust', label: 'Pie Crust' },
    { value: 'frosting', label: 'Frosting' },
    { value: 'general_baking', label: 'General Baking (Buttermilk, Cream, etc.)' },
];

const allergens = [
    { value: 'gluten-free', label: 'Gluten-Free' },
    { value: 'egg-free', label: 'Egg-Free' },
    { value: 'nut-free', label: 'Nut-Free' },
    { value: 'dairy-free', label: 'Dairy-Free' },
    { value: 'soy-free', label: 'Soy-Free' },
    { value: 'corn-free', label: 'Corn-Free' },
    { value: 'sugar-free', label: 'Sugar Alternatives' },
    { value: 'leavener', label: 'Leaveners' },
];


interface AllergenGuideProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const AllergenGuide: React.FC<AllergenGuideProps> = ({ setActiveTool, breadcrumbs }) => {
    const [productType, setProductType] = useState('cake');
    const [selectedAllergen, setSelectedAllergen] = useState('gluten-free');

    const handleReset = () => {
        setProductType('cake');
        setSelectedAllergen('');
    };

    const suggestions = useMemo(() => {
        if (!productType || !selectedAllergen) return [];
        return substitutionData[productType]?.[selectedAllergen] || [];
    }, [productType, selectedAllergen]);

    useEffect(() => {
        updateSchema('allergen-guide', getToolSeoData('allergen-guide'), null);
    }, []);

    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            {breadcrumbs}
            <header className="mb-8 max-w-4xl">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title">Free Baking Allergen Substitution Guide</h1>
                <p className="mt-4 text-lg text-brand-text-body/80 max-w-3xl">Find the best egg substitute for baking, reliable gluten-free flour swaps, and dairy-free alternatives with our free and comprehensive guide to allergen-free and vegan baking.</p>
            </header>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-border shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-6">
                    <div className="grid sm:grid-cols-2 gap-6 flex-grow">
                        <div>
                            <label className="text-sm font-bold text-brand-text-body mb-2 block">1. Select Product Type</label>
                            <select value={productType} onChange={(e) => setProductType(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg appearance-none">
                                {productTypes.map(pt => <option key={pt.value} value={pt.value}>{pt.label}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-bold text-brand-text-body mb-2 block">2. Select Allergens to Avoid</label>
                            <div className="flex flex-wrap gap-2">
                                {allergens.map(allergen => (
                                    <button
                                        key={allergen.value}
                                        onClick={() => setSelectedAllergen(allergen.value)}
                                        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${selectedAllergen === allergen.value ? 'bg-brand-pink text-white' : 'bg-gray-100 hover:bg-gray-200 text-brand-text-body'}`}
                                    >
                                        {allergen.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={handleReset} className="text-sm flex items-center gap-1 text-brand-text-body/70 hover:text-brand-pink self-start sm:self-end flex-shrink-0">
                        <RefreshCwIcon className="w-4 h-4" /> Reset
                    </button>
                </div>

                <div className="mt-6 border-t border-brand-border pt-6">
                    <h3 className="font-serif text-3xl font-bold text-brand-pink mb-4">Suggested Swaps</h3>
                    {suggestions.length > 0 ? (
                        <div className="space-y-4">
                            {suggestions.map(sub => (
                                <div key={sub.name} className="bg-brand-pink-light p-4 rounded-lg border border-brand-pink/20">
                                    <h4 className="font-bold text-brand-text-title">{sub.name}</h4>
                                    <p className="text-sm text-brand-text-body mt-1">
                                        <span className="font-semibold">Amount:</span> {sub.amount}
                                    </p>
                                    <p className="text-sm text-brand-text-body mt-1">
                                        <span className="font-semibold">Notes:</span> {sub.notes}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-brand-text-body/80">Select an allergen to see suggestions. We're still adding more options!</p>
                    )}
                    <p className="text-xs text-brand-text-body/60 mt-6">
                        Disclaimer: Always double-check ingredient labels and be aware of cross-contamination risks. These suggestions are for informational purposes only.
                    </p>
                </div>
            </div>

            <div className="mt-12">
                <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border">
                    <h2 className="font-serif text-3xl font-bold text-brand-text-title text-center mb-6">Understanding Allergen Substitutions in Baking</h2>
                    <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                        <p>Replacing an allergen is more than just swapping one ingredient for another; it's about understanding the role that ingredient plays. This tool gives you specific suggestions, but here's a little of the science behind them.</p>
                        <h3 className="font-bold text-xl">What Are We Replacing?</h3>
                        <ul>
                            <li><strong>Gluten (from Wheat):</strong> Gluten provides structure and elasticity. We replace it with a blend of gluten-free flours and starches, plus a binder like xanthan gum to mimic that stretchy quality.</li>
                            <li><strong>Eggs:</strong> Eggs wear many hats! They can be a binder, a leavener, or a source of moisture and fat. The right substitute depends on the job the egg is doing. A flax egg is a great binder, while applesauce provides moisture.</li>
                            <li><strong>Dairy (Milk, Butter):</strong> Dairy provides fat, moisture, and flavor. Plant-based milks and vegan butters are often easy vegan baking swaps, but the fat and protein content can vary, affecting the final texture.</li>
                        </ul>
                        <h3 className="font-bold text-xl">A Note on Cross-Contamination</h3>
                        <p>For someone with a severe allergy or Celiac Disease, using safe ingredients isn't enough. It's critical to also prevent cross-contamination from surfaces, utensils, or even airborne flour. Learn more in our <strong className="text-brand-text-title">guide to avoiding cross-contamination</strong> in the kitchen.</p>
                    </div>
                </div>
            </div>


        </div >
    );
};
