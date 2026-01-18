import React, { useState, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { CakePricingIcon, ClipboardIcon, CheckCircleIcon, InfoIcon } from '../Icons';

interface DessertCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const eventTypeFactors = {
    'dessert-only': 2.5,
    'dinner-party': 1.5,
    'cocktail-party': 2.0,
    'kids-party': 1.2,
};

const richnessFactors = {
    'light': 1.2,
    'medium': 1.0,
    'rich': 0.8,
};

const SelectField: React.FC<{ id: string, label: string, value: string, onChange: (val: string) => void, options: { value: string, label: string }[] }> = ({ id, label, value, onChange, options }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-bold text-brand-text-title mb-2">{label}</label>
        <select id={id} value={value} onChange={e => onChange(e.target.value)} className="w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200">
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
    </div>
);

export const DessertCalculator: React.FC<DessertCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [guests, setGuests] = useState('20');
    const [eventType, setEventType] = useState('dinner-party');
    const [richness, setRichness] = useState('medium');
    const [copied, setCopied] = useState(false);

    const totalServings = useMemo(() => {
        const numGuests = parseInt(guests) || 0;
        const eventFactor = eventTypeFactors[eventType as keyof typeof eventTypeFactors];
        const richnessFactor = richnessFactors[richness as keyof typeof richnessFactors];

        const calculatedServings = numGuests * eventFactor * richnessFactor;
        return Math.ceil(calculatedServings);

    }, [guests, eventType, richness]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(totalServings.toString());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };


    return (
        <ToolContainer
            title="Free Dessert Calculator for a Party"
            description="How much dessert do you need for a party? Our free party dessert planning calculator helps you estimate the total servings you'll need based on guests and event type."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="dessert-calculator"
        >
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="numGuests" className="block text-sm font-bold text-brand-text-title mb-2">Number of Guests</label>
                        <input
                            id="numGuests"
                            type="number"
                            value={guests}
                            onChange={e => setGuests(e.target.value)}
                            className="w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200"
                        />
                    </div>
                    <SelectField
                        id="eventType"
                        label="Type of Event"
                        value={eventType}
                        onChange={setEventType}
                        options={[
                            { value: 'dinner-party', label: 'Dinner Party (guests are likely full)' },
                            { value: 'dessert-only', label: 'Dessert-Only Party (guests expect more)' },
                            { value: 'cocktail-party', label: 'Cocktail Party (bite-sized portions)' },
                            { value: 'kids-party', label: 'Kids\' Party (smaller portions)' },
                        ]}
                    />
                    <SelectField
                        id="richness"
                        label="Dessert Richness"
                        value={richness}
                        onChange={setRichness}
                        options={[
                            { value: 'light', label: 'Light (e.g., fruit salad, angel food cake)' },
                            { value: 'medium', label: 'Medium (e.g., cookies, standard cake)' },
                            { value: 'rich', label: 'Rich (e.g., cheesecake, chocolate torte)' },
                        ]}
                    />
                </div>
                <div className="bg-brand-pink-light p-8 rounded-lg text-center">
                    <div className="inline-block bg-white text-brand-pink p-4 rounded-full mb-4 shadow-sm">
                        <CakePricingIcon className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-text-title">Recommended Total Servings</h3>
                    <div className="flex items-center justify-center gap-2">
                        <p className="font-serif font-bold text-7xl text-brand-pink my-4">{totalServings}</p>
                        <button onClick={handleCopy} title="Copy servings" className="p-1">
                            {copied ? <CheckCircleIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-brand-text-body/50 hover:text-brand-pink" />}
                        </button>
                    </div>
                    <p className="text-sm text-brand-text-body/80 max-w-xs mx-auto">
                        For <strong>{guests} guests</strong> at a <strong>{eventType.replace('-', ' ')}</strong> with <strong>{richness}</strong> desserts, we recommend planning for this many total servings.
                    </p>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-border">
                <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">Pro Tips for Party Desserts</h3>
                <ul className="list-disc pl-5 text-brand-text-body/90 leading-relaxed space-y-2">
                    <li><strong>Offer Variety:</strong> For larger crowds, consider offering 2-3 different types of desserts. This accounts for different tastes and dietary preferences. For example, one chocolate option, one fruit option, and one gluten-free option.</li>
                    <li><strong>Bite-Sized is Better:</strong> For cocktail parties or events where guests are mingling, smaller, easy-to-eat desserts like mini cupcakes, cookies, or brownies are a great choice. Plan for guests to have 2-3 small items each.</li>
                    <li><strong>Consider the Weather:</strong> On a hot day, lighter desserts like fruit tarts or mousse will be more popular than a heavy chocolate cake.</li>
                    <li><strong>Always Make a Little Extra:</strong> It's better to have a few leftovers than to run out. The calculator provides a good baseline, but adding a 10-15% buffer is always a safe bet for your party dessert planning.</li>
                </ul>
            </div>

            <DessertCalculatorContent />
        </ToolContainer>
    );
};

const DessertCalculatorContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use the Dessert Calculator
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Enter Guest Count:</strong> Input the total number of people attending the event.</li>
                <li><strong>Select Event Type:</strong> Choose the scenario that best matches your party (e.g., "Dinner Party" implies guests are already full).</li>
                <li><strong>Choose Richness:</strong> Indicate how heavy the desserts are. Richer desserts (like cheesecake) mean people eat less.</li>
                <li><strong>Get Estimate:</strong> The tool calculates the total number of individual servings you should prepare.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What counts as one serving?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        One serving equals 1 cupcake, 1 slice of cake, 2 small cookies, or 1 brownie. For mini desserts, count 2-3 minis as one standard serving.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What about wedding cakes?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Wedding cake servings are standard (1 slice per guest). However, if you have a dessert table <i>in addition</i> to the cake, plan for 2-3 extra bites per person.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Should I add a buffer?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes! We recommend adding 10-15% to your final count to account for dropped plates or extra-hungry guests.
                    </p>
                </details>
            </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Perfect Party Dessert Planning</h3>
            <p className="text-sm text-brand-text-body/80 leading-relaxed mb-4">
                Planning a <strong>dessert table</strong> can be tricky. You don't want to run out, but you also don't want to be left with 50 cupcakes. Our <strong>dessert quantity calculator</strong> takes the guesswork out of the equation.
            </p>
            <p className="text-sm text-brand-text-body/80 leading-relaxed">
                Whether you're hosting a <strong>wedding reception</strong>, a casual <strong>birthday party</strong>, or a formal dinner, this tool helps you determine the exact <strong>party dessert servings</strong> needed. By factoring in the type of event and the richness of the treats, you can ensure every guest leaves satisfied.
            </p>
        </div>
    </div>
);
