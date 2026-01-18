import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { SearchIcon, ChevronRightIcon } from '../Icons';

interface FlavorPairingGuideProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const flavorData: Record<string, Record<string, string[]>> = {
    'Chocolate': {
        'Classic Pairings': ['Vanilla', 'Caramel', 'Raspberry', 'Peanut Butter', 'Coffee'],
        'Fruits': ['Orange', 'Strawberry', 'Cherry', 'Banana', 'Pear', 'Passion Fruit'],
        'Spices & Herbs': ['Cinnamon', 'Chili', 'Cardamom', 'Mint', 'Lavender', 'Sea Salt'],
        'Nuts & Other': ['Hazelnut (Nutella)', 'Almond', 'Coconut', 'Bacon', 'Red Wine', 'Stout Beer'],
    },
    'Vanilla': {
        'Classic Pairings': ['Strawberry', 'Chocolate', 'Caramel', 'Lemon', 'Blueberry'],
        'Fruits': ['Peach', 'Cherry', 'Apple', 'Orange', 'Fig', 'Rhubarb'],
        'Spices & Herbs': ['Cardamom', 'Cinnamon', 'Lavender', 'Rosemary', 'Nutmeg', 'Saffron'],
        'Nuts & Other': ['Almond', 'Pecan', 'Pistachio', 'Coffee', 'Honey', 'Bourbon'],
    },
    'Lemon': {
        'Classic Pairings': ['Blueberry', 'Raspberry', 'Poppy Seed', 'Vanilla', 'Meringue'],
        'Fruits': ['Strawberry', 'Blackberry', 'Coconut', 'Lime', 'Peach', 'Apricot'],
        'Spices & Herbs': ['Thyme', 'Rosemary', 'Lavender', 'Ginger', 'Mint', 'Basil'],
        'Nuts & Other': ['Almond', 'Pistachio', 'White Chocolate', 'Honey', 'Gin', 'Earl Grey Tea'],
    },
    'Strawberry': {
        'Classic Pairings': ['Vanilla (Cream)', 'Chocolate', 'Lemon', 'Rhubarb', 'Banana'],
        'Fruits': ['Lime', 'Coconut', 'Peach', 'Watermelon', 'Kiwi', 'Pineapple'],
        'Spices & Herbs': ['Basil', 'Mint', 'Black Pepper', 'Balsamic Vinegar', 'Rose'],
        'Nuts & Other': ['Almond', 'Pistachio', 'White Chocolate', 'Cream Cheese', 'Champagne'],
    },
    'Apple': {
        'Classic Pairings': ['Cinnamon', 'Caramel', 'Cheddar Cheese', 'Walnut', 'Oats'],
        'Fruits': ['Cranberry', 'Pear', 'Blackberry', 'Lemon', 'Fig', 'Pomegranate'],
        'Spices & Herbs': ['Nutmeg', 'Ginger', 'Cardamom', 'Thyme', 'Rosemary', 'Allspice'],
        'Nuts & Other': ['Pecan', 'Almond', 'Maple Syrup', 'Bourbon', 'Pork (Bacon)'],
    },
    'Coffee': {
        'Classic Pairings': ['Chocolate', 'Caramel', 'Vanilla', 'Hazelnut', 'Cinnamon'],
        'Fruits': ['Orange', 'Cherry', 'Date', 'Banana', 'Fig'],
        'Spices & Herbs': ['Cardamom', 'Nutmeg', 'Anise', 'Chicory', 'Clove'],
        'Nuts & Other': ['Almond', 'Walnut', 'Whiskey', 'Dark Chocolate', 'Cream', 'Irish Cream'],
    },
    'Caramel': {
        'Classic Pairings': ['Sea Salt', 'Apple', 'Chocolate', 'Banana', 'Coffee'],
        'Fruits': ['Pear', 'Fig', 'Peach', 'Apricot', 'Date'],
        'Spices & Herbs': ['Cinnamon', 'Ginger', 'Vanilla Bean', 'Chai Spices'],
        'Nuts & Other': ['Pecan', 'Walnut', 'Bourbon', 'Pretzels', 'Popcorn', 'Rum'],
    },
    'Lavender': {
        'Classic Pairings': ['Honey', 'Lemon', 'Blueberry', 'Vanilla'],
        'Fruits': ['Blackberry', 'Fig', 'Pear', 'Apricot', 'Peach'],
        'Spices & Herbs': ['Rosemary', 'Thyme', 'Mint'],
        'Nuts & Other': ['White Chocolate', 'Gin', 'Almond', 'Earl Grey Tea', 'Pistachio'],
    },
    'Pumpkin': {
        'Classic Pairings': ['Cream Cheese', 'Cinnamon', 'Nutmeg', 'Maple Syrup'],
        'Fruits': ['Apple', 'Cranberry', 'Orange', 'Coconut'],
        'Spices & Herbs': ['Ginger', 'Clove', 'Allspice', 'Chai Spices', 'Sage'],
        'Nuts & Other': ['Pecan', 'Walnut', 'Caramel', 'Bourbon', 'Chocolate'],
    },
    'Banana': {
        'Classic Pairings': ['Peanut Butter', 'Chocolate', 'Walnut', 'Caramel'],
        'Fruits': ['Strawberry', 'Blueberry', 'Coconut', 'Pineapple', 'Mango'],
        'Spices & Herbs': ['Cinnamon', 'Nutmeg', 'Cardamom', 'Ginger'],
        'Nuts & Other': ['Rum', 'Honey', 'Maple Syrup', 'Coffee', 'Oats'],
    },
    'Raspberry': {
        'Classic Pairings': ['Chocolate', 'Lemon', 'White Chocolate', 'Almond'],
        'Fruits': ['Peach', 'Mango', 'Coconut', 'Lychee', 'Pear'],
        'Spices & Herbs': ['Mint', 'Basil', 'Ginger', 'Thyme', 'Rose'],
        'Nuts & Other': ['Pistachio', 'Hazelnut', 'Champagne', 'Cream Cheese', 'Honey'],
    },
    'Coconut': {
        'Classic Pairings': ['Pineapple', 'Lime', 'Chocolate', 'Banana'],
        'Fruits': ['Mango', 'Passion Fruit', 'Strawberry', 'Lemon', 'Raspberry'],
        'Spices & Herbs': ['Curry', 'Ginger', 'Lemongrass', 'Cilantro'],
        'Nuts & Other': ['Almond', 'Rum', 'Caramel', 'White Chocolate', 'Macadamia Nut'],
    }
};

