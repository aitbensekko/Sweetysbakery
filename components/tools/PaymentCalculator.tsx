import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { MortgageIcon, ClipboardIcon, CheckCircleIcon, DollarSignIcon, PercentIcon, CalendarIcon } from '../Icons';

interface PaymentCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface Results {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    principalPaid: number;
}

export const PaymentCalculator: React.FC<PaymentCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [loanAmount, setLoanAmount] = useState('250000');
    const [interestRate, setInterestRate] = useState('6.5');
    const [loanTerm, setLoanTerm] = useState('30');
    const [downPayment, setDownPayment] = useState('50000');
    const [propertyTax, setPropertyTax] = useState('3000');
    const [insurance, setInsurance] = useState('1200');
    const [pmi, setPmi] = useState('');
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    const handleInputChange = (setter: (value: string) => void, value: string) => {
        if (parseFloat(value) < 0) return;
        setter(value);
    };

    const handleCopy = (value: string, field: string) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(field);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const results = useMemo(() => {
        const homePrice = parseFloat(loanAmount) + parseFloat(downPayment || '0');
        const P = parseFloat(loanAmount);
        const annualRate = parseFloat(interestRate);
        const termYears = parseInt(loanTerm);
        const yearlyTax = parseFloat(propertyTax || '0');
        const yearlyInsurance = parseFloat(insurance || '0');
        const monthlyPMI = parseFloat(pmi || '0');

        if (isNaN(P) || isNaN(annualRate) || isNaN(termYears) || P <= 0 || annualRate < 0 || termYears <= 0) {
            return null;
        }

        const i = annualRate / 100 / 12; // monthly interest rate
        const n = termYears * 12; // number of months

        const M = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        const totalPayment = M * n;
        const totalInterest = totalPayment - P;

        const monthlyTax = yearlyTax / 12;
        const monthlyInsurance = yearlyInsurance / 12;
        const totalMonthlyPayment = M + monthlyTax + monthlyInsurance + monthlyPMI;

        return {
            monthlyPayment: M,
            totalPayment,
            totalInterest,
            principalPaid: P,
            monthlyTax,
            monthlyInsurance,
            monthlyPMI,
            totalMonthlyPayment,
            homePrice,
            downPaymentPercent: ((parseFloat(downPayment || '0') / homePrice) * 100),
        };
    }, [loanAmount, interestRate, loanTerm, downPayment, propertyTax, insurance, pmi]);

    const copyAllResults = () => {
        if (!results) return;
        const text = `Mortgage Payment Breakdown:\nMonthly Principal & Interest: $${results.monthlyPayment.toFixed(2)}\nProperty Tax: $${results.monthlyTax.toFixed(2)}/mo\nInsurance: $${results.monthlyInsurance.toFixed(2)}/mo${results.monthlyPMI > 0 ? `\nPMI: $${results.monthlyPMI.toFixed(2)}/mo` : ''}\nTotal Monthly Payment: $${results.totalMonthlyPayment.toFixed(2)}\n\nLoan Summary:\nHome Price: $${results.homePrice.toLocaleString()}\nDown Payment: $${parseFloat(downPayment || '0').toLocaleString()} (${results.downPaymentPercent.toFixed(1)}%)\nLoan Amount: $${results.principalPaid.toLocaleString()}\nTotal Interest: $${results.totalInterest.toFixed(2)}\nTotal Paid: $${results.totalPayment.toFixed(2)}`;
        handleCopy(text, 'all');
    };

    return (
        <ToolContainer
            title="Free Mortgage Payment Calculator"
            description="Estimate your monthly mortgage payments including principal, interest, taxes, and insurance (PITI). Compare different loan terms and see how much you'll pay over the life of the loan."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="payment-calculator"
        >
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Loan Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="loanAmount" className="text-sm font-bold text-gray-500 mb-2 block">Home Price</label>
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

                            <div>
                                <label htmlFor="downPayment" className="text-sm font-bold text-gray-500 mb-2 block">Down Payment</label>
                                <div className="relative">
                                    <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    <input
                                        id="downPayment"
                                        type="number"
                                        value={downPayment}
                                        onChange={e => handleInputChange(setDownPayment, e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                        min="0"
                                        step="any"
                                    />
                                </div>
                                {results && (
                                    <p className="text-xs text-gray-500 mt-1 ml-1">
                                        {results.downPaymentPercent.toFixed(1)}% down • Loan amount: ${(parseFloat(loanAmount) - parseFloat(downPayment || '0')).toLocaleString()}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="interestRate" className="text-sm font-bold text-gray-500 mb-2 block">Interest Rate</label>
                                    <div className="relative">
                                        <input
                                            id="interestRate"
                                            type="number"
                                            value={interestRate}
                                            step="0.01"
                                            onChange={e => handleInputChange(setInterestRate, e.target.value)}
                                            className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-brand-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
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

                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => setLoanTerm('15')}
                                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${loanTerm === '15' ? 'bg-brand-pink text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    15 Years
                                </button>
                                <button
                                    onClick={() => setLoanTerm('30')}
                                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${loanTerm === '30' ? 'bg-brand-pink text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    30 Years
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <button
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">Additional Costs (Optional)</h3>
                            <span className="text-brand-pink font-bold">{showAdvanced ? '−' : '+'}</span>
                        </button>
                        {showAdvanced && (
                            <div className="mt-4 space-y-4">
                                <div>
                                    <label htmlFor="propertyTax" className="text-sm font-bold text-gray-500 mb-2 block">Annual Property Tax</label>
                                    <div className="relative">
                                        <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                        <input
                                            id="propertyTax"
                                            type="number"
                                            value={propertyTax}
                                            onChange={e => handleInputChange(setPropertyTax, e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="any"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="insurance" className="text-sm font-bold text-gray-500 mb-2 block">Annual Home Insurance</label>
                                    <div className="relative">
                                        <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                        <input
                                            id="insurance"
                                            type="number"
                                            value={insurance}
                                            onChange={e => handleInputChange(setInsurance, e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="any"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="pmi" className="text-sm font-bold text-gray-500 mb-2 block">Monthly PMI (if applicable)</label>
                                    <div className="relative">
                                        <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                        <input
                                            id="pmi"
                                            type="number"
                                            value={pmi}
                                            onChange={e => handleInputChange(setPmi, e.target.value)}
                                            placeholder="0"
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="any"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1 ml-1">
                                        PMI is typically required if down payment is less than 20%
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="sticky top-6 space-y-6">
                        {results ? (
                            <>
                                <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-6 text-center uppercase tracking-wider text-xs">Monthly Payment</h3>
                                    <div className="text-center mb-8">
                                        <p className="text-sm font-bold text-brand-text-body/60 mb-2 uppercase tracking-wide">Total Monthly Payment</p>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-3xl font-bold text-brand-text-title font-sans">$</span>
                                            <span className="font-serif font-bold text-6xl text-brand-text-title">{results.totalMonthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-sm mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-brand-text-body font-medium">Principal & Interest</span>
                                            <span className="font-bold text-brand-text-title text-lg">${results.monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                        {results.monthlyTax > 0 && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-brand-text-body font-medium">Property Tax</span>
                                                <span className="font-bold text-brand-text-title text-lg">${results.monthlyTax.toFixed(2)}</span>
                                            </div>
                                        )}
                                        {results.monthlyInsurance > 0 && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-brand-text-body font-medium">Home Insurance</span>
                                                <span className="font-bold text-brand-text-title text-lg">${results.monthlyInsurance.toFixed(2)}</span>
                                            </div>
                                        )}
                                        {results.monthlyPMI > 0 && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-brand-text-body font-medium">PMI</span>
                                                <span className="font-bold text-brand-text-title text-lg">${results.monthlyPMI.toFixed(2)}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-brand-border space-y-3 text-sm">
                                        <h4 className="font-bold text-xs uppercase tracking-wide text-brand-text-title mb-3">Loan Summary</h4>
                                        <div className="flex justify-between">
                                            <span className="text-brand-text-body">Total Principal</span>
                                            <span className="font-bold text-brand-text-title">${results.principalPaid.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-brand-text-body">Total Interest</span>
                                            <span className="font-bold text-brand-text-title">${results.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                        <div className="flex justify-between pt-2 border-t border-brand-border/50">
                                            <span className="font-bold text-brand-text-title">Total Paid</span>
                                            <span className="font-bold text-brand-pink">${results.totalPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={copyAllResults}
                                        className="w-full mt-8 py-3 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all flex items-center justify-center gap-2"
                                    >
                                        {copied === 'all' ? <CheckCircleIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
                                        {copied === 'all' ? 'Copied!' : 'Copy Results'}
                                    </button>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 shadow-sm">
                                    <p className="flex gap-2 items-start">
                                        <span className="font-bold text-lg leading-none">💡</span>
                                        <span>
                                            <strong>Tip:</strong> A 15-year mortgage has higher monthly payments but you'll pay significantly less interest over the life of the loan.
                                        </span>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="bg-brand-pink-light p-8 rounded-2xl border border-brand-pink/20 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                                <MortgageIcon className="w-16 h-16 text-brand-pink mb-4" />
                                <h3 className="text-xl font-bold text-brand-text-title mb-2">Enter Your Loan Details</h3>
                                <p className="text-brand-text-body/70">Your monthly payment will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-brand-border">
                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <h2 className="font-serif text-2xl font-bold text-brand-text-title">Understanding Your Mortgage Payments</h2>
                    <p>
                        This mortgage calculator helps you estimate your monthly payments including principal, interest, taxes, and insurance (PITI). Understanding these components is crucial for financial planning.
                    </p>
                    <h3 className="font-serif text-xl font-bold text-brand-text-title">Key Mortgage Terms Explained</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Principal:</strong> The total amount of money you borrow from a lender. Your monthly payments will gradually pay this down over the life of the loan.</li>
                        <li><strong>Interest Rate:</strong> The percentage the lender charges you for borrowing the money. This is a key factor in determining the overall cost of your loan.</li>
                        <li><strong>Loan Term:</strong> The length of time you have to repay the loan. Common terms are 15 or 30 years. A shorter term means higher monthly payments but less total interest paid.</li>
                        <li><strong>PMI (Private Mortgage Insurance):</strong> Required if your down payment is less than 20%. This protects the lender if you default on the loan.</li>
                        <li><strong>PITI:</strong> Principal, Interest, Taxes, and Insurance - the four components of a complete mortgage payment.</li>
                    </ul>
                    <h3 className="font-serif text-xl font-bold text-brand-text-title">15-Year vs 30-Year Mortgage</h3>
                    <p>
                        A 15-year mortgage typically has a lower interest rate and you'll pay significantly less interest over the life of the loan. However, monthly payments are higher. A 30-year mortgage offers lower monthly payments, making it easier to afford, but you'll pay more interest overall.
                    </p>
                </div>
            </div>
        </ToolContainer>
    );
};
