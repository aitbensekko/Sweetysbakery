// KitchenAid Product Data with Real Amazon Information - EXPANDED COLLECTION
export interface KitchenAidProduct {
    id: string;
    name: string;
    shortName: string;
    description: string;
    imageUrl: string;
    amazonUrl: string;
    price: string;
    rating: {
        value: number;
        count: number;
    };
    pros: string[];
    cons: string[];
    bestFor: string;
    features: string[];
}

export const kitchenAidProducts: KitchenAidProduct[] = [
    // STAND MIXERS - ARTISAN SERIES 5-QT
    {
        id: "ka-artisan-5qt-velvet",
        name: "KitchenAid Artisan Series 5 Quart Tilt Head Stand Mixer with Pouring Shield - Blue Velvet",
        shortName: "Artisan 5-Qt - Blue Velvet",
        description: "Built to take it all on with the durable and built-to-last metal construction, and 59 touchpoints around the mixer bowl for great mixing results. 5 Quart Stainless Steel Bowl with comfortable handle for small or large batches, to mix up 9 dozen cookies in a single batch.",
        imageUrl: "https://m.media-amazon.com/images/I/71eWTuVs0qL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KSM150PSVB-Artisan-Mixers-Velvet/dp/B07QHQ8CD3?&linkCode=ll1&tag=lahcenaitbens-20&linkId=68238506e411ad5b2255b73c0af7f121&language=en_US&ref_=as_li_ss_tl",
        price: "$499.95",
        rating: {
            value: 4.7,
            count: 7221
        },
        pros: [
            "10 speeds for versatile mixing from slow stir to fast whip",
            "5-quart stainless steel bowl perfect for large batches",
            "Durable all-metal construction built to last decades",
            "Tilt-head design for easy access to bowl",
            "Compatible with 15+ optional attachments"
        ],
        cons: [
            "Heavy at 22 lbs - not easily portable",
            "Premium price point",
            "Can be loud at higher speeds"
        ],
        bestFor: "Serious home bakers and small bakery owners who need professional-grade performance",
        features: [
            "325-watt motor",
            "59-point planetary mixing action",
            "Soft-start feature prevents splatter",
            "Available in 40+ colors"
        ]
    },
    {
        id: "ka-artisan-5qt-dried-rose",
        name: "KitchenAid Artisan Series 5 Quart Tilt Head Stand Mixer with Pouring Shield - Dried Rose",
        shortName: "Artisan 5-Qt - Dried Rose",
        description: "Built to take it all on with the durable and built-to-last metal construction, and 59 touchpoints around the mixer bowl for great mixing results. Match your style with over 20 colors available.",
        imageUrl: "https://m.media-amazon.com/images/I/61u2QA5G7+L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KSM150PSDR-Artisan-Stand-Mixers/dp/B07QJR3W3V?&linkCode=ll1&tag=lahcenaitbens-20&linkId=6ee0db2ceb3cfb5c5e4e8ef88d201e16&language=en_US&ref_=as_li_ss_tl",
        price: "$499.95",
        rating: {
            value: 4.6,
            count: 483
        },
        pros: [
            "Stunning Dried Rose color matches modern kitchen aesthetics",
            "Same powerful 325-watt motor as classic models",
            "Includes essential attachments (beater, hook, whip)",
            "Dishwasher-safe bowl and attachments",
            "Pouring shield included for mess-free adding"
        ],
        cons: [
            "Color may show fingerprints more than darker models",
            "Limited edition color may be discontinued",
            "Premium pricing"
        ],
        bestFor: "Bakers who want professional performance with elegant design",
        features: [
            "5-quart capacity",
            "10 mixing speeds",
            "Tilt-head design",
            "1-year warranty"
        ]
    },
    {
        id: "ka-artisan-5qt-almond",
        name: "KitchenAid Artisan Series 5 Quart Tilt Head Stand Mixer with Pouring Shield - Almond Cream",
        shortName: "Artisan 5-Qt - Almond Cream",
        description: "Built to take it all on with the durable and built-to-last metal construction, and 59 touchpoints around the mixer bowl for great mixing results. 5 Quart Stainless Steel Bowl with comfortable handle for small or large batches, to mix up 9 dozen cookies in a single batch.",
        imageUrl: "https://m.media-amazon.com/images/I/71cSdWwwGsL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KSM150PSAC-Artisan-Pouring-Shield/dp/B00007G309?&linkCode=ll1&tag=lahcenaitbens-20&linkId=9ba4891a46d1bbfef7b13517e1d79d86&language=en_US&ref_=as_li_ss_tl",
        price: "$499.95",
        rating: {
            value: 4.7,
            count: 7221
        },
        pros: [
            "Classic neutral color fits any kitchen",
            "10 speeds for nearly any task or recipe",
            "Easily add ingredients with tilt-head design",
            "Dishwasher-safe bowl",
            "Includes pouring shield"
        ],
        cons: [
            "Light color may show stains over time",
            "Premium price point",
            "Heavy unit"
        ],
        bestFor: "Bakers seeking a timeless, versatile stand mixer",
        features: [
            "5-quart capacity",
            "325-watt motor",
            "10 speeds",
            "Pouring shield included"
        ]
    },
    {
        id: "ka-artisan-5qt-imperial-grey",
        name: "KitchenAid Artisan Series 5 Quart Tilt Head Stand Mixer with Pouring Shield - Imperial Grey",
        shortName: "Artisan 5-Qt - Imperial Grey",
        description: "5-Qt. stainless steel bowl with comfortable handle offers enough capacity to mix dough for 9 dozen cookies or 4 loaves of bread in a single batch. Features a tilt-head design for clear access to the bowl and 10 speeds to thoroughly mix, knead and whip ingredients.",
        imageUrl: "https://m.media-amazon.com/images/I/81W-1RB-AUL._AC_SL1500_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KSM150PSBF-Artisan-Tilt-Head-Pouring/dp/B00005UP2N?&linkCode=ll1&tag=lahcenaitbens-20&linkId=417b91eaae073f3a735e82d34b1ddce3&language=en_US&ref_=as_li_ss_tl",
        price: "$449.95",
        rating: {
            value: 4.7,
            count: 361
        },
        pros: [
            "Modern grey finish complements contemporary kitchens",
            "Same powerful performance as other Artisan models",
            "Tilt-head design for easy bowl access",
            "10 speeds for versatility",
            "Compatible with all KitchenAid attachments"
        ],
        cons: [
            "May show dust more than darker colors",
            "Premium pricing",
            "Heavy weight"
        ],
        bestFor: "Modern kitchens needing a sleek, professional mixer",
        features: [
            "5-quart stainless steel bowl",
            "325-watt motor",
            "Tilt-head design",
            "10 speeds"
        ]
    },
    {
        id: "vitamix-e310-black",
        name: "Vitamix Explorian E310 Blender, Professional-Grade Kitchen Blender for Smoothies, Soups, Juices and More",
        shortName: "Vitamix E310 Blender",
        description: "Professional-grade blender with 10 variable speeds and a 48 oz container. Perfect for smoothies, soups, and frozen desserts. Self-cleaning feature makes cleanup a breeze.",
        imageUrl: "https://m.media-amazon.com/images/I/71lMUuj9RtL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Vitamix-E310-Explorian-Professional-Grade-Container/dp/B0758JHZM3?&linkCode=ll1&tag=lahcenaitbens-20&linkId=cc35445993a9b8585f6ea9c0ad7f8054&language=en_US&ref_=as_li_ss_tl",
        price: "$299.95",
        rating: {
            value: 4.6,
            count: 8046
        },
        pros: [
            "Professional-grade performance at home",
            "10 variable speeds for precise control",
            "Self-cleaning feature saves time",
            "Powerful motor handles tough ingredients",
            "48 oz container perfect for family servings"
        ],
        cons: [
            "Louder than some competitors",
            "No preset programs",
            "Container not dishwasher safe"
        ],
        bestFor: "Bakers who need a powerful blender for smoothies, purees, and blending batters",
        features: [
            "48 oz BPA-free container",
            "10 variable speeds",
            "Aircraft-grade stainless steel blades",
            "Self-cleaning"
        ]
    },
    {
        id: "ka-artisan-5qt-white",
        name: "KitchenAid Artisan Series 5 Quart Tilt Head Stand Mixer - White",
        shortName: "Artisan 5-Qt - White",
        description: "The classic White Artisan mixer. Includes a 5-quart stainless steel bowl, coated flat beater, coated dough hook, and 6-wire whip. With 10 speeds, it will quickly become your kitchen's culinary center.",
        imageUrl: "https://m.media-amazon.com/images/I/71hNoU5FYuL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KSM150PSWH-Artisan-Pouring-Shield/dp/B00005UP2K?&linkCode=ll1&tag=lahcenaitbens-20&linkId=4bebe49e78c8fbd298fc3f159a448b20&language=en_US&ref_=as_li_ss_tl",
        price: "$200.98",
        rating: {
            value: 4.7,
            count: 1517
        },
        pros: [
            "Classic white color never goes out of style",
            "Highest rating in the Artisan series (4.8 stars)",
            "Over 7,000 verified reviews",
            "Timeless design",
            "Easy to match with any kitchen decor"
        ],
        cons: [
            "White may show stains more easily",
            "Requires regular cleaning to maintain appearance",
            "Premium price"
        ],
        bestFor: "Traditional kitchens and bakers who prefer classic styling",
        features: [
            "5-quart capacity",
            "10 speeds",
            "Includes 3 attachments",
            "Dishwasher-safe bowl"
        ]
    },
    {
        id: "ka-artisan-5qt-yellow",
        name: "KitchenAid Artisan Series 5 Quart Tilt Head Stand Mixer with Pouring Shield - Majestic Yellow",
        shortName: "Artisan 5-Qt - Majestic Yellow",
        description: "Choose from over 20 different colors to match your kitchen decor. The power hub turns your stand mixer into a culinary center, compatible with all KitchenAid attachments.",
        imageUrl: "https://m.media-amazon.com/images/I/713yTvddupL._AC_SL1500_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KSM150PSGC-Artisan-Pouring-Shield/dp/B00005UP2M?&linkCode=ll1&tag=lahcenaitbens-20&linkId=fc46cb37e734eb02bfc81263042ad2d5&language=en_US&ref_=as_li_ss_tl",
        price: "$449.95",
        rating: {
            value: 4.7,
            count: 7221
        },
        pros: [
            "Bright, cheerful yellow adds personality to kitchen",
            "Power hub for attachment compatibility",
            "10 speeds for versatile mixing",
            "Durable metal construction",
            "Large 5-quart capacity"
        ],
        cons: [
            "Bold color may not suit all kitchens",
            "May show wear over time",
            "Premium pricing"
        ],
        bestFor: "Bakers who want to add a pop of color to their kitchen",
        features: [
            "5-quart bowl",
            "10 speeds",
            "Power hub",
            "Pouring shield"
        ]
    },

    // STAND MIXERS - OTHER MODELS
    {
        id: "ka-artisan-mini-35qt",
        name: "KitchenAid Artisan Mini 3.5 Quart Tilt-Head Stand Mixer - Cast Iron Black",
        shortName: "Artisan Mini 3.5-Qt",
        description: "Lighter. Smaller. Just as Powerful. With the same power as the KitchenAid Classic Stand Mixer, the Artisan Mini weighs less so it's easier to move around and is smaller, taking up less counter space.",
        imageUrl: "https://m.media-amazon.com/images/I/81My7Z51sSL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Kitchenaid-Artisan-3-5-Qt-Tilt-Head-Stand-Beater/dp/B07QHQF44T?&linkCode=ll1&tag=lahcenaitbens-20&linkId=37feedb6efa7699d3cdbc5333e3660c5&language=en_US&ref_=as_li_ss_tl",
        price: "$329.95",
        rating: {
            value: 4.7,
            count: 4809
        },
        pros: [
            "Compact size perfect for small kitchens or apartments",
            "25% lighter than full-size Artisan",
            "Same powerful motor in smaller package",
            "More affordable than 5-qt models",
            "Takes up 20% less counter space"
        ],
        cons: [
            "Smaller 3.5-qt capacity limits batch sizes",
            "Not ideal for heavy bread dough",
            "Fewer color options available"
        ],
        bestFor: "Home bakers with limited counter space or those who bake smaller batches",
        features: [
            "250-watt motor",
            "10 speeds",
            "Tilt-head design",
            "Includes 3 attachments"
        ]
    },
    {
        id: "ka-bowl-lift-7qt",
        name: "KitchenAid 7 Quart Bowl-Lift Stand Mixer",
        shortName: "7-Qt Bowl-Lift Mixer",
        description: "Features 11 distinct speeds for power and control, ranging from powerful speed 10 to a delicate 1/2 speed for folding. It has a 7-quart capacity, capable of mixing 13 dozen cookies per batch. Includes a stainless steel bowl, double flex edge beater, flat beater, dough hook, 11-wire whip, and pouring shield.",
        imageUrl: "https://m.media-amazon.com/images/I/51exqGvKltL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid%C2%AE-Quart-Bowl-Lift-Stand-Mixer/dp/B0BRNW75GM?&linkCode=ll1&tag=lahcenaitbens-20&linkId=c1b5be7dbfada5b01199cf112933d56a&language=en_US&ref_=as_li_ss_tl",
        price: "$649.95",
        rating: {
            value: 4.0,
            count: 2213
        },
        pros: [
            "Large 7-quart capacity for big batches",
            "11 speeds including delicate 1/2 speed for folding",
            "Bowl-lift design for stability",
            "Includes 5 attachments plus pouring shield",
            "Can mix 13 dozen cookies at once"
        ],
        cons: [
            "More expensive than 5-qt models",
            "Takes up more counter space",
            "Heavier and less portable"
        ],
        bestFor: "Serious bakers and small businesses needing large capacity",
        features: [
            "7-quart stainless steel bowl",
            "11 speeds",
            "Bowl-lift design",
            "Double flex edge beater"
        ]
    },
    {
        id: "ka-commercial-8qt",
        name: "KitchenAid KSM8990CU 8-Quart Commercial Countertop Mixer - Contour Silver",
        shortName: "Commercial 8-Qt Mixer",
        description: "NSF Certified for commercial use - whether you're mixing up batter or kneading a yeast dough, this mixer makes the process easier. High efficiency DC motor runs longer with less heat build-up.",
        imageUrl: "https://m.media-amazon.com/images/I/81PvH5dnhML._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KSM8990CU-Commercial-Countertop-Gear-Driven/dp/B0BJXYXYD1?&linkCode=ll1&tag=lahcenaitbens-20&linkId=38edf80b623e1446bf4828f155569fcb&language=en_US&ref_=as_li_ss_tl",
        price: "$999.95",
        rating: {
            value: 4.5,
            count: 1243
        },
        pros: [
            "Commercial-grade 1.3 HP motor handles heavy loads",
            "Massive 8-quart capacity for large batches",
            "Bowl-lift design for stability with heavy mixtures",
            "Built for continuous daily use",
            "NSF certified for commercial kitchens"
        ],
        cons: [
            "Very expensive investment at $999",
            "Large and heavy (requires dedicated counter space)",
            "Overkill for most home bakers"
        ],
        bestFor: "Professional bakeries, catering businesses, and serious commercial operations",
        features: [
            "1.3 HP motor",
            "10 speeds",
            "Stainless steel bowl",
            "Commercial warranty"
        ]
    },
    {
        id: "ka-classic-45qt",
        name: "KitchenAid Classic Series 4.5 Quart Tilt-Head Stand Mixer - White",
        shortName: "Classic 4.5-Qt Mixer",
        description: "Built to take it all on with durable metal construction and 59 touchpoints. 4.5 Quart Stainless Steel Bowl to mix up to 8 dozen cookies in a single batch. 10 speeds for nearly any task.",
        imageUrl: "https://m.media-amazon.com/images/I/51jpWoprCvL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-Classic-Quart-Tilt-Head-K45SSWH/dp/B00004SGFW?&linkCode=ll1&tag=lahcenaitbens-20&linkId=417b91eaae073f3a735e82d34b1ddce3&language=en_US&ref_=as_li_ss_tl",
        price: "$279.99",
        rating: {
            value: 4.7,
            count: 11466
        },
        pros: [
            "Most affordable KitchenAid stand mixer",
            "Reliable 275-watt motor",
            "10 speeds for versatility",
            "Includes essential attachments",
            "Proven durability and reliability"
        ],
        cons: [
            "Smaller capacity than Artisan models",
            "Less powerful motor for heavy doughs",
            "Fewer color options"
        ],
        bestFor: "Budget-conscious bakers or those just starting with stand mixers",
        features: [
            "4.5-quart bowl",
            "275-watt motor",
            "Tilt-head design",
            "1-year warranty"
        ]
    },

    // KITCHEN TOOLS & ACCESSORIES
    {
        id: "ka-food-chopper-35cup",
        name: "KitchenAid KFC3516ER 3.5 Cup Food Chopper - Empire Red",
        shortName: "3.5 Cup Food Chopper",
        description: "2 speeds and pulse for coarse or fine results for anything from chunky pico de gallo and salsa, to a creamy hummus, smooth sauce or tasty dressing. Easily incorporate liquid ingredients with the drizzle basin.",
        imageUrl: "https://m.media-amazon.com/images/I/6186h7rqz0L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KFC3516ER-Food-Chopper-Empire/dp/B01LZIHVTC?&linkCode=ll1&tag=lahcenaitbens-20&linkId=4266c5b000908b58cc88483a970de408&language=en_US&ref_=as_li_ss_tl",
        price: "$54.95",
        rating: {
            value: 4.6,
            count: 28789
        },
        pros: [
            "Affordable and compact design",
            "One-touch pulse operation is simple to use",
            "Dishwasher-safe parts for easy cleanup",
            "Perfect size for small tasks",
            "Drizzle basin for adding liquids while processing"
        ],
        cons: [
            "Small capacity limits batch sizes",
            "Not suitable for heavy-duty tasks",
            "Blade can be difficult to clean around"
        ],
        bestFor: "Quick prep work, chopping nuts, making breadcrumbs, or small batches of salsa",
        features: [
            "3.5 cup capacity",
            "240-watt motor",
            "Drizzle basin in lid",
            "BPA-free"
        ]
    },
    {
        id: "ka-mixing-bowls",
        name: "KitchenAid Classic Mixing Bowls, Set of 5 - Pistachio",
        shortName: "Mixing Bowls Set",
        description: "Set of 5 bowls: include a 1.5, 2.5, 3.5, 4.5 and 5.5-Quart bowls. Non-slip base: each bowl features a non-slip base that increases stability while mixing. Easy to store: nest together when not in use.",
        imageUrl: "https://m.media-amazon.com/images/I/71IsxjgXA1L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KE178OSPIA-Classic-Mixing-Pistachio/dp/B07TMR84BV?&linkCode=ll1&tag=lahcenaitbens-20&linkId=5cf6b257ff47f417796089b2b0503856&language=en_US&ref_=as_li_ss_tl",
        price: "$33.99",
        rating: {
            value: 4.8,
            count: 6249
        },
        pros: [
            "Excellent value - 5 bowls for under $35",
            "Non-slip silicone bases prevent sliding",
            "Pour spout for easy transfer",
            "Nesting design saves storage space",
            "Dishwasher safe"
        ],
        cons: [
            "Not oven-safe",
            "Can show fingerprints easily",
            "Lids sold separately"
        ],
        bestFor: "Everyday mixing, prep work, and ingredient storage",
        features: [
            "Set of 5 bowls (1.5, 2.5, 3.5, 4.5, 5.5 qt)",
            "Stainless steel construction",
            "Non-slip bases",
            "Pour spouts"
        ]
    },
    {
        id: "ka-knife-set-15pc",
        name: "KitchenAid Gourmet Knife Block Set with Built-in Sharpener - 15-Piece",
        shortName: "15-Piece Knife Set",
        description: "Forged knives are expertly crafted using semi-polished, high-carbon Japanese steel. The contemporary wood storage block features a built-in sharpener to ensure knives maintain their sharp blade.",
        imageUrl: "https://m.media-amazon.com/images/I/61Fw1SU5AiL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-Gourmet-Sharpener-15-Piece-Stainless/dp/B0DD56SV3N?&linkCode=ll1&tag=lahcenaitbens-20&linkId=64c9216d16bdc1aa9c48f64490e94bd5&language=en_US&ref_=as_li_ss_tl",
        price: "$139.99",
        rating: {
            value: 4.6,
            count: 334
        },
        pros: [
            "Complete set covers all kitchen needs",
            "High-carbon Japanese steel blades",
            "Built-in sharpener in block",
            "Comfortable ergonomic handles",
            "Beautiful wood block"
        ],
        cons: [
            "Requires hand washing",
            "Block takes up counter space",
            "Not professional-grade quality"
        ],
        bestFor: "Home cooks who want a complete, reliable knife set",
        features: [
            "15 pieces total",
            "Triple-riveted handles",
            "Full tang construction",
            "Lifetime warranty"
        ]
    },
    {
        id: "ka-knife-set-14pc",
        name: "KitchenAid Classic Slim Knife Block Set with Built-In Sharpener - 14-Piece",
        shortName: "14-Piece Knife Set",
        description: "Kitchen essential: Includes all the essential knives needed for everyday food prep tasks. Sleek storage and sharpening: The slim rubberwood block securely stores your knives.",
        imageUrl: "https://m.media-amazon.com/images/I/615K2bviZ9L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-Classic-Sharpener-Stainless-Kitchen/dp/B0DK61Z9TC?&linkCode=ll1&tag=lahcenaitbens-20&linkId=c1b5be7dbfada5b01199cf112933d56a&language=en_US&ref_=as_li_ss_tl",
        price: "$75.99",
        rating: {
            value: 4.3,
            count: 167
        },
        pros: [
            "Slim block saves counter space",
            "Built-in sharpener",
            "High-carbon stainless steel",
            "Complete set for everyday use",
            "Affordable price"
        ],
        cons: [
            "Newer product with fewer reviews",
            "Not as premium as 15-piece set",
            "Hand wash recommended"
        ],
        bestFor: "Kitchens with limited counter space needing a complete knife set",
        features: [
            "14 pieces total",
            "Built-in sharpener",
            "Slim rubberwood block",
            "High-carbon steel"
        ]
    },
    {
        id: "ka-pizza-wheel",
        name: "KitchenAid Classic Pizza Wheel with Sharp Blade - Black",
        shortName: "Pizza Wheel",
        description: "The wheel is crafted from high-quality, premium 430 stainless steel. The built-in finger guard protects your hands from both the blade and the heat. Dishwasher safe.",
        imageUrl: "https://m.media-amazon.com/images/I/61zsVzkFqAL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KE113OHOBA-Classic-Pizza-Wheel/dp/B07YP2VL68?&linkCode=ll1&tag=lahcenaitbens-20&linkId=fc46cb37e734eb02bfc81263042ad2d5&language=en_US&ref_=as_li_ss_tl",
        price: "$15.99",
        rating: {
            value: 4.7,
            count: 30714
        },
        pros: [
            "Very affordable at under $16",
            "Sharp stainless steel blade",
            "Built-in finger guard for safety",
            "Dishwasher safe",
            "Protective blade guard included"
        ],
        cons: [
            "Blade can dull over time",
            "Not suitable for very thick crusts",
            "Basic design"
        ],
        bestFor: "Cutting pizzas, flatbreads, and quesadillas",
        features: [
            "430 stainless steel blade",
            "Finger guard",
            "Blade guard",
            "Hanging loop"
        ]
    },
    {
        id: "ka-pot-holders",
        name: "KitchenAid Ribbed Soft Silicone Pot Holder 2-Pack - Milkshake Tan",
        shortName: "Silicone Pot Holders",
        description: "Heat resistant up to 500 degrees Fahrenheit. Waterproof and slip-resistant with a textured, ribbed stripe design. Includes two generously sized pot holders with hanging loops.",
        imageUrl: "https://m.media-amazon.com/images/I/71F8K275EUL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-Kitchen-Ribbed-Silicone-Milkshake/dp/B08J8H7BQG?&linkCode=ll1&tag=lahcenaitbens-20&linkId=6273f0a9b3c2cfff51410525d39635de&language=en_US&ref_=as_li_ss_tl",
        price: "$10.95",
        rating: {
            value: 4.7,
            count: 8691
        },
        pros: [
            "Heat-resistant up to 500°F",
            "Waterproof and easy to clean",
            "Slip-resistant ribbed design",
            "Dishwasher safe",
            "Great value for 2-pack"
        ],
        cons: [
            "Can stain from certain foods",
            "Not as flexible as fabric pot holders",
            "May retain odors"
        ],
        bestFor: "Handling hot pots, pans, and baking dishes",
        features: [
            "Set of 2 pot holders",
            "Silicone construction",
            "7\" x 9\" size",
            "Hanging loops"
        ]
    },
    {
        id: "ka-kitchen-shears",
        name: "KitchenAid All Purpose Kitchen Shears with Protective Sheath - Black",
        shortName: "Kitchen Shears",
        description: "Premium stainless steel blades built to resist rust and maintain sharpness, these stainless steel blades easily cut through everyday kitchen items. Dishwasher safe for easy cleaning.",
        imageUrl: "https://m.media-amazon.com/images/I/51Byq+vTy1L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-Protective-Dishwasher-Stainless-8-72-Inch/dp/B07PZF3QS3?&linkCode=ll1&tag=lahcenaitbens-20&linkId=9ba4891a46d1bbfef7b13517e1d79d86&language=en_US&ref_=as_li_ss_tl",
        price: "$7.99",
        rating: {
            value: 4.8,
            count: 64238
        },
        pros: [
            "Incredibly affordable at under $8",
            "Premium stainless steel blades",
            "Soft grip handles for comfort",
            "Dishwasher safe",
            "Protective sheath included"
        ],
        cons: [
            "Not suitable for heavy-duty cutting",
            "May loosen over time with heavy use",
            "Basic design"
        ],
        bestFor: "Everyday kitchen tasks like cutting herbs, opening packages, and trimming",
        features: [
            "8.72-inch length",
            "Stainless steel blades",
            "Soft grip handles",
            "Protective sheath"
        ]
    },
    {
        id: "ka-dish-rack",
        name: "KitchenAid Large Capacity Full Size Dish Rack - Light Grey",
        shortName: "Dish Rack",
        description: "Spacious design for large loads: This full size dish rack offers ample space for plates, mugs, glasses, bowls, utensils. Removable flatware caddy with adjustable compartments.",
        imageUrl: "https://m.media-amazon.com/images/I/51jOKDWEfWL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KNS896BXGRA-Full-Size-Light/dp/B078JXFBDP?&linkCode=ll1&tag=lahcenaitbens-20&linkId=0284fa8cc26049b0dd5e592f3cf1e91f&language=en_US&ref_=as_li_ss_tl",
        price: "$79.99",
        rating: {
            value: 4.5,
            count: 25273
        },
        pros: [
            "Large capacity for full loads",
            "Angled drain board directs water",
            "Removable flatware caddy",
            "Rust-resistant construction",
            "Modern design"
        ],
        cons: [
            "Takes up significant counter space",
            "Drain board can be difficult to clean",
            "Not collapsible for storage"
        ],
        bestFor: "Kitchens without dishwashers or for air-drying delicate items",
        features: [
            "Full-size capacity",
            "Angled drain board",
            "Removable caddy",
            "Rust-resistant"
        ]
    },
    {
        id: "ka-meat-tenderizer",
        name: "KitchenAid Gourmet Multi Sided Meat Tenderizer - Black",
        shortName: "Meat Tenderizer",
        description: "Textured surface: One of the sides surface is textured for optimum use on a variety of meats. Aluminum construction provides a lightweight, strong and durable tool.",
        imageUrl: "https://m.media-amazon.com/images/I/61wKT9uuRJL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KO119OHOBA-Gourmet-Tenderizer-9-45-Inch/dp/B07Q2WVG1Z?&linkCode=ll1&tag=lahcenaitbens-20&linkId=6be7e10c557ae3ef7c21319531f7b230&language=en_US&ref_=as_li_ss_tl",
        price: "$12.99",
        rating: {
            value: 4.8,
            count: 27769
        },
        pros: [
            "Affordable at under $13",
            "Multi-sided design for different uses",
            "Lightweight aluminum construction",
            "Easy to clean",
            "Hanging hole for storage"
        ],
        cons: [
            "Hand wash only",
            "Can be loud when tenderizing",
            "Basic design"
        ],
        bestFor: "Tenderizing meats, crushing nuts, and cracking shellfish",
        features: [
            "Textured surface",
            "Aluminum construction",
            "9.45-inch length",
            "Hanging hole"
        ]
    },
    {
        id: "ka-bowl-scraper",
        name: "KitchenAid Gourmet Bowl Scraper Set of 2 - Aqua Sky and Storm Grey",
        shortName: "Bowl Scrapers",
        description: "Flexible silicone bowl scraper conforms to the inside of the bowl for maximum results. Sturdy nylon pot scraper can scrape sticky sauces.",
        imageUrl: "https://m.media-amazon.com/images/I/71UgeamoHOL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KO068OHAQA-Gourmet-Bowl-Scraper/dp/B07TJJTHXX?&linkCode=ll1&tag=lahcenaitbens-20&linkId=760f6089e669f61541a261d741bd8ec4&language=en_US&ref_=as_li_ss_tl",
        price: "$12.99",
        rating: {
            value: 4.7,
            count: 5309
        },
        pros: [
            "Set of 2 for versatility",
            "Flexible silicone conforms to bowls",
            "Sturdy nylon for tough jobs",
            "Dishwasher safe",
            "Affordable"
        ],
        cons: [
            "Can stain from certain foods",
            "Silicone may wear over time",
            "Small size"
        ],
        bestFor: "Scraping bowls clean, folding ingredients, and removing sticky sauces",
        features: [
            "Set of 2 scrapers",
            "Silicone and nylon",
            "Dishwasher safe",
            "BPA-free"
        ]
    },

    // FOOD PROCESSORS & CHOPPERS
    {
        id: "ka-food-chopper-3.5cup",
        name: "KitchenAid KFC3516ER 3.5 Cup Food Chopper, Empire Red",
        shortName: "3.5-Cup Food Chopper - Red",
        description: "Compact and powerful 3.5-cup food chopper perfect for small prep tasks. One-touch operation makes chopping nuts, herbs, vegetables, and more quick and easy.",
        imageUrl: "https://m.media-amazon.com/images/I/6186h7rqz0L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KFC3516ER-Food-Chopper-Empire/dp/B01LZIHVTC?&linkCode=ll1&tag=lahcenaitbens-20&linkId=b3e1caba10c181942c6267844eb3608f&language=en_US&ref_=as_li_ss_tl",
        price: "$52.99",
        rating: {
            value: 4.6,
            count: 28811
        },
        pros: [
            "Over 28,000 verified reviews with 4.6 stars",
            "One-touch pulse operation for easy control",
            "Compact size perfect for small kitchens",
            "Dishwasher-safe bowl and blade",
            "Great for chopping nuts for baking"
        ],
        cons: [
            "Small 3.5-cup capacity",
            "Not suitable for large batches",
            "Single speed only"
        ],
        bestFor: "Bakers who need quick chopping for nuts, chocolate, and small ingredient prep",
        features: [
            "3.5-cup capacity",
            "240-watt motor",
            "One-touch operation",
            "Dishwasher safe"
        ]
    },
    {
        id: "ka-food-chopper-5cup",
        name: "KitchenAid 5 Cup Food Chopper, Matte Black",
        shortName: "5-Cup Food Chopper - Black",
        description: "Larger 5-cup capacity with whisking accessory included. Perfect for chopping, pureeing, and whisking ingredients for baking and cooking.",
        imageUrl: "https://m.media-amazon.com/images/I/81QmO1leFVL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KFC0516BM-Whisking-Accessory-Chopper/dp/B07HB1V27D?&linkCode=ll1&tag=lahcenaitbens-20&linkId=40728e37258f38465a931d04491ce10d&language=en_US&ref_=as_li_ss_tl",
        price: "$64.95",
        rating: {
            value: 4.5,
            count: 5119
        },
        pros: [
            "Includes whisking accessory for whipped cream",
            "5-cup capacity handles more ingredients",
            "Two-speed control for precision",
            "Sleek matte black finish",
            "Pour spout for easy transfer"
        ],
        cons: [
            "More expensive than 3.5-cup model",
            "Larger footprint",
            "Whisking attachment sold separately on some models"
        ],
        bestFor: "Bakers who want versatility for both chopping and whisking tasks",
        features: [
            "5-cup capacity",
            "Two speeds",
            "Whisking accessory",
            "Pour spout"
        ]
    },
    {
        id: "ka-food-processor-7cup",
        name: "KitchenAid 7-Cup Food Processor",
        shortName: "7-Cup Food Processor",
        description: "Mid-size food processor with ExactSlice system for precise slicing. Perfect for bakers who need consistent cuts for fruit tarts and vegetable prep.",
        imageUrl: "https://m.media-amazon.com/images/I/71smbtryUfL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KFP0718CU-7-Cup-Processor-Puree/dp/B07BVYPDJ4?&linkCode=ll1&tag=lahcenaitbens-20&linkId=dbec7cfaebf924fcbd0bd317809c6cfa&language=en_US&ref_=as_li_ss_tl",
        price: "$109.95",
        rating: {
            value: 4.4,
            count: 9760
        },
        pros: [
            "ExactSlice system for consistent thickness",
            "7-cup capacity perfect for most recipes",
            "Multiple disc options included",
            "Compact design saves counter space",
            "Easy-press paddle for one-handed operation"
        ],
        cons: [
            "Smaller than professional models",
            "Feed tube could be wider",
            "Not ideal for heavy dough"
        ],
        bestFor: "Home bakers who need precise slicing for fruit tarts and vegetable prep",
        features: [
            "7-cup work bowl",
            "ExactSlice system",
            "3-in-1 feed tube",
            "Dishwasher safe"
        ]
    },
    {
        id: "ka-food-processor-11cup",
        name: "KitchenAid 11-Cup Food Processor with ExactSlice",
        shortName: "11-Cup Food Processor",
        description: "Professional-grade 11-cup food processor with adjustable slicing disc. Ideal for serious bakers who process large quantities of ingredients.",
        imageUrl: "https://m.media-amazon.com/images/I/71CQpNA+qhL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KFP1133CU-11-Cup-Processor-ExactSlice/dp/B00LE97PUO?&linkCode=ll1&tag=lahcenaitbens-20&linkId=f81633730eaf6b8154bb0a0b9d10bce3&language=en_US&ref_=as_li_ss_tl",
        price: "$199.87",
        rating: {
            value: 4.4,
            count: 9760
        },
        pros: [
            "Large 11-cup capacity for big batches",
            "ExactSlice system with adjustable thickness",
            "Powerful motor handles tough ingredients",
            "External lever for easy operation",
            "Multiple discs and blades included"
        ],
        cons: [
            "Large footprint requires storage space",
            "Higher price point",
            "Heavy unit"
        ],
        bestFor: "Professional bakers and serious home cooks processing large quantities",
        features: [
            "11-cup work bowl",
            "ExactSlice adjustable disc",
            "External lever",
            "Multiple accessories"
        ]
    },
    {
        id: "ka-food-processor-13cup",
        name: "KitchenAid 13-Cup Food Processor",
        shortName: "13-Cup Food Processor",
        description: "The largest KitchenAid food processor with 13-cup capacity. Commercial-grade performance for bakeries and serious home bakers.",
        imageUrl: "https://m.media-amazon.com/images/I/7179+5MT4OL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KitchenAid-KFP1318CU-13-Cup-Food-Processor/dp/B09125C94F?&linkCode=ll1&tag=lahcenaitbens-20&linkId=052f8cbbc9a549afb10ae591303ecc1e&language=en_US&ref_=as_li_ss_tl",
        price: "$229.95",
        rating: {
            value: 4.4,
            count: 9760
        },
        pros: [
            "Massive 13-cup capacity for commercial use",
            "Powerful motor for continuous processing",
            "Multiple speed options",
            "Durable commercial-grade construction",
            "Includes comprehensive accessory set"
        ],
        cons: [
            "Very large and heavy",
            "Premium price",
            "Requires significant storage space"
        ],
        bestFor: "Small bakeries and home bakers who process ingredients in bulk",
        features: [
            "13-cup work bowl",
            "Commercial motor",
            "Multiple speeds",
            "Full accessory set"
        ]
    },

    // STAND MIXER ATTACHMENTS
    {
        id: "ka-wire-whip-attachment",
        name: "K45WW Wire Whip Attachment for KitchenAid Tilt-Head Stand Mixer",
        shortName: "Wire Whip Attachment",
        description: "Stainless steel wire whip attachment perfect for whipping egg whites, cream, and light batters. Essential for meringues and angel food cakes.",
        imageUrl: "https://m.media-amazon.com/images/I/61-NmUn-K9L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/KITCHPOWER-Attachment-KitchenAid-Kitchenaid-Assecories/dp/B071P6N24X?&linkCode=ll1&tag=lahcenaitbens-20&linkId=9096ecef977530411069565deff85b9f&language=en_US&ref_=as_li_ss_tl",
        price: "$11.87",
        rating: {
            value: 4.5,
            count: 7634
        },
        pros: [
            "Incredibly affordable at under $12",
            "Over 7,600 verified reviews",
            "Stainless steel construction",
            "Perfect for whipping egg whites to stiff peaks",
            "Compatible with all tilt-head mixers"
        ],
        cons: [
            "Third-party brand (not official KitchenAid)",
            "May not fit bowl-lift models",
            "Thinner wires than original"
        ],
        bestFor: "Budget-conscious bakers who need a replacement whip for meringues and whipped cream",
        features: [
            "Stainless steel wires",
            "Tilt-head compatible",
            "Dishwasher safe",
            "6-wire design"
        ]
    },
    {
        id: "ka-bowl-lift-whisk",
        name: "K5A Stainless Steel Whisk for KitchenAid 5Qt Bowl-Lift Stand Mixer",
        shortName: "Bowl-Lift Whisk",
        description: "Heavy-duty 6-wire whisk designed specifically for bowl-lift stand mixers. Professional-grade stainless steel construction.",
        imageUrl: "https://m.media-amazon.com/images/I/61dEiR7qI3L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/K5A-Stainless-KitchenAid-Bowl-Lift-Dishwasher/dp/B0CH9HZ3M4?&linkCode=ll1&tag=lahcenaitbens-20&linkId=100719b656d196d39d7ad411d2ab2fb3&language=en_US&ref_=as_li_ss_tl",
        price: "$20.39",
        rating: {
            value: 4.5,
            count: 964
        },
        pros: [
            "Designed for bowl-lift models",
            "18/8 stainless steel construction",
            "Heavy-duty for commercial use",
            "Dishwasher safe",
            "Great value for quality"
        ],
        cons: [
            "Only fits bowl-lift models",
            "Third-party brand",
            "Limited color options"
        ],
        bestFor: "Professional bakers with bowl-lift mixers who need a durable whisk",
        features: [
            "6-wire design",
            "18/8 stainless steel",
            "Bowl-lift compatible",
            "Commercial grade"
        ]
    },
    {
        id: "ka-pasta-maker-attachment",
        name: "Pasta Maker Attachments Set for KitchenAid Stand Mixer",
        shortName: "Pasta Maker Set",
        description: "Complete 3-piece pasta attachment set including roller, spaghetti cutter, and fettuccine cutter. Turn your stand mixer into a pasta-making machine.",
        imageUrl: "https://m.media-amazon.com/images/I/71fwJmeaWML._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Attachments-KitchenAid-including-Spaghetti-Fettuccine/dp/B07YBWJPY8?&linkCode=ll1&tag=lahcenaitbens-20&linkId=ada824d220e4a3eb0d611a0e63e52e78&language=en_US&ref_=as_li_ss_tl",
        price: "$87.99",
        rating: {
            value: 4.6,
            count: 2670
        },
        pros: [
            "Complete 3-piece set",
            "Makes fresh pasta at home",
            "Adjustable thickness settings",
            "Compatible with all KitchenAid mixers",
            "Excellent reviews from 2,600+ users"
        ],
        cons: [
            "Requires practice to master",
            "Needs hand-cranking while mixer runs",
            "Can be messy with flour"
        ],
        bestFor: "Bakers who want to expand into fresh pasta making",
        features: [
            "Pasta sheet roller",
            "Spaghetti cutter",
            "Fettuccine cutter",
            "Adjustable thickness"
        ]
    },
    {
        id: "ka-slicer-shredder-attachment",
        name: "Slicer Shredder Attachments for KitchenAid Stand Mixer",
        shortName: "Slicer/Shredder Set",
        description: "Versatile slicer and shredder attachment with 3 blades for vegetables, cheese, and more. Perfect for prepping ingredients for baking and cooking.",
        imageUrl: "https://m.media-amazon.com/images/I/612GRQcwhOL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Attachment-KitchenAid-Vegetable-Accessories-InnoMoon/dp/B07RKTS949?&linkCode=ll1&tag=lahcenaitbens-20&linkId=40dd4de35bf2b927e569102d6372c42b&language=en_US&ref_=as_li_ss_tl",
        price: "$28.99",
        rating: {
            value: 4.4,
            count: 3500
        },
        pros: [
            "3 blades for different cuts",
            "Affordable price point",
            "Saves time on vegetable prep",
            "Easy to attach and use",
            "Great for shredding cheese"
        ],
        cons: [
            "Plastic construction",
            "Not as durable as metal",
            "Can clog with soft vegetables"
        ],
        bestFor: "Bakers who need quick vegetable slicing for savory bakes and quiches",
        features: [
            "3 cutting blades",
            "Slicer and shredder",
            "Dishwasher safe",
            "Universal fit"
        ]
    },
    {
        id: "ka-meat-grinder-attachment",
        name: "Metal Food Grinder Attachments for KitchenAid Stand Mixers",
        shortName: "Meat Grinder",
        description: "Professional metal food grinder and sausage stuffer attachment. Perfect for grinding nuts, making fresh sausages, and processing ingredients.",
        imageUrl: "https://m.media-amazon.com/images/I/8142SWblN-L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Grinder-Attachments-KitchenAid-Attachment-Compatible/dp/B07RWYW74H?&linkCode=ll1&tag=lahcenaitbens-20&linkId=5c5f40c1da547cd4ac9808f882913996&language=en_US&ref_=as_li_ss_tl",
        price: "$28.49",
        rating: {
            value: 4.4,
            count: 5000
        },
        pros: [
            "All-metal construction",
            "Includes sausage stuffer tubes",
            "Great for grinding nuts for baking",
            "Affordable price",
            "Easy to clean"
        ],
        cons: [
            "Requires some assembly",
            "Can be messy",
            "Not dishwasher safe"
        ],
        bestFor: "Bakers who want to grind fresh nuts and make custom nut butters",
        features: [
            "Metal construction",
            "Grinding plates included",
            "Sausage stuffer tubes",
            "Universal fit"
        ]
    },

    // COMPETITOR FOOD PROCESSORS
    {
        id: "cuisinart-11cup-processor",
        name: "Cuisinart Pro Custom 11 Cup Food Processor, Brushed Chrome",
        shortName: "Cuisinart 11-Cup",
        description: "Professional-grade Cuisinart food processor with 11-cup capacity. A popular alternative to KitchenAid with excellent performance.",
        imageUrl: "https://m.media-amazon.com/images/I/71+hX4mXEIL._AC_SY879_.jpg",
        amazonUrl: "https://www.amazon.com/Cuisinart-DLC-8SBCY-Custom-Processor-Brushed/dp/B01AXM4VPY?&linkCode=ll1&tag=lahcenaitbens-20&linkId=478793ef6d912fbf149107c2be253178&language=en_US&ref_=as_li_ss_tl",
        price: "$149.98",
        rating: {
            value: 4.4,
            count: 12000
        },
        pros: [
            "Excellent value for 11-cup capacity",
            "Powerful 625-watt motor",
            "Includes multiple discs and blades",
            "Trusted Cuisinart brand",
            "Great for bread dough"
        ],
        cons: [
            "Bulky design",
            "Louder than some competitors",
            "Feed tube could be larger"
        ],
        bestFor: "Budget-conscious bakers who want professional capacity without premium price",
        features: [
            "11-cup work bowl",
            "625-watt motor",
            "Stainless steel blade",
            "Multiple accessories"
        ]
    },
    {
        id: "cuisinart-14cup-processor",
        name: "Cuisinart 14-Cup Food Processor, Stainless Steel",
        shortName: "Cuisinart 14-Cup",
        description: "Extra-large 14-cup Cuisinart processor with 720-watt motor. Perfect for commercial baking and large-batch processing.",
        imageUrl: "https://m.media-amazon.com/images/I/71ktQE8jAhL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Cuisinart-DFP-14BCNY-Processor-Brushed-Stainless/dp/B01AXM4WV2?&linkCode=ll1&tag=lahcenaitbens-20&linkId=c7afad378abbcabe43761a27fb50b469&language=en_US&ref_=as_li_ss_tl",
        price: "$299.12",
        rating: {
            value: 4.5,
            count: 15000
        },
        pros: [
            "Massive 14-cup capacity",
            "Powerful 720-watt motor",
            "Commercial-grade performance",
            "Excellent for kneading dough",
            "Highly rated by professionals"
        ],
        cons: [
            "Very large and heavy",
            "Premium price",
            "Takes up significant counter space"
        ],
        bestFor: "Professional bakers and small bakeries needing commercial capacity",
        features: [
            "14-cup work bowl",
            "720-watt motor",
            "Dough blade included",
            "Stainless steel"
        ]
    },
    {
        id: "cuisinart-4cup-chopper",
        name: "Cuisinart Elemental 4-Cup Chopper Grinder, Silver",
        shortName: "Cuisinart 4-Cup Chopper",
        description: "Compact 4-cup chopper perfect for small tasks. Great budget alternative to KitchenAid choppers.",
        imageUrl: "https://m.media-amazon.com/images/I/71H2O6W8-XL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Cuisinart-ECH-4SV-Elemental-Chopper-Grinder/dp/B074MQFR55?&linkCode=ll1&tag=lahcenaitbens-20&linkId=5e5b57d4eb3c77bea2d28070cf7d2335&language=en_US&ref_=as_li_ss_tl",
        price: "$34.96",
        rating: {
            value: 4.3,
            count: 4123
        },
        pros: [
            "Very affordable",
            "Compact size",
            "Touchpad controls",
            "Auto-reversing blade",
            "Easy to clean"
        ],
        cons: [
            "Small 4-cup capacity",
            "Less powerful motor",
            "Plastic construction"
        ],
        bestFor: "Budget-conscious bakers who need basic chopping for small batches",
        features: [
            "4-cup bowl",
            "Touchpad controls",
            "Auto-reversing blade",
            "Dishwasher safe"
        ]
    },
    {
        id: "cuisinart-mini-prep",
        name: "Cuisinart Mini-Prep Plus Food Processor, 24-Ounce",
        shortName: "Cuisinart Mini-Prep",
        description: "Ultra-compact 24-ounce mini processor for quick chopping tasks. Perfect for herbs, nuts, and small ingredient prep.",
        imageUrl: "https://m.media-amazon.com/images/I/61w9ghZg2sL._AC_SY879_.jpg",
        amazonUrl: "https://www.amazon.com/Cuisinart-DLC-2ABC-Processor-Brushed-Chrome/dp/B0000645YM?&linkCode=ll1&tag=lahcenaitbens-20&linkId=1d6d959434a4fa05bf32af7ba9cffdda&language=en_US&ref_=as_li_ss_tl",
        price: "$44.95",
        rating: {
            value: 4.6,
            count: 25000
        },
        pros: [
            "Over 25,000 reviews!",
            "Perfect size for herbs and nuts",
            "Reversible blade",
            "Very affordable",
            "Takes minimal storage space"
        ],
        cons: [
            "Tiny 24-ounce capacity",
            "Not suitable for large batches",
            "Basic features only"
        ],
        bestFor: "Bakers who need quick chopping for nuts, chocolate, and herbs",
        features: [
            "24-ounce capacity",
            "Reversible blade",
            "Two speeds",
            "Compact design"
        ]
    },
    {
        id: "hamilton-beach-10cup",
        name: "Hamilton Beach 10-Cup Food Processor & Vegetable Chopper",
        shortName: "Hamilton Beach 10-Cup",
        description: "Affordable 10-cup food processor with bowl scraper. Excellent budget option with great reviews.",
        imageUrl: "https://m.media-amazon.com/images/I/71YyM9lS8LL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Hamilton-Beach-70730-Processor-Vegetable/dp/B008J8MJIQ?&linkCode=ll1&tag=lahcenaitbens-20&linkId=5c8c027e8845301dfd77a73d4f7b8103&language=en_US&ref_=as_li_ss_tl",
        price: "$54.95",
        rating: {
            value: 4.5,
            count: 42835
        },
        pros: [
            "Over 42,000 verified reviews!",
            "Incredible value at $54.95",
            "10-cup capacity",
            "Built-in bowl scraper",
            "Multiple speed options"
        ],
        cons: [
            "Plastic construction",
            "Less durable than metal",
            "Louder operation"
        ],
        bestFor: "Budget bakers who need large capacity without breaking the bank",
        features: [
            "10-cup bowl",
            "Bowl scraper",
            "Multiple speeds",
            "Dishwasher safe"
        ]
    },
    {
        id: "hamilton-beach-spiralizer",
        name: "Hamilton Beach 10-Cup Food Processor with Veggie Spiralizer",
        shortName: "Hamilton Beach Spiralizer",
        description: "Unique food processor with built-in spiralizer for making vegetable noodles. Great for creative bakers.",
        imageUrl: "https://m.media-amazon.com/images/I/71nF7VeVNiL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Hamilton-Beach-Processor-Vegetable-Shredding/dp/B08MB664XB?&linkCode=ll1&tag=lahcenaitbens-20&linkId=73660fa5d8357a085e8a3286f7df17ac&language=en_US&ref_=as_li_ss_tl",
        price: "$88.99",
        rating: {
            value: 4.5,
            count: 8000
        },
        pros: [
            "Includes spiralizer attachment",
            "10-cup capacity",
            "Makes zoodles and ribbons",
            "Great for creative presentations",
            "Affordable for features included"
        ],
        cons: [
            "Spiralizer takes practice",
            "More parts to clean",
            "Bulkier than standard models"
        ],
        bestFor: "Creative bakers who want spiralizer functionality for decorative elements",
        features: [
            "10-cup bowl",
            "Spiralizer attachment",
            "Multiple blades",
            "Dishwasher safe"
        ]
    },
    {
        id: "hamilton-beach-3cup",
        name: "Hamilton Beach Electric 3-Cup Vegetable Chopper & Mini Food Processor",
        shortName: "Hamilton Beach 3-Cup",
        description: "Budget-friendly 3-cup mini processor. Best value for basic chopping needs.",
        imageUrl: "https://m.media-amazon.com/images/I/71yhvgRx6HL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Hamilton-Beach-72850-Processor-Electric/dp/B06Y2GZWCJ?&linkCode=ll1&tag=lahcenaitbens-20&linkId=a1a543e029ee3af6217ba54aa06d1eda&language=en_US&ref_=as_li_ss_tl",
        price: "$24.95",
        rating: {
            value: 4.6,
            count: 35000
        },
        pros: [
            "Incredibly affordable at $24.95",
            "Over 35,000 reviews with 4.6 stars",
            "Perfect for small tasks",
            "350-watt motor",
            "Easy to clean"
        ],
        cons: [
            "Very small 3-cup capacity",
            "Basic features only",
            "Not for heavy-duty use"
        ],
        bestFor: "Budget bakers who need occasional chopping for nuts and herbs",
        features: [
            "3-cup capacity",
            "350-watt motor",
            "One-touch operation",
            "Compact design"
        ]
    },
    {
        id: "ninja-12cup-processor",
        name: "Ninja Professional XL 12-Cup Food Processor, 1200 Peak-Watts",
        shortName: "Ninja 12-Cup",
        description: "Powerful Ninja food processor with 1200-watt motor. 4-in-1 functionality for chopping, slicing, shredding, and dough.",
        imageUrl: "https://m.media-amazon.com/images/I/71W-dg3ABgL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Ninja-NF701-Professional-Processor-Peak-Wattage/dp/B09SBSGLSS?&linkCode=ll1&tag=lahcenaitbens-20&linkId=543a54b1571df446c3052464306a3eb4&language=en_US&ref_=as_li_ss_tl",
        price: "$199.99",
        rating: {
            value: 4.6,
            count: 8500
        },
        pros: [
            "Extremely powerful 1200-watt motor",
            "12-cup capacity",
            "4-in-1 functionality",
            "Feed chute and pusher included",
            "Great for bread dough"
        ],
        cons: [
            "Large and heavy",
            "Can be loud",
            "Premium price"
        ],
        bestFor: "Power users who need maximum motor strength for tough ingredients",
        features: [
            "12-cup bowl",
            "1200-watt motor",
            "2 blades, 2 discs",
            "Feed chute"
        ]
    },
    {
        id: "black-decker-8cup",
        name: "BLACK+DECKER 3-in-1 Easy Assembly 8-Cup Food Processor",
        shortName: "BLACK+DECKER 8-Cup",
        description: "Easy-to-assemble 8-cup processor with touchpad controls. Great budget option with modern features.",
        imageUrl: "https://m.media-amazon.com/images/I/71I8TacwpuL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/BLACK-DECKER-Mutlifunctional-Dishwasher-FP4200BC/dp/B09X278W9V?&linkCode=ll1&tag=lahcenaitbens-20&linkId=0e95468fefb8cafd1c86f5703d6c0c3c&language=en_US&ref_=as_li_ss_tl",
        price: "$51.99",
        rating: {
            value: 4.4,
            count: 3200
        },
        pros: [
            "Very affordable",
            "Easy 3-step assembly",
            "Touchpad controls",
            "8-cup capacity",
            "Dishwasher safe"
        ],
        cons: [
            "Plastic construction",
            "Less powerful motor",
            "Newer brand in market"
        ],
        bestFor: "Budget bakers who want modern features at an affordable price",
        features: [
            "8-cup capacity",
            "Touchpad controls",
            "S-blade included",
            "Easy assembly"
        ]
    }
];
