"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ToolId, toolIdToSlug } from './utils/slugs';
import { AdUnit } from './AdUnit';
import {
    HomeIcon, AboutIcon, SimpleCalcIcon, ConverterIcon, ManagementIcon, MyKitchenIcon, ResourcesIcon,
    ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, CakePricingIcon, RecipeScalerIcon, PercentIcon, MeasurementIcon,
    SweetenerIcon, ProteinIcon, BakingPanIcon, YeastIcon, ThermometerIcon, DocumentIcon, ClipboardIcon,
    CalendarIcon, ChecklistIcon, BookOpenIcon, TargetIcon, YoutubeIcon, MusicIcon, AlertTriangleIcon, IngredientSwapIcon,
    AllergenGuideIcon,
    ClockIcon, ShoppingCartIcon, GlossaryIcon, ButterIcon,
    GiftIcon,
    HeartPulseIcon,
    ScaleIcon,
    BodyIcon,
    FlameIcon,
    HealthyIcon,
    RunningIcon,
    PrintIcon,
    BirthdayCakeIcon,
    CalendarPlusIcon,
    StopwatchIcon,
    MortgageIcon,
    SearchIcon,
    PaletteIcon,
    CocktailIcon,
    VolumeIcon,
    WeightIcon,
    DollarSignIcon,
    WaterDropIcon,
    BoxIcon,
    RecipeCostIcon,
    PastryBagIcon,
    FlavorWheelIcon,
    MyArtIcon,
    MacaronIcon,
    ToolboxIcon,
    MenuIcon,
    MapPinIcon,
    XIcon
} from './Icons';

