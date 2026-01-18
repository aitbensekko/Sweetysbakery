import React, { useState, useCallback } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, ThermometerIcon, InfoIcon } from '../Icons';

interface TemperatureConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const InputField: React.FC<{
    label: string;
    value: string;
    onChange: (val: string) => void;
    icon?: React.ReactNode;
    active?: boolean;
}> = ({ label, value, onChange, icon, active }) => (
    <div className={`relative group transition-all duration-300 ${active ? 'scale-105 z-10' : 'opacity-90 hover:opacity-100'}`}>
        <label className={`block text-xs font-bold uppercase tracking-wide mb-2 transition-colors ${active ? 'text-brand-pink' : 'text-brand-text-body/70'}`}>{label}</label>
        <div className="relative shadow-sm rounded-xl overflow-hidden">
            <input
                type="number"
                value={value}
                onChange={e => onChange(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 text-3xl font-bold border-2 rounded-xl transition-all outline-none ${active ? 'border-brand-pink bg-white ring-4 ring-brand-pink/10' : 'border-brand-border bg-brand-bg/20 hover:border-brand-pink/50'}`}
                placeholder="0"
            />
            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${active ? 'text-brand-pink' : 'text-brand-text-body/40'}`}>
                {icon}
            </div>
        </div>
    </div>
);

export const TemperatureConverter: React.FC<TemperatureConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [celsius, setCelsius] = useState('100');
    const [fahrenheit, setFahrenheit] = useState('212');
    const [kelvin, setKelvin] = useState('373.15');
    const [activeUnit, setActiveUnit] = useState<'C' | 'F' | 'K'>('C');
    const [copied, setCopied] = useState(false);

    const updateValues = (c: number) => {
        if (isNaN(c)) {
            setCelsius(''); setFahrenheit(''); setKelvin('');
            return;
        }
        setCelsius(Math.round(c * 100) / 100 + ''); // Keep decimals clean
        setFahrenheit(((c * 9 / 5) + 32).toFixed(2).replace(/\.00$/, ''));
        setKelvin((c + 273.15).toFixed(2).replace(/\.00$/, ''));
    };

    const handleCelsiusChange = (val: string) => {
        setCelsius(val);
        setActiveUnit('C');
        const c = parseFloat(val);
        if (!isNaN(c)) {
            setFahrenheit(((c * 9 / 5) + 32).toFixed(2).replace(/\.00$/, ''));
            setKelvin((c + 273.15).toFixed(2).replace(/\.00$/, ''));
        } else {
            setFahrenheit(''); setKelvin('');
        }
    };

    const handleFahrenheitChange = (val: string) => {
        setFahrenheit(val);
        setActiveUnit('F');
        const f = parseFloat(val);
        if (!isNaN(f)) {
            const c = (f - 32) * 5 / 9;
            setCelsius(c.toFixed(2).replace(/\.00$/, ''));
            setKelvin((c + 273.15).toFixed(2).replace(/\.00$/, ''));
        } else {
            setCelsius(''); setKelvin('');
        }
    };

    const handleKelvinChange = (val: string) => {
        setKelvin(val);
        setActiveUnit('K');
        const k = parseFloat(val);
        if (!isNaN(k)) {
            const c = k - 273.15;
            setCelsius(c.toFixed(2).replace(/\.00$/, ''));
            setFahrenheit(((c * 9 / 5) + 32).toFixed(2).replace(/\.00$/, ''));
        } else {
            setCelsius(''); setFahrenheit('');
        }
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const c = parseFloat(e.target.value);
        setActiveUnit('C');
        updateValues(c);
    };

    const handleCopy = async () => {
        const text = `${celsius}°C = ${fahrenheit}°F = ${kelvin}K`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // ignore
        }
    };

    return (
        <ToolContainer
            title="Free Temperature Converter (°C, °F, K)"
            description="Quickly convert temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K) for all your cooking, baking, and scientific needs."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="temperature-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-8">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-border shadow-lg relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative flex flex-col gap-6">
                            <InputField
                                label="Celsius (°C)"
                                value={celsius}
                                onChange={handleCelsiusChange}
                                icon={<span className="text-xl font-serif font-bold">°C</span>}
                                active={activeUnit === 'C'}
                            />
                            <InputField
                                label="Fahrenheit (°F)"
                                value={fahrenheit}
                                onChange={handleFahrenheitChange}
                                icon={<span className="text-xl font-serif font-bold">°F</span>}
                                active={activeUnit === 'F'}
                            />
                            <InputField
                                label="Kelvin (K)"
                                value={kelvin}
                                onChange={handleKelvinChange}
                                icon={<span className="text-xl font-serif font-bold">K</span>}
                                active={activeUnit === 'K'}
                            />

                            {/* Slider */}
                            <div className="pt-4 px-2">
                                <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/50 mb-4 text-center">Quick Adjust Slider (Celsius Base)</label>
                                <input
                                    type="range"
                                    min="-50"
                                    max="300"
                                    value={parseFloat(celsius) || 0}
                                    onChange={handleSliderChange}
                                    className="w-full h-2 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-pink hover:accent-brand-pink-dark"
                                />
                                <div className="flex justify-between text-xs text-brand-text-body/40 mt-2 font-medium">
                                    <span>Freezing (-50°C)</span>
                                    <span>Boiling (100°C)</span>
                                    <span>Hot (300°C)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button onClick={handleCopy} className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-brand-border rounded-full text-brand-pink font-bold hover:bg-brand-bg hover:border-brand-pink transition-all shadow-sm hover:shadow-md group">
                            {copied ? <CheckCircleIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                            {copied ? 'Copied!' : 'Copy All Results'}
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-6 text-brand-text-title flex items-center gap-2">
                            <ThermometerIcon className="w-6 h-6 text-brand-pink" />
                            Common Temperatures
                        </h3>
                        <div className="space-y-3">
                            {[
                                { c: '0°C', f: '32°F', desc: 'Freezing Point of Water' },
                                { c: '21°C', f: '70°F', desc: 'Room Temperature' },
                                { c: '37°C', f: '98.6°F', desc: 'Body Temperature' },
                                { c: '100°C', f: '212°F', desc: 'Boiling Point of Water' },
                                { c: '180°C', f: '350°F', desc: 'Standard Baking Temp' }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-brand-bg/20 rounded-xl hover:bg-brand-pink/10 transition-colors cursor-default group">
                                    <div className="flex justify-between font-bold text-brand-text-title mb-1 text-lg">
                                        <span className="group-hover:text-brand-pink transition-colors">{item.c}</span>
                                        <span className="text-brand-text-body/40">|</span>
                                        <span>{item.f}</span>
                                    </div>
                                    <p className="text-xs text-brand-text-body font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-pink/5 p-6 rounded-2xl border border-brand-pink/10">
                        <h3 className="font-bold text-lg mb-3 text-brand-pink">Formulas</h3>
                        <div className="space-y-2 text-sm text-brand-text-body/80 font-mono bg-white/50 p-4 rounded-lg">
                            <p>°F = (°C × 9/5) + 32</p>
                            <p>°C = (°F − 32) × 5/9</p>
                            <p>K = °C + 273.15</p>
                        </div>
                    </div>
                </div>
            </div>
            <TemperatureConverterContent />
        </ToolContainer>
    );
};

const TemperatureConverterContent: React.FC = () => (
    <div className="mt-8 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Enter Temperature:</strong> Type the value you want to convert into any field (Celsius, Fahrenheit, or Kelvin).</li>
                <li><strong>Instant Conversion:</strong> The other fields will automatically update to show the equivalent temperature.</li>
                <li><strong>Use Slider:</strong> Drag the slider to quickly visualize temperature ranges from freezing to hot.</li>
                <li><strong>Copy Results:</strong> Click "Copy All Results" to save the conversions to your clipboard.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Celsius vs. Fahrenheit?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Celsius is based on water (0° freezing, 100° boiling). Fahrenheit is the US standard (32° freezing, 212° boiling). 180°C is roughly 350°F.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What is Kelvin?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Kelvin is used in science. 0 K is "absolute zero" (-273.15°C), the coldest possible temperature where molecular motion stops. It's rarely used in baking!
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Why decimals?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Exact conversions often result in decimals. For baking, you can usually round to the nearest whole number (e.g., 177°C → 180°C).
                    </p>
                </details>
            </div>
        </div>
    </div>
);
