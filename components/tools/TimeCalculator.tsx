import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { StopwatchIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface TimeCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const TimeInput: React.FC<{ title: string, idPrefix: string, h: string, setH: (v: string) => void, m: string, setM: (v: string) => void, s: string, setS: (v: string) => void }> = ({ title, idPrefix, h, setH, m, setM, s, setS }) => (
    <div>
        <label id={`${idPrefix}-label`} className="text-sm font-bold text-brand-text-title mb-2 block">{title}</label>
        <div className="grid grid-cols-3 gap-2" role="group" aria-labelledby={`${idPrefix}-label`}>
            <input type="number" value={h} onChange={e => setH(e.target.value)} className="w-full p-2 border rounded-lg text-center" placeholder="hh" aria-label="Hours" />
            <input type="number" value={m} onChange={e => setM(e.target.value)} className="w-full p-2 border rounded-lg text-center" placeholder="mm" aria-label="Minutes" />
            <input type="number" value={s} onChange={e => setS(e.target.value)} className="w-full p-2 border rounded-lg text-center" placeholder="ss" aria-label="Seconds" />
        </div>
    </div>
);

export const TimeCalculator: React.FC<TimeCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [h1, setH1] = useState('10');
    const [m1, setM1] = useState('30');
    const [s1, setS1] = useState('0');

    const [h2, setH2] = useState('2');
    const [m2, setM2] = useState('15');
    const [s2, setS2] = useState('0');

    const [result, setResult] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCalculate = (operation: 'add' | 'subtract') => {
        const time1InSeconds = (parseInt(h1) || 0) * 3600 + (parseInt(m1) || 0) * 60 + (parseInt(s1) || 0);
        const time2InSeconds = (parseInt(h2) || 0) * 3600 + (parseInt(m2) || 0) * 60 + (parseInt(s2) || 0);

        let totalSeconds = operation === 'add'
            ? time1InSeconds + time2InSeconds
            : time1InSeconds - time2InSeconds;

        const sign = totalSeconds < 0 ? '-' : '';
        totalSeconds = Math.abs(totalSeconds);

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setResult(`${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    };

    const handleCopy = () => {
        if (!result) return;
        navigator.clipboard.writeText(result).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <ToolContainer title="Free Time Calculator" description="Add or subtract time durations for free. Useful for calculating total work hours or travel time." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="time-calculator">
            <div className="max-w-xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-8 items-center">
                    <TimeInput title="Start Time" idPrefix="startTime" h={h1} setH={setH1} m={m1} setM={setM1} s={s1} setS={setS1} />
                    <TimeInput title="Time to Add/Subtract" idPrefix="durationTime" h={h2} setH={setH2} m={m2} setM={setM2} s={s2} setS={setS2} />
                </div>
                <div className="flex gap-2 mt-6">
                    <button onClick={() => handleCalculate('add')} className="flex-1 bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90">Add</button>
                    <button onClick={() => handleCalculate('subtract')} className="flex-1 bg-gray-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-gray-700">Subtract</button>
                </div>
                {result && (
                    <div className="mt-8 bg-brand-pink-light p-6 rounded-lg text-center fade-in">
                        <h3 className="font-semibold text-brand-text-body">Result</h3>
                        <div className="flex items-center justify-center gap-2">
                            <p className="font-mono font-bold text-5xl text-brand-pink my-2">{result}</p>
                            <button onClick={handleCopy} title="Copy time" className="p-1">
                                {copied ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/50 hover:text-brand-pink" />}
                            </button>
                        </div>
                    </div>
                )}
                <div className="mt-12 space-y-8">
                    <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-pink/10 rounded-lg">
                                <InfoIcon className="w-6 h-6 text-brand-pink" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Time Calculator</h3>
                        </div>
                        <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                            <p>
                                This tool helps you add or subtract time durations, perfect for calculating total hours or scheduling.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong>Start Time:</strong> Enter your initial time in hours, minutes, and seconds.</li>
                                <li><strong>Duration:</strong> Enter the time you want to add or subtract.</li>
                                <li><strong>Calculate:</strong> Click "Add" or "Subtract" to see the total duration.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Real-Life Examples</h3>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg border border-brand-border/50">
                                <h4 className="font-bold text-brand-text-title mb-2">⏱️ Total Project Time</h4>
                                <p className="text-sm text-brand-text-body/80">
                                    If your dough proofs for 1 hour 30 minutes and then bakes for 45 minutes, add them to find the total time (2 hours 15 minutes).
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-brand-border/50">
                                <h4 className="font-bold text-brand-text-title mb-2">📅 Scheduling Backwards</h4>
                                <p className="text-sm text-brand-text-body/80">
                                    If a cake needs to cool for 2 hours before frosting, and you want to start frosting at 3:00 PM (15:00:00), subtract 2 hours to find when it must be out of the oven.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                    <span>Can I calculate negative time?</span>
                                    <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                    Yes, if you subtract a larger duration from a smaller one, the result will show as negative (e.g., -01:30:00).
                                </div>
                            </details>
                        </div>
                    </section>
                </div>
            </div>
        </ToolContainer>
    );
};