// ... navConfig remains the same ...
export const navConfig = [
    {
        id: 'core',
        title: 'Core Calculators',
        icon: <SimpleCalcIcon className="w-6 h-6" />,
        tools: [
            { id: 'cake-pricing', title: 'Free Cake Pricing', icon: <CakePricingIcon className="w-5 h-5" /> },
            { id: 'recipe-scaling-costing', title: 'Recipe Scaling & Costing', icon: <RecipeScalerIcon className="w-5 h-5" /> },
            { id: 'cake-design-creator', title: 'AI Cake Design Creator', icon: <PaletteIcon className="w-5 h-5" /> },
            { id: 'cost-per-recipe', title: 'Free Cost Per Recipe', icon: <RecipeCostIcon className="w-5 h-5" /> },
            { id: 'recipe-scaler', title: 'Free Recipe Scaler', icon: <RecipeScalerIcon className="w-5 h-5" /> },
            { id: 'bakers-percentage', title: "Free Baker's Percentage", icon: <PercentIcon className="w-5 h-5" /> },
            { id: 'dough-hydration', title: 'Free Dough Hydration', icon: <WaterDropIcon className="w-5 h-5" /> },
            { id: 'ganache-calculator', title: 'Free Ganache Ratios', icon: <WaterDropIcon className="w-5 h-5" /> },
            { id: 'buttercream-calculator', title: 'Free Buttercream Quantity', icon: <PastryBagIcon className="w-5 h-5" /> },
            { id: 'fondant-calculator', title: 'Free Fondant Quantity', icon: <BirthdayCakeIcon className="w-5 h-5" /> },
            { id: 'dough-temperature', title: 'Dough Temperature (DDT)', icon: <ThermometerIcon className="w-5 h-5" /> },
            { id: 'measurement-converter', title: 'Free Measurement Converter', icon: <MeasurementIcon className="w-5 h-5" /> },
            { id: 'sweetener-converter', title: 'Free Sweetener Converter', icon: <SweetenerIcon className="w-5 h-5" /> },
            { id: 'protein-macro', title: 'Free Protein & Macro', icon: <ProteinIcon className="w-5 h-5" /> }
        ]
    },
    {
        id: 'converters',
        title: 'Baking Converters',
        icon: <ConverterIcon className="w-6 h-6" />,
        tools: [
            { id: 'baking-pan-converter', title: 'Free Baking Pan Converter', icon: <BakingPanIcon className="w-5 h-5" /> },
            { id: 'yeast-converter', title: 'Free Yeast Converter', icon: <YeastIcon className="w-5 h-5" /> },
            { id: 'butterfat-converter', title: 'Free Butterfat Converter', icon: <ButterIcon className="w-5 h-5" /> },
            { id: 'hydration-converter', title: 'Free Hydration Converter', icon: <WaterDropIcon className="w-5 h-5" /> },
            { id: 'temperature-converter', title: 'Free Temperature Converter', icon: <ThermometerIcon className="w-5 h-5" /> },
            { id: 'oven-temp-converter', title: 'Free Oven Temp Converter', icon: <ThermometerIcon className="w-5 h-5" /> },
        ]
    },
    {
        id: 'management',
        title: 'Bakery Management',
        icon: <ManagementIcon className="w-6 h-6" />,
        tools: [
            { id: 'management-dashboard', title: 'Free Dashboard', icon: <ManagementIcon className="w-5 h-5" /> },
            { id: 'order-management', title: 'Order Management', icon: <ClipboardIcon className="w-4 h-4" /> },
            { id: 'bakery-order-planner', title: 'Order Planner & Calendar', icon: <CalendarIcon className="w-4 h-4" /> },
            { id: 'label-generator', title: 'Label Generator', icon: <PrintIcon className="w-4 h-4" /> },
            { id: 'baker-schedule', title: "Baker's Todo List", icon: <ClockIcon className="w-4 h-4" /> },
            { id: 'shopping-list', title: 'Free Shopping List', icon: <ShoppingCartIcon className="w-5 h-5" /> },
            { id: 'dessert-calculator', title: 'Free Dessert Calculator', icon: <CakePricingIcon className="w-5 h-5" /> },
            { id: 'digital-notebook', title: 'Free Digital Notebook', icon: <DocumentIcon className="w-5 h-5" /> },
            { id: 'custom-cake-order-builder', title: 'Custom Cake Order Builder', icon: <BirthdayCakeIcon className="w-5 h-5" /> },
        ]
    },
    {
        id: 'utilities',
        title: 'Utility Tools',
        icon: <ToolboxIcon className="w-6 h-6" />,
        tools: [
            { id: 'simple-calculator', title: 'Free Simple Calculator', icon: <SimpleCalcIcon className="w-5 h-5" /> },
            { id: 'percentage-calculator', title: 'Free Percentage Calculator', icon: <PercentIcon className="w-5 h-5" /> },
            { id: 'volume-converter', title: 'Free Volume Converter', icon: <VolumeIcon className="w-5 h-5" /> },
            { id: 'weight-converter', title: 'Free Weight Converter', icon: <WeightIcon className="w-5 h-5" /> },
            { id: 'multiple-timer', title: 'Free Multiple Timers', icon: <ClockIcon className="w-5 h-5" /> },
            { id: 'stopwatch', title: 'Free Stopwatch', icon: <StopwatchIcon className="w-5 h-5" /> },
        ]
    },
    {
        id: 'kitchen',
        title: 'My Kitchen',
        icon: <MyKitchenIcon className="w-6 h-6" />,
        tools: [
            { id: 'recipe-box', title: 'My Recipe Box', icon: <ChecklistIcon className="w-5 h-5" /> },
        ]
    },
    {
        id: 'family',
        title: 'Life & Family',
        icon: <GiftIcon className="w-6 h-6" />,
        tools: [
            { id: 'pregnancy-calculator', title: 'Free Pregnancy Calculator', icon: <HeartPulseIcon className="w-5 h-5" /> },
            { id: 'calorie-calculator', title: 'Free Calorie Calculator', icon: <ScaleIcon className="w-5 h-5" /> },
            { id: 'weight-loss-calculator', title: 'Free Weight Loss Calculator', icon: <ScaleIcon className="w-5 h-5" /> },
            { id: 'body-fat-calculator', title: 'Free Body Fat Calculator', icon: <BodyIcon className="w-5 h-5" /> },
            { id: 'bmi-calculator', title: 'Free BMI Calculator', icon: <HealthyIcon className="w-5 h-5" /> },
            { id: 'bmr-calculator', title: 'Free BMR Calculator', icon: <FlameIcon className="w-5 h-5" /> },
            { id: 'ideal-weight-calculator', title: 'Free Ideal Weight Calculator', icon: <HealthyIcon className="w-5 h-5" /> },
            { id: 'pace-calculator', title: 'Free Pace Calculator', icon: <RunningIcon className="w-5 h-5" /> },
            { id: 'age-calculator', title: 'Free Age Calculator', icon: <BirthdayCakeIcon className="w-5 h-5" /> },
            { id: 'date-calculator', title: 'Free Date Calculator', icon: <CalendarPlusIcon className="w-5 h-5" /> },
            { id: 'time-calculator', title: 'Free Time Calculator', icon: <StopwatchIcon className="w-5 h-5" /> },
        ]
    },
    {
        id: 'financial',
        title: 'Financial Tools',
        icon: <DollarSignIcon className="w-6 h-6" />,
        tools: [
            { id: 'tip-calculator', title: 'Free Tip Calculator', icon: <DollarSignIcon className="w-5 h-5" /> },
            { id: 'investment-calculator', title: 'Free Investment Calculator', icon: <DollarSignIcon className="w-5 h-5" /> },
            { id: 'mortgage-affordability', title: 'Mortgage Affordability', icon: <MortgageIcon className="w-5 h-5" /> },
            { id: 'mortgage-payoff', title: 'Mortgage Payoff Calculator', icon: <MortgageIcon className="w-5 h-5" /> },
            { id: 'payment-calculator', title: 'Free Mortgage Calculator', icon: <MortgageIcon className="w-5 h-5" /> },
            { id: 'amortization-calculator', title: 'Free Amortization Calculator', icon: <MortgageIcon className="w-5 h-5" /> },
        ]
    },
    {
        id: 'resources',
        title: 'Resources',
        icon: <ResourcesIcon className="w-6 h-6" />,
        tools: [

            { id: 'allergen-guide', title: 'Free Baking Allergen Substitution Guide', icon: <AllergenGuideIcon className="w-5 h-5" /> },
            { id: 'ingredient-glossary', title: 'Free Ingredient Glossary', icon: <GlossaryIcon className="w-5 h-5" /> },
            { id: 'frosting-color-mixer', title: 'Free Frosting Color Mixer', icon: <PaletteIcon className="w-5 h-5" /> },
            { id: 'flavor-pairing-guide', title: 'Free Flavor Pairing Guide', icon: <FlavorWheelIcon className="w-5 h-5" /> },
            { id: 'ingredient-substitutions', title: 'Free Ingredient Substitutions', icon: <IngredientSwapIcon className="w-5 h-5" /> },
            { id: 'macaron-troubleshooting', title: 'Free Macaron Troubleshooting', icon: <MacaronIcon className="w-5 h-5" /> },
            { id: 'baking-bucket-list', title: 'Free Baking Bucket List', icon: <TargetIcon className="w-5 h-5" /> },
            { id: 'baking-tutorials', title: 'Free Baking Tutorials', icon: <YoutubeIcon className="w-5 h-5" /> },
            { id: 'relaxing-videos', title: 'Relaxing Videos', icon: <MusicIcon className="w-5 h-5" /> },
        ]
    },
    {
        id: 'beverages',
        title: 'Beverages',
        icon: <CocktailIcon className="w-6 h-6" />,
        tools: [
            { id: 'drinks-videos', title: 'Free Drink Recipe Videos', icon: <CocktailIcon className="w-5 h-5" /> },
        ]
    }
];

