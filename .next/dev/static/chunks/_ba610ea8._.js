(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/toolSuggestions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toolSuggestions",
    ()=>toolSuggestions
]);
const toolSuggestions = [
    {
        id: 'stand-mixer',
        name: 'Artisan Stand Mixer',
        category: 'Equipment',
        priceRange: '$$$',
        description: 'The workhorse of any serious baker\'s kitchen. Perfect for meringues, breads, and batters.',
        imageUrl: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=600&q=80',
        reviewSlug: 'best-stand-mixers-2025'
    },
    {
        id: 'digital-scale',
        name: 'Precision Digital Scale',
        category: 'Essentials',
        priceRange: '$',
        description: 'Baking is a science. Measure by weight, not volume, for consistent results every time.',
        imageUrl: 'https://images.unsplash.com/photo-1615352673264-154942918417?auto=format&fit=crop&w=600&q=80',
        reviewSlug: 'why-you-need-a-kitchen-scale'
    },
    {
        id: 'piping-set',
        name: 'Professional Piping Set',
        category: 'Gadgets',
        priceRange: '$$',
        description: 'Create beautiful swirls, flowers, and borders with a comprehensive set of stainless steel tips.',
        imageUrl: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80',
        reviewSlug: 'essential-piping-tips-for-beginners'
    },
    {
        id: 'silicone-mats',
        name: 'Silicone Baking Mats',
        category: 'Essentials',
        priceRange: '$',
        description: 'Reusable, non-stick, and eco-friendly. Say goodbye to scrubbing burnt sugar off your pans.',
        imageUrl: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&fit=crop&w=600&q=80',
        reviewSlug: 'silicone-baking-mats-vs-parchment-paper'
    },
    {
        id: 'oven-thermometer',
        name: 'Oven Thermometer',
        category: 'Essentials',
        priceRange: '$',
        description: 'Your oven dial is lying to you. Ensure accurate temperatures for perfect bakes.',
        imageUrl: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        reviewSlug: 'why-oven-temperature-matters'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ToolCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const ToolCard = ({ tool })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 w-full bg-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: tool.imageUrl,
                        alt: tool.name,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/ToolCard.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-brand-text-title shadow-sm",
                        children: tool.priceRange
                    }, void 0, false, {
                        fileName: "[project]/components/ToolCard.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ToolCard.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-2 py-0.5 rounded-full bg-brand-pink-light text-brand-pink text-xs font-semibold uppercase tracking-wide",
                            children: tool.category
                        }, void 0, false, {
                            fileName: "[project]/components/ToolCard.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ToolCard.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-serif font-bold text-brand-text-title mb-2",
                        children: tool.name
                    }, void 0, false, {
                        fileName: "[project]/components/ToolCard.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-brand-text-body text-sm mb-4 flex-grow",
                        children: tool.description
                    }, void 0, false, {
                        fileName: "[project]/components/ToolCard.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-4 border-t border-brand-border/50 flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${tool.reviewSlug}`,
                                className: "flex-1 bg-brand-pink text-white text-center py-2 rounded-lg font-medium hover:bg-brand-pink-dark transition-colors text-sm",
                                children: "Read Review"
                            }, void 0, false, {
                                fileName: "[project]/components/ToolCard.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            tool.affiliateLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: tool.affiliateLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex-1 border border-brand-pink text-brand-pink text-center py-2 rounded-lg font-medium hover:bg-brand-pink-light transition-colors text-sm",
                                children: "Buy Now"
                            }, void 0, false, {
                                fileName: "[project]/components/ToolCard.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ToolCard.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ToolCard.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ToolCard.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ToolCard;
const __TURBOPACK__default__export__ = ToolCard;
var _c;
__turbopack_context__.k.register(_c, "ToolCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/tool-suggestions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolSuggestionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$toolSuggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/toolSuggestions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ToolCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ToolSuggestionsPage() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const categories = [
        'All',
        'Equipment',
        'Gadgets',
        'Essentials'
    ];
    const filteredTools = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$toolSuggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolSuggestions"].filter((tool)=>{
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-brand-background min-h-screen p-6 md:p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-serif font-bold text-brand-text-title mb-4",
                            children: "Baker's Tool Suggestions"
                        }, void 0, false, {
                            fileName: "[project]/app/tool-suggestions/page.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-brand-text-body text-lg max-w-2xl mx-auto",
                            children: "Curated recommendations for the best baking equipment, gadgets, and essentials. We've tested these so you don't have to."
                        }, void 0, false, {
                            fileName: "[project]/app/tool-suggestions/page.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tool-suggestions/page.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-brand-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar",
                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedCategory(category),
                                    className: `px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category ? 'bg-brand-pink text-white' : 'bg-brand-pink-light/50 text-brand-text-body hover:bg-brand-pink-light'}`,
                                    children: category
                                }, category, false, {
                                    fileName: "[project]/app/tool-suggestions/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/tool-suggestions/page.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full md:w-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40"
                                }, void 0, false, {
                                    fileName: "[project]/app/tool-suggestions/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search tools...",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "w-full pl-10 pr-4 py-2 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink outline-none transition-shadow"
                                }, void 0, false, {
                                    fileName: "[project]/app/tool-suggestions/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tool-suggestions/page.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tool-suggestions/page.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                filteredTools.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: filteredTools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            tool: tool
                        }, tool.id, false, {
                            fileName: "[project]/app/tool-suggestions/page.tsx",
                            lineNumber: 67,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/tool-suggestions/page.tsx",
                    lineNumber: 65,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 bg-white rounded-xl border border-brand-border border-dashed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-brand-text-body text-lg",
                            children: "No tools found matching your criteria."
                        }, void 0, false, {
                            fileName: "[project]/app/tool-suggestions/page.tsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelectedCategory('All');
                                setSearchTerm('');
                            },
                            className: "mt-4 text-brand-pink font-semibold hover:underline",
                            children: "Clear Filters"
                        }, void 0, false, {
                            fileName: "[project]/app/tool-suggestions/page.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tool-suggestions/page.tsx",
                    lineNumber: 71,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tool-suggestions/page.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tool-suggestions/page.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(ToolSuggestionsPage, "pI01Q/l1cGXnhBU+IE0+8yyKvu8=");
_c = ToolSuggestionsPage;
var _c;
__turbopack_context__.k.register(_c, "ToolSuggestionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ba610ea8._.js.map