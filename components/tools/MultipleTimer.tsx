import React, { useState, useEffect, useRef } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClockIcon, PlusCircleIcon, PlayIcon, XIcon, InfoIcon } from '../Icons';

interface Timer {
    id: number;
    label: string;
    initialTime: number;
    timeLeft: number;
    isRunning: boolean;
}

interface MultipleTimerProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const formatTime = (seconds: number) => {
    if (seconds < 0) seconds = 0;
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
};

const TimerDisplay: React.FC<{ timer: Timer, onToggle: (id: number) => void, onReset: (id: number) => void, onRemove: (id: number) => void }> = ({ timer, onToggle, onReset, onRemove }) => {
    const progress = timer.initialTime > 0 ? (timer.initialTime - timer.timeLeft) / timer.initialTime * 100 : 0;
    const isDone = timer.timeLeft === 0;

    return (
        <div className={`p-4 rounded-lg border relative overflow-hidden transition-colors ${isDone ? 'bg-red-100 border-red-300' : 'bg-white border-brand-border'}`}>
            <div style={{ width: `${progress}%` }} className={`absolute top-0 left-0 bottom-0 ${isDone ? 'bg-red-200' : 'bg-brand-pink-light'} transition-all duration-1000 linear`}></div>
            <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <p className={`font-bold text-brand-text-title truncate pr-2 ${isDone ? 'text-red-700' : ''}`}>{timer.label}</p>
                    <button onClick={() => onRemove(timer.id)} className="text-gray-400 hover:text-red-500 flex-shrink-0"><XIcon className="w-5 h-5" /></button>
                </div>
                <p className={`text-5xl font-mono my-4 text-center ${isDone ? 'text-red-700 animate-pulse' : 'text-brand-text-title'}`}>
                    {formatTime(timer.timeLeft)}
                </p>
                <div className="flex justify-center gap-2">
                    <button onClick={() => onToggle(timer.id)} className="font-semibold text-sm bg-gray-200 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300 w-20">{timer.isRunning ? 'Pause' : 'Start'}</button>
                    <button onClick={() => onReset(timer.id)} className="font-semibold text-sm bg-gray-200 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300">Reset</button>
                </div>
            </div>
        </div>
    );
};

