import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, WaterDropIcon, InfoIcon } from '../Icons';

const FLOUR_TYPES = [
    { name: 'Bread Flour', weight: '500' },
    { name: 'All-Purpose', weight: '500' },
    { name: 'Whole Wheat', weight: '500' },
    { name: '00 Flour (Pizza)', weight: '500' },
    { name: 'Semolina', weight: '500' },
    { name: 'Rye', weight: '500' },
];

interface Item {
    id: number;
    name: string;
    weight: string;
}

interface DoughHydrationCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const ItemInput: React.FC<{
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    title: string;
    placeholder: string;
}> = ({ items, setItems, title, placeholder }) => {

    const handleItemChange = (id: number, field: 'name' | 'weight', value: string) => {
        setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const addItem = () => {
        setItems([...items, { id: Date.now(), name: '', weight: '' }]);
    };

    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            <h3 className="font-bold text-lg mb-2 text-brand-text-title">{title}</h3>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={item.id} className="flex gap-2 items-center">
                        <input
                            type="text"
                            placeholder={`${placeholder} ${index + 1}`}
                            value={item.name}
                            onChange={e => handleItemChange(item.id, 'name', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Weight (g)"
                            value={item.weight}
                            onChange={e => handleItemChange(item.id, 'weight', e.target.value)}
                            className="w-32 px-3 py-2 bg-white border border-brand-border rounded-lg"
                        />
                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 p-1 text-xl font-bold">&times;</button>
                    </div>
                ))}
            </div>
            <button onClick={addItem} className="mt-3 text-sm font-bold text-brand-pink hover:underline">+ Add {placeholder}</button>
        </div>
    );
};

export const DoughHydrationCalculator: React.FC<DoughHydrationCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [flours, setFlours] = useState<Item[]>([
        { id: 1, name: 'Bread Flour', weight: '500' },
    ]);
    const [liquids, setLiquids] = useState<Item[]>([
        { id: 1, name: 'Water', weight: '350' },
    ]);
    const [copied, setCopied] = useState(false);

    const addFlourType = (type: typeof FLOUR_TYPES[0]) => {
        setFlours([...flours, { id: Date.now(), name: type.name, weight: type.weight }]);
    };

    const { totalFlour, totalLiquids, hydration } = useMemo(() => {
        const flourWeight = flours.reduce((sum, item) => sum + (parseFloat(item.weight) || 0), 0);
        const liquidWeight = liquids.reduce((sum, item) => sum + (parseFloat(item.weight) || 0), 0);
        const hyd = flourWeight > 0 ? (liquidWeight / flourWeight) * 100 : 0;
        return {
            totalFlour: flourWeight,
            totalLiquids: liquidWeight,
            hydration: hyd
        };
    }, [flours, liquids]);

    const handleCopy = async () => {
        if (hydration > 0) {
            const textToCopy = `${hydration.toFixed(1)}% Hydration`;
            try {
                await navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                alert('Failed to copy result.');
            }
        }
    };

    return (
        <ToolContainer
            title="Free Dough Hydration Calculator"
            description="Calculate the exact hydration percentage of your bread dough with our free tool. Perfect for bakers looking to control texture and crumb for artisan breads."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="dough-hydration"
        >
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <ItemInput items={flours} setItems={setFlours} title="Flours (in grams)" placeholder="Flour" />

                    {/* Quick Add Flours */}
                    <div>
                        <p className="text-xs font-bold text-brand-text-body/60 uppercase tracking-wide mb-2">Quick Add Flours</p>
                        <div className="flex flex-wrap gap-2">
                            {FLOUR_TYPES.map((type, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => addFlourType(type)}
                                    className="px-3 py-1.5 bg-white border border-brand-border rounded-full text-xs font-medium text-brand-text-body hover:border-brand-pink hover:text-brand-pink transition-colors shadow-sm"
                                >
                                    + {type.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <ItemInput items={liquids} setItems={setLiquids} title="Liquids (in grams)" placeholder="Liquid" />
                </div>
                <div className="bg-brand-pink-light p-6 rounded-lg text-center sticky top-6">
                    <WaterDropIcon className="w-12 h-12 mx-auto text-brand-pink mb-2" />
                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-2">Dough Hydration</h3>
                    <div className="flex items-center justify-center gap-2">
                        <p className="font-serif font-bold text-7xl text-brand-pink">{hydration.toFixed(1)}%</p>
                        <button onClick={handleCopy} title="Copy hydration percentage" className="p-1">
                            {copied ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/50 hover:text-brand-pink" />}
                        </button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm bg-white p-4 rounded-lg border">
                        <div>
                            <p className="font-semibold text-brand-text-body">Total Flour Weight</p>
                            <p className="font-bold text-lg text-brand-text-title">{totalFlour.toLocaleString()} g</p>
                        </div>
                        <div>
                            <p className="font-semibold text-brand-text-body">Total Liquid Weight</p>
                            <p className="font-bold text-lg text-brand-text-title">{totalLiquids.toLocaleString()} g</p>
                        </div>
                    </div>
                </div>
            </div>

            <DoughHydrationCalculatorContent />
        </ToolContainer>
    );
};

const DoughHydrationCalculatorContent: React.FC = () => (
    <div className="mt-12 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">Master High Hydration Dough</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Hydration is the single most important factor in bread baking. It determines whether you get a dense, tight crumb (low hydration) or an open, airy structure with large irregular holes (<strong>high hydration</strong>). Sourdough bakers often aim for <strong>75% to 85% hydration</strong> for that perfect artisan loaf. Our calculator accounts for all liquid sources—including milk, eggs, and honey—to give you the true hydration percentage of your dough.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    How to Handle Wet Dough
                </h3>
                <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>Autolyse:</strong> Mix flour and water first and let it sit for 30-60 mins. This builds gluten structure before adding salt/yeast.</li>
                    <li><strong>Wet Hands:</strong> Always wet your hands with water (not flour!) before handling sticky high-hydration doughs.</li>
                    <li><strong>Coil Folds:</strong> Instead of kneading, perform gentle "coil folds" every 30 minutes during bulk fermentation to build strength without deflating the dough.</li>
                    <li><strong>Cold Retard:</strong> Shaping cold dough is easier. Let your bulk rise happen, then refrigerate the dough overnight before final shaping.</li>
                </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            What hydration is best for beginners?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Start with <strong>65% to 70%</strong>. This dough is tacky but manageable. Once you are comfortable with handling and shaping, you can slowly increase water by 2-3% in your next bake. Jumping straight to 80% often results in a flat, unmanageable pancake!
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Does oil count as liquid?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Yes! Any liquid ingredient (milk, eggs, oil, honey, molasses, sourdough starter water content) contributes to the hydration. However, fats (oil/eggs) tenderize the gluten, so a 70% enriched dough feels different than a 70% lean dough.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How does Whole Wheat affect hydration?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Whole grain flours absorb more water than white flour because of the bran. If you substitute 50% whole wheat into a white recipe, you will likely need to increase the hydration by 5-10% to get the same dough consistency.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);