const primaryFlavors = Object.keys(flavorData).sort();

export const FlavorPairingGuide: React.FC<FlavorPairingGuideProps> = ({ setActiveTool, breadcrumbs }) => {
    const [selectedFlavor, setSelectedFlavor] = useState('Chocolate');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFlavors = useMemo(() => {
        if (!searchTerm) return primaryFlavors;
        return primaryFlavors.filter(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);

    const pairings = flavorData[selectedFlavor];

    return (
        <ToolContainer
            title="Free Flavor Pairing Guide for Baking"
            description="Discover the perfect flavor combinations for your cakes, cookies, and pastries. Our free, interactive guide helps you pair ingredients like a pro."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="flavor-pairing-guide"
        >
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Flavor Selection */}
                <div className="md:col-span-1 bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Choose a Flavor</h3>
                    <div className="relative mb-4">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search flavors..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-brand-border rounded-lg text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all"
                        />
                    </div>
                    <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        {filteredFlavors.length > 0 ? (
                            filteredFlavors.map(flavor => (
                                <button
                                    key={flavor}
                                    onClick={() => setSelectedFlavor(flavor)}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group ${selectedFlavor === flavor ? 'bg-brand-pink text-white shadow-md' : 'bg-white hover:bg-brand-pink-light/50 text-brand-text-body'}`}
                                >
                                    {flavor}
                                    {selectedFlavor === flavor && <ChevronRightIcon className="w-4 h-4" />}
                                </button>
                            ))
                        ) : (
                            <p className="text-sm text-brand-text-body/60 text-center py-4">No flavors found.</p>
                        )}
                    </div>
                </div>

                {/* Pairings Display */}
                <div className="md:col-span-2">
                    <div className="bg-brand-pink-light/30 p-6 rounded-2xl border border-brand-pink/20 mb-6">
                        <h3 className="font-serif font-bold text-3xl text-brand-text-title mb-2">
                            {selectedFlavor}
                        </h3>
                        <p className="text-brand-text-body/80">
                            Explore the best flavor matches to create delicious, balanced desserts.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {Object.entries(pairings).map(([category, flavors]) => (
                            <div key={category} className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h4 className="font-bold text-lg text-brand-text-title mb-4 flex items-center gap-2">
                                    <span className={`w-2 h-6 rounded-full ${category === 'Classic Pairings' ? 'bg-brand-pink' : category === 'Fruits' ? 'bg-orange-400' : category === 'Spices & Herbs' ? 'bg-green-500' : 'bg-blue-400'}`}></span>
                                    {category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {flavors.map(f => (
                                        <span key={f} className="bg-gray-50 border border-gray-100 text-brand-text-body font-medium px-4 py-2 rounded-lg hover:bg-brand-pink-light/50 hover:border-brand-pink/30 hover:text-brand-pink transition-colors cursor-default">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 space-y-12 pt-8 border-t border-brand-border">
                {/* SEO Intro Section */}
                <div className="prose prose-pink max-w-none text-center max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">How to Create Professional Flavor Profiles</h2>
                    <p className="text-lg text-brand-text-body/80 leading-relaxed">
                        The difference between a "good" cake and a "memorable" one is often the flavor profile. As professional pastry chefs know, <strong>flavor pairing</strong> isn't random—it's based on balancing the five tastes: sweet, salty, sour, bitter, and umami. Our guide helps you move beyond basic vanilla and chocolate to create sophisticated combinations like <strong>White Chocolate & Lavender</strong>, <strong>Dark Chocolate & Sea Salt</strong>, or <strong>Lemon & Thyme</strong>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-6 text-brand-text-title">4 Rules of Flavor Balancing</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink font-bold flex items-center justify-center">1</span>
                                <div>
                                    <h4 className="font-bold text-brand-text-title">Acid Cuts Fat</h4>
                                    <p className="text-sm text-brand-text-body/80">Rich, fatty desserts (cheesecake, buttercream) need acid (lemon, raspberry, passion fruit) to cleanse the palate and prevent heaviness.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink font-bold flex items-center justify-center">2</span>
                                <div>
                                    <h4 className="font-bold text-brand-text-title">Salt Enhances Sweet</h4>
                                    <p className="text-sm text-brand-text-body/80">Salt suppresses bitterness and makes sugar taste sweeter. Always add a pinch of salt to chocolate and caramel.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink font-bold flex items-center justify-center">3</span>
                                <div>
                                    <h4 className="font-bold text-brand-text-title">Spices Add Depth</h4>
                                    <p className="text-sm text-brand-text-body/80">Warm spices (cinnamon, nutmeg, cardamom) bridge the gap between fruit and dough, making pies and tarts feel cohesive.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink font-bold flex items-center justify-center">4</span>
                                <div>
                                    <h4 className="font-bold text-brand-text-title">Texture is Flavor</h4>
                                    <p className="text-sm text-brand-text-body/80">We "taste" texture! Contrast creamy mousses with crunchy pralines or crumbles.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Trending Combinations</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-pink mb-1">Floral & Citrus</h4>
                                <p className="text-sm font-semibold text-gray-700">Lemon + Lavender</p>
                                <p className="text-xs text-gray-500 mt-1">Perfect for spring tea cakes.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-pink mb-1">Earthy & Sweet</h4>
                                <p className="text-sm font-semibold text-gray-700">Matcha + White Choc</p>
                                <p className="text-xs text-gray-500 mt-1">A modern classic for cookies.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-pink mb-1">Spicy & Rich</h4>
                                <p className="text-sm font-semibold text-gray-700">Dark Choc + Chili</p>
                                <p className="text-xs text-gray-500 mt-1">Warmth that lingers.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-pink mb-1">Nutty & Fruity</h4>
                                <p className="text-sm font-semibold text-gray-700">Pistachio + Raspberry</p>
                                <p className="text-xs text-gray-500 mt-1">Visually stunning contrast.</p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <h4 className="text-sm font-bold text-blue-800 mb-1 flex items-center gap-2">
                                <span className="text-lg">💡</span> Pro Tip
                            </h4>
                            <p className="text-sm text-blue-700">
                                When testing a new pairing, trust your nose! Approximately 80% of what we perceive as "taste" is actually smell. If two ingredients smell good together, they will likely taste good together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
