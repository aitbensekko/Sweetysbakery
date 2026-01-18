(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/tools/CakePricingCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CakePricingCalculator",
    ()=>CakePricingCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tools$2f$ToolContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tools/ToolContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PremiumPromo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PremiumPromo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const QUICK_ADD_INGREDIENTS = [
    {
        name: 'Flour (AP)',
        cost: '2.50'
    },
    {
        name: 'Sugar (Granulated)',
        cost: '3.00'
    },
    {
        name: 'Butter (Unsalted)',
        cost: '5.00'
    },
    {
        name: 'Eggs (Large)',
        cost: '4.00'
    },
    {
        name: 'Vanilla Extract',
        cost: '12.00'
    },
    {
        name: 'Milk (Whole)',
        cost: '1.50'
    },
    {
        name: 'Cake Board',
        cost: '2.00'
    },
    {
        name: 'Cake Box',
        cost: '3.50'
    }
];
const PRICING_TEMPLATES = {
    custom: {
        name: 'Custom',
        laborRate: '20',
        overhead: '15',
        profitMargin: '50'
    },
    birthday: {
        name: 'Birthday Cake',
        laborRate: '25',
        overhead: '15',
        profitMargin: '40'
    },
    wedding: {
        name: 'Wedding Cake',
        laborRate: '35',
        overhead: '20',
        profitMargin: '60'
    },
    cupcakes: {
        name: 'Cupcakes (Dozens)',
        laborRate: '20',
        overhead: '10',
        profitMargin: '45'
    }
};
const inputStyles = "w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200 text-brand-text-body";
const CakePricingCalculator = ({ setActiveTool, breadcrumbs })=>{
    _s();
    const [ingredients, setIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: '',
            cost: ''
        }
    ]);
    const [laborRate, setLaborRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('20');
    const [laborHours, setLaborHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2');
    const [overhead, setOverhead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('15');
    const [profitMargin, setProfitMargin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('50');
    const [servings, setServings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('12');
    // New State for Delivery & Tax
    const [deliveryBase, setDeliveryBase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [deliveryMileage, setDeliveryMileage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [mileageRate, setMileageRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0.60'); // IRS standard-ish
    const [taxRate, setTaxRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCopy = (value, field)=>{
        navigator.clipboard.writeText(value).then(()=>{
            setCopied(field);
            setTimeout(()=>setCopied(null), 2000);
        });
    };
    const applyTemplate = (type)=>{
        const template = PRICING_TEMPLATES[type];
        setLaborRate(template.laborRate);
        setOverhead(template.overhead);
        setProfitMargin(template.profitMargin);
    };
    const handleIngredientChange = (id, field, value)=>{
        // Prevent negative numbers for cost
        if (field === 'cost' && parseFloat(value) < 0) return;
        setIngredients(ingredients.map((ing)=>ing.id === id ? {
                ...ing,
                [field]: value
            } : ing));
    };
    const addIngredient = ()=>{
        setIngredients([
            ...ingredients,
            {
                id: Date.now(),
                name: '',
                cost: ''
            }
        ]);
    };
    const addQuickIngredient = (name, cost)=>{
        setIngredients([
            ...ingredients,
            {
                id: Date.now(),
                name,
                cost
            }
        ]);
    };
    const removeIngredient = (id)=>{
        if (ingredients.length > 1) {
            setIngredients(ingredients.filter((ing)=>ing.id !== id));
        }
    };
    const handleNumberInput = (setter, value)=>{
        if (parseFloat(value) < 0) return;
        setter(value);
    };
    const { subtotal, pricePerServing, totalPrice, isValid, deliveryTotal, taxAmount, profitAmount, overheadAmount, laborCost, ingredientCost } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CakePricingCalculator.useMemo": ()=>{
            const ingCost = ingredients.reduce({
                "CakePricingCalculator.useMemo.ingCost": (sum, ing)=>sum + (parseFloat(ing.cost) || 0)
            }["CakePricingCalculator.useMemo.ingCost"], 0);
            const labCost = (parseFloat(laborRate) || 0) * (parseFloat(laborHours) || 0);
            const baseCost = ingCost + labCost;
            const ovCost = baseCost * ((parseFloat(overhead) || 0) / 100);
            const subtotalVal = baseCost + ovCost; // Cost to make (Ingredients + Labor + Overhead)
            const profit = subtotalVal * ((parseFloat(profitMargin) || 0) / 100);
            const priceBeforeTaxDelivery = subtotalVal + profit;
            // Delivery
            const delBase = parseFloat(deliveryBase) || 0;
            const delMiles = parseFloat(deliveryMileage) || 0;
            const delRate = parseFloat(mileageRate) || 0;
            const delTotal = delBase + delMiles * delRate;
            // Tax
            const tax = (priceBeforeTaxDelivery + delTotal) * ((parseFloat(taxRate) || 0) / 100);
            const finalPrice = priceBeforeTaxDelivery + delTotal + tax;
            const numServings = parseInt(servings) || 1;
            const pricePer = finalPrice / numServings;
            const isValid = ingCost > 0 && parseFloat(laborRate) >= 0 && parseFloat(laborHours) >= 0;
            return {
                subtotal: subtotalVal.toFixed(2),
                pricePerServing: pricePer.toFixed(2),
                totalPrice: finalPrice.toFixed(2),
                isValid,
                deliveryTotal: delTotal.toFixed(2),
                taxAmount: tax.toFixed(2),
                profitAmount: profit.toFixed(2),
                overheadAmount: ovCost.toFixed(2),
                laborCost: labCost.toFixed(2),
                ingredientCost: ingCost.toFixed(2)
            };
        }
    }["CakePricingCalculator.useMemo"], [
        ingredients,
        laborRate,
        laborHours,
        overhead,
        profitMargin,
        servings,
        deliveryBase,
        deliveryMileage,
        mileageRate,
        taxRate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tools$2f$ToolContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolContainer"], {
        title: "Free Cake Pricing Calculator & Bakery Cost App",
        description: "Calculate the perfect price for your custom cakes and baked goods. Ideal for pricing wedding cakes, birthday cakes, cupcakes, and more. Factor in ingredients for chocolate, vanilla, or red velvet cake, plus labor and cake delivery costs.",
        setActiveTool: setActiveTool,
        breadcrumbs: breadcrumbs,
        toolId: "cake-pricing",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "bg-brand-pink/5 p-4 rounded-xl border border-brand-pink/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-brand-text-title mb-3 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshCwIcon"], {
                                                className: "w-5 h-5 text-brand-pink"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Load Pricing Template"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: Object.keys(PRICING_TEMPLATES).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>applyTemplate(key),
                                                className: "px-3 py-1.5 bg-white border border-brand-pink/20 rounded-full text-sm font-medium text-brand-text-body hover:bg-brand-pink hover:text-white transition-all shadow-sm",
                                                children: PRICING_TEMPLATES[key].name
                                            }, key, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 162,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif font-bold text-2xl mb-4 text-brand-text-title flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 175,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Ingredient Costs"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 p-4 rounded-xl border border-gray-100 bg-gray-50",
                                        children: [
                                            ingredients.map((ing, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center group bg-white sm:bg-transparent p-3 sm:p-0 rounded-lg shadow-sm sm:shadow-none border sm:border-none border-gray-100 relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-grow",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-brand-text-body/60 mb-1 sm:hidden",
                                                                    children: "Ingredient Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: `Ingredient ${index + 1} (e.g. Flour)`,
                                                                    value: ing.name,
                                                                    onChange: (e)=>handleIngredientChange(ing.id, 'name', e.target.value),
                                                                    className: inputStyles,
                                                                    "aria-label": `Ingredient ${index + 1} name`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full sm:w-32 relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-brand-text-body/60 mb-1 sm:hidden",
                                                                    children: "Cost ($)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                                                            children: "$"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                            lineNumber: 195,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            placeholder: "0.00",
                                                                            value: ing.cost,
                                                                            onChange: (e)=>handleIngredientChange(ing.id, 'cost', e.target.value),
                                                                            className: `${inputStyles} pl-7`,
                                                                            "aria-label": `Ingredient ${index + 1} cost`,
                                                                            min: "0",
                                                                            step: "0.01"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeIngredient(ing.id),
                                                            className: `absolute top-2 right-2 sm:static sm:top-auto sm:right-auto p-2 text-gray-400 hover:text-red-500 transition-colors ${ingredients.length === 1 ? 'opacity-0 pointer-events-none' : ''}`,
                                                            title: "Remove ingredient",
                                                            children: "×"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, ing.id, true, {
                                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addIngredient,
                                                className: "w-full py-2 border-2 border-dashed border-brand-pink/30 text-brand-pink font-bold rounded-lg hover:bg-brand-pink/5 transition-colors",
                                                children: "+ Add Ingredient"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 217,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-brand-text-body/60 uppercase tracking-wide mb-2",
                                                children: "Quick Add Common Items"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 224,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: QUICK_ADD_INGREDIENTS.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>addQuickIngredient(item.name, item.cost),
                                                        className: "px-3 py-1.5 bg-white border border-brand-border rounded-full text-xs font-medium text-brand-text-body hover:border-brand-pink hover:text-brand-pink transition-colors shadow-sm",
                                                        children: [
                                                            "+ ",
                                                            item.name
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 225,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif font-bold text-2xl mb-4 text-brand-text-title flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 241,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Labor & Details"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 240,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "laborRate",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Hourly Rate ($)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "laborRate",
                                                        type: "number",
                                                        value: laborRate,
                                                        onChange: (e)=>handleNumberInput(setLaborRate, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 245,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "laborHours",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Hours Worked"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "laborHours",
                                                        type: "number",
                                                        value: laborHours,
                                                        onChange: (e)=>handleNumberInput(setLaborHours, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 249,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "overhead",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Overhead (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "overhead",
                                                        type: "number",
                                                        value: overhead,
                                                        onChange: (e)=>handleNumberInput(setOverhead, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 253,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "profitMargin",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Profit Margin (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "profitMargin",
                                                        type: "number",
                                                        value: profitMargin,
                                                        onChange: (e)=>handleNumberInput(setProfitMargin, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 257,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "servings",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Number of Servings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "servings",
                                                        type: "number",
                                                        value: servings,
                                                        onChange: (e)=>handleNumberInput(setServings, e.target.value),
                                                        className: inputStyles,
                                                        min: "1",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 261,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 244,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 239,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif font-bold text-2xl mb-4 text-brand-text-title flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 270,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Delivery & Tax"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 269,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "deliveryBase",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Base Delivery Fee ($)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "deliveryBase",
                                                        type: "number",
                                                        value: deliveryBase,
                                                        onChange: (e)=>handleNumberInput(setDeliveryBase, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 274,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "taxRate",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Tax Rate (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "taxRate",
                                                        type: "number",
                                                        value: taxRate,
                                                        onChange: (e)=>handleNumberInput(setTaxRate, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 278,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "deliveryMileage",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Miles (Round Trip)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "deliveryMileage",
                                                        type: "number",
                                                        value: deliveryMileage,
                                                        onChange: (e)=>handleNumberInput(setDeliveryMileage, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 282,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "mileageRate",
                                                        className: "block text-sm font-bold text-brand-text-body mb-1",
                                                        children: "Rate per Mile ($)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "mileageRate",
                                                        type: "number",
                                                        value: mileageRate,
                                                        onChange: (e)=>handleNumberInput(setMileageRate, e.target.value),
                                                        className: inputStyles,
                                                        min: "0",
                                                        step: "any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 286,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 273,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 268,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-6 h-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-brand-pink-light to-white p-8 rounded-2xl shadow-sm border border-brand-pink/20 text-center relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 w-full h-2 bg-brand-pink"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 296,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif font-bold text-3xl text-brand-text-title mb-8",
                                        children: "Recommended Price"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 297,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !isValid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-brand-text-body/60 italic py-8",
                                        children: "Enter ingredients and labor details to see your pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 300,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-brand-text-body uppercase tracking-wider font-semibold mb-1",
                                                        children: "Total Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-serif font-bold text-6xl text-brand-pink tracking-tight",
                                                                children: [
                                                                    "$",
                                                                    totalPrice
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleCopy(totalPrice, 'total'),
                                                                title: "Copy total price",
                                                                className: "p-2 hover:bg-brand-pink/10 rounded-full transition-colors",
                                                                children: copied === 'total' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircleIcon"], {
                                                                    className: "w-6 h-6 text-green-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 67
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClipboardIcon"], {
                                                                    className: "w-6 h-6 text-brand-text-body/40 hover:text-brand-pink"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 124
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 305,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 pt-6 border-t border-brand-pink/10 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-text-body/70",
                                                                children: "Ingredients"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 317,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-brand-text-title",
                                                                children: [
                                                                    "$",
                                                                    ingredientCost
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-text-body/70",
                                                                children: "Labor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-brand-text-title",
                                                                children: [
                                                                    "$",
                                                                    laborCost
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-text-body/70",
                                                                children: "Overhead"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-brand-text-title",
                                                                children: [
                                                                    "$",
                                                                    overheadAmount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-green-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Profit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: [
                                                                    "+$",
                                                                    profitAmount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    parseFloat(deliveryTotal) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-blue-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Delivery"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: [
                                                                    "+$",
                                                                    deliveryTotal
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    parseFloat(taxAmount) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-brand-text-body/70",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Tax"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: [
                                                                    "+$",
                                                                    taxAmount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 315,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 pt-6 border-t border-brand-pink/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-brand-text-body/70 mb-1",
                                                                children: "Cost Per Serving"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-2xl text-brand-text-title",
                                                                children: [
                                                                    "$",
                                                                    pricePerServing
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-brand-text-body/70 mb-1",
                                                                children: "Base Cost (No Profit)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-2xl text-brand-text-title",
                                                                children: [
                                                                    "$",
                                                                    subtotal
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 304,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "💡 Tip:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                            lineNumber: 362,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Don't forget to include the cost of packaging (boxes, boards, ribbon) in your ingredient list!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                            lineNumber: 363,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                    lineNumber: 361,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 360,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 bg-brand-pink/5 p-4 rounded-lg border border-brand-pink/10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-brand-text-body mb-2 font-medium",
                                        children: "Need to resize your batch first?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 369,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/tools/recipe-scaler",
                                        className: "text-brand-pink hover:text-brand-pink-dark font-bold underline decoration-2 underline-offset-2 transition-colors",
                                        children: "Use Free Recipe Scaler →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 370,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 368,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PremiumPromo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumPromo"], {
                                variant: "inline-tool"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 376,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                lineNumber: 152,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CakePricingCalculatorContent, {}, void 0, false, {
                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                lineNumber: 380,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
        lineNumber: 145,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CakePricingCalculator, "t1ggEIAc+p53yVFU6q4eHqedFJg=");
_c = CakePricingCalculator;
const CakePricingCalculatorContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 space-y-12 pt-8 border-t border-brand-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-brand-pink/5 to-white p-6 rounded-2xl border border-brand-pink/10 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif font-bold text-xl mb-4 text-brand-text-title",
                        children: "Recommended Gear for Your Business"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                        lineNumber: 389,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://amzn.to/3PqXy8C",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-pink hover:shadow-md transition-all group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "📦"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 392,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-brand-text-title group-hover:text-brand-pink transition-colors",
                                                children: "Cake Box Starter Kit"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 394,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-brand-text-body/70",
                                                children: "Professional packaging adds value to your cakes."
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 395,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 393,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 391,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://amzn.to/3PqXy8C",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-pink hover:shadow-md transition-all group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "📝"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 399,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-brand-text-title group-hover:text-brand-pink transition-colors",
                                                children: "Order Order Pad"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 401,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-brand-text-body/70",
                                                children: "Keep track of every custom order detail."
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 402,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 400,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 398,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                        lineNumber: 390,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-brand-text-body/40 mt-3 text-center",
                        children: "*As an Amazon Associate, we earn from qualifying purchases. This helps keep our tools free!"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                        lineNumber: 406,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                lineNumber: 388,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-8",
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
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 414,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "How to Use"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 413,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-brand-text-body/80 mb-4",
                                children: [
                                    "New to pricing? Read our ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/cake-pricing-guide",
                                        className: "text-brand-pink font-bold hover:underline",
                                        children: "Ultimate Guide to Cake Pricing"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 418,
                                        columnNumber: 46
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " for a deep dive."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 417,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Select a Template:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 421,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Start quickly with a preset for Wedding Cakes, Birthdays, or Cupcakes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 421,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "List Ingredients:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 422,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Enter every item used. Don't forget small things like baking powder, salt, or packaging (boxes, boards)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 422,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Set Labor:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 423,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Be honest about your hourly rate and the total time spent (baking, decorating, cleaning)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 423,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Add Overhead:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 424,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " This covers electricity, water, equipment wear, and marketing. 10-20% is standard for home bakeries."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 424,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Delivery & Tax:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 425,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Add a base delivery fee plus mileage, and don't forget to collect sales tax if required!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 425,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Determine Profit:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 426,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Set your desired profit margin (usually 30-50%+) to ensure business growth."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 426,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 420,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                        lineNumber: 412,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif font-bold text-xl mb-4 text-brand-text-title",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 431,
                                columnNumber: 17
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
                                                    "What is a good profit margin?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 434,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: [
                                                    "For custom cakes and baked goods, a profit margin of ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "30% to 50%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 82
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " is recommended. This ensures you're paid for your talent, not just your time and ingredients."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 438,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 433,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "How do I calculate overhead?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 443,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: [
                                                    "Overhead includes indirect costs like utilities, insurance, and equipment. A simple method for home bakers is to add ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "10-20%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 146
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " to your ingredient and labor costs."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 447,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 442,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "Should I charge for tasting?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 452,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: "Yes! Tasting boxes cost money and time to produce. Many bakers charge a fee (e.g., $30-$50) which can be deducted from the final order total if they book with you."
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 456,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 451,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "How do I price different cake flavors?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 461,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: [
                                                    "Premium flavors like ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Red Velvet Cake"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 50
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " or ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Carrot Cake"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 86
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " often have more expensive ingredients (cream cheese, nuts) than a standard ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Vanilla Cake"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 190
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " or ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Chocolate Cake"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 223
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ". Always calculate the specific cost for each flavor profile."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 465,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 460,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "Should I charge for delivery?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 470,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: [
                                                    "Absolutely. ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Cake delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " requires time, gas, and vehicle wear. Charge a base fee plus a per-mile rate. For delicate items like a ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Wedding Cake"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 176
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ", factor in the stress and setup time too!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 474,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 469,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "Can I price dessert boxes and gift baskets?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 479,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: [
                                                    "Yes! This tool works for ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Dessert Gifting"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 54
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " too. Whether it's ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Cookie Gift Baskets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 105
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ", ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Brownie Gift Delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 143
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ", or ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Chocolate-Covered Strawberries"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 186
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ", simply list your components as ingredients. Don't forget to price the ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Luxury Gift Box"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 305
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " packaging!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 483,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 478,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors",
                                                children: [
                                                    "How do I price special diet items?",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-pink group-open:rotate-180 transition-transform",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 488,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-brand-text-body/80 mt-2 leading-relaxed",
                                                children: [
                                                    "Niche items like ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Gluten-Free Cakes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 46
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ", ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Vegan Cakes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 82
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ", or ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Keto Desserts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 115
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " often require specialized, pricier ingredients (almond flour, sweeteners). Ensure you pass these costs to the customer to maintain your profit on these ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Gourmet Dessert Delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 298
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " items."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                                lineNumber: 492,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                        lineNumber: 487,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                                lineNumber: 432,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                        lineNumber: 430,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/CakePricingCalculator.tsx",
                lineNumber: 411,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/CakePricingCalculator.tsx",
        lineNumber: 386,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CakePricingCalculatorContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "CakePricingCalculator");
__turbopack_context__.k.register(_c1, "CakePricingCalculatorContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_tools_CakePricingCalculator_tsx_4d324aef._.js.map