interface NavItemProps {
    icon: React.ReactNode;
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, children, href, onClick }) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <li>
            <Link href={href} onClick={onClick} className={`flex items-center w-full text-left gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${active ? 'bg-brand-pink text-white shadow-md shadow-brand-pink/20 font-bold' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}`}>
                <span className={`transition-colors ${active ? 'text-white' : 'text-stone-400 group-hover:text-stone-600'}`}>{icon}</span>
                <span className="">{children}</span>
            </Link>
        </li>
    );
};

interface AccordionCategoryProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: () => void;
}

const AccordionCategory: React.FC<AccordionCategoryProps> = ({ title, icon, children, isOpen, setIsOpen }) => (
    <div>
        <button onClick={setIsOpen} className={`flex items-center justify-between w-full text-left gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isOpen ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}`}>
            <div className="flex items-center gap-3">
                <span className={`${isOpen ? 'text-brand-pink' : 'text-stone-400 group-hover:text-stone-600 transition-colors'}`}>{icon}</span>
                <span className="font-semibold">{title}</span>
            </div>
            {isOpen ? <ChevronUpIcon className="w-4 h-4 text-brand-pink" /> : <ChevronDownIcon className="w-4 h-4 text-stone-400 group-hover:text-stone-600" />}
        </button>
        {isOpen && (
            <ul className="pl-4 py-1 space-y-0.5 mt-1 border-l border-stone-100 ml-6">
                {children}
            </ul>
        )}
    </div>
);

