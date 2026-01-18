import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { DollarSignIcon, InfoIcon, DownloadIcon, PercentIcon, ClipboardIcon, CheckCircleIcon } from '../Icons';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

interface InvestmentCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface ScheduleEntry {
    year: number;
    startingBalance: number;
    interestEarned: number;
    totalContributions: number;
    endingBalance: number;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [startAmount, setStartAmount] = useState('10000');
    const [additionalContribution, setAdditionalContribution] = useState('500');
    const [contributionFrequency, setContributionFrequency] = useState('12'); // Monthly
    const [interestRate, setInterestRate] = useState('8');
    const [compoundFrequency, setCompoundFrequency] = useState('12'); // Monthly
    const [timeSpan, setTimeSpan] = useState('20');
    const [inflationRate, setInflationRate] = useState('');
    const [copied, setCopied] = useState(false);

    const handleInputChange = (setter: (value: string) => void, value: string) => {
        if (parseFloat(value) < 0) return;
        setter(value);
    };

    const { results, schedule } = useMemo(() => {
        const P = parseFloat(startAmount) || 0;
        const PMT = parseFloat(additionalContribution) || 0;
        const r = (parseFloat(interestRate) || 0) / 100;
        const t = parseInt(timeSpan) || 0;
        const n = parseInt(compoundFrequency) || 1;
        const c = parseInt(contributionFrequency) || 1;
        const inflation = parseFloat(inflationRate) / 100 || 0;

        if (t <= 0) {
            return { results: { endBalance: P, totalPrincipal: P, totalInterest: 0, inflationAdjustedBalance: P }, schedule: [] };
        }

        const schedule: ScheduleEntry[] = [];
        let currentBalance = P;
        const totalMonths = t * 12;
        const monthlyContribution = (PMT * c) / 12;

        let interestForYear = 0;
        let contributionsForYear = 0;
        let startingBalance = P;

        for (let month = 1; month <= totalMonths; month++) {
            // Add contribution at the start of the month
            currentBalance += monthlyContribution;
            contributionsForYear += monthlyContribution;

            // Check if it's a compounding period
            if (month % (12 / n) === 0) {
                const interestThisPeriod = currentBalance * (r / n);
                interestForYear += interestThisPeriod;
                currentBalance += interestThisPeriod;
            }

            // At the end of each year, push to schedule
            if (month % 12 === 0) {
                schedule.push({
                    year: month / 12,
                    startingBalance,
                    interestEarned: interestForYear,
                    totalContributions: contributionsForYear,
                    endingBalance: currentBalance
                });
                startingBalance = currentBalance;
                interestForYear = 0;
                contributionsForYear = 0;
            }
        }

        // Handle cases where timespan is not a whole number of years
        if (totalMonths % 12 !== 0) {
            const lastYear = Math.ceil(totalMonths / 12);
            schedule.push({
                year: lastYear,
                startingBalance,
                interestEarned: interestForYear,
                totalContributions: contributionsForYear,
                endingBalance: currentBalance
            });
        }

        const totalPrincipal = P + (PMT * c * t);
        const totalInterest = currentBalance - totalPrincipal;
        const inflationAdjustedBalance = inflation > 0 ? currentBalance / Math.pow(1 + inflation, t) : currentBalance;

        return {
            results: {
                endBalance: currentBalance,
                totalPrincipal,
                totalInterest,
                inflationAdjustedBalance,
            },
            schedule,
        };
    }, [startAmount, additionalContribution, contributionFrequency, interestRate, compoundFrequency, timeSpan, inflationRate]);

