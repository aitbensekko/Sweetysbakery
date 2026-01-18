import React, { useEffect } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { kitchenAidProducts, type KitchenAidProduct } from '../../data/kitchenAidProducts';

interface KitchenAidReviewsProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

// Generate Product Review Schema for a single product
const generateProductSchema = (product: KitchenAidProduct) => {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.imageUrl,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "KitchenAid"
        },
        "offers": {
            "@type": "Offer",
            "url": product.amazonUrl,
            "priceCurrency": "USD",
            "price": product.price.replace('$', '').replace(',', ''),
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Amazon"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating.value.toString(),
            "reviewCount": product.rating.count.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": product.rating.value.toString(),
                "bestRating": "5"
            },
            "author": {
                "@type": "Organization",
                "name": "Sweety's Bakery"
            },
            "datePublished": "2025-01-01",
            "reviewBody": product.description
        }
    };
};

// Star rating component
const StarRating: React.FC<{ rating: number; count: number }> = ({ rating, count }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => {
                    if (i < fullStars) {
                        return <span key={i} className="text-yellow-400 text-xl">★</span>;
                    } else if (i === fullStars && hasHalfStar) {
                        return <span key={i} className="text-yellow-400 text-xl">★</span>;
                    } else {
                        return <span key={i} className="text-gray-300 text-xl">★</span>;
                    }
                })}
            </div>
            <span className="text-sm font-semibold text-brand-text-title">{rating}</span>
            <span className="text-xs text-brand-text-body/60">({count.toLocaleString()} reviews)</span>
        </div>
    );
};

