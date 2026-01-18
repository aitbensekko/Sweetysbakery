export interface TrendItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    color: string;
    details: {
        why: string;
        examples: string[];
        tips: string[];
    };
}

export interface SubstitutionItem {
    category: string;
    from: string;
    to: string[];
    benefit: string;
    icon: string;
}

export const bigThreeDemands: TrendItem[] = [
    {
        id: 'gut-health',
        title: 'Gut Health',
        subtitle: 'The #1 Trend',
        description: 'People are actively searching for fermented, high-fiber, and prebiotic bakes.',
        icon: 'heart',
        color: 'bg-green-500',
        details: {
            why: 'Consumers want food that doesn\'t leave them bloated and supports digestive wellness.',
            examples: [
                'Sourdough (fermented)',
                'High-fiber whole grain breads',
                'Prebiotic-rich oat-based treats',
                'Psyllium husk additions'
            ],
            tips: [
                'Highlight "fermented" or "sourdough" in product names',
                'Use whole grain flours for fiber content',
                'Add seeds (chia, flax) for prebiotic benefits'
            ]
        }
    },
    {
        id: 'high-protein',
        title: 'High Protein',
        subtitle: 'Beyond Athletes',
        description: 'Cookies, muffins, and pancakes that act as meal replacements to keep people full.',
        icon: 'flame',
        color: 'bg-orange-500',
        details: {
            why: 'People want baked goods that provide sustained energy and satiety, not just empty calories.',
            examples: [
                'Greek yogurt in muffins',
                'Cottage cheese brownies',
                'Protein powder cookies',
                'Egg-rich breakfast bakes'
            ],
            tips: [
                'Aim for 10g+ protein per serving',
                'Use Greek yogurt to replace some fat',
                'Add protein powder (whey or plant-based)',
                'Market as "meal replacement" or "grab-and-go breakfast"'
            ]
        }
    },
    {
        id: 'blood-sugar',
        title: 'Blood Sugar Balance',
        subtitle: 'No Sugar Crash',
        description: 'Natural sweeteners that provide slower energy release over refined white sugar.',
        icon: 'star',
        color: 'bg-blue-500',
        details: {
            why: 'People are avoiding the energy crash and seeking sustained, stable blood sugar levels.',
            examples: [
                'Honey (raw, local)',
                'Pure maple syrup',
                'Medjool dates (blended)',
                'Coconut sugar',
                'Monk fruit sweetener'
            ],
            tips: [
                'Reduce total sugar by 25-30% when using natural alternatives',
                'Combine with fiber and protein for better glycemic response',
                'Label as "naturally sweetened" or "no refined sugar"'
            ]
        }
    }
];

export const popularSubstitutions: SubstitutionItem[] = [
    {
        category: 'Flour',
        from: 'White All-Purpose Flour',
        to: ['Oat Flour', 'Almond Flour', 'Whole Wheat Flour', 'Coconut Flour'],
        benefit: 'Gluten-free options, higher in nutrients and fiber',
        icon: 'scale'
    },
    {
        category: 'Fat',
        from: 'Butter or Oil',
        to: ['Greek Yogurt', 'Applesauce', 'Mashed Banana', 'Pumpkin Puree'],
        benefit: 'Lower calories, increased moisture and protein',
        icon: 'heart'
    },
    {
        category: 'Sweetener',
        from: 'White Sugar',
        to: ['Mashed Bananas', 'Dates', 'Honey', 'Maple Syrup'],
        benefit: 'Natural sweetness with added nutrients and fiber',
        icon: 'sparkles'
    },
    {
        category: 'Eggs',
        from: 'Whole Eggs',
        to: ['Flax Eggs', 'Chia Eggs', 'Applesauce', 'Aquafaba'],
        benefit: 'Vegan-friendly, allergen-free options',
        icon: 'check'
    }
];

export const keyBuzzwords = [
    {
        term: 'Clean Label',
        meaning: 'Few ingredients, all recognizable (no chemicals or additives)',
        searchVolume: 'Very High',
        color: 'bg-emerald-100 text-emerald-700'
    },
    {
        term: 'Gluten-Free',
        meaning: 'No wheat, barley, or rye - the dominant dietary restriction',
        searchVolume: 'Extremely High',
        color: 'bg-amber-100 text-amber-700'
    },
    {
        term: 'Grab-and-Go',
        meaning: 'Portable, one-handed eating for busy lifestyles',
        searchVolume: 'High',
        color: 'bg-blue-100 text-blue-700'
    },
    {
        term: 'Plant-Based',
        meaning: 'No animal products, vegan-friendly',
        searchVolume: 'Very High',
        color: 'bg-green-100 text-green-700'
    },
    {
        term: 'Keto-Friendly',
        meaning: 'Low-carb, high-fat for ketogenic diet followers',
        searchVolume: 'High',
        color: 'bg-purple-100 text-purple-700'
    },
    {
        term: 'Paleo',
        meaning: 'No grains, dairy, or processed foods',
        searchVolume: 'Medium',
        color: 'bg-orange-100 text-orange-700'
    }
];

export const perfectRecipe = {
    title: 'The Perfect Healthy Bake',
    subtitle: 'What Today\'s Health-Conscious Consumer Wants',
    description: 'A high-protein, gluten-free blueberry muffin made with oat flour and Greek yogurt, sweetened only with honey.',
    breakdown: [
        { aspect: 'Protein', detail: '12g per muffin (Greek yogurt + eggs)' },
        { aspect: 'Flour', detail: 'Oat flour (gluten-free, high fiber)' },
        { aspect: 'Sweetener', detail: 'Raw honey (natural, no refined sugar)' },
        { aspect: 'Add-ins', detail: 'Blueberries (antioxidants, gut health)' },
        { aspect: 'Label', detail: 'Clean, Gluten-Free, High-Protein, Grab-and-Go' }
    ]
};
