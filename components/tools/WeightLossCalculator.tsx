import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId
import type { ToolId } from '../utils/slugs';
import { InfoIcon, ScaleIcon, ClipboardIcon, CheckCircleIcon } from '../Icons';

interface WeightLossCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
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

export const WeightLossCalculator: React.FC<WeightLossCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
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
        <ToolContainer title="Free Weight Loss Calculator" description="Estimate your daily calorie needs for weight loss, maintenance, or weight gain based on your activity level and TDEE with our free calculator." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="weight-loss-calculator">
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-bold text-brand-text-title mb-2 block">Unit System</label>
                        <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                            <button onClick={() => setUnitSystem('imperial')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Imperial</button>
                            <button onClick={() => setUnitSystem('metric')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Metric</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-bold text-brand-text-title mb-1 block">Age</label>
                            <input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-brand-text-title mb-1 block">Gender</label>
                            <select value={gender} onChange={e => setGender(e.target.value as Gender)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg">
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
                                    <input type="number" placeholder="ft" value={heightFt} onChange={e => setHeightFt(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                                    <input type="number" placeholder="in" value={heightIn} onChange={e => setHeightIn(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-bold text-brand-text-title mb-1 block">Weight (lbs)</label>
                                <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label className="text-sm font-bold text-brand-text-title mb-1 block">Height (cm)</label>
                                <input type="number" value={heightCm} onChange={e => setHeightCm(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-brand-text-title mb-1 block">Weight (kg)</label>
                                <input type="number" value={weightKg} onChange={e => setWeightKg(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                            </div>
                        </>
                    )}

                    <div>
                        <label className="text-sm font-bold text-brand-text-title mb-1 block">Activity Level</label>
                        <select value={activityLevel} onChange={e => setActivityLevel(e.target.value as ActivityLevel)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg appearance-none">
                            <option value="1.2">Sedentary: little or no exercise</option>
                            <option value="1.375">Lightly active: 1-3 days/week</option>
                            <option value="1.55">Moderately active: 3-5 days/week</option>
                            <option value="1.725">Very active: 6-7 days/week</option>
                            <option value="1.9">Extra active: very hard exercise & physical job</option>
                        </select>
                    </div>

                    <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                        Calculate
                    </button>
                </div>

                <div className="bg-brand-pink-light p-6 rounded-lg">
                    {results ? (
                        <div className="fade-in">
                            <div className="text-center mb-6 p-4 bg-white rounded-lg border border-brand-pink shadow">
                                <p className="text-brand-text-body font-semibold">Maintenance Calories</p>
                                <p className="text-5xl font-serif font-bold text-brand-pink">{results.maintenance.toLocaleString()}</p>
                                <p className="text-brand-text-body font-semibold">Calories/day</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-lg text-brand-text-title mb-3 text-center">Weight Loss</h4>
                                    <div className="space-y-3">
                                        <GoalCard title="Mild Loss" rate="0.5 lb/week" calories={results.mildLoss} color="bg-blue-100" />
                                        <GoalCard title="Weight Loss" rate="1 lb/week" calories={results.loss} color="bg-blue-200" />
                                        <GoalCard title="Extreme Loss" rate="2 lb/week" calories={results.extremeLoss} color="bg-red-200" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-brand-text-title mb-3 text-center">Weight Gain</h4>
                                    <div className="space-y-3">
                                        <GoalCard title="Mild Gain" rate="0.5 lb/week" calories={results.mildGain} color="bg-yellow-100" />
                                        <GoalCard title="Weight Gain" rate="1 lb/week" calories={results.gain} color="bg-yellow-200" />
                                        <GoalCard title="Fast Gain" rate="2 lb/week" calories={results.fastGain} color="bg-orange-200" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:underline">
                                    {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                    {copied ? 'All Goals Copied!' : 'Copy All Goals'}
                                </button>
                            </div>
                            <p className="text-xs text-brand-text-body/70 mt-2 text-center">These are estimates. A deficit of 500 calories per day is expected to result in a loss of about 1 pound per week.</p>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full">
                            <ScaleIcon className="w-12 h-12 text-brand-pink mb-4" />
                            <h3 className="text-xl font-bold text-brand-text-title">Your results will appear here</h3>
                            <p className="text-sm text-brand-text-body/80 mt-1">Fill out the form to get started.</p>
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
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Weight Loss Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool helps you plan your weight loss journey by estimating your daily calorie needs.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Input Your Stats:</strong> Enter your current age, gender, height, weight, and activity level.</li>
                            <li><strong>View Your Plan:</strong> The calculator provides three levels of calorie deficits for weight loss: Mild, Standard, and Extreme.</li>
                            <li><strong>Stay Consistent:</strong> Choose a calorie goal that is sustainable for you. Consistency is key!</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Is it safe to lose weight fast?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Generally, a weight loss of 1-2 pounds per week is considered safe and sustainable. Losing weight too quickly can lead to muscle loss and nutritional deficiencies.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Do I need to exercise?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                While weight loss is primarily driven by diet (calories in vs. calories out), exercise is crucial for overall health and can help you maintain your weight loss in the long term.
                            </div>
                        </details>
                    </div>
                </section>
            </div>

        </ToolContainer>
    );
};
