module.exports = [
"[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvestmentCalculator",
    ()=>InvestmentCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$tools$2f$ToolContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/tools/ToolContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const InvestmentCalculator = ({ setActiveTool, breadcrumbs })=>{
    const [startAmount, setStartAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('10000');
    const [additionalContribution, setAdditionalContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('500');
    const [contributionFrequency, setContributionFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('12'); // Monthly
    const [interestRate, setInterestRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('8');
    const [compoundFrequency, setCompoundFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('12'); // Monthly
    const [timeSpan, setTimeSpan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('20');
    const [inflationRate, setInflationRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleInputChange = (setter, value)=>{
        if (parseFloat(value) < 0) return;
        setter(value);
    };
    const { results, schedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const P = parseFloat(startAmount) || 0;
        const PMT = parseFloat(additionalContribution) || 0;
        const r = (parseFloat(interestRate) || 0) / 100;
        const t = parseInt(timeSpan) || 0;
        const n = parseInt(compoundFrequency) || 1;
        const c = parseInt(contributionFrequency) || 1;
        const inflation = parseFloat(inflationRate) / 100 || 0;
        if (t <= 0) {
            return {
                results: {
                    endBalance: P,
                    totalPrincipal: P,
                    totalInterest: 0,
                    inflationAdjustedBalance: P
                },
                schedule: []
            };
        }
        const schedule = [];
        let currentBalance = P;
        const totalMonths = t * 12;
        const monthlyContribution = PMT * c / 12;
        let interestForYear = 0;
        let contributionsForYear = 0;
        let startingBalance = P;
        for(let month = 1; month <= totalMonths; month++){
            // Add contribution at the start of the month
            currentBalance += monthlyContribution;
            contributionsForYear += monthlyContribution;
            // Check if it's a compounding period
            if (month % (12 / n) === 0) {
                const interestThisPeriod = currentBalance * (r / n);
                interestForYear += interestThisPeriod;
                currentBalance += interestThisPeriod;
            }
            // At the end of each year, push to schedule
            if (month % 12 === 0) {
                schedule.push({
                    year: month / 12,
                    startingBalance,
                    interestEarned: interestForYear,
                    totalContributions: contributionsForYear,
                    endingBalance: currentBalance
                });
                startingBalance = currentBalance;
                interestForYear = 0;
                contributionsForYear = 0;
            }
        }
        // Handle cases where timespan is not a whole number of years
        if (totalMonths % 12 !== 0) {
            const lastYear = Math.ceil(totalMonths / 12);
            schedule.push({
                year: lastYear,
                startingBalance,
                interestEarned: interestForYear,
                totalContributions: contributionsForYear,
                endingBalance: currentBalance
            });
        }
        const totalPrincipal = P + PMT * c * t;
        const totalInterest = currentBalance - totalPrincipal;
        const inflationAdjustedBalance = inflation > 0 ? currentBalance / Math.pow(1 + inflation, t) : currentBalance;
        return {
            results: {
                endBalance: currentBalance,
                totalPrincipal,
                totalInterest,
                inflationAdjustedBalance
            },
            schedule
        };
    }, [
        startAmount,
        additionalContribution,
        contributionFrequency,
        interestRate,
        compoundFrequency,
        timeSpan,
        inflationRate
    ]);
    const handleExportCsv = ()=>{
        if (schedule.length === 0) return;
        const headers = "Year,Starting Balance,Total Contributions,Interest Earned,Ending Balance";
        const csvContent = [
            headers,
            ...schedule.map((entry)=>[
                    entry.year,
                    entry.startingBalance.toFixed(2),
                    entry.totalContributions.toFixed(2),
                    entry.interestEarned.toFixed(2),
                    entry.endingBalance.toFixed(2)
                ].join(','))
        ].join('\n');
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", `investment_schedule_${Date.now()}.csv`);
        link.click();
    };
    const copyResults = ()=>{
        const text = `Investment Calculator Results:\nStarting Amount: $${parseFloat(startAmount).toLocaleString()}\nMonthly Contribution: $${parseFloat(additionalContribution).toLocaleString()}\nInterest Rate: ${interestRate}%\nTime Span: ${timeSpan} years\n\nEnd Balance: $${results.endBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2
        })}\nTotal Principal: $${results.totalPrincipal.toLocaleString(undefined, {
            minimumFractionDigits: 2
        })}\nTotal Interest: $${results.totalInterest.toLocaleString(undefined, {
            minimumFractionDigits: 2
        })}${inflationRate ? `\nInflation-Adjusted Balance: $${results.inflationAdjustedBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2
        })}` : ''}`;
        navigator.clipboard.writeText(text).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        });
    };
    const chartData = {
        labels: schedule.map((s)=>`Year ${s.year}`),
        datasets: [
            {
                label: 'Total Balance',
                data: schedule.map((s)=>s.endingBalance),
                borderColor: 'rgb(230, 90, 136)',
                backgroundColor: 'rgba(230, 90, 136, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Total Contributions',
                data: schedule.map((s, idx)=>{
                    const totalContributed = parseFloat(startAmount) + parseFloat(additionalContribution) * parseInt(contributionFrequency) * (idx + 1);
                    return totalContributed;
                }),
                borderColor: 'rgb(74, 63, 63)',
                backgroundColor: 'rgba(74, 63, 63, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$tools$2f$ToolContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolContainer"], {
        title: "Free Investment Growth Calculator",
        description: "Calculate the future value of your investment and see how compound interest can grow your money over time. A powerful tool for retirement planning and financial goals.",
        setActiveTool: setActiveTool,
        breadcrumbs: breadcrumbs,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-5 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-serif font-bold text-xl text-brand-text-title mb-4",
                                    children: "Investment Details"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                    lineNumber: 179,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "startAmount",
                                                    className: "text-sm font-bold text-gray-500 mb-2 block",
                                                    children: "Starting Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DollarSignIcon"], {
                                                            className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "startAmount",
                                                            type: "number",
                                                            value: startAmount,
                                                            onChange: (e)=>handleInputChange(setStartAmount, e.target.value),
                                                            className: "w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg text-xl font-bold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                            min: "0",
                                                            step: "any"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 181,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "contribution",
                                                            className: "text-sm font-bold text-gray-500 mb-2 block",
                                                            children: "Additional Contribution"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DollarSignIcon"], {
                                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "contribution",
                                                                    type: "number",
                                                                    value: additionalContribution,
                                                                    onChange: (e)=>handleInputChange(setAdditionalContribution, e.target.value),
                                                                    className: "w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                    min: "0",
                                                                    step: "any"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "contributionFreq",
                                                            className: "text-sm font-bold text-gray-500 mb-2 block",
                                                            children: "Frequency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            id: "contributionFreq",
                                                            value: contributionFrequency,
                                                            onChange: (e)=>setContributionFrequency(e.target.value),
                                                            className: "w-full px-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "12",
                                                                    children: "Monthly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "1",
                                                                    children: "Yearly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "52",
                                                                    children: "Weekly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "4",
                                                                    children: "Quarterly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 197,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "interestRate",
                                                            className: "text-sm font-bold text-gray-500 mb-2 block",
                                                            children: "Interest Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "interestRate",
                                                                    type: "number",
                                                                    value: interestRate,
                                                                    onChange: (e)=>handleInputChange(setInterestRate, e.target.value),
                                                                    className: "w-full pl-4 pr-10 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                    min: "0",
                                                                    step: "0.1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PercentIcon"], {
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "timeSpan",
                                                            className: "text-sm font-bold text-gray-500 mb-2 block",
                                                            children: "Time Span"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "timeSpan",
                                                                    type: "number",
                                                                    value: timeSpan,
                                                                    onChange: (e)=>handleInputChange(setTimeSpan, e.target.value),
                                                                    className: "w-full pl-4 pr-16 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                    min: "1",
                                                                    step: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-brand-text-body/60 font-medium",
                                                                    children: "years"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "compoundFreq",
                                                            className: "text-sm font-bold text-gray-500 mb-2 block",
                                                            children: "Compound Frequency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            id: "compoundFreq",
                                                            value: compoundFrequency,
                                                            onChange: (e)=>setCompoundFrequency(e.target.value),
                                                            className: "w-full px-4 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "1",
                                                                    children: "Annually"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "2",
                                                                    children: "Semi-Annually"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "4",
                                                                    children: "Quarterly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "12",
                                                                    children: "Monthly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "365",
                                                                    children: "Daily"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "inflationRate",
                                                            className: "text-sm font-bold text-gray-500 mb-2 block",
                                                            children: "Inflation Rate (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "inflationRate",
                                                                    type: "number",
                                                                    value: inflationRate,
                                                                    onChange: (e)=>handleInputChange(setInflationRate, e.target.value),
                                                                    placeholder: "0",
                                                                    className: "w-full pl-4 pr-10 py-3 bg-gray-50 border border-brand-border rounded-lg font-semibold focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink",
                                                                    min: "0",
                                                                    step: "0.1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PercentIcon"], {
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 262,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                            lineNumber: 178,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                        lineNumber: 177,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-brand-pink-light p-8 rounded-2xl border border-brand-pink/20 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DollarSignIcon"], {
                                            className: "w-12 h-12 mx-auto text-brand-pink mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 302,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-2xl text-brand-text-title mb-6 text-center",
                                            children: "Investment Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 303,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-6 rounded-xl mb-6 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 mb-1",
                                                    children: "Future Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-serif font-bold text-5xl text-brand-pink",
                                                    children: [
                                                        "$",
                                                        results.endBalance.toLocaleString(undefined, {
                                                            minimumFractionDigits: 0,
                                                            maximumFractionDigits: 0
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                inflationRate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-2",
                                                    children: [
                                                        "$",
                                                        results.inflationAdjustedBalance.toLocaleString(undefined, {
                                                            minimumFractionDigits: 0,
                                                            maximumFractionDigits: 0
                                                        }),
                                                        " in today's dollars"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 305,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 text-sm mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-2 border-b border-brand-pink/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-text-body",
                                                            children: "Total Contributions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-text-title",
                                                            children: [
                                                                "$",
                                                                results.totalPrincipal.toLocaleString(undefined, {
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 0
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-2 border-b border-brand-pink/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-text-body",
                                                            children: "Total Interest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-green-600",
                                                            children: [
                                                                "$",
                                                                results.totalInterest.toLocaleString(undefined, {
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 0
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-text-body",
                                                            children: "Return on Investment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-brand-pink",
                                                            children: [
                                                                (results.totalInterest / results.totalPrincipal * 100).toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 315,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: copyResults,
                                                    className: "flex-1 py-3 bg-brand-pink text-white font-bold rounded-xl shadow-md hover:bg-brand-pink-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2",
                                                    children: [
                                                        copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckCircleIcon"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 47
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClipboardIcon"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 89
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        copied ? 'Copied!' : 'Copy'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleExportCsv,
                                                    className: "flex-1 py-3 bg-white text-brand-pink font-bold rounded-xl border-2 border-brand-pink shadow-md hover:bg-brand-pink/5 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DownloadIcon"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "CSV"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 330,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                    lineNumber: 301,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex gap-2 items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg leading-none",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                lineNumber: 350,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Tip:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " The S&P 500 has historically returned about 10% annually. Start early and contribute regularly for best results!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                lineNumber: 351,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                        lineNumber: 349,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                    lineNumber: 348,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            schedule.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif font-bold text-2xl text-brand-text-title mb-6",
                        children: "Investment Growth Over Time"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                        lineNumber: 362,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-2xl border border-brand-border shadow-sm mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                            options: {
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top'
                                    },
                                    title: {
                                        display: false
                                    }
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: {
                                            callback: function(value) {
                                                return '$' + value.toLocaleString();
                                            }
                                        }
                                    }
                                }
                            },
                            data: chartData
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                            lineNumber: 364,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                        lineNumber: 363,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            style: {
                                maxHeight: '500px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-brand-pink-light border-b border-brand-border sticky top-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-4 px-6 text-left font-bold text-brand-text-title",
                                                    children: "Year"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-4 px-6 text-right font-bold text-brand-text-title",
                                                    children: "Starting Balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-4 px-6 text-right font-bold text-brand-text-title",
                                                    children: "Contributions"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-4 px-6 text-right font-bold text-brand-text-title",
                                                    children: "Interest Earned"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-4 px-6 text-right font-bold text-brand-text-title",
                                                    children: "Ending Balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 390,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                        lineNumber: 389,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: schedule.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-6 font-semibold text-brand-text-title",
                                                        children: entry.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-6 text-right font-medium",
                                                        children: [
                                                            "$",
                                                            entry.startingBalance.toLocaleString(undefined, {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-6 text-right font-medium",
                                                        children: [
                                                            "$",
                                                            entry.totalContributions.toLocaleString(undefined, {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-6 text-right font-medium text-green-600",
                                                        children: [
                                                            "$",
                                                            entry.interestEarned.toLocaleString(undefined, {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-6 text-right font-bold text-brand-pink",
                                                        children: [
                                                            "$",
                                                            entry.endingBalance.toLocaleString(undefined, {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, entry.year, true, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                lineNumber: 400,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                        lineNumber: 398,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                lineNumber: 388,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                            lineNumber: 387,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                        lineNumber: 386,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                lineNumber: 361,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 pt-8 border-t border-brand-border max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif font-bold text-2xl mb-4 text-brand-text-title",
                        children: "The Magic of Compound Interest"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                        lineNumber: 416,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: 'This calculator demonstrates the power of compound interest, which Albert Einstein reportedly called the "eighth wonder of the world." It\'s the process where you earn interest not only on your initial principal but also on the accumulated interest from previous periods.'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                lineNumber: 418,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-brand-text-title",
                                children: "Key Principles:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                lineNumber: 419,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Start Early:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                lineNumber: 422,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " The longer your money is invested, the more time it has to grow. Even small amounts can grow significantly over several decades."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                        lineNumber: 421,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Contribute Regularly:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                lineNumber: 425,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Making consistent contributions, no matter how small, dramatically increases your end balance. It's the key to building wealth over time."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                        lineNumber: 424,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Interest Rate Matters:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                lineNumber: 428,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " A higher rate of return can make a substantial difference in the long run. The S&P 500 has historically returned an average of around 10% per year, though past performance is not indicative of future results."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                        lineNumber: 427,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Compound Frequency:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                lineNumber: 431,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " More frequent compounding (daily vs. annually) results in slightly higher returns, though the difference is usually modest."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                        lineNumber: 430,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                lineNumber: 420,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-blue-50 border border-blue-200 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfoIcon"], {
                                            className: "w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 435,
                                            columnNumber: 63
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Disclaimer:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 136
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " This calculator is for informational and illustrative purposes only and does not constitute financial advice. Investment returns are not guaranteed, and past performance does not predict future results."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                            lineNumber: 435,
                                            columnNumber: 130
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                    lineNumber: 435,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                                lineNumber: 434,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                        lineNumber: 417,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
                lineNumber: 415,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/tools/InvestmentCalculator.tsx",
        lineNumber: 170,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=Desktop_Projects_TEST3_components_tools_InvestmentCalculator_tsx_5d17eece._.js.map