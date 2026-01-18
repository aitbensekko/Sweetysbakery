
import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for 'ToolId' type.
import type { ToolId } from '../utils/slugs';
import { FlameIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface BmrCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type UnitSystem = 'metric' | 'imperial';
type Gender = 'female' | 'male';

export const BmrCalculator: React.FC<BmrCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial');
    const [age, setAge] = useState('30');
    const [gender, setGender] = useState<Gender>('female');
    const [weight, setWeight] = useState('132');
    const [weightKg, setWeightKg] = useState('60');
    const [heightFt, setHeightFt] = useState('5');
    const [heightIn, setHeightIn] = useState('5');
    const [heightCm, setHeightCm] = useState('165');
    const [bmr, setBmr] = useState<number | null>(null);
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

        let calculatedBmr = 0;
        if (gender === 'male') {
            calculatedBmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageN + 5;
        } else {
            calculatedBmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageN - 161;
        }

        setBmr(Math.round(calculatedBmr));
    };

    const handleCopy = async () => {
        if (bmr === null) return;
        try {
            await navigator.clipboard.writeText(bmr.toString());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    return (
        <ToolContainer title="Free BMR Calculator" description="Calculate your Basal Metabolic Rate (BMR) for free - the number of calories your body needs to function at complete rest." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="bmr-calculator">
            <div className="grid md:grid-cols-2 gap-8">
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

                    <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                        Calculate BMR
                    </button>
                </div>

                <div className="bg-brand-pink-light p-6 rounded-lg text-center flex flex-col items-center justify-center">
                    {bmr !== null ? (
                        <div className="fade-in">
                            <h3 className="font-semibold text-brand-text-body">Your Basal Metabolic Rate is</h3>
                            <div className="flex items-center justify-center gap-2">
                                <p className="font-serif font-bold text-7xl text-brand-pink my-2">{bmr.toLocaleString()}</p>
                                <button onClick={handleCopy} title="Copy BMR" className="p-1 self-end mb-4">
                                    {copied ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/50 hover:text-brand-pink" />}
                                </button>
                            </div>
                            <p className="font-semibold text-brand-text-body">Calories/day</p>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full">
                            <FlameIcon className="w-12 h-12 text-brand-pink mb-4" />
                            <h3 className="text-xl font-bold text-brand-text-title">Your BMR will appear here</h3>
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
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This BMR Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool calculates your Basal Metabolic Rate (BMR), which is the number of calories your body needs to function at complete rest.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Enter Details:</strong> Input your age, gender, height, and weight.</li>
                            <li><strong>Calculate:</strong> Click the button to see your BMR.</li>
                            <li><strong>Use the Result:</strong> Your BMR is the starting point for calculating your total daily calorie needs (TDEE).</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Why is BMR important?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Knowing your BMR helps you understand your body's baseline energy needs. It's crucial for creating a diet plan, whether you want to lose, gain, or maintain weight.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Does BMR change?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Yes, BMR decreases as you age and can change with weight loss or gain. Muscle mass also increases BMR, so building muscle can help boost your metabolism.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
