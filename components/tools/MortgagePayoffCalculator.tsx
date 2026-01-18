import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { MortgageIcon, DollarSignIcon, PercentIcon, ClipboardIcon, CheckCircleIcon, CalendarIcon } from '../Icons';

interface MortgagePayoffCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const MortgagePayoffCalculator: React.FC<MortgagePayoffCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [loanAmount, setLoanAmount] = useState('300000');
    const [interestRate, setInterestRate] = useState('6.5');
    const [loanTerm, setLoanTerm] = useState('30');
    const [extraPayment, setExtraPayment] = useState('200');
    const [paymentFrequency, setPaymentFrequency] = useState<'monthly' | 'biweekly'>('monthly');
    const [copied, setCopied] = useState(false);

    const handleInputChange = (setter: (value: string) => void, value: string) => {
        if (parseFloat(value) < 0) return;
        setter(value);
    };

    const results = useMemo(() => {
        const P = parseFloat(loanAmount) || 0;
        const r = (parseFloat(interestRate) || 0) / 100 / 12;
        const n = (parseInt(loanTerm) || 0) * 12;
        const extra = parseFloat(extraPayment) || 0;

        if (P <= 0 || r < 0 || n <= 0) {
            return {
                timeSaved: 0,
                interestSaved: 0,
                newPayoffMonths: 0,
                originalMonthlyPayment: 0,
                totalOriginalInterest: 0,
                totalNewInterest: 0,
                newPayoffDate: '',
                originalPayoffDate: ''
            };
        }

        // Original mortgage calculation
        const originalMonthlyPayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalOriginalInterest = (originalMonthlyPayment * n) - P;

        // Calculate based on payment frequency
        let newNumberOfPayments = n;
        let totalNewInterest = totalOriginalInterest;

        if (paymentFrequency === 'biweekly') {
            // Biweekly payments: 26 payments per year = 13 monthly payments
            const biweeklyPayment = originalMonthlyPayment / 2;
            const effectiveMonthlyPayment = biweeklyPayment * 26 / 12;
            const newN = - (Math.log(1 - (P * r / effectiveMonthlyPayment)) / Math.log(1 + r));
            newNumberOfPayments = Math.ceil(newN);
            const totalNewPayment = effectiveMonthlyPayment * newNumberOfPayments;
            totalNewInterest = totalNewPayment - P;
        } else if (extra > 0) {
            // Monthly with extra payment
            const newMonthlyPayment = originalMonthlyPayment + extra;
            const newN = - (Math.log(1 - (P * r / newMonthlyPayment)) / Math.log(1 + r));
            newNumberOfPayments = Math.ceil(newN);
            const totalNewPayment = newMonthlyPayment * newNumberOfPayments;
            totalNewInterest = totalNewPayment - P;
        }

        const interestSaved = totalOriginalInterest - totalNewInterest;
        const monthsSaved = n - newNumberOfPayments;

        const today = new Date();
        const newPayoffDate = new Date(today.getFullYear(), today.getMonth() + newNumberOfPayments);
        const originalPayoffDate = new Date(today.getFullYear(), today.getMonth() + n);

        return {
            timeSaved: monthsSaved,
            interestSaved,
            newPayoffMonths: newNumberOfPayments,
            originalMonthlyPayment,
            totalOriginalInterest,
            totalNewInterest,
            newPayoffDate: newPayoffDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
            originalPayoffDate: originalPayoffDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
        };
    }, [loanAmount, interestRate, loanTerm, extraPayment, paymentFrequency]);

    const copyResults = () => {
        const yearsSaved = Math.floor(results.timeSaved / 12);
        const monthsSaved = results.timeSaved % 12;
        const text = `Mortgage Payoff Calculator Results:\nOriginal Loan: $${parseFloat(loanAmount).toLocaleString()}\nInterest Rate: ${interestRate}%\nOriginal Term: ${loanTerm} years\n${paymentFrequency === 'biweekly' ? 'Payment Frequency: Biweekly' : `Extra Monthly Payment: $${extraPayment}`}\n\nTime Saved: ${yearsSaved} years, ${monthsSaved} months\nInterest Saved: $${results.interestSaved.toFixed(2)}\nNew Payoff Date: ${results.newPayoffDate}\nOriginal Payoff Date: ${results.originalPayoffDate}`;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const yearsSaved = Math.floor(results.timeSaved / 12);
    const monthsSaved = results.timeSaved % 12;

    return (
        <ToolContainer
            title="Free Mortgage Payoff Calculator"
            description="See how much time and money you can save by making extra monthly payments or switching to biweekly payments. A powerful tool for financial planning and achieving debt freedom sooner."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="mortgage-payoff"
        >
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Current Mortgage Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="loanAmount" className="text-sm font-bold text-gray-500 mb-2 block">Original Loan Amount</label>
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
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Payoff Strategy</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-gray-500 mb-2 block">Payment Frequency</label>
                                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                                    <button
                                        onClick={() => setPaymentFrequency('monthly')}
                                        className={`flex-1 py-3 text-sm font-bold rounded-md transition-all ${paymentFrequency === 'monthly' ? 'bg-brand-pink text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        onClick={() => setPaymentFrequency('biweekly')}
                                        className={`flex-1 py-3 text-sm font-bold rounded-md transition-all ${paymentFrequency === 'biweekly' ? 'bg-brand-pink text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        Biweekly
                                    </button>
                                </div>
                                {paymentFrequency === 'biweekly' && (
                                    <p className="text-xs text-gray-500 mt-2 ml-1">
                                        Biweekly payments = 26 payments/year (equivalent to 13 monthly payments)
                                    </p>
                                )}
                            </div>

                            {paymentFrequency === 'monthly' && (
                                <div>
                                    <label htmlFor="extraPayment" className="text-sm font-bold text-gray-500 mb-2 block">Extra Monthly Payment</label>
                                    <div className="relative">
                                        <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                        <input
                                            id="extraPayment"
                                            type="number"
                                            value={extraPayment}
                                            onChange={e => handleInputChange(setExtraPayment, e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="any"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="sticky top-6 space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                            <h3 className="font-serif font-bold text-xl text-brand-text-title mb-6 text-center uppercase tracking-wider text-xs">Payoff Summary</h3>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="text-center p-4 bg-brand-pink-light/30 rounded-xl border border-brand-pink/10">
                                    <p className="text-xs font-bold text-brand-text-body/60 mb-1 uppercase tracking-wide">Time Saved</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="font-serif font-bold text-3xl text-brand-pink">{yearsSaved}</span>
                                        <span className="text-sm font-sans font-normal text-brand-text-body">years</span>
                                    </div>
                                    {monthsSaved > 0 && <p className="text-xs text-brand-text-body/70 mt-1">{monthsSaved} months</p>}
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                                    <p className="text-xs font-bold text-green-800/60 mb-1 uppercase tracking-wide">Interest Saved</p>
                                    <div className="flex items-baseline justify-center gap-0.5">
                                        <span className="text-lg font-bold text-green-600 font-sans">$</span>
                                        <span className="font-serif font-bold text-3xl text-green-600">{results.interestSaved.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-text-body font-medium">Original Payoff</span>
                                    <span className="font-bold text-brand-text-title">{results.originalPayoffDate}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-text-body font-medium">New Payoff</span>
                                    <span className="font-bold text-brand-pink">{results.newPayoffDate}</span>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                                    <span className="text-brand-text-body font-medium">Monthly Payment</span>
                                    <span className="font-bold text-brand-text-title text-lg">${results.originalMonthlyPayment.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={copyResults}
                                className="w-full py-3 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all flex items-center justify-center gap-2"
                            >
                                {copied ? <CheckCircleIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
                                {copied ? 'Copied!' : 'Copy Results'}
                            </button>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-sm text-green-800 shadow-sm">
                            <p className="flex gap-2 items-start">
                                <span className="font-bold text-lg leading-none">💡</span>
                                <span>
                                    <strong>Tip:</strong> Even small extra payments can make a big difference! Try different amounts to find what works for your budget.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-border max-w-4xl mx-auto">
                <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">The Power of Extra Payments</h3>
                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <p>Making even small extra payments on your mortgage can have a huge impact over the life of the loan. Here's why:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Principal Reduction:</strong> Every dollar you pay over your required monthly payment goes directly toward reducing your principal loan balance.
                        </li>
                        <li>
                            <strong>Interest Savings:</strong> Because interest is calculated on your outstanding balance, reducing the principal means you pay less interest over time. As this calculator shows, this can add up to tens of thousands of dollars in savings.
                        </li>
                        <li>
                            <strong>Build Equity Faster:</strong> Paying down your principal faster means you build equity in your home more quickly, which increases your net worth.
                        </li>
                        <li>
                            <strong>Biweekly Payments:</strong> Switching to biweekly payments (half your monthly payment every two weeks) results in 26 payments per year, which equals 13 monthly payments. This extra payment goes entirely toward principal.
                        </li>
                    </ul>
                    <h4 className="font-bold text-brand-text-title">Before Making Extra Payments:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Confirm with your lender that extra funds will be applied directly to principal</li>
                        <li>Check for prepayment penalties in your mortgage agreement</li>
                        <li>Ensure you have an emergency fund before committing to extra payments</li>
                        <li>Consider whether paying down high-interest debt should be a priority</li>
                    </ul>
                </div>
            </div>
        </ToolContainer>
    );
};