// Product card component
const ProductCard: React.FC<{ product: KitchenAidProduct }> = ({ product }) => {
    const [imgSrc, setImgSrc] = React.useState(product.imageUrl);
    const [imgError, setImgError] = React.useState(false);

    // Fallback placeholder based on product type
    const getPlaceholderImage = () => {
        if (product.name.toLowerCase().includes('mixer') || product.name.toLowerCase().includes('stand')) {
            return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop'; // Stand mixer
        } else if (product.name.toLowerCase().includes('knife') || product.name.toLowerCase().includes('shear')) {
            return 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop'; // Kitchen knives
        } else if (product.name.toLowerCase().includes('bowl')) {
            return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop'; // Mixing bowls
        } else {
            return 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop'; // Generic kitchen tools
        }
    };

    const handleImageError = () => {
        if (!imgError) {
            setImgError(true);
            setImgSrc(getPlaceholderImage());
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-brand-border/30 overflow-hidden hover:shadow-2xl hover:border-brand-pink/50 transition-all duration-300 group">
            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                    src={imgSrc}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={handleImageError}
                    crossOrigin="anonymous"
                />
                <div className="absolute top-4 right-4 bg-brand-pink text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Top Pick
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
                {/* Name & Rating */}
                <h3 className="text-xl font-serif font-bold text-brand-text-title mb-2 line-clamp-2 group-hover:text-brand-pink transition-colors">
                    {product.shortName}
                </h3>

                <div className="mb-3">
                    <StarRating rating={product.rating.value} count={product.rating.count} />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <span className="text-3xl font-bold text-brand-pink">{product.price}</span>
                    <span className="text-sm text-brand-text-body/60 ml-2">on Amazon</span>
                </div>

                {/* Description */}
                <p className="text-sm text-brand-text-body/80 mb-4 line-clamp-3">
                    {product.description}
                </p>

                {/* Best For */}
                <div className="mb-4 p-3 bg-brand-cream/30 rounded-lg border border-brand-gold/20">
                    <p className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-1">Best For</p>
                    <p className="text-sm text-brand-text-body">{product.bestFor}</p>
                </div>

                {/* Pros */}
                <div className="mb-4">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">✓ Pros</p>
                    <ul className="space-y-1">
                        {product.pros.slice(0, 3).map((pro, index) => (
                            <li key={index} className="text-xs text-brand-text-body flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>{pro}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cons */}
                <div className="mb-6">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">✗ Cons</p>
                    <ul className="space-y-1">
                        {product.cons.slice(0, 2).map((con, index) => (
                            <li key={index} className="text-xs text-brand-text-body flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">✗</span>
                                <span>{con}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA Button */}
                <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="block w-full bg-gradient-to-r from-brand-gold to-brand-pink text-white text-center font-bold py-3 px-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    View on Amazon →
                </a>

                {/* Affiliate Disclosure */}
                <p className="text-[10px] text-brand-text-body/50 text-center mt-3">
                    As an Amazon Associate, we earn from qualifying purchases
                </p>
            </div>
        </div>
    );
};

export const KitchenAidReviews: React.FC<KitchenAidReviewsProps> = ({ setActiveTool, breadcrumbs }) => {
    // Inject Product Schema for all products
    useEffect(() => {
        // Remove existing schemas
        const existingSchemas = document.querySelectorAll('script[type="application/ld+json"][data-product-schema]');
        existingSchemas.forEach(schema => schema.remove());

        // Add schema for each product
        kitchenAidProducts.forEach(product => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-product-schema', product.id);
            script.textContent = JSON.stringify(generateProductSchema(product));
            document.head.appendChild(script);
        });

        // Cleanup on unmount
        return () => {
            const schemas = document.querySelectorAll('script[type="application/ld+json"][data-product-schema]');
            schemas.forEach(schema => schema.remove());
        };
    }, []);

    return (
        <ToolContainer
            title=""
            description=""
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="kitchenaid-reviews"
        >
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text-title mb-4 bg-gradient-to-r from-brand-gold via-brand-pink to-brand-gold bg-clip-text text-transparent">
                    Best KitchenAid Products for Bakers
                </h1>
                <p className="text-lg text-brand-text-body max-w-3xl mx-auto mb-6">
                    Expert reviews of the top KitchenAid stand mixers, tools, and accessories.
                    Compare features, prices, and ratings to find the perfect equipment for your bakery.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-brand-text-body/70">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">⭐</span>
                        <span>Expert Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">✓</span>
                        <span>Verified Ratings</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">💰</span>
                        <span>Best Prices</span>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {kitchenAidProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* FOOD PROCESSORS SECTION - SEO OPTIMIZED */}
            <div className="mt-20 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-text-title mb-4">
                        Best Food Processors for Baking: Complete 2025 Guide
                    </h2>
                    <p className="text-lg text-brand-text-body max-w-4xl mx-auto">
                        Discover the top-rated food processors and KitchenAid stand mixer attachments that every baker needs.
                        From chopping nuts to slicing vegetables for savory bakes, find the perfect food processor for your baking needs.
                    </p>
                </div>

                {/* Quick Comparison Table */}
                <div className="mb-12 overflow-x-auto">
                    <div className="bg-gradient-to-br from-brand-cream to-white p-6 rounded-2xl border-2 border-brand-gold/30 shadow-lg">
                        <h3 className="text-2xl font-bold text-brand-pink mb-6 text-center">
                            Food Processor Quick Comparison
                        </h3>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b-2 border-brand-gold/30">
                                    <th className="text-left p-3 font-bold text-brand-text-title">Product</th>
                                    <th className="text-center p-3 font-bold text-brand-text-title">Capacity</th>
                                    <th className="text-center p-3 font-bold text-brand-text-title">Price</th>
                                    <th className="text-center p-3 font-bold text-brand-text-title">Rating</th>
                                    <th className="text-center p-3 font-bold text-brand-text-title">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-border/20">
                                <tr className="hover:bg-brand-cream/30 transition-colors">
                                    <td className="p-3 font-semibold text-brand-pink">KitchenAid 3.5-Cup Chopper</td>
                                    <td className="p-3 text-center">3.5 cups</td>
                                    <td className="p-3 text-center font-bold text-brand-gold">$52.99</td>
                                    <td className="p-3 text-center">⭐ 4.6</td>
                                    <td className="p-3 text-center text-xs">Quick chopping</td>
                                </tr>
                                <tr className="hover:bg-brand-cream/30 transition-colors">
                                    <td className="p-3 font-semibold text-brand-pink">KitchenAid 7-Cup Processor</td>
                                    <td className="p-3 text-center">7 cups</td>
                                    <td className="p-3 text-center font-bold text-brand-gold">$109.95</td>
                                    <td className="p-3 text-center">⭐ 4.4</td>
                                    <td className="p-3 text-center text-xs">Home bakers</td>
                                </tr>
                                <tr className="hover:bg-brand-cream/30 transition-colors">
                                    <td className="p-3 font-semibold text-brand-pink">Hamilton Beach 10-Cup</td>
                                    <td className="p-3 text-center">10 cups</td>
                                    <td className="p-3 text-center font-bold text-brand-gold">$54.95</td>
                                    <td className="p-3 text-center">⭐ 4.5</td>
                                    <td className="p-3 text-center text-xs">Budget choice</td>
                                </tr>
                                <tr className="hover:bg-brand-cream/30 transition-colors">
                                    <td className="p-3 font-semibold text-brand-pink">Cuisinart 14-Cup</td>
                                    <td className="p-3 text-center">14 cups</td>
                                    <td className="p-3 text-center font-bold text-brand-gold">$299.12</td>
                                    <td className="p-3 text-center">⭐ 4.5</td>
                                    <td className="p-3 text-center text-xs">Commercial use</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Why Bakers Need Food Processors */}
                <div className="mb-12 p-8 bg-white rounded-2xl border border-brand-border shadow-md">
                    <h3 className="text-2xl font-bold text-brand-pink mb-4">
                        Why Every Baker Needs a Food Processor
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-brand-text-body">
                        <div>
                            <h4 className="font-bold text-brand-text-title mb-2">⚡ Speed Up Prep Work</h4>
                            <p>Chop nuts for brownies, slice apples for pies, and shred vegetables for savory bakes in seconds instead of minutes. A food processor saves valuable time in the kitchen.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-text-title mb-2">🎯 Consistent Results</h4>
                            <p>Get uniform cuts every time for professional-looking tarts and even baking. The ExactSlice system ensures consistent thickness for perfect results.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-text-title mb-2">🥧 Pastry Perfection</h4>
                            <p>Make flaky pie crusts by quickly cutting butter into flour. The pulsing action prevents overworking the dough, resulting in tender, flaky pastries.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-text-title mb-2">🌰 Nut Butters & More</h4>
                            <p>Create fresh almond butter, grind nuts for macarons, and make breadcrumbs from scratch. The possibilities are endless with a quality food processor.</p>
                        </div>
                    </div>
                </div>

                {/* Stand Mixer Attachments Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-brand-text-title mb-6 text-center">
                        Essential KitchenAid Stand Mixer Attachments
                    </h3>
                    <p className="text-center text-brand-text-body mb-8 max-w-3xl mx-auto">
                        Transform your KitchenAid stand mixer into a versatile food processor with these must-have attachments.
                        Perfect for bakers who want maximum functionality from their existing mixer.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-brand-cream to-white p-6 rounded-xl border-2 border-brand-gold/20 hover:border-brand-pink/50 transition-all">
                            <div className="text-4xl mb-3 text-center">🥄</div>
                            <h4 className="font-bold text-brand-pink mb-2 text-center">Wire Whip Attachments</h4>
                            <p className="text-sm text-brand-text-body mb-3">Perfect for whipping egg whites, cream, and light batters. Essential for meringues and angel food cakes.</p>
                            <p className="text-xs text-brand-gold font-bold text-center">From $11.87</p>
                        </div>

                        <div className="bg-gradient-to-br from-brand-cream to-white p-6 rounded-xl border-2 border-brand-gold/20 hover:border-brand-pink/50 transition-all">
                            <div className="text-4xl mb-3 text-center">🍝</div>
                            <h4 className="font-bold text-brand-pink mb-2 text-center">Pasta Maker Set</h4>
                            <p className="text-sm text-brand-text-body mb-3">Includes roller, spaghetti cutter, and fettuccine cutter. Make fresh pasta at home with ease.</p>
                            <p className="text-xs text-brand-gold font-bold text-center">$87.99</p>
                        </div>

                        <div className="bg-gradient-to-br from-brand-cream to-white p-6 rounded-xl border-2 border-brand-gold/20 hover:border-brand-pink/50 transition-all">
                            <div className="text-4xl mb-3 text-center">🔪</div>
                            <h4 className="font-bold text-brand-pink mb-2 text-center">Slicer/Shredder</h4>
                            <p className="text-sm text-brand-text-body mb-3">3 blades for slicing vegetables and shredding cheese. Perfect for quiches and savory bakes.</p>
                            <p className="text-xs text-brand-gold font-bold text-center">$28.99</p>
                        </div>
                    </div>
                </div>

                {/* How to Choose Guide */}
                <div className="mb-12 p-8 bg-gradient-to-br from-brand-pink/5 to-brand-gold/5 rounded-2xl border-2 border-brand-pink/20">
                    <h3 className="text-2xl font-bold text-brand-text-title mb-6 text-center">
                        How to Choose the Right Food Processor for Baking
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-brand-pink mb-3 flex items-center gap-2">
                                <span className="text-2xl">📏</span> Consider Capacity
                            </h4>
                            <ul className="space-y-2 text-sm text-brand-text-body">
                                <li><strong>3-4 cups:</strong> Perfect for chopping nuts, herbs, and small batches</li>
                                <li><strong>7-8 cups:</strong> Ideal for most home baking needs and family recipes</li>
                                <li><strong>11-14 cups:</strong> Best for large batches, commercial use, and bread dough</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-pink mb-3 flex items-center gap-2">
                                <span className="text-2xl">⚙️</span> Motor Power Matters
                            </h4>
                            <ul className="space-y-2 text-sm text-brand-text-body">
                                <li><strong>240-350W:</strong> Light tasks like chopping and pureeing</li>
                                <li><strong>600-720W:</strong> Heavy-duty tasks including bread dough</li>
                                <li><strong>1200W+:</strong> Professional-grade for continuous commercial use</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-pink mb-3 flex items-center gap-2">
                                <span className="text-2xl">🔧</span> Essential Features
                            </h4>
                            <ul className="space-y-2 text-sm text-brand-text-body">
                                <li>✓ Multiple speed settings for precision control</li>
                                <li>✓ Pulse function for quick bursts</li>
                                <li>✓ Wide feed tube for whole fruits and vegetables</li>
                                <li>✓ Dishwasher-safe parts for easy cleanup</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-pink mb-3 flex items-center gap-2">
                                <span className="text-2xl">💰</span> Budget Guide
                            </h4>
                            <ul className="space-y-2 text-sm text-brand-text-body">
                                <li><strong>Under $50:</strong> Basic choppers for occasional use</li>
                                <li><strong>$100-200:</strong> Quality mid-range processors for regular baking</li>
                                <li><strong>$200+:</strong> Professional-grade for serious bakers and bakeries</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Food Processor FAQ */}
                <div className="p-8 bg-white rounded-2xl border border-brand-border shadow-md">
                    <h3 className="text-2xl font-bold text-brand-text-title mb-6 text-center">
                        Food Processor FAQs for Bakers
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-brand-pink mb-2">Can I use a food processor instead of a stand mixer?</h4>
                            <p className="text-sm text-brand-text-body">
                                While food processors excel at chopping, slicing, and making pastry dough, they can't replace stand mixers for tasks like whipping cream,
                                beating egg whites, or mixing cake batters. The ideal setup is having both - use your food processor for prep work and your stand mixer for mixing and whipping.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-pink mb-2">What's the best food processor size for home baking?</h4>
                            <p className="text-sm text-brand-text-body">
                                For most home bakers, a 7-11 cup capacity is ideal. It's large enough to handle family-sized batches but not so big that it takes up excessive counter space.
                                If you primarily chop nuts and herbs, a 3-4 cup mini processor might suffice. Professional bakers should consider 13-14 cup models.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-pink mb-2">Can food processors make pie crust?</h4>
                            <p className="text-sm text-brand-text-body">
                                Absolutely! Food processors are actually ideal for making pie crust. The pulsing action quickly cuts cold butter into flour without warming it,
                                resulting in flakier crusts than hand-mixing. Just pulse until the mixture resembles coarse crumbs, then add ice water gradually.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-pink mb-2">Are KitchenAid food processors better than Cuisinart?</h4>
                            <p className="text-sm text-brand-text-body">
                                Both brands offer excellent quality. KitchenAid processors feature the ExactSlice system for adjustable slicing thickness and tend to have sleeker designs.
                                Cuisinart processors often have more powerful motors and larger capacities at similar price points. Choose based on your specific needs and budget.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-pink mb-2">What attachments do I need for baking?</h4>
                            <p className="text-sm text-brand-text-body">
                                Essential attachments for baking include: S-blade for chopping nuts and making pastry dough, slicing disc for fruit tarts,
                                shredding disc for vegetables in savory bakes, and dough blade for mixing bread dough. Most quality processors include these standard attachments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buying Guide Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-brand-cream to-white rounded-2xl border-2 border-brand-gold/20 shadow-lg">
                <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-6 text-center">
                    KitchenAid Buying Guide
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-brand-pink mb-3">🎯 How to Choose</h3>
                        <ul className="space-y-2 text-sm text-brand-text-body">
                            <li><strong>Capacity:</strong> 3.5-qt for small batches, 5-qt for most home bakers, 8-qt for commercial use</li>
                            <li><strong>Power:</strong> 250W for light mixing, 325W for bread dough, 1.3HP for commercial</li>
                            <li><strong>Design:</strong> Tilt-head for easy access, bowl-lift for heavy loads</li>
                            <li><strong>Attachments:</strong> Consider future needs - pasta maker, food grinder, etc.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-brand-pink mb-3">💡 Pro Tips</h3>
                        <ul className="space-y-2 text-sm text-brand-text-body">
                            <li>✓ Register your mixer for extended warranty</li>
                            <li>✓ Start on low speed to prevent ingredient splatter</li>
                            <li>✓ Don't exceed maximum capacity (risk of motor strain)</li>
                            <li>✓ Clean attachments immediately after use</li>
                            <li>✓ Store in a dry place to prevent rust</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-brand-border">
                    <h3 className="text-lg font-bold text-brand-text-title mb-3">📊 Price Comparison</h3>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                            <p className="font-bold text-brand-gold">Budget</p>
                            <p className="text-2xl font-bold text-brand-pink">$249</p>
                            <p className="text-xs text-brand-text-body/60">Classic 4.5-Qt</p>
                        </div>
                        <div>
                            <p className="font-bold text-brand-gold">Mid-Range</p>
                            <p className="text-2xl font-bold text-brand-pink">$379</p>
                            <p className="text-xs text-brand-text-body/60">Artisan 5-Qt</p>
                        </div>
                        <div>
                            <p className="font-bold text-brand-gold">Professional</p>
                            <p className="text-2xl font-bold text-brand-pink">$1,799</p>
                            <p className="text-xs text-brand-text-body/60">Commercial 8-Qt</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 p-8 bg-white rounded-2xl border border-brand-border shadow-md">
                <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-brand-pink mb-2">Are KitchenAid mixers worth the price?</h3>
                        <p className="text-sm text-brand-text-body">
                            Yes! KitchenAid mixers are built to last decades with proper care. The all-metal construction,
                            powerful motors, and versatile attachments make them excellent long-term investments for serious bakers.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-brand-pink mb-2">What's the difference between Artisan and Classic?</h3>
                        <p className="text-sm text-brand-text-body">
                            The Artisan has a larger 5-qt bowl vs 4.5-qt, more powerful 325W motor vs 275W, and comes in 40+ colors.
                            The Classic is more budget-friendly but still delivers excellent performance for most home baking needs.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-brand-pink mb-2">Can I use KitchenAid mixers for bread dough?</h3>
                        <p className="text-sm text-brand-text-body">
                            Absolutely! The Artisan and higher models handle bread dough excellently. Use the dough hook attachment
                            and don't exceed the recommended flour capacity (9 cups for Artisan, 14 cups for Commercial).
                        </p>
                    </div>
                </div>
            </div>

            {/* Related Blog Posts - Internal Links for SEO */}
            <div className="mt-12 p-8 bg-gradient-to-br from-brand-cream to-white rounded-2xl border-2 border-brand-gold/20 shadow-lg">
                <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-6 text-center">
                    📚 Related Baking Guides
                </h2>
                <p className="text-center text-brand-text-body mb-8 max-w-3xl mx-auto">
                    Get the most out of your baking equipment with these expert guides
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a
                        href="/blog/how-to-start-home-bakery-business-complete-2025-guide"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">🏠</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    How to Start a Home Bakery Business
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Learn what equipment you need (including the best stand mixers and food processors!) to launch your profitable home bakery.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/how-to-price-cakes-for-profit-complete-calculator-guide-2025"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">💰</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    How to Price Cakes for Profit
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Master cake pricing with our calculator. Factor in equipment costs and maximize your bakery profits.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/macaron-troubleshooting-15-common-problems-solutions"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">🍪</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    Macaron Troubleshooting Guide
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Fix common macaron problems! Learn which tools (mixers, food processors) make perfect macarons easier.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/ultimate-cake-flavor-pairing-guide-50-winning-combinations"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">🎨</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    Ultimate Cake Flavor Pairing Guide
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Discover 50+ winning flavor combinations. Use your stand mixer to create unforgettable cakes!
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/bakers-percentage-calculator-master-professional-baking-ratios"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">📊</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    Baker's Percentage Calculator
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Master professional baking ratios and scale recipes perfectly with your stand mixer.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/best-birthday-cake-ideas"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">🎂</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    Best Birthday Cake Ideas
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    From whimsical kids' cakes to elegant adult designs, create stunning birthday cakes with your mixer.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/trending-cake-designs-2025"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">✨</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    Trending Cake Designs 2025
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Stay ahead with the latest cake decoration trends and techniques to try with your equipment.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/how-to-choose-a-wedding-cake"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">💍</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    How to Choose a Wedding Cake
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Complete step-by-step guide to selecting the perfect wedding cake for your big day.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/cake-flavors-people-love"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">🍰</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    Cake Flavors People Love
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Explore crowd-pleasing cake flavors from classic chocolate to adventurous new combinations.
                                </p>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/blog/gourmet-dessert-recipes"
                        className="p-6 bg-white rounded-xl border-2 border-brand-border hover:border-brand-pink hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">👨‍🍳</div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-pink mb-2 group-hover:text-brand-gold transition-colors">
                                    Gourmet Dessert Recipes
                                </h3>
                                <p className="text-sm text-brand-text-body">
                                    Bring the patisserie to your kitchen with impressive gourmet recipes using professional equipment.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                    <strong>Affiliate Disclosure:</strong> This page contains affiliate links to Amazon.
                    As an Amazon Associate, Sweety's Bakery earns from qualifying purchases at no additional cost to you.
                    We only recommend products we genuinely believe in and use ourselves.
                    Prices and availability are subject to change.
                </p>
            </div>
        </ToolContainer>
    );
};
