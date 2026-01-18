import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { MortgageIcon, InfoIcon, DollarSignIcon, PercentIcon, ClipboardIcon, CheckCircleIcon } from '../Icons';

interface MortgageAffordabilityCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const MortgageAffordabilityCalculator: React.FC<MortgageAffordabilityCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [annualIncome, setAnnualIncome] = useState('75000');
    const [monthlyDebts, setMonthlyDebts] = useState('500');
    const [downPayment, setDownPayment] = useState('20000');
    const [interestRate, setInterestRate] = useState('6.5');
    const [loanTerm, setLoanTerm] = useState('30');
    const [propertyTax, setPropertyTax] = useState('1.2');
    const [homeInsurance, setHomeInsurance] = useState('0.5');
    const [copied, setCopied] = useState(false);

    const handleInputChange = (setter: (value: string) => void, value: string) => {
        if (parseFloat(value) < 0) return;
        setter(value);
    };

    const results = useMemo(() => {
        const income = parseFloat(annualIncome) || 0;
        const debts = parseFloat(monthlyDebts) || 0;
        const down = parseFloat(downPayment) || 0;
        const rate = parseFloat(interestRate) / 100 || 0;
        const term = parseInt(loanTerm) || 0;
        const taxRate = parseFloat(propertyTax) / 100 || 0;
        const insuranceRate = parseFloat(homeInsurance) / 100 || 0;

        if (income <= 0 || rate < 0 || term <= 0) {
            return { affordableHomePrice: 0, maxLoanAmount: 0, monthlyPayment: 0, frontEndRatio: 0, backEndRatio: 0, dti: 0, maxMonthlyPITI: 0, downPaymentPercent: 0 };
        }

        const monthlyIncome = income / 12;
        const monthlyRate = rate / 12;
        const numberOfPayments = term * 12;

        // Based on 28/36 rule
        const maxHousingPayment1 = monthlyIncome * 0.28;
        const maxHousingPayment2 = monthlyIncome * 0.36 - debts;
        const maxMonthlyPITI = Math.max(0, Math.min(maxHousingPayment1, maxHousingPayment2));

        // Estimate PITI as a percentage of the loan amount to solve for the loan amount
        const monthlyTaxesAndInsuranceFactor = (taxRate + insuranceRate) / 12;
        const monthlyPaymentFactor = (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        const maxLoanAmount = maxMonthlyPITI / (monthlyPaymentFactor + monthlyTaxesAndInsuranceFactor);
        const affordableHomePrice = maxLoanAmount + down;

        // Calculate actual monthly payment
        const monthlyPayment = maxLoanAmount * monthlyPaymentFactor;

        // Calculate DTI ratios
        const frontEndRatio = (maxMonthlyPITI / monthlyIncome) * 100;
        const backEndRatio = ((maxMonthlyPITI + debts) / monthlyIncome) * 100;
        const dti = (debts / monthlyIncome) * 100;

        return {
            affordableHomePrice: Math.round(affordableHomePrice),
            maxLoanAmount: Math.round(maxLoanAmount),
            monthlyPayment,
            frontEndRatio,
            backEndRatio,
            dti,
            maxMonthlyPITI,
            downPaymentPercent: (down / affordableHomePrice) * 100,
        };
    }, [annualIncome, monthlyDebts, downPayment, interestRate, loanTerm, propertyTax, homeInsurance]);

    const copyResults = () => {
        const text = `Mortgage Affordability:\nAffordable Home Price: $${results.affordableHomePrice.toLocaleString()}\nMax Loan Amount: $${results.maxLoanAmount.toLocaleString()}\nDown Payment: $${parseFloat(downPayment).toLocaleString()} (${results.downPaymentPercent.toFixed(1)}%)\nEstimated Monthly Payment: $${results.monthlyPayment.toFixed(2)}\nFront-End Ratio: ${results.frontEndRatio.toFixed(1)}%\nBack-End Ratio: ${results.backEndRatio.toFixed(1)}%`;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <ToolContainer
            title="Free Mortgage Affordability Calculator"
            description="Estimate the home price you can afford based on your income, debts, and down payment. This tool uses the 28/36 rule to provide a realistic home affordability estimate."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="mortgage-affordability"
        >
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Your Financial Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="income" className="text-sm font-bold text-gray-500 mb-2 block">Annual Gross Income</label>
                                <div className="relative">
                                    <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    <input
                                        id="income"
                                        type="number"
                                        value={annualIncome}
                                        onChange={e => handleInputChange(setAnnualIncome, e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-xl font-bold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                        min="0"
                                        step="any"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="debts" className="text-sm font-bold text-gray-500 mb-2 block">Total Monthly Debts</label>
                                <div className="relative">
                                    <DollarSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    <input
                                        id="debts"
                                        type="number"
                                        value={monthlyDebts}
                                        onChange={e => handleInputChange(setMonthlyDebts, e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                        min="0"
                                        step="any"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1 ml-1">Car loans, student loans, credit cards, etc.</p>
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
                                    <label htmlFor="propertyTax" className="text-sm font-bold text-gray-500 mb-2 block">Property Tax Rate</label>
                                    <div className="relative">
                                        <input
                                            id="propertyTax"
                                            type="number"
                                            value={propertyTax}
                                            onChange={e => handleInputChange(setPropertyTax, e.target.value)}
                                            className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
                                            min="0"
                                            step="0.1"
                                        />
                                        <PercentIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="homeInsurance" className="text-sm font-bold text-gray-500 mb-2 block">Insurance Rate</label>
                                    <div className="relative">
                                        <input
                                            id="homeInsurance"
                                            type="number"
                                            value={homeInsurance}
                                            onChange={e => handleInputChange(setHomeInsurance, e.target.value)}
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
                            <h3 className="font-serif font-bold text-xl text-brand-text-title mb-6 text-center uppercase tracking-wider text-xs">Affordable Home Price</h3>
                            <div className="text-center mb-8">
                                <p className="text-sm font-bold text-brand-text-body/60 mb-2 uppercase tracking-wide">You Can Afford</p>
                                <p className="font-serif font-bold text-6xl text-brand-text-title">${results.affordableHomePrice.toLocaleString()}</p>
                            </div>

                            <div className="space-y-4 text-sm mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-text-body font-medium">Max Loan Amount</span>
                                    <span className="font-bold text-brand-text-title text-lg">${results.maxLoanAmount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-text-body font-medium">Down Payment</span>
                                    <span className="font-bold text-brand-text-title text-lg">${parseFloat(downPayment).toLocaleString()} <span className="text-sm font-normal text-brand-text-body">({results.downPaymentPercent.toFixed(1)}%)</span></span>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                                    <span className="text-brand-text-body font-medium">Est. Monthly Payment</span>
                                    <span className="font-bold text-brand-pink text-xl">${results.monthlyPayment.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-brand-border mb-8">
                                <h4 className="font-bold text-xs uppercase tracking-wide text-brand-text-title mb-4 text-center">Debt-to-Income Ratios</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-brand-text-body">Front-End (Housing)</span>
                                        <span className={`font-bold px-2 py-1 rounded text-xs ${results.frontEndRatio <= 28 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{results.frontEndRatio.toFixed(1)}%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-brand-text-body">Back-End (Total Debt)</span>
                                        <span className={`font-bold px-2 py-1 rounded text-xs ${results.backEndRatio <= 36 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{results.backEndRatio.toFixed(1)}%</span>
                                    </div>
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

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 shadow-sm">
                            <p className="flex gap-2 items-start">
                                <InfoIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>
                                    <strong>Note:</strong> This is an estimate. Your final approved loan amount may vary based on credit score, employment history, and lender requirements.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-border max-w-4xl mx-auto">
                <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">How Affordability is Calculated</h3>
                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <p>This calculator uses the <strong>28/36 rule</strong>, a common guideline used by lenders to assess affordability.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Front-End Ratio (28%):</strong> Your total monthly housing payment (Principal, Interest, Taxes, and Insurance - PITI) should not exceed 28% of your gross monthly income.
                        </li>
                        <li>
                            <strong>Back-End Ratio (36%):</strong> Your total monthly debt payments (PITI plus other debts like car loans, student loans, and credit card payments) should not exceed 36% of your gross monthly income.
                        </li>
                    </ul>
                    <p>The calculator determines the maximum affordable home price based on the more conservative of these two ratios to give you a realistic estimate.</p>
                    <h4 className="font-bold text-brand-text-title">Tips for Improving Affordability:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Pay down existing debts to lower your back-end ratio</li>
                        <li>Increase your down payment to reduce the loan amount needed</li>
                        <li>Improve your credit score to qualify for better interest rates</li>
                        <li>Consider a longer loan term to lower monthly payments (though you'll pay more interest overall)</li>
                    </ul>
                </div>
            </div>
        </ToolContainer>
    );
};