export const MultipleTimer: React.FC<MultipleTimerProps> = ({ setActiveTool, breadcrumbs }) => {
    const [timers, setTimers] = useState<Timer[]>([]);
    const [label, setLabel] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('5');
    const [seconds, setSeconds] = useState('0');
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Lazy initialization of AudioContext on user interaction to comply with browser policies
        const initAudioContext = () => {
            if (!audioContextRef.current) {
                try {
                    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
                } catch (e) {
                    console.error("Web Audio API is not supported in this browser.");
                }
            }
        };
        // Add event listeners to initialize on first user interaction
        window.addEventListener('click', initAudioContext, { once: true });
        window.addEventListener('keydown', initAudioContext, { once: true });

        const playBeep = () => {
            if (!audioContextRef.current) return;
            const oscillator = audioContextRef.current.createOscillator();
            const gainNode = audioContextRef.current.createGain();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, audioContextRef.current.currentTime);
            gainNode.gain.setValueAtTime(0.5, audioContextRef.current.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 1);
            oscillator.connect(gainNode);
            gainNode.connect(audioContextRef.current.destination);
            oscillator.start();
            oscillator.stop(audioContextRef.current.currentTime + 1);
        };

        const interval = setInterval(() => {
            setTimers(prevTimers => {
                let soundPlayedInThisTick = false;
                const updatedTimers = prevTimers.map(t => {
                    if (t.isRunning && t.timeLeft > 0) {
                        const newTimeLeft = t.timeLeft - 1;
                        if (newTimeLeft === 0) {
                            if (!soundPlayedInThisTick) {
                                playBeep();
                                soundPlayedInThisTick = true;
                            }
                            // Stop the timer when it finishes
                            return { ...t, timeLeft: 0, isRunning: false };
                        }
                        return { ...t, timeLeft: newTimeLeft };
                    }
                    return t;
                });
                return updatedTimers;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('click', initAudioContext);
            window.removeEventListener('keydown', initAudioContext);
        };
    }, []);

    const handleAddTimer = (e: React.FormEvent) => {
        e.preventDefault();
        const h = parseInt(hours) || 0;
        const m = parseInt(minutes) || 0;
        const s = parseInt(seconds) || 0;
        const totalSeconds = (h * 3600) + (m * 60) + s;
        const timerLabel = label.trim() === '' ? `Timer #${timers.length + 1}` : label;

        if (totalSeconds > 0) {
            const newTimer: Timer = {
                id: Date.now(),
                label: timerLabel,
                initialTime: totalSeconds,
                timeLeft: totalSeconds,
                isRunning: true // Start timer immediately upon adding
            };
            setTimers(prev => [...prev, newTimer]);
            // Reset form
            setLabel('');
            setHours('');
            setMinutes('5');
            setSeconds('0');
        }
    };

    const handleToggle = (id: number) => setTimers(prev => prev.map(t => (t.id === id && t.timeLeft > 0) ? { ...t, isRunning: !t.isRunning } : t));
    const handleReset = (id: number) => setTimers(prev => prev.map(t => t.id === id ? { ...t, timeLeft: t.initialTime, isRunning: false } : t));
    const handleRemove = (id: number) => setTimers(prev => prev.filter(t => t.id !== id));

    return (
        <ToolContainer
            title="Free Multiple Timers for Baking"
            description="A free online multi-timer for your kitchen. Keep track of proofing, baking, and cooling all at once so you never miss a step."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="multiple-timer"
        >
            <form onSubmit={handleAddTimer} className="max-w-3xl mx-auto mb-8 p-4 bg-brand-pink-light/60 rounded-xl border border-brand-border">
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 items-end">
                    <div className="sm:col-span-3">
                        <label htmlFor="timerLabel" className="block text-sm font-bold text-brand-text-title mb-1">Timer Label</label>
                        <input id="timerLabel" type="text" value={label} onChange={e => setLabel(e.target.value)} placeholder="e.g., Proofing" className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg" />
                    </div>
                    <div className="sm:col-span-2">
                        <label id="durationLabel" className="block text-sm font-bold text-brand-text-title mb-1">Duration</label>
                        <div className="flex gap-2" role="group" aria-labelledby="durationLabel">
                            <input type="number" value={hours} onChange={e => setHours(e.target.value)} placeholder="H" className="w-full p-2 border rounded-lg text-center" aria-label="Hours" />
                            <input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} placeholder="M" className="w-full p-2 border rounded-lg text-center" aria-label="Minutes" />
                            <input type="number" value={seconds} onChange={e => setSeconds(e.target.value)} placeholder="S" className="w-full p-2 border rounded-lg text-center" aria-label="Seconds" />
                        </div>
                    </div>
                    <div className="sm:col-span-1">
                        <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-pink text-white font-bold py-2 px-4 rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                            <PlusCircleIcon className="w-5 h-5" /> Add
                        </button>
                    </div>
                </div>
            </form>

            {timers.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {timers.map(timer => <TimerDisplay key={timer.id} timer={timer} onToggle={handleToggle} onReset={handleReset} onRemove={handleRemove} />)}
                </div>
            ) : (
                <div className="text-center py-16 bg-brand-pink-light/60 rounded-lg">
                    <ClockIcon className="w-12 h-12 mx-auto text-brand-text-body/50 mb-4" />
                    <h3 className="font-bold text-brand-text-title">No timers running</h3>
                    <p className="text-sm text-brand-text-body/80">Add a new timer to get started.</p>
                </div>
            )}
            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Multi-Timer</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool allows you to run multiple timers simultaneously, perfect for complex baking projects.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Add a Timer:</strong> Enter a label (e.g., "Proofing", "Oven") and the duration (Hours, Minutes, Seconds), then click "Add".</li>
                            <li><strong>Manage Timers:</strong> Each timer runs independently. You can Pause, Reset, or Remove them individually.</li>
                            <li><strong>Alerts:</strong> A beep will sound when a timer reaches zero. Make sure your device volume is on.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Will the timers run in the background?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Yes, the timers will continue to run as long as this browser tab is open. However, for the sound alert to work reliably, it's best to keep the tab active or check back frequently.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>How many timers can I set?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                You can set as many timers as you need! This is ideal for managing a full baking day where you might have dough rising, cakes in the oven, and frosting chilling all at the same time.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
