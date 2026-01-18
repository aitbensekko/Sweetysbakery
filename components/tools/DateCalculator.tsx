import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { CalendarPlusIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface DateCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const DateCalculator: React.FC<DateCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [years, setYears] = useState('0');
    const [months, setMonths] = useState('0');
    const [weeks, setWeeks] = useState('0');
    const [days, setDays] = useState('0');
    const [resultDate, setResultDate] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCalculate = (operation: 'add' | 'subtract') => {
        const date = new Date(startDate + 'T00:00:00');
        if (isNaN(date.getTime())) return;

        const sign = operation === 'add' ? 1 : -1;

        date.setFullYear(date.getFullYear() + (parseInt(years) || 0) * sign);
        date.setMonth(date.getMonth() + (parseInt(months) || 0) * sign);
        date.setDate(date.getDate() + ((parseInt(weeks) || 0) * 7 + (parseInt(days) || 0)) * sign);

        setResultDate(new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date));
    };

    const handleCopy = () => {
        if (!resultDate) return;
        navigator.clipboard.writeText(resultDate).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <ToolContainer title="Free Date Calculator" description="Add or subtract days, weeks, months, and years from a date to calculate a future or past date with our free tool." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="date-calculator">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="startDate" className="text-sm font-bold text-brand-text-title mb-1 block">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg"
                        />
                    </div>
                    <div>
                        <label id="durationLabel" className="text-sm font-bold text-brand-text-title mb-1 block">Add/Subtract Time</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="group" aria-labelledby="durationLabel">
                            <input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="Years" className="w-full p-2 border rounded-lg text-center" aria-label="Years" />
                            <input type="number" value={months} onChange={e => setMonths(e.target.value)} placeholder="Months" className="w-full p-2 border rounded-lg text-center" aria-label="Months" />
                            <input type="number" value={weeks} onChange={e => setWeeks(e.target.value)} placeholder="Weeks" className="w-full p-2 border rounded-lg text-center" aria-label="Weeks" />
                            <input type="number" value={days} onChange={e => setDays(e.target.value)} placeholder="Days" className="w-full p-2 border rounded-lg text-center" aria-label="Days" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => handleCalculate('add')} className="flex-1 bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90">Add</button>
                        <button onClick={() => handleCalculate('subtract')} className="flex-1 bg-gray-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-gray-700">Subtract</button>
                    </div>
                </div>

                <div className="bg-brand-pink-light p-6 rounded-lg text-center flex flex-col items-center justify-center min-h-[200px]">
                    {resultDate ? (
                        <div className="fade-in">
                            <h3 className="font-semibold text-brand-text-body">Resulting Date</h3>
                            <div className="flex items-center justify-center gap-2">
                                <p className="font-serif font-bold text-3xl text-brand-pink my-2">{resultDate}</p>
                                <button onClick={handleCopy} title="Copy date" className="p-1">
                                    {copied ? <CheckCircleIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5 text-brand-text-body/50 hover:text-brand-pink" />}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full">
                            <CalendarPlusIcon className="w-12 h-12 text-brand-pink mb-4" />
                            <h3 className="text-xl font-bold text-brand-text-title">Your result will appear here</h3>
                            <p className="text-sm text-brand-text-body/80 mt-1">Enter a duration and calculate.</p>
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
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Date Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool helps you calculate future or past dates by adding or subtracting time.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Set Start Date:</strong> Choose a starting date (defaults to today).</li>
                            <li><strong>Enter Duration:</strong> Input the number of years, months, weeks, or days you want to add or subtract.</li>
                            <li><strong>Calculate:</strong> Click "Add" or "Subtract" to see the resulting date.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Real-Life Examples</h3>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-brand-border/50">
                            <h4 className="font-bold text-brand-text-title mb-2">📅 Event Planning</h4>
                            <p className="text-sm text-brand-text-body/80">
                                If a wedding is on October 26th and you need to start baking 3 days before, use this tool to find your start date (Subtract 3 days).
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-brand-border/50">
                            <h4 className="font-bold text-brand-text-title mb-2">🍞 Baking Schedules</h4>
                            <p className="text-sm text-brand-text-body/80">
                                You bake a fruitcake on November 15th and it needs to age for 6 weeks. Calculate the ready date by adding 6 weeks.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Does it handle leap years?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Yes, the calculator correctly handles leap years when adding or subtracting time.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
