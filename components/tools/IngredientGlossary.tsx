import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { SearchIcon, ChevronRightIcon, FilterIcon } from '../Icons';

interface IngredientGlossaryProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const glossaryData = [
    // Flours
    {
        term: 'All-Purpose Flour',
        definition: 'A versatile wheat flour with a moderate protein content (around 10-12%). It provides a good balance of strength and tenderness, making it suitable for a wide range of baked goods like cookies, cakes, and some breads.',
        category: 'Flours'
    },
    {
        term: 'Bread Flour',
        definition: 'A high-protein flour (around 12-14%) that develops strong gluten strands. This strength is essential for creating the chewy texture and airy structure of yeast breads like sourdough and baguettes.',
        category: 'Flours'
    },
    {
        term: 'Cake Flour',
        definition: 'A low-protein flour (around 7-9%) that is finely milled and often bleached. It produces a very soft, tender crumb, making it ideal for delicate cakes like angel food and chiffon.',
        category: 'Flours'
    },
    {
        term: 'Pastry Flour',
        definition: 'With a protein content between cake and all-purpose flour (around 9%), it offers the perfect balance for tender pie crusts, biscuits, and tarts.',
        category: 'Flours'
    },
    {
        term: 'Self-Rising Flour',
        definition: 'All-purpose flour that has baking powder and salt already added. It is commonly used in Southern biscuits and quick breads. Do not substitute 1:1 for AP flour unless the recipe calls for it.',
        category: 'Flours'
    },
    {
        term: 'Whole Wheat Flour',
        definition: 'Milled from the entire wheat kernel (bran, germ, and endosperm). It has a higher protein content but the sharp bran cuts gluten strands, resulting in denser baked goods.',
        category: 'Flours'
    },
    {
        term: 'Almond Flour',
        definition: 'Made from blanched, ground almonds. It is gluten-free, high in fat, and adds moisture and a nutty flavor. Essential for macarons and financiers.',
        category: 'Flours'
    },
    {
        term: 'Coconut Flour',
        definition: 'A soft, gluten-free flour made from dried coconut meat. It is extremely absorbent and requires much more liquid/eggs than wheat flour.',
        category: 'Flours'
    },
    {
        term: 'Rye Flour',
        definition: 'A low-gluten flour with a distinct earthy, slightly sour flavor. It creates dense, moist breads and is often mixed with wheat flour for better rise.',
        category: 'Flours'
    },
    {
        term: 'Semolina Flour',
        definition: 'Coarse flour made from durum wheat. High in protein and gluten, it gives pasta its chew and adds a crisp crust to breads and pizzas.',
        category: 'Flours'
    },

    // Leaveners
    {
        term: 'Baking Soda (Sodium Bicarbonate)',
        definition: 'A chemical leavener that requires an acid (like buttermilk, lemon juice, or brown sugar) to react and produce carbon dioxide. It provides a "spread" and a tender crumb.',
        category: 'Leaveners'
    },
    {
        term: 'Baking Powder',
        definition: 'A complete chemical leavener containing both baking soda (a base) and an acid. Most are "double-acting," reacting once when mixed with liquid and again when heated. It provides "lift".',
        category: 'Leaveners'
    },
    {
        term: 'Active Dry Yeast',
        definition: 'Yeast granules that are dormant and need to be "proofed" or dissolved in warm water (105°F-110°F) with a pinch of sugar before using to ensure they are alive.',
        category: 'Leaveners'
    },
    {
        term: 'Instant Yeast (Rapid Rise)',
        definition: 'Milled into finer particles than active dry yeast, it dissolves instantly and can be mixed directly into dry ingredients. It is more potent and works faster.',
        category: 'Leaveners'
    },
    {
        term: 'Sourdough Starter',
        definition: 'A fermented mixture of flour and water containing wild yeast and lactobacilli bacteria. It acts as a natural leavener and adds a distinct tangy flavor to bread.',
        category: 'Leaveners'
    },

    // Sugars
    {
        term: 'Granulated Sugar',
        definition: 'Refined white sugar. It provides sweetness, helps with browning (Maillard reaction), and aerates doughs when creamed with butter.',
        category: 'Sugars'
    },
    {
        term: 'Brown Sugar (Light & Dark)',
        definition: 'Granulated sugar with molasses added back in. It adds moisture, a caramel flavor, and acidity (which activates baking soda). Dark brown sugar has more molasses.',
        category: 'Sugars'
    },
    {
        term: 'Confectioners\' Sugar (Powdered)',
        definition: 'Finely ground sugar mixed with a small amount of cornstarch to prevent clumping. Used for frostings, glazes, and dusting.',
        category: 'Sugars'
    },
    {
        term: 'Turbinado Sugar',
        definition: 'Raw sugar with large, coarse crystals and a light molasses flavor. Often used as a crunchy topping for muffins and cookies.',
        category: 'Sugars'
    },
    {
        term: 'Molasses',
        definition: 'A thick, dark syrup produced during sugar refining. It adds moisture, acidity, and a robust, slightly bitter flavor to gingerbread and dark breads.',
        category: 'Sugars'
    },
    {
        term: 'Honey',
        definition: 'A natural liquid sweetener that adds distinct floral notes and keeps baked goods moist longer due to its hygroscopic nature.',
        category: 'Sugars'
    },
    {
        term: 'Pearl Sugar',
        definition: 'Large, hard clumps of white sugar that do not melt during baking. Essential for Liege waffles and Scandinavian pastries.',
        category: 'Sugars'
    },

    // Fats
    {
        term: 'Unsalted Butter',
        definition: 'The gold standard for baking. It allows you to control the salt content. Contains about 80% fat and 20% water/milk solids.',
        category: 'Fats'
    },
    {
        term: 'Salted Butter',
        definition: 'Butter with added salt. The salt content varies by brand, which can make it risky for precise baking, but it is delicious in savory goods or simple cookies.',
        category: 'Fats'
    },
    {
        term: 'Vegetable Shortening',
        definition: '100% solid fat made from hydrogenated vegetable oils. It has a higher melting point than butter, leading to cookies that spread less and very flaky pie crusts, but lacks flavor.',
        category: 'Fats'
    },
    {
        term: 'Lard',
        definition: 'Rendered pork fat. It produces exceptionally flaky pastries and pie crusts due to its large fat crystals.',
        category: 'Fats'
    },
    {
        term: 'Coconut Oil',
        definition: 'A plant-based fat that is solid at room temperature. A popular dairy-free butter substitute, though it can add a coconut flavor unless "refined".',
        category: 'Fats'
    },
    {
        term: 'Brown Butter (Beurre Noisette)',
        definition: 'Butter that has been melted and cooked until the milk solids toast and turn golden brown. Adds an incredible nutty, toffee-like flavor.',
        category: 'Fats'
    },

    // Dairy
    {
        term: 'Buttermilk',
        definition: 'Originally the liquid left after churning butter, now cultured milk. Its acidity tenderizes gluten and activates baking soda.',
        category: 'Dairy'
    },
    {
        term: 'Heavy Cream',
        definition: 'Milk with a high fat content (at least 36%). It whips well and adds richness to ganache, caramel, and scones.',
        category: 'Dairy'
    },
    {
        term: 'Evaporated Milk',
        definition: 'Milk that has had about 60% of its water removed. It is shelf-stable and adds creaminess without the heaviness of cream.',
        category: 'Dairy'
    },
    {
        term: 'Sweetened Condensed Milk',
        definition: 'Evaporated milk with added sugar. It is thick, syrupy, and used in key lime pie, fudge, and tres leches cake.',
        category: 'Dairy'
    },
    {
        term: 'Mascarpone',
        definition: 'A rich, creamy Italian cheese with a high fat content. Essential for Tiramisu and makes a stable, less tangy frosting than cream cheese.',
        category: 'Dairy'
    },
    {
        term: 'Crème Fraîche',
        definition: 'A cultured cream similar to sour cream but with a higher fat content and less acidity. It does not curdle when heated, making it great for sauces.',
        category: 'Dairy'
    },

    // Chocolate
    {
        term: 'Cocoa Powder (Natural)',
        definition: 'Pure roasted cocoa beans with most fat removed. It is acidic and light brown. Reacts with baking soda.',
        category: 'Chocolate'
    },
    {
        term: 'Cocoa Powder (Dutch-Process)',
        definition: 'Cocoa treated with an alkali to neutralize acidity. It is darker, mellower, and dissolves easier. Usually paired with baking powder.',
        category: 'Chocolate'
    },
    {
        term: 'Couverture Chocolate',
        definition: 'High-quality chocolate with a higher percentage of cocoa butter (31%+). It melts smoothly and is ideal for tempering and dipping.',
        category: 'Chocolate'
    },
    {
        term: 'Cacao Nibs',
        definition: 'Crushed bits of roasted cocoa beans. They add a crunchy texture and intense, bitter chocolate flavor without sweetness.',
        category: 'Chocolate'
    },

    // Additives & Flavorings
    {
        term: 'Cream of Tartar',
        definition: 'An acidic powder used to stabilize egg whites in meringues and to prevent sugar crystallization in syrups.',
        category: 'Additives'
    },
    {
        term: 'Vanilla Extract',
        definition: 'A solution containing the flavor compound vanillin. "Pure" extract comes from vanilla beans; "imitation" is synthetic but bakes well.',
        category: 'Additives'
    },
    {
        term: 'Cornstarch',
        definition: 'A fine powder derived from corn. Used as a thickener for puddings and fruit fillings, or to "soften" flour proteins in cakes.',
        category: 'Additives'
    },
    {
        term: 'Gelatin',
        definition: 'A protein derived from collagen used to set mousses, mirror glazes, and stabilized whipped cream. Must be "bloomed" in cold water first.',
        category: 'Additives'
    },
    {
        term: 'Xanthan Gum',
        definition: 'A common additive in gluten-free baking. It mimics the binding and elastic properties of gluten, helping structure hold together.',
        category: 'Additives'
    },
    {
        term: 'Espresso Powder',
        definition: 'Intensely concentrated instant coffee. A teaspoon enhances and deepens the flavor of chocolate desserts without making them taste like coffee.',
        category: 'Additives'
    }
];

