(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/analytics/AnalyticsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsSection",
    ()=>AnalyticsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnalyticsSection() {
    _s();
    const [metricCount1, setMetricCount1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [metricCount2, setMetricCount2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [metricCount3, setMetricCount3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AnalyticsSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["AnalyticsSection.useEffect"], {
                threshold: 0.15
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "AnalyticsSection.useEffect": ()=>observer.disconnect()
            })["AnalyticsSection.useEffect"];
        }
    }["AnalyticsSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsSection.useEffect": ()=>{
            if (!isVisible) return;
            // Animated Counter 1: 57,907
            let start1 = 0;
            const end1 = 57907;
            const duration1 = 2000;
            const stepTime1 = 20;
            const increment1 = end1 / (duration1 / stepTime1);
            const timer1 = setInterval({
                "AnalyticsSection.useEffect.timer1": ()=>{
                    start1 += increment1;
                    if (start1 >= end1) {
                        setMetricCount1(end1);
                        clearInterval(timer1);
                    } else {
                        setMetricCount1(Math.floor(start1));
                    }
                }
            }["AnalyticsSection.useEffect.timer1"], stepTime1);
            // Animated Counter 2: 10
            let start2 = 0;
            const end2 = 10;
            const timer2 = setInterval({
                "AnalyticsSection.useEffect.timer2": ()=>{
                    start2 += 1;
                    if (start2 >= end2) {
                        setMetricCount2(end2);
                        clearInterval(timer2);
                    } else {
                        setMetricCount2(start2);
                    }
                }
            }["AnalyticsSection.useEffect.timer2"], 150);
            // Animated Counter 3: 78%
            let start3 = 0;
            const end3 = 78;
            const timer3 = setInterval({
                "AnalyticsSection.useEffect.timer3": ()=>{
                    start3 += 2;
                    if (start3 >= end3) {
                        setMetricCount3(end3);
                        clearInterval(timer3);
                    } else {
                        setMetricCount3(start3);
                    }
                }
            }["AnalyticsSection.useEffect.timer3"], 40);
            return ({
                "AnalyticsSection.useEffect": ()=>{
                    clearInterval(timer1);
                    clearInterval(timer2);
                    clearInterval(timer3);
                }
            })["AnalyticsSection.useEffect"];
        }
    }["AnalyticsSection.useEffect"], [
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6FF36]/40 to-transparent shadow-[0_0_20px_#C6FF36]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse,rgba(198,255,54,0.06),transparent_70%)] blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        className: "max-w-3xl mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono text-[#C6FF36] mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "PERFORMANCE & SCALE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4",
                                children: [
                                    "Proven at enterprise",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-serif-italic font-normal text-[#C6FF36]",
                                        children: "velocity."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed",
                                children: "High throughput without the infrastructure headaches. Relay executes tens of thousands of complex workflows with sub-second guarantees."
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16",
                        staggerDelay: 0.1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-futuristic-interactive group relative rounded-3xl bg-[#10110E] border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between min-h-[300px] cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "p-2.5 rounded-xl bg-[#161814] border border-white/10 text-[#C6FF36] group-hover:border-[#C6FF36]/40 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 text-[11px] font-mono text-[#C6FF36] px-2.5 py-0.5 rounded-full bg-[#C6FF36]/10 border border-[#C6FF36]/30 shadow-[0_0_8px_rgba(198,255,54,0.15)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-[#C6FF36] animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Live Velocity"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight mb-3",
                                                    children: metricCount1.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base font-semibold text-neutral-200",
                                                    children: "Runs on an average weekday."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-neutral-400 font-mono mt-1",
                                                    children: "Measured across production enterprise accounts in Q4."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-6 border-t border-white/8 mt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-full h-10 overflow-visible",
                                                viewBox: "0 0 200 40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M 0 35 Q 25 30, 50 25 T 100 15 T 150 18 T 200 6",
                                                        fill: "none",
                                                        stroke: "#C6FF36",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        className: "drop-shadow-[0_0_6px_rgba(198,255,54,0.4)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "200",
                                                        cy: "6",
                                                        r: "3.5",
                                                        fill: "#C6FF36",
                                                        className: "animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "200",
                                                        cy: "6",
                                                        r: "2.5",
                                                        fill: "#FFFFFF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-futuristic-interactive group relative rounded-3xl bg-[#10110E] border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between min-h-[300px] cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "p-2.5 rounded-xl bg-[#161814] border border-white/10 text-[#C6FF36] group-hover:border-[#C6FF36]/40 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-mono text-neutral-400",
                                                            children: "Time Recouped"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight mb-3",
                                                    children: metricCount2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base font-semibold text-neutral-200",
                                                    children: "Hours a week given back per person."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-neutral-400 font-mono mt-1",
                                                    children: "Zero manual copy-pasting between CRMs and spreadsheets."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-6 border-t border-white/8 mt-6 flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[11px] font-mono text-neutral-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Weekly Saved Efficiency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#C6FF36]",
                                                            children: "10h / 40h (25%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-1.5 rounded-full bg-white/10 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-[#C6FF36] rounded-full transition-all duration-1000 shadow-[0_0_12px_#C6FF36]",
                                                        style: {
                                                            width: isVisible ? "65%" : "0%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-futuristic-interactive group relative rounded-3xl bg-[#10110E] border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between min-h-[300px] cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "p-2.5 rounded-xl bg-[#161814] border border-white/10 text-[#C6FF36] group-hover:border-[#C6FF36]/40 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-mono text-neutral-400",
                                                            children: "First-Pass Accuracy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl sm:text-5xl lg:text-6xl font-black text-[#C6FF36] font-mono tracking-tight mb-3 drop-shadow-[0_0_15px_rgba(198,255,54,0.3)]",
                                                    children: [
                                                        metricCount3,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base font-semibold text-neutral-200",
                                                    children: "Of runs finish on the first attempt."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-neutral-400 font-mono mt-1",
                                                    children: "Automated dead-letter rollback catches remaining anomalies."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-6 border-t border-white/8 mt-6 flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[11px] font-mono text-neutral-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Success Rate (Global)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#C6FF36]",
                                                            children: "99.98% SLA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-1.5 rounded-full bg-white/10 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-gradient-to-r from-emerald-500 to-[#C6FF36] rounded-full transition-all duration-1000 shadow-[0_0_12px_#C6FF36]",
                                                        style: {
                                                            width: isVisible ? "78%" : "0%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        staggerDelay: 0.12,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-futuristic-interactive p-6 rounded-2xl bg-[#10110E]/80 border border-white/8 backdrop-blur-md flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#C6FF36] font-serif text-3xl leading-none select-none",
                                            children: "“"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-neutral-300 leading-relaxed italic",
                                                    children: "Relay replaced 3 custom microservices we spent months maintaining. The human-in-the-loop Slack integration alone cut our billing exception response time by 90%."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex items-center justify-between text-xs font-mono",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-white",
                                                            children: "David K., Head of Infra at Ramp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#C6FF36]",
                                                            children: "4,200 runs/day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-futuristic-interactive p-6 rounded-2xl bg-[#10110E]/80 border border-white/8 backdrop-blur-md flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#C6FF36] font-serif text-3xl leading-none select-none",
                                            children: "“"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-neutral-300 leading-relaxed italic",
                                                    children: "Before Relay, broken webhooks took down our invoice pipeline silently. Now we have automatic retries and deterministic replay for every critical transaction."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex items-center justify-between text-xs font-mono",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-white",
                                                            children: "Elena Rostova, VP Engineering at Retool"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#C6FF36]",
                                                            children: "12,800 runs/day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/analytics/AnalyticsSection.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(AnalyticsSection, "7OknSfYDhP/M/CKKYfkxiSVF9rE=");
_c = AnalyticsSection;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/EditorialFeatures.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorialFeatures",
    ()=>EditorialFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EditorialFeatures() {
    _s();
    const [selectedLogIndex, setSelectedLogIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedColumnIndex, setSelectedColumnIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8); // bar chart active column
    // Section B Activity Log Data
    const tuesdayEvents = [
        {
            time: "09:02 AM",
            title: "Enterprise Deal Closed in HubSpot ($48,000 ARR)",
            app: "HubSpot",
            action: "Provisioned AWS dedicated RDS cluster + invited 14 team members on Slack",
            status: "Success",
            duration: "410ms",
            actor: "Automatic"
        },
        {
            time: "11:24 AM",
            title: "Failed Dunning Attempt ($1,850)",
            app: "Stripe",
            action: "Triggered grace period rule; pinged Sarah Chen (AE) for approval",
            status: "Approved",
            duration: "2.4m",
            actor: "Sarah Chen (Slack)"
        },
        {
            time: "01:45 PM",
            title: "Security Secret Detected in Public Fork",
            app: "GitHub",
            action: "Rotated AWS IAM credentials & quarantined repo branch",
            status: "Critical Handled",
            duration: "85ms",
            actor: "Relay Guardian"
        },
        {
            time: "03:12 PM",
            title: "Customer Support Escalation Tier 3",
            app: "Zendesk",
            action: "Created Linear issue ENG-4091 + pinned thread in #incident-ops",
            status: "Success",
            duration: "135ms",
            actor: "Automatic"
        },
        {
            time: "05:48 PM",
            title: "Nightly Financial Reconciliation Matrix",
            app: "Postgres",
            action: "Validated 14,892 transactions against Stripe ledger with 0 discrepancy",
            status: "Completed",
            duration: "1.2s",
            actor: "Scheduled Cron"
        }
    ];
    // Section C 3D Bar Chart Data (Hourly run volume over 12 hours)
    const barChartData = [
        {
            hour: "08:00",
            count: 2420,
            height: 42,
            active: false,
            latency: "42ms"
        },
        {
            hour: "09:00",
            count: 4890,
            height: 75,
            active: false,
            latency: "51ms"
        },
        {
            hour: "10:00",
            count: 6120,
            height: 92,
            active: false,
            latency: "48ms"
        },
        {
            hour: "11:00",
            count: 5400,
            height: 82,
            active: false,
            latency: "44ms"
        },
        {
            hour: "12:00",
            count: 3950,
            height: 60,
            active: false,
            latency: "38ms"
        },
        {
            hour: "13:00",
            count: 5120,
            height: 78,
            active: false,
            latency: "46ms"
        },
        {
            hour: "14:00",
            count: 7200,
            height: 100,
            active: false,
            latency: "52ms"
        },
        {
            hour: "15:00",
            count: 6840,
            height: 95,
            active: false,
            latency: "49ms"
        },
        {
            hour: "16:00",
            count: 7940,
            height: 110,
            active: true,
            latency: "39ms"
        },
        {
            hour: "17:00",
            count: 5900,
            height: 86,
            active: false,
            latency: "41ms"
        },
        {
            hour: "18:00",
            count: 4120,
            height: 64,
            active: false,
            latency: "36ms"
        },
        {
            hour: "19:00",
            count: 2840,
            height: 48,
            active: false,
            latency: "34ms"
        }
    ];
    const activeBar = barChartData[selectedColumnIndex] || barChartData[8];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-transparent text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                className: "lg:col-span-5 flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono uppercase tracking-[0.3em] text-[#C6FF36] mb-3",
                                        children: "01 // VISUAL CANVAS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15]",
                                        children: [
                                            "One canvas,",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif-italic font-normal text-[#C6FF36]",
                                                children: "many branches."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed mb-8",
                                        children: "Build powerful workflows visually. Connect applications, automate decisions, and keep everything moving without wrestling with fragile glue code."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 text-sm text-neutral-300 font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 rounded bg-[#C6FF36]/15 border border-[#C6FF36]/40 flex items-center justify-center text-[#C6FF36] text-xs shadow-[0_0_8px_rgba(198,255,54,0.2)]",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Branch conditionally on any JSON payload key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 rounded bg-[#C6FF36]/15 border border-[#C6FF36]/40 flex items-center justify-center text-[#C6FF36] text-xs shadow-[0_0_8px_rgba(198,255,54,0.2)]",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Human-in-the-loop approvals via Slack or Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 rounded bg-[#C6FF36]/15 border border-[#C6FF36]/40 flex items-center justify-center text-[#C6FF36] text-xs shadow-[0_0_8px_rgba(198,255,54,0.2)]",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Automatic schema inference & payload validation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                delay: 0.2,
                                scale: 0.98,
                                className: "lg:col-span-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-futuristic-interactive relative rounded-3xl bg-[#10110E] border border-white/10 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(198,255,54,0.06),transparent_70%)] blur-3xl pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pb-5 border-b border-white/8 mb-6 text-xs font-mono",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2.5 h-2.5 rounded bg-[#C6FF36] shadow-[0_0_8px_#C6FF36]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: "Workflow: Enterprise SLA Escalation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#C6FF36]",
                                                    children: "Auto-save: 2s ago"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-xl bg-[#161814] border border-[#C6FF36]/40 flex items-center justify-between shadow-[0_0_15px_rgba(198,255,54,0.08)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-mono text-[#C6FF36]",
                                                                    children: "TRIGGER"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-semibold text-white",
                                                                    children: "Zendesk Ticket: SLA Breach Alert"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-mono text-neutral-400",
                                                            children: "P0 Urgent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-6 border-l-2 border-dashed border-[#C6FF36]/40 flex flex-col gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3.5 rounded-xl bg-[#161814] border border-white/10 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-mono text-amber-300",
                                                                            children: "RULE"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                            lineNumber: 154,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "text-xs font-medium text-white",
                                                                            children: 'Tier === "Strategic Enterprise"'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-mono text-emerald-400",
                                                                    children: "Match (True)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 rounded-lg bg-[#0a0b09] border border-[#C6FF36]/30 hover:border-[#C6FF36] transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-mono text-[#C6FF36]",
                                                                            children: "ACTION 1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-neutral-200 mt-1",
                                                                            children: "Page On-Call VP via PagerDuty"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                            lineNumber: 163,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 rounded-lg bg-[#0a0b09] border border-[#C6FF36]/30 hover:border-[#C6FF36] transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-mono text-[#C6FF36]",
                                                                            children: "ACTION 2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                            lineNumber: 166,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-neutral-200 mt-1",
                                                                            children: "Open War Room Slack Channel"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                            lineNumber: 167,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 right-1/4 w-[700px] h-[400px] bg-[radial-gradient(circle,rgba(198,255,54,0.05),transparent_70%)] blur-[140px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                className: "max-w-3xl mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono text-[#C6FF36] mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "02 // REAL-TIME DISPATCH"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.15]",
                                        children: [
                                            "A Tuesday,",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif-italic font-normal text-[#C6FF36]",
                                                children: "seen from Relay."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed",
                                        children: "Every handoff happens silently in the background. Your team only hears from Relay when a human exception genuinely requires judgment."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                delay: 0.15,
                                className: "card-futuristic-interactive rounded-3xl bg-[#10110E] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0a0b09]/80 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full bg-[#C6FF36]/15 border border-[#C6FF36]/30 text-[#C6FF36] text-xs font-mono font-semibold shadow-[0_0_10px_rgba(198,255,54,0.15)]",
                                                        children: "Tuesday, Nov 12 • 4,812 runs completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-500 font-mono text-xs hidden sm:inline",
                                                        children: "All automated pipelines nominal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-xs font-mono text-neutral-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 19
                                                            }, this),
                                                            "0 unhandled errors"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-600",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Avg latency: 42ms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-white/5",
                                        children: tuesdayEvents.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedLogIndex(idx),
                                                className: `p-5 sm:px-8 transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${selectedLogIndex === idx ? "bg-[#161814] border-l-2 border-[#C6FF36]" : "hover:bg-white/[0.03]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start sm:items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-mono text-[#C6FF36] w-20 shrink-0 font-semibold",
                                                                children: event.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-neutral-300 border border-white/10",
                                                                children: event.app
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-sm font-semibold text-white",
                                                                        children: event.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-neutral-400 mt-0.5 font-mono",
                                                                        children: event.action
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 self-end md:self-auto text-xs font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-neutral-500",
                                                                children: event.actor
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px]",
                                                                children: [
                                                                    event.status,
                                                                    " (",
                                                                    event.duration,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, event.time, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/3 -translate-x-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse,rgba(198,255,54,0.07),transparent_70%)] blur-[100px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                className: "max-w-3xl mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono uppercase tracking-[0.3em] text-[#C6FF36] mb-3 block",
                                        children: "03 // REPLAY & COMPLIANCE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.15]",
                                        children: [
                                            "Every run is",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif-italic font-normal text-[#C6FF36]",
                                                children: "on the record."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed",
                                        children: "Inputs, outputs and timings for 90 days. Replay any run before you trust it with money."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                delay: 0.15,
                                className: "card-futuristic-interactive rounded-3xl bg-[#10110E] border border-white/10 p-6 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.85)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between pb-8 border-b border-white/8 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono text-neutral-400 uppercase tracking-wider",
                                                        children: "HOURLY RUN DISPATCH AUDIT (UTC)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-3 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl sm:text-3xl font-bold text-white font-mono",
                                                                children: [
                                                                    activeBar.count.toLocaleString(),
                                                                    " runs"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-mono text-[#C6FF36] flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#C6FF36] animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    "Latency: ",
                                                                    activeBar.latency
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300",
                                                        children: "Time Window: 12 Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 rounded-xl bg-[#C6FF36]/15 border border-[#C6FF36]/30 text-xs font-mono text-[#C6FF36] font-semibold",
                                                        children: "Retention: 90 Days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 313,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-12 pb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 sm:px-6",
                                            children: barChartData.map((bar, idx)=>{
                                                const isSelected = selectedColumnIndex === idx;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setSelectedColumnIndex(idx),
                                                    className: "flex-1 flex flex-col items-center gap-3 cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-mono transition-opacity duration-200 ${isSelected ? "opacity-100 text-[#C6FF36] font-semibold" : "opacity-0 group-hover:opacity-100 text-neutral-400"}`,
                                                            children: bar.count
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full max-w-[40px] flex items-end justify-center h-48 relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: `${bar.height}%`
                                                                },
                                                                className: `w-full rounded-t-lg transition-all duration-300 relative ${isSelected ? "bg-gradient-to-t from-[#C6FF36]/40 to-[#C6FF36] shadow-[0_0_25px_rgba(198,255,54,0.5)] scale-y-105" : "bg-[#1f2319] hover:bg-[#C6FF36]/40 border-t border-white/20"}`,
                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute -top-1 left-0 right-0 h-1 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[11px] font-mono transition-colors ${isSelected ? "text-[#C6FF36] font-bold" : "text-neutral-500 group-hover:text-neutral-300"}`,
                                                            children: bar.hour
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, bar.hour, true, {
                                                    fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0a0b09] p-4 rounded-2xl border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-xs font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-2 rounded-lg bg-white/5 text-[#C6FF36]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "font-semibold text-white",
                                                                children: "Instant Deterministic Replay Engine"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-neutral-400",
                                                                children: "Step through any historical execution with identical incoming payloads"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 375,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-secondary-glow px-4 py-2 rounded-xl bg-[#161814] hover:bg-[#1a2014] border border-[#C6FF36]/30 text-xs font-mono text-[#C6FF36] transition-all cursor-pointer whitespace-nowrap",
                                                children: [
                                                    "Inspect Payload ",
                                                    activeBar.hour,
                                                    ":00 UTC →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/EditorialFeatures.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/EditorialFeatures.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(EditorialFeatures, "klsDics6BPkXpC8TQl9IgtUjQ8I=");
_c = EditorialFeatures;
var _c;
__turbopack_context__.k.register(_c, "EditorialFeatures");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/green-hero/GreenFlameCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GreenFlameCanvas",
    ()=>GreenFlameCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simplexNoise.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$green$2d$hero$2f$flameContourData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/green-hero/flameContourData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GreenFlameCanvas({ className = "", interactive = true }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000,
        targetX: -1000,
        targetY: -1000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GreenFlameCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d", {
                alpha: false
            });
            if (!ctx) return;
            let animId;
            let width = 0;
            let height = 0;
            let dpr = 1;
            const resize = {
                "GreenFlameCanvas.useEffect.resize": ()=>{
                    dpr = Math.min(window.devicePixelRatio || 1, 2);
                    width = canvas.parentElement?.clientWidth || window.innerWidth;
                    height = canvas.parentElement?.clientHeight || window.innerHeight;
                    canvas.width = Math.floor(width * dpr);
                    canvas.height = Math.floor(height * dpr);
                    canvas.style.width = `${width}px`;
                    canvas.style.height = `${height}px`;
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.scale(dpr, dpr);
                }
            }["GreenFlameCanvas.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            // Mouse tracking for subtle interactive fluid displacement
            const handleMouseMove = {
                "GreenFlameCanvas.useEffect.handleMouseMove": (e)=>{
                    if (!interactive) return;
                    const rect = canvas.getBoundingClientRect();
                    mouseRef.current.targetX = e.clientX - rect.left;
                    mouseRef.current.targetY = e.clientY - rect.top;
                }
            }["GreenFlameCanvas.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "GreenFlameCanvas.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current.targetX = -1000;
                    mouseRef.current.targetY = -1000;
                }
            }["GreenFlameCanvas.useEffect.handleMouseLeave"];
            window.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
            window.addEventListener("mouseleave", handleMouseLeave);
            // Liquid plasma droplets that occasionally stretch, detach, and drift downward
            const dropletCount = 14;
            const droplets = Array.from({
                length: dropletCount
            }, {
                "GreenFlameCanvas.useEffect.droplets": ()=>({
                        x: Math.random() * (width || 1200),
                        y: Math.random() * ((height || 800) * 0.45),
                        vy: 0.55 + Math.random() * 0.95,
                        vx: -(0.15 + Math.random() * 0.35),
                        radius: 1.2 + Math.random() * 1.8,
                        alpha: Math.random() * 0.75 + 0.25,
                        life: Math.random() * 100,
                        maxLife: 75 + Math.random() * 70,
                        seed: Math.random() * 50
                    })
            }["GreenFlameCanvas.useEffect.droplets"]);
            let lastTime = performance.now();
            let time = 0;
            // Horizontal scroll accumulators for the 3 parallax layers (px)
            let scroll0 = 0;
            let scroll1 = 0;
            let scroll2 = 0;
            // ═════════════════════════════════════════════════════════════════════════
            // RENDER LOOP (60 FPS COMPOSITING)
            // ═════════════════════════════════════════════════════════════════════════
            const render = {
                "GreenFlameCanvas.useEffect.render": (now)=>{
                    const dt = Math.min((now - lastTime) / 1000, 0.1);
                    lastTime = now;
                    time += dt;
                    // Mouse smoothing
                    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
                    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
                    const mX = mouseRef.current.x;
                    const mY = mouseRef.current.y;
                    // ── 1. PURE BLACK VIEWPORT BACKGROUND (#000000) ──
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(0, 0, width, height);
                    // ── 2. SUBTLE CEILING NEON-EMERALD ATMOSPHERE GLOW ──
                    // Soft radial glow concentrated at the top ceiling, vanishing into pure black
                    const topRadialGlow = ctx.createRadialGradient(width * 0.5 + Math.sin(time * 0.35) * 45, 0, 15, width * 0.5, 0, height * 0.5);
                    topRadialGlow.addColorStop(0, "rgba(0, 255, 65, 0.14)");
                    topRadialGlow.addColorStop(0.35, "rgba(0, 59, 32, 0.08)");
                    topRadialGlow.addColorStop(0.7, "rgba(0, 26, 13, 0.03)");
                    topRadialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
                    ctx.fillStyle = topRadialGlow;
                    ctx.fillRect(0, 0, width, height * 0.55);
                    // Proportional tile width: 2 to 3 hand claw clusters visible across screen
                    const tileWidth = Math.max(880, Math.min(width * 0.82, 1350));
                    // Advance parallax horizontal continuous scrolling (right to left)
                    const speed0 = 18; // px/sec (shadows)
                    const speed1 = 32; // px/sec (secondary emerald)
                    const speed2 = 46; // px/sec (primary foreground neon)
                    scroll0 = (scroll0 + dt * speed0) % tileWidth;
                    scroll1 = (scroll1 + dt * speed1) % tileWidth;
                    scroll2 = (scroll2 + dt * speed2) % tileWidth;
                    // Column step interval across viewport width (every 4-5px for silky 60 FPS)
                    const step = Math.max(4, Math.floor(width / 260));
                    // Helper: Compute flame height y(x) for layer
                    const getLayerY = {
                        "GreenFlameCanvas.useEffect.render.getLayerY": (x, layerIndex, scrollOffset, maxReach, baseOffsetU)=>{
                            // Horizontal coordinate in seamless looping tile with fluid wave undulation
                            const rawU = (x + scrollOffset) / tileWidth + baseOffsetU;
                            // Continuous horizontal undulation
                            const waveU = rawU + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplex2D"])(x * 0.0022, time * 0.45 + layerIndex) * 0.032;
                            // Sample base authentic hand claw profile
                            const baseReach = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$green$2d$hero$2f$flameContourData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleHandContour"])(waveU);
                            // Fluid morphing & noise deformation
                            // 1. Slow downward stretching and upward retracting movements
                            const stretch = Math.sin(time * 1.15 + waveU * Math.PI * 5 + layerIndex * 1.7) * 0.085;
                            // 2. Simplex noise displacement per claw finger
                            const noiseReach = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplex2D"])(waveU * 5.2 + layerIndex * 2.1, time * 0.38) * 0.12;
                            // 3. Fluid liquid ripple along boundary
                            const ripple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplex2D"])(x * 0.018 + layerIndex * 30.0, time * 1.45) * 3.5;
                            // 4. Accentuate sharp dripping claw tips
                            const isTip = Math.pow(Math.max(0, baseReach - 0.45) / 0.55, 1.6);
                            const dripPull = Math.sin(time * 0.8 + waveU * 10.0) * 0.075 * isTip;
                            // Combine reach fraction
                            const reach = Math.max(0.1, baseReach * (1.0 + stretch) + noiseReach + dripPull);
                            let y = reach * maxReach + ripple;
                            // Interactive mouse influence: cursor subtly pulls claw tips downward
                            if (mX > 0 && mY > 0 && mY < height * 0.6) {
                                const dist = Math.abs(x - mX);
                                if (dist < 220) {
                                    const pullFactor = (1.0 - dist / 220) * 32.0;
                                    y += pullFactor;
                                }
                            }
                            // Clamp to preserve large pure black negative space in lower viewport
                            return Math.min(y, height * 0.56);
                        }
                    }["GreenFlameCanvas.useEffect.render.getLayerY"];
                    // ── 3. LAYER 0: DEEP SHADOW FLAMES (#001A0D -> #003B20) ──
                    // Dark forest green background silhouettes creating depth
                    ctx.save();
                    const gradL0 = ctx.createLinearGradient(0, 0, 0, height * 0.38);
                    gradL0.addColorStop(0, "#001008");
                    gradL0.addColorStop(0.5, "#001A0D");
                    gradL0.addColorStop(1, "#00321A");
                    ctx.fillStyle = gradL0;
                    ctx.globalAlpha = 0.65;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    const maxReach0 = height * 0.33;
                    for(let x = 0; x <= width + step; x += step){
                        const curX = Math.min(x, width);
                        const curY = getLayerY(curX, 0, scroll0, maxReach0, 0.18);
                        ctx.lineTo(curX, curY);
                    }
                    ctx.lineTo(width, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                    // ── 4. LAYER 1: SECONDARY EMERALD FLAMES (#003B20 -> #007A33) ──
                    // Deep emerald mid-ground with fluid stretching fingers
                    ctx.save();
                    const gradL1 = ctx.createLinearGradient(0, 0, 0, height * 0.44);
                    gradL1.addColorStop(0, "#001A0D");
                    gradL1.addColorStop(0.35, "#003B20");
                    gradL1.addColorStop(0.75, "#00662B");
                    gradL1.addColorStop(1, "#00993D");
                    ctx.fillStyle = gradL1;
                    ctx.globalAlpha = 0.88;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    const maxReach1 = height * 0.39;
                    for(let x = 0; x <= width + step; x += step){
                        const curX = Math.min(x, width);
                        const curY = getLayerY(curX, 1, scroll1, maxReach1, 0.52);
                        ctx.lineTo(curX, curY);
                    }
                    ctx.lineTo(width, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                    // ── 5. LAYER 2: PRIMARY FOREGROUND NEON CLAW FLAMES (#003B20 -> #00FF41) ──
                    // Vivid Neon Green with radiant electric green (#39FF14) rim highlight
                    ctx.save();
                    const gradL2 = ctx.createLinearGradient(0, 0, 0, height * 0.48);
                    gradL2.addColorStop(0, "#000B05");
                    gradL2.addColorStop(0.22, "#001A0D");
                    gradL2.addColorStop(0.55, "#003B20");
                    gradL2.addColorStop(0.82, "#00B336");
                    gradL2.addColorStop(1, "#00FF41");
                    ctx.fillStyle = gradL2;
                    // Radiant electric highlight glow along the claw edges
                    ctx.shadowColor = "#39FF14";
                    ctx.shadowBlur = 18;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    const maxReach2 = height * 0.45;
                    for(let x = 0; x <= width + step; x += step){
                        const curX = Math.min(x, width);
                        const curY = getLayerY(curX, 2, scroll2, maxReach2, 0.0);
                        ctx.lineTo(curX, curY);
                    }
                    ctx.lineTo(width, 0);
                    ctx.closePath();
                    ctx.fill();
                    // Crisp electric green contour rim along claw tips
                    ctx.strokeStyle = "rgba(57, 255, 20, 0.9)";
                    ctx.lineWidth = 1.4;
                    ctx.stroke();
                    ctx.restore();
                    // ── 6. DETACHED NEON LIQUID PLASMA DROPLETS (FALLING & DISSOLVING) ──
                    ctx.save();
                    for(let i = 0; i < droplets.length; i++){
                        const d = droplets[i];
                        d.y += d.vy;
                        d.x += d.vx + Math.sin(time * 1.5 + d.seed) * 0.3;
                        d.life++;
                        if (d.life > d.maxLife || d.y > height * 0.58 || d.x < 0) {
                            d.x = width * 0.05 + Math.random() * width * 0.9;
                            // Spawn near the tips of the claw flames
                            d.y = height * 0.22 + Math.random() * height * 0.16;
                            d.life = 0;
                            d.alpha = Math.random() * 0.75 + 0.25;
                        }
                        const alphaFade = d.alpha * (1 - d.life / d.maxLife);
                        ctx.beginPath();
                        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(57, 255, 20, ${alphaFade})`;
                        ctx.shadowColor = "#00FF41";
                        ctx.shadowBlur = 8;
                        ctx.fill();
                    }
                    ctx.restore();
                    // ── 7. SEAMLESS GRADIENT FADE TO PURE BLACK NEGATIVE SPACE ──
                    // Ensures the bottom 50% remains pure black void (#000000)
                    ctx.save();
                    const bottomFade = ctx.createLinearGradient(0, height * 0.46, 0, height * 0.62);
                    bottomFade.addColorStop(0, "rgba(0, 0, 0, 0)");
                    bottomFade.addColorStop(1, "rgba(0, 0, 0, 1)");
                    ctx.fillStyle = bottomFade;
                    ctx.fillRect(0, height * 0.46, width, height * 0.16);
                    ctx.restore();
                    animId = requestAnimationFrame(render);
                }
            }["GreenFlameCanvas.useEffect.render"];
            animId = requestAnimationFrame(render);
            return ({
                "GreenFlameCanvas.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["GreenFlameCanvas.useEffect"];
        }
    }["GreenFlameCanvas.useEffect"], [
        interactive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-full overflow-hidden bg-[#000000] select-none ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full pointer-events-none block z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/green-hero/GreenFlameCanvas.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-10 opacity-15",
                style: {
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.05) 2px, rgba(0, 255, 65, 0.05) 4px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/green-hero/GreenFlameCanvas.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/green-hero/GreenFlameCanvas.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/green-hero/GreenFlameCanvas.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(GreenFlameCanvas, "Qimi1+XRgPM/xwIviNOompZCtaA=");
_c = GreenFlameCanvas;
var _c;
__turbopack_context__.k.register(_c, "GreenFlameCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/green-hero/flameContourData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Exact seamless normalized reach contour of demonic flame claw hands,
 * extracted directly from the reference video frames (meermohsin.me) and seamlessly periodic.
 * Values: 0.0 (top ceiling) to 1.0 (deepest claw tip reach).
 */ __turbopack_context__.s([
    "SEAMLESS_HAND_CONTOUR",
    ()=>SEAMLESS_HAND_CONTOUR,
    "sampleHandContour",
    ()=>sampleHandContour
]);
const SEAMLESS_HAND_CONTOUR = [
    0.4641,
    0.4555,
    0.4507,
    0.4473,
    0.448,
    0.4534,
    0.4773,
    0.4727,
    0.4736,
    0.5062,
    0.4839,
    0.4892,
    0.4948,
    0.4986,
    0.5105,
    0.5337,
    0.6106,
    0.7156,
    0.7448,
    0.7543,
    0.7687,
    0.7894,
    0.8235,
    0.8729,
    0.9115,
    0.8004,
    0.703,
    0.9954,
    0.9754,
    0.9433,
    0.922,
    0.8945,
    0.889,
    0.9211,
    0.8971,
    0.8762,
    0.8557,
    0.8441,
    0.832,
    0.7851,
    0.5588,
    0.6139,
    0.6061,
    0.6102,
    0.6177,
    0.6345,
    0.6571,
    0.6763,
    0.6926,
    0.7082,
    0.7228,
    0.7361,
    0.753,
    0.7815,
    0.8194,
    0.7706,
    0.7487,
    0.7318,
    0.5097,
    0.4988,
    0.4919,
    0.4849,
    0.4803,
    0.4795,
    0.4756,
    0.4756,
    0.4733,
    0.4733,
    0.4733,
    0.4803,
    0.4826,
    0.4849,
    0.4896,
    0.4974,
    0.5021,
    0.5081,
    0.5174,
    0.4863,
    0.4859,
    0.4109,
    0.3096,
    0.3202,
    0.2847,
    0.2658,
    0.5022,
    0.5091,
    0.5174,
    0.5301,
    0.5406,
    0.5533,
    0.5695,
    0.5881,
    0.6171,
    0.4606,
    0.8272,
    0.4524,
    0.7923,
    0.7854,
    0.7656,
    0.5442,
    0.5744,
    0.5941,
    0.6199,
    0.6521,
    0.6813,
    0.7112,
    0.7229,
    0.7285,
    0.7414,
    0.7461,
    0.7517,
    0.7541,
    0.7504,
    0.7425,
    0.7355,
    0.7355,
    0.7355,
    0.7378,
    0.7401,
    0.7425,
    0.7425,
    0.7207,
    0.73,
    0.7431,
    0.7556,
    0.7687,
    0.7873,
    0.8043,
    0.8159,
    0.8252,
    0.8221,
    0.8151,
    0.8144,
    0.8097,
    0.8097,
    0.8074,
    0.8028,
    0.8028,
    0.7965,
    0.7889,
    0.7808,
    0.7593,
    0.4975,
    0.5829,
    0.6415,
    0.656,
    0.6659,
    0.6793,
    0.6891,
    0.6997,
    0.7095,
    0.7211,
    0.2947,
    0.2766,
    0.2673,
    0.2603,
    0.1584,
    0.1755,
    0.181,
    0.348,
    0.3322,
    0.3206,
    0.2235,
    0.2111,
    0.2088,
    0.2071,
    0.1952,
    0.1879,
    0.1833,
    0.1766,
    0.174,
    0.1717,
    0.1784,
    0.206,
    0.3585,
    0.3529,
    0.3413,
    0.3387,
    0.6405,
    0.3688,
    0.378,
    0.4511,
    0.4063,
    0.4014,
    0.6484,
    0.6613,
    0.6659,
    0.6659,
    0.6659,
    0.6613,
    0.6543,
    0.6473,
    0.5406,
    0.5313,
    0.5174,
    0.5127,
    0.5058,
    0.4988,
    0.4919,
    0.4896,
    0.4896,
    0.4897,
    0.4919,
    0.4988,
    0.5012,
    0.506,
    0.5176,
    0.5411,
    0.6197,
    0.719,
    0.7496,
    0.7613,
    0.7775,
    0.7987,
    0.8235,
    0.8805,
    0.9165,
    0.805,
    0.708,
    1,
    0.9784,
    0.9506,
    0.9227,
    0.8999,
    0.896,
    0.9273,
    0.9017,
    0.8827,
    0.8654,
    0.8515,
    0.8394,
    0.7902,
    0.6047,
    0.6213,
    0.6125,
    0.6154,
    0.6247,
    0.6443,
    0.6659,
    0.6804,
    0.703,
    0.7135,
    0.7297,
    0.7414,
    0.7616,
    0.7861,
    0.8293,
    0.7806,
    0.7534,
    0.7374,
    0.5174,
    0.5058,
    0.4988,
    0.4919,
    0.4896,
    0.4849,
    0.4826,
    0.4826,
    0.4826,
    0.4811,
    0.4834,
    0.4849,
    0.4881,
    0.4927,
    0.4988,
    0.5029,
    0.5104,
    0.5174,
    0.522,
    0.4933,
    0.4928,
    0.4192,
    0.3155,
    0.3278,
    0.296,
    0.2741,
    0.5068,
    0.5174,
    0.5254,
    0.537,
    0.5463,
    0.5613,
    0.5765,
    0.5962,
    0.6125,
    0.4664,
    0.8341,
    0.4594,
    0.8005,
    0.79,
    0.7773,
    0.5523,
    0.5766,
    0.6057,
    0.6266,
    0.6603,
    0.6905,
    0.7182,
    0.7262,
    0.7345,
    0.7461,
    0.7531,
    0.761,
    0.761,
    0.7573,
    0.749,
    0.7425,
    0.7434,
    0.7448,
    0.7448,
    0.7448,
    0.7471,
    0.7494,
    0.7285,
    0.7384,
    0.7486,
    0.7663,
    0.7765,
    0.795,
    0.812,
    0.8229,
    0.8306,
    0.8291,
    0.8244,
    0.819,
    0.8144,
    0.8144,
    0.8144,
    0.8097,
    0.8097,
    0.8058,
    0.7988,
    0.7872,
    0.7669,
    0.5029,
    0.6108,
    0.6485,
    0.6653,
    0.6769,
    0.6868,
    0.6978,
    0.7066,
    0.7164,
    0.7275,
    0.3987,
    0.316,
    0.271,
    0.2394,
    0.2558,
    0.2107,
    0.1837,
    0.3026,
    0.3531,
    0.3418,
    0.3345,
    0.3166,
    0.2389,
    0.2549,
    0.4142,
    0.411,
    0.397,
    0.3137,
    0.288,
    0.2831,
    0.2846,
    0.2771,
    0.2745,
    0.279,
    0.2822,
    0.2937,
    0.3095,
    0.3281,
    0.3557,
    0.3882,
    0.4512,
    0.4494,
    0.4516,
    0.5108,
    0.4622,
    0.4631,
    0.4664,
    0.4647,
    0.4642,
    0.4641
];
function sampleHandContour(u) {
    const wrapped = (u % 1 + 1) % 1;
    const len = SEAMLESS_HAND_CONTOUR.length;
    const pos = wrapped * (len - 1);
    const i0 = Math.floor(pos);
    const frac = pos - i0;
    const v0 = SEAMLESS_HAND_CONTOUR[i0];
    const v1 = SEAMLESS_HAND_CONTOUR[(i0 + 1) % len];
    // Smooth Hermite smoothstep
    const s = frac * frac * (3 - 2 * frac);
    return v0 + (v1 - v0) * s;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/integrations/IntegrationsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntegrationsSection",
    ()=>IntegrationsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function IntegrationsSection() {
    _s();
    const [hoveredApp, setHoveredApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const integrations = [
        {
            name: "Slack",
            tagline: "Bi-directional pings & approvals",
            latency: "12ms",
            connected: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
                }, void 0, false, {
                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        },
        {
            name: "Stripe",
            tagline: "Instant charge webhooks",
            latency: "8ms",
            connected: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"
                }, void 0, false, {
                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        },
        {
            name: "Postgres",
            tagline: "Direct SQL triggers & mutations",
            latency: "4ms",
            connected: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                }, void 0, false, {
                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        },
        {
            name: "HubSpot",
            tagline: "CRM contacts & deal stage sync",
            latency: "24ms",
            connected: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.89 8.28V5.7a2.22 2.22 0 1 0-1.88 0v2.58a7.07 7.07 0 0 0-3.32 1.74l-6.58-5.1a2.38 2.38 0 1 0-1.46 1.88l6.39 4.95a7.1 7.1 0 0 0-.25 1.87 7.12 7.12 0 1 0 7.1-7.62zm-10.82-5a.94.94 0 1 1-.94.94.94.94 0 0 1 .94-.94zm9.88 2.22a.94.94 0 1 1 .94.94.94.94 0 0 1-.94-.94zm-1 14.88a4.94 4.94 0 1 1 4.94-4.94 4.94 4.94 0 0 1-4.94 4.94z"
                }, void 0, false, {
                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        },
        {
            name: "Notion",
            tagline: "Database items & docs update",
            latency: "32ms",
            connected: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.875c-.466-.373-.886-.466-2.007-.373L3.106 2.574c-.373.047-.466.28-.326.42l1.679 1.214zm.84 3.919v13.636c0 .793.373 1.073 1.26 1.026l14.288-.84c.886-.046.98-.56.98-1.26V7.054c0-.7-.28-.98-.98-.933l-14.568.886c-.7.047-.98.373-.98 1.12zm13.168.326c.093.42.093.84-.28.887l-1.073.186v9.846c0 .7-.373.933-.933.98l-3.36.187c-.466.046-.7-.14-.933-.513l-4.153-6.486v5.88c.373.187.7.373.7.84 0 .047-.046.28-.233.28l-3.173.187c-.093 0-.187-.093-.187-.28 0-.467.28-.7.747-.84v-9.566c0-.466-.28-.606-.84-.7-.093 0-.093-.28 0-.28l3.407-.233c.513-.047.793.186 1.073.606l4.293 6.673V8.08c-.373-.186-.7-.373-.7-.793 0-.093.047-.28.187-.28l3.407-.233c.14 0 .186.093.233.28z"
                }, void 0, false, {
                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        },
        {
            name: "GitHub",
            tagline: "PR mergers, issues & deploy tags",
            latency: "15ms",
            connected: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                }, void 0, false, {
                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        },
        {
            name: "Linear",
            tagline: "Auto-triage & status transitions",
            latency: "11ms",
            connected: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.1 3.1c4.9-4.9 12.9-4.9 17.8 0 4.9 4.9 4.9 12.9 0 17.8-4.9 4.9-12.9 4.9-17.8 0-4.9-4.9-4.9-12.9 0-17.8zm1.4 1.4c-4.1 4.1-4.1 10.9 0 15 4.1 4.1 10.9 4.1 15 0 4.1-4.1 4.1-10.9 0-15-4.1-4.1-10.9-4.1-15 0zm6.5 4.5h2v6h-2zm-3 3h2v3h-2zm6-1h2v4h-2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }
    ];
    // Marquee duplicates for seamless infinite loop
    const marqueeList = [
        ...integrations,
        ...integrations
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "product",
        className: "relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C6FF36]/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[38%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C6FF36]/15 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[62%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C6FF36]/25 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[85%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C6FF36]/10 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse,rgba(198,255,54,0.06),transparent_70%)] blur-[90px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        className: "max-w-3xl mx-auto text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono text-[#C6FF36] mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "ECOSYSTEM // 240+ CONNECTORS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5",
                                children: [
                                    "One canvas,",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-serif-italic font-normal text-[#C6FF36]",
                                        children: "many branches."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed",
                                children: "Connect applications in seconds with native webhooks, sub-second sync, and automatic schema inference."
                            }, void 0, false, {
                                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-marquee-track flex gap-4",
                            children: marqueeList.map((app, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group inline-flex items-center gap-3.5 px-5 py-3 rounded-xl bg-[#10110E]/90 border border-white/10 hover:border-[#C6FF36]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,255,54,0.2)] hover:scale-105 cursor-pointer whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-[#161814] border border-white/10 flex items-center justify-center text-white group-hover:text-[#C6FF36] group-hover:border-[#C6FF36]/40 transition-colors",
                                            children: app.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs sm:text-sm font-semibold text-white group-hover:text-[#C6FF36] transition-colors",
                                                            children: app.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-[#C6FF36] opacity-75 group-hover:opacity-100 group-hover:shadow-[0_0_6px_#C6FF36]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono text-neutral-500 block",
                                                    children: [
                                                        app.latency,
                                                        " sync"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${app.name}-${index}`, true, {
                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                        className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4",
                        staggerDelay: 0.06,
                        children: integrations.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onMouseEnter: ()=>setHoveredApp(app.name),
                                    onMouseLeave: ()=>setHoveredApp(null),
                                    className: "card-futuristic-interactive group relative p-4 rounded-2xl bg-[#10110E]/80 border border-white/8 hover:border-[#C6FF36]/50 flex flex-col justify-between min-h-[140px] cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-xl bg-[#161814] border border-white/10 flex items-center justify-center text-white group-hover:text-[#C6FF36] group-hover:border-[#C6FF36]/40 transition-colors",
                                                    children: app.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-[#C6FF36] opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#C6FF36]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-white group-hover:text-[#C6FF36] transition-colors flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: app.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            className: "w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-neutral-400 font-mono mt-0.5 line-clamp-1",
                                                    children: app.tagline
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: app.latency
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#C6FF36] opacity-80",
                                                    children: "Synced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            }, app.name, false, {
                                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.2,
                        className: "mt-12 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#10110E] border border-white/10 text-xs text-neutral-300 font-mono hover:border-[#C6FF36]/30 transition-all hover:shadow-[0_0_15px_rgba(198,255,54,0.1)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#C6FF36]",
                                    children: "✦ Need a custom API?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Write custom TypeScript hooks or trigger via webhook in under 3 lines."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white hover:text-[#C6FF36] underline cursor-pointer ml-1",
                                    children: "View API Docs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/integrations/IntegrationsSection.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(IntegrationsSection, "+tJvLuWT0E7PmeYoLul6pQC0Mao=");
_c = IntegrationsSection;
var _c;
__turbopack_context__.k.register(_c, "IntegrationsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
"use client";
;
;
function Footer() {
    const productLinks = [
        {
            label: "Visual Canvas",
            href: "#workflow"
        },
        {
            label: "Integrations (240+)",
            href: "#product"
        },
        {
            label: "Human-in-the-Loop",
            href: "#workflow"
        },
        {
            label: "90-Day Execution Replay",
            href: "#product"
        },
        {
            label: "Security & SOC2",
            href: "#product"
        }
    ];
    const companyLinks = [
        {
            label: "About Us",
            href: "#"
        },
        {
            label: "Customers",
            href: "#customers"
        },
        {
            label: "Careers (We're hiring)",
            href: "#"
        },
        {
            label: "Changelog",
            href: "#"
        },
        {
            label: "Press Kit",
            href: "#"
        }
    ];
    const resourceLinks = [
        {
            label: "Documentation",
            href: "#"
        },
        {
            label: "API Reference",
            href: "#"
        },
        {
            label: "Webhook Simulator",
            href: "#"
        },
        {
            label: "Community Discord",
            href: "#"
        },
        {
            label: "Status Page",
            href: "#"
        }
    ];
    const legalLinks = [
        {
            label: "Privacy Policy",
            href: "#"
        },
        {
            label: "Terms of Service",
            href: "#"
        },
        {
            label: "Security Whitepaper",
            href: "#"
        },
        {
            label: "Subprocessors",
            href: "#"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-transparent pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-neutral-400 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6FF36]/50 to-transparent shadow-[0_0_20px_#C6FF36]"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse,rgba(198,255,54,0.05),transparent_70%)] blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/4 bottom-0 w-px h-64 bg-gradient-to-t from-[#C6FF36]/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-1/4 bottom-0 w-px h-64 bg-gradient-to-t from-[#C6FF36]/15 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                        className: "grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 mb-16",
                        staggerDelay: 0.08,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                className: "col-span-2 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5 mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg bg-[#161814] border border-[#C6FF36]/40 flex items-center justify-center shadow-[0_0_15px_rgba(198,255,54,0.2)]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12",
                                                                    stroke: "#C6FF36",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                                    lineNumber: 63,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9 16L12 12L15 16",
                                                                    stroke: "#C6FF36",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "2.5",
                                                                    fill: "#C6FF36"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-lg tracking-tight text-white flex items-center gap-1.5",
                                                        children: [
                                                            "Relay",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-[#C6FF36] shadow-[0_0_6px_#C6FF36]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-neutral-400 max-w-sm leading-relaxed mb-6 font-normal",
                                                children: "The handoffs run themselves. Relay connects the steps between your apps and only asks a person when it matters."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono text-neutral-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative flex h-2 w-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF36] opacity-75"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative inline-flex rounded-full h-2 w-2 bg-[#C6FF36]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "All systems operational • 99.98% uptime"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-8 text-neutral-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "p-2 rounded-lg bg-white/5 hover:text-[#C6FF36] hover:bg-white/10 transition-colors",
                                                "aria-label": "GitHub",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 fill-current",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "p-2 rounded-lg bg-white/5 hover:text-[#C6FF36] hover:bg-white/10 transition-colors",
                                                "aria-label": "Twitter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 fill-current",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "p-2 rounded-lg bg-white/5 hover:text-[#C6FF36] hover:bg-white/10 transition-colors",
                                                "aria-label": "LinkedIn",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 fill-current",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4",
                                        children: "Product"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 text-sm",
                                        children: productLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "hover:text-[#C6FF36] transition-colors",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.label, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4",
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 text-sm",
                                        children: companyLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "hover:text-[#C6FF36] transition-colors",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.label, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4",
                                        children: "Resources"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 text-sm",
                                        children: resourceLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "hover:text-[#C6FF36] transition-colors",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.label, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.2,
                        className: "pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Relay Technologies, Inc. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-6",
                                children: legalLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: "hover:text-neutral-300 transition-colors",
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/loader/CinematicLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicLoader",
    ()=>CinematicLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLoadingState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$LoaderParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loader/LoaderParticles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$HeroRibbonTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loader/HeroRibbonTransition.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Stage labels shown beneath the counter
const STAGE_LABELS = [
    {
        threshold: 0,
        label: "INITIALIZING ORCHESTRATION"
    },
    {
        threshold: 25,
        label: "CONNECTING 240+ APPS"
    },
    {
        threshold: 50,
        label: "CALIBRATING WORKFLOW CANVASES"
    },
    {
        threshold: 75,
        label: "SYNCHRONIZING REPLAY ENGINES"
    },
    {
        threshold: 95,
        label: "ALL SYSTEMS OPERATIONAL"
    }
];
function getStageLabel(progress) {
    let label = STAGE_LABELS[0].label;
    for (const stage of STAGE_LABELS){
        if (progress >= stage.threshold) label = stage.label;
    }
    return label;
}
function CinematicLoader() {
    _s();
    const { onLoadingComplete, onRevealComplete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingState"])();
    const [displayProgress, setDisplayProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isTransitionActive, setIsTransitionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overlayHidden, setOverlayHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasTriggeredTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CinematicLoader.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return window.innerWidth < 768;
        }
    }["CinematicLoader.useState"]);
    // ───────────────────────────────────────────────────────────────────────────
    // ON 100 REACHED: BEGIN THE 8-STAGE CINEMATIC TRANSITION
    // ───────────────────────────────────────────────────────────────────────────
    const startCinematicTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicLoader.useCallback[startCinematicTransition]": ()=>{
            if (hasTriggeredTransition.current) return;
            hasTriggeredTransition.current = true;
            setIsTransitionActive(true);
        }
    }["CinematicLoader.useCallback[startCinematicTransition]"], []);
    // ───────────────────────────────────────────────────────────────────────────
    // ON TRANSITION FINISH (AFTER 5.5s FRAME 8 FINAL REVEAL): UNLOCK HERO
    // ───────────────────────────────────────────────────────────────────────────
    const handleTransitionFinished = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicLoader.useCallback[handleTransitionFinished]": ()=>{
            setIsExiting(true);
            // Smooth final fade reveal into upcoming hero section
            setTimeout({
                "CinematicLoader.useCallback[handleTransitionFinished]": ()=>{
                    onLoadingComplete();
                    onRevealComplete();
                    setOverlayHidden(true);
                }
            }["CinematicLoader.useCallback[handleTransitionFinished]"], 450);
        }
    }["CinematicLoader.useCallback[handleTransitionFinished]"], [
        onLoadingComplete,
        onRevealComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicLoader.useEffect": ()=>{
            // Lock scrollbar during preloader and transition
            document.body.style.overflow = "hidden";
            const duration = 2400; // 2.4 seconds total counter duration (1 -> 100)
            const startTime = performance.now();
            let animationFrameId;
            const tick = {
                "CinematicLoader.useEffect.tick": (currentTime)=>{
                    const elapsed = currentTime - startTime;
                    const linearProgress = Math.min(1, elapsed / duration);
                    // Ease out cubic for a dramatic slow down toward 100
                    const easedProgress = 1 - Math.pow(1 - linearProgress, 2.8);
                    const val = Math.min(100, Math.max(1, Math.round(easedProgress * 99 + 1)));
                    setDisplayProgress(val);
                    if (linearProgress < 1) {
                        animationFrameId = requestAnimationFrame(tick);
                    } else {
                        setDisplayProgress(100);
                        // Start the 8-stage transition at 100
                        startCinematicTransition();
                    }
                }
            }["CinematicLoader.useEffect.tick"];
            animationFrameId = requestAnimationFrame(tick);
            return ({
                "CinematicLoader.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                    document.body.style.overflow = "";
                }
            })["CinematicLoader.useEffect"];
        }
    }["CinematicLoader.useEffect"], [
        startCinematicTransition
    ]);
    if (overlayHidden) return null;
    const formattedCounter = String(displayProgress).padStart(2, "0");
    const norm = displayProgress / 100;
    const currentStage = getStageLabel(displayProgress);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ease-out bg-[#050505] ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"}`,
        "aria-live": "polite",
        role: "progressbar",
        "aria-valuenow": displayProgress,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": "Loading Relay experience",
        children: [
            !isTransitionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$LoaderParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoaderParticles"], {
                progress: displayProgress,
                reducedMotion: false,
                isMobile: isMobile
            }, void 0, false, {
                fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            !isTransitionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out",
                style: {
                    width: "min(90vw, 750px)",
                    height: "min(90vw, 750px)",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(198,255,54,0.22) 0%, rgba(198,255,54,0.04) 50%, transparent 75%)",
                    opacity: Math.min(0.65, 0.2 + norm * 0.45),
                    transform: `translate(-50%, -50%) scale(${0.75 + norm * 0.55})`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this),
            !isTransitionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center select-none text-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative leading-none select-none font-serif-italic",
                        style: {
                            fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72", Georgia, serif',
                            fontStyle: "italic",
                            fontWeight: 400,
                            fontFeatureSettings: '"onum" 1, "pnum" 1',
                            fontSize: "clamp(180px, 28vw, 480px)",
                            color: "#C6FF36",
                            letterSpacing: "-0.02em",
                            textShadow: "0 0 50px rgba(198, 255, 54, 0.45), 0 0 100px rgba(198, 255, 54, 0.2)"
                        },
                        children: formattedCounter
                    }, void 0, false, {
                        fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 sm:mt-4 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tracking-[0.4em] uppercase font-mono font-medium",
                                style: {
                                    fontSize: "clamp(0.6rem, 1.1vw, 0.8rem)",
                                    color: "#C6FF36",
                                    letterSpacing: "0.35em"
                                },
                                children: "RELAY // AUTONOMOUS WORKFLOWS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 tracking-[0.3em] uppercase font-mono text-xs transition-all duration-200",
                                style: {
                                    color: "rgba(255, 255, 255, 0.45)",
                                    letterSpacing: "0.25em"
                                },
                                children: currentStage
                            }, void 0, false, {
                                fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this),
            !isTransitionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-px",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(198,255,54,0.35), transparent)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this),
            isTransitionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$HeroRibbonTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroRibbonTransition"], {
                onComplete: handleTransitionFinished
            }, void 0, false, {
                fileName: "[project]/src/components/loader/CinematicLoader.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/loader/CinematicLoader.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(CinematicLoader, "k077MNmySyTkhYXIEHa2wtCJsh0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingState"]
    ];
});
_c = CinematicLoader;
var _c;
__turbopack_context__.k.register(_c, "CinematicLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/loader/HeroRibbonTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroRibbonTransition",
    ()=>HeroRibbonTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroRibbonTransition({ onComplete, className = "" }) {
    _s();
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    onCompleteRef.current = onComplete;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "_");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroRibbonTransition.useEffect": ()=>{
            // 1.4s duration gives enough time for the cinematic lens flare and laser sweep to feel rich and satisfying
            const timer = setTimeout({
                "HeroRibbonTransition.useEffect.timer": ()=>{
                    onCompleteRef.current();
                }
            }["HeroRibbonTransition.useEffect.timer"], 1400);
            return ({
                "HeroRibbonTransition.useEffect": ()=>clearTimeout(timer)
            })["HeroRibbonTransition.useEffect"];
        }
    }["HeroRibbonTransition.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: "jsx-167b59b0528c9536" + " " + `fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "cinemaIris 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    willChange: "clip-path, opacity"
                },
                className: "jsx-167b59b0528c9536" + " " + "absolute inset-0 bg-[#050505]"
            }, void 0, false, {
                fileName: "[project]/src/components/loader/HeroRibbonTransition.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "radial-gradient(circle, rgba(198,255,54,0.45) 0%, rgba(238,255,96,0.2) 25%, rgba(0,255,65,0.08) 50%, transparent 75%)",
                    filter: "blur(60px)",
                    animation: "flarePulse 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    willChange: "transform, opacity"
                },
                className: "jsx-167b59b0528c9536" + " " + "absolute -top-32 -right-32 w-[900px] h-[900px] rounded-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/loader/HeroRibbonTransition.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "linear-gradient(90deg, transparent 0%, rgba(198,255,54,0.85) 40%, #FFFFFF 65%, rgba(0,255,65,0.9) 80%, transparent 100%)",
                    boxShadow: "0 0 25px rgba(198,255,54,0.9), 0 0 50px rgba(0,255,65,0.5), 0 0 100px rgba(198,255,54,0.3)",
                    transform: "rotate(-18deg) translateY(-50%)",
                    animation: "anamorphicStreak 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    willChange: "transform, opacity"
                },
                className: "jsx-167b59b0528c9536" + " " + "absolute top-[28%] -right-20 w-[140vw] h-[3px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/loader/HeroRibbonTransition.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "linear-gradient(90deg, transparent 0%, rgba(238,255,96,0.6) 35%, #FFFFFF 70%, transparent 100%)",
                    boxShadow: "0 0 15px rgba(198,255,54,0.8)",
                    transform: "rotate(-25deg) translateY(-50%)",
                    animation: "counterStreak 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    willChange: "transform, opacity"
                },
                className: "jsx-167b59b0528c9536" + " " + "absolute top-[45%] -right-10 w-[120vw] h-[1.5px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/loader/HeroRibbonTransition.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "167b59b0528c9536",
                children: "@keyframes cinemaIris{0%{clip-path:polygon(0 0,100% 0,100% 100%,0 100%);opacity:1}40%{clip-path:polygon(0 0,90% 0,50% 100%,0 100%);opacity:.98}75%{clip-path:polygon(0 0,35% 0,0 75%,0 100%);opacity:.75}to{clip-path:polygon(0 0,0 0,0 0,0 0);opacity:0}}@keyframes flarePulse{0%{opacity:0;transform:scale(.6)translate(80px,-80px)}35%{opacity:1;transform:scale(1.15)translate(0)}70%{opacity:.75;transform:scale(1.3)translate(-30px,30px)}to{opacity:0;transform:scale(1.5)translate(-60px,60px)}}@keyframes anamorphicStreak{0%{opacity:0;transform:rotate(-18deg)translateY(-50%)translate(35%)}30%{opacity:1}70%{opacity:.85;transform:rotate(-18deg)translateY(-50%)translate(-25%)}to{opacity:0;transform:rotate(-18deg)translateY(-50%)translate(-80%)}}@keyframes counterStreak{0%{opacity:0;transform:rotate(-25deg)translateY(-50%)translate(20%)}40%{opacity:.8}to{opacity:0;transform:rotate(-25deg)translateY(-50%)translate(-60%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/loader/HeroRibbonTransition.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(HeroRibbonTransition, "BDdiW6uniyKOu9O7asHwWTdc5Fc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = HeroRibbonTransition;
var _c;
__turbopack_context__.k.register(_c, "HeroRibbonTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/loader/LoaderParticles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoaderParticles",
    ()=>LoaderParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Deterministic PRNG
function pseudoRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
function LoaderParticles({ progress, reducedMotion, isMobile }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LoaderParticles.useCallback[draw]": (ctx, w, h, time)=>{
            ctx.clearRect(0, 0, w, h);
            const particles = particlesRef.current;
            const centerX = w / 2;
            const centerY = h / 2;
            const progressNorm = progress / 100;
            // Draw radial glow behind center (progress-driven)
            if (progressNorm > 0.05) {
                const glowAlpha = Math.min(0.22, progressNorm * 0.22);
                const glowRadius = Math.min(w, h) * 0.45 * (0.5 + progressNorm * 0.5);
                const radialGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
                radialGlow.addColorStop(0, `rgba(198, 255, 54, ${glowAlpha})`);
                radialGlow.addColorStop(0.4, `rgba(0, 255, 65, ${glowAlpha * 0.4})`);
                radialGlow.addColorStop(1, "rgba(0, 255, 65, 0)");
                ctx.fillStyle = radialGlow;
                ctx.fillRect(0, 0, w, h);
            }
            // Draw particles
            for(let i = 0; i < particles.length; i++){
                const p = particles[i];
                if (!reducedMotion) {
                    // Drift toward center as progress increases
                    const pullStrength = progressNorm * 0.0003;
                    p.vx += (centerX - p.x) * pullStrength;
                    p.vy += (centerY - p.y) * pullStrength;
                    p.x += p.vx + Math.sin(time * 0.0005 + p.phase) * p.drift;
                    p.y += p.vy + Math.cos(time * 0.0004 + p.phase) * p.drift;
                    // Damping
                    p.vx *= 0.99;
                    p.vy *= 0.99;
                    // Wrap edges
                    if (p.x < -10) p.x = w + 10;
                    if (p.x > w + 10) p.x = -10;
                    if (p.y < -10) p.y = h + 10;
                    if (p.y > h + 10) p.y = -10;
                }
                const alpha = p.baseAlpha * (0.3 + progressNorm * 0.7) * (0.6 + Math.sin(time * 0.001 + p.phase) * 0.4);
                // Draw particle glow
                if (p.size > 1.2) {
                    const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
                    glowGrad.addColorStop(0, `rgba(198, 255, 54, ${alpha * 0.5})`);
                    glowGrad.addColorStop(1, "rgba(0, 255, 65, 0)");
                    ctx.fillStyle = glowGrad;
                    ctx.fillRect(p.x - p.size * 4, p.y - p.size * 4, p.size * 8, p.size * 8);
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                // Alternate between glowing neon-green particles and deep emerald specs
                ctx.fillStyle = i % 3 === 0 ? `rgba(0, 59, 32, ${alpha * 0.9})` : `rgba(198, 255, 54, ${alpha})`;
                ctx.fill();
            }
        }
    }["LoaderParticles.useCallback[draw]"], [
        progress,
        reducedMotion,
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoaderParticles.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d", {
                alpha: true
            });
            if (!ctx) return;
            const resize = {
                "LoaderParticles.useEffect.resize": ()=>{
                    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
                    canvas.width = window.innerWidth * dpr;
                    canvas.height = window.innerHeight * dpr;
                    canvas.style.width = `${window.innerWidth}px`;
                    canvas.style.height = `${window.innerHeight}px`;
                    ctx.scale(dpr, dpr);
                }
            }["LoaderParticles.useEffect.resize"];
            if (!isInitialized.current) {
                resize();
                const count = isMobile ? 30 : 65;
                const w = window.innerWidth;
                const h = window.innerHeight;
                const particles = [];
                for(let i = 0; i < count; i++){
                    particles.push({
                        x: pseudoRandom(i * 7 + 1) * w,
                        y: pseudoRandom(i * 7 + 2) * h,
                        vx: (pseudoRandom(i * 7 + 3) - 0.5) * 0.15,
                        vy: (pseudoRandom(i * 7 + 4) - 0.5) * 0.15,
                        size: pseudoRandom(i * 7 + 5) * 1.6 + 0.5,
                        baseAlpha: pseudoRandom(i * 7 + 6) * 0.45 + 0.15,
                        phase: pseudoRandom(i * 7 + 7) * Math.PI * 2,
                        drift: pseudoRandom(i * 7 + 8) * 0.3 + 0.05
                    });
                }
                particlesRef.current = particles;
                isInitialized.current = true;
            }
            window.addEventListener("resize", resize);
            const loop = {
                "LoaderParticles.useEffect.loop": (time)=>{
                    resize();
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    draw(ctx, w, h, time);
                    animationRef.current = requestAnimationFrame(loop);
                }
            }["LoaderParticles.useEffect.loop"];
            animationRef.current = requestAnimationFrame(loop);
            return ({
                "LoaderParticles.useEffect": ()=>{
                    cancelAnimationFrame(animationRef.current);
                    window.removeEventListener("resize", resize);
                }
            })["LoaderParticles.useEffect"];
        }
    }["LoaderParticles.useEffect"], [
        draw,
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 z-0",
        style: {
            pointerEvents: "none"
        },
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/loader/LoaderParticles.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(LoaderParticles, "wv3UZllE4y9YefODS+nelDtNczY=");
_c = LoaderParticles;
var _c;
__turbopack_context__.k.register(_c, "LoaderParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ConsultationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultationModal",
    ()=>ConsultationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ConsultationModal({ isOpen, onClose }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("form");
    const [selectedFocus, setSelectedFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Autonomous Workflows");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        company: "",
        teamSize: "10-50"
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        setStep("success");
    };
    const handleReset = ()=>{
        setStep("form");
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: handleReset,
                    className: "absolute inset-0 bg-black/85 backdrop-blur-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    transition: {
                        duration: 0.35,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    className: "relative w-full max-w-lg rounded-3xl bg-[#10110E] border border-white/10 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(198,255,54,0.06)] overflow-hidden z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[radial-gradient(circle,rgba(198,255,54,0.15),transparent_70%)] blur-3xl pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleReset,
                            className: "absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        step === "form" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#161814] border border-[#C6FF36]/30 text-[#C6FF36] text-[10px] font-mono mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "PRIVATE ARCHITECTURE SESSION"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-syne text-2xl font-bold text-white tracking-tight",
                                            children: "Book a Free Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-400 mt-1",
                                            children: "Connect directly with an AI automation architect to map out high-impact workflows for your team."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2",
                                                    children: "Primary Automation Goal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        "Autonomous Workflows",
                                                        "Data Pipelines",
                                                        "App Integrations",
                                                        "Custom AI Agents"
                                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setSelectedFocus(item),
                                                            className: `px-3 py-2 rounded-xl text-xs font-medium text-left transition-all border ${selectedFocus === item ? "bg-[#C6FF36]/15 border-[#C6FF36] text-[#C6FF36] shadow-[0_0_12px_rgba(198,255,54,0.15)]" : "bg-[#161814] border-white/10 text-neutral-300 hover:border-white/20"}`,
                                                            children: item
                                                        }, item, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5",
                                                            children: "Your Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: formData.name,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    name: e.target.value
                                                                }),
                                                            placeholder: "Alex Morgan",
                                                            className: "w-full px-3.5 py-2.5 rounded-xl bg-[#161814] border border-white/10 focus:border-[#C6FF36] text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5",
                                                            children: "Work Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            required: true,
                                                            value: formData.email,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    email: e.target.value
                                                                }),
                                                            placeholder: "alex@company.com",
                                                            className: "w-full px-3.5 py-2.5 rounded-xl bg-[#161814] border border-white/10 focus:border-[#C6FF36] text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5",
                                                            children: "Company Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: formData.company,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    company: e.target.value
                                                                }),
                                                            placeholder: "Acme Corp",
                                                            className: "w-full px-3.5 py-2.5 rounded-xl bg-[#161814] border border-white/10 focus:border-[#C6FF36] text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5",
                                                            children: "Team Size"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.teamSize,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    teamSize: e.target.value
                                                                }),
                                                            className: "w-full px-3.5 py-2.5 rounded-xl bg-[#161814] border border-white/10 focus:border-[#C6FF36] text-sm text-white focus:outline-none transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "1-10",
                                                                    children: "1-10 people"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "10-50",
                                                                    children: "10-50 people"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "50-250",
                                                                    children: "50-250 people"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "250+",
                                                                    children: "250+ people"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full mt-4 py-3.5 rounded-xl bg-[#C6FF36] hover:bg-[#b8f02f] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,255,54,0.3)] transition-all cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Confirm Consultation Request"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4 ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-mono text-neutral-500 text-center",
                                            children: "30-minute strategic walkthrough • No sales pressure • Guaranteed response within 4 hours"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-8 flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-full bg-[#C6FF36]/15 border border-[#C6FF36] flex items-center justify-center text-[#C6FF36] mb-4 shadow-[0_0_25px_rgba(198,255,54,0.35)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-syne text-xl font-bold text-white mb-2",
                                    children: "Consultation Confirmed!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-neutral-300 max-w-sm mb-6 leading-relaxed",
                                    children: [
                                        "Thanks, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#C6FF36]",
                                            children: formData.name || "friend"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 194,
                                            columnNumber: 27
                                        }, this),
                                        ". Our lead automation architect will email you at",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-mono",
                                            children: formData.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        " with calendar availability for your session."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer",
                                    children: "Return to Experience"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ConsultationModal.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ConsultationModal.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/ConsultationModal.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ConsultationModal, "eYVZ5CzhYOxtYW1nZuc7ttE4BBo=");
_c = ConsultationModal;
var _c;
__turbopack_context__.k.register(_c, "ConsultationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/StartFreeModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StartFreeModal",
    ()=>StartFreeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function StartFreeModal({ isOpen, onClose, selectedPlan = "Professional" }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-md rounded-3xl bg-[#10110E] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-6 sm:p-8 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#C6FF36]/15 blur-2xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-5 right-5 p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161814] border border-[#C6FF36]/30 text-[11px] font-mono text-[#C6FF36] mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "14-DAY FULL TRIAL // ",
                                        selectedPlan.toUpperCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-white tracking-tight mb-2",
                            children: "Start building with Relay."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-neutral-400 mb-6 font-normal",
                            children: "No credit card required. Connect up to 240 apps and deploy your first handoff in minutes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-mono text-neutral-300 mb-1.5",
                                            children: "Work Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            required: true,
                                            placeholder: "name@company.com",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            className: "w-full px-4 py-3 rounded-xl bg-[#0a0b09] border border-white/10 focus:border-[#C6FF36] focus:outline-none text-white text-sm font-mono placeholder:text-neutral-600 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full py-3.5 rounded-full bg-[#C6FF36] hover:bg-[#d5ff5e] text-[#050505] font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(198,255,54,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-98",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Create Workspace"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 pt-5 border-t border-white/8 flex items-center justify-between text-[11px] font-mono text-neutral-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1 text-neutral-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "w-3.5 h-3.5 text-[#C6FF36]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        "SOC2 Type II Ready"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Instant provisioning"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full bg-[#C6FF36]/20 border border-[#C6FF36] text-[#C6FF36] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(198,255,54,0.4)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-6 h-6 stroke-[3]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xl font-bold text-white mb-2",
                            children: "Check your inbox"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-neutral-400 font-mono mb-6 max-w-xs mx-auto",
                            children: [
                                "We've sent your magic setup link to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#C6FF36]",
                                    children: email
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 56
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors",
                            children: "Back to site"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/StartFreeModal.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/StartFreeModal.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/StartFreeModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(StartFreeModal, "WOUunRVvClvSUt2+ZfC5ERptgSA=");
_c = StartFreeModal;
var _c;
__turbopack_context__.k.register(_c, "StartFreeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/WatchBuildModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WatchBuildModal",
    ()=>WatchBuildModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.mjs [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WatchBuildModal({ isOpen, onClose, onStartFree }) {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WatchBuildModal.useEffect": ()=>{
            if (!isOpen) return;
            const interval = setInterval({
                "WatchBuildModal.useEffect.interval": ()=>{
                    if (isPlaying) {
                        setProgress({
                            "WatchBuildModal.useEffect.interval": (prev)=>{
                                if (prev >= 100) {
                                    setCurrentStep({
                                        "WatchBuildModal.useEffect.interval": (s)=>s < 4 ? s + 1 : 1
                                    }["WatchBuildModal.useEffect.interval"]);
                                    return 0;
                                }
                                return prev + 2;
                            }
                        }["WatchBuildModal.useEffect.interval"]);
                    }
                }
            }["WatchBuildModal.useEffect.interval"], 100);
            return ({
                "WatchBuildModal.useEffect": ()=>clearInterval(interval)
            })["WatchBuildModal.useEffect"];
        }
    }["WatchBuildModal.useEffect"], [
        isOpen,
        isPlaying
    ]);
    if (!isOpen) return null;
    const buildSteps = [
        {
            step: 1,
            title: "Define Webhook Trigger & Payload Schema",
            description: "Connect Stripe payment_intent.payment_failed webhook with automatic schema mapping.",
            timestamp: "0:24"
        },
        {
            step: 2,
            title: "Add Conditional Enterprise Branching Rule",
            description: "Evaluate customer lifetime value (LTV > $25,000) or contract tier in real-time.",
            timestamp: "0:58"
        },
        {
            step: 3,
            title: "Configure Human-in-the-Loop Slack Modal",
            description: "Route approval card to Sarah Chen (AE) with 1-click grace period extension.",
            timestamp: "1:32"
        },
        {
            step: 4,
            title: "Deploy Live with Automatic Rollback & Telemetry",
            description: "Publish to production cluster with sub-second execution guarantee & 90-day replay.",
            timestamp: "2:00"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-4xl rounded-3xl bg-[#10110E] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0a0b09]/80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2.5 h-2.5 rounded-full bg-[#C6FF36] animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Interactive Build Walkthrough: 2-Minute Tour"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-mono text-neutral-400 hidden sm:inline",
                                    children: "• Build & Deploy a Multi-App Handoff"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",
                            "aria-label": "Close Modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-video bg-[#050505] p-6 sm:p-8 flex flex-col justify-between overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(198,255,54,0.08),transparent_70%)] blur-3xl pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 rounded-full bg-[#C6FF36]/15 border border-[#C6FF36]/30 text-[#C6FF36] text-xs font-mono font-semibold mb-4",
                                    children: [
                                        "STEP ",
                                        currentStep,
                                        " OF 4 // ",
                                        buildSteps[currentStep - 1].timestamp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-white mb-3",
                                    children: buildSteps[currentStep - 1].title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-neutral-400 leading-relaxed font-mono",
                                    children: buildSteps[currentStep - 1].description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-4 rounded-xl bg-[#161814] border border-[#C6FF36]/40 shadow-[0_0_30px_rgba(198,255,54,0.15)] flex items-center gap-4 text-xs font-mono text-neutral-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#C6FF36] animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "[Live Runtime Preview]: Evaluating rule payload on node #0",
                                                currentStep
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#C6FF36]",
                                            children: "✓ 0 errors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 pt-4 border-t border-white/8 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-1.5 rounded-full bg-white/10 overflow-hidden cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-[#C6FF36] transition-all duration-100 shadow-[0_0_10px_#C6FF36]",
                                        style: {
                                            width: `${(currentStep - 1) * 25 + progress * 0.25}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs font-mono text-neutral-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsPlaying(!isPlaying),
                                                    className: "p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white cursor-pointer",
                                                    children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 32
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-4 h-4 fill-current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 64
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        buildSteps[currentStep - 1].timestamp,
                                                        " / 2:00"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setCurrentStep((s)=>s < 4 ? s + 1 : 1);
                                                    setProgress(0);
                                                },
                                                className: "hover:text-white transition-colors cursor-pointer flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Next Step"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between px-6 py-4 border-t border-white/8 bg-[#0a0b09] gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-mono text-neutral-400",
                            children: "Ready to test this in your own stack?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 rounded-full text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer",
                                    children: "Close preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onClose();
                                        onStartFree?.();
                                    },
                                    className: "px-5 py-2 rounded-full bg-[#C6FF36] text-black font-semibold text-xs transition-all hover:bg-[#d5ff5e] shadow-[0_0_20px_rgba(198,255,54,0.3)] cursor-pointer",
                                    children: "Start free (14 days)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/WatchBuildModal.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(WatchBuildModal, "QWy3KssyhKi9ppwNoUCXKePbrbI=");
_c = WatchBuildModal;
var _c;
__turbopack_context__.k.register(_c, "WatchBuildModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar({ onStartFree }) {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                    // Active section spy
                    const sections = [
                        "product",
                        "workflow",
                        "customers",
                        "pricing"
                    ];
                    const scrollPos = window.scrollY + 200;
                    for (const sectionId of sections){
                        const el = document.getElementById(sectionId);
                        if (el) {
                            const top = el.offsetTop;
                            const height = el.offsetHeight;
                            if (scrollPos >= top && scrollPos < top + height) {
                                setActiveSection(sectionId);
                                break;
                            }
                        }
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            label: "Product",
            href: "#product",
            id: "product"
        },
        {
            label: "How it works",
            href: "#workflow",
            id: "workflow"
        },
        {
            label: "Customers",
            href: "#customers",
            id: "customers"
        },
        {
            label: "Pricing",
            href: "#pricing",
            id: "pricing"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pointer-events-none transition-all duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-6xl mx-auto rounded-full pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? "bg-[#10110E]/85 backdrop-blur-2xl border border-[#C6FF36]/20 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(198,255,54,0.06)] py-2.5 px-4 sm:px-6" : "bg-transparent border border-white/5 py-3 px-4 sm:px-6 backdrop-blur-[2px]"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "flex items-center gap-2.5 group cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-[#161814] border border-[#C6FF36]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#C6FF36] group-hover:shadow-[0_0_18px_rgba(198,255,54,0.4)] group-hover:scale-105",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12",
                                                stroke: "#C6FF36",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9 16L12 12L15 16",
                                                stroke: "#C6FF36",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "2.5",
                                                fill: "#C6FF36"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5",
                                    children: [
                                        "Relay",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-[#C6FF36] animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-8 text-sm font-medium",
                            children: navLinks.map((link)=>{
                                const isActive = activeSection === link.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: `relative py-1 transition-colors duration-200 cursor-pointer ${isActive ? "text-white font-semibold" : "text-[#888888] hover:text-white"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C6FF36] rounded-full shadow-[0_0_8px_#C6FF36]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, link.label, true, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#161814]/80 border border-white/5 text-[11px] font-mono text-neutral-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex h-2 w-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF36] opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-2 w-2 bg-[#C6FF36]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "All systems normal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onStartFree,
                                    className: "btn-primary-neon group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#C6FF36] text-[#050505] font-semibold text-xs sm:text-sm cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Start free"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: "md:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white focus:outline-none",
                                    "aria-label": "Toggle Menu",
                                    children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 61
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden pt-4 pb-3 border-t border-white/10 mt-3 flex flex-col gap-3",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>setMobileMenuOpen(false),
                                className: `text-sm py-1.5 transition-colors font-medium px-2 ${activeSection === link.id ? "text-[#C6FF36]" : "text-neutral-300 hover:text-[#C6FF36]"}`,
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 flex items-center gap-2 text-xs font-mono text-neutral-400 px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[#C6FF36]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "All systems normal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/navbar/Navbar.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Navbar, "YUOW2CgV+NOrJoaJsrnLrqR5o/o=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicPortfolioShowcase",
    ()=>CinematicPortfolioShowcase,
    "CinematicShowcase",
    ()=>CinematicShowcase,
    "SHOWCASE_PROJECTS",
    ()=>SHOWCASE_PROJECTS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SHOWCASE_PROJECTS = [
    {
        id: "codenarts",
        name: "CODENARTS",
        category: "CREATIVE COMPUTING",
        year: "2024",
        description: "A bold creative agency website featuring futuristic Golden and purple visuals, seamless animations, and Immersive storytelling.",
        image: "/projects/codenarts.svg",
        accentColor: "#A78BFA",
        ambientGlow: "rgba(124, 58, 237, 0.45)",
        secondaryGlow: "rgba(249, 115, 22, 0.28)",
        aspect: "landscape"
    },
    {
        id: "az-digital",
        name: "AZ-DIGITAL-VENTURES",
        category: "EDITORIAL BRANDING",
        year: "2024",
        description: "A high-end venture studio editorial platform featuring amber illumination, luxury typography, and fluid interactive transitions.",
        image: "/projects/az-digital.svg",
        accentColor: "#F97316",
        ambientGlow: "rgba(234, 88, 12, 0.48)",
        secondaryGlow: "rgba(245, 158, 11, 0.22)",
        aspect: "laptop"
    },
    {
        id: "amron",
        name: "AMRON",
        category: "INDUSTRIAL AESTHETICS",
        year: "2024",
        description: "An industrial creative studio interface designed with burnt-orange dynamics, precision layouts, and monolithic architecture.",
        image: "/projects/amron.svg",
        accentColor: "#EF4444",
        ambientGlow: "rgba(220, 38, 38, 0.45)",
        secondaryGlow: "rgba(249, 115, 22, 0.25)",
        aspect: "monitor"
    },
    {
        id: "chatone",
        name: "CHATONE",
        category: "MOBILE ECOSYSTEM",
        year: "2024",
        description: "An encrypted mobile communication ecosystem engineered with deep purple radiance, tactile micro-interactions, and real-time streams.",
        image: "/projects/chatone.svg",
        accentColor: "#C084FC",
        ambientGlow: "rgba(168, 85, 247, 0.45)",
        secondaryGlow: "rgba(147, 51, 234, 0.25)",
        aspect: "mobile"
    },
    {
        id: "finance",
        name: "FINANCE",
        category: "LIFESTYLE FINTECH",
        year: "2024",
        description: "A luxury lifestyle fintech visualizer combining editorial desk environments, warm ambient lighting, and high-frequency asset telemetry.",
        image: "/projects/finance.svg",
        accentColor: "#F59E0B",
        ambientGlow: "rgba(217, 119, 6, 0.42)",
        secondaryGlow: "rgba(16, 185, 129, 0.18)",
        aspect: "mobile"
    },
    {
        id: "neura-core",
        name: "NEURA-CORE",
        category: "SPATIAL INTELLIGENCE",
        year: "2025",
        description: "An autonomous neural interface platform with holographic volumetric data trees, real-time quantum telemetry, and fluid glass shaders.",
        image: "/projects/neura-core.svg",
        accentColor: "#00F0FF",
        ambientGlow: "rgba(0, 240, 255, 0.45)",
        secondaryGlow: "rgba(14, 165, 233, 0.25)",
        aspect: "laptop"
    },
    {
        id: "aether-kinetics",
        name: "AETHER-KINETICS",
        category: "KINETIC ARCHITECTURE",
        year: "2025",
        description: "A precision automotive design atelier exploring aerodynamic carbon chassis, dynamic light ribbons, and computational fluid modeling.",
        image: "/projects/aether-kinetics.svg",
        accentColor: "#F43F5E",
        ambientGlow: "rgba(244, 63, 94, 0.45)",
        secondaryGlow: "rgba(225, 29, 72, 0.25)",
        aspect: "monitor"
    },
    {
        id: "solaris-audio",
        name: "SOLARIS-AUDIO",
        category: "SPATIAL ACOUSTICS",
        year: "2025",
        description: "Next-generation sonic visualizer featuring real-time frequency waveforms, lossless analog warmth, and immersive tactile soundstage controls.",
        image: "/projects/solaris-audio.svg",
        accentColor: "#C6FF36",
        ambientGlow: "rgba(198, 255, 54, 0.42)",
        secondaryGlow: "rgba(132, 204, 22, 0.22)",
        aspect: "landscape"
    },
    {
        id: "vortex-studios",
        name: "VORTEX-STUDIOS",
        category: "METAVERSE CINEMATICS",
        year: "2025",
        description: "A global creative direction studio crafting cinematic CG brand identities, photorealistic environments, and experiential digital campaigns.",
        image: "/projects/vortex-studios.svg",
        accentColor: "#D946EF",
        ambientGlow: "rgba(217, 70, 239, 0.45)",
        secondaryGlow: "rgba(168, 85, 247, 0.26)",
        aspect: "laptop"
    }
];
function CinematicPortfolioShowcase() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinnedStageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track active project index for UI indicators
    const [activeProjectIndex, setActiveProjectIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [overallProgress, setOverallProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isFinalPhase, setIsFinalPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mouse tilt parallax state
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicPortfolioShowcase.useCallback[handleMouseMove]": (e)=>{
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
            const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
            setMousePos({
                x,
                y
            });
        }
    }["CinematicPortfolioShowcase.useCallback[handleMouseMove]"], []);
    // Programmatic smooth scroll to any project
    const scrollToProject = (index)=>{
        if (!containerRef.current) return;
        const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
        const scrollFraction = index < 9 ? index * 0.91 / 9 + 0.05 : 0.96;
        const targetY = containerRef.current.offsetTop + totalScroll * scrollFraction;
        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicPortfolioShowcase.useEffect": ()=>{
            const container = containerRef.current;
            const stage = pinnedStageRef.current;
            if (!container || !stage) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "CinematicPortfolioShowcase.useEffect.ctx": ()=>{
                    // MASTER SCROLL TIMELINE (36.6s total normalized duration for all 9 cards + final statement)
                    const masterTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: "bottom bottom",
                            pin: stage,
                            anticipatePin: 1,
                            scrub: 1.5,
                            onUpdate: {
                                "CinematicPortfolioShowcase.useEffect.ctx.masterTl": (self)=>{
                                    const p = self.progress;
                                    setOverallProgress(p);
                                    // Phase tracking for bottom UI indicators
                                    const totalProjects = SHOWCASE_PROJECTS.length; // 9
                                    const stepRatio = 0.91 / totalProjects;
                                    if (p < 0.91) {
                                        setIsFinalPhase(false);
                                        const idx = Math.min(totalProjects - 1, Math.max(0, Math.floor(p / stepRatio)));
                                        setActiveProjectIndex(idx);
                                    } else {
                                        setIsFinalPhase(true);
                                        setActiveProjectIndex(totalProjects - 1);
                                    }
                                }
                            }["CinematicPortfolioShowcase.useEffect.ctx.masterTl"]
                        }
                    });
                    // Targets
                    const fg = SHOWCASE_PROJECTS.map({
                        "CinematicPortfolioShowcase.useEffect.ctx.fg": (_, i)=>stage.querySelector(`.project-fg-${i}`)
                    }["CinematicPortfolioShowcase.useEffect.ctx.fg"]);
                    const bg = SHOWCASE_PROJECTS.map({
                        "CinematicPortfolioShowcase.useEffect.ctx.bg": (_, i)=>stage.querySelector(`.project-bg-${i}`)
                    }["CinematicPortfolioShowcase.useEffect.ctx.bg"]);
                    const amb = SHOWCASE_PROJECTS.map({
                        "CinematicPortfolioShowcase.useEffect.ctx.amb": (_, i)=>stage.querySelector(`.project-amb-${i}`)
                    }["CinematicPortfolioShowcase.useEffect.ctx.amb"]);
                    const titleWrap = SHOWCASE_PROJECTS.map({
                        "CinematicPortfolioShowcase.useEffect.ctx.titleWrap": (_, i)=>stage.querySelector(`.project-title-${i}`)
                    }["CinematicPortfolioShowcase.useEffect.ctx.titleWrap"]);
                    const titleLines = SHOWCASE_PROJECTS.map({
                        "CinematicPortfolioShowcase.useEffect.ctx.titleLines": (_, i)=>stage.querySelectorAll(`.project-title-${i} .reveal-line`)
                    }["CinematicPortfolioShowcase.useEffect.ctx.titleLines"]);
                    const descWrap = SHOWCASE_PROJECTS.map({
                        "CinematicPortfolioShowcase.useEffect.ctx.descWrap": (_, i)=>stage.querySelector(`.project-desc-${i}`)
                    }["CinematicPortfolioShowcase.useEffect.ctx.descWrap"]);
                    const descLines = SHOWCASE_PROJECTS.map({
                        "CinematicPortfolioShowcase.useEffect.ctx.descLines": (_, i)=>stage.querySelectorAll(`.project-desc-${i} .reveal-line`)
                    }["CinematicPortfolioShowcase.useEffect.ctx.descLines"]);
                    const orangeBeam = stage.querySelector(".amron-orange-beam");
                    const statementSection = stage.querySelector(".final-statement-wrap");
                    const statementWords = stage.querySelectorAll(".statement-word");
                    // Shared smooth inOut easing curve
                    const easeInOut = "power2.inOut";
                    const easeRevealOut = "power3.out";
                    // ─── INITIAL POSITIONS AT t = 0 ───
                    // Project 0 is at center stage
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(fg[0], {
                        y: "0vh",
                        scale: 1.0,
                        opacity: 1,
                        zIndex: 20
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bg[0], {
                        opacity: 0.45,
                        scale: 1.25
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(amb[0], {
                        opacity: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(titleWrap[0], {
                        opacity: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(descWrap[0], {
                        opacity: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(titleLines[0], {
                        y: "0%",
                        opacity: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(descLines[0], {
                        y: "0%",
                        opacity: 1
                    });
                    // Project 1 is queued at bottom center as preview card (sitting right above telemetry bar)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(fg[1], {
                        y: "38vh",
                        scale: 0.28,
                        opacity: 0.95,
                        zIndex: 10
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bg[1], {
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(amb[1], {
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(titleWrap[1], {
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(descWrap[1], {
                        opacity: 0
                    });
                    // Projects 2..8 are queued beneath the viewport
                    for(let i = 2; i < fg.length; i++){
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(fg[i], {
                            y: "65vh",
                            scale: 0.22,
                            opacity: 0,
                            zIndex: 1
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bg[i], {
                            opacity: 0
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(amb[i], {
                            opacity: 0
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(titleWrap[i], {
                            opacity: 0
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(descWrap[i], {
                            opacity: 0
                        });
                    }
                    /* ─────────────────────────────────────────────────────────────
         DYNAMIC TIMELINE FOR ALL 9 CARDS WITH IDENTICAL SMOOTH PACING
         Each phase: 2.6s hold, 1.2s smooth ease-in-and-out transition
         ───────────────────────────────────────────────────────────── */ const numCards = SHOWCASE_PROJECTS.length; // 9
                    const stepDuration = 3.8; // 3.8s per project
                    const holdDuration = 2.6; // 2.6s active hold per project
                    const transitionDuration = 1.2; // 1.2s ease in & out
                    for(let i = 0; i < numCards - 1; i++){
                        const startHold = i * stepDuration;
                        const endHold = startHold + holdDuration;
                        const endTransition = startHold + stepDuration;
                        // 1. Current card i floats gently at center stage during active hold
                        masterTl.to(fg[i], {
                            scale: 1.02,
                            y: "-1vh",
                            duration: holdDuration,
                            ease: "none"
                        }, startHold);
                        masterTl.to(bg[i], {
                            scale: 1.30,
                            duration: holdDuration,
                            ease: "none"
                        }, startHold);
                        // 2. Next card i+1 holds steady as preview card at the bottom
                        masterTl.to(fg[i + 1], {
                            y: "38vh",
                            scale: 0.28,
                            opacity: 0.95,
                            duration: holdDuration,
                            ease: "none"
                        }, startHold);
                        // 3. Current card i EXITS UPWARD out of the viewport
                        masterTl.to(fg[i], {
                            y: "-75vh",
                            opacity: 0,
                            scale: 0.92,
                            duration: transitionDuration,
                            ease: easeInOut
                        }, endHold);
                        masterTl.to(bg[i], {
                            opacity: 0,
                            scale: 1.45,
                            filter: "blur(50px)",
                            duration: transitionDuration,
                            ease: easeInOut
                        }, endHold);
                        masterTl.to(amb[i], {
                            opacity: 0,
                            duration: transitionDuration,
                            ease: easeInOut
                        }, endHold);
                        // Text i rolls UP & OUT through mask
                        masterTl.to(titleLines[i], {
                            y: "-125%",
                            opacity: 0,
                            stagger: 0.04,
                            duration: 0.8,
                            ease: easeInOut
                        }, endHold);
                        masterTl.to(descLines[i], {
                            y: "-125%",
                            opacity: 0,
                            stagger: 0.04,
                            duration: 0.8,
                            ease: easeInOut
                        }, endHold);
                        masterTl.set([
                            titleWrap[i],
                            descWrap[i]
                        ], {
                            opacity: 0
                        }, endTransition);
                        // 4. Next card i+1 TRAVELS UP FROM BOTTOM PREVIEW INTO CENTER STAGE
                        masterTl.to(fg[i + 1], {
                            y: "0vh",
                            scale: 1.0,
                            opacity: 1,
                            zIndex: 20,
                            duration: transitionDuration,
                            ease: easeInOut
                        }, endHold);
                        masterTl.fromTo(bg[i + 1], {
                            scale: 1.05,
                            opacity: 0,
                            filter: "blur(14px)"
                        }, {
                            scale: 1.25,
                            opacity: 0.48,
                            filter: "blur(32px)",
                            duration: transitionDuration,
                            ease: easeInOut
                        }, endHold);
                        masterTl.fromTo(amb[i + 1], {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: transitionDuration,
                            ease: easeInOut
                        }, endHold);
                        // Special accent light beam for Amron (project index 2)
                        if (i === 1 && orangeBeam) {
                            masterTl.fromTo(orangeBeam, {
                                opacity: 0,
                                scaleY: 0.5
                            }, {
                                opacity: 0.85,
                                scaleY: 1,
                                duration: 1.0,
                                ease: easeInOut
                            }, endHold + 0.1);
                        } else if (i === 2 && orangeBeam) {
                            masterTl.to(orangeBeam, {
                                opacity: 0,
                                duration: 0.8,
                                ease: easeInOut
                            }, endHold);
                        }
                        // 5. Following card i+2 SLIDES UP INTO THE BOTTOM PREVIEW SLOT from below
                        if (i + 2 < numCards) {
                            masterTl.fromTo(fg[i + 2], {
                                y: "65vh",
                                scale: 0.22,
                                opacity: 0,
                                zIndex: 10
                            }, {
                                y: "38vh",
                                scale: 0.28,
                                opacity: 0.95,
                                duration: 1.0,
                                ease: easeInOut
                            }, endHold + 0.2);
                        }
                        // 6. Text i+1 rolls IN from DOWN to UP
                        masterTl.set([
                            titleWrap[i + 1],
                            descWrap[i + 1]
                        ], {
                            opacity: 1
                        }, endHold + 0.2);
                        masterTl.fromTo(titleLines[i + 1], {
                            y: "130%",
                            opacity: 0
                        }, {
                            y: "0%",
                            opacity: 1,
                            stagger: 0.08,
                            duration: 0.9,
                            ease: easeRevealOut
                        }, endHold + 0.3);
                        masterTl.fromTo(descLines[i + 1], {
                            y: "130%",
                            opacity: 0
                        }, {
                            y: "0%",
                            opacity: 1,
                            stagger: 0.08,
                            duration: 0.9,
                            ease: easeRevealOut
                        }, endHold + 0.4);
                    }
                    /* ─────────────────────────────────────────────────────────────
         PHASE 09: LAST CARD (Vortex-Studios, index 8)
         ───────────────────────────────────────────────────────────── */ const lastIndex = numCards - 1; // 8
                    const lastCardStart = lastIndex * stepDuration; // 30.4s
                    const lastCardHoldEnd = lastCardStart + 3.2; // 33.6s (generous 3.2s hold)
                    masterTl.to(fg[lastIndex], {
                        scale: 1.02,
                        y: "-1vh",
                        duration: 3.2,
                        ease: "none"
                    }, lastCardStart);
                    masterTl.to(bg[lastIndex], {
                        scale: 1.30,
                        duration: 3.2,
                        ease: "none"
                    }, lastCardStart);
                    /* ─────────────────────────────────────────────────────────────
         PHASE 10: FINAL STATEMENT (33.6s – 36.6s)
         ───────────────────────────────────────────────────────────── */ // Last card slides upward smoothly to upper-middle; side text rolls out
                    masterTl.to(fg[lastIndex], {
                        y: "-18vh",
                        scale: 0.65,
                        opacity: 0.55,
                        duration: 1.0,
                        ease: easeInOut
                    }, lastCardHoldEnd);
                    masterTl.to(bg[lastIndex], {
                        opacity: 0.08,
                        filter: "blur(55px)",
                        duration: 1.0,
                        ease: easeInOut
                    }, lastCardHoldEnd);
                    masterTl.to(amb[lastIndex], {
                        opacity: 0.12,
                        duration: 1.0,
                        ease: easeInOut
                    }, lastCardHoldEnd);
                    masterTl.to(titleLines[lastIndex], {
                        y: "-125%",
                        opacity: 0,
                        stagger: 0.04,
                        duration: 0.8,
                        ease: easeInOut
                    }, lastCardHoldEnd);
                    masterTl.to(descLines[lastIndex], {
                        y: "-125%",
                        opacity: 0,
                        stagger: 0.04,
                        duration: 0.8,
                        ease: easeInOut
                    }, lastCardHoldEnd);
                    masterTl.set([
                        titleWrap[lastIndex],
                        descWrap[lastIndex]
                    ], {
                        opacity: 0
                    }, lastCardHoldEnd + 1.2);
                    // Final Statement reveals in Bodoni Red with words stagger
                    if (statementSection && statementWords.length > 0) {
                        masterTl.fromTo(statementSection, {
                            opacity: 0,
                            y: 40
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 1.0,
                            ease: "power2.out"
                        }, lastCardHoldEnd + 0.6);
                        masterTl.fromTo(statementWords, {
                            opacity: 0,
                            y: 28,
                            filter: "blur(8px)"
                        }, {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            stagger: 0.055,
                            duration: 1.0,
                            ease: easeInOut
                        }, lastCardHoldEnd + 0.7);
                    }
                }
            }["CinematicPortfolioShowcase.useEffect.ctx"], container);
            return ({
                "CinematicPortfolioShowcase.useEffect": ()=>ctx.revert()
            })["CinematicPortfolioShowcase.useEffect"];
        }
    }["CinematicPortfolioShowcase.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onMouseMove: handleMouseMove,
        className: "relative w-full bg-[#050505] text-white selection:bg-[#FF1A00] selection:text-black z-30",
        style: {
            // 1800vh scroll track gives identical slow, relaxed scroll pacing for all 9 cards + final statement
            height: "1800vh",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: pinnedStageRef,
            className: "relative h-screen w-full overflow-hidden bg-[#050505] select-none",
            children: [
                SHOWCASE_PROJECTS.map((proj, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `project-amb-${idx} pointer-events-none absolute inset-0 transition-opacity duration-700`,
                        style: {
                            opacity: idx === 0 ? 1 : 0,
                            background: `radial-gradient(ellipse 75% 65% at 50% 45%, ${proj.ambientGlow}, transparent 70%), radial-gradient(circle at 75% 30%, ${proj.secondaryGlow || "transparent"}, transparent 50%)`
                        }
                    }, `amb-${proj.id}`, false, {
                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "amron-orange-beam pointer-events-none absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F97316] to-transparent opacity-0 shadow-[0_0_15px_#F97316]"
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
                    children: SHOWCASE_PROJECTS.map((proj, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `project-bg-${idx} absolute inset-0 flex items-center justify-center`,
                            style: {
                                opacity: idx === 0 ? 0.45 : 0,
                                transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`,
                                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: proj.image,
                                alt: "",
                                className: "h-[140%] w-[140%] max-w-none object-contain pointer-events-none",
                                style: {
                                    filter: "blur(34px)",
                                    transform: "scale(1.15)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 411,
                                columnNumber: 15
                            }, this)
                        }, `bg-${proj.id}`, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/85"
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90"
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                    children: SHOWCASE_PROJECTS.map((proj, idx)=>{
                        const maxWidthStyle = proj.aspect === "mobile" ? "max-w-[320px] sm:max-w-[360px] md:max-w-[400px]" : "max-w-[580px] sm:max-w-[640px] md:max-w-[700px] lg:max-w-[760px]";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `project-fg-${idx} absolute w-full ${maxWidthStyle} px-4 flex items-center justify-center will-change-transform`,
                            style: {
                                transformOrigin: "center center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    // Clicking on a card will navigate to it if it's currently queued as bottom preview
                                    if (activeProjectIndex !== idx) {
                                        scrollToProject(idx);
                                    }
                                },
                                className: "relative w-full rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] ring-1 ring-white/15 bg-black/40 backdrop-blur-sm cursor-pointer pointer-events-auto transition-transform hover:scale-[1.01]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: proj.image,
                                        alt: proj.name,
                                        className: "w-full h-auto object-contain block select-none pointer-events-auto",
                                        draggable: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                        lineNumber: 453,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                        lineNumber: 460,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 444,
                                columnNumber: 17
                            }, this)
                        }, `fg-${proj.id}`, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 437,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-8 left-8 sm:top-10 sm:left-12 z-40 flex items-center gap-3 select-none pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-4 h-10 flex flex-col justify-between py-1 opacity-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[1.5px] h-3 bg-white mx-auto shadow-[0_0_8px_white]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[2px] h-2 bg-white/70 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[1.5px] h-2 bg-white/40 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-6 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-40 w-[260px] sm:w-[340px] h-[200px] pointer-events-none",
                    children: SHOWCASE_PROJECTS.map((proj, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `project-title-${idx} absolute inset-0 flex flex-col justify-center will-change-transform`,
                            style: {
                                opacity: idx === 0 ? 1 : 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden py-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "reveal-line text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.06em] text-white uppercase leading-none will-change-transform drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]",
                                    children: proj.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                    lineNumber: 485,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, this)
                        }, `title-${proj.id}`, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 479,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block absolute right-8 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-40 w-[260px] lg:w-[320px] h-[240px] pointer-events-none",
                    children: SHOWCASE_PROJECTS.map((proj, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `project-desc-${idx} absolute inset-0 flex flex-col justify-center will-change-transform`,
                            style: {
                                opacity: idx === 0 ? 1 : 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden py-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "reveal-line text-xs sm:text-sm font-normal leading-[1.75] tracking-wide text-neutral-300 will-change-transform drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]",
                                        children: proj.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden py-1 mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reveal-line flex items-center will-change-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-12 h-12 flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute inset-0 w-full h-full -rotate-45",
                                                    viewBox: "0 0 40 40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "20",
                                                            cy: "20",
                                                            r: "17",
                                                            fill: "none",
                                                            stroke: "rgba(255, 255, 255, 0.12)",
                                                            strokeWidth: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 20 3 A 17 17 0 0 1 37 20",
                                                            fill: "none",
                                                            stroke: "rgba(255, 255, 255, 0.55)",
                                                            strokeWidth: "1.2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg sm:text-xl font-light text-white/90 italic tracking-wider select-none pl-0.5",
                                                    style: {
                                                        fontFamily: "var(--font-bodoni-72), 'Bodoni MT', 'Didot', Georgia, serif"
                                                    },
                                                    children: [
                                                        "0",
                                                        idx + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                            lineNumber: 511,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `desc-${proj.id}`, true, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 494,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "final-statement-wrap pointer-events-none absolute bottom-24 sm:bottom-28 left-0 right-0 z-40 px-6 sm:px-12 flex flex-col items-center justify-center text-center opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#FF1A00] leading-[1.25]",
                                style: {
                                    fontFamily: "var(--font-bodoni-72), 'Bodoni MT', 'Didot', Georgia, serif",
                                    textShadow: "0 0 30px rgba(255,26,0,0.35)"
                                },
                                children: [
                                    "From",
                                    "the",
                                    "First",
                                    "Idea",
                                    "to",
                                    "the",
                                    "Final",
                                    "Frame,",
                                    "Every",
                                    "Step",
                                    "is",
                                    "Crafted",
                                    "to",
                                    "Create",
                                    "an",
                                    "Unforgettable",
                                    "Experience."
                                ].map((word, wIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "statement-word inline-block mr-[0.28em] will-change-transform",
                                        children: word
                                    }, `word-${wIdx}`, false, {
                                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                        lineNumber: 558,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 opacity-60",
                                children: "DIGITAL ATELIER // BOUNTY BYTES AI STUDIOS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                        lineNumber: 547,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 544,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-6 left-0 right-0 z-40 px-8 sm:px-16 flex items-center justify-between font-mono text-[9px] sm:text-[11px] tracking-[0.32em] uppercase text-white/45 select-none pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#A78BFA] text-xs font-bold shadow-[0_0_10px_#A78BFA]",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 574,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "TENSION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 578,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 577,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/20 text-xs font-bold",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 580,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/85 font-semibold tracking-[0.38em]",
                                children: "IMMERSION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/20 text-xs font-bold",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "IMPACT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 590,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#A78BFA] text-xs font-bold shadow-[0_0_10px_#A78BFA]",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                                lineNumber: 593,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
                    lineNumber: 573,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
            lineNumber: 378,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/portfolio/CinematicPortfolioShowcase.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
_s(CinematicPortfolioShowcase, "NOVQyDCWTY3Gi+ZbaykmAIPMSSA=");
_c = CinematicPortfolioShowcase;
const CinematicShowcase = CinematicPortfolioShowcase;
const __TURBOPACK__default__export__ = CinematicPortfolioShowcase;
var _c;
__turbopack_context__.k.register(_c, "CinematicPortfolioShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pricing/PricingSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingSection",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PricingSection({ onSelectPlan }) {
    _s();
    const [isAnnual, setIsAnnual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const plans = [
        {
            name: "Free Trial",
            badge: "GET STARTED",
            description: "Ideal for testing workflows and exploring automation possibilities.",
            priceMonthly: "$0",
            priceAnnual: "$0",
            period: "for 14 days",
            highlighted: false,
            ctaText: "Start free trial",
            features: [
                "1,000 runs included",
                "Up to 10 active workflows",
                "240+ app integrations",
                "1-day run audit retention",
                "Community support & docs",
                "Standard webhook speeds"
            ]
        },
        {
            name: "Professional",
            badge: "MOST POPULAR",
            description: "For fast-moving teams that run core business operations on automated handoffs.",
            priceMonthly: "$59",
            priceAnnual: "$49",
            period: "/ month, billed annually",
            highlighted: true,
            ctaText: "Start 14-day trial",
            features: [
                "50,000 runs included per month",
                "Unlimited active workflows",
                "Human-in-the-loop approvals",
                "90-day payload audit replay",
                "Custom TypeScript logic nodes",
                "Priority Slack support channel",
                "Sub-second execution speeds",
                "Automated rollback on error"
            ]
        },
        {
            name: "Enterprise",
            badge: "CUSTOM RUNNERS",
            description: "For organizations requiring custom VPC runners, SOC2 compliance, and custom SLAs.",
            priceMonthly: "Custom",
            priceAnnual: "Custom",
            period: "tailored to volume",
            highlighted: false,
            ctaText: "Contact sales",
            features: [
                "Unlimited custom run volume",
                "Dedicated VPC tenant runners",
                "Custom 99.99% uptime SLA",
                "SOC2 Type II + HIPAA compliant",
                "SAML SSO & SCIM directory sync",
                "Dedicated solutions architect",
                "Custom on-premise connectors",
                "Cryptographic compliance audit"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pricing",
        className: "relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse,rgba(198,255,54,0.06),transparent_70%)] blur-[120px] animate-pulse-glow"
                }, void 0, false, {
                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        className: "max-w-3xl mx-auto text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono text-[#C6FF36] mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "TRANSPARENT PRICING"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5",
                                children: [
                                    "Predictable scale,",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-serif-italic font-normal text-[#C6FF36]",
                                        children: "zero surprises."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed mb-8",
                                children: "Start free for 14 days. Scale with transparent per-run tiers and dedicated enterprise infrastructure when you need it."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-3 p-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsAnnual(false),
                                        className: `px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${!isAnnual ? "bg-white/15 text-white font-semibold" : "text-neutral-400 hover:text-white"}`,
                                        children: "Monthly billing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsAnnual(true),
                                        className: `px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer ${isAnnual ? "bg-[#C6FF36] text-[#050505] font-semibold shadow-[0_0_15px_rgba(198,255,54,0.3)]" : "text-neutral-400 hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Annual billing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] px-1.5 py-0.2 rounded-full ${isAnnual ? "bg-black/20 text-black font-bold" : "bg-[#C6FF36]/20 text-[#C6FF36]"}`,
                                                children: "Save 20%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch",
                        staggerDelay: 0.1,
                        children: plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                className: "flex",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `card-futuristic-interactive relative w-full rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${plan.highlighted ? "bg-[#10110E] border-2 border-[#C6FF36] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(198,255,54,0.15)] -translate-y-2" : "bg-[#10110E]/80 border border-white/10 hover:border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"}`,
                                    children: [
                                        plan.highlighted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C6FF36] text-[#050505] text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_0_15px_#C6FF36] flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: plan.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                !plan.highlighted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-mono text-neutral-400 tracking-wider uppercase block mb-2",
                                                    children: plan.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl sm:text-2xl font-bold text-white mb-2",
                                                    children: plan.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-neutral-400 font-normal leading-relaxed mb-6 min-h-[36px]",
                                                    children: plan.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline gap-2 pb-6 border-b border-white/8 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-4xl sm:text-5xl font-black text-white font-mono tracking-tight",
                                                            children: isAnnual ? plan.priceAnnual : plan.priceMonthly
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-mono text-neutral-400",
                                                            children: plan.period
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-3",
                                                            children: "Included in this plan:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        plan.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-3 text-xs sm:text-sm text-neutral-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlighted ? "bg-[#C6FF36] text-black" : "bg-white/10 text-white"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "w-2.5 h-2.5 stroke-[3]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                                            lineNumber: 182,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: feat
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, feat, true, {
                                                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSelectPlan?.(plan.name),
                                            className: `w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${plan.highlighted ? "btn-primary-neon bg-[#C6FF36] text-[#050505]" : "btn-secondary-glow bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: plan.ctaText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, plan.name, false, {
                                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.2,
                        className: "mt-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#C6FF36] shadow-[0_0_6px_#C6FF36]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        "SOC2 Type II Certified"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#C6FF36] shadow-[0_0_6px_#C6FF36]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        "HIPAA & GDPR Compliant"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#C6FF36] shadow-[0_0_6px_#C6FF36]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        "99.99% Uptime SLA Guaranteed"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pricing/PricingSection.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pricing/PricingSection.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pricing/PricingSection.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pricing/PricingSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pricing/PricingSection.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(PricingSection, "2QFDVvAteQ5l8jMPifNTDKPLaLw=");
_c = PricingSection;
var _c;
__turbopack_context__.k.register(_c, "PricingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/red-hero/RedFlameCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RedFlameCanvas",
    ()=>RedFlameCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simplexNoise.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$green$2d$hero$2f$flameContourData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/green-hero/flameContourData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RedFlameCanvas({ className = "", interactive = true }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000,
        targetX: -1000,
        targetY: -1000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RedFlameCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d", {
                alpha: false
            });
            if (!ctx) return;
            let animId;
            let width = 0;
            let height = 0;
            let dpr = 1;
            const resize = {
                "RedFlameCanvas.useEffect.resize": ()=>{
                    dpr = Math.min(window.devicePixelRatio || 1, 2);
                    width = canvas.parentElement?.clientWidth || window.innerWidth;
                    height = canvas.parentElement?.clientHeight || window.innerHeight;
                    canvas.width = Math.floor(width * dpr);
                    canvas.height = Math.floor(height * dpr);
                    canvas.style.width = `${width}px`;
                    canvas.style.height = `${height}px`;
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.scale(dpr, dpr);
                }
            }["RedFlameCanvas.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            // Mouse tracking for subtle interactive fluid displacement
            const handleMouseMove = {
                "RedFlameCanvas.useEffect.handleMouseMove": (e)=>{
                    if (!interactive) return;
                    const rect = canvas.getBoundingClientRect();
                    mouseRef.current.targetX = e.clientX - rect.left;
                    mouseRef.current.targetY = e.clientY - rect.top;
                }
            }["RedFlameCanvas.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "RedFlameCanvas.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current.targetX = -1000;
                    mouseRef.current.targetY = -1000;
                }
            }["RedFlameCanvas.useEffect.handleMouseLeave"];
            window.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
            window.addEventListener("mouseleave", handleMouseLeave);
            // Liquid blood-red plasma droplets detaching and falling through black void
            const dropletCount = 14;
            const droplets = Array.from({
                length: dropletCount
            }, {
                "RedFlameCanvas.useEffect.droplets": ()=>({
                        x: Math.random() * (width || 1200),
                        y: Math.random() * ((height || 800) * 0.35),
                        vy: 0.55 + Math.random() * 0.95,
                        vx: -(0.15 + Math.random() * 0.3),
                        radius: 1.2 + Math.random() * 1.8,
                        alpha: Math.random() * 0.75 + 0.25,
                        life: Math.random() * 100,
                        maxLife: 75 + Math.random() * 70,
                        seed: Math.random() * 50
                    })
            }["RedFlameCanvas.useEffect.droplets"]);
            let lastTime = performance.now();
            let time = 0;
            // Horizontal scroll accumulators for the 3 parallax layers (px)
            let scroll0 = 0;
            let scroll1 = 0;
            let scroll2 = 0;
            // ═════════════════════════════════════════════════════════════════════════
            // RENDER LOOP (60 FPS COMPOSITING)
            // ═════════════════════════════════════════════════════════════════════════
            const render = {
                "RedFlameCanvas.useEffect.render": (now)=>{
                    const dt = Math.min((now - lastTime) / 1000, 0.1);
                    lastTime = now;
                    time += dt;
                    // Mouse smoothing
                    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
                    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
                    const mX = mouseRef.current.x;
                    const mY = mouseRef.current.y;
                    // ── 1. PURE BLACK VIEWPORT BACKGROUND (#000000) ──
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(0, 0, width, height);
                    // ── 2. SUBTLE CEILING BLOOD-RED ATMOSPHERE GLOW ──
                    const topRadialGlow = ctx.createRadialGradient(width * 0.5 + Math.sin(time * 0.35) * 45, 0, 15, width * 0.5, 0, height * 0.45);
                    topRadialGlow.addColorStop(0, "rgba(255, 26, 0, 0.16)");
                    topRadialGlow.addColorStop(0.35, "rgba(139, 0, 0, 0.09)");
                    topRadialGlow.addColorStop(0.7, "rgba(42, 0, 4, 0.03)");
                    topRadialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
                    ctx.fillStyle = topRadialGlow;
                    ctx.fillRect(0, 0, width, height * 0.48);
                    // Proportional tile width: 2 to 3 hand claw clusters visible across screen
                    const tileWidth = Math.max(880, Math.min(width * 0.82, 1350));
                    // Advance parallax horizontal continuous scrolling (right to left)
                    const speed0 = 18; // px/sec (shadow layer)
                    const speed1 = 32; // px/sec (mid layer)
                    const speed2 = 46; // px/sec (primary foreground flame)
                    scroll0 = (scroll0 + dt * speed0) % tileWidth;
                    scroll1 = (scroll1 + dt * speed1) % tileWidth;
                    scroll2 = (scroll2 + dt * speed2) % tileWidth;
                    // Column step interval across viewport width (every 4-5px for silky 60 FPS)
                    const step = Math.max(4, Math.floor(width / 260));
                    // Helper: Compute flame height y(x) for layer
                    const getLayerY = {
                        "RedFlameCanvas.useEffect.render.getLayerY": (x, layerIndex, scrollOffset, maxReach, baseOffsetU)=>{
                            // Horizontal coordinate in seamless looping tile with fluid wave undulation
                            const rawU = (x + scrollOffset) / tileWidth + baseOffsetU;
                            // Continuous horizontal undulation
                            const waveU = rawU + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplex2D"])(x * 0.0022, time * 0.45 + layerIndex) * 0.032;
                            // Sample base authentic hand claw profile
                            const baseReach = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$green$2d$hero$2f$flameContourData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleHandContour"])(waveU);
                            // Fluid morphing & noise deformation
                            // 1. Slow downward stretching and upward retracting movements
                            const stretch = Math.sin(time * 1.15 + waveU * Math.PI * 5 + layerIndex * 1.7) * 0.085;
                            // 2. Simplex noise displacement per claw finger
                            const noiseReach = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplex2D"])(waveU * 5.2 + layerIndex * 2.1, time * 0.38) * 0.12;
                            // 3. Fluid liquid ripple along torn paper / burning liquid boundary
                            const ripple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simplexNoise$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplex2D"])(x * 0.018 + layerIndex * 30.0, time * 1.45) * 3.5;
                            // 4. Accentuate sharp dripping flame tips
                            const isTip = Math.pow(Math.max(0, baseReach - 0.45) / 0.55, 1.6);
                            const dripPull = Math.sin(time * 0.8 + waveU * 10.0) * 0.075 * isTip;
                            // Combine reach fraction
                            const reach = Math.max(0.1, baseReach * (1.0 + stretch) + noiseReach + dripPull);
                            let y = reach * maxReach + ripple;
                            // Interactive mouse influence: cursor subtly pulls claw tips downward
                            if (mX > 0 && mY > 0 && mY < height * 0.55) {
                                const dist = Math.abs(x - mX);
                                if (dist < 220) {
                                    const pullFactor = (1.0 - dist / 220) * 32.0;
                                    y += pullFactor;
                                }
                            }
                            // Clamp to concentrate across top 20–35% of the screen
                            return Math.min(y, height * 0.48);
                        }
                    }["RedFlameCanvas.useEffect.render.getLayerY"];
                    // ── 3. LAYER 0: DEEP CRIMSON SHADOW FLAMES (#2A0004 -> #5A000A -> #8B0000) ──
                    // Dark crimson background silhouettes creating depth
                    ctx.save();
                    const gradL0 = ctx.createLinearGradient(0, 0, 0, height * 0.3);
                    gradL0.addColorStop(0, "#1F0003");
                    gradL0.addColorStop(0.5, "#420007");
                    gradL0.addColorStop(1, "#6B000C");
                    ctx.fillStyle = gradL0;
                    ctx.globalAlpha = 0.65;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    const maxReach0 = height * 0.26; // Concentrated in top ~26%
                    for(let x = 0; x <= width + step; x += step){
                        const curX = Math.min(x, width);
                        const curY = getLayerY(curX, 0, scroll0, maxReach0, 0.18);
                        ctx.lineTo(curX, curY);
                    }
                    ctx.lineTo(width, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                    // ── 4. LAYER 1: SECONDARY CRIMSON FLAMES (#4A0008 -> #8B0000 -> #CC0E00) ──
                    // Torn paper / liquid spreading mid-ground
                    ctx.save();
                    const gradL1 = ctx.createLinearGradient(0, 0, 0, height * 0.35);
                    gradL1.addColorStop(0, "#280004");
                    gradL1.addColorStop(0.35, "#5E000A");
                    gradL1.addColorStop(0.75, "#8B0000");
                    gradL1.addColorStop(1, "#B80A00");
                    ctx.fillStyle = gradL1;
                    ctx.globalAlpha = 0.88;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    const maxReach1 = height * 0.31; // Concentrated in top ~31%
                    for(let x = 0; x <= width + step; x += step){
                        const curX = Math.min(x, width);
                        const curY = getLayerY(curX, 1, scroll1, maxReach1, 0.52);
                        ctx.lineTo(curX, curY);
                    }
                    ctx.lineTo(width, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                    // ── 5. LAYER 2: PRIMARY FOREGROUND BLOOD-RED FLAMES (#8B0000 -> #FF1A00) ──
                    // Intense blood-red (#FF1A00) with radiant glow along the jagged dripping tips
                    ctx.save();
                    const gradL2 = ctx.createLinearGradient(0, 0, 0, height * 0.38);
                    gradL2.addColorStop(0, "#1A0002");
                    gradL2.addColorStop(0.22, "#3E0006");
                    gradL2.addColorStop(0.55, "#7A000A");
                    gradL2.addColorStop(0.82, "#B80E00");
                    gradL2.addColorStop(1, "#FF1A00"); // Intense blood red
                    ctx.fillStyle = gradL2;
                    // Radiant blood-red highlight glow along the tips
                    ctx.shadowColor = "#FF1A00";
                    ctx.shadowBlur = 18;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    const maxReach2 = height * 0.35; // Concentrated in top 20–35%
                    for(let x = 0; x <= width + step; x += step){
                        const curX = Math.min(x, width);
                        const curY = getLayerY(curX, 2, scroll2, maxReach2, 0.0);
                        ctx.lineTo(curX, curY);
                    }
                    ctx.lineTo(width, 0);
                    ctx.closePath();
                    ctx.fill();
                    // Crisp intense blood-red contour rim along claw tips
                    ctx.strokeStyle = "rgba(255, 26, 0, 0.92)";
                    ctx.lineWidth = 1.4;
                    ctx.stroke();
                    ctx.restore();
                    // ── 6. DETACHED BLOOD-RED LIQUID PLASMA DROPLETS (FALLING & DISSOLVING) ──
                    ctx.save();
                    for(let i = 0; i < droplets.length; i++){
                        const d = droplets[i];
                        d.y += d.vy;
                        d.x += d.vx + Math.sin(time * 1.5 + d.seed) * 0.3;
                        d.life++;
                        if (d.life > d.maxLife || d.y > height * 0.48 || d.x < 0) {
                            d.x = width * 0.05 + Math.random() * width * 0.9;
                            // Spawn near the tips of the claw flames
                            d.y = height * 0.18 + Math.random() * height * 0.14;
                            d.life = 0;
                            d.alpha = Math.random() * 0.75 + 0.25;
                        }
                        const alphaFade = d.alpha * (1 - d.life / d.maxLife);
                        ctx.beginPath();
                        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 26, 0, ${alphaFade})`;
                        ctx.shadowColor = "#FF1A00";
                        ctx.shadowBlur = 8;
                        ctx.fill();
                    }
                    ctx.restore();
                    // ── 7. SEAMLESS GRADIENT FADE TO PURE BLACK NEGATIVE SPACE ──
                    // Ensures the remaining 65–80% of the screen stays predominantly pure black
                    ctx.save();
                    const bottomFade = ctx.createLinearGradient(0, height * 0.35, 0, height * 0.48);
                    bottomFade.addColorStop(0, "rgba(0, 0, 0, 0)");
                    bottomFade.addColorStop(1, "rgba(0, 0, 0, 1)");
                    ctx.fillStyle = bottomFade;
                    ctx.fillRect(0, height * 0.35, width, height * 0.13);
                    ctx.restore();
                    animId = requestAnimationFrame(render);
                }
            }["RedFlameCanvas.useEffect.render"];
            animId = requestAnimationFrame(render);
            return ({
                "RedFlameCanvas.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["RedFlameCanvas.useEffect"];
        }
    }["RedFlameCanvas.useEffect"], [
        interactive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-full overflow-hidden bg-[#000000] select-none ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full pointer-events-none block z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/red-hero/RedFlameCanvas.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-10 opacity-10",
                style: {
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 26, 0, 0.04) 2px, rgba(255, 26, 0, 0.04) 4px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/red-hero/RedFlameCanvas.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/red-hero/RedFlameCanvas.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/red-hero/RedFlameCanvas.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(RedFlameCanvas, "Qimi1+XRgPM/xwIviNOompZCtaA=");
_c = RedFlameCanvas;
var _c;
__turbopack_context__.k.register(_c, "RedFlameCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/statement/CinematicGreenSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicGreenSection",
    ()=>CinematicGreenSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$CinematicGreenBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/CinematicGreenBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CinematicGreenSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    // Layered parallax transformations
    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.15,
        0.4,
        0.65,
        0.85
    ], [
        0,
        1,
        1,
        0
    ]);
    const textScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.15,
        0.5,
        0.85
    ], [
        0.92,
        1,
        0.95
    ]);
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.15,
        0.5,
        0.85
    ], [
        30,
        0,
        -30
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative w-full min-h-[110vh] sm:min-h-[125vh] flex flex-col justify-between overflow-hidden bg-[#030704] z-20 border-t border-b border-white/10 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$CinematicGreenBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CinematicGreenBackground"], {
                className: "absolute inset-0 w-full h-full",
                showEmblem: true
            }, void 0, false, {
                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30 w-full flex flex-col justify-between min-h-screen py-16 sm:py-24 px-6 sm:px-12 lg:px-20 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#063D20]/60 border border-[#00FF85]/30 text-xs font-mono text-[#00FF85] backdrop-blur-md shadow-[0_0_15px_rgba(0,255,133,0.15)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-[#00FF85] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "03 // AUTONOMOUS MATRIX"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-4 font-mono text-xs text-[#00FF85]/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "GPU KINETIC SHADER"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SHARP SILHOUETTE ENGINE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: textOpacity,
                            scale: textScale,
                            y: textY
                        },
                        className: "w-full max-w-4xl mx-auto text-center my-auto py-12 flex flex-col items-center pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#00FF85]/20 text-[11px] font-mono text-neutral-300 mb-6 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-3 h-3 text-[#00FF85]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-[0.25em] uppercase text-[#00FF85]",
                                        children: "BEYOND DETERMINISTIC WORKFLOWS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-syne font-extrabold uppercase text-white tracking-tight leading-[1.05] text-3xl sm:text-5xl md:text-6xl lg:text-[72px] mb-6",
                                style: {
                                    textShadow: "0 0 40px rgba(0, 255, 133, 0.35)"
                                },
                                children: [
                                    "ORGANIC VELOCITY.",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#00FF85] block sm:inline font-serif-italic font-normal",
                                        style: {
                                            fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                                            fontStyle: "italic",
                                            textShadow: "0 0 50px rgba(0, 255, 133, 0.6)"
                                        },
                                        children: "Unbroken flow."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance",
                                children: "Watch the handoffs dissolve into continuous execution. When machines coordinate autonomously, latency approaches zero and operations evolve organically."
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-7xl mx-auto pt-6 border-t border-[#00FF85]/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#00FF85]/80 pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: "w-3.5 h-3.5 text-[#00FF85]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-widest uppercase text-[10px] text-neutral-400",
                                        children: "TELEMETRY CORE // SHADER_FLUID_V4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center flex-wrap justify-center sm:justify-end gap-5 tracking-[0.25em] text-neutral-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#00FF85]",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "TENSION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#00FF85]",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "IMMERSION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#00FF85]",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "IMPACT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#00FF85]",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/statement/CinematicGreenSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(CinematicGreenSection, "sbdvoFrAUklXkBjBufFUgfxzlEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = CinematicGreenSection;
var _c;
__turbopack_context__.k.register(_c, "CinematicGreenSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/statement/ThisWillFeelDifferentSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThisWillFeelDifferentSection",
    ()=>ThisWillFeelDifferentSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThisWillFeelDifferentSection({ onBookConsultation }) {
    _s();
    const [isHoveredBtn, setIsHoveredBtn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Trigger automatically when user passes through the hero into this section
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.3,
        once: false
    });
    // ─── INTERACTIVE 3D HOLOGRAPHIC MOUSE TILT ───
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    };
    const tiltX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseY, [
        -0.5,
        0.5
    ], [
        6,
        -6
    ]), springConfig);
    const tiltY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseX, [
        -0.5,
        0.5
    ], [
        -8,
        8
    ]), springConfig);
    const handleMouseMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };
    const handleMouseLeave = ()=>{
        mouseX.set(0);
        mouseY.set(0);
    };
    // ─── ONE-BY-ONE "APPEARS FROM BACK" 3D LETTER ANIMATION VARIANT ───
    const letterVariants = {
        hidden: {
            opacity: 0,
            scale: 0.12,
            z: -700,
            y: 40,
            filter: "blur(14px)"
        },
        visible: (customDelay)=>({
                opacity: 1,
                scale: 1,
                z: 0,
                y: 0,
                filter: "blur(0px)",
                transition: {
                    delay: customDelay,
                    duration: 0.65,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                }
            })
    };
    const line1Letters = [
        "T",
        "H",
        "I",
        "S",
        " ",
        "W",
        "I",
        "L",
        "L"
    ];
    const line3Letters = [
        "D",
        "I",
        "F",
        "F",
        "E",
        "R",
        "E",
        "N",
        "T"
    ];
    // Equalizer barcode heights for the bottom-left telemetry in neon green
    const equalizerBars = [
        {
            id: 1,
            dur: "0.8s",
            h: "18px"
        },
        {
            id: 2,
            dur: "1.15s",
            h: "28px"
        },
        {
            id: 3,
            dur: "0.7s",
            h: "14px"
        },
        {
            id: 4,
            dur: "1.3s",
            h: "32px"
        },
        {
            id: 5,
            dur: "0.9s",
            h: "22px"
        },
        {
            id: 6,
            dur: "1.2s",
            h: "16px"
        },
        {
            id: 7,
            dur: "0.65s",
            h: "30px"
        },
        {
            id: 8,
            dur: "1.05s",
            h: "20px"
        },
        {
            id: 9,
            dur: "0.75s",
            h: "26px"
        },
        {
            id: 10,
            dur: "1.1s",
            h: "15px"
        },
        {
            id: 11,
            dur: "0.85s",
            h: "27px"
        },
        {
            id: 12,
            dur: "1.0s",
            h: "24px"
        },
        {
            id: 13,
            dur: "0.95s",
            h: "19px"
        },
        {
            id: 14,
            dur: "1.25s",
            h: "31px"
        },
        {
            id: 15,
            dur: "0.7s",
            h: "16px"
        },
        {
            id: 16,
            dur: "1.15s",
            h: "25px"
        },
        {
            id: 17,
            dur: "0.8s",
            h: "21px"
        },
        {
            id: 18,
            dur: "1.35s",
            h: "29px"
        },
        {
            id: 19,
            dur: "0.9s",
            h: "17px"
        },
        {
            id: 20,
            dur: "1.05s",
            h: "23px"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: "relative min-h-screen w-full flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#000000] z-20 border-t border-b border-[#00FF41]/15 select-none",
        style: {
            perspective: "1200px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#000000] pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: isInView ? {
                            opacity: [
                                0.4,
                                0.75,
                                0.4
                            ],
                            scale: [
                                0.85,
                                1.05,
                                0.85
                            ]
                        } : {
                            opacity: 0.1,
                            scale: 0.7
                        },
                        transition: {
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] h-[600px] sm:h-[800px] pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full",
                            style: {
                                background: "radial-gradient(ellipse at center, rgba(0, 255, 65, 0.15) 0%, rgba(0, 59, 32, 0.05) 45%, transparent 75%)",
                                filter: "blur(90px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none opacity-10",
                        style: {
                            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.04) 2px, rgba(0, 255, 65, 0.04) 4px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -15
                },
                animate: isInView ? {
                    opacity: 1,
                    y: 0
                } : {
                    opacity: 0,
                    y: -15
                },
                transition: {
                    duration: 0.6
                },
                className: "relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto mb-2 sm:mb-4 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-7 h-7 sm:w-8 sm:h-8 text-[#00FF41] filter drop-shadow-[0_0_10px_rgba(0,255,65,0.7)] transition-transform duration-300 hover:scale-110",
                                viewBox: "0 0 100 100",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 50 50 C 42 32, 28 16, 14 12 C 20 28, 28 40, 40 48 C 22 46, 8 54, 4 64 C 18 62, 32 70, 42 80 C 46 68, 48 58, 50 50 Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 50 50 C 58 32, 72 16, 86 12 C 80 28, 72 40, 60 48 C 78 46, 92 54, 96 64 C 82 62, 68 70, 58 80 C 54 68, 52 58, 50 50 Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 50 16 L 50 84",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "50",
                                        r: "3",
                                        fill: "#00FF41"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[9px] sm:text-xs uppercase tracking-[0.32em] text-[#00FF41]/90 font-semibold",
                                children: "RELAY // ARCHITECTURE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001A0D]/80 border border-[#00FF41]/30 text-xs font-mono text-neutral-300 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,65,0.15)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse shadow-[0_0_8px_#00FF41]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-neutral-400",
                                    children: "02  // "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00FF41]",
                                    children: "PARADIGM SHIFT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto py-2 sm:py-6 overflow-visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            rotateX: tiltX,
                            rotateY: tiltY,
                            transformPerspective: 1200
                        },
                        className: "relative w-full max-w-4xl flex flex-col items-center justify-center transform-gpu origin-center select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-[0.04em] sm:gap-[0.06em] tracking-tight overflow-visible",
                                children: line1Letters.map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        custom: 0.15 + index * 0.05,
                                        variants: letterVariants,
                                        initial: "hidden",
                                        animate: isInView ? "visible" : "hidden",
                                        className: "inline-block font-syne font-black uppercase text-[#00FF41] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[98px] leading-none filter drop-shadow-[0_0_30px_rgba(0,255,65,0.7)] drop-shadow-[0_0_60px_rgba(0,255,65,0.3)]",
                                        children: char === " " ? "\u00A0" : char
                                    }, `l1-${index}`, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                custom: 0.15 + line1Letters.length * 0.05 + 0.08,
                                variants: {
                                    hidden: {
                                        opacity: 0,
                                        scale: 0.16,
                                        z: -750,
                                        y: 35,
                                        filter: "blur(16px)"
                                    },
                                    visible: (delay)=>({
                                            opacity: 1,
                                            scale: 1,
                                            z: 0,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: {
                                                delay,
                                                duration: 0.85,
                                                ease: [
                                                    0.16,
                                                    1,
                                                    0.3,
                                                    1
                                                ]
                                            }
                                        })
                                },
                                initial: "hidden",
                                animate: isInView ? "visible" : "hidden",
                                className: "relative w-full max-w-2xl sm:max-w-3xl my-[-1.2rem] sm:my-[-2.2rem] md:my-[-3.2rem] z-20 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-[4680/1000] max-h-[26vh] select-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                        src: "/line_feel_clean.png",
                                        alt: "FEEL",
                                        fill: true,
                                        priority: true,
                                        className: "object-contain filter drop-shadow-[0_0_35px_rgba(57,255,20,0.85)] drop-shadow-[0_0_75px_rgba(0,255,65,0.45)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-[0.04em] sm:gap-[0.06em] tracking-tight overflow-visible",
                                children: line3Letters.map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        custom: 0.15 + line1Letters.length * 0.05 + 0.35 + index * 0.05,
                                        variants: letterVariants,
                                        initial: "hidden",
                                        animate: isInView ? "visible" : "hidden",
                                        className: "inline-block font-syne font-black uppercase text-[#00FF41] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[98px] leading-none filter drop-shadow-[0_0_30px_rgba(0,255,65,0.7)] drop-shadow-[0_0_60px_rgba(0,255,65,0.3)]",
                                        children: char
                                    }, `l3-${index}`, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: isInView ? {
                                    opacity: 0.85
                                } : {
                                    opacity: 0
                                },
                                transition: {
                                    delay: 0.5,
                                    duration: 1.2
                                },
                                className: "absolute inset-0 pointer-events-none mix-blend-screen",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full",
                                    style: {
                                        background: "radial-gradient(circle at center, rgba(57, 255, 20, 0.35) 0%, rgba(0, 255, 65, 0.1) 40%, transparent 70%)",
                                        filter: "blur(40px)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: isInView ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 15
                        },
                        transition: {
                            delay: 0.15 + line1Letters.length * 0.05 + 0.35 + line3Letters.length * 0.05 + 0.15,
                            duration: 0.6
                        },
                        className: "mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 z-20 pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBookConsultation,
                            onMouseEnter: ()=>setIsHoveredBtn(true),
                            onMouseLeave: ()=>setIsHoveredBtn(false),
                            className: "group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#001A0D]/90 hover:bg-[#002B18] border border-[#00FF41]/40 hover:border-[#00FF41] text-xs font-mono uppercase tracking-[0.2em] text-[#00FF41] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.45)] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 text-[#39FF14]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "BOOK A CONSULTATION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 15
                },
                animate: isInView ? {
                    opacity: 1,
                    y: 0
                } : {
                    opacity: 0,
                    y: 15
                },
                transition: {
                    duration: 0.6,
                    delay: 0.2
                },
                className: "relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono uppercase select-none pointer-events-none pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-[2px] sm:gap-[2.5px] h-5",
                        children: equalizerBars.map((bar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-[2px] bg-[#00FF41] rounded-full shadow-[0_0_6px_rgba(0,255,65,0.85)]",
                                style: {
                                    height: bar.h,
                                    animation: `greenEqualizerPulse ${bar.dur} ease-in-out infinite alternate`
                                }
                            }, bar.id, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 sm:gap-8 md:gap-12 text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-white/90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-2.5 h-2.5 text-[#00FF41]/80 inline-block flex-shrink-0",
                                viewBox: "0 0 10 10",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "1",
                                        x2: "5",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "1",
                                        y1: "5",
                                        x2: "9",
                                        y2: "5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tracking-[0.32em] text-white",
                                children: "TENSION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-2.5 h-2.5 text-[#00FF41]/80 inline-block flex-shrink-0",
                                viewBox: "0 0 10 10",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "1",
                                        x2: "5",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "1",
                                        y1: "5",
                                        x2: "9",
                                        y2: "5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tracking-[0.32em] text-white",
                                children: "IMMERSION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-2.5 h-2.5 text-[#00FF41]/80 inline-block flex-shrink-0",
                                viewBox: "0 0 10 10",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "1",
                                        x2: "5",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "1",
                                        y1: "5",
                                        x2: "9",
                                        y2: "5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tracking-[0.32em] text-white",
                                children: "IMPACT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-2.5 h-2.5 text-[#00FF41]/80 inline-block flex-shrink-0",
                                viewBox: "0 0 10 10",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "1",
                                        x2: "5",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "1",
                                        y1: "5",
                                        x2: "9",
                                        y2: "5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 px-3 py-1.5 rounded bg-black/85 border border-[#00FF41]/30 shadow-[0_0_12px_rgba(0,0,0,0.9)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-[#00FF41] shadow-[0_0_8px_#00FF41] animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-white font-mono tracking-wider font-semibold",
                                    children: [
                                        "ONLINE ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#00FF41]",
                                            children: "• Let's Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                            lineNumber: 398,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes greenEqualizerPulse {
          0% {
            transform: scaleY(0.25);
            opacity: 0.5;
          }
          100% {
            transform: scaleY(1.0);
            opacity: 1.0;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/statement/ThisWillFeelDifferentSection.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(ThisWillFeelDifferentSection, "env3c1kGXCK3ZXUdG72t7SYr14U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = ThisWillFeelDifferentSection;
var _c;
__turbopack_context__.k.register(_c, "ThisWillFeelDifferentSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/testimonials/TestimonialsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
"use client";
;
;
function TestimonialsSection() {
    const testimonials = [
        {
            quote: "We went from spending Monday mornings reconciling failed multi-app webhooks to literally never thinking about handoffs. Relay handles our entire fintech provisioning pipeline silently.",
            name: "Marcus Vance",
            title: "VP of Engineering",
            company: "Ramp",
            metric: "4,200+ runs/day"
        },
        {
            quote: "The human-in-the-loop primitive is what makes Relay special. It only pings our account executives when contract value crosses $50k or an anomaly occurs. The rest just executes.",
            name: "Elena Rostova",
            title: "Head of Revenue Operations",
            company: "Retool",
            metric: "12 hours saved/wk"
        },
        {
            quote: "The 90-day execution replay alone saved us during our last SOC2 audit. Being able to inspect exact cryptographic payloads and diffs for any run gave compliance complete confidence.",
            name: "Julian Thorne",
            title: "Principal Infrastructure Architect",
            company: "Vercel",
            metric: "99.99% uptime"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "customers",
        className: "relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[300px] bg-[radial-gradient(ellipse,rgba(198,255,54,0.04),transparent_70%)] blur-[100px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        className: "max-w-2xl mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono text-[#C6FF36] mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "PROOF // CUSTOMER VOICES"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4",
                                children: [
                                    "Built for operators who",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-serif-italic font-normal text-[#C6FF36]",
                                        children: "care about details."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed",
                                children: "Powering mission-critical operations for high-growth tech companies."
                            }, void 0, false, {
                                fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",
                        staggerDelay: 0.1,
                        children: testimonials.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-futuristic-interactive group relative rounded-3xl bg-[#10110E]/80 border border-white/8 hover:border-[#C6FF36]/40 p-8 flex flex-col justify-between h-full cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-8 pb-4 border-b border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold text-white tracking-wide",
                                                            children: t.company
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-mono text-[#C6FF36] px-2 py-0.5 rounded bg-[#C6FF36]/10 border border-[#C6FF36]/30 shadow-[0_0_8px_rgba(198,255,54,0.15)]",
                                                            children: t.metric
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-neutral-300 font-normal leading-relaxed mb-8",
                                                    children: [
                                                        "“",
                                                        t.quote,
                                                        "”"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-white",
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-neutral-500 font-mono mt-0.5",
                                                    children: [
                                                        t.title,
                                                        ", ",
                                                        t.company
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, t.name, false, {
                                fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/testimonials/TestimonialsSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/workflow/WorkflowSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowSection",
    ()=>WorkflowSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WorkflowSection() {
    _s();
    const [selectedScenario, setSelectedScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeStepIndex, setActiveStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3); // fully executed by default
    const scenarios = [
        {
            id: "chargeback",
            title: "Invoice & Chargeback Resolution",
            triggerName: "Stripe Dispute Created",
            triggerParam: "Amount: $4,200 (Risk Score: 78)",
            conditionName: "Is Customer Tier VIP?",
            branchTrueName: "Route to Concierge Ops",
            branchFalseName: "Automated Dispute Filing",
            actionName: "Ping Sarah on Slack & Pause Subscription in Postgres"
        },
        {
            id: "onboarding",
            title: "Enterprise Tenant Provisioning",
            triggerName: "Contract Signed via HubSpot",
            triggerParam: "Plan: Enterprise ($60k ARR)",
            conditionName: "Dedicated VPC Required?",
            branchTrueName: "Spin up AWS RDS + VPC",
            branchFalseName: "Assign Shared Cluster",
            actionName: "Generate SAML SSO + Invite Org Admin via Slack"
        },
        {
            id: "incident",
            title: "SOC2 Security Incident Escalate",
            triggerName: "GitHub Token Exposed in PR",
            triggerParam: "Severity: Critical (prod-db)",
            conditionName: "Token Active in Production?",
            branchTrueName: "Immediate Revocation",
            branchFalseName: "Warn Author & Close PR",
            actionName: "Revoke AWS IAM Key & Page Security Lead on Call"
        }
    ];
    const current = scenarios[selectedScenario];
    const handleSimulateRun = ()=>{
        setIsRunning(true);
        setActiveStepIndex(0);
        setTimeout(()=>setActiveStepIndex(1), 600);
        setTimeout(()=>setActiveStepIndex(2), 1400);
        setTimeout(()=>{
            setActiveStepIndex(3);
            setIsRunning(false);
        }, 2200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "workflow",
        className: "relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(198,255,54,0.08),transparent_70%)] blur-[120px] animate-pulse-glow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid-pattern opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10110E] border border-white/10 text-xs font-mono text-[#C6FF36] mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "CANVAS ARCHITECTURE // LIVE SIMULATOR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4",
                                        children: [
                                            "Automate the",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif-italic font-normal text-[#C6FF36]",
                                                children: "messy middle."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg text-[#888888] font-normal leading-relaxed max-w-2xl",
                                        children: "Real workflows have human exceptions, conditional dead-ends, and multi-app handoffs. Relay orchestrates every branch without dropping state."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#10110E] border border-white/10 self-start md:self-auto shadow-lg",
                                children: scenarios.map((sc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedScenario(idx);
                                            setActiveStepIndex(3);
                                        },
                                        className: `px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${selectedScenario === idx ? "bg-[#C6FF36] text-[#050505] font-semibold shadow-[0_0_18px_rgba(198,255,54,0.4)] scale-105" : "text-neutral-400 hover:text-white hover:bg-white/5"}`,
                                        children: sc.title
                                    }, sc.id, false, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.15,
                        className: "relative rounded-3xl bg-[#10110E]/90 border border-white/10 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_35px_rgba(198,255,54,0.03)] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0a0b09]/80 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono text-neutral-300 font-semibold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full bg-[#C6FF36] animate-pulse shadow-[0_0_8px_#C6FF36]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 17
                                                    }, this),
                                                    current.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-600 font-mono text-xs",
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono text-neutral-400",
                                                children: "Environment: Production (us-east-1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSimulateRun,
                                            disabled: isRunning,
                                            className: "btn-primary-neon inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6FF36] text-[#050505] text-xs font-mono font-semibold transition-all duration-200 disabled:opacity-50 cursor-pointer",
                                            children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "w-3.5 h-3.5 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Executing step ",
                                                            activeStepIndex + 1,
                                                            "..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-3.5 h-3.5 fill-current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Simulate Test Run"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 sm:p-12 relative min-h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(198,255,54,0.02),transparent_70%)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute inset-0 w-full h-full pointer-events-none z-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                    id: "wirePulseFilter",
                                                    x: "-20%",
                                                    y: "-20%",
                                                    width: "140%",
                                                    height: "140%",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                            stdDeviation: "3",
                                                            result: "blur"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                    in: "blur"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                    in: "SourceGraphic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "220",
                                                y1: "120",
                                                x2: "380",
                                                y2: "120",
                                                stroke: activeStepIndex >= 1 ? "#C6FF36" : "rgba(255,255,255,0.15)",
                                                strokeWidth: "2",
                                                strokeDasharray: activeStepIndex >= 1 ? "none" : "4 4",
                                                filter: activeStepIndex >= 1 ? "url(#wirePulseFilter)" : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            activeStepIndex >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: "3.5",
                                                        fill: "#C6FF36",
                                                        filter: "url(#wirePulseFilter)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                            path: "M 220 120 L 380 120",
                                                            dur: "1.8s",
                                                            repeatCount: "indefinite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: "1.5",
                                                        fill: "#FFFFFF",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                            path: "M 220 120 L 380 120",
                                                            dur: "1.8s",
                                                            repeatCount: "indefinite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 580 120 C 640 120, 640 60, 710 60",
                                                fill: "none",
                                                stroke: activeStepIndex >= 2 ? "#C6FF36" : "rgba(255,255,255,0.15)",
                                                strokeWidth: "2",
                                                filter: activeStepIndex >= 2 ? "url(#wirePulseFilter)" : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            activeStepIndex >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: "3.5",
                                                        fill: "#C6FF36",
                                                        filter: "url(#wirePulseFilter)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                            path: "M 580 120 C 640 120, 640 60, 710 60",
                                                            dur: "2.0s",
                                                            repeatCount: "indefinite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: "1.5",
                                                        fill: "#FFFFFF",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                            path: "M 580 120 C 640 120, 640 60, 710 60",
                                                            dur: "2.0s",
                                                            repeatCount: "indefinite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 580 120 C 640 120, 640 220, 710 220",
                                                fill: "none",
                                                stroke: "rgba(255,255,255,0.1)",
                                                strokeWidth: "1.5",
                                                strokeDasharray: "4 4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "910",
                                                y1: "60",
                                                x2: "970",
                                                y2: "60",
                                                stroke: activeStepIndex >= 3 ? "#C6FF36" : "rgba(255,255,255,0.15)",
                                                strokeWidth: "2",
                                                filter: activeStepIndex >= 3 ? "url(#wirePulseFilter)" : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            activeStepIndex >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: "3.5",
                                                        fill: "#C6FF36",
                                                        filter: "url(#wirePulseFilter)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                            path: "M 910 60 L 970 60",
                                                            dur: "1.4s",
                                                            repeatCount: "indefinite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: "1.5",
                                                        fill: "#FFFFFF",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                            path: "M 910 60 L 970 60",
                                                            dur: "1.4s",
                                                            repeatCount: "indefinite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `card-futuristic-interactive p-5 rounded-2xl bg-[#161814] border transition-all duration-300 w-full lg:w-[240px] shadow-xl cursor-pointer ${activeStepIndex >= 0 ? "border-[#C6FF36] shadow-[0_0_25px_rgba(198,255,54,0.2)]" : "border-white/10 opacity-60"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono uppercase tracking-wider text-[#C6FF36] bg-[#C6FF36]/10 px-2 py-0.5 rounded border border-[#C6FF36]/30",
                                                                children: "STEP 01 // TRIGGER"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: `w-4 h-4 transition-colors ${activeStepIndex >= 0 ? "text-[#C6FF36] drop-shadow-[0_0_6px_#C6FF36]" : "text-neutral-600"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: current.triggerName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-mono text-neutral-400 mt-1.5",
                                                        children: current.triggerParam
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Source: Webhook"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#C6FF36]",
                                                                children: "12ms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `card-futuristic-interactive p-5 rounded-2xl bg-[#161814] border transition-all duration-300 w-full lg:w-[250px] shadow-xl cursor-pointer ${activeStepIndex >= 1 ? "border-[#C6FF36] shadow-[0_0_25px_rgba(198,255,54,0.2)]" : "border-white/10 opacity-60"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30",
                                                                children: "STEP 02 // LOGIC"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: `w-4 h-4 transition-colors ${activeStepIndex >= 1 ? "text-[#C6FF36] drop-shadow-[0_0_6px_#C6FF36]" : "text-neutral-600"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: current.conditionName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex flex-col gap-1.5 text-xs font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 rounded bg-[#C6FF36]/15 text-[#C6FF36] border border-[#C6FF36]/40 flex items-center justify-between shadow-[0_0_8px_rgba(198,255,54,0.15)]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "BRANCH TRUE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "✓ Matched"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 rounded bg-white/5 text-neutral-500 border border-white/5",
                                                                children: "BRANCH FALSE (Bypassed)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-5 w-full lg:w-[320px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `card-futuristic-interactive p-4 rounded-2xl bg-[#161814] border transition-all duration-300 cursor-pointer ${activeStepIndex >= 2 ? "border-[#C6FF36] shadow-[0_0_25px_rgba(198,255,54,0.2)]" : "border-white/10 opacity-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-mono uppercase text-[#C6FF36] bg-[#C6FF36]/10 px-2 py-0.5 rounded border border-[#C6FF36]/20",
                                                                        children: "BRANCH 1 // HUMAN GATE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 316,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full bg-[#C6FF36] animate-pulse shadow-[0_0_8px_#C6FF36]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "text-xs font-semibold text-white",
                                                                children: current.branchTrueName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-neutral-400 mt-1",
                                                                children: "Intervention required only if threshold > 90%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card-futuristic-interactive p-3 rounded-xl bg-[#10110E] border border-white/5 opacity-40 cursor-default",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-[10px] font-mono text-neutral-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "BRANCH 2 // AUTOMATED"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Bypassed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-neutral-400 font-medium mt-1",
                                                                children: current.branchFalseName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `card-futuristic-interactive p-4 rounded-2xl bg-[#161814] border transition-all duration-300 cursor-pointer ${activeStepIndex >= 3 ? "border-[#C6FF36] shadow-[0_0_30px_rgba(198,255,54,0.25)]" : "border-white/10 opacity-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40",
                                                                        children: "STEP 03 // DISPATCH ACTIONS"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 343,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: `w-4 h-4 ${activeStepIndex >= 3 ? "text-[#C6FF36] drop-shadow-[0_0_8px_#C6FF36]" : "text-neutral-600"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 346,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "text-xs font-semibold text-white",
                                                                children: current.actionName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-center gap-2 text-[10px] font-mono text-neutral-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#C6FF36]",
                                                                        children: "State: Committing to Postgres"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 350,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "• 4ms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                        lineNumber: 351,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-t border-white/8 bg-[#0d0e0b] flex flex-wrap items-center justify-between gap-4 text-xs font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5 text-neutral-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full bg-[#C6FF36] animate-pulse shadow-[0_0_8px_#C6FF36]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 17
                                                    }, this),
                                                    isRunning ? "Simulating execution steps..." : "Last execution completed cleanly"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-600",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-400",
                                                children: "Exit code: 0 (OK)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-neutral-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Runs remaining this billing cycle: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white",
                                                        children: "49,820"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 56
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 371,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#product",
                                                className: "text-[#C6FF36] hover:underline cursor-pointer",
                                                children: "View Full Audit Replay →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/workflow/WorkflowSection.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(WorkflowSection, "DZDODQbNSCbNk0FpGdyYgFtsD5w=");
_c = WorkflowSection;
var _c;
__turbopack_context__.k.register(_c, "WorkflowSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_1sh8i-0ff_v43._.js.map