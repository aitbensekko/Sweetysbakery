import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { InfoIcon, ScaleIcon, ClipboardIcon, CheckCircleIcon, FlameIcon } from '../Icons';

interface CalorieCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    isBmrMode?: boolean;
    breadcrumbs: React.ReactNode;
}

type UnitSystem = 'metric' | 'imperial';
type Gender = 'female' | 'male';
type ActivityLevel = '1.2' | '1.375' | '1.55' | '1.725' | '1.9';

interface Results {
    maintenance: number;
    mildLoss: number;
    loss: number;
    extremeLoss: number;
    mildGain: number;
    gain: number;
    fastGain: number;
}

const GoalCard: React.FC<{
    title: string;
    rate: string;
    calories: number;
    color: string;
}> = ({ title, rate, calories, color }) => {
    return (
        <div className={`p-3 rounded-lg ${color} border border-black/5`}>
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-sm text-gray-800">{title}</p>
                    <p className="text-xs text-gray-600">{rate}</p>
                </div>
                <p className="font-bold text-xl text-gray-900">{calories.toLocaleString()}</p>
            </div>
        </div>
    );
};


export const CalorieCalculator: React.FC<CalorieCalculatorProps> = ({ setActiveTool, breadcrumbs, isBmrMode = false }) => {
    const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial');
    const [age, setAge] = useState('30');
    const [gender, setGender] = useState<Gender>('female');
    const [weight, setWeight] = useState('132');
    const [weightKg, setWeightKg] = useState('60');
    const [heightFt, setHeightFt] = useState('5');
    const [heightIn, setHeightIn] = useState('5');
    const [heightCm, setHeightCm] = useState('165');
    const [activityLevel, setActivityLevel] = useState<ActivityLevel>('1.375');
    const [results, setResults] = useState<Results | null>(null);
    const [copied, setCopied] = useState(false);
    const [bmrOnly, setBmrOnly] = useState<number | null>(null);

    const title = isBmrMode ? "Free BMR Calculator" : "Free Calorie Calculator";
    const description = isBmrMode
        ? "Calculate your Basal Metabolic Rate (BMR) for free - the number of calories your body needs to function at complete rest."
        : "Estimate the number of calories you need to consume each day to maintain, lose, or gain weight with our free tool.";

    const handleCalculate = () => {
        const ageN = parseInt(age);
        const weightInKg = unitSystem === 'metric'
            ? parseFloat(weightKg)
            : parseFloat(weight) * 0.453592;

        const heightInCm = unitSystem === 'metric'
            ? parseFloat(heightCm)
            : (parseInt(heightFt) * 12 + parseInt(heightIn)) * 2.54;

        if (isNaN(ageN) || isNaN(weightInKg) || isNaN(heightInCm)) {
            alert("Please fill in all fields with valid numbers.");
            return;
        }

        let bmr = 0;
        if (gender === 'male') {
            bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageN + 5;
        } else {
            bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageN - 161;
        }

        const tdee = bmr * parseFloat(activityLevel);

        if (isBmrMode) {
            setBmrOnly(Math.round(bmr));
            return;
        }

        setResults({
            maintenance: Math.round(tdee),
            mildLoss: Math.round(tdee - 250),
            loss: Math.round(tdee - 500),
            extremeLoss: Math.round(tdee - 1000),
            mildGain: Math.round(tdee + 250),
            gain: Math.round(tdee + 500),
            fastGain: Math.round(tdee + 1000),
        });
    };

    const handleCopy = async () => {
        if (!results) return;
        const text = `
My Daily Calorie Goals:
- Maintain Weight: ${results.maintenance} kcal

Weight Loss:
- Mild (0.5 lb/wk): ${results.mildLoss} kcal
- Standard (1 lb/wk): ${results.loss} kcal
- Extreme (2 lb/wk): ${results.extremeLoss} kcal

Weight Gain:
- Mild (0.5 lb/wk): ${results.mildGain} kcal
- Standard (1 lb/wk): ${results.gain} kcal
- Fast (2 lb/wk): ${results.fastGain} kcal
        `.trim();
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    return (
        <ToolContainer title={title} description={description} setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId={isBmrMode ? "bmr-calculator" : "calorie-calculator"}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm space-y-4">
                        <h3 className="font-bold text-lg text-brand-text-title mb-4">Your Stats</h3>
                        <div>
                            <label className="text-sm font-bold text-brand-text-title mb-2 block">Unit System</label>
                            <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                                <button onClick={() => setUnitSystem('imperial')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Imperial</button>
                                <button onClick={() => setUnitSystem('metric')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Metric</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-bold text-brand-text-title mb-1 block">Age</label>
                                <input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 outline-none" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-brand-text-title mb-1 block">Gender</label>
                                <select value={gender} onChange={e => setGender(e.target.value as Gender)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 outline-none">
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>
                        </div>

                        {unitSystem === 'imperial' ? (
                            <>
                                <div>
                                    <label className="text-sm font-bold text-brand-text-title mb-1 block">Height</label>
                                    <div className="flex gap-2">
                                        <input type="number" placeholder="ft" value={heightFt} onChange={e => setHeightFt(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 outline-none" />
                                        <input type="number" placeholder="in" value={heightIn} onChange={e => setHeightIn(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-brand-text-title mb-1 block">Weight (lbs)</label>
                                    <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 outline-none" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label className="text-sm font-bold text-brand-text-title mb-1 block">Height (cm)</label>
                                    <input type="number" value={heightCm} onChange={e => setHeightCm(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 outline-none" />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-brand-text-title mb-1 block">Weight (kg)</label>
                                    <input type="number" value={weightKg} onChange={e => setWeightKg(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 outline-none" />
                                </div>
                            </>
                        )}

                        {!isBmrMode && (<div>
                            <label className="text-sm font-bold text-brand-text-title mb-1 block">Activity Level</label>
                            <select value={activityLevel} onChange={e => setActivityLevel(e.target.value as ActivityLevel)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg appearance-none focus:ring-2 focus:ring-brand-pink/20 outline-none">
                                <option value="1.2">Sedentary: little or no exercise</option>
                                <option value="1.375">Lightly active: 1-3 days/week</option>
                                <option value="1.55">Moderately active: 3-5 days/week</option>
                                <option value="1.725">Very active: 6-7 days/week</option>
                                <option value="1.9">Extra active: very hard exercise & physical job</option>
                            </select>
                        </div>)}

                        <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
                            {isBmrMode ? 'Calculate BMR' : 'Calculate Calories'}
                        </button>
                    </div>
                </div>

                <div className="bg-brand-pink-light p-6 rounded-xl border border-brand-pink/20">
                    {isBmrMode ? (
                        bmrOnly !== null ? (
                            <div className="fade-in text-center flex flex-col items-center justify-center h-full">
                                <p className="text-brand-text-body font-semibold uppercase tracking-wide text-xs mb-2">Basal Metabolic Rate</p>
                                <div className="relative inline-block">
                                    <p className="text-6xl font-serif font-bold text-brand-pink">{bmrOnly.toLocaleString()}</p>
                                    <FlameIcon className="w-8 h-8 text-orange-400 absolute -top-2 -right-6 animate-pulse" />
                                </div>
                                <p className="text-brand-text-body font-semibold mt-2">Calories / Day</p>
                                <p className="text-xs text-brand-text-body/60 mt-4 max-w-xs mx-auto">This is the energy your body needs just to exist at rest.</p>
                            </div>
                        ) : (
                            <div className="text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                                <ScaleIcon className="w-16 h-16 text-brand-pink mb-4 opacity-50" />
                                <h3 className="text-xl font-bold text-brand-text-title">Your BMR will appear here</h3>
                            </div>
                        )
                    ) : results ? (
                        <div className="fade-in space-y-6">
                            <div className="text-center p-6 bg-white rounded-xl border-2 border-brand-pink shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand-pink"></div>
                                <p className="text-brand-text-body font-semibold uppercase tracking-wide text-xs mb-1">Maintenance Calories</p>
                                <p className="text-5xl font-serif font-bold text-brand-pink">{results.maintenance.toLocaleString()}</p>
                                <p className="text-brand-text-body font-semibold text-sm">Calories / Day</p>

                                {/* Macro Split */}
                                <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-xs">
                                    <div>
                                        <span className="block font-bold text-brand-text-title">Protein</span>
                                        <span className="text-brand-pink">{Math.round(results.maintenance * 0.3 / 4)}g</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-brand-text-title">Fats</span>
                                        <span className="text-brand-pink">{Math.round(results.maintenance * 0.3 / 9)}g</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-brand-text-title">Carbs</span>
                                        <span className="text-brand-pink">{Math.round(results.maintenance * 0.4 / 4)}g</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-brand-text-title text-center">Weight Loss</h4>
                                    <GoalCard title="Mild Loss" rate="0.5 lb/week" calories={results.mildLoss} color="bg-blue-50 hover:bg-blue-100 transition-colors" />
                                    <GoalCard title="Weight Loss" rate="1 lb/week" calories={results.loss} color="bg-blue-100 hover:bg-blue-200 transition-colors" />
                                    <GoalCard title="Extreme Loss" rate="2 lb/week" calories={results.extremeLoss} color="bg-blue-200 hover:bg-blue-300 transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-brand-text-title text-center">Weight Gain</h4>
                                    <GoalCard title="Mild Gain" rate="0.5 lb/week" calories={results.mildGain} color="bg-orange-50 hover:bg-orange-100 transition-colors" />
                                    <GoalCard title="Weight Gain" rate="1 lb/week" calories={results.gain} color="bg-orange-100 hover:bg-orange-200 transition-colors" />
                                    <GoalCard title="Fast Gain" rate="2 lb/week" calories={results.fastGain} color="bg-orange-200 hover:bg-orange-300 transition-colors" />
                                </div>
                            </div>

                            <div className="text-center">
                                <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pink-dark transition-colors">
                                    {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                    {copied ? 'All Goals Copied!' : 'Copy All Goals'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                            <ScaleIcon className="w-16 h-16 text-brand-pink mb-4 opacity-50" />
                            <h3 className="text-xl font-bold text-brand-text-title">Your results will appear here</h3>
                            <p className="text-sm text-brand-text-body/80 mt-1 max-w-xs mx-auto">Fill out the form to see your daily calorie needs and macro breakdown.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Calorie Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool helps you understand your daily energy needs to reach your fitness goals.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Enter Your Details:</strong> Input your age, gender, height, weight, and activity level. Be honest for the most accurate results!</li>
                            <li><strong>Calculate:</strong> Click the button to see your daily calorie needs for maintenance, weight loss, and weight gain.</li>
                            <li><strong>Plan:</strong> Use these numbers as a starting point for your meal planning.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>What is TDEE?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                TDEE stands for Total Daily Energy Expenditure. It's the total number of calories you burn in a day, including your BMR (Basal Metabolic Rate) and physical activity. To maintain your weight, you should eat this amount.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>How do I lose weight?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                To lose weight, you need to be in a calorie deficit, meaning you eat fewer calories than your TDEE. A deficit of 500 calories per day typically results in about 1 pound of weight loss per week.
                            </div>
                        </details>
                    </div>
                </section>
            </div>

        </ToolContainer>
    );
};
