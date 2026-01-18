import React, { useState, useEffect } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import {
    PaletteIcon,
    MyArtIcon,
    DownloadIcon,
    RefreshCwIcon,
    AlertTriangleIcon,
    CheckCircleIcon,
    HeartIcon,
    StarIcon,
    WeddingCakeIcon,
    GiftIcon,
    SearchIcon,
    FilterIcon,
    SparklesIcon
} from '../Icons';

interface CakeDesignCreatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface SavedDesign {
    id: string;
    image: string;
    description: string;
    date: number;
    occasion: string;
}

export const CakeDesignCreator: React.FC<CakeDesignCreatorProps> = ({ setActiveTool, breadcrumbs }) => {
    // State
    const [description, setDescription] = useState('');
    const [theme, setTheme] = useState('Elegant');
    const [shape, setShape] = useState('Round');
    const [tiers, setTiers] = useState('2 Tiers');
    const [occasion, setOccasion] = useState('Birthday');
    const [mood, setMood] = useState('Dreamy');
    const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>(['#FFC0CB']);
    const [referenceImage, setReferenceImage] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<SavedDesign[]>([]);

    // Init history
    useEffect(() => {
        const saved = localStorage.getItem('cakeDesignHistory');
        if (saved) {
            try {
                setHistory(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load history", e);
            }
        }
    }, []);

    const saveToHistory = (newDesign: SavedDesign) => {
        const updated = [newDesign, ...history].slice(0, 10);
        setHistory(updated);
        localStorage.setItem('cakeDesignHistory', JSON.stringify(updated));
    };

    // Constants
    const OCCASIONS = [
        { id: 'Birthday', label: 'Birthday', icon: '🎂' },
        { id: 'Wedding', label: 'Wedding', icon: '💒' },
        { id: 'Anniversary', label: 'Anniversary', icon: '💝' },
        { id: 'Baby Shower', label: 'Baby Shower', icon: '👶' },
        { id: 'Holiday', label: 'Holiday', icon: '🎄' },
        { id: 'Just Because', label: 'Just Because', icon: '✨' },
    ];

    const THEMES = ['Elegant', 'Whimsical', 'Rustic', 'Modern', 'Minimalist', 'Art Deco', 'Vintage', 'Floral'];

    // CSS-based Shape Visuals
    const ShapeVisual = ({ type, selected }: { type: string, selected: boolean }) => {
        const baseClass = `w-6 h-6 transition-all duration-300 ${selected ? 'scale-110' : 'opacity-50'}`;
        const color = selected ? 'currentColor' : '#94a3b8';

        switch (type) {
            case 'Round': return <div className={`rounded-full border-2 ${baseClass}`} style={{ borderColor: color }} />;
            case 'Square': return <div className={`rounded-md border-2 ${baseClass}`} style={{ borderColor: color }} />;
            case 'Heart': return <HeartIcon className={baseClass} style={{ color }} />;
            case 'Tiered': return <WeddingCakeIcon className={baseClass} style={{ color }} />;
            case 'Sheet': return <div className={`rounded-sm border-2 w-6 h-4 mt-1 ${baseClass}`} style={{ borderColor: color }} />;
            case 'Sculpted': return <StarIcon className={baseClass} style={{ color }} />;
            default: return <div className={`rounded-full border-2 ${baseClass}`} style={{ borderColor: color }} />;
        }
    };

    const DECORATIONS = [
        'Fresh Flowers', 'Gold Leaf', 'Drip Effect', 'Macarons', 'Sprinkles',
        'Fresh Fruit', 'Chocolate Shards', 'Sugar Flowers', 'Edible Lace', 'Topper'
    ];

    const PALETTES = [
        { name: 'Classic Pink', colors: ['#FFC0CB', '#FFFFFF', '#D4AF37'] },
        { name: 'Royal', colors: ['#4B0082', '#FFD700', '#FFFFFF'] },
        { name: 'Forest', colors: ['#228B22', '#8B4513', '#F5DEB3'] },
        { name: 'Ocean', colors: ['#00BFFF', '#E0FFFF', '#FFFFFF'] },
        { name: 'Chic', colors: ['#000000', '#FFFFFF', '#C0C0C0'] },
    ];

    const handleColorChange = (index: number, value: string) => {
        const newColors = [...colors];
        newColors[index] = value;
        setColors(newColors);
    };

    const addColor = () => { if (colors.length < 5) setColors([...colors, '#ffffff']); };
    const removeColor = (index: number) => { if (colors.length > 1) setColors(colors.filter((_, i) => i !== index)); };

    const toggleDecoration = (decor: string) => {
        if (selectedDecorations.includes(decor)) setSelectedDecorations(selectedDecorations.filter(d => d !== decor));
        else setSelectedDecorations([...selectedDecorations, decor]);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setReferenceImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const generateDesign = async () => {
        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const decorString = selectedDecorations.length > 0 ? `, decorated with ${selectedDecorations.join(', ')}` : '';
            const richDescription = `A ${mood.toLowerCase()}, ${theme.toLowerCase()} ${occasion} cake. ${shape} shape, ${tiers}. Main colors: ${colors.join(', ')}${decorString}. ${description}. 8k resolution, food photography, cinematic lighting.`;

            const WORKER_URL = process.env.NEXT_PUBLIC_CAKE_DESIGN_URL;

            if (!WORKER_URL) {
                // For demo purposes, we simulate if no backend is connected
                await new Promise(resolve => setTimeout(resolve, 2000));
                setError('Configuration Missing: Please deploy the Cloudflare Worker and add the URL to your .env file.');
                setIsLoading(false);
                return;
            }

            const response = await fetch(WORKER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: richDescription, style: theme, shape, colors })
            });

            if (!response.ok) throw new Error('Failed to generate image');
            const data = await response.json();

            setGeneratedImage(data.image);
            saveToHistory({
                id: Date.now().toString(),
                image: data.image,
                description: richDescription,
                date: Date.now(),
                occasion
            });

            // Scroll to image
            setTimeout(() => {
                const element = document.getElementById('generated-result');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);

        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const loadDesignFromHistory = (item: SavedDesign) => {
        setGeneratedImage(item.image);
        setDescription(item.description);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ToolContainer
            title=""
            description=""
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="cake-design-creator"
        >
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 -m-6 p-4 md:p-8 font-sans text-slate-800">
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Header - More Attractive */}
                    <div className="text-center space-y-4 py-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
                            <SparklesIcon className="w-5 h-5 text-brand-pink" />
                            <span className="text-sm font-bold text-brand-pink tracking-wide">AI-POWERED DESIGN</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-brand-pink via-purple-500 to-pink-600 bg-clip-text text-transparent leading-tight">
                            Cake Design Studio
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Craft your confectionery masterpiece with AI-powered visualization</p>
                    </div>

                    {/* TOP CONTROLS DECK - Redesigned */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl shadow-pink-200/30 border border-white/50 relative overflow-hidden">
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"></div>

                        {/* 1. Occasion & Style Row */}
                        <div className="flex flex-col lg:flex-row gap-6 mb-8 pb-8 border-b border-slate-100">
                            <div className="flex-1 space-y-4">
                                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                                    Occasion
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {OCCASIONS.map(occ => (
                                        <button
                                            key={occ.id}
                                            onClick={() => setOccasion(occ.id)}
                                            className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${occasion === occ.id
                                                ? 'bg-gradient-to-r from-brand-pink to-pink-600 text-white shadow-lg shadow-pink-200 transform scale-105'
                                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:scale-105'
                                                }`}
                                        >
                                            <span>{occ.icon}</span>
                                            {occ.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 space-y-4">
                                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    Vibe
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <select
                                        value={theme}
                                        onChange={(e) => setTheme(e.target.value)}
                                        className="w-full bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl text-sm font-bold focus:border-brand-pink focus:ring-2 focus:ring-pink-200 py-3 px-4 transition-all"
                                    >
                                        {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                    <select
                                        value={mood}
                                        onChange={(e) => setMood(e.target.value)}
                                        className="w-full bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl text-sm font-bold focus:border-purple-500 focus:ring-2 focus:ring-purple-200 py-3 px-4 transition-all"
                                    >
                                        <option value="Dreamy">Dreamy</option>
                                        <option value="Dark & Moody">Dark & Moody</option>
                                        <option value="Vibrant">Vibrant</option>
                                        <option value="Pastel">Pastel</option>
                                        <option value="Luxurious">Luxurious</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 2. Specs Grid - Enhanced */}
                        <div className="grid md:grid-cols-3 gap-8 mb-8">

                            {/* Shape & Tier */}
                            <div className="space-y-4">
                                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Structure
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {['Round', 'Square', 'Heart', 'Tiered'].map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setShape(s)}
                                            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${shape === s
                                                ? 'bg-gradient-to-br from-pink-100 to-purple-100 text-brand-pink ring-4 ring-pink-200 shadow-lg'
                                                : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:scale-110'
                                                }`}
                                            title={s}
                                        >
                                            <ShapeVisual type={s} selected={shape === s} />
                                        </button>
                                    ))}
                                </div>
                                <select
                                    value={tiers}
                                    onChange={e => setTiers(e.target.value)}
                                    className="w-full bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl text-sm font-bold py-3 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                >
                                    {['1 Tier', '2 Tiers', '3 Tiers', 'Tower'].map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>

                            {/* Colors - Enhanced */}
                            <div className="space-y-4">
                                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                    Palette
                                </label>
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {PALETTES.map((p, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setColors([...p.colors])}
                                            className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-slate-200 hover:scale-110 hover:shadow-lg transition-all flex-shrink-0"
                                            title={p.name}
                                        >
                                            <div className="flex h-full w-full">
                                                {p.colors.map(c => <div key={c} style={{ backgroundColor: c }} className="flex-1 h-full" />)}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 flex-wrap">
                                    {colors.map((color, idx) => (
                                        <input
                                            key={idx}
                                            type="color"
                                            value={color}
                                            onChange={e => handleColorChange(idx, e.target.value)}
                                            className="w-12 h-12 rounded-2xl border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                                        />
                                    ))}
                                    {colors.length < 5 && (
                                        <button onClick={addColor} className="w-12 h-12 rounded-2xl border-2 border-dashed border-slate-300 text-slate-400 hover:border-brand-pink hover:text-brand-pink hover:scale-110 transition-all font-bold text-xl">+</button>
                                    )}
                                </div>
                            </div>

                            {/* Details & Decorations - Enhanced */}
                            <div className="space-y-4">
                                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Details
                                </label>
                                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                    {DECORATIONS.map(decor => (
                                        <button
                                            key={decor}
                                            onClick={() => toggleDecoration(decor)}
                                            className={`px-3 py-2 rounded-xl text-xs font-bold border-2 transition-all duration-300 ${selectedDecorations.includes(decor)
                                                ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white border-slate-800 shadow-lg scale-105'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:scale-105'
                                                }`}
                                        >
                                            {decor}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3. Prompt Bar - Redesigned */}
                        <div className="flex flex-col md:flex-row gap-4 bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-2xl border-2 border-pink-100">
                            <div className="flex-1 flex items-center bg-white rounded-xl px-4 border-2 border-transparent focus-within:border-brand-pink focus-within:shadow-lg transition-all">
                                <input
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Describe finishing touches... (e.g. 'Add fresh strawberries')"
                                    className="w-full bg-transparent border-none focus:ring-0 text-sm py-4 placeholder:text-slate-400"
                                />
                                <label className="cursor-pointer text-slate-400 hover:text-brand-pink transition-colors p-2" title="Upload Reference">
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                    {referenceImage ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <MyArtIcon className="w-6 h-6" />}
                                </label>
                            </div>
                            <button
                                onClick={generateDesign}
                                disabled={isLoading}
                                className={`px-10 py-4 rounded-xl font-bold text-white shadow-xl flex items-center justify-center gap-3 whitespace-nowrap transition-all duration-300 ${isLoading
                                    ? 'bg-slate-300 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-brand-pink via-pink-500 to-purple-500 hover:shadow-2xl hover:shadow-pink-300 hover:scale-105 active:scale-95'
                                    }`}
                            >
                                {isLoading ? <RefreshCwIcon className="w-6 h-6 animate-spin" /> : <SparklesIcon className="w-6 h-6" />}
                                <span className="text-base">{isLoading ? 'Baking...' : 'Generate'}</span>
                            </button>
                        </div>

                    </div>

                    {/* CANVAS (Below) - Enhanced */}
                    <div id="generated-result" className="min-h-[600px] bg-gradient-to-br from-white to-pink-50/30 rounded-[2.5rem] border-2 border-white shadow-2xl shadow-purple-200/50 flex items-center justify-center relative overflow-hidden group">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #E65A88 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                        {generatedImage ? (
                            <div className="relative w-full h-full flex flex-col items-center justify-center py-12 animate-in zoom-in-95 duration-700">
                                <img src={generatedImage} alt="Design" className="max-h-[500px] w-auto object-contain drop-shadow-2xl rounded-2xl" />

                                <div className="absolute bottom-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <a href={generatedImage} download="cake.png" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 hover:bg-slate-50 hover:scale-105 transition-all">
                                        <DownloadIcon className="w-5 h-5" /> Download
                                    </a>
                                </div>

                                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-lg px-6 py-3 rounded-2xl text-sm border-2 border-pink-100 shadow-lg">
                                    <span className="font-bold text-slate-800">{occasion} Cake</span>
                                    <span className="mx-3 text-slate-300">•</span>
                                    <span className="text-slate-600">{theme} Style</span>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center max-w-lg mx-auto p-6 md:p-0">
                                <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-dashed border-pink-300 animate-in fade-in zoom-in duration-500">
                                    <WeddingCakeIcon className="w-16 h-16 text-brand-pink" />
                                </div>
                                <h3 className="font-serif text-4xl bg-gradient-to-r from-brand-pink to-purple-600 bg-clip-text text-transparent mb-4">Ready to Design</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Select your options from the control deck above, <br className="hidden md:block" />then click
                                    <span className="inline-block px-3 py-1 mx-2 bg-gradient-to-r from-brand-pink to-purple-500 text-white rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg">Generate</span>
                                    to visualize your dream cake.
                                </p>
                            </div>
                        )}

                        {error && (
                            <div className="absolute bottom-8 bg-red-50 text-red-600 px-8 py-4 rounded-2xl border-2 border-red-200 flex items-center gap-3 shadow-xl">
                                <AlertTriangleIcon className="w-6 h-6" /> {error}
                            </div>
                        )}
                    </div>

                    {/* HISTORY (Bottom) - Enhanced */}
                    {history.length > 0 && (
                        <div className="pt-8 pb-4">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 px-2 flex items-center gap-2">
                                <span className="w-3 h-3 bg-gradient-to-r from-brand-pink to-purple-500 rounded-full"></span>
                                Design History
                            </h4>
                            <div className="flex gap-4 overflow-x-auto pb-4 px-2">
                                {history.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => loadDesignFromHistory(item)}
                                        className="flex-shrink-0 w-32 h-32 rounded-3xl overflow-hidden cursor-pointer border-4 border-white hover:border-brand-pink transition-all shadow-lg hover:shadow-2xl hover:scale-110 bg-white"
                                    >
                                        <img src={item.image} className="w-full h-full object-cover" alt="Saved" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </ToolContainer>
    );
};
