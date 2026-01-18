import React from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ChevronRightIcon } from '../Icons';

interface IngredientSubstitutionsProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const substitutionData = [
    {
        category: 'Leavening Agents',
        substitutions: [
            { original: '1 tsp Baking Powder', sub: '1/4 tsp Baking Soda + 1/2 tsp Cream of Tartar' },
            { original: '1 tsp Active Dry Yeast', sub: '3/4 tsp Instant Yeast OR 2.5 tsp Fresh Yeast' },
            { original: '1 tsp Baking Soda', sub: '3 tsp Baking Powder (omit salt, reduce acid)' },
            { original: '1 tsp Cream of Tartar', sub: '2 tsp Lemon Juice or Vinegar' },
        ]
    },
    {
        category: 'Dairy & Fats',
        substitutions: [
            { original: '1 cup Buttermilk', sub: '1 cup Milk + 1 tbsp Lemon Juice or White Vinegar (let stand 5 mins)' },
            { original: '1 cup Sour Cream', sub: '1 cup Plain Yogurt (Greek is best)' },
            { original: '1 cup Butter (Salted)', sub: '1 cup Margarine OR 1 cup Shortening + 1/2 tsp Salt' },
            { original: '1 cup Butter (Unsalted)', sub: '1 cup Shortening OR 7/8 cup Vegetable Oil (for cakes)' },
            { original: '1 cup Heavy Cream', sub: '3/4 cup Milk + 1/3 cup Butter (for cooking/baking, not whipping)' },
            { original: '1 cup Whole Milk', sub: '1/2 cup Evaporated Milk + 1/2 cup Water' },
            { original: '1 cup Mascarpone', sub: '1 cup Cream Cheese + 1/4 cup Heavy Cream + 2 tbsp Butter' },
        ]
    },
    {
        category: 'Eggs',
        substitutions: [
            { original: '1 Large Egg', sub: '1/4 cup Applesauce (for moisture)' },
            { original: '1 Large Egg', sub: '1/2 Mashed Banana (adds flavor)' },
            { original: '1 Large Egg', sub: '1 tbsp Ground Flaxseed + 3 tbsp Water (let sit 5 mins)' },
            { original: '1 Large Egg', sub: '1/4 cup Silken Tofu (blended)' },
            { original: '1 Large Egg', sub: '1/4 cup Yogurt or Buttermilk' },
        ]
    },
    {
        category: 'Sweeteners',
        substitutions: [
            { original: '1 cup Granulated Sugar', sub: '1 cup packed Brown Sugar OR 1 3/4 cups Confectioners\' Sugar' },
            { original: '1 cup Brown Sugar', sub: '1 cup Granulated Sugar + 1 tbsp Molasses' },
            { original: '1 cup Honey', sub: '1 1/4 cups Sugar + 1/4 cup Liquid' },
            { original: '1 cup Molasses', sub: '1 cup Honey OR 3/4 cup Brown Sugar + 1/4 cup Water' },
            { original: '1 cup Corn Syrup', sub: '1 cup Sugar + 1/4 cup Water' },
        ]
    },
    {
        category: 'Flour & Thickeners',
        substitutions: [
            { original: '1 cup Cake Flour', sub: '1 cup All-Purpose Flour minus 2 tbsp, plus 2 tbsp Cornstarch' },
            { original: '1 cup Bread Flour', sub: '1 cup All-Purpose Flour + 1 tsp Vital Wheat Gluten' },
            { original: '1 cup Self-Rising Flour', sub: '1 cup All-Purpose Flour + 1 1/2 tsp Baking Powder + 1/4 tsp Salt' },
            { original: '1 tbsp Cornstarch', sub: '2 tbsp All-Purpose Flour OR 1 tbsp Potato Starch' },
            { original: '1 tbsp Arrowroot', sub: '1 tbsp Cornstarch OR 1 tbsp Tapioca Starch' },
        ]
    },
    {
        category: 'Spices & Flavorings',
        substitutions: [
            { original: '1 tsp Allspice', sub: '1/2 tsp Cinnamon + 1/2 tsp Ground Cloves' },
            { original: '1 tsp Pumpkin Pie Spice', sub: '1/2 tsp Cinnamon + 1/4 tsp Ginger + 1/8 tsp Allspice + 1/8 tsp Nutmeg' },
            { original: '1 tsp Apple Pie Spice', sub: '1/2 tsp Cinnamon + 1/4 tsp Nutmeg + 1/8 tsp Cardamom' },
            { original: '1 tsp Lemon Juice', sub: '1/2 tsp Vinegar OR 1 tsp White Wine' },
            { original: '1 oz Unsweetened Chocolate', sub: '3 tbsp Cocoa Powder + 1 tbsp Butter/Oil' },
            { original: '1 oz Semisweet Chocolate', sub: '1 oz Unsweetened Chocolate + 1 tbsp Sugar' },
        ]
    }
];

const FaqItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <details className="border border-brand-border rounded-xl bg-white overflow-hidden transition-all duration-300 hover:border-brand-pink/50 group" open>
        <summary className="p-5 cursor-pointer flex justify-between items-center font-bold text-brand-text-title group-hover:text-brand-pink transition-colors">
            {title}
            <ChevronRightIcon className="accordion-arrow w-5 h-5 text-brand-pink transition-transform duration-300" />
        </summary>
        <div className="px-5 pb-5 text-brand-text-body/90 border-t border-brand-border">
            {children}
        </div>
    </details>
);

export const IngredientSubstitutions: React.FC<IngredientSubstitutionsProps> = ({ setActiveTool, breadcrumbs }) => {
    return (
        <ToolContainer
            title="Free Common Baking Ingredient Substitutions"
            description="Out of an ingredient? Find quick and reliable baking substitutions for free. Learn how to make a buttermilk substitute, replace baking powder, and more."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="ingredient-substitutions"
        >
            <div className="max-w-3xl mx-auto space-y-4">
                {substitutionData.map(({ category, substitutions }) => (
                    <FaqItem key={category} title={category}>
                        <div className="divide-y divide-brand-border">
                            {substitutions.map(({ original, sub }) => (
                                <div key={original} className="grid grid-cols-2 gap-4 py-3">
                                    <strong className="text-brand-text-title">{original}</strong>
                                    <div>{sub}</div>
                                </div>
                            ))}
                        </div>
                    </FaqItem>
                ))}
            </div>
            <div className="mt-8 pt-6 border-t border-brand-border">
                <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">A Note on Ingredient Replacements</h3>
                <p className="max-w-3xl mx-auto text-brand-text-body/90 leading-relaxed">
                    While these baking substitutions are great in a pinch, remember that baking is chemistry! Changing an ingredient, especially a major one like flour or fat, will likely alter the final taste and texture of your baked good. For important projects, it's always best to test an ingredient replacement in a small batch first before committing to the full recipe.
                </p>
            </div>
        </ToolContainer>
    );
};
