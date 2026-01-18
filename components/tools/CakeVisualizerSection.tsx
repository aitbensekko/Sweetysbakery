import React, { useState } from 'react';
import {
    PaletteIcon,
    DownloadIcon,
    RefreshCwIcon,
    AlertTriangleIcon,
    WeddingCakeIcon,
    SparklesIcon,
    HeartIcon,
    ChevronDownIcon,
    StarsIcon,
    ImageIcon
} from '../Icons';

export const CakeVisualizerSection: React.FC = () => {
    // State
    const [description, setDescription] = useState('');
    const [theme, setTheme] = useState('Elegant'); // Vibe 1
    const [mood, setMood] = useState('Dreamy'); // Vibe 2
    const [shape, setShape] = useState('Round');
    const [tiers, setTiers] = useState('2 Tiers');
    const [occasion, setOccasion] = useState('Birthday');
    const [selectedDetails, setSelectedDetails] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>(['#FFC0CB', '#FFFFFF']);

    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Options Lists
    const occasions = ['Birthday', 'Wedding', 'Anniversary', 'Baby Shower', 'Holiday', 'Just Because'];
    const detailsOptions = ['Fresh Flowers', 'Gold Leaf', 'Drip Effect', 'Macarons', 'Sprinkles', 'Fresh Fruit', 'Chocolate Shards', 'Sugar Flowers'];

    // Toggle logic
    const toggleDetail = (detail: string) => {
        if (selectedDetails.includes(detail)) {
            setSelectedDetails(selectedDetails.filter(d => d !== detail));
        } else {
            setSelectedDetails([...selectedDetails, detail]);
        }
    };

    const handleColorChange = (index: number, value: string) => {
        const newColors = [...colors];
        newColors[index] = value;
        setColors(newColors);
    };

    const generateDesign = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

            if (isLocal) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                setGeneratedImage('https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=800&q=80');
            } else {
                const richDescription = `A ${mood.toLowerCase()}, ${theme.toLowerCase()} ${occasion} cake. ${shape} shape, ${tiers}. Main colors: ${colors.join(', ')}. Details: ${selectedDetails.join(', ')}. ${description}. High quality, photorealistic, cinematic lighting.`;
                const WORKER_URL = 'https://cake-design-api.sweetys.workers.dev';

                const response = await fetch(WORKER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ description: richDescription, style: theme, shape, colors })
                });

                if (!response.ok) throw new Error('Failed to generate image');
                const data = await response.json();
                setGeneratedImage(data.image);
            }

            // Scroll to bottom to see result
            setTimeout(() => {
                const element = document.getElementById('cake-preview-card');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);

        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="my-12 md:my-20 w-full max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-3 md:mb-4">
                    Cake Design Studio
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                    Craft your confectionery masterpiece.
                </p>
            </div>

            {/* Control Deck */}
            <div className="bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-10 shadow-xl border border-slate-100 mb-8">

                {/* Row 1: Occasion & Vibe */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-10 border-b border-slate-50 pb-8">
                    {/* Occasion */}
                    <div className="space-y-3 md:space-y-4">
                        <label className="text-xs font-bold tracking-widest text-[#B0BCC9] uppercase">Occasion</label>
                        <div className="flex flex-wrap gap-2">
                            {occasions.map(occ => (
                                <button
                                    key={occ}
                                    onClick={() => setOccasion(occ)}
                                    className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${occasion === occ
                                        ? 'bg-[#1A1F2C] text-white shadow-md'
                                        : 'bg-[#F4F6F8] text-[#64748B] hover:bg-[#E2E8F0]'
                                        }`}
                                >
                                    {occ}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Vibe */}
                    <div className="space-y-3 md:space-y-4">
                        <label className="text-xs font-bold tracking-widest text-[#B0BCC9] uppercase">Vibe</label>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="relative group">
                                <select
                                    className="appearance-none w-full bg-[#F8FAFC] border-none rounded-xl py-3 px-4 text-sm font-semibold text-slate-700 cursor-pointer focus:ring-2 focus:ring-brand-pink/20"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)}
                                >
                                    <option>Elegant</option>
                                    <option>Modern</option>
                                    <option>Rustic</option>
                                    <option>Whimsical</option>
                                </select>
                                <ChevronDownIcon className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                            <div className="relative group">
                                <select
                                    className="appearance-none w-full bg-[#F8FAFC] border-none rounded-xl py-3 px-4 text-sm font-semibold text-slate-700 cursor-pointer focus:ring-2 focus:ring-brand-pink/20"
                                    value={mood}
                                    onChange={(e) => setMood(e.target.value)}
                                >
                                    <option>Dreamy</option>
                                    <option>Dark & Moody</option>
                                    <option>Bright & Airy</option>
                                    <option>Colorful</option>
                                </select>
                                <ChevronDownIcon className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Structure, Palette, Details */}
                <div className="grid lg:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10">

                    {/* Structure */}
                    <div className="space-y-3 md:space-y-4">
                        <label className="text-xs font-bold tracking-widest text-[#B0BCC9] uppercase">Structure</label>
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                            {/* Shape Icons */}
                            <div className="flex gap-2">
                                {['Round', 'Square', 'Heart', 'Tiered'].map(s => {
                                    const isSelected = shape === s;
                                    const borderColor = isSelected ? 'border-[#ff5e98]' : 'border-slate-200';
                                    const opacity = isSelected ? 'opacity-100' : 'opacity-40 hover:opacity-70';

                                    return (
                                        <button
                                            key={s}
                                            onClick={() => setShape(s)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${opacity}`}
                                            title={s}
                                        >
                                            {s === 'Round' && <div className={`w-6 h-6 rounded-full border-2 ${borderColor}`}></div>}
                                            {s === 'Square' && <div className={`w-6 h-6 rounded-md border-2 ${borderColor}`}></div>}
                                            {s === 'Heart' && <HeartIcon className={`w-6 h-6 ${isSelected ? 'text-[#ff5e98]' : 'text-slate-300'}`} />}
                                            {s === 'Tiered' && <WeddingCakeIcon className={`w-6 h-6 ${isSelected ? 'text-[#ff5e98]' : 'text-slate-300'}`} />}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Tiers Dropdown */}
                            <div className="relative flex-grow min-w-[120px]">
                                <select
                                    className="appearance-none w-full bg-[#F8FAFC] border-none rounded-xl py-2 px-4 text-sm font-semibold text-slate-700 cursor-pointer"
                                    value={tiers}
                                    onChange={(e) => setTiers(e.target.value)}
                                >
                                    <option>1 Tier</option>
                                    <option>2 Tiers</option>
                                    <option>3 Tiers</option>
                                </select>
                                <ChevronDownIcon className="w-3 h-3 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Palette */}
                    <div className="space-y-3 md:space-y-4">
                        <label className="text-xs font-bold tracking-widest text-[#B0BCC9] uppercase">Palette</label>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {colors.map((c, i) => (
                                    <div key={i} className="relative group">
                                        <input
                                            type="color"
                                            value={c}
                                            onChange={(e) => handleColorChange(i, e.target.value)}
                                            className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer absolute opacity-0 z-10"
                                        />
                                        <div className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: c }}></div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setColors([...colors, '#ffffff'])}
                                disabled={colors.length >= 5}
                                className="w-8 h-8 rounded-full border border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:border-pink-300 hover:text-pink-300 disabled:opacity-30"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 md:space-y-4">
                        <label className="text-xs font-bold tracking-widest text-[#B0BCC9] uppercase">Details</label>
                        <div className="flex flex-wrap gap-2 text-[10px] md:text-[11px] font-bold">
                            {detailsOptions.slice(0, 6).map(d => (
                                <button
                                    key={d}
                                    onClick={() => toggleDetail(d)}
                                    className={`px-2.5 py-1.5 rounded border transition-colors ${selectedDetails.includes(d)
                                        ? 'bg-slate-800 text-white border-slate-800'
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                                        }`}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Row 3: Input & Action */}
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                    <div className="flex-grow relative">
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe finishing touches..."
                            onKeyDown={(e) => e.key === 'Enter' && generateDesign()}
                            className="w-full h-full min-h-[50px] md:min-h-[56px] pl-5 pr-12 rounded-xl border border-slate-200 bg-[#FCFCFD] focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none transition-all placeholder:text-slate-400 text-sm md:text-base"
                        />
                        <ImageIcon className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:text-slate-600 transition-colors" />
                    </div>

                    <button
                        onClick={generateDesign}
                        disabled={isLoading}
                        className="bg-[#FF4D80] hover:bg-[#F23D70] disabled:bg-[#ffb0c7] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-pink-200 transition-all active:scale-95 flex items-center justify-center gap-2 min-w-[160px]"
                    >
                        {isLoading ? (
                            <RefreshCwIcon className="w-5 h-5 animate-spin" />
                        ) : (
                            <SparklesIcon className="w-5 h-5" />
                        )}
                        {isLoading ? 'Generating' : 'Generate'}
                    </button>
                </div>
                {error && <p className="mt-4 text-center text-red-500 text-sm">{error}</p>}
            </div>

            {/* Preview Card */}
            <div id="cake-preview-card" className="bg-white rounded-3xl p-4 min-h-[400px] md:min-h-[500px] flex items-center justify-center border border-slate-100 shadow-xl relative overflow-hidden">
                {generatedImage ? (
                    <div className="relative w-full h-full flex flex-col items-center animate-in zoom-in-95 duration-500">
                        <img src={generatedImage} alt="AI Cake Design" className="rounded-xl shadow-lg max-h-[600px] w-auto object-contain" />
                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={generateDesign}
                                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-colors flex items-center gap-2"
                            >
                                <RefreshCwIcon className="w-4 h-4" /> Regenerate
                            </button>
                            <a
                                href={generatedImage}
                                download="my-dream-cake.png"
                                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-colors flex items-center gap-2 shadow-lg"
                            >
                                <DownloadIcon className="w-4 h-4" /> Download
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="text-center max-w-md mx-auto py-10 md:py-20 px-4">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 animate-pulse-slow">
                            <WeddingCakeIcon className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-slate-800 mb-3 md:mb-4">Ready to Design</h3>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                            Select your options from the control deck above, then click <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold px-1.5 py-0.5 rounded mx-1 align-middle tracking-wider">GENERATE</span> to help visualize your idea.
                        </p>
                    </div>
                )}
            </div>

        </section>
    );
};