    const handleExportCsv = () => {
        if (schedule.length === 0) return;

        const headers = "Year,Starting Balance,Total Contributions,Interest Earned,Ending Balance";
        const csvContent = [
            headers,
            ...schedule.map(entry => [
                entry.year,
                entry.startingBalance.toFixed(2),
                entry.totalContributions.toFixed(2),
                entry.interestEarned.toFixed(2),
                entry.endingBalance.toFixed(2)
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", `investment_schedule_${Date.now()}.csv`);
        link.click();
    };

    const copyResults = () => {
        const text = `Investment Calculator Results:\nStarting Amount: $${parseFloat(startAmount).toLocaleString()}\nMonthly Contribution: $${parseFloat(additionalContribution).toLocaleString()}\nInterest Rate: ${interestRate}%\nTime Span: ${timeSpan} years\n\nEnd Balance: $${results.endBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}\nTotal Principal: $${results.totalPrincipal.toLocaleString(undefined, { minimumFractionDigits: 2 })}\nTotal Interest: $${results.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2 })}${inflationRate ? `\nInflation-Adjusted Balance: $${results.inflationAdjustedBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : ''}`;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const chartData = {
        labels: schedule.map(s => `Year ${s.year}`),
        datasets: [
            {
                label: 'Total Balance',
                data: schedule.map(s => s.endingBalance),
                borderColor: 'rgb(230, 90, 136)',
                backgroundColor: 'rgba(230, 90, 136, 0.1)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Total Contributions',
                data: schedule.map((s, idx) => {
                    const totalContributed = parseFloat(startAmount) + (parseFloat(additionalContribution) * parseInt(contributionFrequency) * (idx + 1));
                    return totalContributed;
                }),
                borderColor: 'rgb(74, 63, 63)',
                backgroundColor: 'rgba(74, 63, 63, 0.1)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    return (
        <ToolContainer
            title="Free Investment Growth Calculator"
            description="Calculate the future value of your investment and see how compound interest can grow your money over time. A powerful tool for retirement planning and financial goals."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
        >
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Investment Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="startAmount" className="text-sm font-bold text-gray-500 mb-2 block">Starting Amount</label>
                                <div className="relative">
                                    <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    <input
                                        id="startAmount"
                                        type="number"
                                        value={startAmount}
                                        onChange={e => handleInputChange(setStartAmount, e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-xl font-bold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                        min="0"
                                        step="any"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="contribution" className="text-sm font-bold text-gray-500 mb-2 block">Additional Contribution</label>
                                    <div className="relative">
                                        <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                        <input
                                            id="contribution"
                                            type="number"
                                            value={additionalContribution}
                                            onChange={e => handleInputChange(setAdditionalContribution, e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="any"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contributionFreq" className="text-sm font-bold text-gray-500 mb-2 block">Frequency</label>
                                    <select
                                        id="contributionFreq"
                                        value={contributionFrequency}
                                        onChange={e => setContributionFrequency(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                    >
                                        <option value="12">Monthly</option>
                                        <option value="1">Yearly</option>
                                        <option value="52">Weekly</option>
                                        <option value="4">Quarterly</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="interestRate" className="text-sm font-bold text-gray-500 mb-2 block">Interest Rate</label>
                                    <div className="relative">
                                        <input
                                            id="interestRate"
                                            type="number"
                                            value={interestRate}
                                            onChange={e => handleInputChange(setInterestRate, e.target.value)}
                                            className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="0.1"
                                        />
                                        <PercentIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="timeSpan" className="text-sm font-bold text-gray-500 mb-2 block">Time Span</label>
                                    <div className="relative">
                                        <input
                                            id="timeSpan"
                                            type="number"
                                            value={timeSpan}
                                            onChange={e => handleInputChange(setTimeSpan, e.target.value)}
                                            className="w-full pl-4 pr-16 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="1"
                                            step="1"
                                        />
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-brand-text-body/60 font-medium">years</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="compoundFreq" className="text-sm font-bold text-gray-500 mb-2 block">Compound Frequency</label>
                                    <select
                                        id="compoundFreq"
                                        value={compoundFrequency}
                                        onChange={e => setCompoundFrequency(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                    >
                                        <option value="1">Annually</option>
                                        <option value="2">Semi-Annually</option>
                                        <option value="4">Quarterly</option>
                                        <option value="12">Monthly</option>
                                        <option value="365">Daily</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="inflationRate" className="text-sm font-bold text-gray-500 mb-2 block">Inflation Rate (Optional)</label>
                                    <div className="relative">
                                        <input
                                            id="inflationRate"
                                            type="number"
                                            value={inflationRate}
                                            onChange={e => handleInputChange(setInflationRate, e.target.value)}
                                            placeholder="0"
                                            className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="0.1"
                                        />
                                        <PercentIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="sticky top-6 space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                            <h3 className="font-serif font-bold text-xl text-brand-text-title mb-6 text-center uppercase tracking-wider text-xs">Investment Summary</h3>

                            <div className="text-center mb-8">
                                <p className="text-sm font-bold text-brand-text-body/60 mb-2 uppercase tracking-wide">Future Value</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-3xl font-bold text-brand-text-title font-sans">$</span>
                                    <span className="font-serif font-bold text-6xl text-brand-text-title">{results.endBalance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                </div>
                                {inflationRate && (
                                    <p className="text-sm font-medium text-brand-text-body/60 mt-2 bg-gray-100 inline-block px-3 py-1 rounded-full">
                                        ${results.inflationAdjustedBalance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} in today's dollars
                                    </p>
                                )}
                            </div>

                            <div className="space-y-4 text-sm mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-text-body font-medium">Total Contributions</span>
                                    <span className="font-bold text-brand-text-title text-lg">${results.totalPrincipal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-text-body font-medium">Total Interest</span>
                                    <span className="font-bold text-green-600 text-lg">+ ${results.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                                    <span className="text-brand-text-body font-medium">Return on Investment</span>
                                    <span className="font-bold text-brand-pink text-xl">{((results.totalInterest / results.totalPrincipal) * 100).toFixed(1)}%</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={copyResults}
                                    className="py-3 px-4 bg-white text-brand-text-title font-bold rounded-xl border-2 border-brand-border hover:border-brand-pink hover:text-brand-pink transition-all flex items-center justify-center gap-2 text-sm"
                                >
                                    {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                                <button
                                    onClick={handleExportCsv}
                                    className="py-3 px-4 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all flex items-center justify-center gap-2 text-sm"
                                >
                                    <DownloadIcon className="w-4 h-4" />
                                    CSV
                                </button>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 shadow-sm">
                            <p className="flex gap-2 items-start">
                                <span className="font-bold text-lg leading-none">💡</span>
                                <span>
                                    <strong>Tip:</strong> The S&P 500 has historically returned about 10% annually. Start early and contribute regularly for best results!
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {schedule.length > 0 && (
                <div className="mt-12">
                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-6">Investment Growth Over Time</h3>
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm mb-6">
                        <Line
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { position: 'top' as const },
                                    title: { display: false },
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: {
                                            callback: function (value) {
                                                return '$' + value.toLocaleString();
                                            }
                                        }
                                    },
                                },
                            }}
                            data={chartData}
                        />
                    </div>

                    <div className="bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden">
                        <div className="overflow-x-auto" style={{ maxHeight: '500px' }}>
                            <table className="w-full text-sm">
                                <thead className="bg-brand-pink-light border-b border-brand-border sticky top-0">
                                    <tr>
                                        <th className="py-4 px-6 text-left font-bold text-brand-text-title">Year</th>
                                        <th className="py-4 px-6 text-right font-bold text-brand-text-title">Starting Balance</th>
                                        <th className="py-4 px-6 text-right font-bold text-brand-text-title">Contributions</th>
                                        <th className="py-4 px-6 text-right font-bold text-brand-text-title">Interest Earned</th>
                                        <th className="py-4 px-6 text-right font-bold text-brand-text-title">Ending Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schedule.map((entry, idx) => (
                                        <tr key={entry.year} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                            <td className="py-3 px-6 font-semibold text-brand-text-title">{entry.year}</td>
                                            <td className="py-3 px-6 text-right font-medium">${entry.startingBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                            <td className="py-3 px-6 text-right font-medium">${entry.totalContributions.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                            <td className="py-3 px-6 text-right font-medium text-green-600">${entry.interestEarned.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                            <td className="py-3 px-6 text-right font-bold text-brand-pink">${entry.endingBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-12 pt-8 border-t border-brand-border max-w-4xl mx-auto">
                <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">The Magic of Compound Interest</h3>
                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <p>This calculator demonstrates the power of compound interest, which Albert Einstein reportedly called the "eighth wonder of the world." It's the process where you earn interest not only on your initial principal but also on the accumulated interest from previous periods.</p>
                    <h4 className="font-bold text-brand-text-title">Key Principles:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Start Early:</strong> The longer your money is invested, the more time it has to grow. Even small amounts can grow significantly over several decades.
                        </li>
                        <li>
                            <strong>Contribute Regularly:</strong> Making consistent contributions, no matter how small, dramatically increases your end balance. It's the key to building wealth over time.
                        </li>
                        <li>
                            <strong>Interest Rate Matters:</strong> A higher rate of return can make a substantial difference in the long run. The S&P 500 has historically returned an average of around 10% per year, though past performance is not indicative of future results.
                        </li>
                        <li>
                            <strong>Compound Frequency:</strong> More frequent compounding (daily vs. annually) results in slightly higher returns, though the difference is usually modest.
                        </li>
                    </ul>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="flex items-start gap-2"><InfoIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" /><span><strong>Disclaimer:</strong> This calculator is for informational and illustrative purposes only and does not constitute financial advice. Investment returns are not guaranteed, and past performance does not predict future results.</span></p>
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
