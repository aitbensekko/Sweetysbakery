import React, { useState, useRef, useEffect } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { InfoIcon } from '../Icons';

const formatTime = (timeInMs: number) => {
    const ms = Math.floor((timeInMs % 1000) / 10).toString().padStart(2, '0');
    const seconds = Math.floor(timeInMs / 1000) % 60;
    const minutes = Math.floor(timeInMs / (1000 * 60)) % 60;
    const hours = Math.floor(timeInMs / (1000 * 60 * 60));
    return (
        <>
            <span className="w-[2.5ch] text-right">{hours.toString().padStart(2, '0')}</span>:
            <span className="w-[2.5ch] text-center">{minutes.toString().padStart(2, '0')}</span>:
            <span className="w-[2.5ch] text-center">{seconds.toString().padStart(2, '0')}</span>.
            <span className="w-[2ch] text-left text-4xl">{ms}</span>
        </>
    );
};

export const Stopwatch: React.FC<{ setActiveTool: (toolId: ToolId) => void; breadcrumbs: React.ReactNode; }> = ({ setActiveTool, breadcrumbs }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);

    // Refs to hold values that persist across renders without causing re-renders
    const rafIdRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (isRunning) {
            // We are starting or resuming. Record the start time, adjusted for any time already elapsed.
            startTimeRef.current = performance.now() - time;

            const animate = (timestamp: number) => {
                if (startTimeRef.current) { // Check if start time is set
                    const elapsedTime = timestamp - startTimeRef.current;
                    setTime(elapsedTime);
                }
                // Continue the loop
                rafIdRef.current = requestAnimationFrame(animate);
            };

            // Start the animation loop
            rafIdRef.current = requestAnimationFrame(animate);
        }

        // Cleanup function is crucial. It runs when `isRunning` changes to false, or when the component unmounts.
        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
            }
        };
    }, [isRunning]); // This effect re-runs ONLY when the stopwatch is started or stopped.

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
        // The useEffect will handle canceling any active animation frame when isRunning becomes false.
    };

    const handleLap = () => {
        if (isRunning) {
            setLaps(prevLaps => [...prevLaps, time]);
        }
    };

    const Button: React.FC<{ onClick: () => void, disabled?: boolean, children: React.ReactNode, className?: string, ariaLabel: string }> = ({ onClick, disabled, children, className, ariaLabel }) => (
        <button onClick={onClick} disabled={disabled} aria-label={ariaLabel}
            className={`w-24 h-24 rounded-full flex items-center justify-center font-semibold text-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
            {children}
        </button>
    );

    return (
        <ToolContainer title="Free Online Stopwatch Timer" description="A free, simple, and accurate online stopwatch with a lap timer. Perfect for timing your baking, cooking, or any other activity." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="stopwatch">
            <div className="max-w-md mx-auto text-center">
                <div className="bg-white p-8 rounded-full shadow-inner border border-gray-200 my-8">
                    <div className="font-mono text-5xl tracking-tighter text-brand-text-title flex justify-center">
                        {formatTime(time)}
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button onClick={handleReset} className="bg-gray-200 text-brand-text-body hover:bg-gray-300" ariaLabel="Reset timer">Reset</Button>
                    <Button onClick={handleStartStop} className={`w-28 h-28 text-white text-2xl ${isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`} ariaLabel={isRunning ? 'Stop timer' : 'Start timer'}>
                        {isRunning ? 'Stop' : 'Start'}
                    </Button>
                    <Button onClick={handleLap} disabled={!isRunning} className="bg-blue-500 text-white hover:bg-blue-600" ariaLabel="Record a lap">Lap</Button>
                </div>

                {laps.length > 0 && (
                    <div className="mt-8 text-left max-w-sm mx-auto">
                        <h3 className="font-serif text-xl font-bold text-brand-text-title mb-2 text-center">Laps</h3>
                        <ul className="bg-white p-2 rounded-lg border max-h-60 overflow-y-auto space-y-1 font-mono text-sm">
                            {[...laps].reverse().map((lap, index) => {
                                const reversedIndex = laps.length - 1 - index;
                                const prevLap = reversedIndex > 0 ? laps[reversedIndex - 1] : 0;
                                const lapTime = lap - prevLap;
                                return (
                                    <li key={reversedIndex} className="flex justify-between p-2 rounded-md even:bg-brand-pink-light/50">
                                        <span className="font-sans font-semibold text-brand-text-body">Lap {reversedIndex + 1}</span>
                                        <span className="text-blue-600 font-semibold flex"><span className="w-4 text-right">+</span>{formatTime(lapTime)}</span>
                                        <span className="text-brand-text-body/70">{formatTime(lap)}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Stopwatch</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This stopwatch is perfect for timing specific baking stages where you need to count up rather than down.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Start/Stop:</strong> Click the large button to begin or pause the timer.</li>
                            <li><strong>Lap:</strong> Use the "Lap" button to record split times without stopping the main timer. This is great for tracking multiple batches.</li>
                            <li><strong>Reset:</strong> Clears the current time and all recorded laps.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Why use a stopwatch instead of a timer?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                A timer is best when you know exactly how long something takes (e.g., baking for 30 minutes). A stopwatch is better for learning how long a process takes (e.g., "How long does it take for my dough to double in size?").
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Can I export my lap times?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Currently, you can view your laps in the list below the timer. You can manually copy them if needed for your records.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
