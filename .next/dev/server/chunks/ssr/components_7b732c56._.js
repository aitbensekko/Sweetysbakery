module.exports = [
"[project]/components/MainContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/MainContent.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/MainContentWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContentWrapper",
    ()=>MainContentWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MainContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/slugs.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const MainContentWrapper = ({ activeTool, activePost })=>{
    console.log('MainContentWrapper activeTool:', activeTool);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleNavigate = (path)=>{
        router.push(path);
    };
    const setActiveTool = (toolId)=>{
        const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])(toolId);
        router.push(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContent"], {
        activeTool: activeTool,
        setActiveTool: setActiveTool,
        activePost: activePost,
        handleNavigate: handleNavigate
    }, void 0, false, {
        fileName: "[project]/components/MainContentWrapper.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=components_7b732c56._.js.map