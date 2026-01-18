'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SimpleCalcIcon as CalculatorIcon, ScaleIcon, FlameIcon as FireIcon } from '../../../components/Icons';

export default function CalculatorsPage() {
    const [activeTab, setActiveTab] = useState<'hydration' | 'scaling'>('hydration');

    // Hydration State
    const [flour, setFlour] = useState<number>(1000);
    const [water, setWater] = useState<number>(750);
    const [starter, setStarter] = useState<number>(200);
    const [starterHydration, setStarterHydration] = useState<number>(100); // Usually 100%

    // Calculate Hydration
    const totalFlour = flour + (starter / 2); // Assuming 100% hydration starter (half flour)
    const totalWater = water + (starter / 2); // Assuming 100% hydration starter (half water)
    const hydration = Math.round((totalWater / totalFlour) * 100);

    // Scaling State
    const [targetLoaves, setTargetLoaves] = useState<number>(2);
    const [doughPerLoaf, setDoughPerLoaf] = useState<number>(900);
    const [targetHydration, setTargetHydration] = useState<number>(75);

    // Calculate Recipe
    const totalDough = targetLoaves * doughPerLoaf;
    // Formula: Total Dough = Flour + Water + Salt (2%) + Starter (20%)
    // Let Flour = F. 
    // Water = 0.75 * F
    // Salt = 0.02 * F
    // Starter = 0.20 * F (Starter itself is F_s + W_s. Assuming 100% hydration)

    // Simplification for Baker's Math:
    // Total % = 100% (Flour) + 75% (Water) + 20% (Starter) + 2% (Salt) = 197%
    // Factor = Total Dough / 1.97
    const bakerPercentageTotal = 100 + targetHydration + 20 + 2;
    const baseFlour = Math.round((totalDough / bakerPercentageTotal) * 100);

    const scaleWater = Math.round(baseFlour * (targetHydration / 100));
    const scaleStarter = Math.round(baseFlour * 0.20);
    const scaleSalt = Math.round(baseFlour * 0.02);


    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-brand-pink/10 p-2 rounded-lg text-brand-pink">
                            <CalculatorIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-brand-pink uppercase tracking-widest">Interactive Tools</span>
                    </div>
                    <h1 className="font-serif text-4xl font-bold text-stone-900">Baker's Math</h1>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-stone-200">
                <button
                    onClick={() => setActiveTab('hydration')}
                    className={`pb-4 px-2 text-sm font-bold tracking-wide transition-all ${activeTab === 'hydration'
                        ? 'border-b-2 border-brand-pink text-brand-pink'
                        : 'text-stone-400 hover:text-stone-600'
                        }`}
                >
                    Hydration Checker
                </button>
                <button
                    onClick={() => setActiveTab('scaling')}
                    className={`pb-4 px-2 text-sm font-bold tracking-wide transition-all ${activeTab === 'scaling'
                        ? 'border-b-2 border-brand-pink text-brand-pink'
                        : 'text-stone-400 hover:text-stone-600'
                        }`}
                >
                    Recipe Scaler
                </button>
            </div>

            {activeTab === 'hydration' && (
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Input Side */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
                        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Enter Your Mix</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Total Flour (g)</label>
                                <input
                                    type="number"
                                    value={flour}
                                    onChange={(e) => setFlour(Number(e.target.value))}
                                    className="w-full p-4 bg-stone-50 rounded-xl border-2 border-stone-100 focus:border-brand-pink focus:outline-none font-mono text-lg font-bold text-stone-900"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Total Water (g)</label>
                                <input
                                    type="number"
                                    value={water}
                                    onChange={(e) => setWater(Number(e.target.value))}
                                    className="w-full p-4 bg-stone-50 rounded-xl border-2 border-stone-100 focus:border-brand-pink focus:outline-none font-mono text-lg font-bold text-stone-900"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Sourdough Starter (g)</label>
                                <input
                                    type="number"
                                    value={starter}
                                    onChange={(e) => setStarter(Number(e.target.value))}
                                    className="w-full p-4 bg-stone-50 rounded-xl border-2 border-stone-100 focus:border-brand-pink focus:outline-none font-mono text-lg font-bold text-stone-900"
                                />
                                <p className="text-xs text-stone-400 mt-2">Assuming 100% hydration starter.</p>
                            </div>
                        </div>
                    </div>

                    {/* Result Side */}
                    <div className="bg-stone-900 p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">Total Hydration</div>
                            <div className="text-8xl font-bold mb-4 tracking-tighter">
                                {hydration}<span className="text-brand-pink text-4xl">%</span>
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md">
                                {hydration < 65 && <span className="text-sm font-bold">Stiff Dough (Bagels/Pretzels)</span>}
                                {hydration >= 65 && hydration < 75 && <span className="text-sm font-bold text-green-400">Standard Sourdough</span>}
                                {hydration >= 75 && hydration < 85 && <span className="text-sm font-bold text-yellow-400">High Hydration (Open Crumb)</span>}
                                {hydration >= 85 && <span className="text-sm font-bold text-red-400">Very Wet (Focaccia/Pan de Cristal)</span>}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'scaling' && (
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Input Side */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
                        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Target Batch</h3>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Loaves</label>
                                    <input
                                        type="number"
                                        value={targetLoaves}
                                        onChange={(e) => setTargetLoaves(Number(e.target.value))}
                                        className="w-full p-4 bg-stone-50 rounded-xl border-2 border-stone-100 focus:border-brand-pink focus:outline-none font-mono text-lg font-bold text-stone-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Weight/Loaf (g)</label>
                                    <input
                                        type="number"
                                        value={doughPerLoaf}
                                        onChange={(e) => setDoughPerLoaf(Number(e.target.value))}
                                        className="w-full p-4 bg-stone-50 rounded-xl border-2 border-stone-100 focus:border-brand-pink focus:outline-none font-mono text-lg font-bold text-stone-900"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Desired Hydration (%)</label>
                                <input
                                    type="number"
                                    value={targetHydration}
                                    onChange={(e) => setTargetHydration(Number(e.target.value))}
                                    className="w-full p-4 bg-stone-50 rounded-xl border-2 border-brand-pink/20 bg-brand-pink/5 focus:border-brand-pink focus:outline-none font-mono text-lg font-bold text-brand-pink"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Result Side */}
                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-stone-200">
                        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                            <ScaleIcon className="w-6 h-6 text-brand-pink" /> Your Recipe
                        </h3>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                                <span className="font-bold text-stone-600">Flour</span>
                                <span className="font-mono text-xl font-bold text-stone-900">{baseFlour}g</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                                <span className="font-bold text-stone-600">Water</span>
                                <span className="font-mono text-xl font-bold text-stone-900">{scaleWater}g</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                                <span className="font-bold text-stone-600">Starter (20%)</span>
                                <span className="font-mono text-xl font-bold text-stone-900">{scaleStarter}g</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                                <span className="font-bold text-stone-600">Salt (2%)</span>
                                <span className="font-mono text-xl font-bold text-stone-900">{scaleSalt}g</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-stone-200 text-center">
                            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Total Dough Weight</div>
                            <div className="text-3xl font-bold text-stone-900">{baseFlour + scaleWater + scaleStarter + scaleSalt}g</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
