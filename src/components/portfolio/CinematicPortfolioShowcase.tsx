"use client";

import { useEffect, useRef, useState, useCallback, type JSX } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────── PROJECT DATA (9 PROJECTS) ─────────────────────────── */

export interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  accentColor: string;
  ambientGlow: string;
  secondaryGlow?: string;
  aspect: "landscape" | "laptop" | "monitor" | "mobile";
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "digital-marketing",
    name: "DIGITAL MARKETING",
    category: "PERFORMANCE & GROWTH",
    year: "2025",
    description:
      "A bold digital agency website showcasing premium branding, striking typography, and conversion-focused services with a modern editorial aesthetic.",
    image: "/projects/az-digital.jpg",
    accentColor: "#F97316",
    ambientGlow: "rgba(249, 115, 22, 0.45)",
    secondaryGlow: "rgba(245, 158, 11, 0.22)",
    aspect: "laptop",
  },
  {
    id: "web-mobile-development",
    name: "WEB & MOBILE DEVELOPMENT",
    category: "CROSS-PLATFORM ECOSYSTEMS",
    year: "2025",
    description:
      "Next-generation responsive web and native iOS & Android applications built with React, Next.js, Flutter, and sub-millisecond edge APIs.",
    image: "/projects/amron.jpg",
    accentColor: "#EF4444",
    ambientGlow: "rgba(239, 68, 68, 0.45)",
    secondaryGlow: "rgba(249, 115, 22, 0.25)",
    aspect: "laptop",
  },
  {
    id: "ai-ml-services",
    name: "AI / ML SERVICES",
    category: "NEURAL ARCHITECTURE",
    year: "2025",
    description:
      "Custom foundation model fine-tuning, computer vision pipelines, predictive intelligence, and ultra-fast hardware-accelerated inference.",
    image: "/projects/codenarts.jpg",
    accentColor: "#A78BFA",
    ambientGlow: "rgba(124, 58, 237, 0.45)",
    secondaryGlow: "rgba(249, 115, 22, 0.28)",
    aspect: "monitor",
  },
  {
    id: "desktop-development",
    name: "DESKTOP DEVELOPMENT",
    category: "HIGH-PERFORMANCE CLIENTS",
    year: "2025",
    description:
      "Ultra-low latency desktop applications for macOS, Windows, and Linux engineered with Rust, C++, and GPU-rendered canvas pipelines.",
    image: "/projects/chatone.jpg",
    accentColor: "#06B6D4",
    ambientGlow: "rgba(6, 182, 212, 0.45)",
    secondaryGlow: "rgba(14, 165, 233, 0.25)",
    aspect: "mobile",
  },
  {
    id: "graphic-designing",
    name: "GRAPHIC DESIGNING",
    category: "EDITORIAL BRAND ATELIER",
    year: "2025",
    description:
      "Visionary brand identities, 3D visual assets, bespoke editorial typography, motion systems, and award-winning digital aesthetic design.",
    image: "/projects/finance.jpg",
    accentColor: "#38BDF8",
    ambientGlow: "rgba(56, 189, 248, 0.45)",
    secondaryGlow: "rgba(147, 51, 234, 0.25)",
    aspect: "mobile",
  },
  {
    id: "ai-agent-deployment",
    name: "AI AGENT DEPLOYMENT",
    category: "AUTONOMOUS AGENT SWARMS",
    year: "2025",
    description:
      "Autonomous multi-agent swarms with tool-calling reasoning frameworks, self-healing workflow automation, and enterprise orchestration.",
    image: "/projects/az-digital.jpg",
    accentColor: "#a4c330",
    ambientGlow: "rgba(164, 195, 48, 0.48)",
    secondaryGlow: "rgba(34, 197, 94, 0.25)",
    aspect: "laptop",
  },
  {
    id: "cyber-security",
    name: "CYBER SECURITY",
    category: "ZERO-TRUST DEFENSE",
    year: "2025",
    description:
      "Hardened zero-trust defense perimeters, automated threat hunting, military-grade end-to-end encryption, and continuous security auditing.",
    image: "/projects/amron.jpg",
    accentColor: "#C084FC",
    ambientGlow: "rgba(168, 85, 247, 0.45)",
    secondaryGlow: "rgba(147, 51, 234, 0.25)",
    aspect: "laptop",
  },
  {
    id: "it-infrastructure",
    name: "IT INFRASTRUCTURE",
    category: "MISSION-CRITICAL SYSTEMS",
    year: "2025",
    description:
      "Enterprise Kubernetes cluster orchestration, multi-region failover architecture, automated CI/CD pipelines, and 99.999% uptime reliability.",
    image: "/projects/codenarts.jpg",
    accentColor: "#00F0FF",
    ambientGlow: "rgba(0, 240, 255, 0.45)",
    secondaryGlow: "rgba(14, 165, 233, 0.25)",
    aspect: "monitor",
  },
  {
    id: "cloud-applications",
    name: "CLOUD APPLICATIONS",
    category: "SERVERLESS & DISTRIBUTED EDGE",
    year: "2025",
    description:
      "Resilient cloud-native microservices, serverless event-driven backends, globally distributed edge data meshes, and elastic auto-scaling.",
    image: "/projects/finance.jpg",
    accentColor: "#EAB308",
    ambientGlow: "rgba(234, 179, 8, 0.45)",
    secondaryGlow: "rgba(249, 115, 22, 0.22)",
    aspect: "mobile",
  },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export function CinematicPortfolioShowcase(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedStageRef = useRef<HTMLDivElement>(null);
  
  // Track active project index for UI indicators
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [isFinalPhase, setIsFinalPhase] = useState(false);

  // Mouse tilt parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  }, []);

  // Programmatic smooth scroll to any project
  const snapPoints = [
    0,
    1 / 9,
    2 / 9,
    3 / 9,
    4 / 9,
    5 / 9,
    6 / 9,
    7 / 9,
    8 / 9,
    1.0,
  ];

  const scrollToProject = (index: number) => {
    if (!containerRef.current) return;
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    const scrollFraction = snapPoints[Math.min(snapPoints.length - 1, Math.max(0, index))];
    const targetY = containerRef.current.offsetTop + totalScroll * scrollFraction;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    const stage = pinnedStageRef.current;
    if (!container || !stage) return;

    const ctx = gsap.context(() => {
      // MASTER SCROLL TIMELINE: Contiguous, collision-free timeline for all 9 cards
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          pin: stage,
          pinSpacing: true,
          refreshPriority: 2,
          scrub: 0.5, // Responsive 1-scroll-per-card scrubbing
          snap: {
            snapTo: snapPoints,
            duration: { min: 0.22, max: 0.42 },
            delay: 0.01,
            ease: "power2.out",
          },
          onUpdate: (self) => {
            const p = self.progress;
            setOverallProgress(p);

            const totalProjects = SHOWCASE_PROJECTS.length; // 9
            if (p < 0.94) {
              setIsFinalPhase(false);
              const idx = Math.min(totalProjects - 1, Math.max(0, Math.round(p * 9)));
              setActiveProjectIndex(idx);
            } else {
              setIsFinalPhase(true);
              setActiveProjectIndex(totalProjects - 1);
            }
          },
        },
      });

      // Targets
      const fg = SHOWCASE_PROJECTS.map((_, i) => stage.querySelector(`.project-fg-${i}`));
      const bg = SHOWCASE_PROJECTS.map((_, i) => stage.querySelector(`.project-bg-${i}`));
      const amb = SHOWCASE_PROJECTS.map((_, i) => stage.querySelector(`.project-amb-${i}`));
      const titleWrap = SHOWCASE_PROJECTS.map((_, i) => stage.querySelector(`.project-title-${i}`));
      const titleLines = SHOWCASE_PROJECTS.map((_, i) => stage.querySelectorAll(`.project-title-${i} .reveal-line`));
      const descWrap = SHOWCASE_PROJECTS.map((_, i) => stage.querySelector(`.project-desc-${i}`));
      const descLines = SHOWCASE_PROJECTS.map((_, i) => stage.querySelectorAll(`.project-desc-${i} .reveal-line`));

      const orangeBeam = stage.querySelector(".amron-orange-beam");
      const statementSection = stage.querySelector(".final-statement-wrap");
      const statementWords = stage.querySelectorAll(".statement-word");

      const easeInOut = "power2.inOut";
      const easeRevealOut = "power3.out";

      const numCards = SHOWCASE_PROJECTS.length; // 9

      // ─── INITIAL POSITIONS AT t = 0 ───
      // Project 0 is at center stage (Active)
      gsap.set(fg[0], { y: "0vh", scale: 1.0, opacity: 1, zIndex: 25 });
      gsap.set(bg[0], { opacity: 0.82, scale: 1.25 });
      gsap.set(amb[0], { opacity: 1 });
      gsap.set(titleWrap[0], { opacity: 1 });
      gsap.set(descWrap[0], { opacity: 1 });
      gsap.set(titleLines[0], { y: "0%", opacity: 1 });
      gsap.set(descLines[0], { y: "0%", opacity: 1 });

      // Project 1 is queued at bottom preview (y: 35vh)
      gsap.set(fg[1], { y: "35vh", scale: 0.28, opacity: 0.85, zIndex: 10 });
      gsap.set(bg[1], { opacity: 0, scale: 1.15 });
      gsap.set(amb[1], { opacity: 0 });
      gsap.set(titleWrap[1], { opacity: 0 });
      gsap.set(descWrap[1], { opacity: 0 });
      gsap.set(titleLines[1], { y: "125%", opacity: 0 });
      gsap.set(descLines[1], { y: "125%", opacity: 0 });

      // Projects 2..8 are strictly offscreen bottom
      for (let i = 2; i < numCards; i++) {
        gsap.set(fg[i], { y: "85vh", scale: 0.22, opacity: 0, zIndex: 1 });
        gsap.set(bg[i], { opacity: 0, scale: 1.15 });
        gsap.set(amb[i], { opacity: 0 });
        gsap.set(titleWrap[i], { opacity: 0 });
        gsap.set(descWrap[i], { opacity: 0 });
        gsap.set(titleLines[i], { y: "125%", opacity: 0 });
        gsap.set(descLines[i], { y: "125%", opacity: 0 });
      }

      /* ─────────────────────────────────────────────────────────────
         NON-OVERLAPPING CONTIGUOUS CARD CAROUSEL FOR ALL 9 CARDS
         At any snapshot:
           - Top Preview: y: -35vh, scale: 0.28, opacity: 0.85
           - Center Active: y: 0vh, scale: 1.0, opacity: 1.0
           - Bottom Preview: y: 35vh, scale: 0.28, opacity: 0.85
         ───────────────────────────────────────────────────────────── */
      const T_step = 2.0; // 2.0s per card transition step

      for (let i = 0; i < numCards - 1; i++) {
        const t_start = i * T_step;
        const t_end = (i + 1) * T_step;

        // 1. Previous card i - 1 exits offscreen UP
        if (i > 0) {
          masterTl.set(fg[i - 1], { zIndex: 5 }, t_start);
          masterTl.to(fg[i - 1], {
            y: "-85vh",
            scale: 0.22,
            opacity: 0,
            duration: T_step * 0.7,
            ease: easeInOut,
          }, t_start);
          masterTl.set(fg[i - 1], { y: "-100vh", opacity: 0, zIndex: 1 }, t_end);
        }

        // 2. Current active card i moves from Center to Top Preview slot (-35vh)
        masterTl.set(fg[i], { zIndex: 12 }, t_start);
        masterTl.to(fg[i], {
          y: "-35vh",
          scale: 0.28,
          opacity: 0.85,
          duration: T_step,
          ease: easeInOut,
        }, t_start);
        masterTl.set(fg[i], { zIndex: 10 }, t_end);

        masterTl.to(bg[i], {
          opacity: 0,
          scale: 1.35,
          duration: T_step * 0.75,
          ease: easeInOut,
        }, t_start);
        masterTl.to(amb[i], {
          opacity: 0,
          duration: T_step * 0.75,
          ease: easeInOut,
        }, t_start);

        // Text i rolls UP & OUT through mask
        masterTl.to(titleLines[i], {
          y: "-125%",
          opacity: 0,
          stagger: 0.03,
          duration: T_step * 0.45,
          ease: easeInOut,
        }, t_start);
        masterTl.to(descLines[i], {
          y: "-125%",
          opacity: 0,
          stagger: 0.03,
          duration: T_step * 0.45,
          ease: easeInOut,
        }, t_start);
        masterTl.set([titleWrap[i], descWrap[i]], { opacity: 0 }, t_end);

        // 3. Card i + 1 moves from Bottom Preview (35vh) into Center Stage (0vh)
        masterTl.set(fg[i + 1], { zIndex: 25 }, t_start);
        masterTl.to(fg[i + 1], {
          y: "0vh",
          scale: 1.0,
          opacity: 1,
          duration: T_step,
          ease: easeInOut,
        }, t_start);

        masterTl.fromTo(bg[i + 1],
          { scale: 1.15, opacity: 0 },
          { scale: 1.25, opacity: 0.82, duration: T_step, ease: easeInOut },
          t_start
        );
        masterTl.fromTo(amb[i + 1],
          { opacity: 0 },
          { opacity: 1, duration: T_step, ease: easeInOut },
          t_start
        );

        // Special accent light beam for Amron / Desktop Dev
        if (i === 0 && orangeBeam) {
          masterTl.fromTo(orangeBeam,
            { opacity: 0, scaleY: 0.5 },
            { opacity: 0.85, scaleY: 1, duration: 1.0, ease: easeInOut },
            t_start + 0.2
          );
        } else if (i === 1 && orangeBeam) {
          masterTl.to(orangeBeam, { opacity: 0, duration: 0.8, ease: easeInOut }, t_start);
        }

        // Text i + 1 rolls IN from DOWN to UP
        masterTl.set([titleWrap[i + 1], descWrap[i + 1]], { opacity: 1 }, t_start + T_step * 0.25);
        masterTl.fromTo(titleLines[i + 1],
          { y: "125%", opacity: 0 },
          { y: "0%", opacity: 1, stagger: 0.05, duration: T_step * 0.6, ease: easeRevealOut },
          t_start + T_step * 0.3
        );
        masterTl.fromTo(descLines[i + 1],
          { y: "125%", opacity: 0 },
          { y: "0%", opacity: 1, stagger: 0.05, duration: T_step * 0.6, ease: easeRevealOut },
          t_start + T_step * 0.35
        );

        // 4. Card i + 2 enters from bottom offscreen into Bottom Preview slot (35vh)
        if (i + 2 < numCards) {
          masterTl.set(fg[i + 2], { zIndex: 10 }, t_start + T_step * 0.2);
          masterTl.fromTo(fg[i + 2],
            { y: "85vh", scale: 0.22, opacity: 0 },
            { y: "35vh", scale: 0.28, opacity: 0.85, duration: T_step * 0.8, ease: "power2.out" },
            t_start + T_step * 0.2
          );
        }
      }

      /* ─────────────────────────────────────────────────────────────
         PHASE 10: FINAL STATEMENT (16.0s -> 18.0s)
         ───────────────────────────────────────────────────────────── */
      const lastIndex = numCards - 1; // 8
      const finalStart = lastIndex * T_step; // 16.0s
      const finalEnd = (lastIndex + 1) * T_step; // 18.0s

      // Card 7 exits out top
      masterTl.set(fg[lastIndex - 1], { zIndex: 5 }, finalStart);
      masterTl.to(fg[lastIndex - 1], {
        y: "-85vh",
        scale: 0.22,
        opacity: 0,
        duration: 1.0,
        ease: easeInOut,
      }, finalStart);
      masterTl.set(fg[lastIndex - 1], { opacity: 0, y: "-100vh", zIndex: 1 }, finalStart + 1.0);

      // Card 8 slides up to upper-middle; background aura dims
      masterTl.to(fg[lastIndex], {
        y: "-18vh",
        scale: 0.65,
        opacity: 0.55,
        duration: 1.2,
        ease: easeInOut,
      }, finalStart);
      masterTl.to(bg[lastIndex], {
        opacity: 0.08,
        filter: "blur(55px)",
        duration: 1.2,
        ease: easeInOut,
      }, finalStart);
      masterTl.to(amb[lastIndex], {
        opacity: 0.12,
        duration: 1.2,
        ease: easeInOut,
      }, finalStart);

      // Text 8 rolls out
      masterTl.to(titleLines[lastIndex], {
        y: "-125%",
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: easeInOut,
      }, finalStart);
      masterTl.to(descLines[lastIndex], {
        y: "-125%",
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: easeInOut,
      }, finalStart);
      masterTl.set([titleWrap[lastIndex], descWrap[lastIndex]], { opacity: 0 }, finalStart + 1.0);

      // Final Statement reveals in Bodoni Red
      if (statementSection && statementWords.length > 0) {
        masterTl.fromTo(statementSection,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          finalStart + 0.35
        );
        masterTl.fromTo(
          statementWords,
          { opacity: 0, y: 24, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.035, duration: 0.8, ease: easeInOut },
          finalStart + 0.45
        );
      }
    }, container);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#050505] text-white selection:bg-[#FF1A00] selection:text-black"
      style={{
        // Responsive 520vh scroll track: exactly 1 scroll gesture per card
        height: "520vh",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* ─── PINNED FULL-SCREEN STAGE ─── */}
      <div
        ref={pinnedStageRef}
        className="relative h-screen w-full overflow-hidden bg-[#050505] select-none"
      >
        {/* ─── BACKGROUND AMBIENT GLOW SYSTEM ─── */}
        {SHOWCASE_PROJECTS.map((proj, idx) => (
          <div
            key={`amb-${proj.id}`}
            className={`project-amb-${idx} pointer-events-none absolute inset-0 transition-opacity duration-700`}
            style={{
              opacity: idx === 0 ? 1 : 0,
              background: `radial-gradient(ellipse 75% 65% at 50% 45%, ${proj.ambientGlow}, transparent 70%), radial-gradient(circle at 75% 30%, ${proj.secondaryGlow || "transparent"}, transparent 50%)`,
            }}
          />
        ))}

        {/* ─── PHASE 03 VERTICAL ORANGE LIGHT BEAM ─── */}
        <div
          className="amron-orange-beam pointer-events-none absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F97316] to-transparent opacity-0 shadow-[0_0_15px_#F97316]"
        />

        {/* ─── ENLARGED BLURRED BACKGROUND IMAGES (Atmospheric Aura Layer - Matching Image 1) ─── */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          {SHOWCASE_PROJECTS.map((proj, idx) => (
            <div
              key={`bg-${proj.id}`}
              className={`project-bg-${idx} absolute inset-0 flex items-center justify-center will-change-transform`}
              style={{
                opacity: idx === 0 ? 0.82 : 0,
                transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -14}px, 0)`,
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <img
                src={proj.image}
                alt=""
                className="h-[125%] w-[125%] max-w-none object-cover pointer-events-none select-none"
                style={{
                  filter: "blur(50px)",
                  transform: "scale(1.15)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ─── SUBTLE AMBIENT TINT & SOFT PERIMETER VIGNETTE (Matching Image 1) ─── */}
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,5,0.7)_100%)]" />

        {/* ─── FOREGROUND PRESENTATION IMAGES (3-Card Carousel: Top, Center, Bottom) ─── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {SHOWCASE_PROJECTS.map((proj, idx) => {
            const maxWidthStyle =
              proj.aspect === "mobile"
                ? "max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px]"
                : "max-w-[440px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[620px]";

            return (
              <div
                key={`fg-${proj.id}`}
                className={`project-fg-${idx} absolute w-full ${maxWidthStyle} px-4 flex items-center justify-center will-change-transform`}
                style={{
                  transformOrigin: "center center",
                  opacity: idx === 0 ? 1 : idx === 1 ? 0.85 : 0,
                  transform:
                    idx === 0
                      ? "translate3d(0, 0vh, 0) scale(1)"
                      : idx === 1
                      ? "translate3d(0, 35vh, 0) scale(0.28)"
                      : "translate3d(0, 85vh, 0) scale(0.22)",
                  zIndex: idx === 0 ? 20 : idx === 1 ? 10 : 1,
                }}
              >
                <div
                  onClick={() => {
                    // Clicking on a card will navigate to it if it's currently queued as preview
                    if (activeProjectIndex !== idx) {
                      scrollToProject(idx);
                    }
                  }}
                  className="relative w-full max-h-[44vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.85),0_10px_25px_rgba(0,0,0,0.6)] cursor-pointer pointer-events-auto transition-transform hover:scale-[1.01] flex items-center justify-center"
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-auto max-h-[44vh] object-contain block select-none pointer-events-auto"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── TOP-LEFT CORNER: CYBER-GOTHIC SPARK EMBLEM (Matching Image 1, cleared below navbar) ─── */}
        <div className="absolute top-16 left-6 sm:top-20 sm:left-12 z-40 select-none pointer-events-none">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-white filter drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Symmetrical Cyber-Gothic Spiked Wings matching Image 1 */}
            <path d="M 50 15 C 46 28 38 35 22 38 C 32 44 36 52 32 68 C 38 58 45 62 48 78 C 50 82 50 82 50 82" />
            <path d="M 50 15 C 54 28 62 35 78 38 C 68 44 64 52 68 68 C 62 58 55 62 52 78 C 50 82 50 82 50 82" />
            <path d="M 32 38 C 22 28 14 32 10 42 C 18 45 25 44 30 48" />
            <path d="M 68 38 C 78 28 86 32 90 42 C 82 45 75 44 70 48" />
            <path d="M 28 54 C 18 56 12 65 14 74 C 20 68 26 66 32 64" />
            <path d="M 72 54 C 82 56 88 65 86 74 C 80 68 74 66 68 64" />
            <line x1="50" y1="10" x2="50" y2="90" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="3" fill="white" />
          </svg>
        </div>

        {/* ─── LEFT SIDE: PROJECT NAME (Pure White, Bold, Minimalist - Matching Image 1) ─── */}
        <div className="absolute left-6 sm:left-10 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-40 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[200px] pointer-events-none flex flex-col justify-center">
          {SHOWCASE_PROJECTS.map((proj, idx) => (
            <div
              key={`title-${proj.id}`}
              className={`project-title-${idx} absolute inset-0 flex flex-col justify-center will-change-transform`}
              style={{ opacity: idx === 0 ? 1 : 0 }}
            >
              <div className="overflow-hidden py-1">
                <h2 className="reveal-line font-syne text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white uppercase leading-[1.08] will-change-transform drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                  {proj.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* ─── RIGHT SIDE: EDITORIAL DESCRIPTION & CIRCULAR ORBIT BADGE (Matching Image 1) ─── */}
        <div className="hidden md:block absolute right-6 sm:right-10 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-40 w-[260px] lg:w-[320px] h-[240px] pointer-events-none">
          {SHOWCASE_PROJECTS.map((proj, idx) => (
            <div
              key={`desc-${proj.id}`}
              className={`project-desc-${idx} absolute inset-0 flex flex-col justify-center will-change-transform`}
              style={{ opacity: idx === 0 ? 1 : 0 }}
            >
              {/* Description Paragraph (Left-Aligned within Column) */}
              <div className="overflow-hidden py-1">
                <p className="reveal-line text-xs sm:text-[13px] font-normal leading-[1.7] text-white/90 will-change-transform drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
                  {proj.description}
                </p>
              </div>

              {/* Circular Orbit Number Badge (Matching Image 1) */}
              <div className="overflow-hidden py-1 mt-6">
                <div className="reveal-line flex items-center will-change-transform">
                  <div className="w-12 h-12 rounded-full border border-white/45 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <span
                      className="text-lg sm:text-xl font-light text-white italic tracking-wider select-none pl-0.5"
                      style={{ fontFamily: "var(--font-bodoni-72), 'Bodoni MT', 'Didot', Georgia, serif" }}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── PHASE 10: FINAL ENDING SECTION (White Statement Bottom-Center) ─── */}
        <div
          className="final-statement-wrap pointer-events-none absolute bottom-24 sm:bottom-28 left-0 right-0 z-40 px-6 sm:px-12 flex flex-col items-center justify-center text-center opacity-0"
        >
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.25]"
              style={{
                fontFamily: "var(--font-bodoni-72), 'Bodoni MT', 'Didot', Georgia, serif",
                textShadow: "0 0 35px rgba(255,255,255,0.45), 0 0 70px rgba(255,255,255,0.2)",
              }}
            >
              {[
                "From", "the", "First", "Idea", "to", "the", "Final", "Frame,", "Every", "Step", "is", "Crafted", "to", "Create", "an", "Unforgettable", "Experience."
              ].map((word, wIdx) => (
                <span
                  key={`word-${wIdx}`}
                  className="statement-word inline-block mr-[0.28em] will-change-transform"
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="mt-4 font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-300 opacity-80">
              DIGITAL ATELIER // BOUNTY BYTES AI STUDIOS
            </p>
          </div>
        </div>

        {/* ─── BOTTOM: HORIZONTAL TELEMETRY BAR (Matching Image 1 meermohsin.me layout) ─── */}
        <div className="absolute bottom-6 left-0 right-0 z-40 px-8 sm:px-16 flex items-center justify-between font-mono text-[9px] sm:text-[11px] tracking-[0.32em] uppercase text-white/50 select-none pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">✕</span>
          </div>
          <div className="flex items-center gap-2">
            <span>TENSION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/30 text-xs">✕</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/85 font-semibold tracking-[0.38em]">IMMERSION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/30 text-xs">✕</span>
          </div>
          <div className="flex items-center gap-2">
            <span>IMPACT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">✕</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CinematicShowcase = CinematicPortfolioShowcase;
export default CinematicPortfolioShowcase;

