import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ChevronRightIcon, CrackedShellIcon, HollowShellIcon, LopsidedIcon, NoFeetIcon, StickingIcon, WrinkledIcon } from '../Icons';
import { toolIdToSlug } from '../utils/slugs';

interface MacaronTroubleshootingProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface MacaronProblem {
    id: string;
    title: string;
    icon: React.ReactNode;
    causes: string[];
    solutions: string[];
}

const problemsData: MacaronProblem[] = [
    {
        id: 'cracked',
        title: 'Cracked Shells',
        icon: <CrackedShellIcon className="w-10 h-10 text-red-500" />,
        causes: [
            'Batter was overmixed, deflating too much air.',
            'Oven temperature is too high.',
            'Shells did not rest long enough to form a skin.',
            'Too much food coloring was added.',
        ],
        solutions: [
            'Stop mixing when batter flows like a slow ribbon ("lava stage").',
            'Use an oven thermometer to verify your oven\'s actual temperature.',
            'Let shells rest until they are dry to the touch before baking (30-60 mins).',
            'Use gel or powdered food coloring, not liquid.',
        ],
    },
    {
        id: 'no-feet',
        title: 'No "Feet"',
        icon: <NoFeetIcon className="w-10 h-10 text-yellow-600" />,
        causes: [
            'Batter was undermixed.',
            'Shells rested for too long or in a very humid environment.',
            'Oven temperature is too low.',
            'Ingredients were not measured accurately by weight.',
        ],
        solutions: [
            'Ensure batter reaches the "lava stage" before piping.',
            'Rest only until a skin forms. Use a dehumidifier if your kitchen is humid.',
            'Check your oven temperature. A burst of heat is needed to create feet.',
            'Always use a kitchen scale for macarons for precise ratios.',
        ],
    },
    {
        id: 'hollow',
        title: 'Hollow Shells',
        icon: <HollowShellIcon className="w-10 h-10 text-blue-500" />,
        causes: [
            'Meringue was over-whipped or under-whipped.',
            'Oven temperature is too high, causing them to rise and fall too quickly.',
            'Batter was overmixed.',
            'Shells are under-baked.',
        ],
        solutions: [
            'Whip meringue to stiff, glossy peaks, but not dry or chunky.',
            'Lower your oven temperature slightly and bake for a minute or two longer.',
            'Be careful not to deflate too much air during the macaronage stage.',
            'Ensure the inside is fully baked before removing from the oven. They should feel firm.',
        ],
    },
    {
        id: 'lopsided',
        title: 'Lopsided / Uneven',
        icon: <LopsidedIcon className="w-10 h-10 text-purple-500" />,
        causes: [
            'Piping technique was not straight down.',
            'Baking sheet is warped.',
            'Oven has hot spots or uneven airflow.',
            'Batter was undermixed.',
        ],
        solutions: [
            'Hold the piping bag perfectly vertical and pipe in one spot, letting the batter spread.',
            'Use heavy, flat aluminum baking sheets.',
            'Rotate your baking sheets halfway through the baking time.',
            'An undermixed batter is too stiff and won\'t settle evenly.',
        ],
    },
    {
        id: 'wrinkled',
        title: 'Wrinkled Tops',
        icon: <WrinkledIcon className="w-10 h-10 text-orange-500" />,
        causes: [
            'Too much moisture in the batter (oily almond flour, liquid coloring).',
            'High humidity in the kitchen.',
            'Oven temperature is too low.',
        ],
        solutions: [
            'Use high-quality, fine almond flour. Use gel or powder color.',
            'Avoid making macarons on rainy or humid days. Consider a dehumidifier.',
            'Verify oven temperature. The shell needs to set quickly.',
        ],
    },
    {
        id: 'sticking',
        title: 'Sticking to Mat',
        icon: <StickingIcon className="w-10 h-10 text-gray-500" />,
        causes: [
            'Shells are under-baked.',
            'Shells have not cooled completely before removal.',
        ],
        solutions: [
            'Add 1-2 minutes to your baking time. The macaron should peel off cleanly.',
            'Let the macarons cool completely on the baking sheet before attempting to remove them.',
        ],
    },
    {
        id: 'browned',
        title: 'Browned / Discolored Tops',
        icon: <div className="w-10 h-10 rounded-full bg-amber-700/20 flex items-center justify-center text-amber-800 font-bold text-xl">!</div>,
        causes: [
            'Oven temperature is too high.',
            'Baking rack is too high in the oven.',
            'Baking time is too long.',
        ],
        solutions: [
            'Lower oven temperature by 10-15°F.',
            'Move the rack to the lower third of the oven.',
            'Place an empty baking sheet on the rack above to shield them from direct heat.',
        ],
    },
    {
        id: 'spreading-feet',
        title: 'Feet Spreading Outwards',
        icon: <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">↔</div>,
        causes: [
            'Oven temperature is too high.',
            'Batter was overmixed.',
        ],
        solutions: [
            'Lower oven temperature. High heat causes the meringue to expand too fast.',
            'Stop folding sooner. The batter should flow slowly, not run quickly.',
        ],
    },
];
const ProblemItem: React.FC<{
    problem: MacaronProblem;
    isSelected: boolean;
    onSelect: () => void;
}> = ({ problem, isSelected, onSelect }) => (
    <div className="fade-in">
        <button
            onClick={onSelect}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${isSelected ? 'bg-brand-pink-light border-brand-pink' : 'bg-white border-brand-border hover:border-brand-pink/50'}`}
        >
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {problem.icon}
                </div>
                <div>
                    <h3 className="font-bold text-brand-text-title">{problem.title}</h3>
                </div>
                <ChevronRightIcon className={`w-6 h-6 text-brand-pink ml-auto flex-shrink-0 transition-transform duration-300 ${isSelected ? 'transform rotate-90' : ''}`} />
            </div>
        </button>
        {isSelected && (
            <div className="mt-2 p-4 bg-white rounded-lg border border-brand-border/50 fade-in">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-brand-text-title mb-2">Possible Causes</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-brand-text-body/90">
                            {problem.causes.map((cause, i) => <li key={i}>{cause}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-700 mb-2">Solutions</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-brand-text-body/90">
                            {problem.solutions.map((solution, i) => <li key={i}>{solution}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </div>
);


export const MacaronTroubleshooting: React.FC<MacaronTroubleshootingProps> = ({ setActiveTool, breadcrumbs }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <ToolContainer
            title="Free Macaron Troubleshooting Guide"
            description="Solve common macaron problems like cracked shells, no feet, and hollows. Our free visual guide helps you diagnose and fix your macaronage for perfect results."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="macaron-troubleshooting"
        >
            <div className="max-w-3xl mx-auto space-y-3">
                {problemsData.map(problem => (
                    <ProblemItem
                        key={problem.id}
                        problem={problem}
                        isSelected={selectedId === problem.id}
                        onSelect={() => setSelectedId(selectedId === problem.id ? null : problem.id)}
                    />
                ))}
            </div>
            <div className="mt-12 space-y-12 pt-8 border-t border-brand-border">
                {/* SEO Content */}
                <div className="prose prose-pink max-w-none">
                    <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-4">The Ultimate Macaron Troubleshooting Guide</h2>
                    <p className="text-lg text-brand-text-body/80 leading-relaxed">
                        French Macarons are notorious for being the most finicky cookie in the world. Even professional pastry chefs have days where shells crack, feet spread, or tops turn lopsided. This <strong>visual troubleshooting guide</strong> is designed to help you diagnose exactly what went wrong with your batch so you can fix it next time. Whether it's <strong>hollow shells</strong>, <strong>no feet</strong>, or <strong>wrinkled tops</strong>, the culprit is usually found in one of three areas: the Meringue, the Macaronage, or the Oven.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-pink text-white font-bold text-sm">1</span>
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">The Meringue</h3>
                        </div>
                        <div className="space-y-3 text-sm text-brand-text-body/80">
                            <p><strong>French vs. Italian:</strong> French meringue is easier but less stable. Italian meringue involves hot sugar syrup and creates a sturdier shell that is less prone to cracking.</p>
                            <p><strong>Stiff Peaks:</strong> Your meringue must stand up straight without drooping. If the peaks curl over (soft peaks), your batter will be runny and shells will spread.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-pink text-white font-bold text-sm">2</span>
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">The Macaronage</h3>
                        </div>
                        <div className="space-y-3 text-sm text-brand-text-body/80">
                            <p><strong>Lava Consistency:</strong> You must fold the batter until it flows like molten lava. It should flow off the spatula in a slow, continuous ribbon that can form a 'figure 8'.</p>
                            <p><strong>Stop!:</strong> The moment you can make a figure 8, stop folding. One extra fold can ruin the batch.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-pink text-white font-bold text-sm">3</span>
                            <h3 className="font-serif font-bold text-xl text-brand-text-title">The Oven</h3>
                        </div>
                        <div className="space-y-3 text-sm text-brand-text-body/80">
                            <p><strong>True Temp:</strong> Oven dials are often lies. Use an external oven thermometer to ensure you are baking at exactly 300°F (150°C).</p>
                            <p><strong>Hot Spots:</strong> Macarons hate uneven heat. Bake one tray at a time in the center rack. Flip the tray halfway through if your oven bakes unevenly.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-brand-pink-light/30 p-6 md:p-8 rounded-3xl border border-brand-pink/20 text-center">
                    <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-4">Need to convert your recipe?</h3>
                    <p className="text-brand-text-body/80 mb-6 max-w-2xl mx-auto">
                        Macarons require precision. Cups and tablespoons are not accurate enough. Always weigh your ingredients in grams.
                    </p>
                    <button
                        onClick={() => setActiveTool('measurement-converter')}
                        className="inline-flex items-center justify-center px-6 py-3 bg-brand-pink text-white font-bold rounded-xl hover:bg-brand-pink-dark transition-colors shadow-lg shadow-brand-pink/20"
                    >
                        Open Grams Converter
                    </button>
                </div>
            </div>
        </ToolContainer>
    );
};