const categories = ['All', ...Array.from(new Set(glossaryData.map(item => item.category)))];

const FaqItem: React.FC<{ title: string; category: string; children: React.ReactNode }> = ({ title, category, children }) => (
    <details className="border-b border-brand-border py-4 group">
        <summary className="p-1 cursor-pointer flex justify-between items-center font-bold text-brand-text-title group-hover:text-brand-pink transition-colors">
            <div className="flex items-center gap-3">
                <span className="text-lg">{title}</span>
                <span className="text-xs font-normal px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full uppercase tracking-wide">{category}</span>
            </div>
            <ChevronRightIcon className="accordion-arrow w-5 h-5 text-brand-pink transition-transform duration-300" />
        </summary>
        <div className="px-1 pt-2 text-brand-text-body/90 leading-relaxed">
            {children}
        </div>
    </details>
);


export const IngredientGlossary: React.FC<IngredientGlossaryProps> = ({ setActiveTool, breadcrumbs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredData = useMemo(() => {
        let data = glossaryData;

        if (selectedCategory !== 'All') {
            data = data.filter(item => item.category === selectedCategory);
        }

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            data = data.filter(item =>
                item.term.toLowerCase().includes(lowerCaseSearch) ||
                item.definition.toLowerCase().includes(lowerCaseSearch)
            );
        }

        // Sort alphabetically
        return data.sort((a, b) => a.term.localeCompare(b.term));
    }, [searchTerm, selectedCategory]);

    return (
        <ToolContainer
            title="Free Baking Ingredient Glossary"
            description="Your free quick reference guide to common baking ingredients. Understand the 'why' behind your recipes by learning about different flours, sugars, and leaveners."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="ingredient-glossary"
        >
            <div className="max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search ingredients (e.g., 'yeast', 'shortening')..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all"
                                aria-label="Search ingredients"
                            />
                        </div>
                        <div className="relative min-w-[200px]">
                            <FilterIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full pl-10 pr-8 py-3 bg-gray-50 border border-brand-border rounded-xl appearance-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink cursor-pointer"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <ChevronRightIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-border shadow-sm min-h-[400px]">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-brand-border">
                        <h3 className="font-serif font-bold text-2xl text-brand-text-title">
                            {selectedCategory === 'All' ? 'All Ingredients' : selectedCategory}
                        </h3>
                        <span className="text-sm text-brand-text-body/60 font-medium bg-gray-100 px-3 py-1 rounded-full">
                            {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    <div className="space-y-2">
                        {filteredData.length > 0 ? (
                            filteredData.map(item => (
                                <FaqItem key={item.term} title={item.term} category={item.category}>
                                    <p>{item.definition}</p>
                                </FaqItem>
                            ))
                        ) : (
                            <div className="text-center py-20 text-brand-text-body/70">
                                <p className="font-bold text-xl text-brand-text-title mb-2">No ingredients found</p>
                                <p>Try adjusting your search or category filter.</p>
                                <button
                                    onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                                    className="mt-4 text-brand-pink font-bold hover:underline"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
