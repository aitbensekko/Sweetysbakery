import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { HealthyIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface IdealWeightCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type UnitSystem = 'metric' | 'imperial';
type Gender = 'female' | 'male';

interface Results {
    range: string;
}

export const IdealWeightCalculator: React.FC<IdealWeightCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial');
    const [gender, setGender] = useState<Gender>('female');
    const [heightFt, setHeightFt] = useState('5');
    const [heightIn, setHeightIn] = useState('5');
    const [heightCm, setHeightCm] = useState('165');
    const [results, setResults] = useState<Results | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCalculate = () => {
        const heightInCm = unitSystem === 'metric'
            ? parseFloat(heightCm)
            : (parseInt(heightFt) * 12 + parseInt(heightIn)) * 2.54;

        if (isNaN(heightInCm) || heightInCm <= 0) {
            alert("Please enter a valid height.");
            return;
        }

        const heightInM = heightInCm / 100;
        const heightInMSquared = heightInM * heightInM;

        // BMI range
        const lowerBmi = 18.5;
        const upperBmi = 24.9;

        const lowerWeightKg = lowerBmi * heightInMSquared;
        const upperWeightKg = upperBmi * heightInMSquared;

        const lowerWeightLbs = lowerWeightKg * 2.20462;
        const upperWeightLbs = upperWeightKg * 2.20462;

        const range = unitSystem === 'imperial'
            ? `${Math.round(lowerWeightLbs)} - ${Math.round(upperWeightLbs)} lbs`
            : `${Math.round(lowerWeightKg)} - ${Math.round(upperWeightKg)} kg`;

        setResults({ range });
    };

    const handleCopy = async () => {
        if (!results) return;
        try {
            await navigator.clipboard.writeText(results.range);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    return (
        <ToolContainer title="Free Ideal Weight Calculator" description="Estimate your healthy weight range for free based on your height and the standard BMI guidelines." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-bold text-brand-text-title mb-2 block">Unit System</label>
                        <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                            <button onClick={() => setUnitSystem('imperial')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Imperial</button>
                            <button onClick={() => setUnitSystem('metric')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Metric</button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="gender" className="text-sm font-bold text-brand-text-title mb-1 block">Gender</label>
                        <select id="gender" value={gender} onChange={e => setGender(e.target.value as Gender)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>

                    {unitSystem === 'imperial' ? (
                        <div>
                            <label id="heightLabel" className="text-sm font-bold text-brand-text-title mb-1 block">Height</label>
                            <div className="flex gap-2" role="group" aria-labelledby="heightLabel">
                                <input type="number" placeholder="ft" value={heightFt} onChange={e => setHeightFt(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" aria-label="Height in feet" />
                                <input type="number" placeholder="in" value={heightIn} onChange={e => setHeightIn(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" aria-label="Height in inches" />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="heightCm" className="text-sm font-bold text-brand-text-title mb-1 block">Height (cm)</label>
                            <input id="heightCm" type="number" value={heightCm} onChange={e => setHeightCm(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                        </div>
                    )}

                    <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                        Calculate Ideal Weight
                    </button>
                </div>

                <div className="bg-brand-pink-light p-6 rounded-lg text-center flex flex-col items-center justify-center">
                    {results ? (
                        <div className="fade-in">
                            <h3 className="font-semibold text-brand-text-body">Your Healthy Weight Range is</h3>
                            <div className="flex items-center justify-center gap-2">
                                <p className="font-serif font-bold text-5xl text-brand-pink my-2">{results.range}</p>
                                <button onClick={handleCopy} title="Copy weight range" className="p-1">
                                    {copied ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/50 hover:text-brand-pink" />}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full">
                            <HealthyIcon className="w-12 h-12 text-brand-pink mb-4" />
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
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Ideal Weight Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool helps you determine a healthy weight range based on your height and standard BMI guidelines.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Select Unit:</strong> Choose between Imperial (ft/lbs) or Metric (cm/kg).</li>
                            <li><strong>Enter Height:</strong> Input your height accurately.</li>
                            <li><strong>Calculate:</strong> Click the button to see the weight range that corresponds to a healthy BMI (18.5 - 24.9).</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Is this weight range for everyone?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                This range is based on BMI, which applies to most adults. However, it may not be suitable for athletes with high muscle mass, pregnant women, or the elderly.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Why is the range so wide?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                A healthy weight isn't a single number. It's a range that accounts for different body types and builds. Anywhere within this range is generally considered healthy.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
