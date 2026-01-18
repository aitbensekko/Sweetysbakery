import React, { useState, useEffect, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import {
    DocumentIcon, PlusCircleIcon, XIcon, InfoIcon, SearchIcon,
    EditIcon, Trash2Icon, DownloadIcon, SaveIcon, ClockIcon,
    UsersIcon, BookOpenIcon, CheckCircleIcon, FilterIcon
} from '../Icons';

interface Recipe {
    id: number;
    title: string;
    category: string;
    prepTime: string;
    cookTime: string;
    servings: string;
    ingredients: string;
    instructions: string;
    notes: string;
    lastModified: number;
}

interface DigitalNotebookProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const CATEGORIES = ['All', 'Cakes', 'Cookies', 'Breads', 'Pastries', 'Desserts', 'Savory', 'Other'];

export const DigitalNotebook: React.FC<DigitalNotebookProps> = ({ setActiveTool, breadcrumbs }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [activeRecipeId, setActiveRecipeId] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Load from local storage
    useEffect(() => {
        try {
            const savedRecipes = localStorage.getItem('bakerRecipeBook');
            if (savedRecipes) {
                setRecipes(JSON.parse(savedRecipes));
            } else {
                // Default sample recipe
                setRecipes([{
                    id: Date.now(),
                    title: 'Classic Vanilla Cake',
                    category: 'Cakes',
                    prepTime: '20 mins',
                    cookTime: '30 mins',
                    servings: '12 slices',
                    ingredients: '- 2 1/2 cups all-purpose flour\n- 2 1/2 tsp baking powder\n- 1/2 tsp salt\n- 1 cup unsalted butter, room temp\n- 2 cups granulated sugar\n- 4 large eggs\n- 1 tbsp vanilla extract\n- 1 cup whole milk',
                    instructions: '1. Preheat oven to 350°F (175°C). Grease and flour two 9-inch round pans.\n2. Whisk flour, baking powder, and salt in a bowl.\n3. Beat butter and sugar until pale and fluffy (3-4 mins).\n4. Add eggs one at a time, beating well after each.\n5. Mix in vanilla.\n6. Alternate adding flour mixture and milk, starting and ending with flour.\n7. Divide batter evenly and bake for 25-30 mins.',
                    notes: 'Make sure ingredients are at room temperature for the best emulsion.',
                    lastModified: Date.now()
                }]);
            }
        } catch (e) {
            console.error("Failed to load recipes", e);
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem('bakerRecipeBook', JSON.stringify(recipes));
    }, [recipes]);

    const activeRecipe = useMemo(() => recipes.find(r => r.id === activeRecipeId), [recipes, activeRecipeId]);

    const filteredRecipes = useMemo(() => {
        return recipes.filter(recipe => {
            const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
            return matchesSearch && matchesCategory;
        }).sort((a, b) => b.lastModified - a.lastModified);
    }, [recipes, searchQuery, selectedCategory]);

    const handleAddRecipe = () => {
        const newRecipe: Recipe = {
            id: Date.now(),
            title: 'New Recipe',
            category: 'Other',
            prepTime: '',
            cookTime: '',
            servings: '',
            ingredients: '',
            instructions: '',
            notes: '',
            lastModified: Date.now()
        };
        setRecipes([newRecipe, ...recipes]);
        setActiveRecipeId(newRecipe.id);
        setIsEditing(true);
    };

    const handleDeleteRecipe = (id: number) => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            setRecipes(recipes.filter(r => r.id !== id));
            if (activeRecipeId === id) setActiveRecipeId(null);
        }
    };

    const handleUpdateRecipe = (field: keyof Recipe, value: string) => {
        if (!activeRecipeId) return;
        setRecipes(recipes.map(r => r.id === activeRecipeId ? { ...r, [field]: value, lastModified: Date.now() } : r));
    };

    const handleExport = () => {
        if (!activeRecipe) return;
        const text = `
${activeRecipe.title}
Category: ${activeRecipe.category}
Prep: ${activeRecipe.prepTime} | Cook: ${activeRecipe.cookTime} | Servings: ${activeRecipe.servings}

INGREDIENTS:
${activeRecipe.ingredients}

INSTRUCTIONS:
${activeRecipe.instructions}

NOTES:
${activeRecipe.notes}
        `.trim();

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${activeRecipe.title.replace(/\s+/g, '-').toLowerCase()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <ToolContainer
            title="Free Online Recipe Organizer"
            description="The ultimate digital recipe book and cookbook software. Organize your favorite recipes, manage ingredients, and build your personal baking library securely in your browser."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="digital-notebook"
        >
            <div className="flex flex-col lg:flex-row gap-6 min-h-[700px]">
                {/* Sidebar - Recipe List */}
                <aside className="w-full lg:w-1/3 bg-white rounded-xl border border-brand-border flex flex-col shadow-sm overflow-hidden h-[600px] lg:h-auto">
                    <div className="p-4 border-b border-brand-border bg-gray-50 space-y-3">
                        <button onClick={handleAddRecipe} className="w-full flex items-center justify-center gap-2 bg-brand-pink text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:bg-brand-pink-dark transition-colors">
                            <PlusCircleIcon className="w-5 h-5" /> Add New Recipe
                        </button>
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 text-sm border border-brand-border rounded-lg focus:ring-1 focus:ring-brand-pink focus:border-brand-pink"
                            />
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <FilterIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-brand-text-title text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 space-y-1">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map(recipe => (
                                <div
                                    key={recipe.id}
                                    onClick={() => { setActiveRecipeId(recipe.id); setIsEditing(false); }}
                                    className={`p-3 rounded-lg cursor-pointer transition-all border ${activeRecipeId === recipe.id ? 'bg-brand-pink-light border-brand-pink shadow-sm' : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'}`}
                                >
                                    <h4 className={`font-bold text-sm mb-1 ${activeRecipeId === recipe.id ? 'text-brand-pink' : 'text-brand-text-title'}`}>{recipe.title}</h4>
                                    <div className="flex justify-between items-center text-xs text-brand-text-body/60">
                                        <span className="bg-gray-100 px-1.5 py-0.5 rounded">{recipe.category}</span>
                                        <span>{new Date(recipe.lastModified).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-gray-400 text-sm">
                                <p>No recipes found.</p>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Main Content - Recipe Detail/Edit */}
                <main className="flex-1 bg-white rounded-xl border border-brand-border shadow-sm overflow-hidden flex flex-col">
                    {activeRecipe ? (
                        <>
                            {/* Toolbar */}
                            <div className="p-4 border-b border-brand-border flex justify-between items-center bg-gray-50">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                        {isEditing ? 'Editing Mode' : 'View Mode'}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    {isEditing ? (
                                        <button onClick={() => setIsEditing(false)} className="flex items-center gap-1.5 text-xs font-bold bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition-colors">
                                            <SaveIcon className="w-4 h-4" /> Done
                                        </button>
                                    ) : (
                                        <>
                                            <button onClick={() => setIsEditing(true)} className="flex items-center gap-1.5 text-xs font-bold bg-white border border-brand-border text-brand-text-body px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
                                                <EditIcon className="w-4 h-4" /> Edit
                                            </button>
                                            <button onClick={handleExport} className="flex items-center gap-1.5 text-xs font-bold bg-white border border-brand-border text-brand-text-body px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
                                                <DownloadIcon className="w-4 h-4" /> Export
                                            </button>
                                            <button onClick={() => handleDeleteRecipe(activeRecipe.id)} className="flex items-center gap-1.5 text-xs font-bold bg-white border border-brand-border text-red-500 px-3 py-1.5 rounded-md hover:bg-red-50 transition-colors">
                                                <Trash2Icon className="w-4 h-4" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                                {isEditing ? (
                                    <div className="space-y-6 animate-fadeIn">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Recipe Title</label>
                                            <input
                                                type="text"
                                                value={activeRecipe.title}
                                                onChange={(e) => handleUpdateRecipe('title', e.target.value)}
                                                className="w-full text-2xl font-serif font-bold text-brand-text-title border-b-2 border-brand-pink/30 focus:border-brand-pink focus:outline-none bg-transparent py-1"
                                                placeholder="Recipe Name"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                                                <select
                                                    value={activeRecipe.category}
                                                    onChange={(e) => handleUpdateRecipe('category', e.target.value)}
                                                    className="w-full text-sm border border-brand-border rounded-md p-2 focus:ring-1 focus:ring-brand-pink"
                                                >
                                                    {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Prep Time</label>
                                                <input type="text" value={activeRecipe.prepTime} onChange={(e) => handleUpdateRecipe('prepTime', e.target.value)} className="w-full text-sm border border-brand-border rounded-md p-2" placeholder="e.g. 15 mins" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Cook Time</label>
                                                <input type="text" value={activeRecipe.cookTime} onChange={(e) => handleUpdateRecipe('cookTime', e.target.value)} className="w-full text-sm border border-brand-border rounded-md p-2" placeholder="e.g. 30 mins" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Servings</label>
                                                <input type="text" value={activeRecipe.servings} onChange={(e) => handleUpdateRecipe('servings', e.target.value)} className="w-full text-sm border border-brand-border rounded-md p-2" placeholder="e.g. 12 cookies" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-2"><BookOpenIcon className="w-4 h-4" /> Ingredients</label>
                                                <textarea
                                                    value={activeRecipe.ingredients}
                                                    onChange={(e) => handleUpdateRecipe('ingredients', e.target.value)}
                                                    className="w-full h-64 text-sm border border-brand-border rounded-lg p-3 focus:ring-1 focus:ring-brand-pink leading-relaxed"
                                                    placeholder="- 1 cup flour..."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-2"><CheckCircleIcon className="w-4 h-4" /> Instructions</label>
                                                <textarea
                                                    value={activeRecipe.instructions}
                                                    onChange={(e) => handleUpdateRecipe('instructions', e.target.value)}
                                                    className="w-full h-64 text-sm border border-brand-border rounded-lg p-3 focus:ring-1 focus:ring-brand-pink leading-relaxed"
                                                    placeholder="1. Mix ingredients..."
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Chef's Notes</label>
                                            <textarea
                                                value={activeRecipe.notes}
                                                onChange={(e) => handleUpdateRecipe('notes', e.target.value)}
                                                className="w-full h-24 text-sm border border-brand-border rounded-lg p-3 focus:ring-1 focus:ring-brand-pink bg-yellow-50/50"
                                                placeholder="Tips and tricks..."
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-8 animate-fadeIn">
                                        <header className="border-b border-brand-border pb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="bg-brand-pink text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">{activeRecipe.category}</span>
                                                <span className="text-xs text-gray-400">Last updated: {new Date(activeRecipe.lastModified).toLocaleDateString()}</span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text-title mb-6">{activeRecipe.title}</h2>

                                            <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-brand-text-body/80">
                                                <div className="flex items-center gap-2">
                                                    <ClockIcon className="w-5 h-5 text-brand-pink" />
                                                    <span className="font-bold">Prep:</span> {activeRecipe.prepTime || '--'}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <ClockIcon className="w-5 h-5 text-brand-pink" />
                                                    <span className="font-bold">Cook:</span> {activeRecipe.cookTime || '--'}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <UsersIcon className="w-5 h-5 text-brand-pink" />
                                                    <span className="font-bold">Yields:</span> {activeRecipe.servings || '--'}
                                                </div>
                                            </div>
                                        </header>

                                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                            <div>
                                                <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4 flex items-center gap-2">
                                                    <BookOpenIcon className="w-5 h-5 text-brand-pink" /> Ingredients
                                                </h3>
                                                <div className="bg-brand-pink-light/30 p-6 rounded-2xl">
                                                    <ul className="space-y-2 text-brand-text-body leading-relaxed whitespace-pre-line">
                                                        {activeRecipe.ingredients || <span className="text-gray-400 italic">No ingredients listed.</span>}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4 flex items-center gap-2">
                                                    <CheckCircleIcon className="w-5 h-5 text-brand-pink" /> Instructions
                                                </h3>
                                                <div className="text-brand-text-body leading-relaxed whitespace-pre-line">
                                                    {activeRecipe.instructions || <span className="text-gray-400 italic">No instructions listed.</span>}
                                                </div>
                                            </div>
                                        </div>

                                        {activeRecipe.notes && (
                                            <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl">
                                                <h4 className="font-bold text-yellow-800 mb-2 text-sm uppercase tracking-wide">Chef's Notes</h4>
                                                <p className="text-yellow-900/80 text-sm leading-relaxed whitespace-pre-line">{activeRecipe.notes}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center text-brand-text-body/60 p-8">
                            <div className="bg-brand-pink-light p-6 rounded-full mb-6">
                                <DocumentIcon className="w-16 h-16 text-brand-pink" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-text-title mb-2">Select a Recipe</h3>
                            <p className="max-w-md mx-auto mb-8">Choose a recipe from the list or create a new one to start building your personal digital cookbook.</p>
                            <button onClick={handleAddRecipe} className="flex items-center gap-2 bg-brand-pink text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-brand-pink-dark transition-all transform hover:-translate-y-1">
                                <PlusCircleIcon className="w-5 h-5" /> Create New Recipe
                            </button>
                        </div>
                    )}
                </main>
            </div>

            <DigitalNotebookContent />
        </ToolContainer>
    );
};

const DigitalNotebookContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use Your Recipe Organizer
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Add a Recipe:</strong> Click the "Add New Recipe" button. A new blank card will appear.</li>
                <li><strong>Fill Details:</strong> Enter the title, times, and servings. Use the dropdown to categorize your bake (e.g., Cookies, Cakes).</li>
                <li><strong>Enter Ingredients & Steps:</strong> Type or paste your ingredients and instructions. They are formatted automatically.</li>
                <li><strong>Save & Export:</strong> Your work saves automatically to your browser. Use "Export" to download a text file backup.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Is this online cookbook free?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes! This **digital recipe book** is 100% free to use. There are no subscriptions or hidden fees.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Can I use this on my phone?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Absolutely. The **recipe keeper** interface is fully responsive, making it easy to view your recipes on a tablet or smartphone while baking in the kitchen.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        How do I backup my recipes?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        We recommend using the **Export** button regularly to download your recipes as text files. This ensures you have a safe backup of your **recipe collection**.
                    </p>
                </details>
            </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">The Best Free Recipe Software for Bakers</h3>
            <p className="text-sm text-brand-text-body/80 leading-relaxed mb-4">
                Ditch the messy binders and loose index cards. Our **free recipe organizer** is designed specifically for bakers who need a clean, reliable way to store their creations. Whether you're tracking a complex sourdough schedule or just saving a quick cookie recipe, this **online cookbook** handles it all.
            </p>
            <p className="text-sm text-brand-text-body/80 leading-relaxed">
                With features like **category filtering**, **instant search**, and **automatic saving**, it's the perfect **digital recipe book** for the modern kitchen. Start building your personal baking library today with the most user-friendly **recipe keeper** available.
            </p>
        </div>
    </div>
);
