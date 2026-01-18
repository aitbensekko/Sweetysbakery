import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, ThermometerIcon, FlameIcon, InfoIcon } from '../Icons';

interface OvenTemperatureConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const GAS_MARKS: { [key: number]: { minC: number, maxC: number } } = {
    '0.5': { minC: 110, maxC: 129 },
    1: { minC: 130, maxC: 139 }, 2: { minC: 140, maxC: 149 }, 3: { minC: 150, maxC: 169 },
    4: { minC: 170, maxC: 179 }, 5: { minC: 180, maxC: 199 }, 6: { minC: 200, maxC: 209 },
    7: { minC: 210, maxC: 229 }, 8: { minC: 230, maxC: 239 }, 9: { minC: 240, maxC: 250 },
};

const getGasMark = (celsius: number): string => {
    if (celsius < 110) return 'Low';
    for (const mark in GAS_MARKS) {
        if (celsius >= GAS_MARKS[mark].minC && celsius <= GAS_MARKS[mark].maxC) {
            return mark;
        }
    }
    if (celsius < 135) return '1/2';
    if (celsius < 145) return '1';
    if (celsius < 155) return '2';
    if (celsius < 175) return '3';
    if (celsius < 185) return '4';
    if (celsius < 195) return '5';
    if (celsius < 215) return '6';
    if (celsius < 225) return '7';
    if (celsius < 235) return '8';
    return '9+';
};

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

