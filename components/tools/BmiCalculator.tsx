import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { HealthyIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface BmiCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type UnitSystem = 'metric' | 'imperial';

interface Results {
    bmi: number;
    category: string;
    color: string;
}

const getBmiCategory = (bmi: number): { category: string, color: string } => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'bg-blue-200' };
    if (bmi < 25) return { category: 'Normal weight', color: 'bg-green-200' };
    if (bmi < 30) return { category: 'Overweight', color: 'bg-yellow-200' };
    return { category: 'Obese', color: 'bg-red-200' };
};

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial');
    const [heightFt, setHeightFt] = useState('5');
    const [heightIn, setHeightIn] = useState('5');
    const [heightCm, setHeightCm] = useState('165');
    const [weight, setWeight] = useState('132');
    const [weightKg, setWeightKg] = useState('60');
    const [results, setResults] = useState<Results | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCalculate = () => {
        const heightInM = unitSystem === 'metric'
            ? parseFloat(heightCm) / 100
            : ((parseInt(heightFt) * 12) + parseInt(heightIn)) * 0.0254;

        const weightInKg = unitSystem === 'metric'
            ? parseFloat(weightKg)
            : parseFloat(weight) * 0.453592;

        if (isNaN(heightInM) || isNaN(weightInKg) || heightInM <= 0 || weightInKg <= 0) {
            alert("Please enter valid positive numbers for height and weight.");
            return;
        }

        const bmi = weightInKg / (heightInM * heightInM);
        const category = getBmiCategory(bmi);

        setResults({
            bmi: parseFloat(bmi.toFixed(1)),
            ...category
        });
    };

    const handleCopy = async () => {
        if (!results) return;
        const text = `My BMI is ${results.bmi} (${results.category})`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    return (
        <ToolContainer title="Free BMI Calculator for Men & Women" description="Calculate your Body Mass Index (BMI) for free. View our BMI chart to see if you are in a healthy weight range." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="bmi-calculator">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-bold text-brand-text-title mb-2 block">Unit System</label>
                        <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                            <button onClick={() => setUnitSystem('imperial')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Imperial</button>
                            <button onClick={() => setUnitSystem('metric')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Metric</button>
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

                    <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90">Calculate BMI</button>
                </div>

                <div className="bg-brand-pink-light p-6 rounded-xl border border-brand-pink/20">
                    {results ? (
                        <div className="fade-in space-y-6">
                            <div className="text-center">
                                <h3 className="font-semibold text-brand-text-body uppercase tracking-wide text-xs mb-1">Your BMI Score</h3>
                                <p className="font-serif font-bold text-7xl text-brand-pink mb-2">{results.bmi}</p>
                                <div className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full shadow-sm ${results.color}`}>
                                    {results.category}
                                </div>
                            </div>

                            {/* BMI Gauge */}
                            <div className="relative pt-8 pb-2 px-4">
                                <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden flex shadow-inner">
                                    <div className="h-full bg-blue-300" style={{ width: '18.5%' }}></div> {/* Underweight */}
                                    <div className="h-full bg-green-400" style={{ width: '25%' }}></div> {/* Normal (18.5-25) -> range is 6.5 units. 6.5/40 * 100? No, let's just map 0-40 scale */}
                                    {/* Let's map 0 to 40 BMI. 
                                        Underweight: < 18.5. (18.5/40)*100 = 46.25%
                                        Normal: 18.5 - 25. (6.5/40)*100 = 16.25%
                                        Overweight: 25 - 30. (5/40)*100 = 12.5%
                                        Obese: > 30. (10/40)*100 = 25% (up to 40)
                                    */}
                                </div>
                                {/* Better Gauge Implementation */}
                                <div className="absolute top-8 left-4 right-4 h-4 flex rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-300" style={{ width: '46%' }}></div>
                                    <div className="h-full bg-green-400" style={{ width: '16%' }}></div>
                                    <div className="h-full bg-yellow-300" style={{ width: '13%' }}></div>
                                    <div className="h-full bg-red-300" style={{ width: '25%' }}></div>
                                </div>

                                {/* Labels */}
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-1 px-4">
                                    <span>0</span>
                                    <span className="pl-12">18.5</span>
                                    <span className="pl-4">25</span>
                                    <span className="pl-2">30</span>
                                    <span>40+</span>
                                </div>

                                {/* Marker */}
                                <div
                                    className="absolute top-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-brand-text-title transform -translate-x-1/2 transition-all duration-1000 ease-out"
                                    style={{ left: `calc(1rem + ${Math.min(Math.max(results.bmi, 0), 40) / 40 * 100}%)` }} // 1rem padding adjustment
                                ></div>
                            </div>

                            <div className="text-center">
                                <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pink-dark transition-colors">
                                    {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                    {copied ? 'Result Copied!' : 'Copy Result'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                            <HealthyIcon className="w-16 h-16 text-brand-pink mb-4 opacity-50" />
                            <h3 className="text-xl font-bold text-brand-text-title">Your results will appear here</h3>
                            <p className="text-sm text-brand-text-body/80 mt-1 max-w-xs mx-auto">Enter your height and weight to calculate your BMI score.</p>
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
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This BMI Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool calculates your Body Mass Index (BMI) to help you understand if you're in a healthy weight range.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Input:</strong> Enter your height and weight. You can switch between Imperial (ft/lbs) and Metric (cm/kg) units.</li>
                            <li><strong>Calculate:</strong> Click the button to see your BMI score and category.</li>
                            <li><strong>Understand:</strong> Use the color-coded result to see where you fall on the BMI scale.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>What is a healthy BMI?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                A BMI between 18.5 and 24.9 is considered a healthy weight for most adults. Below 18.5 is underweight, 25-29.9 is overweight, and 30 or above is considered obese.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Is BMI accurate for everyone?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                BMI is a simple screening tool, but it has limitations. It doesn't distinguish between muscle and fat, so athletes might have a high BMI despite having low body fat. It also doesn't account for age, gender, or bone density.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
