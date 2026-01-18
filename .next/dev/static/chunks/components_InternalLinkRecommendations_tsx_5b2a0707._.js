(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/InternalLinkRecommendations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalLinkRecommendations",
    ()=>InternalLinkRecommendations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogPosts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/blogPosts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$affiliateProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/affiliateProducts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Available tools list
const availableTools = [
    {
        slug: 'cake-pricing-calculator',
        title: 'Cake Pricing Calculator',
        icon: '🎂'
    },
    {
        slug: 'recipe-scaler',
        title: 'Recipe Scaler',
        icon: '📏'
    },
    {
        slug: 'bakers-percentage',
        title: "Baker's Percentage",
        icon: '📊'
    },
    {
        slug: 'measurement-converter',
        title: 'Measurement Converter',
        icon: '⚖️'
    },
    {
        slug: 'dough-hydration-calculator',
        title: 'Dough Hydration Calculator',
        icon: '💧'
    },
    {
        slug: 'baking-pan-converter',
        title: 'Baking Pan Converter',
        icon: '🍰'
    },
    {
        slug: 'oven-temperature-converter',
        title: 'Oven Temperature Converter',
        icon: '🌡️'
    },
    {
        slug: 'sweetener-converter',
        title: 'Sweetener Converter',
        icon: '🍯'
    },
    {
        slug: 'yeast-converter',
        title: 'Yeast Converter',
        icon: '🍞'
    },
    {
        slug: 'ganache-calculator',
        title: 'Ganache Calculator',
        icon: '🍫'
    },
    {
        slug: 'buttercream-calculator',
        title: 'Buttercream Calculator',
        icon: '🧁'
    },
    {
        slug: 'fondant-calculator',
        title: 'Fondant Calculator',
        icon: '🎨'
    },
    {
        slug: 'cost-per-recipe-calculator',
        title: 'Cost Per Recipe',
        icon: '💰'
    },
    {
        slug: 'investment-calculator',
        title: 'Investment Calculator',
        icon: '📈'
    },
    {
        slug: 'mortgage-calculator',
        title: 'Mortgage Calculator',
        icon: '🏠'
    },
    {
        slug: 'calorie-calculator',
        title: 'Calorie Calculator',
        icon: '🥗'
    },
    {
        slug: 'bmi-calculator',
        title: 'BMI Calculator',
        icon: '⚕️'
    },
    {
        slug: 'ingredient-glossary',
        title: 'Ingredient Glossary',
        icon: '📖'
    },
    {
        slug: 'allergen-guide',
        title: 'Allergen Guide',
        icon: '⚠️'
    },
    {
        slug: 'flavor-pairing-guide',
        title: 'Flavor Pairing Guide',
        icon: '🎭'
    }
];
// Utility function to get random items from array
function getRandomItems(array, count) {
    const shuffled = [
        ...array
    ].sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
}
function InternalLinkRecommendations() {
    _s();
    const [recommendations, setRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tools: [],
        products: [],
        articles: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternalLinkRecommendations.useEffect": ()=>{
            // Generate random recommendations on client side
            setRecommendations({
                tools: getRandomItems(availableTools, 5),
                products: getRandomItems(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$affiliateProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["affiliateProducts"], 5),
                articles: getRandomItems(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogPosts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"], 5)
            });
        }
    }["InternalLinkRecommendations.useEffect"], []);
    // Don't render until we have recommendations (avoid hydration mismatch)
    if (recommendations.tools.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-brand-cream via-white to-brand-pink/10 py-12 px-4 sm:px-6 lg:px-8 mt-12 border-t-2 border-brand-gold/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-serif font-bold text-brand-brown text-center mb-8",
                    children: "You Might Also Like"
                }, void 0, false, {
                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-serif font-semibold text-brand-brown mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-gold",
                                    children: "🛠️"
                                }, void 0, false, {
                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this),
                                "Recommended Tools"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4",
                            children: recommendations.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/tools/${tool.slug}`,
                                    className: "group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-brand-gold/20 hover:border-brand-gold hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl mb-2 text-center",
                                            children: tool.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                            lineNumber: 83,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-brand-brown text-center group-hover:text-brand-gold transition-colors",
                                            children: tool.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, tool.slug, true, {
                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-serif font-semibold text-brand-brown mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-gold",
                                    children: "🛍️"
                                }, void 0, false, {
                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                "Featured Products"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4",
                            children: recommendations.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/products/${product.slug}`,
                                    className: "group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-gold/20 hover:border-brand-gold hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square relative overflow-hidden bg-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.imageUrl,
                                                alt: product.imageAlt || product.name,
                                                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                lineNumber: 106,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-semibold text-brand-brown line-clamp-2 group-hover:text-brand-gold transition-colors",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 37
                                                }, this),
                                                product.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-500 text-xs",
                                                            children: "★"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-600",
                                                            children: product.rating
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, product.slug, true, {
                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-serif font-semibold text-brand-brown mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-gold",
                                    children: "📝"
                                }, void 0, false, {
                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this),
                                "Popular Articles"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4",
                            children: recommendations.articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${article.slug}`,
                                    className: "group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-gold/20 hover:border-brand-gold hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video relative overflow-hidden bg-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: article.imageUrl,
                                                alt: article.title,
                                                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                lineNumber: 142,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                            lineNumber: 141,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-semibold text-brand-brown line-clamp-2 group-hover:text-brand-gold transition-colors mb-1",
                                                    children: article.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 line-clamp-2",
                                                    children: article.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-2 text-xs text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: article.readTime
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: article.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, article.slug, true, {
                                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                                    lineNumber: 136,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/InternalLinkRecommendations.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/InternalLinkRecommendations.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/InternalLinkRecommendations.tsx",
            lineNumber: 65,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/InternalLinkRecommendations.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_s(InternalLinkRecommendations, "rolwC5LTt9EgZvRhh0uE072ud+g=");
_c = InternalLinkRecommendations;
var _c;
__turbopack_context__.k.register(_c, "InternalLinkRecommendations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/InternalLinkRecommendations.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/InternalLinkRecommendations.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_InternalLinkRecommendations_tsx_5b2a0707._.js.map