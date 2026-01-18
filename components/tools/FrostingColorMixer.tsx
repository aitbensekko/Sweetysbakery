import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { PaletteIcon, SearchIcon } from '../Icons';

interface FrostingColorMixerProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface ColorRecipe {
    name: string;
    hex: string;
    recipe: { color: string; parts: number; hex: string; isTouch?: boolean }[];
}

interface ColorCategory {
    category: string;
    colors: ColorRecipe[];
}

// Helper to map common food coloring names to hex codes for the visual drops
const BASE_COLORS: Record<string, string> = {
    'Pink': '#FFC0CB',
    'Red': '#FF0000',
    'Yellow': '#FFFF00',
    'Orange': '#FFA500',
    'Blue': '#0000FF',
    'Green': '#008000',
    'Purple': '#800080',
    'Brown': '#A52A2A',
    'Black': '#000000',
    'Leaf Green': '#228B22',
    'Royal Blue': '#4169E1',
    'Violet': '#EE82EE',
    'Sky Blue': '#87CEEB',
    'Gold': '#FFD700',
    'Teal': '#008080',
    'Rose': '#FF007F',
};

const colorData: ColorCategory[] = [
    {
        category: 'Trendy & Boho',
        colors: [
            { name: 'Terracotta', hex: '#E2725B', recipe: [{ color: 'Orange', parts: 4, hex: BASE_COLORS['Orange'] }, { color: 'Brown', parts: 1, hex: BASE_COLORS['Brown'] }, { color: 'Red', parts: 1, hex: BASE_COLORS['Red'], isTouch: true }] },
            { name: 'Rust', hex: '#B7410E', recipe: [{ color: 'Orange', parts: 8, hex: BASE_COLORS['Orange'] }, { color: 'Red', parts: 2, hex: BASE_COLORS['Red'] }, { color: 'Brown', parts: 1, hex: BASE_COLORS['Brown'] }] },
            { name: 'Mustard', hex: '#FFDB58', recipe: [{ color: 'Yellow', parts: 6, hex: BASE_COLORS['Yellow'] }, { color: 'Orange', parts: 1, hex: BASE_COLORS['Orange'] }, { color: 'Brown', parts: 1, hex: BASE_COLORS['Brown'], isTouch: true }] },
            { name: 'Dusty Blue', hex: '#779ECB', recipe: [{ color: 'Blue', parts: 3, hex: BASE_COLORS['Blue'] }, { color: 'Black', parts: 1, hex: BASE_COLORS['Black'], isTouch: true }, { color: 'Purple', parts: 1, hex: BASE_COLORS['Purple'], isTouch: true }] },
            { name: 'Mauve', hex: '#E0B0FF', recipe: [{ color: 'Pink', parts: 4, hex: BASE_COLORS['Pink'] }, { color: 'Purple', parts: 1, hex: BASE_COLORS['Purple'] }, { color: 'Black', parts: 1, hex: BASE_COLORS['Black'], isTouch: true }] },
            { name: 'Eucalyptus', hex: '#5F8575', recipe: [{ color: 'Green', parts: 3, hex: BASE_COLORS['Green'] }, { color: 'Blue', parts: 1, hex: BASE_COLORS['Blue'] }, { color: 'Black', parts: 1, hex: BASE_COLORS['Black'], isTouch: true }] },
        ]
    },
    {
        category: 'Pinks & Reds',
        colors: [
            { name: 'Dusty Rose', hex: '#DCAE96', recipe: [{ color: 'Pink', parts: 3, hex: BASE_COLORS['Pink'] }, { color: 'Brown', parts: 1, hex: BASE_COLORS['Brown'] }] },
            { name: 'Coral', hex: '#FF7F50', recipe: [{ color: 'Pink', parts: 3, hex: BASE_COLORS['Pink'] }, { color: 'Yellow', parts: 2, hex: BASE_COLORS['Yellow'] }] },
            { name: 'Burgundy', hex: '#800020', recipe: [{ color: 'Red', parts: 5, hex: BASE_COLORS['Red'] }, { color: 'Purple', parts: 1, hex: BASE_COLORS['Purple'] }] },
            { name: 'Magenta', hex: '#FF00FF', recipe: [{ color: 'Pink', parts: 2, hex: BASE_COLORS['Pink'] }, { color: 'Purple', parts: 1, hex: BASE_COLORS['Purple'] }] },
            { name: 'Peach', hex: '#FFDAB9', recipe: [{ color: 'Orange', parts: 1, hex: BASE_COLORS['Orange'] }, { color: 'Pink', parts: 1, hex: BASE_COLORS['Pink'] }] },
        ]
    },
    {
        category: 'Oranges & Yellows',
        colors: [
            { name: 'Marigold', hex: '#EAA221', recipe: [{ color: 'Yellow', parts: 4, hex: BASE_COLORS['Yellow'] }, { color: 'Orange', parts: 1, hex: BASE_COLORS['Orange'] }] },
            { name: 'Gold', hex: '#FFD700', recipe: [{ color: 'Yellow', parts: 10, hex: BASE_COLORS['Yellow'] }, { color: 'Orange', parts: 3, hex: BASE_COLORS['Orange'] }, { color: 'Red', parts: 1, hex: BASE_COLORS['Red'] }] },
            { name: 'Apricot', hex: '#FBCEB1', recipe: [{ color: 'Orange', parts: 2, hex: BASE_COLORS['Orange'] }, { color: 'Gold', parts: 1, hex: BASE_COLORS['Gold'] }] },
        ]
    },
    {
        category: 'Greens',
        colors: [
            { name: 'Mint Green', hex: '#98FF98', recipe: [{ color: 'Green', parts: 2, hex: BASE_COLORS['Green'] }, { color: 'Yellow', parts: 1, hex: BASE_COLORS['Yellow'] }] },
            { name: 'Sage Green', hex: '#B2AC88', recipe: [{ color: 'Leaf Green', parts: 3, hex: BASE_COLORS['Leaf Green'] }, { color: 'Brown', parts: 1, hex: BASE_COLORS['Brown'] }] },
            { name: 'Olive Green', hex: '#808000', recipe: [{ color: 'Leaf Green', parts: 3, hex: BASE_COLORS['Leaf Green'] }, { color: 'Yellow', parts: 1, hex: BASE_COLORS['Yellow'] }, { color: 'Black', parts: 1, hex: BASE_COLORS['Black'], isTouch: true }] },
            { name: 'Teal', hex: '#008080', recipe: [{ color: 'Blue', parts: 2, hex: BASE_COLORS['Blue'] }, { color: 'Green', parts: 1, hex: BASE_COLORS['Green'] }] },
            { name: 'Forest Green', hex: '#228B22', recipe: [{ color: 'Green', parts: 3, hex: BASE_COLORS['Green'] }, { color: 'Black', parts: 1, hex: BASE_COLORS['Black'] }] },
        ]
    },
    {
        category: 'Blues & Purples',
        colors: [
            { name: 'Lavender', hex: '#E6E6FA', recipe: [{ color: 'Pink', parts: 3, hex: BASE_COLORS['Pink'] }, { color: 'Blue', parts: 1, hex: BASE_COLORS['Blue'] }] },
            { name: 'Periwinkle', hex: '#CCCCFF', recipe: [{ color: 'Royal Blue', parts: 1, hex: BASE_COLORS['Royal Blue'] }, { color: 'Violet', parts: 1, hex: BASE_COLORS['Violet'] }] },
            { name: 'Navy Blue', hex: '#000080', recipe: [{ color: 'Royal Blue', parts: 4, hex: BASE_COLORS['Royal Blue'] }, { color: 'Black', parts: 1, hex: BASE_COLORS['Black'] }] },
            { name: 'Aqua', hex: '#00FFFF', recipe: [{ color: 'Sky Blue', parts: 2, hex: BASE_COLORS['Sky Blue'] }, { color: 'Leaf Green', parts: 1, hex: BASE_COLORS['Leaf Green'] }] },
        ]
    },
    {
        category: 'Browns & Neutrals',
        colors: [
            { name: 'Ivory', hex: '#FFFFF0', recipe: [{ color: 'Brown', parts: 1, hex: BASE_COLORS['Brown'], isTouch: true }] },
            { name: 'Light Gray', hex: '#D3D3D3', recipe: [{ color: 'Black', parts: 1, hex: BASE_COLORS['Black'], isTouch: true }] },
            { name: 'Charcoal', hex: '#36454F', recipe: [{ color: 'Black', parts: 2, hex: BASE_COLORS['Black'] }, { color: 'Royal Blue', parts: 1, hex: BASE_COLORS['Royal Blue'], isTouch: true }] },
            { name: 'Taupe', hex: '#483C32', recipe: [{ color: 'Brown', parts: 2, hex: BASE_COLORS['Brown'] }, { color: 'Black', parts: 1, hex: BASE_COLORS['Black'] }] },
        ]
    }
];

