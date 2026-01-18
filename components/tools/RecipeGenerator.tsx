import React, { useState } from 'react';
import { SparklesIcon, ChefHatIcon, ClockIcon, UsersIcon } from '../Icons';

export const RecipeGenerator: React.FC = () => {
    const [ingredients, setIngredients] = useState('');
    const [type, setType] = useState('cookie');
    const [difficulty, setDifficulty] = useState('easy');
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState<any>(null);
    const [error, setError] = useState('');

    const generateRecipe = async () => {
        if (!ingredients.trim()) {
            setError('Please enter some ingredients!');
            return;
        }

        setLoading(true);
        setError('');
        setRecipe(null);

        try {
            // Check if we are in development/local mode
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

            let data;

            // Production call to Cloudflare Worker
            const WORKER_URL = process.env.NEXT_PUBLIC_RECIPE_GENERATOR_URL;

            // Use Mock if Local OR if API URL is not set
            if (isLocal || !WORKER_URL) {

                // Mock response (Simulated AI)
                await new Promise(resolve => setTimeout(resolve, 2000)); // Fake delay
                data = {
                    title: `Magic ${type.charAt(0).toUpperCase() + type.slice(1)}s`,
                    description: `A delicious ${difficulty} ${type} recipe made with ${ingredients.split(',')[0]} and love.`,
                    prepTime: "15 mins",
                    bakeTime: "20 mins",
                    yields: "12 servings",
                    ingredients: [
                        "2 cups flour",
                        "1 cup sugar",
                        ...ingredients.split(',').map(i => `1 cup ${i.trim()}`),
                        "1 tsp vanilla",
                        "Pinch of salt"
                    ],
                    instructions: [
                        "Preheat oven to 350°F (175°C).",
                        "Mix dry ingredients in a large bowl.",
                        "Whisk wet ingredients in a separate bowl.",
                        "Combine wet and dry mixtures gently.",
                        `Bake for 20-25 minutes or until golden brown.`,
                        "Let cool and enjoy!"
                    ],
                    tips: ["Do not overmix the batter!", "Best served warm with milk."]
                };
            } else {

                const response = await fetch(WORKER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ingredients, type, difficulty })
                });

                if (!response.ok) throw new Error('Failed to generate');

                const textData = await response.text();
                try {
                    data = JSON.parse(textData);
                } catch (e) {
                    console.error("Failed to parse recipe JSON:", textData);
                    throw new Error("The chef got a bit confused. Please try again!");
                }
            }

            setRecipe(data);
        } catch (err) {
            console.error(err);
            setError('Failed to generate recipe. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="recipe-generator" className="my-8 md:my-16 bg-gradient-to-br from-brand-pink/10 to-brand-pink/5 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-pink/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                        <SparklesIcon className="w-5 h-5 text-brand-pink" />
                        <span className="text-sm font-bold text-brand-text-title tracking-wide uppercase">AI Powered</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text-title mb-4">
                        Magic Recipe Generator
                    </h2>
                    <p className="text-brand-text-body/80 text-lg">
                        Got leftover ingredients? Tell us what you have, and our AI chef will create a custom recipe just for you.
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-8 shadow-lg border border-white mb-10">
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="col-span-3 md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                What ingredients do you have?
                            </label>
                            <input
                                type="text"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                placeholder="e.g., flour, eggs, chocolate chips, bananas..."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-brand-pink outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Type
                            </label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-brand-pink outline-none bg-white"
                            >
                                <option value="cookie">Cookies</option>
                                <option value="cake">Cake</option>
                                <option value="muffin">Muffins</option>
                                <option value="bread">Bread</option>
                                <option value="pie">Pie</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={generateRecipe}
                        disabled={loading}
                        className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-md transition-all flex items-center justify-center gap-3
                            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-brand-pink to-brand-pink-dark hover:shadow-lg hover:-translate-y-1'}
                        `}
                    >
                        {loading ? (
                            <>
                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Developing Recipe...</span>
                            </>
                        ) : (
                            <>
                                <ChefHatIcon className="w-6 h-6" />
                                <span>Generate Recipe</span>
                            </>
                        )}
                    </button>

                    {error && (
                        <div className="mt-4 text-center text-red-500 font-medium bg-red-50 p-3 rounded-lg">
                            {error}
                        </div>
                    )}
                </div>

                {recipe && (
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-500 border border-brand-pink/30 relative">
                        {/* Decorative top border */}
                        <div className="h-2 w-full bg-gradient-to-r from-brand-pink/40 via-brand-pink to-brand-pink/40" />

                        <div className="bg-brand-pink-light/30 p-8 text-center border-b border-brand-pink/10 relative">
                            <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-sm text-brand-pink mb-4">
                                <ChefHatIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-text-title mb-2">{recipe.title}</h3>
                            <p className="text-brand-text-body/80 text-lg italic">{recipe.description}</p>

                            <div className="flex justify-center gap-4 mt-6 text-sm font-bold tracking-wide">
                                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-brand-text-title border border-brand-pink/20"><ClockIcon className="w-4 h-4 text-brand-pink" /> Prep: {recipe.prepTime}</span>
                                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-brand-text-title border border-brand-pink/20"><ClockIcon className="w-4 h-4 text-brand-pink" /> Bake: {recipe.bakeTime}</span>
                                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-brand-text-title border border-brand-pink/20"><UsersIcon className="w-4 h-4 text-brand-pink" /> Yields: {recipe.yields}</span>
                            </div>
                        </div>

                        <div className="p-8 grid md:grid-cols-3 gap-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                            <div className="md:col-span-1 bg-white p-6 rounded-xl border border-brand-pink/20 shadow-sm h-fit">
                                <h4 className="font-bold text-brand-text-title mb-4 flex items-center gap-2 border-b border-brand-pink/10 pb-2">
                                    Ingredients
                                </h4>
                                <ul className="space-y-2 text-brand-text-body">
                                    {recipe.ingredients.map((ing: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-brand-pink font-bold">•</span>
                                            {ing}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-2 bg-white p-6 rounded-xl border border-brand-pink/20 shadow-sm">
                                <h4 className="font-bold text-brand-text-title mb-4 flex items-center gap-2 border-b border-brand-pink/10 pb-2">
                                    Instructions
                                </h4>
                                <ol className="space-y-4">
                                    {recipe.instructions.map((step: string, i: number) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 bg-brand-pink text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                                                {i + 1}
                                            </span>
                                            <p className="text-brand-text-body pt-1">{step}</p>
                                        </li>
                                    ))}
                                </ol>

                                {recipe.tips && recipe.tips.length > 0 && (
                                    <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <h5 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                                            <SparklesIcon className="w-4 h-4" /> Chef's Tips
                                        </h5>
                                        <ul className="text-blue-700 text-sm space-y-1">
                                            {recipe.tips.map((tip: string, i: number) => (
                                                <li key={i}>• {tip}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
