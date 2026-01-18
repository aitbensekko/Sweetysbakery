import React, { useState, useRef } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import {
    PrintIcon,
    DownloadIcon,
    AlertTriangleIcon,
    CheckCircleIcon,
    MyArtIcon,
    PaletteIcon
} from '../Icons';

interface LabelGeneratorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface NutritionFacts {
    calories: string;
    totalFat: string;
    saturdatedFat: string;
    transFat: string;
    cholesterol: string;
    sodium: string;
    totalCarbs: string;
    dietaryFiber: string;
    sugars: string;
    protein: string;
}

export const LabelGenerator: React.FC<LabelGeneratorProps> = ({ setActiveTool, breadcrumbs }) => {
    // Product Details
    const [productName, setProductName] = useState('Chocolate Chip Cookies');
    const [description, setDescription] = useState('Homemade with premium chocolate chunks');
    const [netWeight, setNetWeight] = useState('12 oz (340g)');
    const [ingredients, setIngredients] = useState('Flour, Butter, Sugar, Chocolate Chips, Eggs, Vanilla Extract, Baking Soda, Salt');

    // Branding
    const [logo, setLogo] = useState<string | null>(null);
    const [accentColor, setAccentColor] = useState('#000000');

    // Allergens
    const ALLERGENS = ['Milk', 'Eggs', 'Peanuts', 'Tree Nuts', 'Soy', 'Wheat', 'Fish', 'Shellfish'];
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>(['Milk', 'Eggs', 'Wheat', 'Soy']);

    // Nutrition
    const [showNutrition, setShowNutrition] = useState(true);
    const [nutrition, setNutrition] = useState<NutritionFacts>({
        calories: '150',
        totalFat: '7g',
        saturdatedFat: '4g',
        transFat: '0g',
        cholesterol: '20mg',
        sodium: '110mg',
        totalCarbs: '20g',
        dietaryFiber: '1g',
        sugars: '12g',
        protein: '2g'
    });

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setLogo(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const toggleAllergen = (allergen: string) => {
        if (selectedAllergens.includes(allergen)) {
            setSelectedAllergens(selectedAllergens.filter(a => a !== allergen));
        } else {
            setSelectedAllergens([...selectedAllergens, allergen]);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <ToolContainer
            title="Bakery Label Generator"
            description="Create professional, print-ready packaging labels with nutrition facts and allergen warnings."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="label-generator"
        >
            <div className="grid lg:grid-cols-2 gap-8 no-print">
                {/* Left Column: Editor */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm space-y-4">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">1. Product Details</h3>

                        <div>
                            <label className="block text-sm font-bold text-brand-text-body mb-1">Product Name</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={e => setProductName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-text-body mb-1">Description / Tagline</label>
                            <input
                                type="text"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-text-body mb-1">Net Weight</label>
                            <input
                                type="text"
                                value={netWeight}
                                onChange={e => setNetWeight(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="e.g. 12 oz (340g)"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-text-body mb-1">Ingredients List</label>
                            <textarea
                                value={ingredients}
                                onChange={e => setIngredients(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg h-24 text-sm"
                                placeholder="List ingredients in descending order by weight..."
                            />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm space-y-4">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">2. Branding & Allergens</h3>

                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Logo (Optional)</label>
                                <input type="file" accept="image/*" onChange={handleLogoUpload} className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-pink-light file:text-brand-pink hover:file:bg-brand-pink-light/80" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Accent Color</label>
                                <input type="color" value={accentColor} onChange={e => setAccentColor(e.target.value)} className="h-10 w-20 rounded cursor-pointer" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-text-body mb-2">Contains Allergens:</label>
                            <div className="flex flex-wrap gap-2">
                                {ALLERGENS.map(allergen => (
                                    <button
                                        key={allergen}
                                        onClick={() => toggleAllergen(allergen)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${selectedAllergens.includes(allergen)
                                            ? 'bg-red-50 border-red-200 text-red-700'
                                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {allergen}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">3. Nutrition Facts</h3>
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input type="checkbox" checked={showNutrition} onChange={e => setShowNutrition(e.target.checked)} className="rounded text-brand-pink focus:ring-brand-pink" />
                                Show on Label
                            </label>
                        </div>

                        {showNutrition && (
                            <div className="grid grid-cols-2 gap-4">
                                {Object.keys(nutrition).map((key) => (
                                    <div key={key}>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </label>
                                        <input
                                            type="text"
                                            value={nutrition[key as keyof NutritionFacts]}
                                            onChange={e => setNutrition({ ...nutrition, [key]: e.target.value })}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Preview */}
                <div className="lg:sticky top-6 h-fit space-y-6">
                    <div className="bg-gray-100 p-8 rounded-3xl border border-gray-200 flex flex-col items-center justify-center min-h-[500px]">
                        <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-wider text-sm">Live Preview</h3>

                        {/* THE LABEL */}
                        <div id="label-preview" className="bg-white w-[350px] p-6 shadow-xl rounded-sm border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: accentColor }}></div>

                            <div className="text-center mb-4">
                                {logo && <img src={logo} alt="Logo" className="h-16 mx-auto mb-2 object-contain" />}
                                <h2 className="font-serif font-bold text-2xl text-gray-900 leading-tight">{productName}</h2>
                                <p className="text-gray-500 text-sm italic mt-1">{description}</p>
                            </div>

                            <div className="border-t border-b border-gray-200 py-3 my-4">
                                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                                    <span className="font-bold text-gray-900">INGREDIENTS:</span> {ingredients}
                                </p>
                                {selectedAllergens.length > 0 && (
                                    <p className="text-xs font-bold text-gray-900 mt-2">
                                        CONTAINS: {selectedAllergens.join(', ').toUpperCase()}
                                    </p>
                                )}
                            </div>

                            {showNutrition && (
                                <div className="border-2 border-black p-2 text-xs font-sans">
                                    <h4 className="font-black text-xl border-b-4 border-black mb-1">Nutrition Facts</h4>
                                    <p className="font-bold border-b border-black mb-1">Serving size <span className="float-right">1 piece</span></p>
                                    <p className="font-black text-lg border-b-4 border-black mb-1 flex justify-between">
                                        <span>Calories</span>
                                        <span>{nutrition.calories}</span>
                                    </p>
                                    <div className="space-y-0.5 text-[10px]">
                                        <p className="border-b border-gray-300"><span className="font-bold">Total Fat</span> {nutrition.totalFat} <span className="float-right font-bold">--%</span></p>
                                        <p className="border-b border-gray-300 pl-2">Saturated Fat {nutrition.saturdatedFat} <span className="float-right font-bold">--%</span></p>
                                        <p className="border-b border-gray-300 pl-2">Trans Fat {nutrition.transFat}</p>
                                        <p className="border-b border-gray-300"><span className="font-bold">Cholesterol</span> {nutrition.cholesterol} <span className="float-right font-bold">--%</span></p>
                                        <p className="border-b border-gray-300"><span className="font-bold">Sodium</span> {nutrition.sodium} <span className="float-right font-bold">--%</span></p>
                                        <p className="border-b border-gray-300"><span className="font-bold">Total Carb.</span> {nutrition.totalCarbs} <span className="float-right font-bold">--%</span></p>
                                        <p className="border-b border-gray-300 pl-2">Dietary Fiber {nutrition.dietaryFiber} <span className="float-right font-bold">--%</span></p>
                                        <p className="border-b border-gray-300 pl-2">Total Sugars {nutrition.sugars}</p>
                                        <p className="font-bold">Protein {nutrition.protein}</p>
                                    </div>
                                </div>
                            )}

                            <div className="mt-4 text-center">
                                <p className="font-bold text-lg text-gray-900">Net Wt. {netWeight}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handlePrint}
                        className="w-full bg-brand-pink text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                        <PrintIcon className="w-6 h-6" />
                        Print Labels
                    </button>
                    <p className="text-center text-xs text-gray-500">
                        Tip: Use your browser's print settings to scale the label or print multiple copies per page.
                    </p>
                </div>
            </div>

            {/* Print-only Styles */}
            <style jsx global>{`
                @media print {
                    @page { margin: 0.5cm; }
                    body * { visibility: hidden; }
                    #label-preview, #label-preview * { visibility: visible; }
                    #label-preview { 
                        position: absolute; 
                        left: 0; 
                        top: 0; 
                        width: 100%; 
                        max-width: 400px;
                        margin: 0;
                        box-shadow: none;
                        border: 1px solid #000;
                    }
                    /* Simple grid layout for printing multiple if user copies element manually (advanced) - for now just print one */
                }
            `}</style>
        </ToolContainer>
    );
};
