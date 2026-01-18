
import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Incorrect import path for ToolId. It is defined in '../utils/slugs'.
import type { ToolId } from '../utils/slugs';
import { BirthdayCakeIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface AgeCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface AgeResults {
    years: number;
    months: number;
    days: number;
    totalMonths: number;
    totalWeeks: number;
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
}

export const AgeCalculator: React.FC<AgeCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [birthDate, setBirthDate] = useState(new Date(1990, 0, 1).toISOString().split('T')[0]);
    const [results, setResults] = useState<AgeResults | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCalculate = () => {
        const today = new Date();
        const dob = new Date(birthDate + 'T00:00:00');
        if (isNaN(dob.getTime()) || dob > today) {
            alert("Please enter a valid date of birth in the past.");
            return;
        }

        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const totalDays = Math.floor((today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24));

        setResults({
            years,
            months,
            days,
            totalMonths: years * 12 + months,
            totalWeeks: Math.floor(totalDays / 7),
            totalDays: totalDays,
            totalHours: totalDays * 24,
            totalMinutes: totalDays * 24 * 60,
        });
    };

    const handleCopy = () => {
        if (!results) return;
        const text = `${results.years} years, ${results.months} months, ${results.days} days`;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <ToolContainer title="Free Age Calculator" description="Find your exact age in years, months, and days for free, and see a fun breakdown of your life in time." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="age-calculator">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="birthDate" className="text-sm font-bold text-brand-text-title mb-1 block">Your Date of Birth</label>
                        <input
                            type="date"
                            id="birthDate"
                            value={birthDate}
                            onChange={e => setBirthDate(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg"
                        />
                    </div>
                    <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                        Calculate Age
                    </button>
                </div>

                <div className="bg-brand-pink-light p-6 rounded-lg text-center flex flex-col items-center justify-center">
                    {results ? (
                        <div className="fade-in">
                            <h3 className="font-semibold text-brand-text-body">Your Age is</h3>
                            <div className="flex items-center justify-center gap-2">
                                <p className="font-serif font-bold text-4xl text-brand-pink my-2">
                                    {results.years} <span className="text-2xl">years</span>, {results.months} <span className="text-2xl">months</span>, {results.days} <span className="text-2xl">days</span>
                                </p>
                                <button onClick={handleCopy} title="Copy age" className="p-1">
                                    {copied ? <CheckCircleIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5 text-brand-text-body/50 hover:text-brand-pink" />}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full">
                            <BirthdayCakeIcon className="w-12 h-12 text-brand-pink mb-4" />
                            <h3 className="text-xl font-bold text-brand-text-title">Enter your birthday</h3>
                            <p className="text-sm text-brand-text-body/80 mt-1">Your results will appear here.</p>
                        </div>
                    )}
                </div>
            </div>

            {results &&
                <div className="mt-8 pt-6 border-t border-brand-border fade-in">
                    <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title text-center">Summary</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white p-4 rounded-lg border text-center"><span className="font-bold text-brand-text-title text-xl">{results.totalMonths.toLocaleString()}</span><p className="text-sm">Total Months</p></div>
                        <div className="bg-white p-4 rounded-lg border text-center"><span className="font-bold text-brand-text-title text-xl">{results.totalWeeks.toLocaleString()}</span><p className="text-sm">Total Weeks</p></div>
                        <div className="bg-white p-4 rounded-lg border text-center"><span className="font-bold text-brand-text-title text-xl">{results.totalDays.toLocaleString()}</span><p className="text-sm">Total Days</p></div>
                        <div className="bg-white p-4 rounded-lg border text-center"><span className="font-bold text-brand-text-title text-xl">{results.totalHours.toLocaleString()}</span><p className="text-sm">Total Hours</p></div>
                        <div className="bg-white p-4 rounded-lg border text-center"><span className="font-bold text-brand-text-title text-xl">{results.totalMinutes.toLocaleString()}</span><p className="text-sm">Total Minutes</p></div>
                    </div>
                </div>
            }

            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Age Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool calculates your exact age and provides a fun breakdown of your time on Earth.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Enter Date:</strong> Select your date of birth from the calendar or type it in.</li>
                            <li><strong>Calculate:</strong> Click the button to see your age in years, months, and days.</li>
                            <li><strong>Explore:</strong> View the summary to see how many total weeks, days, hours, and minutes you've lived!</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Does this account for leap years?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Yes! The calculator accurately accounts for leap years when calculating the total number of days, hours, and minutes.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Can I calculate age for a future date?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Currently, this tool is designed to calculate age from a past date to today. It will alert you if you enter a future date.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
