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
            <div className="mt-8 pt-6 border-t border-brand-border">
                <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">The Key to Perfect Macarons: Practice & Precision</h3>
                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <p>
                        Macarons are notoriously fickle, and even experienced bakers have off days. Don't be discouraged! The most common issues stem from three key areas: ingredient measurement, the meringue, and the "macaronage" (the process of folding the dry ingredients into the meringue).
                    </p>
                    <ul className="list-disc pl-5">
                        <li><strong>Use a Kitchen Scale:</strong> This is non-negotiable for macarons. Volume measurements (cups) are too inaccurate. Use our <a href={toolIdToSlug('measurement-converter')} onClick={(e) => { e.preventDefault(); setActiveTool('measurement-converter'); }} className="font-bold text-brand-pink hover:underline">Measurement Converter</a> to convert recipes to grams.</li>
                        <li><strong>Master Your Meringue:</strong> Whether you're using the French, Italian, or Swiss method, your meringue must be whipped to stiff, glossy peaks. If it's too soft, your macarons will spread. If it's too dry, they might crack.</li>
                        <li><strong>The "Lava" Stage:</strong> The macaronage is the most critical step. You must fold the batter until it flows off the spatula in a slow, continuous ribbon, like lava. Under-mixed batter will be too stiff and lead to lopsided shells. Over-mixed batter will be too runny and lead to flat shells with no feet.</li>
                    </ul>
                </div>
            </div>
        </ToolContainer>
    );
};
