import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ThermometerIcon, InfoIcon } from '../Icons';

const FRICTION_FACTORS = {
    F: [
        { name: 'Hand Mix', value: '2' },
        { name: 'Stand Mixer', value: '24' },
        { name: 'Spiral Mixer', value: '32' },
        { name: 'Food Processor', value: '45' },
    ],
    C: [
        { name: 'Hand Mix', value: '1' },
        { name: 'Stand Mixer', value: '13' },
        { name: 'Spiral Mixer', value: '18' },
        { name: 'Food Processor', value: '25' },
    ]
};

interface DoughTemperatureCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const InputField: React.FC<{ label: string, id: string, value: string, onChange: (val: string) => void, unit: string }> = ({ label, id, value, onChange, unit }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-bold text-brand-text-title mb-1">{label}</label>
        <div className="relative">
            <input
                id={id}
                type="number"
                value={value}
                onChange={e => onChange(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-body/60">{unit}</span>
        </div>
    </div>
);

export const DoughTemperatureCalculator: React.FC<DoughTemperatureCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [unit, setUnit] = useState<'F' | 'C'>('F');
    const [ddt, setDdt] = useState('78');
    const [flourTemp, setFlourTemp] = useState('70');
    const [roomTemp, setRoomTemp] = useState('72');
    const [frictionTemp, setFrictionTemp] = useState('20');
    const [usePreferment, setUsePreferment] = useState(false);
    const [prefermentTemp, setPrefermentTemp] = useState('70');

    const requiredWaterTemp = useMemo(() => {
        const ddtNum = parseFloat(ddt) || 0;
        const flourNum = parseFloat(flourTemp) || 0;
        const roomNum = parseFloat(roomTemp) || 0;
        const frictionNum = parseFloat(frictionTemp) || 0;
        const prefermentNum = parseFloat(prefermentTemp) || 0;

        if (usePreferment) {
            // DDT * 4 - (Flour + Room + Friction + Preferment)
            return (ddtNum * 4) - (flourNum + roomNum + frictionNum + prefermentNum);
        } else {
            // DDT * 3 - (Flour + Room + Friction)
            return (ddtNum * 3) - (flourNum + roomNum + frictionNum);
        }
    }, [ddt, flourTemp, roomTemp, frictionTemp, usePreferment, prefermentTemp]);

    return (
        <ToolContainer
            title="Desired Dough Temperature (DDT) Calculator"
            description="Achieve perfect fermentation by calculating the exact water temperature needed for your bread dough. A crucial tool for consistent sourdough and yeast breads."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="dough-temperature"
        >
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                    <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                        <button onClick={() => setUnit('F')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unit === 'F' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Fahrenheit (°F)</button>
                        <button onClick={() => setUnit('C')} className={`flex-1 py-1.5 text-sm font-bold rounded-md ${unit === 'C' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body'}`}>Celsius (°C)</button>
                    </div>

                    <InputField label="Desired Dough Temp (DDT)" id="ddt" value={ddt} onChange={setDdt} unit={`°${unit}`} />
                    <InputField label="Flour Temperature" id="flourTemp" value={flourTemp} onChange={setFlourTemp} unit={`°${unit}`} />
                    <InputField label="Room Temperature" id="roomTemp" value={roomTemp} onChange={setRoomTemp} unit={`°${unit}`} />
                    <InputField label="Friction Factor" id="frictionTemp" value={frictionTemp} onChange={setFrictionTemp} unit={`°${unit}`} />

                    {/* Friction Presets */}
                    <div className="flex flex-wrap gap-2 mt-1">
                        {FRICTION_FACTORS[unit].map((factor, idx) => (
                            <button
                                key={idx}
                                onClick={() => setFrictionTemp(factor.value)}
                                className="px-2 py-1 bg-white border border-brand-border rounded text-xs font-medium text-brand-text-body hover:border-brand-pink hover:text-brand-pink transition-colors"
                            >
                                {factor.name}
                            </button>
                        ))}
                    </div>

                    <div className="pt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={usePreferment} onChange={e => setUsePreferment(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-brand-pink focus:ring-brand-pink" />
                            <span className="font-semibold text-brand-text-title">Include Preferment (Levain/Starter)</span>
                        </label>
                    </div>

                    {usePreferment && (
                        <div className="pl-6 fade-in">
                            <InputField label="Preferment Temperature" id="prefermentTemp" value={prefermentTemp} onChange={setPrefermentTemp} unit={`°${unit}`} />
                        </div>
                    )}
                </div>

                <div className="bg-brand-pink-light p-6 rounded-2xl text-center sticky top-6">
                    <ThermometerIcon className="w-12 h-12 mx-auto text-brand-pink mb-2" />
                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-2">Required Water Temperature</h3>
                    <div className="bg-white p-4 rounded-lg border border-brand-pink/20">
                        <p className="font-serif font-bold text-7xl text-brand-pink">{requiredWaterTemp.toFixed(1)}°{unit}</p>
                    </div>
                </div>
            </div>

            <DoughTemperatureCalculatorContent />
        </ToolContainer>
    );
};

const DoughTemperatureCalculatorContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Set DDT:</strong> Enter your Desired Dough Temperature (usually 75-78°F for sourdough).</li>
                <li><strong>Measure Temps:</strong> Input the current temperature of your flour and room.</li>
                <li><strong>Set Friction:</strong> Choose a friction factor based on your mixing method (Hand vs Machine).</li>
                <li><strong>Get Water Temp:</strong> The tool calculates the exact water temperature needed to hit your target.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Why is DDT important?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yeast activity is driven by temperature. Consistent dough temperature means consistent fermentation times, leading to predictable and better bread.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What if the water temp is negative?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        This means your flour or room is too hot! You need to use ice water. Weigh your ice as part of the total water weight.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        How do I find my exact friction factor?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Mix a dough, measure its final temp, and work the formula backward. If your dough is 80°F but you wanted 78°F, your friction was higher than estimated.
                    </p>
                </details>
            </div>
        </div>
    </div>
);
