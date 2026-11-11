module.exports = [
"[project]/src/components/animations/BackgroundAnimationSystem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundAnimationSystem",
    ()=>BackgroundAnimationSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function BackgroundAnimationSystem() {
    const [isDesktopHover, setIsDesktopHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPageVisible, setIsPageVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Mouse coords for smooth radial spotlight
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-1000);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-1000);
    // Smooth springs for cursor glow
    const smoothMouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        stiffness: 120,
        damping: 24,
        mass: 0.2
    });
    const smoothMouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, {
        stiffness: 120,
        damping: 24,
        mass: 0.2
    });
    // Scroll parallax tracking across layers
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const parallaxVerticalLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        5000
    ], [
        0,
        -320
    ]);
    const parallaxLightTrails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        5000
    ], [
        0,
        -180
    ]);
    const parallaxParticlesFast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        5000
    ], [
        0,
        -420
    ]);
    const parallaxParticlesSlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        5000
    ], [
        0,
        -140
    ]);
    // Floating particles in multiple directions
    const particles = [
        {
            id: 1,
            top: "6%",
            left: "12%",
            size: 2.5,
            opacity: 0.55,
            duration: 8,
            delay: 0,
            anim: "particleDriftUpRight"
        },
        {
            id: 2,
            top: "14%",
            left: "84%",
            size: 3,
            opacity: 0.45,
            duration: 11,
            delay: 1.5,
            anim: "particleDriftDownLeft"
        },
        {
            id: 3,
            top: "22%",
            left: "42%",
            size: 2,
            opacity: 0.6,
            duration: 9,
            delay: 0.8,
            anim: "particleDriftUpLeft"
        },
        {
            id: 4,
            top: "32%",
            left: "8%",
            size: 1.5,
            opacity: 0.35,
            duration: 10,
            delay: 2.2,
            anim: "particleDriftFloat"
        },
        {
            id: 5,
            top: "42%",
            left: "91%",
            size: 2.5,
            opacity: 0.5,
            duration: 12,
            delay: 1,
            anim: "particleDriftUpRight"
        },
        {
            id: 6,
            top: "52%",
            left: "24%",
            size: 3,
            opacity: 0.65,
            duration: 9.5,
            delay: 3,
            anim: "particleDriftDownLeft"
        },
        {
            id: 7,
            top: "62%",
            left: "76%",
            size: 2,
            opacity: 0.4,
            duration: 11.5,
            delay: 0.5,
            anim: "particleDriftFloat"
        },
        {
            id: 8,
            top: "72%",
            left: "36%",
            size: 1.5,
            opacity: 0.45,
            duration: 10,
            delay: 2.8,
            anim: "particleDriftUpLeft"
        },
        {
            id: 9,
            top: "82%",
            left: "88%",
            size: 2.5,
            opacity: 0.4,
            duration: 8.5,
            delay: 1.2,
            anim: "particleDriftUpRight"
        },
        {
            id: 10,
            top: "92%",
            left: "15%",
            size: 2,
            opacity: 0.55,
            duration: 9,
            delay: 2,
            anim: "particleDriftDownLeft"
        },
        {
            id: 11,
            top: "18%",
            left: "62%",
            size: 2,
            opacity: 0.35,
            duration: 8,
            delay: 3.5,
            anim: "particleDriftFloat"
        },
        {
            id: 12,
            top: "48%",
            left: "68%",
            size: 3,
            opacity: 0.5,
            duration: 13,
            delay: 0.2,
            anim: "particleDriftUpLeft"
        },
        {
            id: 13,
            top: "68%",
            left: "50%",
            size: 1.5,
            opacity: 0.4,
            duration: 9,
            delay: 1.8,
            anim: "particleDriftUpRight"
        },
        {
            id: 14,
            top: "86%",
            left: "60%",
            size: 2.5,
            opacity: 0.55,
            duration: 8.2,
            delay: 2.5,
            anim: "particleDriftFloat"
        },
        {
            id: 15,
            top: "28%",
            left: "28%",
            size: 2,
            opacity: 0.4,
            duration: 10.5,
            delay: 4,
            anim: "particleDriftDownLeft"
        },
        {
            id: 16,
            top: "78%",
            left: "18%",
            size: 2,
            opacity: 0.5,
            duration: 9.2,
            delay: 1.6,
            anim: "particleDriftUpRight"
        }
    ];
    // ─── SUBTLE VERTICAL GREEN LIGHT GRADIENT PILLARS AROUND SELECTED CLUSTERS ───
    const glowPillars = [
        {
            left: "7.0%",
            width: "45px",
            height: "75%",
            top: "0%",
            duration: "8s",
            delay: "-1s",
            opacity: 0.55
        },
        {
            left: "21.5%",
            width: "60px",
            height: "85%",
            top: "4%",
            duration: "10s",
            delay: "-3s",
            opacity: 0.65
        },
        {
            left: "34.0%",
            width: "42px",
            height: "70%",
            top: "8%",
            duration: "9s",
            delay: "-5s",
            opacity: 0.45
        },
        {
            left: "46.5%",
            width: "68px",
            height: "90%",
            top: "0%",
            duration: "11s",
            delay: "-2s",
            opacity: 0.75
        },
        {
            left: "63.0%",
            width: "50px",
            height: "80%",
            top: "6%",
            duration: "9.5s",
            delay: "-4s",
            opacity: 0.55
        },
        {
            left: "78.5%",
            width: "62px",
            height: "85%",
            top: "0%",
            duration: "10.5s",
            delay: "-1.5s",
            opacity: 0.65
        },
        {
            left: "92.0%",
            width: "46px",
            height: "72%",
            top: "10%",
            duration: "8.5s",
            delay: "-6s",
            opacity: 0.5
        }
    ];
    // ─── THIN VERTICAL NEON-GREEN LINES (LAYERED, DIVERSE SPEEDS, HEIGHTS & OPACITY) ───
    const verticalLines = [
        // Cluster 1 (Left: 3% - 11%)
        {
            id: 1,
            left: "3.2%",
            width: 0.75,
            height: "340px",
            duration: "19s",
            delay: "-4s",
            opacity: 0.15,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 2,
            left: "4.5%",
            width: 1.0,
            height: "540px",
            duration: "13s",
            delay: "-9s",
            opacity: 0.55,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 3,
            left: "5.8%",
            width: 1.5,
            height: "780px",
            duration: "10s",
            delay: "-2s",
            opacity: 0.85,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 4,
            left: "6.6%",
            width: 1.0,
            height: "420px",
            duration: "15s",
            delay: "-11s",
            opacity: 0.4,
            glow: false,
            gradientType: "emerald"
        },
        {
            id: 5,
            left: "7.5%",
            width: 2.0,
            height: "890px",
            duration: "8.5s",
            delay: "-5.5s",
            opacity: 0.95,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 6,
            left: "8.6%",
            width: 0.75,
            height: "610px",
            duration: "21s",
            delay: "-14s",
            opacity: 0.22,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 7,
            left: "9.8%",
            width: 1.5,
            height: "510px",
            duration: "12s",
            delay: "-7s",
            opacity: 0.75,
            glow: true,
            gradientType: "emerald"
        },
        {
            id: 8,
            left: "11.2%",
            width: 1.0,
            height: "370px",
            duration: "16s",
            delay: "-1s",
            opacity: 0.3,
            glow: false,
            gradientType: "faint"
        },
        // Cluster 2 (Mid-Left: 16% - 26%)
        {
            id: 9,
            left: "16.4%",
            width: 0.75,
            height: "410px",
            duration: "22s",
            delay: "-8s",
            opacity: 0.18,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 10,
            left: "18.0%",
            width: 1.5,
            height: "740px",
            duration: "11s",
            delay: "-3s",
            opacity: 0.8,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 11,
            left: "19.3%",
            width: 2.0,
            height: "960px",
            duration: "9s",
            delay: "-6.5s",
            opacity: 0.95,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 12,
            left: "20.5%",
            width: 1.0,
            height: "560px",
            duration: "14s",
            delay: "-12s",
            opacity: 0.45,
            glow: true,
            gradientType: "emerald"
        },
        {
            id: 13,
            left: "21.6%",
            width: 1.5,
            height: "840px",
            duration: "10.5s",
            delay: "-1.5s",
            opacity: 0.85,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 14,
            left: "22.8%",
            width: 0.75,
            height: "450px",
            duration: "19s",
            delay: "-15s",
            opacity: 0.25,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 15,
            left: "24.2%",
            width: 1.0,
            height: "670px",
            duration: "12.5s",
            delay: "-9s",
            opacity: 0.65,
            glow: true,
            gradientType: "emerald"
        },
        {
            id: 16,
            left: "25.8%",
            width: 0.75,
            height: "320px",
            duration: "24s",
            delay: "-4s",
            opacity: 0.12,
            glow: false,
            gradientType: "faint"
        },
        // Cluster 3 (Center-Left: 30% - 38%)
        {
            id: 17,
            left: "30.4%",
            width: 0.75,
            height: "360px",
            duration: "20s",
            delay: "-7s",
            opacity: 0.2,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 18,
            left: "32.0%",
            width: 1.5,
            height: "700px",
            duration: "11.5s",
            delay: "-2.5s",
            opacity: 0.75,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 19,
            left: "33.5%",
            width: 2.0,
            height: "860px",
            duration: "9.5s",
            delay: "-8s",
            opacity: 0.9,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 20,
            left: "34.8%",
            width: 1.0,
            height: "490px",
            duration: "15s",
            delay: "-13s",
            opacity: 0.4,
            glow: false,
            gradientType: "emerald"
        },
        {
            id: 21,
            left: "36.2%",
            width: 1.5,
            height: "780px",
            duration: "10s",
            delay: "-4.5s",
            opacity: 0.85,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 22,
            left: "37.6%",
            width: 0.75,
            height: "430px",
            duration: "18s",
            delay: "-10s",
            opacity: 0.22,
            glow: false,
            gradientType: "faint"
        },
        // Cluster 4 (Center: 42% - 50%)
        {
            id: 23,
            left: "42.4%",
            width: 0.75,
            height: "470px",
            duration: "21s",
            delay: "-6s",
            opacity: 0.25,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 24,
            left: "43.9%",
            width: 1.5,
            height: "770px",
            duration: "10.5s",
            delay: "-1s",
            opacity: 0.82,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 25,
            left: "45.2%",
            width: 2.0,
            height: "990px",
            duration: "8s",
            delay: "-5.5s",
            opacity: 1.0,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 26,
            left: "46.5%",
            width: 1.0,
            height: "600px",
            duration: "13.5s",
            delay: "-11s",
            opacity: 0.5,
            glow: true,
            gradientType: "emerald"
        },
        {
            id: 27,
            left: "47.7%",
            width: 2.0,
            height: "910px",
            duration: "9s",
            delay: "-3s",
            opacity: 0.92,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 28,
            left: "48.9%",
            width: 1.0,
            height: "650px",
            duration: "12s",
            delay: "-8.5s",
            opacity: 0.65,
            glow: true,
            gradientType: "emerald"
        },
        {
            id: 29,
            left: "50.3%",
            width: 0.75,
            height: "390px",
            duration: "23s",
            delay: "-16s",
            opacity: 0.16,
            glow: false,
            gradientType: "faint"
        },
        // Cluster 5 (Center-Right: 58% - 68%)
        {
            id: 30,
            left: "58.4%",
            width: 0.75,
            height: "400px",
            duration: "19s",
            delay: "-9s",
            opacity: 0.2,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 31,
            left: "60.1%",
            width: 1.5,
            height: "730px",
            duration: "11s",
            delay: "-3.5s",
            opacity: 0.78,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 32,
            left: "61.7%",
            width: 2.0,
            height: "880px",
            duration: "9s",
            delay: "-7s",
            opacity: 0.92,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 33,
            left: "63.2%",
            width: 1.0,
            height: "530px",
            duration: "14.5s",
            delay: "-12.5s",
            opacity: 0.45,
            glow: true,
            gradientType: "emerald"
        },
        {
            id: 34,
            left: "64.6%",
            width: 1.5,
            height: "810px",
            duration: "10s",
            delay: "-2s",
            opacity: 0.85,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 35,
            left: "66.0%",
            width: 0.75,
            height: "460px",
            duration: "17s",
            delay: "-14s",
            opacity: 0.28,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 36,
            left: "67.8%",
            width: 1.0,
            height: "640px",
            duration: "12.5s",
            delay: "-5s",
            opacity: 0.62,
            glow: true,
            gradientType: "emerald"
        },
        // Cluster 6 (Mid-Right: 73% - 82%)
        {
            id: 37,
            left: "73.4%",
            width: 0.75,
            height: "370px",
            duration: "22s",
            delay: "-11s",
            opacity: 0.18,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 38,
            left: "75.0%",
            width: 1.5,
            height: "750px",
            duration: "10.5s",
            delay: "-4s",
            opacity: 0.8,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 39,
            left: "76.5%",
            width: 2.0,
            height: "940px",
            duration: "8.5s",
            delay: "-6s",
            opacity: 0.95,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 40,
            left: "77.8%",
            width: 1.0,
            height: "570px",
            duration: "13s",
            delay: "-10.5s",
            opacity: 0.5,
            glow: true,
            gradientType: "emerald"
        },
        {
            id: 41,
            left: "79.2%",
            width: 1.5,
            height: "830px",
            duration: "9.5s",
            delay: "-1.8s",
            opacity: 0.88,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 42,
            left: "80.5%",
            width: 0.75,
            height: "490px",
            duration: "18s",
            delay: "-15s",
            opacity: 0.24,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 43,
            left: "81.8%",
            width: 1.0,
            height: "650px",
            duration: "12s",
            delay: "-7.5s",
            opacity: 0.65,
            glow: true,
            gradientType: "emerald"
        },
        // Cluster 7 (Far-Right: 87% - 97%)
        {
            id: 44,
            left: "87.4%",
            width: 0.75,
            height: "340px",
            duration: "20s",
            delay: "-8s",
            opacity: 0.15,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 45,
            left: "88.9%",
            width: 1.5,
            height: "720px",
            duration: "11.5s",
            delay: "-3s",
            opacity: 0.76,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 46,
            left: "90.5%",
            width: 2.0,
            height: "880px",
            duration: "9s",
            delay: "-7.5s",
            opacity: 0.9,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 47,
            left: "91.8%",
            width: 1.0,
            height: "540px",
            duration: "14s",
            delay: "-12s",
            opacity: 0.42,
            glow: false,
            gradientType: "emerald"
        },
        {
            id: 48,
            left: "93.3%",
            width: 1.5,
            height: "790px",
            duration: "10s",
            delay: "-2.2s",
            opacity: 0.84,
            glow: true,
            gradientType: "bright"
        },
        {
            id: 49,
            left: "94.6%",
            width: 0.75,
            height: "440px",
            duration: "19s",
            delay: "-14.5s",
            opacity: 0.2,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 50,
            left: "96.2%",
            width: 1.0,
            height: "610px",
            duration: "13s",
            delay: "-6s",
            opacity: 0.58,
            glow: true,
            gradientType: "emerald"
        },
        // Sporadic Gap Lines (Atmospheric texture)
        {
            id: 51,
            left: "1.5%",
            width: 0.75,
            height: "310px",
            duration: "26s",
            delay: "-13s",
            opacity: 0.1,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 52,
            left: "13.8%",
            width: 0.75,
            height: "430px",
            duration: "24s",
            delay: "-7s",
            opacity: 0.14,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 53,
            left: "28.2%",
            width: 0.75,
            height: "370px",
            duration: "25s",
            delay: "-17s",
            opacity: 0.12,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 54,
            left: "40.5%",
            width: 0.75,
            height: "500px",
            duration: "22s",
            delay: "-9s",
            opacity: 0.16,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 55,
            left: "53.8%",
            width: 0.75,
            height: "390px",
            duration: "27s",
            delay: "-21s",
            opacity: 0.11,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 56,
            left: "71.0%",
            width: 0.75,
            height: "450px",
            duration: "23s",
            delay: "-5s",
            opacity: 0.15,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 57,
            left: "84.5%",
            width: 0.75,
            height: "380px",
            duration: "25s",
            delay: "-16s",
            opacity: 0.13,
            glow: false,
            gradientType: "faint"
        },
        {
            id: 58,
            left: "98.5%",
            width: 0.75,
            height: "320px",
            duration: "28s",
            delay: "-11s",
            opacity: 0.1,
            glow: false,
            gradientType: "faint"
        }
    ];
    // ─── THIN HORIZONTAL SCANNING LINES (LEFT TO RIGHT, OCCASIONAL BRIGHT BEAMS) ───
    const horizontalLines = [
        {
            id: 1,
            top: "3.5%",
            width: "320px",
            height: 1,
            duration: "18s",
            delay: "-4s",
            opacity: 0.35,
            isBrightBeam: false
        },
        {
            id: 2,
            top: "7.0%",
            width: "520px",
            height: 1.5,
            duration: "13s",
            delay: "-9s",
            opacity: 0.75,
            isBrightBeam: true
        },
        {
            id: 3,
            top: "11.5%",
            width: "260px",
            height: 1,
            duration: "22s",
            delay: "-14s",
            opacity: 0.22,
            isBrightBeam: false
        },
        {
            id: 4,
            top: "15.0%",
            width: "420px",
            height: 1,
            duration: "16s",
            delay: "-2s",
            opacity: 0.45,
            isBrightBeam: false
        },
        {
            id: 5,
            top: "19.5%",
            width: "680px",
            height: 2,
            duration: "11s",
            delay: "-7.5s",
            opacity: 0.95,
            isBrightBeam: true
        },
        {
            id: 6,
            top: "24.0%",
            width: "310px",
            height: 1,
            duration: "25s",
            delay: "-18s",
            opacity: 0.18,
            isBrightBeam: false
        },
        {
            id: 7,
            top: "28.5%",
            width: "480px",
            height: 1,
            duration: "15s",
            delay: "-5s",
            opacity: 0.5,
            isBrightBeam: false
        },
        {
            id: 8,
            top: "33.0%",
            width: "360px",
            height: 1,
            duration: "20s",
            delay: "-12s",
            opacity: 0.28,
            isBrightBeam: false
        },
        {
            id: 9,
            top: "37.5%",
            width: "620px",
            height: 1.5,
            duration: "12.5s",
            delay: "-3s",
            opacity: 0.85,
            isBrightBeam: true
        },
        {
            id: 10,
            top: "42.0%",
            width: "290px",
            height: 1,
            duration: "23s",
            delay: "-15s",
            opacity: 0.2,
            isBrightBeam: false
        },
        {
            id: 11,
            top: "46.5%",
            width: "450px",
            height: 1,
            duration: "17s",
            delay: "-8s",
            opacity: 0.4,
            isBrightBeam: false
        },
        {
            id: 12,
            top: "51.0%",
            width: "740px",
            height: 2,
            duration: "10.5s",
            delay: "-6s",
            opacity: 0.95,
            isBrightBeam: true
        },
        {
            id: 13,
            top: "55.5%",
            width: "340px",
            height: 1,
            duration: "21s",
            delay: "-13.5s",
            opacity: 0.25,
            isBrightBeam: false
        },
        {
            id: 14,
            top: "60.0%",
            width: "490px",
            height: 1,
            duration: "14.5s",
            delay: "-1s",
            opacity: 0.55,
            isBrightBeam: false
        },
        {
            id: 15,
            top: "64.5%",
            width: "270px",
            height: 1,
            duration: "26s",
            delay: "-19s",
            opacity: 0.16,
            isBrightBeam: false
        },
        {
            id: 16,
            top: "69.0%",
            width: "580px",
            height: 1.5,
            duration: "13.5s",
            delay: "-7s",
            opacity: 0.8,
            isBrightBeam: true
        },
        {
            id: 17,
            top: "73.5%",
            width: "380px",
            height: 1,
            duration: "19s",
            delay: "-11s",
            opacity: 0.3,
            isBrightBeam: false
        },
        {
            id: 18,
            top: "78.0%",
            width: "460px",
            height: 1,
            duration: "16.5s",
            delay: "-4.5s",
            opacity: 0.48,
            isBrightBeam: false
        },
        {
            id: 19,
            top: "82.5%",
            width: "710px",
            height: 2,
            duration: "11.5s",
            delay: "-8.5s",
            opacity: 0.9,
            isBrightBeam: true
        },
        {
            id: 20,
            top: "87.0%",
            width: "330px",
            height: 1,
            duration: "24s",
            delay: "-16s",
            opacity: 0.22,
            isBrightBeam: false
        },
        {
            id: 21,
            top: "91.5%",
            width: "510px",
            height: 1.5,
            duration: "14s",
            delay: "-3.5s",
            opacity: 0.65,
            isBrightBeam: false
        },
        {
            id: 22,
            top: "95.5%",
            width: "400px",
            height: 1,
            duration: "20s",
            delay: "-10s",
            opacity: 0.25,
            isBrightBeam: false
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if device supports fine hover (desktop)
        const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
        setIsDesktopHover(hoverQuery.matches);
        const handleHoverChange = (e)=>{
            setIsDesktopHover(e.matches);
        };
        hoverQuery.addEventListener("change", handleHoverChange);
        // Track mouse position
        const handleMouseMove = (e)=>{
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        if (hoverQuery.matches) {
            window.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
        }
        // Visibility change listener to pause animations when hidden
        const handleVisibility = ()=>{
            setIsPageVisible(!document.hidden);
        };
        document.addEventListener("visibilitychange", handleVisibility);
        return ()=>{
            hoverQuery.removeEventListener("change", handleHoverChange);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [
        mouseX,
        mouseY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(198,255,54,0.08),transparent_65%)] blur-[130px] animate-pulse-glow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 -left-48 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(45,55,25,0.35),transparent_70%)] blur-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2/3 -right-48 w-[850px] h-[850px] bg-[radial-gradient(circle,rgba(198,255,54,0.05),transparent_65%)] blur-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(198,255,54,0.07),transparent_70%)] blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            isDesktopHover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-[350px] -left-[350px] w-[700px] h-[700px] rounded-full pointer-events-none",
                style: {
                    x: smoothMouseX,
                    y: smoothMouseY,
                    background: "radial-gradient(circle, rgba(198, 255, 54, 0.08) 0%, rgba(198, 255, 54, 0.02) 40%, transparent 70%)",
                    filter: "blur(40px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 w-full h-full",
                style: {
                    y: parallaxVerticalLines
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex justify-between px-6 sm:px-16 opacity-25",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-full bg-white/[0.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-full bg-white/[0.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-full bg-white/[0.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-full bg-white/[0.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-full bg-white/[0.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-full bg-white/[0.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-full bg-white/[0.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    glowPillars.map((pillar, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute pointer-events-none",
                            style: {
                                left: pillar.left,
                                width: pillar.width,
                                height: pillar.height,
                                top: pillar.top,
                                transform: "translateX(-50%)",
                                background: "radial-gradient(ellipse at top, rgba(198, 255, 54, 0.22) 0%, rgba(34, 197, 94, 0.08) 45%, transparent 75%)",
                                filter: "blur(18px)",
                                opacity: pillar.opacity,
                                animationName: "verticalPillarPulse",
                                animationDuration: pillar.duration,
                                animationTimingFunction: "ease-in-out",
                                animationIterationCount: "infinite",
                                animationDelay: pillar.delay
                            }
                        }, `pillar-${idx}`, false, {
                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)),
                    verticalLines.map((line)=>{
                        const bgGradient = line.gradientType === "bright" ? "linear-gradient(to bottom, #FFFFFF 0%, #C6FF36 18%, #C6FF36 60%, rgba(198, 255, 54, 0.3) 85%, transparent 100%)" : line.gradientType === "emerald" ? "linear-gradient(to bottom, #C6FF36 0%, #22c55e 40%, rgba(34, 197, 94, 0.25) 80%, transparent 100%)" : "linear-gradient(to bottom, transparent, rgba(198, 255, 54, 0.45) 25%, rgba(198, 255, 54, 0.15) 75%, transparent 100%)";
                        const shadow = line.glow ? line.gradientType === "bright" ? "0 0 8px #C6FF36, 0 0 18px rgba(198, 255, 54, 0.5)" : "0 0 6px rgba(34, 197, 94, 0.6)" : undefined;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 pointer-events-none",
                            style: {
                                left: line.left,
                                width: `${line.width}px`,
                                height: line.height,
                                opacity: line.opacity,
                                background: bgGradient,
                                boxShadow: shadow,
                                animationName: "verticalBeamFlow",
                                animationDuration: line.duration,
                                animationTimingFunction: "linear",
                                animationIterationCount: "infinite",
                                animationDelay: line.delay,
                                willChange: "transform"
                            }
                        }, `vline-${line.id}`, false, {
                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none opacity-40",
                        style: {
                            backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 23px, rgba(198, 255, 54, 0.025) 23px, rgba(198, 255, 54, 0.06) 24px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    horizontalLines.map((line)=>{
                        const beamGradient = line.isBrightBeam ? "linear-gradient(to right, transparent 0%, rgba(198, 255, 54, 0.25) 20%, #FFFFFF 65%, #C6FF36 85%, transparent 100%)" : "linear-gradient(to right, transparent 0%, rgba(198, 255, 54, 0.15) 30%, #C6FF36 75%, transparent 100%)";
                        const beamShadow = line.isBrightBeam ? "0 0 10px #C6FF36, 0 0 20px rgba(198, 255, 54, 0.45)" : "0 0 5px rgba(198, 255, 54, 0.3)";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 pointer-events-none",
                            style: {
                                top: line.top
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-px bg-gradient-to-r from-transparent via-[#C6FF36]/8 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 pointer-events-none",
                                    style: {
                                        width: line.width,
                                        height: `${line.height}px`,
                                        opacity: line.opacity,
                                        background: beamGradient,
                                        boxShadow: beamShadow,
                                        animationName: "horizontalLineTravel",
                                        animationDuration: line.duration,
                                        animationTimingFunction: "linear",
                                        animationIterationCount: "infinite",
                                        animationDelay: line.delay,
                                        willChange: "transform"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this),
                                line.isBrightBeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1.5 pointer-events-none blur-sm",
                                    style: {
                                        width: line.width,
                                        height: "12px",
                                        opacity: line.opacity * 0.4,
                                        background: "linear-gradient(to right, transparent 0%, rgba(198, 255, 54, 0.35) 50%, transparent 100%)",
                                        animationName: "horizontalLineTravel",
                                        animationDuration: line.duration,
                                        animationTimingFunction: "linear",
                                        animationIterationCount: "infinite",
                                        animationDelay: line.delay,
                                        willChange: "transform"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `hline-${line.id}`, true, {
                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 w-full h-full pointer-events-none",
                style: {
                    y: parallaxLightTrails
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-full h-full opacity-60 mix-blend-screen",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "none",
                    viewBox: "0 0 1440 1800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "globalTrail1",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#C6FF36",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "35%",
                                            stopColor: "#C6FF36",
                                            stopOpacity: "0.75"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 387,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "65%",
                                            stopColor: "#C6FF36",
                                            stopOpacity: "0.9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#C6FF36",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "globalTrail2",
                                    x1: "100%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#C6FF36",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "50%",
                                            stopColor: "#C6FF36",
                                            stopOpacity: "0.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#C6FF36",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "svgLightGlow",
                                    x: "-20%",
                                    y: "-20%",
                                    width: "140%",
                                    height: "140%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "6",
                                            result: "blur"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "blur"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "SourceGraphic"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M -150 180 C 250 80, 500 480, 950 350 C 1250 260, 1400 520, 1600 420",
                            fill: "none",
                            stroke: "url(#globalTrail1)",
                            strokeWidth: "2.2",
                            filter: "url(#svgLightGlow)",
                            strokeDasharray: "350 1100",
                            style: {
                                animationName: "lightTrailFlow",
                                animationDuration: "18s",
                                animationTimingFunction: "linear",
                                animationIterationCount: "infinite"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 1600 700 C 1200 650, 950 950, 500 850 C 200 780, 0 1100, -200 980",
                            fill: "none",
                            stroke: "url(#globalTrail2)",
                            strokeWidth: "1.8",
                            filter: "url(#svgLightGlow)",
                            strokeDasharray: "300 1000",
                            style: {
                                animationName: "lightTrailFlow",
                                animationDuration: "24s",
                                animationTimingFunction: "linear",
                                animationIterationCount: "infinite",
                                animationDirection: "reverse"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M -100 1350 C 350 1200, 700 1550, 1100 1400 C 1350 1300, 1500 1600, 1650 1500",
                            fill: "none",
                            stroke: "url(#globalTrail1)",
                            strokeWidth: "2",
                            filter: "url(#svgLightGlow)",
                            strokeDasharray: "400 1300",
                            style: {
                                animationName: "lightTrailFlow",
                                animationDuration: "21s",
                                animationTimingFunction: "linear",
                                animationIterationCount: "infinite"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 w-full h-full pointer-events-none",
                style: {
                    y: parallaxParticlesFast
                },
                children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full bg-[#C6FF36] pointer-events-none",
                        style: {
                            top: p.top,
                            left: p.left,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            opacity: p.opacity,
                            boxShadow: `0 0 ${p.size * 3}px #C6FF36`,
                            animationName: p.anim,
                            animationDuration: `${p.duration}s`,
                            animationTimingFunction: "ease-in-out",
                            animationIterationCount: "infinite",
                            animationDelay: `${p.delay}s`
                        }
                    }, p.id, false, {
                        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/BackgroundAnimationSystem.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/animations/CinematicGreenBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicGreenBackground",
    ()=>CinematicGreenBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function CinematicGreenBackground({ className = "", showEmblem = true }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll tracking across the section
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    // Smooth scroll springs
    const smoothScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 90,
        damping: 20
    });
    // Emblem scale & rotation transform based on scroll
    const emblemScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothScroll, [
        0,
        0.5,
        1
    ], [
        0.72,
        1.12,
        0.85
    ]);
    const emblemRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothScroll, [
        0,
        0.5,
        1
    ], [
        -4,
        0,
        4
    ]);
    const emblemY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothScroll, [
        0,
        0.5,
        1
    ], [
        40,
        0,
        -40
    ]);
    const emblemGlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothScroll, [
        0,
        0.5,
        1
    ], [
        0.5,
        1.0,
        0.6
    ]);
    // Reduced motion preference
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = (e)=>setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return ()=>mq.removeEventListener("change", handler);
    }, []);
    // WebGL Shader Engine for Organic Flame & Liquid-Ink Silhouette
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        // Check WebGL support
        const gl = canvas.getContext("webgl2", {
            powerPreference: "high-performance",
            alpha: false
        }) || canvas.getContext("webgl", {
            powerPreference: "high-performance",
            alpha: false
        });
        if (!gl) {
            console.warn("WebGL not supported, falling back to 2D canvas");
            return;
        }
        let animationFrameId;
        let startTime = performance.now();
        // Resize handler
        const handleResize = ()=>{
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR at 1.5 for performance
            const width = canvas.parentElement?.clientWidth || window.innerWidth;
            const height = canvas.parentElement?.clientHeight || window.innerHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        // Vertex Shader
        const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
        // Fragment Shader: Organic flame-like & liquid-ink silhouettes with green palette
        const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_scroll;

      // Fast Simplex-style hash and noise
      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      // 4-octave Fractional Brownian Motion with rotation
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.52;
        mat2 rot = mat2(cos(0.55), sin(0.55), -sin(0.55), cos(0.55));
        for (int i = 0; i < 4; ++i) {
          v += a * noise(p);
          p = rot * p * 2.08 + vec2(14.2, -8.7);
          a *= 0.48;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.38;

        // Domain warping for organic liquid flames
        vec2 q = vec2(
          fbm(p * 1.4 + vec2(0.0, -t * 0.75)),
          fbm(p * 1.4 + vec2(4.8, -t * 0.65))
        );

        vec2 r = vec2(
          fbm(p * 2.1 + 3.8 * q + vec2(1.7, -t * 1.1)),
          fbm(p * 2.1 + 3.8 * q + vec2(7.9, -t * 0.95))
        );

        float f = fbm(p * 1.7 + 3.2 * r + vec2(0.0, -t * 0.45));

        // Rising liquid-ink / flame wall from bottom (matching reference video frames)
        float baseHeight = 0.58 + 0.18 * sin(t * 0.4) + u_scroll * 0.3;
        float flameDist = (1.0 - uv.y) - baseHeight + (f - 0.5) * 0.85;

        // Specified Palette
        vec3 colBg = vec3(0.012, 0.027, 0.016);          // #030704
        vec3 colDarkGreen = vec3(0.024, 0.239, 0.125);   // #063D20
        vec3 colDeepEmerald = vec3(0.0, 0.561, 0.298);    // #008F4C
        vec3 colNeonGreen = vec3(0.0, 1.0, 0.522);        // #00FF85
        vec3 colHighlight = vec3(0.224, 1.0, 0.612);      // #39FF9C

        // Sharp liquid flame edge thresholds
        float edge = smoothstep(-0.045, 0.045, flameDist);
        float glowEdge = smoothstep(-0.22, 0.08, flameDist);
        float highlightRim = smoothstep(-0.02, 0.02, flameDist) * (1.0 - smoothstep(0.02, 0.065, flameDist));

        // Deep internal shading
        float internalDepth = clamp((flameDist + 0.35) / 0.7, 0.0, 1.0);
        vec3 flameCol = mix(colDarkGreen, colDeepEmerald, internalDepth);
        flameCol = mix(flameCol, colNeonGreen, pow(internalDepth, 2.8) * 0.9);

        // Final color composition with dramatic cinematic contrast
        vec3 finalCol = mix(colBg, flameCol, glowEdge);
        finalCol += colHighlight * highlightRim * 2.0;
        finalCol += colNeonGreen * (1.0 - edge) * pow(f, 3.2) * 0.45;

        // Vignette around edges to focus center emblem
        float vignette = 1.0 - length(uv - 0.5) * 0.65;
        finalCol *= clamp(vignette, 0.25, 1.0);

        gl_FragColor = vec4(finalCol, 1.0);
      }
    `;
        // Helper: Compile Shader
        const compileShader = (type, source)=>{
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Shader error:", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };
        const vertShader = compileShader(gl.VERTEX_SHADER, vsSource);
        const fragShader = compileShader(gl.FRAGMENT_SHADER, fsSource);
        if (!vertShader || !fragShader) return;
        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program link error:", gl.getProgramInfoLog(program));
            return;
        }
        gl.useProgram(program);
        // Quad geometry covering screen
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1,
            1
        ]), gl.STATIC_DRAW);
        const aPosition = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        // Uniform locations
        const uResolution = gl.getUniformLocation(program, "u_resolution");
        const uTime = gl.getUniformLocation(program, "u_time");
        const uScroll = gl.getUniformLocation(program, "u_scroll");
        // Render loop
        const render = (now)=>{
            const elapsed = (now - startTime) * 0.001;
            gl.useProgram(program);
            gl.uniform2f(uResolution, canvas.width, canvas.height);
            gl.uniform1f(uTime, reducedMotion ? 0 : elapsed);
            gl.uniform1f(uScroll, smoothScroll.get());
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            animationFrameId = requestAnimationFrame(render);
        };
        animationFrameId = requestAnimationFrame(render);
        return ()=>{
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            gl.deleteProgram(program);
            gl.deleteShader(vertShader);
            gl.deleteShader(fragShader);
        };
    }, [
        smoothScroll,
        reducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full overflow-hidden bg-[#030704] select-none ${className}`,
        style: {
            boxShadow: "inset 0 0 120px rgba(3, 7, 4, 0.95)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full pointer-events-none z-0",
                style: {
                    filter: "contrast(115%) brightness(105%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-10 overflow-hidden",
                children: [
                    ...Array(14)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full bg-[#00FF85] opacity-60 filter blur-[1px]",
                        style: {
                            width: `${i % 3 + 2}px`,
                            height: `${i % 3 + 2}px`,
                            left: `${(i * 7.5 + 4) % 96}%`,
                            bottom: "-5%",
                            boxShadow: "0 0 8px #00FF85",
                            animation: `particleFlow ${7 + i % 5 * 2}s linear infinite`,
                            animationDelay: `-${i * 1.3 % 8}s`
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            showEmblem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none z-20",
                style: {
                    scale: emblemScale,
                    rotate: emblemRotate,
                    y: emblemY
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-[500px] sm:w-[750px] h-[350px] sm:h-[500px] rounded-full blur-[70px] pointer-events-none",
                        style: {
                            opacity: emblemGlow,
                            background: "radial-gradient(ellipse at center, rgba(0, 255, 133, 0.32) 0%, rgba(0, 143, 76, 0.15) 45%, transparent 75%)",
                            mixBlendMode: "screen"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[340px] sm:w-[560px] md:w-[720px] lg:w-[860px] h-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-full h-auto filter drop-shadow-[0_0_22px_rgba(0,255,133,0.65)] drop-shadow-[0_0_55px_rgba(0,255,133,0.3)]",
                            viewBox: "0 0 1000 600",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "emblemNeonGrad",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#39FF9C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "35%",
                                                    stopColor: "#00FF85"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "70%",
                                                    stopColor: "#008F4C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#063D20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "emblemGlowFilter",
                                            x: "-30%",
                                            y: "-30%",
                                            width: "160%",
                                            height: "160%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: "3.5",
                                                    result: "blur1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: "12",
                                                    result: "blur2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                            in: "blur2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                            in: "blur1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                            in: "SourceGraphic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "leftWing",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 500 300 C 470 200, 390 100, 260 50 C 310 110, 360 210, 380 290 C 330 240, 240 180, 130 150 C 190 220, 260 280, 330 330 C 260 320, 170 320, 80 340 C 160 380, 250 395, 330 400 C 240 430, 140 470, 70 540 C 160 510, 260 470, 340 440 C 270 480, 190 530, 120 590 C 220 560, 330 500, 410 440 C 450 400, 480 350, 500 300 Z",
                                            fill: "#063D20",
                                            stroke: "#00FF85",
                                            strokeWidth: "2.5",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 440 240 C 390 150, 320 80, 220 40 C 280 110, 330 190, 360 270 Z",
                                            fill: "#008F4C",
                                            stroke: "#39FF9C",
                                            strokeWidth: "1.5",
                                            opacity: "0.9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 380 330 C 300 280, 220 230, 130 200 C 190 260, 260 310, 330 350 Z",
                                            fill: "#00FF85",
                                            opacity: "0.8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 420 440 C 360 480, 280 520, 180 560 C 270 530, 350 480, 400 440 Z",
                                            fill: "#00FF85",
                                            stroke: "#39FF9C",
                                            strokeWidth: "1.2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 460 290 Q 425 290 415 310 Q 440 320 460 305 Z",
                                            fill: "#39FF9C",
                                            filter: "url(#emblemGlowFilter)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                    href: "#leftWing",
                                    transform: "translate(1000, 0) scale(-1, 1)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "centerSpine",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 500 60 L 512 280 L 500 540 L 488 280 Z",
                                            fill: "#39FF9C",
                                            stroke: "#00FF85",
                                            strokeWidth: "2",
                                            filter: "url(#emblemGlowFilter)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "500",
                                            cy: "300",
                                            r: "7",
                                            fill: "#FFFFFF",
                                            filter: "url(#emblemGlowFilter)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 500 260 L 525 300 L 500 340 L 475 300 Z",
                                            fill: "#063D20",
                                            stroke: "#39FF9C",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-30 flex flex-col justify-between p-6 sm:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-[#00FF85]/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "03 // KINETIC MATRIX"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "EMERALD CORE // 60 FPS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-[#00FF85]/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "FLUID NOISE // DOMAIN WARPED"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "LATENCY // <16MS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/CinematicGreenBackground.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/animations/ScrollReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal,
    "StaggerContainer",
    ()=>StaggerContainer,
    "StaggerItem",
    ()=>StaggerItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function ScrollReveal({ children, className = "", delay = 0, duration = 0.6, direction = "up", distance = 24, scale = 1, staggerChildren = 0 }) {
    const shouldReduceMotion = false;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const getInitialPosition = ()=>{
        switch(direction){
            case "up":
                return {
                    y: distance,
                    x: 0
                };
            case "down":
                return {
                    y: -distance,
                    x: 0
                };
            case "left":
                return {
                    x: distance,
                    y: 0
                };
            case "right":
                return {
                    x: -distance,
                    y: 0
                };
            case "none":
            default:
                return {
                    x: 0,
                    y: 0
                };
        }
    };
    const initial = {
        opacity: 0,
        ...getInitialPosition(),
        scale: scale !== 1 ? scale : 1
    };
    const animate = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: initial,
        whileInView: animate,
        viewport: {
            once: true,
            margin: "-60px"
        },
        transition: {
            duration,
            delay,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            staggerChildren: staggerChildren > 0 ? staggerChildren : undefined
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/animations/ScrollReveal.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
function StaggerContainer({ children, className = "", staggerDelay = 0.08, delay = 0 }) {
    const shouldReduceMotion = false;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            margin: "-60px"
        },
        variants: {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    delayChildren: delay,
                    staggerChildren: staggerDelay
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/animations/ScrollReveal.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
function StaggerItem({ children, className = "" }) {
    const shouldReduceMotion = false;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.55,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/animations/ScrollReveal.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_animations_0v7afdvubl1v1._.js.map