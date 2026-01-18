(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Projects/TEST3/components/AdSenseAd.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const AdSenseAd = ({ slotId = '4002915412', format = 'rectangle', style, className = '' })=>{
    _s();
    const adRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdSenseAd.useEffect": ()=>{
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
            } catch (err) {
                console.error('AdSense error:', err);
            }
        }
    }["AdSenseAd.useEffect"], []);
    const defaultStyle = {
        display: 'inline-block',
        width: '300px',
        height: '250px',
        ...style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-center my-6 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
            ref: adRef,
            className: "adsbygoogle",
            style: defaultStyle,
            "data-ad-client": "ca-pub-8209081290130316",
            "data-ad-slot": slotId,
            "data-ad-format": format
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/AdSenseAd.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/AdSenseAd.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdSenseAd, "UdpN7xBEWYn9NQkm3vObuBIb4OU=");
_c = AdSenseAd;
const __TURBOPACK__default__export__ = AdSenseAd;
var _c;
__turbopack_context__.k.register(_c, "AdSenseAd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/ImageModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageModal",
    ()=>ImageModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$AdSenseAd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/AdSenseAd.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ImageModal = ({ imageUrl, onClose, onPrev, onNext, currentIndex = 0, totalImages = 0 })=>{
    _s();
    const [showAd, setShowAd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageModal.useEffect": ()=>{
            const handleKeyDown = {
                "ImageModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') onClose();
                    if (!showAd) {
                        if (e.key === 'ArrowLeft') onPrev();
                        if (e.key === 'ArrowRight') onNext();
                    }
                }
            }["ImageModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "ImageModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["ImageModal.useEffect"];
        }
    }["ImageModal.useEffect"], [
        onClose,
        onPrev,
        onNext,
        showAd
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageModal.useEffect": ()=>{
            if (showAd && countdown > 0) {
                const timer = setTimeout({
                    "ImageModal.useEffect.timer": ()=>setCountdown(countdown - 1)
                }["ImageModal.useEffect.timer"], 1000);
                return ({
                    "ImageModal.useEffect": ()=>clearTimeout(timer)
                })["ImageModal.useEffect"];
            } else if (countdown === 0) {
                setShowAd(false);
            }
        }
    }["ImageModal.useEffect"], [
        showAd,
        countdown
    ]);
    const handleSkipAd = ()=>{
        setShowAd(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm fade-in",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {
                    className: "w-10 h-10"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                    lineNumber: 45,
                    columnNumber: 128
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            !showAd && totalImages > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full font-semibold",
                children: [
                    currentIndex + 1,
                    " / ",
                    totalImages
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            showAd ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-8 max-w-md w-full text-center",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4 text-brand-text-title",
                        children: [
                            "Please wait ",
                            countdown,
                            " seconds"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$AdSenseAd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-4",
                        children: [
                            "Your image will appear in ",
                            countdown,
                            " second",
                            countdown !== 1 ? 's' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    countdown === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSkipAd,
                        className: "mt-4 px-6 py-2 bg-brand-pink text-white rounded-full font-bold hover:opacity-90 transition-opacity",
                        children: "View Image"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                        lineNumber: 60,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                lineNumber: 55,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onPrev();
                        },
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 bg-black/20 rounded-full transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeftIcon"], {
                            className: "w-8 h-8"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onNext();
                        },
                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 bg-black/20 rounded-full transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightIcon"], {
                            className: "w-8 h-8"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                            lineNumber: 74,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imageUrl,
                            alt: "Enlarged bakery item",
                            className: "max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl",
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/ImageModal.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImageModal, "eWu98j1Vaq6y05sNkUxuWf0WM1A=");
_c = ImageModal;
var _c;
__turbopack_context__.k.register(_c, "ImageModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/utils/slugs.ts [app-client] (ecmascript)");
;
;
;
const Footer = ({ setActiveTool })=>{
    const handleNavClick = (e, toolId)=>{
        e.preventDefault();
        setActiveTool(toolId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "text-center mt-16 border-t border-brand-border pt-10 text-sm text-brand-text-body/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center flex-wrap gap-x-8 gap-y-2 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])('privacy-policy'),
                        onClick: (e)=>handleNavClick(e, 'privacy-policy'),
                        className: "hover:text-brand-pink transition-colors",
                        children: "Privacy Policy"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])('terms-of-use'),
                        onClick: (e)=>handleNavClick(e, 'terms-of-use'),
                        className: "hover:text-brand-pink transition-colors",
                        children: "Terms of Use"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])('contact-us'),
                        onClick: (e)=>handleNavClick(e, 'contact-us'),
                        className: "hover:text-brand-pink transition-colors",
                        children: "Contact Us"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])('disclaimer'),
                        onClick: (e)=>handleNavClick(e, 'disclaimer'),
                        className: "hover:text-brand-pink transition-colors",
                        children: "Disclaimer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])('about'),
                        onClick: (e)=>handleNavClick(e, 'about'),
                        className: "hover:text-brand-pink transition-colors",
                        children: "About Us"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])('baking-sources'),
                        onClick: (e)=>handleNavClick(e, 'baking-sources'),
                        className: "hover:text-brand-pink transition-colors",
                        children: "Sources"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-6 my-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.instagram.com/sweetys.bakery/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Instagram",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramIcon"], {
                            className: "w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 134
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.pinterest.com/Sweetysbakerys/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Pinterest",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinterestIcon"], {
                            className: "w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                            lineNumber: 28,
                            columnNumber: 134
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://web.facebook.com/SaPatissl/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Facebook",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                            className: "w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                            lineNumber: 29,
                            columnNumber: 127
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.reddit.com/r/Baking/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Reddit",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedditIcon"], {
                            className: "w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                            lineNumber: 30,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Sweety's Bakery Tools. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Footer.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/Ad.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Ad = ({ slotId, width = 300, height = 250, layout = "fixed" })=>{
    const adClient = 'ca-pub-8209081290130316';
    const adSlot = slotId || '4002915412'; // Default to user provided slot
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center my-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("amp-ad", {
            layout: layout,
            width: width,
            height: height,
            type: "adsense",
            "data-ad-client": adClient,
            "data-ad-slot": adSlot
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Ad.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Ad.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Ad;
const __TURBOPACK__default__export__ = Ad;
var _c;
__turbopack_context__.k.register(_c, "Ad");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Footer.tsx [app-client] (ecmascript)");
;
;
const HeartIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-16 h-16 text-brand-pink mx-auto",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 0,
            d: "M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
            lineNumber: 9,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = HeartIcon;
const About = ({ setActiveTool, breadcrumbs })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-10 fade-in",
        children: [
            breadcrumbs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartIcon, {}, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-4xl md:text-5xl font-bold text-brand-text-title mt-4",
                                children: "Our Story"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-brand-text-body/80 italic max-w-2xl mx-auto",
                                children: "Baking is about more than just flour and sugar. It's about love, community, and the joy of creating something wonderful from scratch."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl font-bold text-brand-text-title mb-4",
                                children: "Welcome to Sweety's Bakery"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Sweety's Bakery began in a small home kitchen with a simple mission: to create the most delicious, heartwarming baked goods possible. Founded by Sarah Aitdahan, a lifelong baker with a passion for perfecting the classics, our bakery has always been about quality, craftsmanship, and a touch of sweetness in every bite."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "From flaky croissants to decadent, multi-tiered wedding cakes, our philosophy is simple: use the best ingredients, honor time-tested techniques, and bake everything with love."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl font-bold text-brand-text-title mt-12 mb-4",
                                children: "Why the Free Tools?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: 'As our bakery grew, so did the number of questions from fellow bakers, both aspiring professionals and passionate home cooks. "How do you price your cakes?" "How do you scale a recipe for a party?" "What\'s the best substitute for buttermilk?"'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We realized that the knowledge we gained through years of trial and error could be incredibly valuable to others. We believe that baking should be accessible and joyful for everyone. That's why we created Sweety's Bakery Tools."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "This website is our way of giving back to the incredible baking community. It's a collection of free calculators, converters, and creative assistants we wish we'd had when we were starting out. Our goal is to empower you to bake smarter, price with confidence, and unleash your creativity in the kitchen."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 bg-brand-pink-light p-8 rounded-xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif text-2xl font-bold text-brand-text-title",
                                children: "Thank You for Being a Part of Our Community"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-brand-text-body/90 max-w-2xl mx-auto",
                                children: "Whether you're using our tools to launch your own baking business or just to perfect your favorite cookie recipe, we're thrilled to be a small part of your journey."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 font-bold text-lg text-brand-text-body",
                                children: "Happy Baking!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-lg text-brand-pink font-semibold italic",
                                children: "~ Sarah Aitdahan & The Sweety's Bakery Team"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-brand-text-body/70",
                                children: "This web app was created with love by its owner, Sarah Aitdahan from Morocco."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                setActiveTool: setActiveTool
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/About.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = About;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeartIcon");
__turbopack_context__.k.register(_c1, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrivacyPolicy",
    ()=>PrivacyPolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/utils/slugs.ts [app-client] (ecmascript)");
;
;
;
const PrivacyPolicy = ({ setActiveTool, breadcrumbs })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-10 fade-in",
        children: [
            breadcrumbs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-4xl md:text-5xl font-bold text-brand-text-title",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-brand-text-body/60",
                                children: [
                                    "Last Updated: ",
                                    new Date().toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title",
                                children: "Introduction"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Welcome to Sweety's Bakery Tools. We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "Information We Collect"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Our website is designed to be a free resource for the baking community. As such, we collect a minimal amount of information:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Non-Personal Information:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                                lineNumber: 32,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " We do not use analytics tools, so we do not collect any personal or non-personal data about your visit. Your use of our tools is completely anonymous."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "User-Inputted Data:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                                lineNumber: 33,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " The data you enter into our calculators (e.g., ingredient costs, recipe quantities) is processed in your browser and is not stored, saved, or transmitted to our servers. Once you leave the page, this information is gone."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "How We Use Information"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Since we do not collect or store any personal information, we do not use it for any purpose. The data you enter into the calculators is used solely to perform the calculation you requested at that moment."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "Third-Party Links"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Our website may contain links to third-party websites, such as our Pinterest page. Please be aware that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "Changes to This Policy"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "If you have any questions about this Privacy Policy, please feel free to ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])('contact-us'),
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setActiveTool('contact-us');
                                        },
                                        className: "font-bold text-brand-pink hover:underline",
                                        children: "contact us"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                        lineNumber: 53,
                                        columnNumber: 98
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                setActiveTool: setActiveTool
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/PrivacyPolicy.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PrivacyPolicy;
var _c;
__turbopack_context__.k.register(_c, "PrivacyPolicy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TermsOfUse",
    ()=>TermsOfUse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Footer.tsx [app-client] (ecmascript)");
;
;
const TermsOfUse = ({ setActiveTool, breadcrumbs })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-10 fade-in",
        children: [
            breadcrumbs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-4xl md:text-5xl font-bold text-brand-text-title",
                                children: "Terms of Use"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-brand-text-body/60",
                                children: [
                                    "Last Updated: ",
                                    new Date().toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title",
                                children: "1. Agreement to Terms"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: 'By accessing and using Sweety\'s Bakery Tools (the "Website"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Website.'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "2. Use of Tools"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "All tools, calculators, and content provided on this Website are for informational and educational purposes only. They are provided free of charge and are intended to assist home bakers and professionals."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "3. No Warranty"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: 'The Website and its tools are provided on an "as is" and "as available" basis. While we strive for accuracy, we make no warranties, express or implied, regarding the accuracy, reliability, or completeness of any information or calculations. Ingredient prices, measurements, and conversions can vary. You should always double-check your calculations and results. Your use of the Website is at your own risk.'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "4. Limitation of Liability"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "In no event shall Sweety's Bakery Tools, its owners, or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Website or its tools. This includes, but is not limited to, any financial loss, loss of profits, or errors in baking resulting from reliance on the information provided."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "5. Intellectual Property"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "The content, design, and branding of the Website are the property of Sweety's Bakery Tools and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the Website without our express written permission."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl font-bold text-brand-text-title mt-8",
                                children: "6. Changes to Terms"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We reserve the right to modify these Terms at any time. We will post the revised Terms on this page. By continuing to use the Website after such changes have been made, you agree to be bound by the revised Terms."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                setActiveTool: setActiveTool
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/TermsOfUse.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TermsOfUse;
var _c;
__turbopack_context__.k.register(_c, "TermsOfUse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/ContactUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactUs",
    ()=>ContactUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const inputStyles = "w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200 text-brand-text-body";
const HeaderMailIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-16 h-16 text-brand-pink mx-auto",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
            lineNumber: 15,
            columnNumber: 145
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = HeaderMailIcon;
const ContactUs = ({ setActiveTool, breadcrumbs })=>{
    _s();
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 md:p-10 fade-in",
        children: [
            breadcrumbs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderMailIcon, {}, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-4xl md:text-5xl font-bold text-brand-text-title mt-4",
                                children: "Get in Touch"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-brand-text-body/80 max-w-2xl mx-auto",
                                children: "Have a question, a suggestion for a new tool, or just want to say hello? We'd love to hear from you!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-center text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:contact.sbakery@gmail.com",
                                className: "group flex items-center gap-3 text-brand-text-body hover:text-brand-pink transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailIcon"], {
                                        className: "w-8 h-8 text-brand-pink/80 group-hover:text-brand-pink transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 41,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-brand-text-title",
                                                children: "Email Us Directly"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                                lineNumber: 43,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-body",
                                                children: "contact.sbakery@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                                lineNumber: 44,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/212719432824",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group flex items-center gap-3 text-brand-text-body hover:text-brand-pink transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                        className: "w-8 h-8 text-brand-pink/80 group-hover:text-brand-pink transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 48,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-brand-text-title",
                                                children: "Chat on WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                                lineNumber: 50,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-body",
                                                children: "0719-432824"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                                lineNumber: 51,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://share.google/DDxukMXDhbdgC97mE",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group flex items-center gap-3 text-brand-text-body hover:text-brand-pink transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapPinIcon"], {
                                        className: "w-8 h-8 text-brand-pink/80 group-hover:text-brand-pink transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-brand-text-title",
                                                children: "Our Location"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-body",
                                                children: "View on Google Maps"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10 border-t border-brand-border pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-brand-text-body/80",
                            children: "Or fill out the form below:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-12 bg-brand-pink-light rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif text-2xl font-bold text-brand-text-title",
                                children: "Thank you!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-brand-text-body/90",
                                children: "Your message has been sent. We'll get back to you as soon as we can."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6 max-w-lg mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "name",
                                        className: "block text-sm font-bold text-brand-text-title mb-2",
                                        children: "Your Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "name",
                                        required: true,
                                        className: inputStyles
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        className: "block text-sm font-bold text-brand-text-title mb-2",
                                        children: "Your Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        id: "email",
                                        required: true,
                                        className: inputStyles
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "message",
                                        className: "block text-sm font-bold text-brand-text-title mb-2",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "message",
                                        rows: 6,
                                        required: true,
                                        className: inputStyles
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center pt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "bg-brand-pink text-white font-bold py-3 px-10 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105",
                                    children: "Send Message"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                                lineNumber: 86,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                setActiveTool: setActiveTool
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/ContactUs.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactUs, "S6ipnhtDax9I0+B/fnlVz3+f6e8=");
_c1 = ContactUs;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeaderMailIcon");
__turbopack_context__.k.register(_c1, "ContactUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Disclaimer",
    ()=>Disclaimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Ad$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Ad.tsx [app-client] (ecmascript)");
;
;
const Disclaimer = ({ breadcrumbs })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-4 sm:p-6 md:p-8 fade-in",
        children: [
            breadcrumbs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-xl border border-brand-border overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-brand-pink p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-serif font-bold text-white mb-2",
                                children: "Disclaimer"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90",
                                children: [
                                    "Last Updated: ",
                                    new Date().toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 sm:p-10 space-y-8 text-brand-text-body leading-relaxed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-serif font-bold text-brand-text-title mb-4",
                                        children: "1. General Information"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: 'The information provided by Sweety\'s Bakery ("we," "us," or "our") on https://sweetysbakery.com (the "Site") and our mobile application is for general informational purposes only. All information on the Site and our mobile application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application.'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-8 flex justify-center w-full bg-gray-50 border border-gray-200 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Ad$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    slotId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADSENSE_SLOT_DISCLAIMER
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-serif font-bold text-brand-text-title mb-4",
                                        children: "2. Affiliate Disclaimer"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-yellow-800",
                                            children: "Sweety's Bakery is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4",
                                        children: "As an Amazon Associate, we earn from qualifying purchases. This means that if you click on an affiliate link on this website and make a purchase, we may receive a small commission at no extra cost to you. We only recommend products and services that we believe will add value to our readers."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-serif font-bold text-brand-text-title mb-4",
                                        children: "3. External Links Disclaimer"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-serif font-bold text-brand-text-title mb-4",
                                        children: "4. Professional Advice Disclaimer"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "The Site cannot and does not contain medical, legal, or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical, legal, or financial advice. The use or reliance of any information contained on the Site or our mobile application is solely at your own risk."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-serif font-bold text-brand-text-title mb-4",
                                        children: "5. Errors and Omissions"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: 'While we strive to ensure that the information contained in this site is accurate, we are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Disclaimer.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Disclaimer;
var _c;
__turbopack_context__.k.register(_c, "Disclaimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthorBio",
    ()=>AuthorBio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-client] (ecmascript)");
;
;
const AuthorBio = ({ handleNavigate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-brand-pink-light/30 rounded-xl border border-brand-border flex flex-col md:flex-row items-center gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://sweetysbakery.com/images/img%20sb.jpeg",
                    alt: "Sarah Ait Dahan - Sweety's Bakery",
                    className: "w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center md:text-left flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif text-3xl font-bold text-brand-text-title mb-3",
                        children: "Sarah Aitdahan"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-brand-text-body/90 mb-4 leading-relaxed",
                        children: "Sarah Aitdahan is the founder of Sweety's Bakery and the creator of this website. A lifelong baker with a passion for perfecting the classics, she believes that baking should be accessible and joyful for everyone. This website is her way of giving back to the incredible baking community by providing free tools, resources, and recipes."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center gap-6 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavigate('/tools/baking-blog'),
                                className: "bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-gray-800 transition-colors flex items-center gap-2 group",
                                children: [
                                    "READ MORE",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "group-hover:translate-x-1 transition-transform",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://web.facebook.com/SaPatissl/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors",
                                        "aria-label": "Facebook",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/sweetys.bakery/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors",
                                        "aria-label": "Instagram",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.pinterest.com/Sweetysbakerys/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors",
                                        "aria-label": "Pinterest",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinterestIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors",
                                        "aria-label": "TikTok",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TikTokIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                            lineNumber: 44,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors",
                                        "aria-label": "YouTube",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YoutubeIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                            lineNumber: 47,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/AuthorBio.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AuthorBio;
var _c;
__turbopack_context__.k.register(_c, "AuthorBio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const inputStyles = "w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200 text-brand-text-body";
const ContactForm = ()=>{
    _s();
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-12 bg-brand-pink-light rounded-xl border border-brand-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-serif text-2xl font-bold text-brand-text-title",
                    children: "Thank you!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-brand-text-body/90",
                    children: "Your message has been sent. We'll get back to you as soon as we can."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "name",
                        className: "block text-sm font-bold text-brand-text-title mb-2",
                        children: "Your Name"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        id: "name",
                        name: "name",
                        required: true,
                        className: inputStyles
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "email",
                        className: "block text-sm font-bold text-brand-text-title mb-2",
                        children: "Your Email"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        id: "email",
                        name: "email",
                        required: true,
                        className: inputStyles
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "block text-sm font-bold text-brand-text-title mb-2",
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "message",
                        name: "message",
                        rows: 6,
                        required: true,
                        className: inputStyles
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "bg-brand-pink text-white font-bold py-3 px-10 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105",
                    children: "Send Message"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/ContactForm.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactForm, "S6ipnhtDax9I0+B/fnlVz3+f6e8=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareButtons",
    ()=>ShareButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-client] (ecmascript)");
;
;
const ShareButtons = ({ url, imageUrl, description })=>{
    const encodedUrl = encodeURIComponent(url);
    const encodedDesc = encodeURIComponent(description);
    const encodedImageUrl = encodeURIComponent(imageUrl);
    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImageUrl}&description=${encodedDesc}`,
        instagram: `https://www.instagram.com/sweetys.bakery/`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-brand-text-title",
                children: "Share:"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shareLinks.facebook,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Share on Facebook",
                className: "text-gray-500 hover:text-brand-pink transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shareLinks.pinterest,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Share on Pinterest",
                className: "text-gray-500 hover:text-brand-pink transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinterestIcon"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shareLinks.instagram,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Visit our Instagram",
                className: "text-gray-500 hover:text-brand-pink transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramIcon"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/ShareButtons.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ShareButtons;
var _c;
__turbopack_context__.k.register(_c, "ShareButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/utils/slugify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slugify",
    ()=>slugify
]);
function slugify(text) {
    return text.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/utils/toc.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateToc",
    ()=>generateToc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/utils/slugify.ts [app-client] (ecmascript)");
;
const generateToc = (htmlContent)=>{
    const headings = [];
    const contentWithIds = htmlContent.replace(/<h([2-3])[^>]*>(.*?)<\/h\1>/gi, (match, levelStr, innerText)=>{
        const level = parseInt(levelStr, 10);
        const text = innerText.replace(/<[^>]+>/g, ''); // Strip any inner HTML tags from the heading
        if (!text) return match;
        let id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(text);
        let count = 1;
        // Ensure the ID is unique
        while(headings.some((h)=>h.id === id)){
            id = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(text)}-${count}`;
            count++;
        }
        headings.push({
            id,
            text,
            level
        });
        return `<h${level} id="${id}">${innerText}</h${level}>`;
    });
    return {
        headings,
        contentWithIds
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/TableOfContents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableOfContents",
    ()=>TableOfContents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TableOfContents = ({ headings })=>{
    if (headings.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 bg-brand-pink-light/50 border border-brand-border rounded-xl mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-serif text-2xl font-bold text-brand-text-title mb-4",
                children: "Table of Contents"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/TableOfContents.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2",
                children: headings.map((heading)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            marginLeft: `${(heading.level - 2) * 1.5}rem`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${heading.id}`,
                            className: "text-brand-text-body hover:text-brand-pink hover:underline transition-colors",
                            children: heading.text
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/TableOfContents.tsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, heading.id, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/TableOfContents.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/TableOfContents.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/TableOfContents.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TableOfContents;
var _c;
__turbopack_context__.k.register(_c, "TableOfContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ChocolateChip = ({ top, left, right, bottom, size = 'w-4 h-4', transform = 'translateZ(2px)' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute ${size} bg-yellow-900/80 rounded-full shadow-inner`,
        style: {
            top,
            left,
            right,
            bottom,
            transform
        }
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = ChocolateChip;
const HeroIllustration = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroIllustration.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const interactionArea = container.closest('.hero-interaction-area');
            if (!interactionArea) {
                return;
            }
            const handleMouseMove = {
                "HeroIllustration.useEffect.handleMouseMove": (e)=>{
                    const { clientX, clientY } = e;
                    const { left, top, width, height } = interactionArea.getBoundingClientRect();
                    const x = (clientX - left - width / 2) / (width / 2);
                    const y = (clientY - top - height / 2) / (height / 2);
                    const rotateY = x * 15; // Max rotation 15deg
                    const rotateX = -y * 15; // Max rotation 15deg
                    if (container) {
                        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    }
                }
            }["HeroIllustration.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "HeroIllustration.useEffect.handleMouseLeave": ()=>{
                    if (container) {
                        container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                    }
                }
            }["HeroIllustration.useEffect.handleMouseLeave"];
            const handleTouchMove = {
                "HeroIllustration.useEffect.handleTouchMove": (e)=>{
                    if (e.touches.length === 0) return;
                    const { clientX, clientY } = e.touches[0];
                    const { left, top, width, height } = interactionArea.getBoundingClientRect();
                    const x = (clientX - left - width / 2) / (width / 2);
                    const y = (clientY - top - height / 2) / (height / 2);
                    const rotateY = x * 15; // Max rotation 15deg
                    const rotateX = -y * 15; // Max rotation 15deg
                    if (container) {
                        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    }
                }
            }["HeroIllustration.useEffect.handleTouchMove"];
            const handleTouchEnd = {
                "HeroIllustration.useEffect.handleTouchEnd": ()=>{
                    if (container) {
                        container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                    }
                }
            }["HeroIllustration.useEffect.handleTouchEnd"];
            interactionArea.addEventListener('mousemove', handleMouseMove);
            interactionArea.addEventListener('mouseleave', handleMouseLeave);
            interactionArea.addEventListener('touchmove', handleTouchMove);
            interactionArea.addEventListener('touchend', handleTouchEnd);
            return ({
                "HeroIllustration.useEffect": ()=>{
                    interactionArea.removeEventListener('mousemove', handleMouseMove);
                    interactionArea.removeEventListener('mouseleave', handleMouseLeave);
                    interactionArea.removeEventListener('touchmove', handleTouchMove);
                    interactionArea.removeEventListener('touchend', handleTouchEnd);
                }
            })["HeroIllustration.useEffect"];
        }
    }["HeroIllustration.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out'
        },
        className: "relative w-80 h-80 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-64 h-64 bg-yellow-600 rounded-full shadow-2xl border-4 border-yellow-700/80",
            style: {
                transformStyle: 'preserve-3d'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChocolateChip, {
                    top: "15%",
                    left: "20%",
                    size: "w-6 h-6",
                    transform: "translateZ(5px) rotate(15deg)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChocolateChip, {
                    top: "25%",
                    right: "15%",
                    size: "w-8 h-8",
                    transform: "translateZ(8px) rotate(-10deg)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChocolateChip, {
                    bottom: "40%",
                    left: "10%",
                    size: "w-5 h-5",
                    transform: "translateZ(3px)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChocolateChip, {
                    bottom: "20%",
                    right: "25%",
                    size: "w-7 h-7",
                    transform: "translateZ(6px) rotate(20deg)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChocolateChip, {
                    top: "50%",
                    left: "45%",
                    size: "w-4 h-4",
                    transform: "translateZ(2px)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    style: {
                        transform: 'translateZ(10px)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/3 flex gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-yellow-900 rounded-full shadow-inner flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-white rounded-full translate-x-0.5 -translate-y-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-yellow-900 rounded-full shadow-inner flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-white rounded-full translate-x-0.5 -translate-y-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-1/4 w-24 h-12 border-b-8 border-yellow-900 rounded-b-full",
                            style: {
                                transform: 'translateZ(5px)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
            lineNumber: 83,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/HeroIllustration.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroIllustration, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c1 = HeroIllustration;
const __TURBOPACK__default__export__ = HeroIllustration;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChocolateChip");
__turbopack_context__.k.register(_c1, "HeroIllustration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipeIndex",
    ()=>RecipeIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const RecipeIndex = ({ posts })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    // Extract unique categories
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RecipeIndex.useMemo[categories]": ()=>{
            const cats = new Set(posts.map({
                "RecipeIndex.useMemo[categories]": (post)=>post.category
            }["RecipeIndex.useMemo[categories]"]).filter(Boolean));
            return [
                'All',
                ...Array.from(cats).sort()
            ];
        }
    }["RecipeIndex.useMemo[categories]"], [
        posts
    ]);
    // Filter posts
    const filteredPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RecipeIndex.useMemo[filteredPosts]": ()=>{
            if (selectedCategory === 'All') return posts;
            return posts.filter({
                "RecipeIndex.useMemo[filteredPosts]": (post)=>post.category === selectedCategory
            }["RecipeIndex.useMemo[filteredPosts]"]);
        }
    }["RecipeIndex.useMemo[filteredPosts]"], [
        posts,
        selectedCategory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-serif font-bold text-brand-text-title mb-8 text-center",
                children: "Recipe Index"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-4 mb-12",
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedCategory(category),
                        className: `px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105
              ${selectedCategory === category ? 'bg-brand-pink text-white shadow-lg' : 'bg-white text-brand-text-body border border-brand-border hover:border-brand-pink hover:text-brand-pink'}`,
                        children: category
                    }, category, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: filteredPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>router.push(`/recipes/${post.slug}`),
                        className: "group cursor-pointer bg-[#FFC0CB] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-pink/20 h-80 relative flex flex-col items-center justify-center p-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-4 py-1.5 bg-white text-[#FFC0CB] text-sm font-bold rounded-full shadow-sm",
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                                lineNumber: 56,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-serif font-bold text-white drop-shadow-sm px-4",
                                children: post.title.split('|')[0].trim()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                                lineNumber: 62,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, post.id, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            filteredPosts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-500",
                    children: "No recipes found in this category."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                    lineNumber: 71,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/RecipeIndex.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RecipeIndex, "bB9vrlU3TS4JKjtnVpdDNGsXuGo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RecipeIndex;
var _c;
__turbopack_context__.k.register(_c, "RecipeIndex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/TEST3/components/MainContentWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContentWrapper",
    ()=>MainContentWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/MainContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/utils/slugs.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MainContentWrapper = ({ activeTool, activePost })=>{
    _s();
    console.log('MainContentWrapper activeTool:', activeTool);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleNavigate = (path)=>{
        router.push(path);
    };
    const setActiveTool = (toolId)=>{
        const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolIdToSlug"])(toolId);
        router.push(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainContent"], {
        activeTool: activeTool,
        setActiveTool: setActiveTool,
        activePost: activePost,
        handleNavigate: handleNavigate
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/MainContentWrapper.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MainContentWrapper, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
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

//# sourceMappingURL=Desktop_Projects_TEST3_components_d965589a._.js.map