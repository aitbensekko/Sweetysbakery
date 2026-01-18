module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Projects/TEST3/components/utils/slugs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slugToToolId",
    ()=>slugToToolId,
    "toolIdToSlug",
    ()=>toolIdToSlug
]);
const toolIdToSlug = (toolId)=>{
    switch(toolId){
        case 'home':
            return '/';
        case 'products':
            return '/products';
        case 'baking-sources':
            return '/tools/baking-sources';
        case 'all-tools':
            return '/tools/all-tools';
        case 'bakers-percentage':
            return '/tools/bakers-percentage';
        case 'baking-pan-converter':
            return '/tools/baking-pan-converter';
        case 'recipe-scaler':
            return '/tools/recipe-scaler';
        case 'measurement-converter':
            return '/tools/measurement-converter';
        case 'baking-blog':
            return '/blog';
        case 'recipe-index':
            return '/recipes';
        case 'about':
            return '/about';
        case 'contact-us':
            return '/contact-us';
        case 'privacy-policy':
            return '/privacy-policy';
        case 'terms-of-use':
            return '/terms-of-use';
        case 'disclaimer':
            return '/disclaimer';
        case 'allergen-guide':
            return '/tools/allergen-guide';
        case 'amortization-calculator':
            return '/tools/amortization-calculator';
        case 'baker-schedule':
            return '/tools/baker-schedule';
        case 'baking-bucket-list':
            return '/tools/baking-bucket-list';
        case 'baking-tutorials':
            return '/tools/baking-tutorials';
        case 'bmi-calculator':
            return '/tools/bmi-calculator';
        case 'bmr-calculator':
            return '/tools/bmr-calculator';
        case 'body-fat-calculator':
            return '/tools/body-fat-calculator';
        case 'buttercream-calculator':
            return '/tools/buttercream-calculator';
        case 'butterfat-converter':
            return '/tools/butterfat-converter';
        case 'cake-pricing':
            return '/tools/cake-pricing';
        case 'calorie-calculator':
            return '/tools/calorie-calculator';
        case 'cost-per-recipe':
            return '/tools/cost-per-recipe';
        case 'date-calculator':
            return '/tools/date-calculator';
        case 'dough-temperature':
            return '/tools/dough-temperature';
        case 'dessert-calculator':
            return '/tools/dessert-calculator';
        case 'digital-notebook':
            return '/tools/digital-notebook';
        case 'dough-hydration':
            return '/tools/dough-hydration';
        case 'drinks-videos':
            return '/tools/drinks-videos';
        case 'essential-recipes':
            return '/tools/essential-recipes';
        case 'flavor-pairing-guide':
            return '/tools/flavor-pairing-guide';
        case 'fondant-calculator':
            return '/tools/fondant-calculator';
        case 'frosting-color-mixer':
            return '/tools/frosting-color-mixer';
        case 'ganache-calculator':
            return '/tools/ganache-calculator';
        case 'hydration-converter':
            return '/tools/hydration-converter';
        case 'ideal-weight-calculator':
            return '/tools/ideal-weight-calculator';
        case 'ingredient-glossary':
            return '/tools/ingredient-glossary';
        case 'ingredient-substitutions':
            return '/tools/ingredient-substitutions';
        case 'inventory-management':
            return '/tools/inventory-management';
        case 'macaron-troubleshooting':
            return '/tools/macaron-troubleshooting';
        case 'management-dashboard':
            return '/tools/management-dashboard';
        case 'mortgage-affordability':
            return '/tools/mortgage-affordability';
        case 'mortgage-payoff':
            return '/tools/mortgage-payoff';
        case 'my-art':
            return '/tools/my-art';
        case 'multiple-timer':
            return '/tools/multiple-timer';
        case 'order-management':
            return '/tools/order-management';
        case 'oven-temp-converter':
            return '/tools/oven-temp-converter';
        case 'pace-calculator':
            return '/tools/pace-calculator';
        case 'payment-calculator':
            return '/tools/payment-calculator';
        case 'percentage-calculator':
            return '/tools/percentage-calculator';
        case 'pregnancy-calculator':
            return '/tools/pregnancy-calculator';
        case 'protein-macro':
            return '/tools/protein-macro';
        case 'recipe-box':
            return '/tools/recipe-box';
        case 'relaxing-videos':
            return '/tools/relaxing-videos';
        case 'shopping-list':
            return '/tools/shopping-list';
        case 'simple-calculator':
            return '/tools/simple-calculator';
        case 'stopwatch':
            return '/tools/stopwatch';
        case 'sweetener-converter':
            return '/tools/sweetener-converter';
        case 'temperature-converter':
            return '/tools/temperature-converter';
        case 'time-calculator':
            return '/tools/time-calculator';
        case 'tip-calculator':
            return '/tools/tip-calculator';
        case 'volume-converter':
            return '/tools/volume-converter';
        case 'weight-converter':
            return '/tools/weight-converter';
        case 'weight-loss-calculator':
            return '/tools/weight-loss-calculator';
        case 'yeast-converter':
            return '/tools/yeast-converter';
        case 'age-calculator':
            return '/tools/age-calculator';
        case 'investment-calculator':
            return '/tools/investment-calculator';
        default:
            return '/';
    }
};
const slugToToolId = (slug)=>{
    const allToolIds = [
        'home',
        'products',
        'bakers-percentage',
        'baking-pan-converter',
        'baking-sources',
        'all-tools',
        'recipe-scaler',
        'measurement-converter',
        'baking-blog',
        'recipe-index',
        'about',
        'contact-us',
        'privacy-policy',
        'terms-of-use',
        'allergen-guide',
        'amortization-calculator',
        'baker-schedule',
        'baking-bucket-list',
        'baking-tutorials',
        'dough-temperature',
        'my-art',
        'bmi-calculator',
        'bmr-calculator',
        'body-fat-calculator',
        'buttercream-calculator',
        'butterfat-converter',
        'mortgage-payoff',
        'cake-pricing',
        'calorie-calculator',
        'cost-per-recipe',
        'date-calculator',
        'dessert-calculator',
        'mortgage-affordability',
        'digital-notebook',
        'dough-hydration',
        'drinks-videos',
        'essential-recipes',
        'flavor-pairing-guide',
        'fondant-calculator',
        'frosting-color-mixer',
        'ganache-calculator',
        'hydration-converter',
        'ideal-weight-calculator',
        'ingredient-glossary',
        'ingredient-substitutions',
        'inventory-management',
        'macaron-troubleshooting',
        'management-dashboard',
        'multiple-timer',
        'order-management',
        'oven-temp-converter',
        'pace-calculator',
        'payment-calculator',
        'percentage-calculator',
        'pregnancy-calculator',
        'protein-macro',
        'recipe-box',
        'relaxing-videos',
        'shopping-list',
        'simple-calculator',
        'stopwatch',
        'sweetener-converter',
        'temperature-converter',
        'time-calculator',
        'tip-calculator',
        'volume-converter',
        'weight-converter',
        'weight-loss-calculator',
        'yeast-converter',
        'age-calculator',
        'investment-calculator',
        'disclaimer'
    ];
    if (slug === '/') return 'home';
    if (slug === '/blog') return 'baking-blog';
    if (slug === '/recipes') return 'recipe-index';
    if (slug === '/about') return 'about';
    if (slug === '/contact-us') return 'contact-us';
    if (slug === '/privacy-policy') return 'privacy-policy';
    if (slug === '/terms-of-use') return 'terms-of-use';
    if (slug === '/disclaimer') return 'disclaimer';
    const toolId = slug.replace('/tools/', '');
    if (allToolIds.includes(toolId)) {
        return toolId;
    }
    return undefined;
};
}),
"[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutIcon",
    ()=>AboutIcon,
    "AlertTriangleIcon",
    ()=>AlertTriangleIcon,
    "AllergenGuideIcon",
    ()=>AllergenGuideIcon,
    "ArrowLeftIcon",
    ()=>ArrowLeftIcon,
    "BakingIllustrationIcon",
    ()=>BakingIllustrationIcon,
    "BakingPanIcon",
    ()=>BakingPanIcon,
    "BirthdayCakeIcon",
    ()=>BirthdayCakeIcon,
    "BodyIcon",
    ()=>BodyIcon,
    "BookOpenIcon",
    ()=>BookOpenIcon,
    "BoxIcon",
    ()=>BoxIcon,
    "BreadBakingIcon",
    ()=>BreadBakingIcon,
    "ButterIcon",
    ()=>ButterIcon,
    "CakePricingIcon",
    ()=>CakePricingIcon,
    "CalendarIcon",
    ()=>CalendarIcon,
    "CalendarPlusIcon",
    ()=>CalendarPlusIcon,
    "CheckCircleIcon",
    ()=>CheckCircleIcon,
    "ChecklistIcon",
    ()=>ChecklistIcon,
    "ChevronDownIcon",
    ()=>ChevronDownIcon,
    "ChevronRightIcon",
    ()=>ChevronRightIcon,
    "ChevronUpIcon",
    ()=>ChevronUpIcon,
    "ClipboardIcon",
    ()=>ClipboardIcon,
    "ClockIcon",
    ()=>ClockIcon,
    "CocktailIcon",
    ()=>CocktailIcon,
    "CommentIcon",
    ()=>CommentIcon,
    "ConverterIcon",
    ()=>ConverterIcon,
    "CookieArtIcon",
    ()=>CookieArtIcon,
    "CrackedShellIcon",
    ()=>CrackedShellIcon,
    "DocumentIcon",
    ()=>DocumentIcon,
    "DollarSignIcon",
    ()=>DollarSignIcon,
    "DownloadIcon",
    ()=>DownloadIcon,
    "DumbbellIcon",
    ()=>DumbbellIcon,
    "EditIcon",
    ()=>EditIcon,
    "FacebookIcon",
    ()=>FacebookIcon,
    "FlameIcon",
    ()=>FlameIcon,
    "FlavorWheelIcon",
    ()=>FlavorWheelIcon,
    "GiftIcon",
    ()=>GiftIcon,
    "GlossaryIcon",
    ()=>GlossaryIcon,
    "HealthyIcon",
    ()=>HealthyIcon,
    "HeartIcon",
    ()=>HeartIcon,
    "HeartPulseIcon",
    ()=>HeartPulseIcon,
    "HollowShellIcon",
    ()=>HollowShellIcon,
    "HomeIcon",
    ()=>HomeIcon,
    "HoneyDipperIcon",
    ()=>HoneyDipperIcon,
    "InfoIcon",
    ()=>InfoIcon,
    "IngredientSwapIcon",
    ()=>IngredientSwapIcon,
    "InstagramIcon",
    ()=>InstagramIcon,
    "LopsidedIcon",
    ()=>LopsidedIcon,
    "MacaronIcon",
    ()=>MacaronIcon,
    "MailIcon",
    ()=>MailIcon,
    "ManagementIcon",
    ()=>ManagementIcon,
    "MapPinIcon",
    ()=>MapPinIcon,
    "MapleLeafIcon",
    ()=>MapleLeafIcon,
    "MeasurementIcon",
    ()=>MeasurementIcon,
    "MenuIcon",
    ()=>MenuIcon,
    "MoonIcon",
    ()=>MoonIcon,
    "MortgageIcon",
    ()=>MortgageIcon,
    "MusicIcon",
    ()=>MusicIcon,
    "MyArtIcon",
    ()=>MyArtIcon,
    "MyKitchenIcon",
    ()=>MyKitchenIcon,
    "NoFeetIcon",
    ()=>NoFeetIcon,
    "PaletteIcon",
    ()=>PaletteIcon,
    "PastryBagIcon",
    ()=>PastryBagIcon,
    "PastryTipsIcon",
    ()=>PastryTipsIcon,
    "PauseIcon",
    ()=>PauseIcon,
    "PercentIcon",
    ()=>PercentIcon,
    "PinterestIcon",
    ()=>PinterestIcon,
    "PlayIcon",
    ()=>PlayIcon,
    "PlusCircleIcon",
    ()=>PlusCircleIcon,
    "PlusSquareIcon",
    ()=>PlusSquareIcon,
    "PrintIcon",
    ()=>PrintIcon,
    "ProteinIcon",
    ()=>ProteinIcon,
    "RecipeCostIcon",
    ()=>RecipeCostIcon,
    "RecipeScalerIcon",
    ()=>RecipeScalerIcon,
    "RedditIcon",
    ()=>RedditIcon,
    "RefreshCwIcon",
    ()=>RefreshCwIcon,
    "ResourcesIcon",
    ()=>ResourcesIcon,
    "RunningIcon",
    ()=>RunningIcon,
    "ScaleIcon",
    ()=>ScaleIcon,
    "SearchIcon",
    ()=>SearchIcon,
    "ShareIcon",
    ()=>ShareIcon,
    "ShoppingCartIcon",
    ()=>ShoppingCartIcon,
    "SimpleCalcIcon",
    ()=>SimpleCalcIcon,
    "SteviaLeafIcon",
    ()=>SteviaLeafIcon,
    "StickingIcon",
    ()=>StickingIcon,
    "StopwatchIcon",
    ()=>StopwatchIcon,
    "SugarCubeIcon",
    ()=>SugarCubeIcon,
    "SunIcon",
    ()=>SunIcon,
    "SweetenerIcon",
    ()=>SweetenerIcon,
    "TargetIcon",
    ()=>TargetIcon,
    "ThermometerIcon",
    ()=>ThermometerIcon,
    "TikTokIcon",
    ()=>TikTokIcon,
    "ToolboxIcon",
    ()=>ToolboxIcon,
    "Trash2Icon",
    ()=>Trash2Icon,
    "UsersIcon",
    ()=>UsersIcon,
    "VolumeIcon",
    ()=>VolumeIcon,
    "WaterDropIcon",
    ()=>WaterDropIcon,
    "WeddingCakeIcon",
    ()=>WeddingCakeIcon,
    "WeightIcon",
    ()=>WeightIcon,
    "WhatsAppIcon",
    ()=>WhatsAppIcon,
    "WrinkledIcon",
    ()=>WrinkledIcon,
    "XIcon",
    ()=>XIcon,
    "YeastIcon",
    ()=>YeastIcon,
    "YoutubeIcon",
    ()=>YoutubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const HomeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 11,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "9 22 9 12 15 12 15 22"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 11,
                columnNumber: 258
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const AboutIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 14,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 14,
                columnNumber: 253
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PlusCircleIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 17,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 17,
                columnNumber: 234
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "12",
                x2: "16",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 17,
                columnNumber: 278
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const CakePricingIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a2.828 2.828 0 0 0-2 5 2.828 2.828 0 0 0-2 5 2.828 2.828 0 0 0 2 5 2.828 2.828 0 0 0 2 5 2.828 2.828 0 0 0 2-5 2.828 2.828 0 0 0 2-5 2.828 2.828 0 0 0-2-5 2.828 2.828 0 0 0-2-5z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 20,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 12h2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 20,
                columnNumber: 389
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 20,
                columnNumber: 410
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 20,
                columnNumber: 430
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 20v2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 20,
                columnNumber: 450
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const RecipeScalerIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m16 16 3-3-3-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 23,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 8 5 11l3 3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 23,
                columnNumber: 221
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 13H5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 23,
                columnNumber: 247
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 13h14"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 23,
                columnNumber: 268
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PercentIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "19",
                y1: "5",
                x2: "5",
                y2: "19"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 26,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6.5",
                cy: "6.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 26,
                columnNumber: 237
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "17.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 26,
                columnNumber: 280
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MeasurementIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 3 3 21"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 3h3v3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 217
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6h3v3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 238
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 9h3v3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 260
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 12h3v3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 282
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 9v3h3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 305
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 12v3h3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 326
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 15v3h3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 348
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 18v3h3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 370
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const SimpleCalcIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "2",
                width: "14",
                height: "20",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 32,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "14",
                x2: "15",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 32,
                columnNumber: 249
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "18",
                x2: "15",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 32,
                columnNumber: 293
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "6",
                x2: "12",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 32,
                columnNumber: 337
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const SweetenerIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22a7 7 0 0 0 7-7c0-2-1-3-3-4s-3-2-4-3c-1-1-2-2-2-4a3 3 0 0 1 3-3c1 0 2 1 3 2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 35,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22a7 7 0 0 1-7-7c0-2 1-3 3-4s3-2 4-3c1-1 2-2 2-4a3 3 0 0 0-3-3c-1 0-2 1-3 2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 35,
                columnNumber: 287
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ProteinIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 18L12 14L16 18"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 38,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 14V2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 38,
                columnNumber: 224
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L10 4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 38,
                columnNumber: 245
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L14 4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 38,
                columnNumber: 268
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 14H8.5C6.5 14 5 15.5 5 17.5V22"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 38,
                columnNumber: 291
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 14H15.5C17.5 14 19 15.5 19 17.5V22"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 38,
                columnNumber: 338
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ConverterIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m2 16 4 4 4-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m6 20V4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 220
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m22 8-4-4-4 4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 240
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m18 4v16"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 266
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const BakingPanIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 44,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "9",
                x2: "21",
                y2: "9"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 44,
                columnNumber: 249
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "3",
                x2: "9",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 44,
                columnNumber: 291
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const YeastIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "15",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 226
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "15",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 258
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "9",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 289
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "12",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 320
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "12",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 352
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "9",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 383
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "9",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 414
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ManagementIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "20",
                x2: "18",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 50,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "20",
                x2: "12",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 50,
                columnNumber: 234
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "20",
                x2: "6",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 50,
                columnNumber: 273
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const DocumentIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 53,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "14 2 14 8 20 8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 53,
                columnNumber: 270
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "13",
                x2: "8",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 53,
                columnNumber: 315
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "17",
                x2: "8",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 53,
                columnNumber: 359
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "10 9 9 9 8 9"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 53,
                columnNumber: 403
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MyKitchenIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2.69l.346.666L19.5 17.5h.5a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2h.5l7.154-14.144L12 2.69z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 56,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 22V10c0-2 2-4 4-4h8c2 0 4 2 4 4v12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 56,
                columnNumber: 297
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 56,
                columnNumber: 347
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ResourcesIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 59,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5V4A2.5 2.5 0 0 1 6.5 2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 59,
                columnNumber: 243
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronUpIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "18 15 12 9 6 15"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 62,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronDownIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 65,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronRightIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 18 15 12 9 6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 68,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ClockIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 71,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 6 12 12 16 14"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 71,
                columnNumber: 234
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MenuIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "12",
                x2: "21",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 74,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "6",
                x2: "21",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 74,
                columnNumber: 238
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "18",
                x2: "21",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 74,
                columnNumber: 280
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const XIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 77,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 77,
                columnNumber: 237
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ArrowLeftIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "19",
                y1: "12",
                x2: "5",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 80,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 19 5 12 12 5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 80,
                columnNumber: 238
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const HeartIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: props.fill || 'none',
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 84,
            columnNumber: 210
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PlayIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "5 3 19 12 5 21 5 3"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 86,
            columnNumber: 247
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 86,
        columnNumber: 58
    }, ("TURBOPACK compile-time value", void 0));
const IngredientSwapIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 18v-4h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 87,
                columnNumber: 257
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 14a8 8 0 0 1 13.7-5.8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 87,
                columnNumber: 282
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 6v4h4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 87,
                columnNumber: 319
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 10a8 8 0 0 1-13.7 5.8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 87,
                columnNumber: 340
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 87,
        columnNumber: 68
    }, ("TURBOPACK compile-time value", void 0));
const CheckCircleIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 88,
                columnNumber: 254
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 4 12 14.01 9 11.01"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 88,
                columnNumber: 306
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 88,
        columnNumber: 65
    }, ("TURBOPACK compile-time value", void 0));
const PlusSquareIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 89,
                columnNumber: 253
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 89,
                columnNumber: 315
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "12",
                x2: "16",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 89,
                columnNumber: 359
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 89,
        columnNumber: 64
    }, ("TURBOPACK compile-time value", void 0));
const AlertTriangleIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 90,
                columnNumber: 256
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "9",
                x2: "12",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 90,
                columnNumber: 362
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 90,
                columnNumber: 406
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 90,
        columnNumber: 67
    }, ("TURBOPACK compile-time value", void 0));
const DollarSignIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 91,
                columnNumber: 253
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 91,
                columnNumber: 297
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 91,
        columnNumber: 64
    }, ("TURBOPACK compile-time value", void 0));
const ThermometerIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 92,
            columnNumber: 254
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 92,
        columnNumber: 65
    }, ("TURBOPACK compile-time value", void 0));
const ClipboardIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 93,
                columnNumber: 252
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "2",
                width: "8",
                height: "4",
                rx: "1",
                ry: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 93,
                columnNumber: 342
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 93,
        columnNumber: 63
    }, ("TURBOPACK compile-time value", void 0));
const CalendarIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 94,
                columnNumber: 251
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 94,
                columnNumber: 313
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 94,
                columnNumber: 356
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 94,
                columnNumber: 397
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 94,
        columnNumber: 62
    }, ("TURBOPACK compile-time value", void 0));
const ChecklistIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 95,
                columnNumber: 252
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "14 2 14 8 20 8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 95,
                columnNumber: 328
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 15 2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 95,
                columnNumber: 373
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 95,
        columnNumber: 63
    }, ("TURBOPACK compile-time value", void 0));
const YoutubeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 96,
                columnNumber: 250
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 96,
                columnNumber: 525
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 96,
        columnNumber: 61
    }, ("TURBOPACK compile-time value", void 0));
const MusicIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 18V5l12-2v13"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 97,
                columnNumber: 248
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "18",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 97,
                columnNumber: 281
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "16",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 97,
                columnNumber: 319
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 97,
        columnNumber: 59
    }, ("TURBOPACK compile-time value", void 0));
const BookOpenIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 98,
                columnNumber: 251
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 98,
                columnNumber: 309
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 98,
        columnNumber: 62
    }, ("TURBOPACK compile-time value", void 0));
const TargetIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 99,
                columnNumber: 249
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 99,
                columnNumber: 289
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 99,
                columnNumber: 328
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 99,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0));
const RefreshCwIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "23 4 23 10 17 10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 100,
                columnNumber: 252
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "1 20 1 14 7 14"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 100,
                columnNumber: 299
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 100,
                columnNumber: 344
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.49 15a9 9 0 0 1-14.85 3.36L1 14"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 100,
                columnNumber: 396
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 100,
        columnNumber: 63
    }, ("TURBOPACK compile-time value", void 0));
const MailIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 101,
                columnNumber: 247
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 101,
                columnNumber: 340
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 101,
        columnNumber: 58
    }, ("TURBOPACK compile-time value", void 0));
const MapPinIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 102,
                columnNumber: 249
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 102,
                columnNumber: 313
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 102,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0));
const EditIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 103,
                columnNumber: 247
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 103,
                columnNumber: 323
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 103,
        columnNumber: 58
    }, ("TURBOPACK compile-time value", void 0));
const Trash2Icon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "3 6 5 6 21 6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 104,
                columnNumber: 249
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 104,
                columnNumber: 292
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "11",
                x2: "10",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 104,
                columnNumber: 388
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "11",
                x2: "14",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 104,
                columnNumber: 433
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 104,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0));
const SearchIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 106,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 106,
                columnNumber: 233
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const DumbbellIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 12h2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 12H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 12H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 12h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 12h12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const InfoIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 120,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "16",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 120,
                columnNumber: 234
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "8",
                x2: "12.01",
                y2: "8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 120,
                columnNumber: 279
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const AllergenGuideIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 123,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const GiftIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20 12 20 22 4 22 4 12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 126,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "7",
                width: "20",
                height: "5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 126,
                columnNumber: 246
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "22",
                x2: "12",
                y2: "7"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 126,
                columnNumber: 293
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 126,
                columnNumber: 337
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 126,
                columnNumber: 398
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const HeartPulseIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 129,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.22 12H9.5l.73 1.21a.5.5 0 0 0 .54.29h2.46a.5.5 0 0 0 .54-.29L14.5 12H21"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 129,
                columnNumber: 343
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ScaleIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2L6 8h12L12 2zM6 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M6 8l-4 4h20l-4-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 132,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const BodyIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "5",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 135,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.5 8.5c-1 5.5 2 8.5 5.5 8.5s6.5-3 5.5-8.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 135,
                columnNumber: 225
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 15l-2 7h16l-2-7"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 135,
                columnNumber: 281
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 15h12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 135,
                columnNumber: 312
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const FlameIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 138,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const HealthyIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 141,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 12 2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 141,
                columnNumber: 348
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const RunningIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "5",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 144,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 21v-4l4-3 4 3v4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 144,
                columnNumber: 225
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12v-2l-4 3 4 3v-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 144,
                columnNumber: 256
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12v-2l4 3-4 3v-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 144,
                columnNumber: 290
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const BirthdayCakeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 19.5v-15a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v15"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 147,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 147,
                columnNumber: 252
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12v7.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 147,
                columnNumber: 273
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7.5a2.5 2.5 0 0 1 0-5c.7-.7 1.5-1 2.5-1s1.8.3 2.5 1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 147,
                columnNumber: 296
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7.5a2.5 2.5 0 0 0 0-5c-.7-.7-1.5-1-2.5-1S7.2 1.8 6.5 2.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 147,
                columnNumber: 364
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const CalendarPlusIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 150,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 150,
                columnNumber: 251
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 150,
                columnNumber: 289
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 150,
                columnNumber: 325
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "14",
                x2: "12",
                y2: "20"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 150,
                columnNumber: 364
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "17",
                x2: "15",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 150,
                columnNumber: 404
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const StopwatchIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "13",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 153,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 153,
                columnNumber: 226
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "13",
                x2: "16",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 153,
                columnNumber: 264
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "2",
                x2: "15",
                y2: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 153,
                columnNumber: 304
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MortgageIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 156,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "11",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 156,
                columnNumber: 253
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 8H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 156,
                columnNumber: 293
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const WeddingCakeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21.5V17"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 17h4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 14h4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 14v-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 17h2v-4a2 2 0 0 0-2-2h-2v6Z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 17H2v-4a2 2 0 0 1 2-2h2v6Z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 11V7a2 2 0 0 0-2-2h-2v6h4Z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 11V7a2 2 0 0 1 2-2h2v6H6Z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 5V2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 2h4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const CookieArtIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "8",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "16",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "16",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const BreadBakingIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 11c0-4.42-3.58-8-8-8S6 6.58 6 11H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3l-1.5 8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3l1.5 8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PastryTipsIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L4 22h16L12 2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 14.5a3 3 0 0 1 4 0"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 19a4 4 0 0 1 8 0"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MyArtIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "21 15 16 10 5 21"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PastryBagIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 2.12a2 2 0 0 1 1.42.59l4 4A2 2 0 0 1 14 8.12V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.12a2 2 0 0 1 .59-1.42l4-4A2 2 0 0 1 8 2.12z",
                transform: "matrix(0.866 0.5 -0.5 0.866 9.392 -2.5)"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 207,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 15l-3 3 3 3 3-3-3-3z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ShareIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 213,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 6 12 2 8 6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 213,
                columnNumber: 253
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "15"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 213,
                columnNumber: 297
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PaletteIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "13.5",
                cy: "6.5",
                r: ".5",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "10.5",
                r: ".5",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "7.5",
                r: ".5",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6.5",
                cy: "12.5",
                r: ".5",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 221,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.668 0-.92-.742-1.667-1.648-1.667-.926 0-1.648-.746-1.648-1.668 0-.92.742-1.667-1.648-1.667A6.5 6.5 0 0 1 5.5 12c0-3.58 2.92-6.5 6.5-6.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5c-1.29 0-2.48-.37-3.5-1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const FlavorWheelIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 15a7 7 0 0 0 7-7h-4a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3H5a7 7 0 0 0 7 7z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 9a7 7 0 0 0-7 7h4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3h4a7 7 0 0 0-7-7z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MacaronIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a10 10 0 0 0-10 10c0 .34.02.67.05 1a8 8 0 0 1 19.9 0c.03-.33.05-.66.05-1a10 10 0 0 0-10-10z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12H2.05c.03.33.05.66.05 1a10 10 0 0 0 19.8 0c0-.34-.02-.67-.05-1H12z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22a10 10 0 0 0 10-10c0-.34-.02-.67-.05-1a8 8 0 0 1-19.9 0c-.03.33-.05.66-.05 1a10 10 0 0 0 10 10z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const CommentIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 243,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const CocktailIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 22h8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 248,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 11v11"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 6.5c0-2 2-4 4-4 .7 0 1.3.1 1.9.4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m20 6-1-1-1-1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.5 6.5c0 2-2 4-4 4s-4-2-4-4c0-.7.1-1.3.4-1.9"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.2 3.4c.6-.3 1.2-.4 1.8-.4 2 0 4 2 4 4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const UsersIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 258,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 258,
                columnNumber: 253
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 21v-2a4 4 0 0 0-3-3.87"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 258,
                columnNumber: 290
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3.13a4 4 0 0 1 0 7.75"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 258,
                columnNumber: 334
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const SugarCubeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "3.27 6.96 12 12.01 20.73 6.96"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "22.08",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const HoneyDipperIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v10m-4 0h8m-7 3h6m-5 3h4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MapleLeafIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22V12m0-4l4.5-4.5M12 8L7.5 3.5M7.5 3.5L3 8.5l5.5 1M7.5 3.5l1 5.5m9-5.5L21 8.5l-5.5 1m4.5-5.5l-1 5.5m-3.5 1.5L8.5 12M5 14l-2 3h4l1-3m10 0l2 3h-4l-1-3m-4 2v6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 277,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const SteviaLeafIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 3.59-1.89 6.74-4.7 8.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 282,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v20"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12c-4 0-8-4-8-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12c4 0 8-4 8-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const VolumeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 293,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12h8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 294,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 16h8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const WeightIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 302,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6V2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 2h8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 304,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 300,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const WaterDropIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22a7 7 0 0 0 7-7c0-2.3-1.4-4.5-3.5-6.5C13.4 6.5 12 4.8 12 3a1 1 0 0 0-2 0c0 1.8-1.4 3.5-3.5 5.5S5 12.7 5 15a7 7 0 0 0 7 7z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 309,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ShoppingCartIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "21",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 313,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "20",
                cy: "21",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 313,
                columnNumber: 232
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 313,
                columnNumber: 271
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const DownloadIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 317,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "7 10 12 15 17 10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 317,
                columnNumber: 253
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "15",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 317,
                columnNumber: 300
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const GlossaryIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 321,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 321,
                columnNumber: 252
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "13",
                x2: "16",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 321,
                columnNumber: 312
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ButterIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 326,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 326,
                columnNumber: 66
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12v-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 326,
                columnNumber: 119
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 325,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PrintIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "6 9 6 2 18 2 18 9"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 331,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 331,
                columnNumber: 242
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "14",
                width: "12",
                height: "8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 331,
                columnNumber: 334
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const BoxIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 335,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "3.27 6.96 12 12.01 20.73 6.96"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 335,
                columnNumber: 333
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "22.08",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 335,
                columnNumber: 393
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 335,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const RecipeCostIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 340,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "14 2 14 8 20 8"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 341,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "18",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 342,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 15H9.5a2.5 2.5 0 0 1 0-5H12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 343,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 339,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const InstagramIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 349,
                columnNumber: 271
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 349,
                columnNumber: 333
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17.5",
                y1: "6.5",
                x2: "17.51",
                y2: "6.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 349,
                columnNumber: 398
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 349,
        columnNumber: 71
    }, ("TURBOPACK compile-time value", void 0));
const FacebookIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 350,
            columnNumber: 270
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 350,
        columnNumber: 70
    }, ("TURBOPACK compile-time value", void 0));
const PinterestIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.477 2 2 6.477 2 12c0 4.237 2.633 7.843 6.271 9.243.01-.102.043-.418.06-.572.023-.19.146-.622.146-.622s-.036-.072-.036-.178c0-.66.386-1.156.863-1.156.406 0 .6.306.6.676 0 .408-.26 1.023-.393 1.588-.11.477.236.873.702.873 1.353 0 2.223-1.803 2.223-3.638 0-1.58-1.09-2.73-2.583-2.73-1.784 0-2.855 1.344-2.855 2.822 0 .34.116.718.26 1.023.018.036.02.068.01.104-.01.05-.03.18-.04.22-.01.05-.03.06-.06.04-.51-.18-1.02-1.05-1.02-1.82 0-2.022 1.5-3.858 4.318-3.858 2.316 0 3.957 1.7 3.957 3.822 0 2.37-1.25 4.35-3.09 4.35-.616 0-1.19-.325-1.38-.718 0 0-.3.918-.375 1.18-.11.41-.33.803-.49 1.05.78.243 1.6.38 2.45.38 5.523 0 10-4.477 10-10S17.523 2 12 2z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 353,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 352,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const RedditIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12,2C6.486,2,2,6.486,2,12c0,4.164,2.533,7.796,6.073,9.167c0.06,0.398-0.01,1.014-0.09,1.28 c-0.1,0.33,0.1,0.68,0.45,0.68c0.12,0,0.24-0.03,0.35-0.09C9.7,22.5,11.58,21.4,12,21.14c0.33,0.05,0.66,0.08,1,0.08 c5.514,0,10-4.486,10-10S17.514,2,12,2z M8.5,14C7.671,14,7,13.329,7,12.5S7.671,11,8.5,11S10,11.671,10,12.5S9.329,14,8.5,14z M15.5,14c-0.829,0-1.5-0.671-1.5-1.5s0.671-1.5,1.5-1.5S17,11.671,17,12.5S16.329,14,15.5,14z M16.43,18.01 c-1.12,0.73-2.58,1.15-4.43,1.15s-3.31-0.42-4.43-1.15c-0.16-0.1-0.36,0.02-0.4,0.2c-0.04,0.18,0.08,0.37,0.26,0.42 c1.26,0.82,2.88,1.27,4.57,1.27s3.31-0.45,4.57-1.27c0.18-0.05,0.3-0.23,0.26-0.42C16.79,18.03,16.59,17.91,16.43,18.01z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 358,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const WhatsAppIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.012.261 1.985.758 2.853L6 18.354l3.707-1.025c.822.443 1.742.68 2.685.681h.001c3.181 0 5.767-2.586 5.768-5.766.001-3.181-2.586-5.767-5.768-5.767zm0 10.34c-1.545 0-2.992-.477-4.188-1.32l-1.132.313 3.033-2.962c-.645-1.142-.99-2.45-.989-3.81.001-2.54 2.067-4.607 4.607-4.607s4.607 2.067 4.607 4.607c0 2.541-2.066 4.608-4.606 4.608h-.002zm2.711-3.649c-.147-.074-1.332-.659-1.539-.733-.207-.074-.356-.111-.506.111-.15.222-.581.733-.712.883-.131.15-.262.168-.49.093-.228-.074-1.129-.416-2.15-1.328-.795-.71-1.328-1.588-1.48-1.858-.15-.27-.015-.42.098-.551.102-.12.228-.313.342-.426.114-.112.151-.186.225-.313.074-.126.037-.24-.019-.314-.056-.074-.506-1.214-.693-1.66-.185-.446-.37-.384-.506-.391-.121-.006-.261-.006-.401-.006-.14 0-.37.056-.566.279-.197.223-.752.734-.752 1.79 0 1.055.77 2.093.884 2.239.114.145 1.519 2.339 3.712 3.255.518.225.922.362 1.23.465.527.176.993.144 1.364.086.418-.065 1.332-.544 1.52-1.07.187-.525.187-.975.131-1.07-.056-.095-.187-.15-.336-.223z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 363,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 362,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const BakingIllustrationIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 200 200",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "pinkGradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            style: {
                                stopColor: '#FDF6F6',
                                stopOpacity: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                            lineNumber: 371,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            style: {
                                stopColor: '#EBC2C4',
                                stopOpacity: 0.2
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                            lineNumber: 372,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                    lineNumber: 370,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "100",
                r: "100",
                fill: "url(#pinkGradient)"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#5C4B4E",
                strokeWidth: "2",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M100 50 C 80 70, 80 110, 100 130"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                        lineNumber: 378,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M100 50 C 120 70, 120 110, 100 130"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                        lineNumber: 379,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M100 50 C 90 80, 110 80, 100 130"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                        lineNumber: 380,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "100",
                        y1: "130",
                        x2: "100",
                        y2: "150"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                        lineNumber: 381,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "140",
                        cy: "120",
                        r: "15"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                        lineNumber: 383,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M155 120 L 165 110"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                        lineNumber: 384,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "50",
                        y1: "80",
                        x2: "90",
                        y2: "80",
                        strokeWidth: "10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                        lineNumber: 386,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 376,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const CrackedShellIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 394,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m14.5 9.5-3 3-2-2-3 4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 395,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 393,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const NoFeetIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12A10 3 0 0 1 22 12Z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 401,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 402,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const HollowShellIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 408,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "6",
                strokeDasharray: "3 3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 409,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const LopsidedIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            transform: "rotate(15 12 12)",
            cx: "12",
            cy: "12",
            rx: "10",
            ry: "7"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 415,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 414,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const WrinkledIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 421,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 10s2-2 7-2 7 2 7 2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 422,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 14s2-2 7-2 7 2 7 2"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const StickingIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12",
                cy: "16",
                rx: "10",
                ry: "4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 429,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "20",
                x2: "22",
                y2: "20"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 430,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 16v4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 431,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 16v4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 432,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 16v4"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 433,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 428,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PauseIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "4",
                width: "4",
                height: "16"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 438,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "4",
                width: "4",
                height: "16"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 438,
                columnNumber: 241
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 438,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ToolboxIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 442,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 442,
                columnNumber: 247
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 442,
                columnNumber: 268
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12v6"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 442,
                columnNumber: 322
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 3.29a2 2 0 0 1 4 0"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 442,
                columnNumber: 343
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 442,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const SunIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 226
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "21",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 264
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "4.22",
                x2: "5.64",
                y2: "5.64"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 304
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "18.36",
                x2: "19.78",
                y2: "19.78"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 352
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "12",
                x2: "3",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 404
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "12",
                x2: "23",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 442
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "19.78",
                x2: "5.64",
                y2: "18.36"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 482
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "5.64",
                x2: "19.78",
                y2: "4.22"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
                lineNumber: 445,
                columnNumber: 532
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 445,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MoonIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 449,
            columnNumber: 194
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const TikTokIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
            lineNumber: 454,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Icons.tsx",
        lineNumber: 453,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Desktop/Projects/TEST3/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "navConfig",
    ()=>navConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/utils/slugs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TEST3/components/Icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const navConfig = [
    {
        id: 'core',
        title: 'Core Calculators',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleCalcIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 47,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'cake-pricing',
                title: 'Free Cake Pricing',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CakePricingIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 49,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'cost-per-recipe',
                title: 'Free Cost Per Recipe',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecipeCostIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 50,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'recipe-scaler',
                title: 'Free Recipe Scaler',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecipeScalerIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 51,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'bakers-percentage',
                title: "Free Baker's Percentage",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PercentIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 52,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'dough-hydration',
                title: 'Free Dough Hydration',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaterDropIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 53,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'ganache-calculator',
                title: 'Free Ganache Ratios',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaterDropIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 54,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'buttercream-calculator',
                title: 'Free Buttercream Quantity',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PastryBagIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'fondant-calculator',
                title: 'Free Fondant Quantity',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BirthdayCakeIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 56,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'dough-temperature',
                title: 'Dough Temperature (DDT)',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThermometerIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 57,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'measurement-converter',
                title: 'Free Measurement Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeasurementIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 58,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'sweetener-converter',
                title: 'Free Sweetener Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SweetenerIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 59,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'protein-macro',
                title: 'Free Protein & Macro',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProteinIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 60,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'converters',
        title: 'Baking Converters',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConverterIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 66,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'baking-pan-converter',
                title: 'Free Baking Pan Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BakingPanIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 68,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'yeast-converter',
                title: 'Free Yeast Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YeastIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 69,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'butterfat-converter',
                title: 'Free Butterfat Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButterIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 70,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'hydration-converter',
                title: 'Free Hydration Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaterDropIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 71,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'temperature-converter',
                title: 'Free Temperature Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThermometerIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 72,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'oven-temp-converter',
                title: 'Free Oven Temp Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThermometerIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 73,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'management',
        title: 'Bakery Management',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManagementIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 79,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'management-dashboard',
                title: 'Free Dashboard',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManagementIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 81,
                    columnNumber: 74
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'order-management',
                title: 'Free Order Management',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClipboardIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 82,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'inventory-management',
                title: 'Free Inventory',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 83,
                    columnNumber: 74
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'shopping-list',
                title: 'Free Shopping List',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShoppingCartIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 84,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'dessert-calculator',
                title: 'Free Dessert Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CakePricingIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 85,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'baker-schedule',
                title: "Free Baker's Todo List",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 86,
                    columnNumber: 76
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'digital-notebook',
                title: 'Free Digital Notebook',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 87,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'utilities',
        title: 'Utility Tools',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolboxIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 93,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'simple-calculator',
                title: 'Free Simple Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleCalcIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 95,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'percentage-calculator',
                title: 'Free Percentage Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PercentIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 96,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'volume-converter',
                title: 'Free Volume Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VolumeIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 97,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'weight-converter',
                title: 'Free Weight Converter',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeightIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 98,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'multiple-timer',
                title: 'Free Multiple Timers',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 99,
                    columnNumber: 74
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'stopwatch',
                title: 'Free Stopwatch',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StopwatchIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 100,
                    columnNumber: 63
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'kitchen',
        title: 'My Kitchen',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MyKitchenIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 106,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'recipe-box',
                title: 'My Recipe Box',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChecklistIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 108,
                    columnNumber: 63
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'family',
        title: 'Life & Family',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GiftIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 114,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'pregnancy-calculator',
                title: 'Free Pregnancy Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartPulseIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 116,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'calorie-calculator',
                title: 'Free Calorie Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScaleIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 117,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'weight-loss-calculator',
                title: 'Free Weight Loss Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScaleIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'body-fat-calculator',
                title: 'Free Body Fat Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BodyIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 119,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'bmi-calculator',
                title: 'Free BMI Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HealthyIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 120,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'bmr-calculator',
                title: 'Free BMR Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlameIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 121,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'ideal-weight-calculator',
                title: 'Free Ideal Weight Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HealthyIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 122,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'pace-calculator',
                title: 'Free Pace Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RunningIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 123,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'age-calculator',
                title: 'Free Age Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BirthdayCakeIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 124,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'date-calculator',
                title: 'Free Date Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarPlusIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 125,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'time-calculator',
                title: 'Free Time Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StopwatchIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 126,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'financial',
        title: 'Financial Tools',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DollarSignIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 132,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'tip-calculator',
                title: 'Free Tip Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DollarSignIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 134,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'investment-calculator',
                title: 'Free Investment Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DollarSignIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 135,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'mortgage-affordability',
                title: 'Mortgage Affordability',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MortgageIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 136,
                    columnNumber: 84
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'mortgage-payoff',
                title: 'Mortgage Payoff Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MortgageIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 137,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'payment-calculator',
                title: 'Free Mortgage Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MortgageIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 138,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'amortization-calculator',
                title: 'Free Amortization Calculator',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MortgageIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 139,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'resources',
        title: 'Resources',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourcesIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 145,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'allergen-guide',
                title: 'Free Baking Allergen Substitution Guide',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AllergenGuideIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 147,
                    columnNumber: 93
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'ingredient-glossary',
                title: 'Free Ingredient Glossary',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlossaryIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 148,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'frosting-color-mixer',
                title: 'Free Frosting Color Mixer',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaletteIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 149,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'flavor-pairing-guide',
                title: 'Free Flavor Pairing Guide',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlavorWheelIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 150,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'ingredient-substitutions',
                title: 'Free Ingredient Substitutions',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IngredientSwapIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 151,
                    columnNumber: 93
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'macaron-troubleshooting',
                title: 'Free Macaron Troubleshooting',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MacaronIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 152,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'baking-bucket-list',
                title: 'Free Baking Bucket List',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TargetIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 153,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'baking-tutorials',
                title: 'Free Baking Tutorials',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YoutubeIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 154,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: 'relaxing-videos',
                title: 'Relaxing Videos',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MusicIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 155,
                    columnNumber: 70
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: 'beverages',
        title: 'Beverages',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CocktailIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 161,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        tools: [
            {
                id: 'drinks-videos',
                title: 'Free Drink Recipe Videos',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CocktailIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 163,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    }
];
const NavItem = ({ icon, children, href, onClick })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            onClick: onClick,
            className: `flex items-center w-full text-left gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 ${active ? 'bg-brand-pink text-white' : 'text-brand-text-body hover:bg-brand-pink-light'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: active ? 'text-white' : 'text-brand-text-body/70',
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 181,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
        lineNumber: 180,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const AccordionCategory = ({ title, icon, children, isOpen, setIsOpen })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: setIsOpen,
                className: "flex items-center justify-between w-full text-left gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-pink-light transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-pink",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 201,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-brand-pink",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronUpIcon"], {
                        className: "w-5 h-5 text-brand-pink"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                        lineNumber: 204,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                        className: "w-5 h-5 text-brand-pink"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                        lineNumber: 204,
                        columnNumber: 79
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "pl-6 py-1 space-y-1 border-l-2 border-brand-border ml-5 mt-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                lineNumber: 207,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ToolLink = ({ children, icon, href, onClick })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            onClick: onClick,
            className: `w-full text-left flex items-center gap-3 px-2 py-1.5 rounded-md text-sm transition-colors duration-200 ${active ? 'text-brand-pink font-bold' : 'text-brand-text-body/80 hover:text-brand-text-title'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-5 h-5 text-brand-text-body/60",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 228,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 229,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
            lineNumber: 227,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
        lineNumber: 226,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const Sidebar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openCategory, setOpenCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('core');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const toggleCategory = (id)=>{
        setOpenCategory((prevOpenCategory)=>prevOpenCategory === id ? null : id);
    };
    const isSearching = searchTerm.trim().length > 0;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredNavConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isSearching) {
            return navConfig;
        }
        return navConfig.map((category)=>{
            const filteredTools = category.tools.filter((tool)=>tool.title.toLowerCase().includes(lowerCaseSearchTerm));
            if (category.title.toLowerCase().includes(lowerCaseSearchTerm)) {
                return category;
            }
            if (filteredTools.length > 0) {
                return {
                    ...category,
                    tools: filteredTools
                };
            }
            return null;
        }).filter((category)=>category !== null);
    }, [
        lowerCaseSearchTerm,
        isSearching
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md border border-brand-border",
                "aria-label": "Open menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuIcon"], {
                    className: "w-6 h-6 text-brand-text-title"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                    lineNumber: 280,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                lineNumber: 275,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 z-30 md:hidden",
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                lineNumber: 284,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-brand-border flex flex-col p-4 transition-transform duration-300 ease-in-out md:h-screen md:sticky md:top-0 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-4 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: ()=>setIsOpen(false),
                            className: "w-full text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-3xl font-bold text-brand-text-title",
                                children: "Sweety's Bakery"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 290,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                            lineNumber: 289,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                        lineNumber: 288,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative px-1 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchIcon"], {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search tools...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full bg-brand-pink-light/70 border border-brand-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200",
                                "aria-label": "Search for a tool"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 296,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 space-y-2 overflow-y-auto pb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('home'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 308,
                                            columnNumber: 68
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 308,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('baking-blog'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookOpenIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 310,
                                            columnNumber: 75
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "Baking Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 310,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: "/recipes",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChecklistIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 311,
                                            columnNumber: 56
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "Recipe Index"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 311,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('products'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShoppingCartIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 312,
                                            columnNumber: 72
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "Products"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 312,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('all-tools'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolboxIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 313,
                                            columnNumber: 73
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "All Tools"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 313,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('baking-sources'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourcesIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 314,
                                            columnNumber: 78
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "Baking Sources"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 314,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('my-art'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MyArtIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 315,
                                            columnNumber: 70
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "My Art Gallery"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 315,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('essential-recipes'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChecklistIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 316,
                                            columnNumber: 81
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "100 Recipes"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 316,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])('about'),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 317,
                                            columnNumber: 69
                                        }, void 0),
                                        onClick: ()=>setIsOpen(false),
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 317,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 307,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-brand-border/50 my-4 mx-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 320,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "pt-2 space-y-2 px-2",
                                children: [
                                    filteredNavConfig.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionCategory, {
                                                title: category.title,
                                                icon: category.icon,
                                                isOpen: isSearching || openCategory === category.id,
                                                setIsOpen: ()=>toggleCategory(category.id),
                                                children: category.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolLink, {
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$components$2f$utils$2f$slugs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toolIdToSlug"])(tool.id),
                                                        icon: tool.icon,
                                                        onClick: ()=>setIsOpen(false),
                                                        children: tool.title
                                                    }, tool.id, false, {
                                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                                lineNumber: 325,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, category.id, false, {
                                            fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                            lineNumber: 324,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    isSearching && filteredNavConfig.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-center px-4 py-8 text-sm text-brand-text-body/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: "No tools found"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Try a different search term."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                                lineNumber: 347,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                        lineNumber: 345,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 322,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-24"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 351,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-brand-border text-xs text-brand-text-body/60 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TEST3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex justify-center"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                                lineNumber: 353,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "© 2025 Sweety's Bakery. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                        lineNumber: 352,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/TEST3/components/Sidebar.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d852c6e3._.js.map