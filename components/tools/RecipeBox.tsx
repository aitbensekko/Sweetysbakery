import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { BookOpenIcon, PlusCircleIcon, XIcon, HeartIcon, InfoIcon } from '../Icons';

interface Recipe {
    id: number;
    title: string;
    ingredients: string;
    instructions: string;
    favorite: boolean;
}

interface RecipeBoxProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const RecipeBox: React.FC<RecipeBoxProps> = ({ setActiveTool, breadcrumbs }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([
        { id: 1, title: 'Classic Sourdough Bread', ingredients: '500g Bread Flour\n350g Water\n100g Levain\n10g Salt', instructions: '1. Autolyse flour and water.\n2. Add levain and salt, mix well.\n3. Bulk ferment for 4 hours with folds.\n4. Shape and cold proof overnight.', favorite: false }
    ]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(recipes[0] || null);
    const [isEditing, setIsEditing] = useState(false);

    const handleAddRecipe = () => {
        const newRecipe: Recipe = { id: Date.now(), title: 'New Recipe', ingredients: '', instructions: '', favorite: false };
        setRecipes([...recipes, newRecipe]);
        setSelectedRecipe(newRecipe);
        setIsEditing(true);
    };

    const handleToggleFavorite = (id: number) => {
        setRecipes(recipes.map(recipe =>
            recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
        ));
        if (selectedRecipe && selectedRecipe.id === id) {
            setSelectedRecipe(prev => prev ? { ...prev, favorite: !prev.favorite } : null);
        }
    };

    const handleSaveRecipe = (updatedRecipe: Recipe) => {
        setRecipes(recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
        setIsEditing(false);
    };

    const handleDeleteRecipe = (id: number) => {
        setRecipes(recipes.filter(r => r.id !== id));
        if (selectedRecipe?.id === id) {
            setSelectedRecipe(recipes.length > 1 ? recipes.find(r => r.id !== id)! : null);
        }
    };

    const EditView: React.FC<{ recipe: Recipe, onSave: (r: Recipe) => void, onCancel: () => void }> = ({ recipe, onSave, onCancel }) => {
        const [editedRecipe, setEditedRecipe] = useState(recipe);
        return (
            <div>
                <input type="text" value={editedRecipe.title} onChange={e => setEditedRecipe({ ...editedRecipe, title: e.target.value })} className="w-full text-2xl font-bold p-2 mb-4 border-b-2" />
                <h3 className="font-bold mt-4 mb-2">Ingredients</h3>
                <textarea value={editedRecipe.ingredients} onChange={e => setEditedRecipe({ ...editedRecipe, ingredients: e.target.value })} rows={6} className="w-full p-2 border rounded-md" />
                <h3 className="font-bold mt-4 mb-2">Instructions</h3>
                <textarea value={editedRecipe.instructions} onChange={e => setEditedRecipe({ ...editedRecipe, instructions: e.target.value })} rows={10} className="w-full p-2 border rounded-md" />
                <div className="flex gap-2 mt-4">
                    <button onClick={() => onSave(editedRecipe)} className="bg-brand-pink text-white font-bold py-2 px-4 rounded-lg">Save</button>
                    <button onClick={onCancel} className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">Cancel</button>
                </div>
            </div>
        );
    }

    return (
        <ToolContainer
            title="Free Online Recipe Box"
            description="Your personal online recipe box. A free tool to save, edit, and organize your favorite baking recipes in one place."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="recipe-box"
        >
            <div className="flex flex-col md:flex-row gap-4 min-h-[600px]">
                <aside className="w-full md:w-1/3 bg-brand-pink-light/60 p-3 rounded-lg border border-brand-border">
                    <button onClick={handleAddRecipe} className="w-full flex items-center justify-center gap-2 bg-white text-brand-pink font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-brand-pink-light transition-colors border border-brand-border mb-3">
                        <PlusCircleIcon className="w-5 h-5" /> Add New Recipe
                    </button>
                    <ul className="space-y-1">
                        {recipes
                            .sort((a, b) => {
                                if (a.favorite && !b.favorite) return -1;
                                if (!a.favorite && b.favorite) return 1;
                                return a.title.localeCompare(b.title);
                            })
                            .map(recipe => (
                                <li key={recipe.id}>
                                    <button onClick={() => { setSelectedRecipe(recipe); setIsEditing(false); }} className={`w-full text-left p-2 rounded-md font-medium text-sm flex justify-between items-center group ${selectedRecipe?.id === recipe.id && !isEditing ? 'bg-brand-pink text-white' : 'text-brand-text-body hover:bg-white'}`}>
                                        <span className="truncate pr-2">{recipe.title}</span>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <HeartIcon
                                                onClick={(e) => { e.stopPropagation(); handleToggleFavorite(recipe.id); }}
                                                className={`w-5 h-5 transition-all ${recipe.favorite ? 'text-red-500' : 'text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-red-400'}`}
                                                fill={recipe.favorite ? 'currentColor' : 'none'}
                                            />
                                            <XIcon onClick={(e) => { e.stopPropagation(); handleDeleteRecipe(recipe.id); }} className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                                        </div>
                                    </button>
                                </li>
                            ))}
                    </ul>
                </aside>
                <main className="flex-1 p-4">
                    {selectedRecipe ? (
                        isEditing ? <EditView recipe={selectedRecipe} onSave={handleSaveRecipe} onCancel={() => setIsEditing(false)} /> : (
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <h2 className="font-serif text-3xl font-bold text-brand-text-title">{selectedRecipe.title}</h2>
                                        <button onClick={() => handleToggleFavorite(selectedRecipe.id)} title="Toggle favorite">
                                            <HeartIcon
                                                className={`w-7 h-7 cursor-pointer transition-colors ${selectedRecipe.favorite ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
                                                fill={selectedRecipe.favorite ? 'currentColor' : 'none'}
                                            />
                                        </button>
                                    </div>
                                    <button onClick={() => setIsEditing(true)} className="font-semibold text-brand-pink hover:underline flex-shrink-0 ml-4">Edit</button>
                                </div>
                                <div className="prose max-w-none">
                                    <h3>Ingredients</h3>
                                    <pre className="bg-gray-100 p-2 rounded-md whitespace-pre-wrap">{selectedRecipe.ingredients}</pre>
                                    <h3>Instructions</h3>
                                    <pre className="bg-gray-100 p-2 rounded-md whitespace-pre-wrap">{selectedRecipe.instructions}</pre>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center text-brand-text-body/70">
                            <BookOpenIcon className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-bold text-brand-text-title">Your Recipe Box is Empty</h3>
                            <p>Click "Add New Recipe" to start saving recipes online.</p>
                        </div>
                    )}
                </main>
            </div>
            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use Your Recipe Box</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This <strong>free online recipe box</strong> is your personal digital cookbook.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Add Recipes:</strong> Click "Add New Recipe" to create a blank card. Enter your title, ingredients, and instructions.</li>
                            <li><strong>Edit & Save:</strong> Click "Edit" on any recipe to make changes. Don't forget to hit "Save" when you're done!</li>
                            <li><strong>Favorites:</strong> Click the heart icon to pin your most-used recipes to the top of the list.</li>
                            <li><strong>Organize:</strong> Use clear titles so you can easily find what you're looking for.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Are my recipes saved permanently?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Your recipes are saved to your browser's local storage. This means they will stay here as long as you don't clear your browser cache. We recommend backing up important recipes elsewhere just in case!
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Can I share my recipes?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Currently, this is a private recipe box for your personal use. Sharing features are coming soon!
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
