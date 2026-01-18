export interface ToolSuggestion {
    id: string;
    name: string;
    category: 'Equipment' | 'Gadgets' | 'Essentials';
    priceRange: '$' | '$$' | '$$$';
    description: string;
    imageUrl: string;
    reviewSlug: string; // Links to the blog post
    affiliateLink?: string; // Optional for future use
}

export const toolSuggestions: ToolSuggestion[] = [
    {
        id: 'stand-mixer',
        name: 'Artisan Stand Mixer',
        category: 'Equipment',
        priceRange: '$$$',
        description: 'The workhorse of any serious baker\'s kitchen. Perfect for meringues, breads, and batters.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(15).JPG',
        reviewSlug: 'best-stand-mixers-2025'
    },
    {
        id: 'digital-scale',
        name: 'Precision Digital Scale',
        category: 'Essentials',
        priceRange: '$',
        description: 'Baking is a science. Measure by weight, not volume, for consistent results every time.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(25).JPG',
        reviewSlug: 'why-you-need-a-kitchen-scale'
    },
    {
        id: 'piping-set',
        name: 'Professional Piping Set',
        category: 'Gadgets',
        priceRange: '$$',
        description: 'Create beautiful swirls, flowers, and borders with a comprehensive set of stainless steel tips.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(35).JPG',
        reviewSlug: 'essential-piping-tips-for-beginners'
    },
    {
        id: 'silicone-mats',
        name: 'Silicone Baking Mats',
        category: 'Essentials',
        priceRange: '$',
        description: 'Reusable, non-stick, and eco-friendly. Say goodbye to scrubbing burnt sugar off your pans.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(45).JPG',
        reviewSlug: 'silicone-baking-mats-vs-parchment-paper'
    },
    {
        id: 'oven-thermometer',
        name: 'Oven Thermometer',
        category: 'Essentials',
        priceRange: '$',
        description: 'Your oven dial is lying to you. Ensure accurate temperatures for perfect bakes.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(55).JPG',
        reviewSlug: 'why-oven-temperature-matters'
    },
    {
        id: 'bench-scraper',
        name: 'Stainless Steel Bench Scraper',
        category: 'Essentials',
        priceRange: '$',
        description: 'The most underrated tool. Use it to portion dough, clean counters, and smooth cake sides.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(65).JPG',
        reviewSlug: 'why-you-need-a-bench-scraper'
    },
    {
        id: 'rolling-pin',
        name: 'French Rolling Pin',
        category: 'Equipment',
        priceRange: '$$',
        description: 'Tapered ends give you better control and feel for the dough thickness.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(75).JPG',
        reviewSlug: 'french-vs-american-rolling-pins'
    },
    {
        id: 'offset-spatula',
        name: 'Offset Spatula',
        category: 'Gadgets',
        priceRange: '$',
        description: 'Essential for spreading frosting smoothly and lifting delicate cookies.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(85).JPG',
        reviewSlug: 'mastering-the-offset-spatula'
    },
    {
        id: 'cooling-rack',
        name: 'Wire Cooling Rack',
        category: 'Essentials',
        priceRange: '$',
        description: 'Airflow is key. Stop your cookies from continuing to bake on the hot pan.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(95).JPG',
        reviewSlug: 'importance-of-cooling-racks'
    },
    {
        id: 'pastry-brush',
        name: 'Silicone Pastry Brush',
        category: 'Gadgets',
        priceRange: '$',
        description: 'For egg washes, glazing tarts, and brushing away excess flour.',
        imageUrl: 'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(105).JPG',
        reviewSlug: 'best-pastry-brushes'
    }
];
