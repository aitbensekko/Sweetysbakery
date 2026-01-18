import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CheckCircleIcon, BakingPanIcon, InfoIcon } from '../Icons';

/**
 * Calculates the approximate volume of a baking pan in cubic inches.
 */
const getPanVolume = (shape: string, d1: number, d2: number, d3: number): number => {
    // d1, d2, d3 map to different dimensions based on shape

    if (shape === 'round') {
        // d1: Diameter, d2: Height (default 2)
        const r = d1 / 2;
        const h = d2 || 2;
        return Math.PI * r * r * h;
    }
    else if (shape === 'square') {
        // d1: Side, d2: Height (default 2)
        const s = d1;
        const h = d2 || 2;
        return s * s * h;
    }
    else if (shape === 'rect') {
        // d1: Length, d2: Width, d3: Height (default 2)
        const l = d1;
        const w = d2;
        const h = d3 || 2;
        return l * w * h;
    }
    else if (shape === 'bundt') {
        // d1: Capacity in cups
        // 1 cup = 14.44 cubic inches
        return d1 * 14.44;
    }
    else if (shape === 'springform') {
        // Same as round, usually deeper (2.5 - 3)
        const r = d1 / 2;
        const h = d2 || 2.5;
        return Math.PI * r * r * h;
    }
    else if (shape === 'muffin') {
        // d1: Count, d2: Type (0=Standard, 1=Mini, 2=Jumbo)
        // Standard ~ 1/2 cup (7.2 in3)
        // Mini ~ 1/8 cup (1.8 in3)
        // Jumbo ~ 1 cup (14.4 in3)
        const count = d1;
        const type = d2;
        let volPerMuffin = 7.2;
        if (type === 1) volPerMuffin = 2.5; // Mini
        if (type === 2) volPerMuffin = 14.4; // Jumbo
        return count * volPerMuffin;
    }
    return 0;
};

interface PanFormProps {
    title: string;
    shape: string;
    setShape: (s: string) => void;
    d1: string; setD1: (s: string) => void;
    d2: string; setD2: (s: string) => void;
    d3: string; setD3: (s: string) => void;
}