export const FrostingColorMixer: React.FC<FrostingColorMixerProps> = ({ setActiveTool, breadcrumbs }) => {
    const [selectedColor, setSelectedColor] = useState<ColorRecipe | null>(colorData[0].colors[0]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCategories = useMemo(() => {
        if (!searchTerm) return colorData;
        const lowerSearch = searchTerm.toLowerCase();

        return colorData.map(cat => ({
            ...cat,
            colors: cat.colors.filter(c => c.name.toLowerCase().includes(lowerSearch))
        })).filter(cat => cat.colors.length > 0);
    }, [searchTerm]);

    return (
        <ToolContainer
            title="Free Frosting Color Mixer Chart"
            description="Create custom buttercream and royal icing colors with our free food coloring mixing chart. It provides color drop ratios to achieve the perfect shade."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="frosting-color-mixer"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search colors (e.g., 'sage', 'terracotta')..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow shadow-sm"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-8">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map(category => (
                                <div key={category.category}>
                                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-brand-pink rounded-full"></span>
                                        {category.category}
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                                        {category.colors.map(color => (
                                            <button
                                                key={color.name}
                                                onClick={() => setSelectedColor(color)}
                                                className={`group relative p-2 rounded-xl border-2 transition-all duration-200 ${selectedColor?.name === color.name ? 'border-brand-pink bg-brand-pink-light/30 shadow-md ring-2 ring-brand-pink/20' : 'border-transparent hover:border-brand-pink/30 hover:bg-gray-50'}`}
                                            >
                                                <div style={{ backgroundColor: color.hex }} className="w-full aspect-square rounded-lg shadow-sm border border-black/5 mb-2 group-hover:scale-105 transition-transform duration-200"></div>
                                                <p className="text-xs font-bold text-brand-text-body truncate">{color.name}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-brand-text-body/60">
                                <p>No colors found matching "{searchTerm}"</p>
                            </div>
                        )}
                    </div>

                    <div className="lg:sticky lg:top-6">
                        {selectedColor ? (
                            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-lg fade-in">
                                <div className="text-center mb-6">
                                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-2">{selectedColor.name}</h3>
                                    <div className="relative inline-block">
                                        <div style={{ backgroundColor: selectedColor.hex }} className="w-32 h-32 rounded-full shadow-inner border-4 border-white ring-1 ring-black/5 mx-auto"></div>
                                        <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-full text-xs font-bold text-brand-text-body shadow-sm border border-gray-100">
                                            Result
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 mb-6">
                                    <h4 className="font-bold text-sm text-brand-text-body/70 uppercase tracking-wide mb-4 text-center">Mixing Formula</h4>
                                    <div className="space-y-4">
                                        {selectedColor.recipe.map((r, i) => (
                                            <div key={i} className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                    <div className="flex -space-x-2 py-1 pl-2 overflow-x-auto no-scrollbar max-w-[150px] sm:max-w-[200px]">
                                                        {[...Array(r.parts)].map((_, idx) => (
                                                            <div
                                                                key={idx}
                                                                style={{ backgroundColor: r.hex }}
                                                                className="w-6 h-6 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                                                                title={`${r.color} drop`}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                    <span className="font-bold text-brand-text-title whitespace-nowrap flex-shrink-0">{r.parts} part{r.parts > 1 ? 's' : ''}</span>
                                                </div>
                                                <span className="text-sm font-medium text-brand-text-body text-right flex-shrink-0">{r.color} {r.isTouch && <span className="block text-xs text-gray-500 font-normal">(tiny amount)</span>}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                                    <p className="flex gap-2 items-start">
                                        <span className="text-lg">💡</span>
                                        <span>
                                            <strong>Pro Tip:</strong> Start with a small amount of base frosting (about 1/4 cup) to test the color before mixing a full batch.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300 text-center h-64 flex flex-col items-center justify-center">
                                <PaletteIcon className="w-12 h-12 text-gray-300 mb-4" />
                                <p className="font-bold text-gray-400">Select a color to see the recipe</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-border">
                    <h3 className="font-serif font-bold text-2xl mb-6 text-brand-text-title">Tips for Perfect Frosting Colors</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
                            <h4 className="font-bold text-lg text-brand-pink mb-2">Start Small</h4>
                            <p className="text-brand-text-body/80 text-sm leading-relaxed">It's easier to add color than to remove it. Use a toothpick to add tiny amounts of gel food coloring at a time, especially for dark colors like black or red.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
                            <h4 className="font-bold text-lg text-brand-pink mb-2">Let it Deepen</h4>
                            <p className="text-brand-text-body/80 text-sm leading-relaxed">Colors, especially reds, blues, and blacks, will darken or "develop" over time. Mix your color a few hours ahead for the most accurate shade.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
                            <h4 className="font-bold text-lg text-brand-pink mb-2">Mute Your Colors</h4>
                            <p className="text-brand-text-body/80 text-sm leading-relaxed">To get dusty or muted tones (like sage green or dusty rose), add a tiny touch of the color's opposite on the color wheel, or a speck of black/brown.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
                            <h4 className="font-bold text-lg text-brand-pink mb-2">Beware the Base</h4>
                            <p className="text-brand-text-body/80 text-sm leading-relaxed">These ratios assume a pure white base. If your frosting is yellowish from butter, it will affect the final color (e.g., blue + yellow butter = green).</p>
                        </div>
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
