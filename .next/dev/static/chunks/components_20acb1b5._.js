(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MainContent.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/MainContent.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/MainContentWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContentWrapper",
    ()=>MainContentWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MainContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/slugs.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MainContentWrapper = ({ activeTool, activePost })=>{
    _s();
    console.log('MainContentWrapper activeTool:', activeTool);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleNavigate = (path)=>{
        router.push(path);
    };
    const setActiveTool = (toolId)=>{
        const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])(toolId);
        router.push(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainContent"], {
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
_s(MainContentWrapper, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MainContentWrapper;
var _c;
__turbopack_context__.k.register(_c, "MainContentWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_20acb1b5._.js.map