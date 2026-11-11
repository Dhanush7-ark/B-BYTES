"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GothicCinematicSequence (Scroll-Driven Animation Engine)
 * 
 * Premium dark cinematic, gothic-style scroll-scrubbed experience.
 * Converted to project palette: Deep Emerald, Cyber Neon Green (#B2D234, #C5EB2A, #1B2608),
 * solid black (#030303), with ultra-thin geometric lines and gothic editorial typography.
 * 
 * Driven by GSAP ScrollTrigger with smooth scrub across 6 distinct phases:
 * Phase 1 (0–15% scroll): Opening, white gothic emblem, thorn illustration & LEGACY calligraphy reveal
 * Phase 2 (15–38% scroll): Geometric grid lines & central photographic collage fragmentation
 * Phase 3 (38–60% scroll): Horizontal typography transformation & radial astrolabe dial
 * Phase 4 (60–80% scroll): Oversized "3D WEB" with muted blue editorial highlight & shifting collage
 * Phase 5 (80–90% scroll): Smooth layered fade into intense full-screen emerald-green atmosphere
 * Phase 6 (90–100% scroll): Final hero scene with mysterious black human silhouette & torn paper edge
 */
export function GothicCinematicSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinStageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [currentPhase, setCurrentPhase] = useState<number>(1);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  // Element Refs for GSAP Targets
  const emblemRef = useRef<SVGSVGElement>(null);
  const thornIllustrationRef = useRef<SVGPathElement>(null);
  const legacyHeadingRef = useRef<HTMLDivElement>(null);
  const greenLightStreakRef = useRef<HTMLDivElement>(null);

  const gridContainerRef = useRef<SVGSVGElement>(null);
  const collageContainerRef = useRef<HTMLDivElement>(null);
  const centerPhotoRef = useRef<HTMLDivElement>(null);
  const fragmentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const transformTextRef = useRef<HTMLDivElement>(null);
  const radialPatternRef = useRef<SVGSVGElement>(null);
  const sideEditorialTextRef = useRef<HTMLDivElement>(null);

  const web3DHeadlineRef = useRef<HTMLDivElement>(null);
  const blueHighlightRef = useRef<HTMLDivElement>(null);

  const greenAtmosphereRef = useRef<HTMLDivElement>(null);
  const finalHeroSceneRef = useRef<HTMLDivElement>(null);
  const silhouetteRef = useRef<SVGSVGElement>(null);
  const tornPaperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── INITIAL ELEMENT STATES ───
      gsap.set(emblemRef.current, { opacity: 0.9, scale: 1, rotate: 0 });
      if (thornIllustrationRef.current) {
        gsap.set(thornIllustrationRef.current, {
          opacity: 0.85,
        });
      }
      gsap.set(legacyHeadingRef.current, { opacity: 1, scale: 1, y: 0 });
      gsap.set(greenLightStreakRef.current, { opacity: 0.8, scaleX: 1 });

      gsap.set(gridContainerRef.current, { opacity: 0 });
      gsap.set(collageContainerRef.current, { opacity: 0 });
      gsap.set(centerPhotoRef.current, { opacity: 0, scale: 0.5, rotate: -3 });
      fragmentRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, scale: 0.6 });
      });

      gsap.set(transformTextRef.current, { opacity: 0, x: -140 });
      gsap.set(radialPatternRef.current, { opacity: 0, rotate: -60, scale: 0.6 });
      gsap.set(sideEditorialTextRef.current, { opacity: 0, x: 40 });

      gsap.set(web3DHeadlineRef.current, { opacity: 0, y: 40 });
      gsap.set(blueHighlightRef.current, { opacity: 0, scaleX: 0 });

      gsap.set(greenAtmosphereRef.current, { opacity: 0 });
      gsap.set(finalHeroSceneRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(silhouetteRef.current, { opacity: 0, y: 45, scale: 0.9 });
      gsap.set(tornPaperRef.current, { opacity: 0, y: 70 });

      // ─── PINNED SCROLL-SCRUBBED TIMELINE (TOTAL 20 NORMALIZED UNITS) ───
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=450%", // 4.5 screens of smooth scroll headroom
          pin: pinStageRef.current,
          scrub: 0.85, // Smooth 0.85s fluid follow-through
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            setProgressPercent(Math.round(p * 100));

            if (p < 0.16) setCurrentPhase(1);
            else if (p < 0.38) setCurrentPhase(2);
            else if (p < 0.60) setCurrentPhase(3);
            else if (p < 0.80) setCurrentPhase(4);
            else if (p < 0.90) setCurrentPhase(5);
            else setCurrentPhase(6);
          },
        },
      });

      timelineRef.current = tl;

      // ──────────────────────────────────────────────
      // PHASE 1 — OPENING (Scroll Progress 0% to 15%)
      // ──────────────────────────────────────────────
      tl.to(
        emblemRef.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        0.1
      );

      if (thornIllustrationRef.current) {
        tl.to(
          thornIllustrationRef.current,
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power2.inOut",
          },
          0.3
        );
      }

      tl.to(
        legacyHeadingRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        0.5
      );

      tl.to(
        greenLightStreakRef.current,
        {
          opacity: 0.75,
          scaleX: 1.25,
          duration: 2.0,
          ease: "power2.inOut",
        },
        0.4
      );

      // ──────────────────────────────────────────────
      // PHASE 2 — CENTRAL IMAGE REVEAL (Scroll Progress 15% to 38%)
      // ──────────────────────────────────────────────
      tl.to(
        gridContainerRef.current,
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        3.0
      );

      tl.to(
        collageContainerRef.current,
        {
          opacity: 1,
          duration: 0.9,
        },
        3.2
      );

      tl.to(
        centerPhotoRef.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.6,
          ease: "power3.out",
        },
        3.3
      );

      // Animate multiple photographic fragments appearing & clipping
      fragmentRefs.current.forEach((el, idx) => {
        if (!el) return;
        const targetOffsets = [
          { x: -140, y: -90, r: -4 },
          { x: 150, y: -80, r: 5 },
          { x: -160, y: 95, r: 3 },
          { x: 145, y: 100, r: -5 },
          { x: 0, y: -130, r: 0 },
        ];
        const offset = targetOffsets[idx % targetOffsets.length];

        tl.to(
          el,
          {
            opacity: 0.92,
            scale: 1,
            x: offset.x,
            y: offset.y,
            rotate: offset.r,
            duration: 1.5,
            ease: "power3.out",
          },
          3.6 + idx * 0.22
        );
      });

      // Keep LEGACY visible behind the images
      tl.to(
        legacyHeadingRef.current,
        {
          opacity: 0.25,
          scale: 1.08,
          duration: 1.8,
          ease: "power2.out",
        },
        3.6
      );

      // ──────────────────────────────────────────────
      // PHASE 3 — TYPOGRAPHY TRANSFORMATION (Scroll Progress 38% to 60%)
      // ──────────────────────────────────────────────
      tl.to(
        legacyHeadingRef.current,
        {
          opacity: 0,
          y: -35,
          duration: 1.0,
          ease: "power2.in",
        },
        7.0
      );

      tl.to(
        transformTextRef.current,
        {
          opacity: 1,
          x: 45,
          duration: 3.2,
          ease: "power1.inOut",
        },
        7.2
      );

      tl.to(
        radialPatternRef.current,
        {
          opacity: 0.7,
          rotate: 75,
          scale: 1,
          duration: 3.2,
          ease: "power2.out",
        },
        7.2
      );

      tl.to(
        sideEditorialTextRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        7.6
      );

      // Fragments dynamically shift on scroll
      fragmentRefs.current.forEach((el, idx) => {
        if (!el) return;
        tl.to(
          el,
          {
            rotate: idx % 2 === 0 ? 8 : -8,
            scale: 1.05,
            duration: 2.2,
            ease: "sine.inOut",
          },
          8.2
        );
      });

      // ──────────────────────────────────────────────
      // PHASE 4 — 3D WEB TITLE (Scroll Progress 60% to 80%)
      // ──────────────────────────────────────────────
      tl.to(
        transformTextRef.current,
        {
          opacity: 0,
          y: -40,
          duration: 0.8,
        },
        11.0
      );

      tl.to(
        web3DHeadlineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        11.4
      );

      // Muted blue rectangular highlight behind the central part of the lettering
      tl.to(
        blueHighlightRef.current,
        {
          opacity: 0.9,
          scaleX: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        11.8
      );

      // Central collage zooms and shifts
      if (centerPhotoRef.current) {
        tl.to(
          centerPhotoRef.current,
          {
            scale: 1.15,
            y: -18,
            duration: 3.5,
            ease: "sine.inOut",
          },
          12.0
        );
      }

      // ──────────────────────────────────────────────
      // PHASE 5 — DRAMATIC BACKGROUND TRANSITION (Scroll Progress 80% to 90%)
      // ──────────────────────────────────────────────
      tl.to(
        [
          gridContainerRef.current,
          collageContainerRef.current,
          web3DHeadlineRef.current,
          blueHighlightRef.current,
          radialPatternRef.current,
          sideEditorialTextRef.current,
        ],
        {
          opacity: 0,
          scale: 0.92,
          duration: 1.2,
          ease: "power3.inOut",
        },
        16.0
      );

      tl.to(
        greenAtmosphereRef.current,
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        16.2
      );

      // ──────────────────────────────────────────────
      // PHASE 6 — FINAL HERO SCENE (Scroll Progress 90% to 100%)
      // ──────────────────────────────────────────────
      tl.to(
        finalHeroSceneRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        },
        17.2
      );

      tl.to(
        silhouetteRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
        },
        17.4
      );

      tl.to(
        tornPaperRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        17.6
      );

      // Subtle camera zoom towards silhouette at peak scroll
      tl.to(
        finalHeroSceneRef.current,
        {
          scale: 1.06,
          duration: 2.2,
          ease: "sine.out",
        },
        18.0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToPhase = (phaseNum: number) => {
    if (!containerRef.current) return;
    const progressTargets = [0, 0.22, 0.45, 0.68, 0.84, 0.96];
    const targetP = progressTargets[phaseNum - 1];

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollDistance = window.innerHeight * 4.5;
    const targetScrollY = containerTop + targetP * totalScrollDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#030303] select-none"
    >
      {/* ─── PINNED 100VH STAGE (CONTROLLED BY SCROLLTRIGGER) ─── */}
      <div
        ref={pinStageRef}
        className="relative w-full h-[100vh] min-h-[680px] overflow-hidden bg-[#030303] text-[#e5e5e5] border-t border-b border-[#B2D234]/20"
        style={{ perspective: "1200px" }}
      >
        {/* ─── PHASE 5 & 6: DRAMATIC FULL-SCREEN DEEP EMERALD ATMOSPHERE ─── */}
        <div
          ref={greenAtmosphereRef}
          className="absolute inset-0 pointer-events-none z-0 opacity-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #1B2608 0%, #0E1403 45%, #010A05 75%, #030303 100%)",
          }}
        >
          {/* Volumetric Emerald Fog */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197, 235, 42,0.18),transparent_65%)] blur-[90px]" />
        </div>

        {/* ─── PHASE 2 & 4: GEOMETRIC TECHNICAL GRID (NO IMAGES / NO VIDEOS NEEDED) ─── */}
        <svg
          ref={gridContainerRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-0"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gridLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B2D234" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#C5EB2A" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#B2D234" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Horizontal & Vertical Main Axes */}
          <line x1="0" y1="540" x2="1920" y2="540" stroke="url(#gridLineGrad)" strokeWidth="0.75" />
          <line x1="960" y1="0" x2="960" y2="1080" stroke="url(#gridLineGrad)" strokeWidth="0.75" />

          {/* Diagonal Geometric Connections */}
          <line x1="0" y1="0" x2="1920" y2="1080" stroke="#B2D234" strokeOpacity="0.18" strokeWidth="0.5" />
          <line x1="1920" y1="0" x2="0" y2="1080" stroke="#B2D234" strokeOpacity="0.18" strokeWidth="0.5" />
          <line x1="960" y1="540" x2="260" y2="-150" stroke="#B2D234" strokeOpacity="0.22" strokeWidth="0.5" />
          <line x1="960" y1="540" x2="1660" y2="-150" stroke="#B2D234" strokeOpacity="0.22" strokeWidth="0.5" />
          <line x1="960" y1="540" x2="400" y2="1100" stroke="#B2D234" strokeOpacity="0.22" strokeWidth="0.5" />
          <line x1="960" y1="540" x2="1520" y2="1100" stroke="#B2D234" strokeOpacity="0.22" strokeWidth="0.5" />

          {/* Framing Technical Box */}
          <rect
            x="560"
            y="150"
            width="800"
            height="780"
            stroke="#B2D234"
            strokeOpacity="0.28"
            strokeWidth="0.75"
            strokeDasharray="4 6"
          />

          {/* Central Crosshair & Circle */}
          <circle cx="960" cy="540" r="140" stroke="#C5EB2A" strokeOpacity="0.2" strokeWidth="0.75" />
          <circle cx="960" cy="540" r="4" fill="#B2D234" />
          <circle cx="560" cy="150" r="3" fill="#C5EB2A" />
          <circle cx="1360" cy="150" r="3" fill="#C5EB2A" />
          <circle cx="560" cy="930" r="3" fill="#C5EB2A" />
          <circle cx="1360" cy="930" r="3" fill="#C5EB2A" />

          {/* Technical Coordinate Callouts */}
          <text x="575" y="175" fill="#B2D234" fillOpacity="0.6" fontSize="10" fontFamily="monospace">
            GEO_SYS // SCROLL_DRIVEN // MATRIX
          </text>
          <text x="1220" y="915" fill="#B2D234" fillOpacity="0.6" fontSize="10" fontFamily="monospace">
            PROGRESS: {progressPercent}% // 60_FPS
          </text>
        </svg>

        {/* ─── TOP-LEFT: SMALL WHITE ORNAMENTAL GOTHIC EMBLEM ─── */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-12 z-30 pointer-events-none">
          <svg
            ref={emblemRef}
            className="w-8 h-8 sm:w-10 sm:h-10 text-white filter drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] opacity-0"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Gothic Cross & Filigree Sigil */}
            <path d="M 50 10 L 50 90 M 10 50 L 90 50" />
            <path d="M 50 20 C 40 35, 35 40, 20 50 C 35 60, 40 65, 50 80 C 60 65, 65 60, 80 50 C 65 40, 60 35, 50 20 Z" fill="white" fillOpacity="0.15" />
            <circle cx="50" cy="50" r="16" stroke="white" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="5" fill="white" />
            <path d="M 45 10 L 55 10 M 45 90 L 55 90 M 10 45 L 10 55 M 90 45 L 90 55" />
          </svg>
        </div>

        {/* ─── PHASE 1: INTRICATE THORN-LIKE ORNAMENTAL ILLUSTRATION & LEGACY CALLIGRAPHY ─── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
          {/* Intricate Cyber-Thorn Bramble Illustration */}
          <div className="w-[300px] sm:w-[500px] md:w-[650px] h-[90px] mb-[-10px] sm:mb-[-15px]">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 650 90" fill="none">
              <path
                ref={thornIllustrationRef}
                d="M 50 45 C 120 15, 180 80, 240 30 C 270 5, 300 65, 325 45 C 350 25, 380 85, 410 60 C 470 10, 530 75, 600 45 M 160 38 C 170 15, 190 20, 200 45 M 290 35 C 305 10, 325 15, 335 40 M 440 50 C 460 20, 475 25, 490 55 M 100 40 L 90 20 M 230 45 L 245 20 M 370 45 L 360 15 M 540 45 L 555 20"
                stroke="#C5EB2A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="filter drop-shadow-[0_0_12px_rgba(197, 235, 42,0.85)]"
              />
            </svg>
          </div>

          {/* Large Handwritten Gothic Calligraphy Headline: LEGACY */}
          <div
            ref={legacyHeadingRef}
            className="relative text-center px-4 opacity-0"
          >
            {/* Subtle Horizontal Green Light Streak Behind Headline */}
            <div
              ref={greenLightStreakRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[900px] h-3 bg-gradient-to-r from-transparent via-[#B2D234]/40 to-transparent blur-md pointer-events-none opacity-0"
            />

            <h1
              className="font-syne font-black uppercase text-[#B2D234] tracking-tight leading-none text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[170px]"
              style={{
                textShadow:
                  "0 0 35px rgba(178, 210, 52, 0.75), 0 0 80px rgba(197, 235, 42, 0.4), 0 0 120px rgba(6, 61, 32, 0.5)",
                letterSpacing: "-0.04em",
              }}
            >
              LEGACY
            </h1>
          </div>
        </div>

        {/* ─── PHASE 2 & 4: CENTRAL PHOTOGRAPHIC COLLAGE (PURE VECTOR / HTML5 MASKED FRAGMENTS) ─── */}
        <div
          ref={collageContainerRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-15 opacity-0"
        >
          <div className="relative w-[340px] sm:w-[460px] md:w-[540px] h-[280px] sm:h-[360px] flex items-center justify-center">
            {/* Central Main Editorial Panel */}
            <div
              ref={centerPhotoRef}
              className="relative w-[240px] sm:w-[320px] h-[300px] sm:h-[400px] bg-[#0E1403] border border-[#B2D234]/40 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.95)] opacity-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 92%, 88% 100%, 0 100%)",
              }}
            >
              {/* High-Contrast Cybernetic Duotone Art */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2608] via-[#021A0A] to-[#000000]" />
              <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 300 400" fill="none">
                <path d="M 0 50 L 300 250 M 0 200 L 300 400 M 50 0 L 250 400" stroke="#C5EB2A" strokeWidth="0.75" />
                <circle cx="150" cy="180" r="60" stroke="#B2D234" strokeWidth="1.2" strokeDasharray="3 3" />
                <circle cx="150" cy="180" r="35" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
                <rect x="70" y="90" width="160" height="200" stroke="#B2D234" strokeOpacity="0.3" strokeWidth="1" />
              </svg>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#B2D234] tracking-widest uppercase">
                FIG_01 // ARCHIVE_DUOTONE
              </div>
            </div>

            {/* Fragment 1 (Top Left) */}
            <div
              ref={(el) => { fragmentRefs.current[0] = el; }}
              className="absolute w-[140px] sm:w-[170px] h-[90px] sm:h-[110px] bg-[#022410]/90 border border-[#C5EB2A]/50 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-sm opacity-0"
              style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
            >
              <div className="p-3 font-mono text-[9px] text-[#C5EB2A]/80 leading-tight">
                <div>// DISPLACEMENT_MAP</div>
                <div className="text-white text-[11px] font-bold mt-1">GOTHIC_SPEC</div>
                <div className="text-neutral-400 mt-2">INDEX: 0x48A</div>
              </div>
            </div>

            {/* Fragment 2 (Top Right) */}
            <div
              ref={(el) => { fragmentRefs.current[1] = el; }}
              className="absolute w-[150px] sm:w-[190px] h-[100px] sm:h-[120px] bg-[#1B2608]/80 border border-[#B2D234]/40 overflow-hidden shadow-[0_0_25px_rgba(178, 210, 52,0.15)] opacity-0"
            >
              <svg className="w-full h-full opacity-40" viewBox="0 0 150 100">
                <line x1="0" y1="0" x2="150" y2="100" stroke="#B2D234" strokeWidth="1" />
                <line x1="0" y1="100" x2="150" y2="0" stroke="#B2D234" strokeWidth="1" />
                <circle cx="75" cy="50" r="25" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>

            {/* Fragment 3 (Bottom Left) */}
            <div
              ref={(el) => { fragmentRefs.current[2] = el; }}
              className="absolute w-[130px] sm:w-[160px] h-[80px] sm:h-[95px] bg-[#0E1403]/95 border border-[#C5EB2A]/40 p-2 font-mono text-[9px] text-neutral-300 shadow-[0_0_20px_rgba(0,0,0,0.9)] opacity-0"
            >
              <span className="text-[#B2D234]">MATRIX_CLIPPING</span>
              <div className="w-full h-1 bg-[#B2D234]/30 mt-2 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-[#B2D234] animate-pulse" />
              </div>
            </div>

            {/* Fragment 4 (Bottom Right) */}
            <div
              ref={(el) => { fragmentRefs.current[3] = el; }}
              className="absolute w-[140px] sm:w-[180px] h-[110px] sm:h-[130px] bg-[#021A0A] border border-[#B2D234]/30 p-3 shadow-[0_0_30px_rgba(0,0,0,0.9)] opacity-0"
              style={{ clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)" }}
            >
              <div className="font-mono text-[9px] text-[#B2D234]/90 uppercase">
                + TENSION // IMPACT
              </div>
              <div className="text-xs font-serif-italic text-white mt-1">
                Cinematic Flow
              </div>
            </div>
          </div>
        </div>

        {/* ─── PHASE 3: TYPOGRAPHY TRANSFORMATION & RADIAL PATTERN ─── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-22">
          {/* Radial Astrolabe / Celestial Pattern */}
          <svg
            ref={radialPatternRef}
            className="absolute w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] text-[#C5EB2A] opacity-0"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="250" cy="250" r="230" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.75" />
            <circle cx="250" cy="250" r="190" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.75" strokeDasharray="3 6" />
            <circle cx="250" cy="250" r="150" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
            <line x1="20" y1="250" x2="480" y2="250" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.75" />
            <line x1="250" y1="20" x2="250" y2="480" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.75" />
            <line x1="87" y1="87" x2="413" y2="413" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
            <line x1="413" y1="87" x2="87" y2="413" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
          </svg>

          {/* Transformed Moving Headline */}
          <div
            ref={transformTextRef}
            className="relative text-center pointer-events-none px-6 opacity-0"
          >
            <h2
              className="font-syne font-extrabold uppercase text-[#C5EB2A] tracking-widest text-4xl sm:text-6xl md:text-8xl lg:text-[110px]"
              style={{
                textShadow: "0 0 45px rgba(197, 235, 42, 0.6)",
                WebkitTextStroke: "1px rgba(178, 210, 52, 0.5)",
              }}
            >
              SYNTHESIS
            </h2>
            <div className="font-serif-italic text-white text-lg sm:text-2xl mt-2 tracking-normal">
              Beyond deterministic boundaries
            </div>
          </div>

          {/* Tiny Editorial Text On The Right Side */}
          <div
            ref={sideEditorialTextRef}
            className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 font-mono text-[10px] sm:text-xs text-[#B2D234]/85 tracking-[0.2em] uppercase text-right pointer-events-none opacity-0"
          >
            <div>// RENDER_CORE: SCROLL_SYNC</div>
            <div>// SHADOW_DEPTH: VOLUMETRIC</div>
            <div>// MASKING: DISPLACEMENT</div>
            <div>// CHROMA: PROJECT_EMERALD</div>
            <div className="w-16 h-px bg-[#B2D234]/40 ml-auto mt-1" />
          </div>
        </div>

        {/* ─── PHASE 4: OVERSIZED "3D WEB" HEADLINE WITH MUTED BLUE RECTANGULAR HIGHLIGHT ─── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-25">
          <div
            ref={web3DHeadlineRef}
            className="relative flex items-center justify-center px-4 opacity-0"
          >
            {/* Muted Blue Rectangular Selection Highlight Behind Central Letters */}
            <div
              ref={blueHighlightRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] md:w-[620px] h-[75px] sm:h-[110px] md:h-[135px] bg-[#0c2d48]/75 border border-[#38bdf8]/40 shadow-[0_0_30px_rgba(56,189,248,0.25)] rounded-sm pointer-events-none origin-center opacity-0"
            />

            <h2
              className="relative z-10 font-syne font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[160px] text-[#B2D234]"
              style={{
                textShadow: "0 0 30px rgba(178, 210, 52, 0.8), 0 0 70px rgba(197, 235, 42, 0.4)",
                letterSpacing: "-0.03em",
              }}
            >
              3D WEB
            </h2>
          </div>
        </div>

        {/* ─── PHASE 6: FINAL HERO SCENE — MYSTERIOUS BLACK HUMAN SILHOUETTE & TORN PAPER EDGE ─── */}
        <div
          ref={finalHeroSceneRef}
          className="absolute inset-0 flex flex-col items-center justify-between pointer-events-none z-28 opacity-0"
        >
          {/* Mysterious Black Human Silhouette in Center */}
          <div className="my-auto relative flex items-center justify-center">
            {/* Volumetric Green Halo Behind Silhouette */}
            <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(178, 210, 52,0.35)_0%,rgba(6,61,32,0.15)_45%,transparent_70%)] blur-[70px] pointer-events-none" />

            {/* Black Human Silhouette Vector with Atmospheric Lighting */}
            <svg
              ref={silhouetteRef}
              className="relative z-10 w-[240px] sm:w-[320px] md:w-[380px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] opacity-0"
              viewBox="0 0 300 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Elegant Silhouette Head & Shoulders */}
              <circle cx="150" cy="90" r="32" fill="#000000" />
              <path
                d="M 150 125 C 130 125, 110 138, 95 155 C 75 180, 65 220, 58 290 C 50 365, 45 440, 42 580 L 258 580 C 255 440, 250 365, 242 290 C 235 220, 225 180, 205 155 C 190 138, 170 125, 150 125 Z"
                fill="#000000"
              />
              {/* Subtle Cyber Rim Lighting on Edges */}
              <path
                d="M 118 90 C 118 72, 132 58, 150 58 C 168 58, 182 72, 182 90"
                stroke="#C5EB2A"
                strokeOpacity="0.45"
                strokeWidth="2"
              />
              <path
                d="M 95 155 C 75 180, 65 220, 58 290 C 50 365, 45 440, 42 580"
                stroke="#B2D234"
                strokeOpacity="0.5"
                strokeWidth="1.8"
              />
              <path
                d="M 205 155 C 225 180, 235 220, 242 290 C 250 365, 255 440, 258 580"
                stroke="#B2D234"
                strokeOpacity="0.5"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          {/* Distressed White Torn-Paper Edge Along Bottom Edge */}
          <div
            ref={tornPaperRef}
            className="relative w-full h-[60px] sm:h-[80px] mt-auto pointer-events-none opacity-0"
          >
            <svg
              className="w-full h-full filter drop-shadow-[0_-8px_18px_rgba(0,0,0,0.85)]"
              viewBox="0 0 1920 120"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Realistic Jagged Torn Paper Rip Vector */}
              <path
                d="M 0 45 
                   Q 40 25, 80 50 T 160 35 T 240 60 T 320 20 T 400 55 T 480 30 T 560 65 T 640 25 T 720 50 T 800 35 T 880 60 T 960 20 T 1040 55 T 1120 30 T 1200 65 T 1280 25 T 1360 50 T 1440 35 T 1520 60 T 1600 20 T 1680 55 T 1760 30 T 1840 65 T 1920 35 
                   L 1920 120 L 0 120 Z"
                fill="#F4F4F4"
              />
              <path
                d="M 0 49 
                   Q 40 29, 80 54 T 160 39 T 240 64 T 320 24 T 400 59 T 480 34 T 560 69 T 640 29 T 720 54 T 800 39 T 880 64 T 960 24 T 1040 59 T 1120 34 T 1200 69 T 1280 29 T 1360 54 T 1440 39 T 1520 64 T 1600 24 T 1680 59 T 1760 34 T 1840 69 T 1920 39"
                stroke="#D1D1D1"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* ─── BOTTOM MINIMAL NAVIGATION LABELS & SCROLL PROGRESS HUD ─── */}
        <div className="absolute bottom-5 left-6 right-6 sm:left-12 sm:right-12 z-40 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] sm:text-xs uppercase text-neutral-400 select-none">
          {/* Minimal Navigation Labels */}
          <div className="flex items-center gap-4 sm:gap-8 tracking-[0.2em]">
            <span className="flex items-center gap-1.5 text-white hover:text-[#B2D234] cursor-pointer transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234]" />
              01 // ARCHIVE
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#B2D234] cursor-pointer transition-colors hidden sm:flex">
              02 // MATRIX
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#B2D234] cursor-pointer transition-colors hidden md:flex">
              03 // TELEMETRY
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#B2D234] cursor-pointer transition-colors">
              04 // CONNECT
            </span>
          </div>

          {/* Interactive Scroll HUD & Phase Navigator */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.8)] pointer-events-auto">
            {/* Scroll Indicator Prompt */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#B2D234] tracking-wider pr-1">
              <ArrowDown className="w-3 h-3 animate-bounce text-[#C5EB2A]" />
              <span className="hidden sm:inline">SCROLL //</span>
              <span className="font-bold">PHASE 0{currentPhase}</span>
            </div>

            <div className="h-3 w-px bg-white/20 mx-0.5" />

            {/* Phase Click Buttons (Smooth Scrolls to Phase) */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5, 6].map((p) => (
                <button
                  key={p}
                  onClick={() => scrollToPhase(p)}
                  className={`w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                    currentPhase === p
                      ? "bg-[#B2D234] text-black shadow-[0_0_10px_#B2D234]"
                      : "text-neutral-400 hover:text-white hover:bg-white/10"
                  }`}
                  title={`Scroll to Phase ${p}`}
                >
                  P{p}
                </button>
              ))}
            </div>

            <div className="h-3 w-px bg-white/20 mx-0.5" />

            {/* Percentage Progress */}
            <span className="text-[10px] text-white font-mono font-bold w-10 text-right">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Progress Bar Running Across Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white/10 z-50 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#B2D234] via-[#C5EB2A] to-[#39FF14] transition-all duration-75 ease-out shadow-[0_0_10px_#B2D234]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}


