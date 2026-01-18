(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/tools/ProteinMacroCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProteinMacroCalculator",
    ()=>ProteinMacroCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/seo.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${size} ${size}`,
        className: "w-full h-full transform -rotate-90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: size / 2,
                cy: size / 2,
                r: radius,
                fill: "none",
                strokeWidth: strokeWidth,
                className: "text-gray-200",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            segments.map((segment, index)=>{
                const dashArray = segment.percent * circumference;
                const offset = accumulatedPercentage / 100 * circumference;
                accumulatedPercentage += segment.percent * 100;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                    lineNumber: 73,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MacroChart;
const MacroResultCard = ({ title, data, split, isActive })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 rounded-xl border-2 transition-all duration-200 ${isActive ? 'border-brand-pink bg-white shadow-md transform scale-[1.02]' : 'border-transparent bg-brand-background hover:bg-white hover:border-gray-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-bold text-center text-brand-text-title text-lg mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[120px] h-[120px] mx-auto flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroChart, {
                        data: split
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-brand-text-title",
                                children: data.calories.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-brand-text-body",
                                children: "kcal"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-brand-pink"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 103,
                                        columnNumber: 106
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Protein (",
                                    Math.round(split.p * 100),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 103,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    data.protein,
                                    "g"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 103,
                                columnNumber: 216
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 104,
                                        columnNumber: 106
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Carbs (",
                                    Math.round(split.c * 100),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 104,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    data.carbs,
                                    "g"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 104,
                                columnNumber: 212
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 105,
                                        columnNumber: 106
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Fat (",
                                    Math.round(split.f * 100),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 105,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    data.fat,
                                    "g"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 105,
                                columnNumber: 212
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = MacroResultCard;
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
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFormState);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [primaryGoal, setPrimaryGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('maintenance');
    const [macroSplit, setMacroSplit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('balanced');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProteinMacroCalculator.useEffect": ()=>{
            // Update Schema for SEO - protein-macro
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSchema"])('protein-macro', (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolSeoData"])('protein-macro'), null);
        }
    }["ProteinMacroCalculator.useEffect"], []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProteinMacroCalculator.useEffect": ()=>{
            if (results) {
                const calories = {
                    maintenance: results.tdee,
                    fatLoss: results.tdee - 400,
                    muscleGain: results.tdee + 300
                };
                setResults({
                    "ProteinMacroCalculator.useEffect": (prevResults)=>{
                        if (!prevResults) return null;
                        return {
                            ...prevResults,
                            goals: {
                                fatLoss: calculateMacros(calories.fatLoss, macroSplits[macroSplit]),
                                maintenance: calculateMacros(calories.maintenance, macroSplits[macroSplit]),
                                muscleGain: calculateMacros(calories.muscleGain, macroSplits[macroSplit])
                            }
                        };
                    }
                }["ProteinMacroCalculator.useEffect"]);
            }
        }
    }["ProteinMacroCalculator.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-10 fade-in",
        children: [
            breadcrumbs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-8 max-w-4xl text-center mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block text-brand-pink mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DumbbellIcon"], {
                            className: "w-10 h-10"
                        }, void 0, false, {
                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                            lineNumber: 227,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 226,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif text-4xl md:text-5xl font-bold text-brand-text-title",
                        children: "Protein & Macro Calculator (TDEE)"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-brand-text-body/80 max-w-3xl mx-auto",
                        children: 'Calculate your daily protein intake, TDEE, and macronutrient goals for fat loss, maintenance, or muscle gain. Answer the question "what are my macros?" with our free tool.'
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 230,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-5 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm sticky top-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-2xl text-brand-text-title",
                                            children: "Your Details"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 237,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleReset,
                                            className: "text-sm flex items-center gap-1 text-brand-text-body/70 hover:text-brand-pink",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshCwIcon"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Reset"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 238,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 236,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-2 block",
                                                    children: "Unit System"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 bg-brand-pink-light p-1 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    unitSystem: 'imperial'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.unitSystem === 'imperial' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Imperial"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    unitSystem: 'metric'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.unitSystem === 'metric' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Metric"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 244,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-1 block",
                                                    children: "Age"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: form.age,
                                                    onChange: (e)=>handleInputChange('age', e.target.value),
                                                    className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                    min: "0",
                                                    step: "any"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 252,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-1 block",
                                                    children: "Gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 bg-brand-background p-1 rounded-lg border border-brand-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    gender: 'female'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.gender === 'female' ? 'bg-white shadow-sm text-brand-text-title' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Female"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setForm({
                                                                    ...form,
                                                                    gender: 'male'
                                                                }),
                                                            className: `flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${form.gender === 'male' ? 'bg-white shadow-sm text-brand-text-title' : 'text-brand-text-body hover:bg-white/50'}`,
                                                            children: "Male"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 257,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: form.unitSystem === 'imperial' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Height (in)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.height,
                                                                onChange: (e)=>handleInputChange('height', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 117
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Weight (lbs)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.weight,
                                                                onChange: (e)=>handleInputChange('weight', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 118
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Height (cm)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.heightCm,
                                                                onChange: (e)=>handleInputChange('heightCm', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 117
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold mb-1 block",
                                                                children: "Weight (kg)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: form.weightKg,
                                                                onChange: (e)=>handleInputChange('weightKg', e.target.value),
                                                                className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 117
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold mb-1 block",
                                                    children: "Activity Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.activityLevel,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            activityLevel: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2 bg-brand-background border border-brand-border rounded-lg appearance-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.2",
                                                            children: "Sedentary (office job)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.375",
                                                            children: "Lightly Active (1-3 days/week)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.55",
                                                            children: "Moderately Active (3-5 days/week)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.725",
                                                            children: "Very Active (6-7 days/week)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1.9",
                                                            children: "Extra Active (physical job)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 279,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCalculate,
                                            className: "w-full bg-brand-pink text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                                            children: "Calculate My Macros"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 290,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 243,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                            lineNumber: 235,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3",
                        children: results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 bg-brand-pink text-white rounded-2xl text-center shadow-lg transform transition-all hover:scale-[1.01]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold opacity-80 text-sm tracking-wider",
                                            children: "YOUR DAILY PROTEIN GOAL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-5xl my-2",
                                            children: [
                                                results.proteinGoalRange.min,
                                                " - ",
                                                results.proteinGoalRange.max,
                                                "g"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 302,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "opacity-80 text-xs",
                                            children: "based on your activity level"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 303,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCopy,
                                                className: "inline-flex items-center gap-2 text-xs font-bold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors",
                                                children: [
                                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircleIcon"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 51
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClipboardIcon"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 93
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    copied ? 'Results Copied!' : 'Copy My Results'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 305,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 304,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 300,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-2xl text-brand-text-title mb-4",
                                            children: "Calorie & Macro Goals"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 313,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-6 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold mb-2 block text-gray-500",
                                                            children: "Primary Goal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1 bg-brand-pink-light p-1 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setPrimaryGoal('fatLoss'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'fatLoss' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Fat Loss"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setPrimaryGoal('maintenance'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'maintenance' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Maintenance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setPrimaryGoal('muscleGain'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${primaryGoal === 'muscleGain' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Muscle Gain"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold mb-2 block text-gray-500",
                                                            children: "Macro Split"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1 bg-brand-pink-light p-1 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setMacroSplit('balanced'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'balanced' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Balanced"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setMacroSplit('lowCarb'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'lowCarb' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "Low Carb"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setMacroSplit('highCarb'),
                                                                    className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${macroSplit === 'highCarb' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`,
                                                                    children: "High Carb"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 314,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroResultCard, {
                                                    title: "Fat Loss",
                                                    data: results.goals.fatLoss,
                                                    split: macroSplits[macroSplit],
                                                    isActive: primaryGoal === 'fatLoss'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroResultCard, {
                                                    title: "Maintenance",
                                                    data: results.goals.maintenance,
                                                    split: macroSplits[macroSplit],
                                                    isActive: primaryGoal === 'maintenance'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MacroResultCard, {
                                                    title: "Muscle Gain",
                                                    data: results.goals.muscleGain,
                                                    split: macroSplits[macroSplit],
                                                    isActive: primaryGoal === 'muscleGain'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 332,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 312,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-serif font-bold text-xl text-brand-text-title mb-4",
                                                    children: "Protein Distribution"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-brand-text-body mb-4",
                                                    children: [
                                                        "Split your ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-pink",
                                                            children: [
                                                                currentMacros?.protein,
                                                                "g"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 97
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " of protein into:"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-brand-text-body",
                                                                    children: "3 meals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-brand-text-title",
                                                                    children: [
                                                                        Math.round(currentMacros.protein / 3),
                                                                        "g / meal"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 226
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-brand-text-body",
                                                                    children: "4 meals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-brand-text-title",
                                                                    children: [
                                                                        Math.round(currentMacros.protein / 4),
                                                                        "g / meal"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 226
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-brand-pink-light/30 rounded-lg border border-brand-pink/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-brand-text-body",
                                                                    children: "5 meals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-brand-text-title",
                                                                    children: [
                                                                        Math.round(currentMacros.protein / 5),
                                                                        "g / meal"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 226
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 340,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-serif font-bold text-xl text-brand-text-title",
                                                    children: "Metabolic Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 text-gray-600",
                                                            children: [
                                                                "BMR ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoIcon"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 96
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-text-title",
                                                            children: [
                                                                results.bmr,
                                                                " kcal"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 212
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 text-gray-600",
                                                            children: [
                                                                "TDEE ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoIcon"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 159
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 96
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-text-title",
                                                            children: [
                                                                results.tdee,
                                                                " kcal"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 213
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-gray-100 my-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-serif font-bold text-xl text-brand-text-title pt-1",
                                                    children: "Detailed Protein Needs"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "General Health (RDA):"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 129
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        results.detailedProteinNeeds.rda,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 164
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Endurance Athletes:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 129
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        results.detailedProteinNeeds.endurance.min,
                                                                        "-",
                                                                        results.detailedProteinNeeds.endurance.max,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 162
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between p-2 rounded-md hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Muscle Gain:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 129
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        results.detailedProteinNeeds.muscleGain.min,
                                                                        "-",
                                                                        results.detailedProteinNeeds.muscleGain.max,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 155
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                            lineNumber: 350,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                    lineNumber: 339,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                            lineNumber: 299,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 297,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoIcon"], {
                                        className: "w-6 h-6 text-brand-pink"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 372,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "How to Use Your Results"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 371,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Select Goal:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 376,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ' Choose "Fat Loss", "Maintenance", or "Muscle Gain" to see adjusted calorie targets.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 376,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Choose Split:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 377,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Pick a macro split (Balanced, Low Carb, High Carb) that fits your lifestyle."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 377,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Track Macros:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 378,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Aim to hit these protein, carb, and fat targets daily."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 378,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Monitor Progress:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Weigh yourself weekly and adjust calories if needed."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 379,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 370,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif font-bold text-xl mb-4 text-brand-text-title",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 384,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "What is TDEE?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 387,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: "Total Daily Energy Expenditure. It's the total number of calories you burn in a day, including exercise. Eating this amount maintains your weight."
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 391,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 386,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "Which macro split is best?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 396,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: '"Balanced" works for most people. "High Carb" is great for endurance athletes, while "Low Carb" can help with satiety and blood sugar control.'
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 400,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 395,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "Do I need to be exact?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 405,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: "No! Consistency is more important than perfection. Try to stay within +/- 10g of your protein and carb goals, and +/- 5g of fat."
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                                lineNumber: 409,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                        lineNumber: 404,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                                lineNumber: 385,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                        lineNumber: 383,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
                lineNumber: 369,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/ProteinMacroCalculator.tsx",
        lineNumber: 223,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProteinMacroCalculator, "3wXZAqr8jAA2RoUfc4y/HS+g8yM=");
_c2 = ProteinMacroCalculator;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MacroChart");
__turbopack_context__.k.register(_c1, "MacroResultCard");
__turbopack_context__.k.register(_c2, "ProteinMacroCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_tools_ProteinMacroCalculator_tsx_c7dfb1cd._.js.map