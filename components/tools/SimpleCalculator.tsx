import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { CheckCircleIcon, InfoIcon } from '../Icons';

interface SimpleCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const SimpleCalculator: React.FC<SimpleCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [display, setDisplay] = useState('0');
    const [expression, setExpression] = useState('');
    const [copied, setCopied] = useState(false);

    const handleButtonClick = (value: string) => {
        if (value === 'C') {
            setDisplay('0');
            setExpression('');
        } else if (value === '=') {
            try {
                // Using Function constructor for safer evaluation than eval()
                const sanitizedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
                // Basic validation to prevent malicious code. Allows numbers, operators, dots, and parentheses.
                if (/[^0-9.+\-*/().\s]/.test(sanitizedExpression)) {
                    throw new Error("Invalid characters in expression");
                }
                const result = new Function('return ' + sanitizedExpression)();

                if (typeof result !== 'number' || !isFinite(result)) {
                    throw new Error("Invalid calculation result");
                }

                const roundedResult = Math.round(result * 10000) / 10000; // Round to 4 decimal places
                setDisplay(String(roundedResult));
                setExpression(String(roundedResult));
            } catch (error) {
                setDisplay('Error');
                setExpression('');
            }
        } else {
            if (display === '0' || display === 'Error') {
                setDisplay(value);
                setExpression(value);
            } else {
                setDisplay(display + value);
                setExpression(expression + value);
            }
        }
    };

    const handleCopy = async () => {
        if (display !== 'Error' && !copied) { // Prevent re-copying while "Copied!" is shown
            try {
                await navigator.clipboard.writeText(display);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            } catch (err) {
                console.error("Failed to copy text:", err);
            }
        }
    };

    const Button: React.FC<{ val: string; className?: string }> = ({ val, className }) => {
        const isOperator = ['÷', '×', '-', '+', '='].includes(val);
        const isClear = val === 'C';

        return (
            <button
                onClick={() => handleButtonClick(val)}
                className={`
                    text-2xl font-semibold rounded-lg transition-all duration-200 transform active:scale-95
                    h-16
                    ${isOperator ? 'bg-brand-pink text-white hover:bg-opacity-90' : ''}
                    ${isClear ? 'bg-rose-400 text-white hover:bg-rose-500' : ''}
                    ${!isOperator && !isClear ? 'bg-gray-50 text-brand-text-title hover:bg-gray-100 border border-gray-200' : ''}
                    ${className || ''}
                `}
            >
                {val}
            </button>
        );
    };

    return (
        <ToolContainer
            title="Simple Online Calculator"
            description="A free, basic online calculator for quick and easy math. Perfect for simple arithmetic while you're baking or working."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="simple-calculator"
        >
            <div className="max-w-xs mx-auto p-4 bg-rose-50 rounded-2xl shadow-inner border border-rose-200/50">
                <button
                    onClick={handleCopy}
                    className="w-full h-24 bg-white rounded-lg mb-4 border border-brand-border text-brand-text-title text-right transition-colors duration-200 hover:bg-gray-50 flex items-center justify-end p-4 relative"
                    title="Click to copy result"
                    aria-label={`Calculator display shows ${display}. Click to copy the result.`}
                    aria-live="polite"
                >
                    {copied ? (
                        <div className="absolute inset-0 flex items-center justify-center gap-2 text-green-500 fade-in" aria-label="Copied to clipboard">
                            <CheckCircleIcon className="w-8 h-8" />
                            <span className="text-3xl font-bold">Copied!</span>
                        </div>
                    ) : (
                        <div className="text-5xl font-sans font-light overflow-x-auto break-all w-full">
                            {display}
                        </div>
                    )}
                </button>
                <div className="grid grid-cols-4 gap-2">
                    <Button val="C" className="col-span-2" />
                    <Button val="÷" />
                    <Button val="×" />

                    <Button val="7" />
                    <Button val="8" />
                    <Button val="9" />
                    <Button val="-" />

                    <Button val="4" />
                    <Button val="5" />
                    <Button val="6" />
                    <Button val="+" />

                    <Button val="1" />
                    <Button val="2" />
                    <Button val="3" />
                    <Button val="=" className="row-span-2" />

                    <Button val="0" className="col-span-2" />
                    <Button val="." />
                </div>
            </div>
            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This <strong>free online calculator</strong> is designed for quick, everyday math tasks in the kitchen or office.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Basic Math:</strong> Use the large buttons to perform addition (+), subtraction (-), multiplication (×), and division (÷).</li>
                            <li><strong>Copy Result:</strong> Click anywhere on the display screen to instantly copy your result to the clipboard.</li>
                            <li><strong>Clear:</strong> Press 'C' to reset the calculator and start a new calculation.</li>
                            <li><strong>Keyboard Support:</strong> You can also use your keyboard's number pad and enter key to calculate.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Why use this instead of my phone calculator?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                This web-based calculator is optimized for desktop and tablet use, allowing you to keep your calculations visible on screen alongside your recipes or spreadsheets without switching devices. It also features a one-click copy function that makes transferring numbers to other apps instant.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Can I use this for baking conversions?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Yes! It's perfect for quick conversions. For example, to convert grams to kilograms, just divide by 1000. For more complex conversions like cups to grams, we recommend using our dedicated <button onClick={() => setActiveTool('measurement-converter')} className="text-brand-pink font-bold hover:underline">Measurement Converter</button>.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>Does it support order of operations?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                Yes, this calculator follows standard mathematical order of operations (PEMDAS), meaning multiplication and division are performed before addition and subtraction.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </ToolContainer>
    );
};
