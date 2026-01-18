import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { BodyIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface BodyFatCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type UnitSystem = 'metric' | 'imperial';
type Gender = 'female' | 'male';

interface Results {
    bodyFatPercentage: number;
    fatMass: number;
    leanMass: number;
}

const getCategory = (gender: Gender, bfp: number): { category: string, color: string } => {
    if (gender === 'female') {
        if (bfp < 14) return { category: 'Essential Fat / Athletes', color: 'bg-blue-200' };
        if (bfp < 25) return { category: 'Fitness', color: 'bg-green-200' };
        if (bfp < 32) return { category: 'Average', color: 'bg-yellow-200' };
        return { category: 'Obese', color: 'bg-red-200' };
    } else { // male
        if (bfp < 6) return { category: 'Essential Fat', color: 'bg-blue-200' };
        if (bfp < 18) return { category: 'Athletes / Fitness', color: 'bg-green-200' };
        if (bfp < 25) return { category: 'Average', color: 'bg-yellow-200' };
        return { category: 'Obese', color: 'bg-red-200' };
    }
};

export const BodyFatCalculator: React.FC<BodyFatCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial');
    const [gender, setGender] = useState<Gender>('female');
    const [height, setHeight] = useState('65');
    const [heightCm, setHeightCm] = useState('165');
    const [neck, setNeck] = useState('13');
    const [neckCm, setNeckCm] = useState('33');
    const [waist, setWaist] = useState('28');
    const [waistCm, setWaistCm] = useState('71');
    const [hips, setHips] = useState('36');
    const [hipsCm, setHipsCm] = useState('91');
    const [weight, setWeight] = useState('132');
    const [weightKg, setWeightKg] = useState('60');
    const [results, setResults] = useState<Results | null>(null);
    const [copied, setCopied] = useState(false);

    const labelStyles = "text-sm font-bold text-brand-text-title mb-2 block";
    const inputStyles = "w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition-all shadow-sm text-brand-text-title placeholder-brand-text-body/40";


    const handleCalculate = () => {
        let h_in, n_in, w_in, hips_in;
        if (unitSystem === 'metric') {
            h_in = parseFloat(heightCm) / 2.54;
            n_in = parseFloat(neckCm) / 2.54;
            w_in = parseFloat(waistCm) / 2.54;
            hips_in = parseFloat(hipsCm) / 2.54;
        } else {
            h_in = parseFloat(height);
            n_in = parseFloat(neck);
            w_in = parseFloat(waist);
            hips_in = parseFloat(hips);
        }

        const totalWeightLbs = unitSystem === 'metric' ? parseFloat(weightKg) * 2.20462 : parseFloat(weight);
        const totalWeightKg = unitSystem === 'metric' ? parseFloat(weightKg) : parseFloat(weight) * 0.453592;

        if (isNaN(h_in) || isNaN(n_in) || isNaN(w_in) || (gender === 'female' && isNaN(hips_in)) || isNaN(totalWeightLbs)) {
            alert("Please fill all fields with valid numbers.");
            return;
        }

        let bfp = 0;
        if (gender === 'male') {
            bfp = 86.010 * Math.log10(w_in - n_in) - 70.041 * Math.log10(h_in) + 36.76;
        } else {
            bfp = 163.205 * Math.log10(w_in + hips_in - n_in) - 97.684 * Math.log10(h_in) - 78.387;
        }

        const fatMassLbs = totalWeightLbs * (bfp / 100);
        const leanMassLbs = totalWeightLbs - fatMassLbs;
        const fatMassKg = totalWeightKg * (bfp / 100);
        const leanMassKg = totalWeightKg - fatMassKg;

        setResults({
            bodyFatPercentage: parseFloat(bfp.toFixed(1)),
            fatMass: unitSystem === 'imperial' ? parseFloat(fatMassLbs.toFixed(1)) : parseFloat(fatMassKg.toFixed(1)),
            leanMass: unitSystem === 'imperial' ? parseFloat(leanMassLbs.toFixed(1)) : parseFloat(leanMassKg.toFixed(1)),
        });
    };

    const handleCopy = async () => {
        if (!results) return;
        const text = `My Estimated Body Fat: ${results.bodyFatPercentage}%\nFat Mass: ${results.fatMass} ${unitSystem === 'metric' ? 'kg' : 'lbs'}\nLean Mass: ${results.leanMass} ${unitSystem === 'metric' ? 'kg' : 'lbs'}`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    return (
        <ToolContainer title="Free Body Fat Percentage Calculator" description="Calculate your body fat percentage for free using the U.S. Navy method. Get accurate estimates of your fat mass and lean mass." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="body-fat-calculator">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                        <div>
                            <label className={labelStyles}>Unit System</label>
                            <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                                <button onClick={() => setUnitSystem('imperial')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Imperial</button>
                                <button onClick={() => setUnitSystem('metric')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Metric</button>
                            </div>
                        </div>
                        <div>
                            <label className={labelStyles}>Gender</label>
                            <select value={gender} onChange={e => setGender(e.target.value as Gender)} className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition-all shadow-sm text-brand-text-title">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelStyles}>Height ({unitSystem === 'imperial' ? 'in' : 'cm'})</label>
                            <input type="number" value={unitSystem === 'imperial' ? height : heightCm} onChange={e => unitSystem === 'imperial' ? setHeight(e.target.value) : setHeightCm(e.target.value)} className={inputStyles} />
                        </div>
                        <div>
                            <label className={labelStyles}>Weight ({unitSystem === 'imperial' ? 'lbs' : 'kg'})</label>
                            <input type="number" value={unitSystem === 'imperial' ? weight : weightKg} onChange={e => unitSystem === 'imperial' ? setWeight(e.target.value) : setWeightKg(e.target.value)} className={inputStyles} />
                        </div>
                        <div>
                            <label className={labelStyles}>Neck ({unitSystem === 'imperial' ? 'in' : 'cm'})</label>
                            <input type="number" value={unitSystem === 'imperial' ? neck : neckCm} onChange={e => unitSystem === 'imperial' ? setNeck(e.target.value) : setNeckCm(e.target.value)} className={inputStyles} />
                        </div>
                        <div>
                            <label className={labelStyles}>Waist ({unitSystem === 'imperial' ? 'in' : 'cm'})</label>
                            <input type="number" value={unitSystem === 'imperial' ? waist : waistCm} onChange={e => unitSystem === 'imperial' ? setWaist(e.target.value) : setWaistCm(e.target.value)} className={inputStyles} />
                        </div>
                        {gender === 'female' && (
                            <div>
                                <label className={labelStyles}>Hips ({unitSystem === 'imperial' ? 'in' : 'cm'})</label>
                                <input type="number" value={unitSystem === 'imperial' ? hips : hipsCm} onChange={e => unitSystem === 'imperial' ? setHips(e.target.value) : setHipsCm(e.target.value)} className={inputStyles} />
                            </div>
                        )}
                    </div>
                    <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-4 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">
                        Calculate Body Fat
                    </button>
                </div>
                <div className="bg-brand-pink-light p-6 rounded-xl border border-brand-pink/20">
                    {results ? (
                        <div className="fade-in space-y-6">
                            <div className="text-center">
                                <h3 className="font-semibold text-brand-text-body uppercase tracking-wide text-xs mb-1">Estimated Body Fat</h3>
                                <p className="font-serif font-bold text-7xl text-brand-pink mb-2">{results.bodyFatPercentage}%</p>
                                <div className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full shadow-sm ${getCategory(gender, results.bodyFatPercentage).color}`}>
                                    {getCategory(gender, results.bodyFatPercentage).category}
                                </div>
                            </div>

                            {/* Visual Category Chart */}
                            <div className="relative pt-6 pb-2 px-2">
                                <div className="flex text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider justify-between">
                                    <span>Essential</span>
                                    <span>Athletes</span>
                                    <span>Fitness</span>
                                    <span>Average</span>
                                    <span>Obese</span>
                                </div>
                                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-blue-300" style={{ width: '15%' }}></div>
                                    <div className="h-full bg-green-300" style={{ width: '15%' }}></div>
                                    <div className="h-full bg-green-200" style={{ width: '15%' }}></div>
                                    <div className="h-full bg-yellow-200" style={{ width: '20%' }}></div>
                                    <div className="h-full bg-red-200" style={{ width: '35%' }}></div>
                                </div>
                                {/* Marker */}
                                <div
                                    className="absolute top-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-brand-text-title transform -translate-x-1/2 transition-all duration-1000 ease-out"
                                    style={{ left: `${Math.min(Math.max(results.bodyFatPercentage, 0), 50) * 2}%` }}
                                ></div>
                                <div
                                    className="absolute top-10 text-xs font-bold text-brand-text-title transform -translate-x-1/2 transition-all duration-1000 ease-out"
                                    style={{ left: `${Math.min(Math.max(results.bodyFatPercentage, 0), 50) * 2}%` }}
                                >
                                    You
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-left bg-white p-5 rounded-xl border border-brand-border shadow-sm">
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-wide text-brand-text-title/60 mb-1">Fat Mass</h4>
                                    <p className="text-2xl font-serif font-bold text-brand-text-title">{results.fatMass} <span className="text-sm font-sans font-normal text-brand-text-body">{unitSystem === 'metric' ? 'kg' : 'lbs'}</span></p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-wide text-brand-text-title/60 mb-1">Lean Mass</h4>
                                    <p className="text-2xl font-serif font-bold text-brand-text-title">{results.leanMass} <span className="text-sm font-sans font-normal text-brand-text-body">{unitSystem === 'metric' ? 'kg' : 'lbs'}</span></p>
                                </div>
                            </div>

                            <div className="text-center">
                                <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pink-dark transition-colors">
                                    {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                    {copied ? 'Results Copied!' : 'Copy Results'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full min-h-[350px]">
                            <BodyIcon className="w-16 h-16 text-brand-pink mb-4 opacity-50" />
                            <h3 className="text-xl font-bold text-brand-text-title">Your results will appear here</h3>
                            <p className="text-sm text-brand-text-body/80 mt-1 max-w-xs mx-auto">Fill out the form to see your estimated body fat percentage and composition.</p>
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
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Body Fat Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool estimates your body composition using the U.S. Navy method.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Measure:</strong> Use a soft tape measure to record your neck, waist, and hip (for women) circumferences.</li>
                            <li><strong>Input:</strong> Enter your measurements along with your height, weight, age, and gender.</li>
                            <li><strong>Calculate:</strong> Click the button to see your estimated body fat percentage, fat mass, and lean mass.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>How accurate is this method?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                The U.S. Navy method is considered accurate within 3-4% for most people. However, it can be less accurate for extremely muscular individuals or those with very low body fat.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>What is a healthy body fat percentage?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Healthy ranges vary by age and gender. Generally, 21-32% is considered healthy for women, and 8-19% for men.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
