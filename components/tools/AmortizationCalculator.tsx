import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { MortgageIcon, ClipboardIcon, CheckCircleIcon, DollarSignIcon, PercentIcon, DownloadIcon } from '../Icons';

interface AmortizationCalculatorProps {
  setActiveTool: (toolId: ToolId) => void;
  breadcrumbs: React.ReactNode;
}

interface ScheduleEntry {
  month: number;
  principal: number;
  interest: number;
  totalPayment: number;
  remainingBalance: number;
}

interface YearSummary {
  year: number;
  principalPaid: number;
  interestPaid: number;
  totalPaid: number;
  endingBalance: number;
}

export const AmortizationCalculator: React.FC<AmortizationCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
  const [loanAmount, setLoanAmount] = useState('250000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [extraPayment, setExtraPayment] = useState('');
  const [viewMode, setViewMode] = useState<'monthly' | 'yearly'>('yearly');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (setter: (value: string) => void, value: string) => {
    if (parseFloat(value) < 0) return;
    setter(value);
  };

  const { schedule, yearSummaries, monthlyPayment, totalInterest, totalPayment, interestSaved } = useMemo(() => {
    const P = parseFloat(loanAmount);
    const i = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;
    const extra = parseFloat(extraPayment) || 0;

    if (isNaN(P) || isNaN(i) || isNaN(n) || P <= 0 || i < 0 || n <= 0) {
      return { schedule: [], yearSummaries: [], monthlyPayment: 0, totalInterest: 0, totalPayment: 0, interestSaved: 0 };
    }

    const M = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    let remainingBalance = P;
    const newSchedule: ScheduleEntry[] = [];
    let cumulativeInterest = 0;
    let month = 1;

    while (remainingBalance > 0.01 && month <= n) {
      const interestPayment = remainingBalance * i;
      let principalPayment = M - interestPayment + extra;

      if (principalPayment > remainingBalance) {
        principalPayment = remainingBalance;
      }

      remainingBalance -= principalPayment;
      cumulativeInterest += interestPayment;

      newSchedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        totalPayment: principalPayment + interestPayment,
        remainingBalance: Math.max(0, remainingBalance),
      });

      month++;
    }

    // Calculate year summaries
    const years: YearSummary[] = [];
    for (let year = 1; year <= Math.ceil(newSchedule.length / 12); year++) {
      const startMonth = (year - 1) * 12;
      const endMonth = Math.min(year * 12, newSchedule.length);
      const yearEntries = newSchedule.slice(startMonth, endMonth);

      years.push({
        year,
        principalPaid: yearEntries.reduce((sum, e) => sum + e.principal, 0),
        interestPaid: yearEntries.reduce((sum, e) => sum + e.interest, 0),
        totalPaid: yearEntries.reduce((sum, e) => sum + e.totalPayment, 0),
        endingBalance: yearEntries[yearEntries.length - 1]?.remainingBalance || 0,
      });
    }

    // Calculate interest saved with extra payments
    const standardInterest = (M * n) - P;
    const interestSaved = extra > 0 ? standardInterest - cumulativeInterest : 0;

    return {
      schedule: newSchedule,
      yearSummaries: years,
      monthlyPayment: M,
      totalInterest: cumulativeInterest,
      totalPayment: P + cumulativeInterest,
      interestSaved,
    };
  }, [loanAmount, interestRate, loanTerm, extraPayment]);

  const exportToCSV = () => {
    if (schedule.length === 0) return;

    const headers = ['Month', 'Principal', 'Interest', 'Total Payment', 'Remaining Balance'];
    const rows = schedule.map(entry => [
      entry.month,
      entry.principal.toFixed(2),
      entry.interest.toFixed(2),
      entry.totalPayment.toFixed(2),
      entry.remainingBalance.toFixed(2),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `amortization_schedule_${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const copyResults = () => {
    const text = `Amortization Schedule:\nLoan Amount: $${parseFloat(loanAmount).toLocaleString()}\nInterest Rate: ${interestRate}%\nLoan Term: ${loanTerm} years\nMonthly Payment: $${monthlyPayment.toFixed(2)}\nTotal Interest: $${totalInterest.toFixed(2)}\nTotal Paid: $${totalPayment.toFixed(2)}${extraPayment ? `\nExtra Payment: $${extraPayment}/month\nInterest Saved: $${interestSaved.toFixed(2)}\nTime Saved: ${(parseFloat(loanTerm) * 12 - schedule.length)} months` : ''}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ToolContainer
      title="Free Amortization Calculator"
      description="Calculate your loan amortization schedule and see exactly how each payment is split between principal and interest. Export to CSV or view year-by-year summaries."
      setActiveTool={setActiveTool}
      breadcrumbs={breadcrumbs}
      toolId="amortization-calculator"
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Loan Details</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="loanAmount" className="text-sm font-bold text-gray-500 mb-2 block">Loan Amount</label>
                <div className="relative">
                  <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                  <input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={e => handleInputChange(setLoanAmount, e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-xl font-bold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                    min="0"
                    step="any"
                  />
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
                      className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-brand-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                      min="0"
                      step="0.01"
                    />
                    <PercentIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                  </div>
                </div>
                <div>
                  <label htmlFor="loanTerm" className="text-sm font-bold text-gray-500 mb-2 block">Loan Term</label>
                  <div className="relative">
                    <input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={e => handleInputChange(setLoanTerm, e.target.value)}
                      className="w-full pl-4 pr-16 py-3 bg-gray-50 border border-brand-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                      min="1"
                      step="1"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-brand-text-body/60 font-medium">years</span>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="extraPayment" className="text-sm font-bold text-gray-500 mb-2 block">Extra Monthly Payment (Optional)</label>
                <div className="relative">
                  <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                  <input
                    id="extraPayment"
                    type="number"
                    value={extraPayment}
                    onChange={e => handleInputChange(setExtraPayment, e.target.value)}
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                    min="0"
                    step="any"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">
                  See how extra payments can save you money and time
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-6">
            {schedule.length > 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl text-brand-text-title mb-6 text-center uppercase tracking-wider text-xs">Payment Summary</h3>

                <div className="text-center mb-8">
                  <p className="text-sm font-bold text-brand-text-body/60 mb-2 uppercase tracking-wide">Monthly Payment</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-brand-text-title font-sans">$</span>
                    <span className="font-serif font-bold text-6xl text-brand-text-title">{monthlyPayment.toFixed(2)}</span>
                  </div>
                  {extraPayment && (
                    <p className="text-sm font-medium text-green-600 mt-2 bg-green-50 inline-block px-3 py-1 rounded-full">+ ${extraPayment} extra</p>
                  )}
                </div>

                <div className="space-y-4 text-sm mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-text-body font-medium">Loan Amount</span>
                    <span className="font-bold text-brand-text-title text-lg">${parseFloat(loanAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-text-body font-medium">Total Interest</span>
                    <span className="font-bold text-brand-text-title text-lg">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="font-bold text-brand-text-title">Total Paid</span>
                    <span className="font-bold text-brand-pink text-xl">${totalPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-brand-text-body font-medium">Payoff Time</span>
                    <span className="font-bold text-brand-text-title">{Math.ceil(schedule.length / 12)} years</span>
                  </div>
                </div>

                {interestSaved > 0 && (
                  <div className="bg-green-50 p-5 rounded-xl border border-green-100 mb-8">
                    <p className="text-sm font-bold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      Smart Savings
                    </p>
                    <div className="space-y-1 pl-6">
                      <p className="text-sm text-green-700">You will save <span className="font-bold">${interestSaved.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span> in interest</p>
                      <p className="text-sm text-green-700">You will be debt-free <span className="font-bold">{(parseFloat(loanTerm) * 12 - schedule.length)} months</span> earlier</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={copyResults}
                    className="py-3 px-4 bg-white text-brand-text-title font-bold rounded-xl border-2 border-brand-border hover:border-brand-pink hover:text-brand-pink transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button
                    onClick={exportToCSV}
                    className="py-3 px-4 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    Export CSV
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-brand-pink-light p-8 rounded-2xl border border-brand-pink/20 text-center flex flex-col items-center justify-center min-h-[400px]">
                <MortgageIcon className="w-16 h-16 text-brand-pink mb-4" />
                <h3 className="text-xl font-bold text-brand-text-title mb-2">Enter Your Loan Details</h3>
                <p className="text-brand-text-body/70">Your amortization schedule will appear here</p>
              </div>
            )
            }
          </div>
        </div>
      </div>

      {schedule.length > 0 && (
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-serif font-bold text-2xl text-brand-text-title">Amortization Schedule</h3>
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('yearly')}
                className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${viewMode === 'yearly' ? 'bg-brand-pink text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                Year by Year
              </button>
              <button
                onClick={() => setViewMode('monthly')}
                className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${viewMode === 'monthly' ? 'bg-brand-pink text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                Month by Month
              </button>
            </div>
          </div>

          {viewMode === 'yearly' ? (
            <div className="bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-brand-pink-light border-b border-brand-border">
                    <tr>
                      <th className="py-4 px-6 text-left font-bold text-brand-text-title">Year</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Principal Paid</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Interest Paid</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Total Paid</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearSummaries.map((year, idx) => (
                      <tr key={year.year} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="py-4 px-6 font-semibold text-brand-text-title">{year.year}</td>
                        <td className="py-4 px-6 text-right font-medium">${year.principalPaid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="py-4 px-6 text-right font-medium text-red-600">${year.interestPaid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="py-4 px-6 text-right font-bold">${year.totalPaid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="py-4 px-6 text-right font-bold text-brand-pink">${year.endingBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden">
              <div className="overflow-x-auto" style={{ maxHeight: '600px' }}>
                <table className="w-full text-sm">
                  <thead className="bg-brand-pink-light border-b border-brand-border sticky top-0">
                    <tr>
                      <th className="py-4 px-6 text-left font-bold text-brand-text-title">Month</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Principal</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Interest</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Total Payment</th>
                      <th className="py-4 px-6 text-right font-bold text-brand-text-title">Remaining Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((entry, idx) => (
                      <tr key={entry.month} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="py-3 px-6 font-semibold text-brand-text-title">{entry.month}</td>
                        <td className="py-3 px-6 text-right font-medium">${entry.principal.toFixed(2)}</td>
                        <td className="py-3 px-6 text-right font-medium text-red-600">${entry.interest.toFixed(2)}</td>
                        <td className="py-3 px-6 text-right font-bold">${entry.totalPayment.toFixed(2)}</td>
                        <td className="py-3 px-6 text-right font-bold text-brand-pink">${entry.remainingBalance.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-brand-border max-w-4xl mx-auto">
        <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">Understanding Amortization</h3>
        <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
          <p>
            An amortization schedule shows you exactly how each monthly payment is divided between principal (the amount you borrowed) and interest (the cost of borrowing). Understanding this breakdown can help you make smarter financial decisions.
          </p>
          <h4 className="font-bold text-brand-text-title">Key Insights:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Early Payments:</strong> In the beginning, most of your payment goes toward interest. This is normal and expected.</li>
            <li><strong>Later Payments:</strong> As time goes on, more of each payment goes toward principal, accelerating your equity growth.</li>
            <li><strong>Extra Payments:</strong> Even small extra payments can significantly reduce your total interest and shorten your loan term. Try adding an extra payment amount to see the impact!</li>
            <li><strong>Export Feature:</strong> Download your complete schedule as a CSV file to track your progress or share with your financial advisor.</li>
          </ul>
        </div>
      </div>
    </ToolContainer>
  );
};
