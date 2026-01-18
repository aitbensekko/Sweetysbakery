module.exports = [
"[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProteinMacroCalculator",
    ()=>ProteinMacroCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
const macroSplits = {
    balanced: {
        p: 0.30,
        c: 0.40,
        f: 0.30
    },
    lowCarb: {
        p: 0.40,
        c: 0.20,
        f: 0.40
    },
    highCarb: {
        p: 0.30,
        c: 0.50,
        f: 0.20
    }
};
const calculateMacros = (totalCalories, split)=>({
        calories: Math.round(totalCalories),
        protein: Math.round(totalCalories * split.p / 4),
        carbs: Math.round(totalCalories * split.c / 4),
        fat: Math.round(totalCalories * split.f / 9)
    });
const MacroChart = ({ data })=>{
    const size = 120;
    const strokeWidth = 14;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const segments = [
        {
            percent: data.p,
            color: "text-brand-pink"
        },
        {
            percent: data.c,
            color: "text-blue-400"
        },
        {
            percent: data.f,
            color: "text-yellow-400"
        }
    ];
    let accumulatedPercentage = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${size} ${size}`,
        className: "w-full h-full transform -rotate-90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: size / 2,
                cy: size / 2,
                r: radius,
                fill: "none",
                strokeWidth: strokeWidth,
                className: "text-gray-200",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            segments.map((segment, index)=>{
                const dashArray = segment.percent * circumference;
                const offset = accumulatedPercentage / 100 * circumference;
                accumulatedPercentage += segment.percent * 100;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: size / 2,
                    cy: size / 2,
                    r: radius,
                    fill: "none",
                    strokeWidth: strokeWidth,
                    strokeDasharray: `${dashArray} ${circumference}`,
                    strokeDashoffset: -offset,
                    className: segment.color,
                    stroke: "currentColor",
                    strokeLinecap: "round"
                }, index, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                    lineNumber: 72,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const MacroResultCard = ({ title, data, split, isActive })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 rounded-xl border-2 transition-all duration-200 ${isActive ? 'border-brand-pink bg-white shadow-md transform scale-[1.02]' : 'border-transparent bg-brand-background hover:bg-white hover:border-gray-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-bold text-center text-brand-text-title text-lg mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[120px] h-[120px] mx-auto flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroChart, {
                        data: split
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-brand-text-title",
                                children: data.calories.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-brand-text-body",
                                children: "kcal"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-brand-pink"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 102,
                                        columnNumber: 106
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Protein (",
                                    Math.round(split.p * 100),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 102,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    data.protein,
                                    "g"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 102,
                                columnNumber: 216
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 103,
                                        columnNumber: 106
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Carbs (",
                                    Math.round(split.c * 100),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 103,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    data.carbs,
                                    "g"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 103,
                                columnNumber: 212
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 104,
                                        columnNumber: 106
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Fat (",
                                    Math.round(split.f * 100),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 104,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    data.fat,
                                    "g"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 104,
                                columnNumber: 212
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const initialFormState = {
    unitSystem: 'imperial',
    age: '30',
    gender: 'female',
    weight: '132',
    height: '65',
    heightCm: '165',
    weightKg: '59.9',
    activityLevel: '1.375'
};
const ProteinMacroCalculator = ({ setActiveTool, breadcrumbs })=>{
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFormState);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [primaryGoal, setPrimaryGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('maintenance');
    const [macroSplit, setMacroSplit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('balanced');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleReset = ()=>{
        setForm(initialFormState);
        setResults(null);
    };
    const handleInputChange = (field, value)=>{
        // Prevent negative numbers
        if (parseFloat(value) < 0) return;
        setForm({
            ...form,
            [field]: value
        });
    };
    const handleCalculate = ()=>{
        const ageN = parseInt(form.age) || 0;
        const isImperial = form.unitSystem === 'imperial';
        const weightKg = isImperial ? parseFloat(form.weight) * 0.453592 : parseFloat(form.weightKg);
        const heightCm = isImperial ? parseFloat(form.height) * 2.54 : parseFloat(form.heightCm);
        if (!weightKg || !heightCm || !ageN) {
            alert("Please fill in all fields with valid numbers.");
            return;
        }
        const bmr = form.gender === 'male' ? 10 * weightKg + 6.25 * heightCm - 5 * ageN + 5 : 10 * weightKg + 6.25 * heightCm - 5 * ageN - 161;
        const tdee = bmr * parseFloat(form.activityLevel);
        const calories = {
            maintenance: tdee,
            fatLoss: tdee - 400,
            muscleGain: tdee + 300
        };
        setResults({
            bmr: Math.round(bmr),
            tdee: Math.round(tdee),
            proteinGoalRange: {
                min: Math.round(weightKg * 1.2),
                max: Math.round(weightKg * 1.5)
            },
            detailedProteinNeeds: {
                rda: Math.round(weightKg * 0.8),
                endurance: {
                    min: Math.round(weightKg * 1.2),
                    max: Math.round(weightKg * 1.6)
                },
                muscleGain: {
                    min: Math.round(weightKg * 1.6),
                    max: Math.round(weightKg * 2.2)
                }
            },
            goals: {
                fatLoss: calculateMacros(calories.fatLoss, macroSplits[macroSplit]),
                maintenance: calculateMacros(calories.maintenance, macroSplits[macroSplit]),
                muscleGain: calculateMacros(calories.muscleGain, macroSplits[macroSplit])
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (results) {
            const calories = {
                maintenance: results.tdee,
                fatLoss: results.tdee - 400,
                muscleGain: results.tdee + 300
            };
            setResults((prevResults)=>{
                if (!prevResults) return null;
                return {
                    ...prevResults,
                    goals: {
                        fatLoss: calculateMacros(calories.fatLoss, macroSplits[macroSplit]),
                        maintenance: calculateMacros(calories.maintenance, macroSplits[macroSplit]),
                        muscleGain: calculateMacros(calories.muscleGain, macroSplits[macroSplit])
                    }
                };
            });
        }
    }, [
        macroSplit
    ]);
    const handleCopy = async ()=>{
        if (!results) return;
        const currentMacros = results.goals[primaryGoal];
        const text = `My Daily Goals (${primaryGoal}):\n- Calories: ${currentMacros.calories} kcal\n- Protein: ${currentMacros.protein}g\n- Carbs: ${currentMacros.carbs}g\n- Fat: ${currentMacros.fat}g\n\nProtein Range: ${results.proteinGoalRange.min} - ${results.proteinGoalRange.max}g`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };
    const currentMacros = results?.goals[primaryGoal];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-10 fade-in",
        children: [
            breadcrumbs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-8 max-w-4xl text-center mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block text-brand-pink mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DumbbellIcon"], {
                            className: "w-10 h-10"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                            lineNumber: 221,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif text-4xl md:text-5xl font-bold text-brand-text-title",
                        children: "Protein & Macro Calculator (TDEE)"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-brand-text-body/80 max-w-3xl mx-auto",
                        children: 'Calculate your daily protein intake, TDEE, and macronutrient goals for fat loss, maintenance, or muscle gain. Answer the question "what are my macros?" with our free tool.'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 219,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-5 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm sticky top-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-2xl text-brand-text-title",
                                            children: "Your Details"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 231,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleReset,
                                            className: "text-sm flex items-center gap-1 text-brand-text-body/70 hover:text-brand-pink",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RefreshCwIcon"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Reset"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 232,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-2 block",
                                                    children: "Unit System"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 bg-brand-pink-light p-1 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    unitSystem: 'imperial'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Imperial"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    unitSystem: 'metric'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Metric"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 238,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-1 block",
                                                    children: "Age"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: form.age,
                                                    onChange: (e)=>handleInputChange('age', e.target.value),
                                                    className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                    min: "0",
                                                    step: "any"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 246,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-1 block",
                                                    children: "Gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 bg-brand-background p-1 rounded-lg border border-brand-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    gender: 'female'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.gender === 'female' ? 'bg-white shadow-sm text-brand-text-title' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Female"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    gender: 'male'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.gender === 'male' ? 'bg-white shadow-sm text-brand-text-title' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Male"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 251,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: form.unitSystem === 'imperial' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Height (in)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.height,
                                                                onChange: (e)=>handleInputChange('height', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 117
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Weight (lbs)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.weight,
                                                                onChange: (e)=>handleInputChange('weight', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 118
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Height (cm)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.heightCm,
                                                                onChange: (e)=>handleInputChange('heightCm', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 117
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Weight (kg)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.weightKg,
                                                                onChange: (e)=>handleInputChange('weightKg', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 117
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 259,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-1 block",
                                                    children: "Activity Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.activityLevel,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            activityLevel: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg appearance-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.2",
                                                            children: "Sedentary (office job)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.375",
                                                            children: "Lightly Active (1-3 days/week)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.55",
                                                            children: "Moderately Active (3-5 days/week)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.725",
                                                            children: "Very Active (6-7 days/week)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.9",
                                                            children: "Extra Active (physical job)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 273,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCalculate,
                                            className: "w-full bg-brand-pink text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                                            children: "Calculate My Macros"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                            lineNumber: 229,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 228,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3",
                        children: results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 bg-brand-pink text-white rounded-2xl text-center shadow-lg transform transition-all hover:scale-[1.01]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold opacity-80 text-sm tracking-wider",
                                            children: "YOUR DAILY PROTEIN GOAL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 295,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-5xl my-2",
                                            children: [
                                                results.proteinGoalRange.min,
                                                " - ",
                                                results.proteinGoalRange.max,
                                                "g"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 296,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "opacity-80 text-xs",
                                            children: "based on your activity level"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 297,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCopy,
                                                className: "inline-flex items-center gap-2 text-xs font-bold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors",
                                                children: [
                                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckCircleIcon"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 51
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClipboardIcon"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 93
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    copied ? 'Results Copied!' : 'Copy My Results'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 299,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 298,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 294,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-2xl text-brand-text-title mb-4",
                                            children: "Calorie & Macro Goals"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 307,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-6 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold mb-2 block text-gray-500",
                                                            children: "Primary Goal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1 bg-brand-pink-light p-1 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setPrimaryGoal('fatLoss'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'fatLoss' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Fat Loss"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setPrimaryGoal('maintenance'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'maintenance' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Maintenance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setPrimaryGoal('muscleGain'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'muscleGain' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Muscle Gain"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold mb-2 block text-gray-500",
                                                            children: "Macro Split"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1 bg-brand-pink-light p-1 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setMacroSplit('balanced'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'balanced' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Balanced"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setMacroSplit('lowCarb'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'lowCarb' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Low Carb"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setMacroSplit('highCarb'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'highCarb' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "High Carb"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 308,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroResultCard, {
                                                    title: "Fat Loss",
                                                    data: results.goals.fatLoss,
                                                    split: macroSplits[macroSplit],
                                                    isActive: primaryGoal === 'fatLoss'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroResultCard, {
                                                    title: "Maintenance",
                                                    data: results.goals.maintenance,
                                                    split: macroSplits[macroSplit],
                                                    isActive: primaryGoal === 'maintenance'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroResultCard, {
                                                    title: "Muscle Gain",
                                                    data: results.goals.muscleGain,
                                                    split: macroSplits[macroSplit],
                                                    isActive: primaryGoal === 'muscleGain'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 326,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 306,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-serif font-bold text-xl text-brand-text-title mb-4",
                                                    children: "Protein Distribution"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-brand-text-body mb-4",
                                                    children: [
                                                        "Split your ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-pink",
                                                            children: [
                                                                currentMacros?.protein,
                                                                "g"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 97
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " of protein into:"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-brand-text-body",
                                                                    children: "3 meals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 338,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-brand-text-title",
                                                                    children: [
                                                                        Math.round(currentMacros.protein / 3),
                                                                        "g / meal"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 338,
                                                                    columnNumber: 226
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-brand-text-body",
                                                                    children: "4 meals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-brand-text-title",
                                                                    children: [
                                                                        Math.round(currentMacros.protein / 4),
                                                                        "g / meal"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 226
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-brand-text-body",
                                                                    children: "5 meals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-brand-text-title",
                                                                    children: [
                                                                        Math.round(currentMacros.protein / 5),
                                                                        "g / meal"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 226
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 334,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-serif font-bold text-xl text-brand-text-title",
                                                    children: "Metabolic Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 text-gray-600",
                                                            children: [
                                                                "BMR ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfoIcon"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 96
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-text-title",
                                                            children: [
                                                                results.bmr,
                                                                " kcal"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 212
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 text-gray-600",
                                                            children: [
                                                                "TDEE ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfoIcon"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 159
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 96
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-text-title",
                                                            children: [
                                                                results.tdee,
                                                                " kcal"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 213
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-gray-100 my-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-serif font-bold text-xl text-brand-text-title pt-1",
                                                    children: "Detailed Protein Needs"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "General Health (RDA):"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 129
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        results.detailedProteinNeeds.rda,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 164
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Endurance Athletes:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 129
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        results.detailedProteinNeeds.endurance.min,
                                                                        "-",
                                                                        results.detailedProteinNeeds.endurance.max,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 162
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Muscle Gain:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 129
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        results.detailedProteinNeeds.muscleGain.min,
                                                                        "-",
                                                                        results.detailedProteinNeeds.muscleGain.max,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 155
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 344,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 333,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                            lineNumber: 293,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 291,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 227,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl font-bold text-brand-text-title text-center mb-6",
                                children: "How to Use Your Macro Calculator Results"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 365,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "This macro calculator provides powerful estimates to align your nutrition with your fitness goals. Here's a quick breakdown of what these numbers mean."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 367,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-brand-text-title",
                                        children: "1. Select Your Primary Goal"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 368,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: 'Choose between "Fat Loss," "Maintenance," or "Muscle Gain." The calculator will automatically adjust your daily calorie target to create a sustainable deficit for fat loss or a small surplus for muscle gain.'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 369,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-brand-text-title",
                                        children: "2. Choose Your Macro Split"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 370,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: 'Select a macronutrient split that fits your dietary preference. "Balanced" is a great starting point, while "Low Carb" or "High Carb" can be effective for specific goals. The charts will update to show you the grams of protein, carbs, and fat you should aim for each day.'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 371,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 366,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 364,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl font-bold text-brand-text-title text-center mb-6",
                                children: "Key Terms Explained"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-5 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "BMR (Basal Metabolic Rate):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " The calories your body needs for basic, life-sustaining functions if you were to rest for 24 hours."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 378,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "TDEE (Total Daily Energy Expenditure):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ' Your BMR plus the calories you burn from physical activity. This is your "maintenance" calorie number.'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Macronutrients (Macros):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " The three main nutrient categories: Protein (for muscle repair), Carbohydrates (for energy), and Fat (for hormone function). Finding your ideal macros for weight loss or muscle gain is a common fitness strategy."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 380,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 377,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-brand-text-title mt-6",
                                        children: "How to Use These Numbers"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 382,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Select your primary goal (Fat Loss, Maintenance, or Muscle Gain). The calculator will show you the appropriate daily calorie and macro targets. For fat loss, it creates a sustainable calorie deficit. For muscle gain, it creates a small calorie surplus. The daily protein intake calculator provides a general range, while the macro breakdown gives you specific targets. Consistency is key—stick to these numbers for a few weeks and adjust based on your results."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 376,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 374,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 363,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {
                setActiveTool: setActiveTool
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 389,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/tools/ProteinMacroCalculator.tsx",
        lineNumber: 217,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=Desktop_Projects_TEST3_components_tools_ProteinMacroCalculator_tsx_2102d88c._.js.map