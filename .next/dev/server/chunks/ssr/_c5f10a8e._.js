module.exports = [
"[project]/components/BakeryList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BakeryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function BakeryList({ bakeries, onSelect, selectedId }) {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const cities = [
        'All',
        ...Array.from(new Set(bakeries.map((b)=>b.city))).sort()
    ];
    const filteredBakeries = bakeries.filter((b)=>{
        const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || b.specialties.some((s)=>s.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCity = cityFilter === 'All' || b.city === cityFilter;
        return matchesSearch && matchesCity;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b bg-pink-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "Find a Bakery"
                    }, void 0, false, {
                        fileName: "[project]/components/BakeryList.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search bakeries or specialties...",
                                className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/BakeryList.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 outline-none",
                                value: cityFilter,
                                onChange: (e)=>setCityFilter(e.target.value),
                                children: cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: city,
                                        children: city
                                    }, city, false, {
                                        fileName: "[project]/components/BakeryList.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/BakeryList.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BakeryList.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BakeryList.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4",
                children: [
                    filteredBakeries.map((bakery)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onSelect(bakery),
                            className: `p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${selectedId === bakery.id ? 'border-pink-500 bg-pink-50 ring-1 ring-pink-500' : 'border-gray-200 hover:border-pink-300'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-900",
                                                    children: bakery.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BakeryList.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: bakery.address
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BakeryList.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        bakery.city,
                                                        ", ",
                                                        bakery.state
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BakeryList.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BakeryList.tsx",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center",
                                            children: [
                                                bakery.rating,
                                                " ★"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BakeryList.tsx",
                                            lineNumber: 62,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BakeryList.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-700 mt-2 line-clamp-2",
                                    children: bakery.description
                                }, void 0, false, {
                                    fileName: "[project]/components/BakeryList.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-1",
                                    children: bakery.specialties.slice(0, 3).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200",
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/components/BakeryList.tsx",
                                            lineNumber: 71,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/BakeryList.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex justify-between items-center text-sm border-t pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 font-medium",
                                            children: [
                                                bakery.priceRange,
                                                " • ",
                                                bakery.reviewCount.toLocaleString(),
                                                " reviews"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BakeryList.tsx",
                                            lineNumber: 78,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-pink-600 font-medium hover:underline text-xs uppercase tracking-wide",
                                            children: "View on Map"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BakeryList.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BakeryList.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, bakery.id, true, {
                            fileName: "[project]/components/BakeryList.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)),
                    filteredBakeries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10 text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-medium",
                                children: "No bakeries found"
                            }, void 0, false, {
                                fileName: "[project]/components/BakeryList.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Try adjusting your search or filters"
                            }, void 0, false, {
                                fileName: "[project]/components/BakeryList.tsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BakeryList.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BakeryList.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BakeryList.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
"[project]/data/bakeries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bakeries",
    ()=>bakeries
]);
const bakeries = [
    // New York
    {
        id: 'nyc-1',
        name: 'Dominique Ansel Bakery',
        address: '189 Spring St',
        city: 'New York',
        state: 'NY',
        zip: '10012',
        coordinates: [
            40.7252,
            -74.0021
        ],
        rating: 4.8,
        reviewCount: 12500,
        priceRange: '$$$',
        specialties: [
            'Cronut',
            'DKA',
            'Cookie Shot'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Dominique+Ansel',
        description: 'Home of the original Cronut. A must-visit for pastry lovers seeking innovation and perfection.',
        website: 'https://www.dominiqueansel.com'
    },
    {
        id: 'nyc-2',
        name: 'Levain Bakery',
        address: '167 W 74th St',
        city: 'New York',
        state: 'NY',
        zip: '10023',
        coordinates: [
            40.7794,
            -73.9812
        ],
        rating: 4.9,
        reviewCount: 15000,
        priceRange: '$$',
        specialties: [
            'Chocolate Chip Walnut Cookie',
            'Dark Chocolate Chocolate Chip'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Levain+Bakery',
        description: 'World-famous for their massive, gooey, 6-ounce cookies that are crispy on the outside and soft on the inside.',
        website: 'https://levainbakery.com'
    },
    {
        id: 'nyc-3',
        name: 'Magnolia Bakery',
        address: '1240 6th Ave',
        city: 'New York',
        state: 'NY',
        zip: '10020',
        coordinates: [
            40.7590,
            -73.9790
        ],
        rating: 4.5,
        reviewCount: 8500,
        priceRange: '$$',
        specialties: [
            'Banana Pudding',
            'Cupcakes'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Magnolia+Bakery',
        description: 'Classic American bakery famous for its banana pudding and cupcakes, as seen on Sex and the City.',
        website: 'https://www.magnoliabakery.com'
    },
    // Los Angeles
    {
        id: 'la-1',
        name: 'Porto\'s Bakery & Cafe',
        address: '315 N Brand Blvd',
        city: 'Glendale',
        state: 'CA',
        zip: '91203',
        coordinates: [
            34.1480,
            -118.2550
        ],
        rating: 4.9,
        reviewCount: 18000,
        priceRange: '$',
        specialties: [
            'Cheese Rolls',
            'Potato Balls',
            'Refugiados'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Portos+Bakery',
        description: 'A Cuban family-owned institution known for its savory pastries, cakes, and incredibly affordable prices.',
        website: 'https://www.portosbakery.com'
    },
    {
        id: 'la-2',
        name: 'République',
        address: '624 S La Brea Ave',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90036',
        coordinates: [
            34.0624,
            -118.3440
        ],
        rating: 4.7,
        reviewCount: 5400,
        priceRange: '$$$',
        specialties: [
            'French Pastries',
            'Brunch',
            'Bread'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Republique',
        description: 'A grand French bakery and restaurant housed in a historic building, serving some of the best pastries in the city.',
        website: 'https://republiquela.com'
    },
    {
        id: 'la-3',
        name: 'Tartine Sycamore',
        address: '911 N Sycamore Ave',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90038',
        coordinates: [
            34.0880,
            -118.3440
        ],
        rating: 4.6,
        reviewCount: 2100,
        priceRange: '$$$',
        specialties: [
            'Sourdough Bread',
            'Morning Buns',
            'Croissants'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Tartine',
        description: 'The LA outpost of the legendary San Francisco bakery, famous for its country bread and immaculate pastries.',
        website: 'https://tartinebakery.com'
    },
    // Chicago
    {
        id: 'chi-1',
        name: 'Kasama',
        address: '1001 N Winchester Ave',
        city: 'Chicago',
        state: 'IL',
        zip: '60622',
        coordinates: [
            41.9000,
            -87.6740
        ],
        rating: 4.8,
        reviewCount: 1200,
        priceRange: '$$$',
        specialties: [
            'Ube Basque Cake',
            'Filipino Pastries',
            'Truffle Croissant'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Kasama',
        description: 'The world\'s first Michelin-starred Filipino restaurant and bakery. Expect long lines for their incredible pastries.',
        website: 'https://www.kasamachicago.com'
    },
    {
        id: 'chi-2',
        name: 'Floriole Cafe & Bakery',
        address: '1220 W Webster Ave',
        city: 'Chicago',
        state: 'IL',
        zip: '60614',
        coordinates: [
            41.9210,
            -87.6590
        ],
        rating: 4.7,
        reviewCount: 1500,
        priceRange: '$$',
        specialties: [
            'Croissants',
            'Quiche',
            'Fruit Tarts'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Floriole',
        description: 'A bright, two-story cafe serving rustic French pastries and breads made with organic ingredients.',
        website: 'https://www.floriole.com'
    },
    // Houston
    {
        id: 'hou-1',
        name: 'Three Brothers Bakery',
        address: '4036 S Braeswood Blvd',
        city: 'Houston',
        state: 'TX',
        zip: '77025',
        coordinates: [
            29.6990,
            -95.4520
        ],
        rating: 4.6,
        reviewCount: 2500,
        priceRange: '$$',
        specialties: [
            'Pumpecapple Piecake',
            'Gingerbread',
            'Bagels'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Three+Brothers',
        description: 'A Houston legend since 1949, known for their massive multi-layered cakes and traditional Jewish baked goods.',
        website: 'https://3brothersbakery.com'
    },
    {
        id: 'hou-2',
        name: 'Common Bond Bistro & Bakery',
        address: '1706 Westheimer Rd',
        city: 'Houston',
        state: 'TX',
        zip: '77098',
        coordinates: [
            29.7410,
            -95.4030
        ],
        rating: 4.5,
        reviewCount: 3800,
        priceRange: '$$',
        specialties: [
            'Croissants',
            'Kouign Amann',
            'Macarons'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Common+Bond',
        description: 'Modern bakery offering an array of French pastries, artisan breads, and a full bistro menu.',
        website: 'https://www.commonbondcafe.com'
    },
    // San Francisco
    {
        id: 'sf-1',
        name: 'Tartine Bakery',
        address: '600 Guerrero St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94110',
        coordinates: [
            37.7614,
            -122.4240
        ],
        rating: 4.6,
        reviewCount: 8000,
        priceRange: '$$',
        specialties: [
            'Country Bread',
            'Morning Buns',
            'Lemon Tart'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Tartine+SF',
        description: 'The original location. Famous for having the best bread in the world and lines that wrap around the block.',
        website: 'https://tartinebakery.com'
    },
    {
        id: 'sf-2',
        name: 'B. Patisserie',
        address: '2821 California St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94115',
        coordinates: [
            37.7878,
            -122.4410
        ],
        rating: 4.8,
        reviewCount: 3500,
        priceRange: '$$',
        specialties: [
            'Kouign Amann',
            'Croissants',
            'Verrines'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=B+Patisserie',
        description: 'Belinda Leong\'s modern French patisserie. Their Kouign Amann is widely considered the best in the US.',
        website: 'https://bpatisserie.com'
    },
    // Seattle
    {
        id: 'sea-1',
        name: 'Piroshky Piroshky',
        address: '1908 Pike Pl',
        city: 'Seattle',
        state: 'WA',
        zip: '98101',
        coordinates: [
            47.6100,
            -122.3420
        ],
        rating: 4.7,
        reviewCount: 9000,
        priceRange: '$',
        specialties: [
            'Smoked Salmon Pate',
            'Beef and Cheese',
            'Apple Cinnamon Roll'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Piroshky',
        description: 'A Pike Place Market icon serving hand-held Russian pies with sweet and savory fillings.',
        website: 'https://piroshkybakery.com'
    },
    // Miami
    {
        id: 'mia-1',
        name: 'Zak the Baker',
        address: '295 NW 26th St',
        city: 'Miami',
        state: 'FL',
        zip: '33127',
        coordinates: [
            25.8020,
            -80.2000
        ],
        rating: 4.8,
        reviewCount: 3200,
        priceRange: '$$',
        specialties: [
            'Sourdough',
            'Babka',
            'Salmon Toast'
        ],
        imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Zak+the+Baker',
        description: 'A kosher bakery in Wynwood that revolutionized the Miami bread scene. Everything is made from scratch.',
        website: 'https://zakthebaker.com'
    }
];
}),
"[project]/app/blog/bakery-finder/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BakeryFinderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BakeryList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BakeryList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$bakeries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/bakeries.ts [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
// Dynamically import the map to avoid SSR issues with Leaflet
const BakeryMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/BakeryMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-gray-50 flex flex-col items-center justify-center text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-10 w-10 mb-4 text-pink-500",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/bakery-finder/page.tsx",
                            lineNumber: 14,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/bakery-finder/page.tsx",
                            lineNumber: 15,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/bakery-finder/page.tsx",
                    lineNumber: 13,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-medium",
                    children: "Loading Map..."
                }, void 0, false, {
                    fileName: "[project]/app/blog/bakery-finder/page.tsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/bakery-finder/page.tsx",
            lineNumber: 12,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
});
function BakeryFinderPage() {
    const [selectedBakeryId, setSelectedBakeryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const handleBakerySelect = (bakery)=>{
        setSelectedBakeryId(bakery.id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-[calc(100vh-64px)] bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 px-6 py-4 shadow-sm z-10 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "🗺️"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/bakery-finder/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this),
                                    " Bakery Finder"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/bakery-finder/page.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm mt-1",
                                children: "Discover the best bakeries across the US. Curated by our experts."
                            }, void 0, false, {
                                fileName: "[project]/app/blog/bakery-finder/page.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/bakery-finder/page.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-pink-100 text-pink-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$bakeries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bakeries"].length,
                                " Locations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/bakery-finder/page.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/bakery-finder/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/bakery-finder/page.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col md:flex-row overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/3 lg:w-1/4 h-1/2 md:h-full z-20 md:z-auto shadow-xl md:shadow-none order-2 md:order-1 border-r border-gray-200 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BakeryList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            bakeries: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$bakeries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bakeries"],
                            onSelect: handleBakerySelect,
                            selectedId: selectedBakeryId
                        }, void 0, false, {
                            fileName: "[project]/app/blog/bakery-finder/page.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/bakery-finder/page.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-2/3 lg:w-3/4 h-1/2 md:h-full order-1 md:order-2 relative bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BakeryMap, {
                            bakeries: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$bakeries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bakeries"],
                            selectedBakeryId: selectedBakeryId,
                            onBakerySelect: handleBakerySelect
                        }, void 0, false, {
                            fileName: "[project]/app/blog/bakery-finder/page.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/bakery-finder/page.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/bakery-finder/page.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/bakery-finder/page.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : "TURBOPACK unreachable",
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
];

//# sourceMappingURL=_c5f10a8e._.js.map