interface ToolLinkProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    href: string;
    onClick?: () => void;
}

const ToolLink: React.FC<ToolLinkProps> = ({ children, icon, href, onClick }) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <li>
            <Link href={href} onClick={onClick} className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${active ? 'bg-brand-pink/10 text-brand-pink font-bold border-l-2 border-brand-pink' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}`}>
                <span className={`w-4 h-4 ${active ? 'text-brand-pink' : 'text-stone-400'}`}>{icon}</span>
                <span className="">{children}</span>
            </Link>
        </li>
    );
};

interface SidebarProps {
    onToggle?: () => void;
    onNavigate?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onToggle, onNavigate }) => {
    const [openCategory, setOpenCategory] = useState<string | null>('core');
    const [searchTerm, setSearchTerm] = useState('');
    const pathname = usePathname();

    const toggleCategory = (id: string) => {
        setOpenCategory(prevOpenCategory => (prevOpenCategory === id ? null : id));
    };

    const isSearching = searchTerm.trim().length > 0;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredNavConfig = useMemo(() => {
        if (!isSearching) {
            return navConfig;
        }

        return navConfig
            .map(category => {
                const filteredTools = category.tools.filter(tool =>
                    (tool.title || '').toLowerCase().includes(lowerCaseSearchTerm)
                );

                if (category.title.toLowerCase().includes(lowerCaseSearchTerm)) {
                    return category;
                }

                if (filteredTools.length > 0) {
                    return { ...category, tools: filteredTools };
                }

                return null;
            })
            .filter((category): category is NonNullable<typeof category> => category !== null);
    }, [lowerCaseSearchTerm, isSearching]);

    return (
        <aside className={`h-full bg-white text-stone-900 flex flex-col overflow-hidden`}>

            {/* Logo Area - REMOVED (Moved to Global Header) */}
            <div className="h-4"></div>

            {/* Search - Light Theme */}
            <div className="px-6 mb-6 flex items-center gap-2">
                <div className="relative group flex-1">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-brand-pink transition-colors pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Filter..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full bg-stone-50 border border-transparent focus:border-brand-pink/50 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-brand-pink/50 transition-all shadow-sm"
                        aria-label="Search tools"
                    />
                </div>

                {/* Mobile Close Button */}
                {onToggle && (
                    <button
                        onClick={onToggle}
                        className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 transition-all"
                        aria-label="Close menu"
                    >
                        <XIcon className="w-5 h-5" />
                    </button>
                )}

                {/* Desktop Collapse Button */}
                {onToggle && (
                    <button
                        onClick={onToggle}
                        className="hidden md:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-white transition-all transform hover:scale-105 hover:rotate-180"
                        title="Hide Navigation"
                    >
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-4 pb-8 scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent">
                <ul className="space-y-1">
                    <NavItem href={toolIdToSlug('home')} icon={<HomeIcon className="w-5 h-5" />} onClick={onNavigate}>Home</NavItem>

                    {/* ... existing items ... */}

                    {/* Divider */}
                    <div className="h-4"></div>

                    <NavItem href={toolIdToSlug('baking-ebooks')} icon={<BookOpenIcon className="w-5 h-5" />} onClick={onNavigate}>Baking Ebooks</NavItem>
                    <NavItem href={toolIdToSlug('premium-templates')} icon={<DollarSignIcon className="w-5 h-5" />} onClick={onNavigate}>Premium Templates</NavItem>
                    <NavItem href={toolIdToSlug('baking-blog')} icon={<DocumentIcon className="w-5 h-5" />} onClick={onNavigate}>Baking Blog</NavItem>
                    <NavItem href={toolIdToSlug('shop-directory')} icon={<MapPinIcon className="w-5 h-5" />} onClick={onNavigate}>Bakery & Coffee Directory</NavItem>
                    <NavItem href={toolIdToSlug('recipe-index')} icon={<ClipboardIcon className="w-5 h-5" />} onClick={onNavigate}>Recipe Index</NavItem>
                    <NavItem href={toolIdToSlug('kitchenaid-reviews')} icon={<ShoppingCartIcon className="w-5 h-5" />} onClick={onNavigate}>KitchenAid Reviews</NavItem>
                    <NavItem href={toolIdToSlug('products')} icon={<ShoppingCartIcon className="w-5 h-5" />} onClick={onNavigate}>Products</NavItem>
                    <NavItem href={toolIdToSlug('all-tools')} icon={<ToolboxIcon className="w-5 h-5" />} onClick={onNavigate}>All Tools</NavItem>
                    <NavItem href={toolIdToSlug('baking-sources')} icon={<SearchIcon className="w-5 h-5" />} onClick={onNavigate}>Baking Sources</NavItem>
                    <NavItem href={toolIdToSlug('my-art')} icon={<MyArtIcon className="w-5 h-5" />} onClick={onNavigate}>My Art Gallery</NavItem>
                    <NavItem href={toolIdToSlug('essential-recipes')} icon={<ChecklistIcon className="w-5 h-5" />} onClick={onNavigate}>100 Recipes</NavItem>
                    <NavItem href={toolIdToSlug('about')} icon={<AboutIcon className="w-5 h-5" />} onClick={onNavigate}>About Us</NavItem>

                    <div className="px-3 text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 mt-4">Calculators</div>

                    {filteredNavConfig.map(category => (
                        <li key={category.id} className="mb-1">
                            <AccordionCategory
                                title={category.title}
                                icon={category.icon}
                                isOpen={isSearching || openCategory === category.id}
                                setIsOpen={() => toggleCategory(category.id)}
                            >
                                {category.tools.map(tool => (
                                    <ToolLink
                                        key={tool.id}
                                        href={toolIdToSlug(tool.id as ToolId)}
                                        icon={tool.icon}
                                        onClick={onNavigate}
                                    >
                                        {tool.title}
                                    </ToolLink>
                                ))}
                            </AccordionCategory>
                        </li>
                    ))}



                    {isSearching && filteredNavConfig.length === 0 && (
                        <li className="text-center py-8 text-stone-500 text-sm">
                            <p>No tools found</p>
                        </li>
                    )}
                </ul>

                {/* Ad Unit - 200x200 */}
                <div className="mt-4 flex justify-center">
                    <AdUnit
                        slot="6431727071"
                        width={200}
                        height={200}
                        format="rectangle"
                        style={{ display: 'inline-block' }}
                        responsive={false}
                    />
                </div>
            </nav>

            {/* Footer Footer */}
            <div className="p-6 bg-white border-t border-stone-100">
                <p className="text-xs text-stone-400 text-center">© 2025 Sweety's Bakery</p>
            </div>
        </aside>
    );
};