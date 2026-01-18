import React, { useState, useEffect } from 'react';
import { Footer } from '../Footer';
// Fix: Corrected import path for ToolId
import type { ToolId } from '../utils/slugs';
import { DumbbellIcon, InfoIcon, RefreshCwIcon, ClipboardIcon, CheckCircleIcon } from '../Icons';
import { updateSchema, getToolSeoData } from '../utils/seo';

interface ProteinMacroCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type UnitSystem = 'metric' | 'imperial';
type Gender = 'female' | 'male';
type ActivityLevel = '1.2' | '1.375' | '1.55' | '1.725' | '1.9';
type PrimaryGoal = 'fatLoss' | 'maintenance' | 'muscleGain';
type MacroSplit = 'balanced' | 'lowCarb' | 'highCarb';

interface MacroValues {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

const macroSplits: Record<MacroSplit, { p: number, c: number, f: number }> = {
    balanced: { p: 0.30, c: 0.40, f: 0.30 },
    lowCarb: { p: 0.40, c: 0.20, f: 0.40 },
    highCarb: { p: 0.30, c: 0.50, f: 0.20 },
};

interface CalculationResults {
    bmr: number;
    tdee: number;
    proteinGoalRange: { min: number; max: number };
    detailedProteinNeeds: {
        rda: number;
        endurance: { min: number; max: number };
        muscleGain: { min: number; max: number };
    };
    goals: Record<PrimaryGoal, MacroValues>;
}

const calculateMacros = (totalCalories: number, split: { p: number, c: number, f: number }): MacroValues => ({
    calories: Math.round(totalCalories),
    protein: Math.round((totalCalories * split.p) / 4),
    carbs: Math.round((totalCalories * split.c) / 4),
    fat: Math.round((totalCalories * split.f) / 9)
});

const MacroChart: React.FC<{ data: { p: number, c: number, f: number } }> = ({ data }) => {
    const size = 120;
    const strokeWidth = 14;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const segments = [
        { percent: data.p, color: "text-brand-pink" },
        { percent: data.c, color: "text-blue-400" },
        { percent: data.f, color: "text-yellow-400" },
    ];

    let accumulatedPercentage = 0;

    return (
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full transform -rotate-90">
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={strokeWidth} className="text-gray-200" stroke="currentColor" />
            {segments.map((segment, index) => {
                const dashArray = (segment.percent) * circumference;
                const offset = (accumulatedPercentage / 100) * circumference;
                accumulatedPercentage += (segment.percent * 100);
                return (
                    <circle
                        key={index}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${dashArray} ${circumference}`}
                        strokeDashoffset={-offset}
                        className={segment.color}
                        stroke="currentColor"
                        strokeLinecap="round"
                    />
                );
            })}
        </svg>
    );
};

const MacroResultCard: React.FC<{ title: string; data: MacroValues; split: { p: number, c: number, f: number }; isActive: boolean; }> = ({ title, data, split, isActive }) => (
    <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${isActive ? 'border-brand-pink bg-white shadow-md transform scale-[1.02]' : 'border-transparent bg-brand-background hover:bg-white hover:border-gray-200'}`}>
        <h4 className="font-bold text-center text-brand-text-title text-lg mb-2">{title}</h4>
        <div className="relative w-[120px] h-[120px] mx-auto flex items-center justify-center">
            <MacroChart data={split} />
            <div className="absolute text-center">
                <p className="text-2xl font-bold text-brand-text-title">{data.calories.toLocaleString()}</p>
                <p className="text-xs font-semibold text-brand-text-body">kcal</p>
            </div>
        </div>
        <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-brand-pink"></span>Protein ({Math.round(split.p * 100)}%)</span> <span className="font-bold">{data.protein}g</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>Carbs ({Math.round(split.c * 100)}%)</span> <span className="font-bold">{data.carbs}g</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>Fat ({Math.round(split.f * 100)}%)</span> <span className="font-bold">{data.fat}g</span></div>
        </div>
    </div>
);

const initialFormState = {
    unitSystem: 'imperial' as UnitSystem,
    age: '30',
    gender: 'female' as Gender,
    weight: '132',
    height: '65',
    heightCm: '165',
    weightKg: '59.9',
    activityLevel: '1.375' as ActivityLevel,
};

export const ProteinMacroCalculator: React.FC<ProteinMacroCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [form, setForm] = useState(initialFormState);
    const [results, setResults] = useState<CalculationResults | null>(null);
    const [primaryGoal, setPrimaryGoal] = useState<PrimaryGoal>('maintenance');
    const [macroSplit, setMacroSplit] = useState<MacroSplit>('balanced');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Update Schema for SEO - protein-macro
        updateSchema('protein-macro', getToolSeoData('protein-macro'), null);
    }, []);

    const handleReset = () => {
        setForm(initialFormState);
        setResults(null);
    };

    const handleInputChange = (field: keyof typeof form, value: string) => {
        // Prevent negative numbers
        if (parseFloat(value) < 0) return;
        setForm({ ...form, [field]: value });
    };

    const handleCalculate = () => {
        const ageN = parseInt(form.age) || 0;
        const isImperial = form.unitSystem === 'imperial';
        const weightKg = isImperial ? (parseFloat(form.weight) * 0.453592) : parseFloat(form.weightKg);
        const heightCm = isImperial ? (parseFloat(form.height) * 2.54) : parseFloat(form.heightCm);

        if (!weightKg || !heightCm || !ageN) {
            alert("Please fill in all fields with valid numbers.");
            return;
        }

        const bmr = form.gender === 'male'
            ? 10 * weightKg + 6.25 * heightCm - 5 * ageN + 5
            : 10 * weightKg + 6.25 * heightCm - 5 * ageN - 161;

        const tdee = bmr * parseFloat(form.activityLevel);

        const calories = {
            maintenance: tdee,
            fatLoss: tdee - 400,
            muscleGain: tdee + 300
        };

        setResults({
            bmr: Math.round(bmr),
            tdee: Math.round(tdee),
            proteinGoalRange: { min: Math.round(weightKg * 1.2), max: Math.round(weightKg * 1.5) },
            detailedProteinNeeds: {
                rda: Math.round(weightKg * 0.8),
                endurance: { min: Math.round(weightKg * 1.2), max: Math.round(weightKg * 1.6) },
                muscleGain: { min: Math.round(weightKg * 1.6), max: Math.round(weightKg * 2.2) },
            },
            goals: {
                fatLoss: calculateMacros(calories.fatLoss, macroSplits[macroSplit]),
                maintenance: calculateMacros(calories.maintenance, macroSplits[macroSplit]),
                muscleGain: calculateMacros(calories.muscleGain, macroSplits[macroSplit])
            }
        });
    };

    useEffect(() => {
        if (results) {
            const calories = {
                maintenance: results.tdee,
                fatLoss: results.tdee - 400,
                muscleGain: results.tdee + 300
            };

            setResults(prevResults => {
                if (!prevResults) return null;
                return {
                    ...prevResults,
                    goals: {
                        fatLoss: calculateMacros(calories.fatLoss, macroSplits[macroSplit]),
                        maintenance: calculateMacros(calories.maintenance, macroSplits[macroSplit]),
                        muscleGain: calculateMacros(calories.muscleGain, macroSplits[macroSplit])
                    }
                };
            });
        }
    }, [macroSplit]);

    const handleCopy = async () => {
        if (!results) return;
        const currentMacros = results.goals[primaryGoal];
        const text = `My Daily Goals (${primaryGoal}):\n- Calories: ${currentMacros.calories} kcal\n- Protein: ${currentMacros.protein}g\n- Carbs: ${currentMacros.carbs}g\n- Fat: ${currentMacros.fat}g\n\nProtein Range: ${results.proteinGoalRange.min} - ${results.proteinGoalRange.max}g`;

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    const currentMacros = results?.goals[primaryGoal];

    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            {breadcrumbs}
            <header className="mb-8 max-w-4xl text-center mx-auto">
                <div className="inline-block text-brand-pink mb-4">
                    <DumbbellIcon className="w-10 h-10" />
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title">Protein & Macro Calculator (TDEE)</h1>
                <p className="mt-4 text-lg text-brand-text-body/80 max-w-3xl mx-auto">Calculate your daily protein intake, TDEE, and macronutrient goals for fat loss, maintenance, or muscle gain. Answer the question "what are my macros?" with our free tool.</p>
            </header>

            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm sticky top-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-serif font-bold text-2xl text-brand-text-title">Your Details</h3>
                            <button onClick={handleReset} className="text-sm flex items-center gap-1 text-brand-text-body/70 hover:text-brand-pink">
                                <RefreshCwIcon className="w-4 h-4" /> Reset
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold mb-2 block">Unit System</label>
                                <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                                    <button onClick={() => setForm({ ...form, unitSystem: 'imperial' })} className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Imperial</button>
                                    <button onClick={() => setForm({ ...form, unitSystem: 'metric' })} className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Metric</button>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-semibold mb-1 block">Age</label>
                                <input type="number" value={form.age} onChange={e => handleInputChange('age', e.target.value)} className="w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink" min="0" step="any" />
                            </div>

                            <div>
                                <label className="text-sm font-semibold mb-1 block">Gender</label>
                                <div className="flex gap-1 bg-brand-background p-1 rounded-lg border border-brand-border">
                                    <button onClick={() => setForm({ ...form, gender: 'female' })} className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.gender === 'female' ? 'bg-white shadow-sm text-brand-text-title' : 'text-brand-text-body hover:bg-white/50'}`}>Female</button>
                                    <button onClick={() => setForm({ ...form, gender: 'male' })} className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.gender === 'male' ? 'bg-white shadow-sm text-brand-text-title' : 'text-brand-text-body hover:bg-white/50'}`}>Male</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {form.unitSystem === 'imperial' ? (
                                    <>
                                        <div><label className="text-sm font-semibold mb-1 block">Height (in)</label><input type="number" value={form.height} onChange={e => handleInputChange('height', e.target.value)} className="w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink" min="0" step="any" /></div>
                                        <div><label className="text-sm font-semibold mb-1 block">Weight (lbs)</label><input type="number" value={form.weight} onChange={e => handleInputChange('weight', e.target.value)} className="w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink" min="0" step="any" /></div>
                                    </>
                                ) : (
                                    <>
                                        <div><label className="text-sm font-semibold mb-1 block">Height (cm)</label><input type="number" value={form.heightCm} onChange={e => handleInputChange('heightCm', e.target.value)} className="w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink" min="0" step="any" /></div>
                                        <div><label className="text-sm font-semibold mb-1 block">Weight (kg)</label><input type="number" value={form.weightKg} onChange={e => handleInputChange('weightKg', e.target.value)} className="w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink" min="0" step="any" /></div>
                                    </>
                                )}
                            </div>

                            <div>
                                <label className="text-sm font-semibold mb-1 block">Activity Level</label>
                                <select value={form.activityLevel} onChange={e => setForm({ ...form, activityLevel: e.target.value as ActivityLevel })} className="w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg appearance-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink">
                                    <option value="1.2">Sedentary (office job)</option>
                                    <option value="1.375">Lightly Active (1-3 days/week)</option>
                                    <option value="1.55">Moderately Active (3-5 days/week)</option>
                                    <option value="1.725">Very Active (6-7 days/week)</option>
                                    <option value="1.9">Extra Active (physical job)</option>
                                </select>
                            </div>

                            <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                                Calculate My Macros
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    {results && (
                        <div className="space-y-6 fade-in">
                            <div className="p-6 bg-brand-pink text-white rounded-2xl text-center shadow-lg transform transition-all hover:scale-[1.01]">
                                <p className="font-semibold opacity-80 text-sm tracking-wider">YOUR DAILY PROTEIN GOAL</p>
                                <p className="font-bold text-5xl my-2">{results.proteinGoalRange.min} - {results.proteinGoalRange.max}g</p>
                                <p className="opacity-80 text-xs">based on your activity level</p>
                                <div className="mt-4">
                                    <button onClick={handleCopy} className="inline-flex items-center gap-2 text-xs font-bold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                                        {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                        {copied ? 'Results Copied!' : 'Copy My Results'}
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                                <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-4">Calorie & Macro Goals</h3>
                                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="text-sm font-semibold mb-2 block text-gray-500">Primary Goal</label>
                                        <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                                            <button onClick={() => setPrimaryGoal('fatLoss')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'fatLoss' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Fat Loss</button>
                                            <button onClick={() => setPrimaryGoal('maintenance')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'maintenance' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Maintenance</button>
                                            <button onClick={() => setPrimaryGoal('muscleGain')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'muscleGain' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Muscle Gain</button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold mb-2 block text-gray-500">Macro Split</label>
                                        <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                                            <button onClick={() => setMacroSplit('balanced')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'balanced' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Balanced</button>
                                            <button onClick={() => setMacroSplit('lowCarb')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'lowCarb' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Low Carb</button>
                                            <button onClick={() => setMacroSplit('highCarb')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'highCarb' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>High Carb</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <MacroResultCard title="Fat Loss" data={results.goals.fatLoss} split={macroSplits[macroSplit]} isActive={primaryGoal === 'fatLoss'} />
                                    <MacroResultCard title="Maintenance" data={results.goals.maintenance} split={macroSplits[macroSplit]} isActive={primaryGoal === 'maintenance'} />
                                    <MacroResultCard title="Muscle Gain" data={results.goals.muscleGain} split={macroSplits[macroSplit]} isActive={primaryGoal === 'muscleGain'} />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                                    <h4 className="font-serif font-bold text-xl text-brand-text-title mb-4">Protein Distribution</h4>
                                    <p className="text-sm text-brand-text-body mb-4">Split your <span className="font-bold text-brand-pink">{currentMacros?.protein}g</span> of protein into:</p>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10"><span className="font-semibold text-brand-text-body">3 meals</span> <span className="font-bold text-brand-text-title">{Math.round(currentMacros!.protein / 3)}g / meal</span></div>
                                        <div className="flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10"><span className="font-semibold text-brand-text-body">4 meals</span> <span className="font-bold text-brand-text-title">{Math.round(currentMacros!.protein / 4)}g / meal</span></div>
                                        <div className="flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10"><span className="font-semibold text-brand-text-body">5 meals</span> <span className="font-bold text-brand-text-title">{Math.round(currentMacros!.protein / 5)}g / meal</span></div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm space-y-4">
                                    <h4 className="font-serif font-bold text-xl text-brand-text-title">Metabolic Details</h4>
                                    <div className="flex justify-between items-center text-sm"><span className="flex items-center gap-1.5 text-gray-600">BMR <InfoIcon className="w-4 h-4 text-gray-400" /></span> <span className="font-bold text-brand-text-title">{results.bmr} kcal</span></div>
                                    <div className="flex justify-between items-center text-sm"><span className="flex items-center gap-1.5 text-gray-600">TDEE <InfoIcon className="w-4 h-4 text-gray-400" /></span> <span className="font-bold text-brand-text-title">{results.tdee} kcal</span></div>
                                    <div className="border-t border-gray-100 my-2"></div>
                                    <h4 className="font-serif font-bold text-xl text-brand-text-title pt-1">Detailed Protein Needs</h4>
                                    <div className="text-sm space-y-2">
                                        <div className="flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors"><span>General Health (RDA):</span> <span className="font-bold">{results.detailedProteinNeeds.rda}g</span></div>
                                        <div className="flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors"><span>Endurance Athletes:</span> <span className="font-bold">{results.detailedProteinNeeds.endurance.min}-{results.detailedProteinNeeds.endurance.max}g</span></div>
                                        <div className="flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors"><span>Muscle Gain:</span> <span className="font-bold">{results.detailedProteinNeeds.muscleGain.min}-{results.detailedProteinNeeds.muscleGain.max}g</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {results && (
                <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                            How to Use Your Results
                        </h3>
                        <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                            <li><strong>Select Goal:</strong> Choose "Fat Loss", "Maintenance", or "Muscle Gain" to see adjusted calorie targets.</li>
                            <li><strong>Choose Split:</strong> Pick a macro split (Balanced, Low Carb, High Carb) that fits your lifestyle.</li>
                            <li><strong>Track Macros:</strong> Aim to hit these protein, carb, and fat targets daily.</li>
                            <li><strong>Monitor Progress:</strong> Weigh yourself weekly and adjust calories if needed.</li>
                        </ol>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    What is TDEE?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    Total Daily Energy Expenditure. It's the total number of calories you burn in a day, including exercise. Eating this amount maintains your weight.
                                </p>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    Which macro split is best?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    "Balanced" works for most people. "High Carb" is great for endurance athletes, while "Low Carb" can help with satiety and blood sugar control.
                                </p>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                                    Do I need to be exact?
                                    <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                                    No! Consistency is more important than perfection. Try to stay within +/- 10g of your protein and carb goals, and +/- 5g of fat.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};
