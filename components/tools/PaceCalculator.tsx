import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { RunningIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface PaceCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type Mode = 'pace' | 'time' | 'distance';
type DistanceUnit = 'miles' | 'km';

const inputBaseClasses = "w-full rounded-lg text-center font-semibold text-lg p-3 focus:ring-2 focus:ring-brand-pink focus:outline-none transition-colors duration-200";
const activeInputClasses = `bg-white border border-brand-border text-brand-text-title ${inputBaseClasses}`;
const resultInputClasses = `bg-brand-pink-light border border-brand-border text-brand-text-title cursor-default ${inputBaseClasses}`;
const activeSelectClasses = `bg-white border border-brand-border text-brand-text-title ${inputBaseClasses}`;

export const PaceCalculator: React.FC<PaceCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [mode, setMode] = useState<Mode>('pace');

    const [timeH, setTimeH] = useState('0');
    const [timeM, setTimeM] = useState('30');
    const [timeS, setTimeS] = useState('0');

    const [distance, setDistance] = useState('5');
    const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>('km');

    const [paceM, setPaceM] = useState('6');
    const [paceS, setPaceS] = useState('0');
    const [paceUnit, setPaceUnit] = useState<DistanceUnit>('km');
    const [copied, setCopied] = useState(false);

    const { calculatedPace, calculatedTime, calculatedDistance } = useMemo(() => {
        const timeInSeconds = (parseInt(timeH) || 0) * 3600 + (parseInt(timeM) || 0) * 60 + (parseInt(timeS) || 0);
        const paceInSeconds = (parseInt(paceM) || 0) * 60 + (parseInt(paceS) || 0);
        const dist = parseFloat(distance) || 0;

        // Calculate Pace
        let pacePerUnit = 0;
        if (dist > 0 && timeInSeconds > 0) {
            pacePerUnit = timeInSeconds / dist;
            if (distanceUnit !== paceUnit) {
                pacePerUnit = distanceUnit === 'miles' ? pacePerUnit / 1.60934 : pacePerUnit * 1.60934;
            }
        }
        const calcPace = {
            m: isFinite(pacePerUnit) ? Math.floor(pacePerUnit / 60) : 0,
            s: isFinite(pacePerUnit) ? Math.round(pacePerUnit % 60) : 0,
        };

        // Calculate Time
        let totalTime = 0;
        if (dist > 0 && paceInSeconds > 0) {
            totalTime = paceInSeconds * dist;
            if (distanceUnit !== paceUnit) {
                totalTime = distanceUnit === 'miles' ? totalTime * 1.60934 : totalTime / 1.60934;
            }
        }
        const calcTime = {
            h: isFinite(totalTime) ? Math.floor(totalTime / 3600) : 0,
            m: isFinite(totalTime) ? Math.floor((totalTime % 3600) / 60) : 0,
            s: isFinite(totalTime) ? Math.round(totalTime % 60) : 0,
        };

        // Calculate Distance
        let calcDist = 0;
        if (timeInSeconds > 0 && paceInSeconds > 0) {
            calcDist = timeInSeconds / paceInSeconds;
            if (distanceUnit !== paceUnit) {
                calcDist = paceUnit === 'miles' ? calcDist * 1.60934 : calcDist / 1.60934;
            }
        }

        return {
            calculatedPace: calcPace,
            calculatedTime: calcTime,
            calculatedDistance: isFinite(calcDist) ? parseFloat(calcDist.toFixed(2)) : 0
        };
    }, [timeH, timeM, timeS, distance, distanceUnit, paceM, paceS, paceUnit]);

    const handleCopy = async () => {
        let text = '';
        if (mode === 'pace' && calculatedPace) {
            text = `${calculatedPace.m}:${String(calculatedPace.s).padStart(2, '0')}`;
        } else if (mode === 'time' && calculatedTime) {
            text = `${calculatedTime.h}:${String(calculatedTime.m).padStart(2, '0')}:${String(calculatedTime.s).padStart(2, '0')}`;
        } else if (mode === 'distance' && calculatedDistance) {
            text = `${calculatedDistance}`;
        }

        if (text) {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                alert('Failed to copy result.');
            }
        }
    };

    return (
        <ToolContainer title="Free Pace Calculator for Running" description="Calculate your running pace, finish time, or distance for free based on the other two variables." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="pace-calculator">
            <div className="max-w-xl mx-auto">
                <div className="grid grid-cols-3 gap-2 p-1 bg-brand-pink-light rounded-lg mb-6">
                    <button onClick={() => setMode('pace')} className={`py-2 text-sm font-bold rounded-md transition-colors ${mode === 'pace' ? 'bg-white shadow text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Calculate Pace</button>
                    <button onClick={() => setMode('time')} className={`py-2 text-sm font-bold rounded-md transition-colors ${mode === 'time' ? 'bg-white shadow text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Calculate Time</button>
                    <button onClick={() => setMode('distance')} className={`py-2 text-sm font-bold rounded-md transition-colors ${mode === 'distance' ? 'bg-white shadow text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Calculate Distance</button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="font-bold text-brand-text-title mb-2 block">Time</label>
                        <div className="grid grid-cols-3 gap-2">
                            <input type="number" value={mode === 'time' ? calculatedTime.h : timeH} onChange={e => setTimeH(e.target.value)} disabled={mode === 'time'} className={mode === 'time' ? resultInputClasses : activeInputClasses} placeholder="hh" />
                            <input type="number" value={mode === 'time' ? calculatedTime.m : timeM} onChange={e => setTimeM(e.target.value)} disabled={mode === 'time'} className={mode === 'time' ? resultInputClasses : activeInputClasses} placeholder="mm" />
                            <input type="number" value={mode === 'time' ? calculatedTime.s : timeS} onChange={e => setTimeS(e.target.value)} disabled={mode === 'time'} className={mode === 'time' ? resultInputClasses : activeInputClasses} placeholder="ss" />
                        </div>
                    </div>

                    <div>
                        <label className="font-bold text-brand-text-title mb-2 block">Distance</label>
                        <div className="grid grid-cols-2 gap-2">
                            <input type="number" value={mode === 'distance' ? calculatedDistance : distance} onChange={e => setDistance(e.target.value)} disabled={mode === 'distance'} className={mode === 'distance' ? resultInputClasses : activeInputClasses} />
                            <select value={distanceUnit} onChange={e => setDistanceUnit(e.target.value as DistanceUnit)} className={activeSelectClasses}>
                                <option value="miles">miles</option>
                                <option value="km">km</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="font-bold text-brand-text-title mb-2 block">Pace (per {paceUnit})</label>
                        <div className="grid grid-cols-3 gap-2">
                            <input type="number" value={mode === 'pace' ? calculatedPace.m : paceM} onChange={e => setPaceM(e.target.value)} disabled={mode === 'pace'} className={mode === 'pace' ? resultInputClasses : activeInputClasses} placeholder="mm" />
                            <input type="number" value={mode === 'pace' ? calculatedPace.s : paceS} onChange={e => setPaceS(e.target.value)} disabled={mode === 'pace'} className={mode === 'pace' ? resultInputClasses : activeInputClasses} placeholder="ss" />
                            <select value={paceUnit} onChange={e => setPaceUnit(e.target.value as DistanceUnit)} className={activeSelectClasses}>
                                <option value="miles">per mile</option>
                                <option value="km">per km</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:underline">
                        {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                        {copied ? 'Result Copied!' : 'Copy Result'}
                    </button>
                </div>
                <div className="mt-12 space-y-8">
                    <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-pink/10 rounded-lg">
                                <InfoIcon className="w-6 h-6 text-brand-pink" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Pace Calculator</h3>
                        </div>
                        <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                            <p>
                                This tool helps runners plan their training and races by calculating pace, time, or distance.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong>Calculate Pace:</strong> Enter your time and distance to find your average pace.</li>
                                <li><strong>Calculate Time:</strong> Enter your distance and goal pace to see your estimated finish time.</li>
                                <li><strong>Calculate Distance:</strong> Enter your time and pace to see how far you ran.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                    <span>What is a good running pace?</span>
                                    <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                    A "good" pace is relative to your experience and goals. For beginners, 10-12 minutes per mile is common. Elite runners may run 5-6 minutes per mile. The best pace is one you can maintain comfortably.
                                </div>
                            </details>
                            <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                    <span>How do I improve my pace?</span>
                                    <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                    Consistency is key. Mix up your training with long slow runs, interval training (speed work), and tempo runs. Strength training can also help improve your running economy.
                                </div>
                            </details>
                        </div>
                    </section>
                </div>
            </div>
        </ToolContainer>
    );
};