const PanInputForm: React.FC<PanFormProps> = ({ title, shape, setShape, d1, setD1, d2, setD2, d3, setD3 }) => (
    <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
        <div className="flex items-center gap-2 mb-4">
            <BakingPanIcon className="w-5 h-5 text-brand-pink" />
            <h3 className="font-bold text-lg text-brand-text-title">{title}</h3>
        </div>

        <div className="space-y-4">
            <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-brand-text-body/70 mb-1">Pan Shape</label>
                <select value={shape} onChange={e => setShape(e.target.value)} className="w-full px-3 py-2 bg-brand-bg/30 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink">
                    <option value="round">Round Cake Pan</option>
                    <option value="square">Square Pan</option>
                    <option value="rect">Rectangular / Sheet Pan</option>
                    <option value="springform">Springform Pan</option>
                    <option value="bundt">Bundt / Tube Pan</option>
                    <option value="muffin">Muffin / Cupcake Tin</option>
                </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {(shape === 'round' || shape === 'springform') && (
                    <>
                        <div>
                            <label className="block text-xs font-medium mb-1">Diameter (in)</label>
                            <input type="number" value={d1} onChange={e => setD1(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="e.g. 9" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium mb-1">Depth (in)</label>
                            <input type="number" value={d2} onChange={e => setD2(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="e.g. 2" />
                        </div>
                    </>
                )}

                {shape === 'square' && (
                    <>
                        <div>
                            <label className="block text-xs font-medium mb-1">Side Length (in)</label>
                            <input type="number" value={d1} onChange={e => setD1(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="e.g. 8" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium mb-1">Depth (in)</label>
                            <input type="number" value={d2} onChange={e => setD2(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="e.g. 2" />
                        </div>
                    </>
                )}

                {shape === 'rect' && (
                    <>
                        <div className="col-span-2 grid grid-cols-3 gap-2">
                            <div>
                                <label className="block text-xs font-medium mb-1">Length</label>
                                <input type="number" value={d1} onChange={e => setD1(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="13" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">Width</label>
                                <input type="number" value={d2} onChange={e => setD2(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="9" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">Depth</label>
                                <input type="number" value={d3} onChange={e => setD3(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="2" />
                            </div>
                        </div>
                    </>
                )}

                {shape === 'bundt' && (
                    <div className="col-span-2">
                        <label className="block text-xs font-medium mb-1">Capacity (Cups)</label>
                        <input type="number" value={d1} onChange={e => setD1(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="e.g. 10 or 12" />
                        <p className="text-xs text-brand-text-body/60 mt-1">Fill with water to measure if unsure.</p>
                    </div>
                )}

                {shape === 'muffin' && (
                    <>
                        <div>
                            <label className="block text-xs font-medium mb-1">Count</label>
                            <input type="number" value={d1} onChange={e => setD1(e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-lg" placeholder="12" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium mb-1">Size</label>
                            <select value={d2} onChange={e => setD2(e.target.value)} className="w-full px-3 py-2 bg-white border border-brand-border rounded-lg">
                                <option value="0">Standard</option>
                                <option value="1">Mini</option>
                                <option value="2">Jumbo</option>
                            </select>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
);


interface BakingPanConverterProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const BakingPanConverter: React.FC<BakingPanConverterProps> = ({ setActiveTool, breadcrumbs }) => {
    // Original Pan State
    const [fromShape, setFromShape] = useState('round');
    const [fromD1, setFromD1] = useState('9');
    const [fromD2, setFromD2] = useState('2');
    const [fromD3, setFromD3] = useState('2');

    // New Pan State
    const [toShape, setToShape] = useState('square');
    const [toD1, setToD1] = useState('8');
    const [toD2, setToD2] = useState('2');
    const [toD3, setToD3] = useState('2');

    const [copied, setCopied] = useState(false);

    const { fromVolume, toVolume, scaleFactor } = useMemo(() => {
        const v1 = getPanVolume(fromShape, parseFloat(fromD1), parseFloat(fromD2), parseFloat(fromD3));
        const v2 = getPanVolume(toShape, parseFloat(toD1), parseFloat(toD2), parseFloat(toD3));

        const factor = v1 > 0 ? v2 / v1 : 0;

        return { fromVolume: v1, toVolume: v2, scaleFactor: factor };
    }, [fromShape, fromD1, fromD2, fromD3, toShape, toD1, toD2, toD3]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(scaleFactor.toFixed(2));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // ignore
        }
    };

    return (
        <ToolContainer
            title="Baking Pan Size Converter"
            description="Adapt any recipe to your pan size. Calculate the exact scaling factor for round, square, rectangular, bundt, and muffin pans."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="baking-pan-converter"
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                    <PanInputForm
                        title="Original Recipe Pan"
                        shape={fromShape} setShape={setFromShape}
                        d1={fromD1} setD1={setFromD1}
                        d2={fromD2} setD2={setFromD2}
                        d3={fromD3} setD3={setFromD3}
                    />

                    <div className="flex justify-center text-brand-text-body/30">
                        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </div>

                    <PanInputForm
                        title="Your Pan"
                        shape={toShape} setShape={setToShape}
                        d1={toD1} setD1={setToD1}
                        d2={toD2} setD2={setToD2}
                        d3={toD3} setD3={setToD3}
                    />
                </div>

                <div className="lg:col-span-5 space-y-6 sticky top-6">
                    <div className="bg-brand-pink text-white p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <BakingPanIcon className="w-32 h-32" />
                        </div>

                        <h3 className="font-serif font-bold text-2xl mb-2">Conversion Factor</h3>
                        <div className="flex items-center justify-center gap-3 my-6">
                            <span className="text-6xl font-bold tracking-tight">{scaleFactor.toFixed(2)}x</span>
                            <button onClick={handleCopy} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                                {copied ? <CheckCircleIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
                            </button>
                        </div>

                        <p className="text-white/90 text-sm mb-6">
                            Multiply all ingredients in your recipe by this number.
                        </p>

                        <button
                            onClick={() => setActiveTool('recipe-scaler')}
                            className="w-full py-3 bg-white text-brand-pink font-bold rounded-lg hover:bg-brand-bg transition-colors shadow-sm"
                        >
                            Open Recipe Scaler
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-brand-border">
                        <h4 className="font-bold text-brand-text-title mb-4 flex items-center gap-2">
                            <InfoIcon className="w-5 h-5 text-brand-pink" />
                            Volume Comparison
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-brand-text-body">Original</span>
                                    <span className="font-bold">{fromVolume.toFixed(1)} in³</span>
                                </div>
                                <div className="h-2 bg-brand-bg rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-text-body/30" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-brand-text-body">Yours</span>
                                    <span className="font-bold">{toVolume.toFixed(1)} in³</span>
                                </div>
                                <div className="h-2 bg-brand-bg rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${toVolume > fromVolume ? 'bg-green-500' : 'bg-brand-pink'}`}
                                        style={{ width: `${Math.min((toVolume / fromVolume) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-sm text-brand-text-body/80 space-y-2">
                            <p><strong>Tip:</strong> If your pan is larger (factor {'>'} 1), you may need to increase baking time slightly.</p>
                            <p>If smaller (factor {'<'} 1), check for doneness earlier.</p>
                        </div>
                    </div>
                </div>
            </div>
            <BakingPanConverterContent fromShape={fromShape} toShape={toShape} />
        </ToolContainer>
    );
};

const BakingPanConverterContent: React.FC<{ fromShape: string, toShape: string }> = ({ fromShape, toShape }) => (
    <div className="mt-8 space-y-12 pt-8 border-t border-brand-border">
        {/* SEO Intro Section */}
        <div className="prose prose-pink max-w-none">
            <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">Baking Pan Size Converter: Adapt Any Recipe</h2>
            <p className="text-lg text-brand-text-body/80 leading-relaxed">
                Found the perfect cake recipe but don't have the right pan? Don't stress. Our **Baking Pan Converter** calculates the exact volume difference between pans. Whether swapping a <strong>9-inch round</strong> for an <strong>8-inch square</strong>, or scaling a large <strong>bundt cake</strong> into <strong>cupcakes</strong>, this tool gives you the precise <strong>scaling factor</strong> to adjust your ingredients. Bake confidently in any pan you own!
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                    <InfoIcon className="w-6 h-6 text-brand-pink" />
                    How to Use
                </h3>
                <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                    <li><strong>Select Original Pan:</strong> Choose the shape and enter dimensions of the pan specified in your recipe.</li>
                    <li><strong>Select Your Pan:</strong> Choose the shape and enter dimensions of the pan you want to use.</li>
                    <li><strong>Get Conversion Factor:</strong> The tool calculates a multiplier (e.g., 1.5x).</li>
                    <li><strong>Scale Recipe:</strong> Multiply all ingredient amounts by this number. Use our <button onClick={() => document.getElementById('recipe-scaler-link')?.click()} className="text-brand-pink font-bold hover:underline">Recipe Scaler</button> for easy math!</li>
                </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How do I measure a cake pan size?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Always measure from <strong>inside edge to inside edge</strong>, excluding the rim. For depth, place a ruler straight up from the bottom. This ensures you are calculating the actual usable volume.
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            How do I adjust baking time for different pans?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Key rule: <strong>Thinner layers bake faster; deeper layers bake slower.</strong> If your new pan makes the batter deeper (e.g., smaller pan), lower the temp by 25°F and bake longer. If shallower (e.g., sheet pan), bake for less time. Check early!
                        </p>
                    </details>
                    <details className="group">
                        <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                            Glass vs. Metal pans: Does it matter?
                            <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                            Yes. Glass conducts heat faster and holds it longer. If baking in glass when the recipe calls for metal, reduce your oven temperature by <strong>25°F (15°C)</strong> to prevent the edges from burning before the center is cooked.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
);