export const OvenTemperatureConverter: React.FC<OvenTemperatureConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    const [celsius, setCelsius] = useState('180');
    const [fahrenheit, setFahrenheit] = useState('350');
    const [gasMark, setGasMark] = useState('4');
    const [fanCelsius, setFanCelsius] = useState('160');
    const [copied, setCopied] = useState(false);

    // State to control the order of inputs
    const [isFahrenheitFirst, setIsFahrenheitFirst] = useState(true);

    const updateValues = (c: number) => {
        if (isNaN(c)) {
            setCelsius(''); setFahrenheit(''); setGasMark(''); setFanCelsius('');
            return;
        }
        setCelsius(Math.round(c).toString());
        setFahrenheit(Math.round((c * 9 / 5) + 32).toString());
        setGasMark(getGasMark(c));
        setFanCelsius(Math.round(c - 20).toString());
    };

    const handleCelsiusChange = (val: string) => {
        const c = parseFloat(val);
        setCelsius(val);
        if (!isNaN(c)) updateValues(c);
    };

    const handleFahrenheitChange = (val: string) => {
        const f = parseFloat(val);
        setFahrenheit(val);
        if (!isNaN(f)) {
            const c = (f - 32) * 5 / 9;
            updateValues(c);
        }
    };

    // Slider handler (uses Celsius as base)
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const c = parseFloat(e.target.value);
        updateValues(c);
    };

    const handleCopy = async () => {
        const text = `${celsius}°C = ${fahrenheit}°F = Gas Mark ${gasMark} = ${fanCelsius}°C (Fan)`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // ignore
        }
    };

    const toggleOrder = () => {
        setIsFahrenheitFirst(!isFahrenheitFirst);
    };

    return (
        <ToolContainer
            title="Oven Temperature Converter"
            description="Quickly convert oven temperatures between Fahrenheit (°F), Celsius (°C), Gas Mark, and Fan Ovens."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="oven-temp-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-8">
                    {/* Main Converter Card */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-border shadow-lg relative overflow-hidden">
                        {/* Decorative background blob */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative flex flex-col gap-6">
                            {isFahrenheitFirst ? (
                                <>
                                    <InputField
                                        label="Fahrenheit (°F)"
                                        value={fahrenheit}
                                        onChange={handleFahrenheitChange}
                                        icon={<span className="text-xl font-serif font-bold">°F</span>}
                                        active={true}
                                    />

                                    <div className="flex justify-center -my-3 z-20">
                                        <button
                                            onClick={toggleOrder}
                                            className="bg-white border-2 border-brand-border p-2 rounded-full shadow-md hover:border-brand-pink hover:text-brand-pink transition-all hover:rotate-180 group"
                                            title="Swap Inputs"
                                        >
                                            <svg className="w-5 h-5 text-brand-text-body/60 group-hover:text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                        </button>
                                    </div>

                                    <InputField
                                        label="Celsius (°C)"
                                        value={celsius}
                                        onChange={handleCelsiusChange}
                                        icon={<span className="text-xl font-serif font-bold">°C</span>}
                                    />
                                </>
                            ) : (
                                <>
                                    <InputField
                                        label="Celsius (°C)"
                                        value={celsius}
                                        onChange={handleCelsiusChange}
                                        icon={<span className="text-xl font-serif font-bold">°C</span>}
                                        active={true}
                                    />

                                    <div className="flex justify-center -my-3 z-20">
                                        <button
                                            onClick={toggleOrder}
                                            className="bg-white border-2 border-brand-border p-2 rounded-full shadow-md hover:border-brand-pink hover:text-brand-pink transition-all hover:rotate-180 group"
                                            title="Swap Inputs"
                                        >
                                            <svg className="w-5 h-5 text-brand-text-body/60 group-hover:text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                        </button>
                                    </div>

                                    <InputField
                                        label="Fahrenheit (°F)"
                                        value={fahrenheit}
                                        onChange={handleFahrenheitChange}
                                        icon={<span className="text-xl font-serif font-bold">°F</span>}
                                    />
                                </>
                            )}

                            {/* Slider */}
                            <div className="pt-4 px-2">
                                <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/50 mb-4 text-center">Quick Adjust Slider</label>
                                <input
                                    type="range"
                                    min="100"
                                    max="260"
                                    value={celsius || 180}
                                    onChange={handleSliderChange}
                                    className="w-full h-2 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-pink hover:accent-brand-pink-dark"
                                />
                                <div className="flex justify-between text-xs text-brand-text-body/40 mt-2 font-medium">
                                    <span>Cool (100°C)</span>
                                    <span>Moderate (180°C)</span>
                                    <span>Hot (260°C)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white p-6 rounded-2xl shadow-lg text-center transform transition-transform hover:scale-[1.02]">
                            <div className="flex items-center justify-center gap-2 mb-3 opacity-90">
                                <FlameIcon className="w-6 h-6" />
                                <span className="text-sm font-bold uppercase tracking-wide">Gas Mark</span>
                            </div>
                            <p className="text-6xl font-bold tracking-tighter">{gasMark}</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-brand-border text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-center gap-2 mb-3 text-brand-text-body">
                                <svg className="w-6 h-6 animate-spin-slow text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                <span className="text-sm font-bold uppercase tracking-wide">Fan Oven</span>
                            </div>
                            <p className="text-6xl font-bold text-brand-text-title tracking-tighter">{fanCelsius}°</p>
                            <p className="text-xs text-brand-text-body/60 mt-2 font-medium">Celsius</p>
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
                                { f: '325°F', c: '160°C', g: 'Gas 3', desc: 'Slow baking (cheesecakes)' },
                                { f: '350°F', c: '180°C', g: 'Gas 4', desc: 'Standard baking (cakes, cookies)' },
                                { f: '400°F', c: '200°C', g: 'Gas 6', desc: 'Hot baking (pastry, breads)' },
                                { f: '425°F', c: '220°C', g: 'Gas 7', desc: 'Roasting, high heat' }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-brand-bg/20 rounded-xl hover:bg-brand-pink/10 transition-colors cursor-default group">
                                    <div className="flex justify-between font-bold text-brand-text-title mb-1 text-lg">
                                        <span className="group-hover:text-brand-pink transition-colors">{item.f}</span>
                                        <span className="text-brand-text-body/40">|</span>
                                        <span>{item.c}</span>
                                        <span className="text-brand-text-body/40">|</span>
                                        <span>{item.g}</span>
                                    </div>
                                    <p className="text-xs text-brand-text-body font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-pink/5 p-6 rounded-2xl border border-brand-pink/10">
                        <h3 className="font-bold text-lg mb-3 text-brand-pink">Pro Tip: Oven Thermometers</h3>
                        <p className="text-sm leading-relaxed text-brand-text-body/80">
                            Most home ovens are off by 25-50°F! The dial is rarely accurate. An inexpensive hanging oven thermometer is the best investment for better baking results.
                        </p>
                    </div>
                </div>
            </div>
            <OvenTemperatureConverterContent />
        </ToolContainer>
    );
};

const OvenTemperatureConverterContent: React.FC = () => (
    <div className="mt-8 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">Oven Temperature Conversion Chart & Calculator</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Finding an old British recipe that calls for "Gas Mark 4" or a European one using Celsius? Don't let conversion confusion burn your biscuits. Our <strong>Baking Temperature Converter</strong> instantly switches between <strong>Fahrenheit (°F)</strong>, <strong>Celsius (°C)</strong>, and <strong>Gas Marks</strong>. It also calculates the adjustment needed for modern <strong>Fan / Convection Ovens</strong>, which typically cook faster than conventional setting.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    How to Convert Temperatures
                </h3>
                <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>Enter Current Temp:</strong> Type the number you have into the Fahrenheit or Celsius box.</li>
                    <li><strong>Check Fan Adjustment:</strong> If you are using a Fan/Convection oven, use the "Fan Oven" value (usually 20-25°C lower).</li>
                    <li><strong>Gas Mark:</strong> The tool automatically finds the nearest Gas Mark setting for older ovens.</li>
                    <li><strong>Quick Reference:</strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                            <li><strong>350°F</strong> = 180°C = Gas Mark 4 (Moderate)</li>
                            <li><strong>400°F</strong> = 200°C = Gas Mark 6 (Hot)</li>
                            <li><strong>300°F</strong> = 150°C = Gas Mark 2 (Slow)</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            What is the difference for Fan ovens?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Fan (Convection) ovens blow hot air around the food, cooking it faster and more evenly. You generally need to <strong>reduce the temperature by 25°F (20°C)</strong> to match a conventional oven recipe.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Why does my oven burn everything?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Oven dials are often inaccurate. Your "350°F" setting might actually be 375°F. We highly recommend buying an inexpensive <strong>oven thermometer</strong> to hang inside so you know the <i>real</i> temperature.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            What is Gas Mark?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Gas Mark is a scale used on gas ovens in the UK and Ireland. It adjusts the gas flow to regulate heat. Gas Mark 1 is roughly 275°F (Cool), while Gas Mark 8 is 450°F (Very Hot).
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);
