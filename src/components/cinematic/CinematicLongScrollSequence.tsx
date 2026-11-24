"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { WingedThornOrnament } from "./WingedThornOrnament";
import { Sparkles, Terminal, Activity, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

/**
 * CinematicLongScrollSequence
 * Master cinematic long-scroll experience inspired by luxury digital agency & experimental portfolios:
 * - Continuous full-page animated background connected across 5 full-height stages
 * - Symmetrical, abstract organic thorn-winged structure around the central vertical axis (NO center logo)
 * - Intense vertical light beam in Bounty Logo Green (#B2D234 / #D8FF38) running down the central axis
 * - Alternating luxury editorial typography (Cormorant / Bodoni 72 Italic + Syne Bold)
 * - Section 04 Dramatic full-bleed human silhouette on glowing horizon floor (ZERO border / ZERO card box)
 * - Fixed minimal HUD & stage telemetry
 */
export function CinematicLongScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure scroll progress over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for fluid cinematic transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.8,
  });

  // ─── 1. WINGED ORNAMENT TRANSFORMS ACROSS PHASES ───
  // Phase 1 (0-0.2): awakening spine (scale 0.8 -> 0.95, y: 0)
  // Phase 2 (0.2-0.42): signature full winged expansion (scale 1.08, y: 0, glow 1.0)
  // Phase 3 (0.42-0.65): elevated craftsman depth (scale 0.95, y: -60px, glow 0.75)
  // Phase 4 (0.65-0.86): ascends to upper void to yield focus to silhouette (scale 0.85, y: -260px, opacity 0.18)
  // Phase 5 (0.86-1.0): dissolves into dark celestial smoke (scale 0.8, y: -320px, opacity 0.05)
  const wingScale = useTransform(smoothProgress, [0, 0.18, 0.32, 0.45, 0.65, 0.85, 1], [0.82, 0.96, 1.08, 0.98, 0.88, 0.82, 0.75]);
  const wingY = useTransform(smoothProgress, [0, 0.2, 0.42, 0.65, 0.85, 1], [20, 0, -40, -260, -320, -360]);
  const wingOpacity = useTransform(smoothProgress, [0, 0.08, 0.22, 0.55, 0.68, 0.88, 1], [0.35, 0.85, 1, 0.85, 0.22, 0.1, 0.0]);
  const wingGlow = useTransform(smoothProgress, [0, 0.25, 0.45, 0.65, 0.85], [0.5, 1.0, 0.75, 0.3, 0.1]);

  // ─── 2. CONTINUOUS VERTICAL LIGHT BEAM ───
  const beamIntensity = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0.65, 1.0, 0.8, 1.0, 0.7]);
  const beamWidth = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [2, 3, 2, 3.5, 2]);

  // ─── 3. SECTION 01: INTRODUCTION / HERO TYPOGRAPHY ───
  const s1Opacity = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [1, 1, 0.2, 0]);
  const s1Y = useTransform(smoothProgress, [0, 0.18], [0, -60]);
  const s1Scale = useTransform(smoothProgress, [0, 0.18], [1, 0.95]);

  // ─── 4. SECTION 02: THE CENTRAL WINGED EMBLEM (LEFT & RIGHT SPLIT) ───
  const s2LeftX = useTransform(smoothProgress, [0.18, 0.26, 0.36, 0.44], [-80, 0, 0, -60]);
  const s2LeftOpacity = useTransform(smoothProgress, [0.18, 0.26, 0.36, 0.44], [0, 1, 1, 0]);
  const s2RightX = useTransform(smoothProgress, [0.18, 0.26, 0.36, 0.44], [80, 0, 0, 60]);
  const s2RightOpacity = useTransform(smoothProgress, [0.18, 0.26, 0.36, 0.44], [0, 1, 1, 0]);

  // ─── 5. SECTION 03: DIGITAL CRAFTSMANSHIP ───
  const s3Opacity = useTransform(smoothProgress, [0.42, 0.49, 0.58, 0.66], [0, 1, 1, 0]);
  const s3Y = useTransform(smoothProgress, [0.42, 0.5, 0.66], [50, 0, -50]);

  // ─── 6. SECTION 04: DRAMATIC SILHOUETTE & LAUNCH & EVOLUTION ───
  const s4SilhouetteOpacity = useTransform(smoothProgress, [0.62, 0.7, 0.83, 0.9], [0, 1, 1, 0.1]);
  const s4SilhouetteScale = useTransform(smoothProgress, [0.65, 0.85], [0.94, 1.08]);
  const s4TextOpacity = useTransform(smoothProgress, [0.66, 0.72, 0.83, 0.89], [0, 1, 1, 0]);
  const s4TextX = useTransform(smoothProgress, [0.66, 0.73, 0.88], [50, 0, 20]);
  const floorGlowOpacity = useTransform(smoothProgress, [0.62, 0.72, 0.84, 0.92], [0, 1, 1, 0.2]);

  // ─── 7. SECTION 05: FINAL HORIZON APEX ───
  const s5Opacity = useTransform(smoothProgress, [0.86, 0.92, 0.98, 1], [0, 1, 1, 0.8]);
  const s5Y = useTransform(smoothProgress, [0.86, 0.94, 1], [40, 0, -20]);
  const horizonExpand = useTransform(smoothProgress, [0.85, 1], [0.4, 1.2]);

  // ─── 8. ACTIVE TELEMETRY INDICATOR (01 to 05) ───
  const activeStage = useTransform(smoothProgress, [0, 0.2, 0.42, 0.65, 0.86, 1], [1, 2, 3, 4, 5, 5]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520vh] bg-[#000000] text-neutral-100 select-none overflow-visible"
    >
      {/* ═══════════════════════════════════════════════════════════════════
          STICKY FULL-SCREEN CINEMATIC VIEWPORT (ALL STAGES OCCUR HERE)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center bg-[#000000]">
        
        {/* ─── LAYER A: PURE BLACK BASE & DEEP VOLUMETRIC GREEN ATMOSPHERE ─── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle deep nebula glow centered on light axis */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(178, 210, 52, 0.12) 0%, rgba(178, 210, 52, 0.02) 45%, transparent 75%)",
              filter: "blur(90px)",
            }}
          />
          {/* Subtle horizontal grid lines with ultra-low opacity */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(178, 210, 52, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(178, 210, 52, 0.15) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
            }}
          />
        </div>

        {/* ─── LAYER B: THE CONTINUOUS VERTICAL LIGHT BEAM (#B2D234) ─── */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center z-10 overflow-hidden">
          {/* Atmospheric Soft Light Bloom Behind Axis */}
          <motion.div
            style={{ opacity: beamIntensity }}
            className="absolute top-0 bottom-0 w-[420px] pointer-events-none"
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(178, 210, 52, 0.04) 30%, rgba(178, 210, 52, 0.18) 50%, rgba(178, 210, 52, 0.04) 70%, transparent 100%)",
                filter: "blur(35px)",
              }}
            />
          </motion.div>

          {/* Core Volumetric Light Column */}
          <motion.div
            style={{ opacity: beamIntensity }}
            className="absolute top-0 bottom-0 w-[48px] pointer-events-none"
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(178, 210, 52, 0.4) 40%, rgba(216, 255, 56, 0.85) 50%, rgba(178, 210, 52, 0.4) 60%, transparent 100%)",
                filter: "blur(6px)",
              }}
            />
          </motion.div>

          {/* Ultra-Sharp High-Voltage Laser Core */}
          <motion.div
            style={{
              width: beamWidth,
              opacity: beamIntensity,
            }}
            className="absolute top-0 bottom-0 bg-[#FFFFFF] shadow-[0_0_12px_#D8FF38,0_0_24px_#B2D234] z-10"
          />

          {/* Animated Energy Pulses Moving Downward Along the Beam */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-[#FFFFFF] to-transparent absolute left-1/2 -translate-x-1/2 animate-[pulseTravel_4.5s_infinite_linear]" />
          </div>
        </div>

        {/* ─── LAYER C: THE SYMMETRICAL WINGED THORN ORNAMENT (NO CENTER LOGO) ─── */}
        <motion.div
          style={{
            scale: wingScale,
            y: wingY,
            opacity: wingOpacity,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-15 transform-gpu"
        >
          <WingedThornOrnament
            scale={1}
            glowOpacity={0.9}
            className="w-full max-w-[1280px]"
          />
        </motion.div>

        {/* ─── LAYER D: SECTION 04 DRAMATIC SILHOUETTE & HORIZON FLOOR ─── */}
        <motion.div
          style={{
            opacity: s4SilhouetteOpacity,
          }}
          className="absolute inset-0 flex flex-col justify-end items-center pointer-events-none z-25 overflow-hidden"
        >
          {/* Horizontal Crimson/Green Horizon Floor Beam */}
          <motion.div
            style={{
              opacity: floorGlowOpacity,
              scaleX: horizonExpand,
            }}
            className="absolute bottom-[8vh] w-full flex flex-col items-center pointer-events-none"
          >
            {/* The razor horizon line */}
            <div className="w-[90vw] max-w-6xl h-[1.5px] bg-gradient-to-r from-transparent via-[#B2D234] to-transparent shadow-[0_0_20px_#B2D234]" />

            {/* Glowing floor reflection pool beneath silhouette */}
            <div
              className="w-[85vw] max-w-4xl h-[140px] -mt-1"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(178, 210, 52, 0.45) 0%, rgba(178, 210, 52, 0.12) 40%, transparent 75%)",
                filter: "blur(20px)",
              }}
            />
          </motion.div>

          {/* Full-Bleed Silhouette Standing in Vertical Light Beam (Seamless 0-border blend) */}
          <motion.div
            style={{
              scale: s4SilhouetteScale,
            }}
            className="relative bottom-[7vh] w-full max-w-[560px] h-[58vh] max-h-[720px] flex items-center justify-center transform-gpu"
          >
            {/* Soft Ambient Radiance Around the Figure */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 65%, rgba(178, 210, 52, 0.3) 0%, rgba(178, 210, 52, 0.08) 45%, transparent 75%)",
                filter: "blur(50px)",
              }}
            />

            {/* Clean silhouette image with screen blend and zero rectangular boundary */}
            <img
              src="/cinematic-silhouette-bounty-clean.png"
              alt="Cinematic Silhouette in Vertical Green Light Beam"
              className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(178,210,52,0.45)] select-none pointer-events-none"
              style={{
                mixBlendMode: "screen",
                maskImage: "radial-gradient(ellipse 70% 80% at 50% 55%, black 65%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 55%, black 65%, transparent 100%)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════
            TOP FIXED TELEMETRY HUD (MINIMAL WHITE & GREEN PROTOCOL)
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="relative z-40 w-full max-w-7xl mx-auto pt-6 px-6 sm:px-10 flex items-center justify-between pointer-events-auto">
          {/* Top-Left Minimal Emblem Badge */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-sm border border-[#B2D234]/40 flex items-center justify-center bg-[#101704]/80 backdrop-blur-md shadow-[0_0_12px_rgba(178,210,52,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] shadow-[0_0_6px_#D8FF38]" />
            </div>
            <div className="font-mono text-[11px] tracking-wider text-neutral-300">
              <span className="text-[#B2D234] font-semibold">BOUNTY</span>
              <span className="text-neutral-500 mx-1.5">//</span>
              <span className="text-neutral-400">ARCHITECTURAL SYSTEM</span>
            </div>
          </div>

          {/* Top-Right Technical Coordinates */}
          <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5 text-[#B2D234]/90">
              <Activity className="w-3.5 h-3.5 text-[#B2D234] animate-pulse" />
              <span>VERT_AXIS // 0.00°</span>
            </span>
            <span className="text-neutral-700">•</span>
            <span className="text-neutral-500">60.0 FPS</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            MAIN EDITORIAL CONTENT OVERLAYS (SYNCHRONIZED BY SCROLL)
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="relative z-30 w-full max-w-7xl mx-auto flex-1 flex items-center justify-center px-6 sm:px-12 pointer-events-none">
          
          {/* ─── STAGE 01: INTRODUCTION / HERO HEADLINE ─── */}
          <motion.div
            style={{
              opacity: s1Opacity,
              y: s1Y,
              scale: s1Scale,
            }}
            className="absolute inset-x-6 sm:inset-x-12 flex flex-col items-center justify-center text-center max-w-4xl mx-auto pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-xs font-mono text-[#B2D234] mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(178,210,52,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#B2D234]" />
              <span className="tracking-[0.25em] uppercase text-[10px]">
                01 // INTRODUCTION
              </span>
            </div>

            <h1
              className="font-syne font-extrabold uppercase text-white tracking-tight leading-[1.08] text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl text-balance"
              style={{
                textShadow: "0 0 45px rgba(178, 210, 52, 0.4)",
              }}
            >
              From the First Idea to the{" "}
              <span
                className="text-[#B2D234] font-serif-italic font-normal lowercase inline-block"
                style={{
                  fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                  fontStyle: "italic",
                  textShadow: "0 0 55px rgba(178, 210, 52, 0.8)",
                }}
              >
                final frame,
              </span>{" "}
              Every Step Is Crafted to Create an{" "}
              <span
                className="text-[#B2D234] font-serif-italic font-normal block sm:inline"
                style={{
                  fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                  fontStyle: "italic",
                  textShadow: "0 0 55px rgba(178, 210, 52, 0.8)",
                }}
              >
                Unforgettable Digital Experience.
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base font-sans text-neutral-400 max-w-xl font-light tracking-wide">
              Where high-fashion dark editorial aesthetics converge with autonomous intelligence and GPU-accelerated motion.
            </p>

            <div className="mt-8 flex items-center gap-3 font-mono text-xs text-[#B2D234]/80 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] animate-ping" />
              <span>SCROLL TO DESCEND THROUGH THE ORNAMENT</span>
            </div>
          </motion.div>

          {/* ─── STAGE 02: THE CENTRAL WINGED EMBLEM (LEFT & RIGHT SPLIT) ─── */}
          <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-12 lg:px-16 pointer-events-none">
            {/* Left Block: Digital Strategy */}
            <motion.div
              style={{
                x: s2LeftX,
                opacity: s2LeftOpacity,
              }}
              className="w-full max-w-sm lg:max-w-md pointer-events-auto text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-[10px] font-mono text-[#B2D234] mb-3">
                <span>02.A // STRATEGIC COGNITION</span>
              </div>

              <h2 className="font-syne font-black uppercase text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
                DIGITAL <br />
                <span className="text-[#B2D234] font-serif-italic font-normal italic lowercase">
                  strategy.
                </span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light">
                We deconstruct systemic friction to architect hyper-scalable digital foundations. Every touchpoint is calibrated for visceral resonance and irreversible engagement.
              </p>

              <div className="mt-6 flex items-center gap-3 font-mono text-[11px] text-neutral-400">
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[#B2D234]">
                  0.04s LATENCY
                </span>
                <span>•</span>
                <span>SYSTEMIC AGILITY</span>
              </div>
            </motion.div>

            {/* Right Block: Creative Direction */}
            <motion.div
              style={{
                x: s2RightX,
                opacity: s2RightOpacity,
              }}
              className="w-full max-w-sm lg:max-w-md pointer-events-auto text-right flex flex-col items-end"
            >
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-[10px] font-mono text-[#B2D234] mb-3">
                <span>02.B // AESTHETIC DIRECTIVE</span>
              </div>

              <h2 className="font-syne font-black uppercase text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
                CREATIVE <br />
                <span
                  className="text-[#B2D234] font-serif-italic font-normal italic lowercase"
                  style={{
                    fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                  }}
                >
                  direction.
                </span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light text-right">
                Form that commands visceral attention. We fuse brutalist dark luxury with fluid biomechanical geometry, forging experiences that linger in the memory of the observer.
              </p>

              <div className="mt-6 flex items-center gap-3 font-mono text-[11px] text-neutral-400">
                <span>IMMERSIVE 3D WEBGL</span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[#B2D234]">
                  NO REPETITION
                </span>
              </div>
            </motion.div>
          </div>

          {/* ─── STAGE 03: DIGITAL CRAFTSMANSHIP (ASYMMETRICAL LUXURY) ─── */}
          <motion.div
            style={{
              opacity: s3Opacity,
              y: s3Y,
            }}
            className="absolute inset-x-6 sm:inset-x-12 max-w-5xl mx-auto flex flex-col items-start pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-[10px] font-mono text-[#B2D234] mb-3">
              <Cpu className="w-3 h-3 text-[#B2D234]" />
              <span>03 // MONOLITHIC ENGINEERING</span>
            </div>

            <h2 className="font-syne font-black uppercase text-white tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-none">
              DIGITAL <br />
              <span
                className="text-[#B2D234] font-serif-italic font-normal italic lowercase"
                style={{
                  fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                }}
              >
                craftsmanship.
              </span>
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-white/10 pt-6">
              <div>
                <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light">
                  Synthesizing next-generation front-end choreography with autonomous backend intelligence. We build websites that feel alive — responsive to intent, fluid under load, and visually uncompromising.
                </p>
              </div>

              <div className="flex flex-col justify-between font-mono text-xs text-neutral-400">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Zero generic boilerplate. Bespoke micro-interactions. Dynamic lighting shaders tuned to human perception.
                </p>
                <div className="mt-4 flex items-center gap-3 text-[#B2D234]">
                  <span>[SHADER_PIPELINE: V4.2]</span>
                  <span>—</span>
                  <span>[FIDELITY: 100%]</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── STAGE 04: LAUNCH & EVOLUTION (ALONGSIDE SILHOUETTE) ─── */}
          <motion.div
            style={{
              opacity: s4TextOpacity,
              x: s4TextX,
            }}
            className="absolute right-6 sm:right-12 lg:right-20 top-1/4 max-w-md pointer-events-auto text-right flex flex-col items-end z-30"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-xs font-mono text-[#B2D234] mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(178,210,52,0.18)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B2D234]" />
              <span className="tracking-[0.25em] uppercase text-[10px]">
                04 // THE HORIZON
              </span>
            </div>

            <h2 className="font-syne font-black uppercase text-white tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[1.05]">
              LAUNCH & <br />
              <span
                className="text-[#B2D234] font-serif-italic font-normal italic lowercase"
                style={{
                  fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                  textShadow: "0 0 35px rgba(178, 210, 52, 0.6)",
                }}
              >
                evolution.
              </span>
            </h2>

            <p className="mt-5 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light text-right max-w-sm">
              Deployment is not the finish line; it is the ignition. Systems continuously adapt, learn, and expand their visual dominion across the global network.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="font-mono text-xs text-neutral-400">
                STATUS: <span className="text-[#B2D234] font-semibold">SOVEREIGN</span>
              </div>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B2D234] text-black font-mono text-xs font-semibold hover:bg-[#D8FF38] transition-colors shadow-[0_0_20px_rgba(178,210,52,0.35)]"
              >
                <span>EXPLORE WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* ─── STAGE 05: FINAL HORIZON APEX & CONTINUATION ─── */}
          <motion.div
            style={{
              opacity: s5Opacity,
              y: s5Y,
            }}
            className="absolute inset-x-6 sm:inset-x-12 max-w-3xl mx-auto flex flex-col items-center text-center pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-xs font-mono text-[#B2D234] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] animate-ping" />
              <span className="tracking-[0.25em] uppercase text-[10px]">
                05 // APEX HORIZON
              </span>
            </div>

            <h2
              className="font-syne font-black uppercase text-white tracking-tight text-4xl sm:text-6xl md:text-7xl leading-tight"
              style={{
                textShadow: "0 0 45px rgba(178, 210, 52, 0.5)",
              }}
            >
              ENGINEERING THE{" "}
              <span
                className="text-[#B2D234] font-serif-italic font-normal italic lowercase"
                style={{
                  fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                }}
              >
                impossible.
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base font-sans text-neutral-300 font-light max-w-xl">
              Step beyond conventional interfaces into the autonomous frontier. Scroll down to enter the curated portfolio showcase.
            </p>
          </motion.div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BOTTOM FIXED MINIMAL NAVIGATION (PHASE TRACKER & ACTIVE INDICATOR)
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="relative z-40 w-full max-w-7xl mx-auto pb-6 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pointer-events-auto">
          {/* Bottom-Left Status */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
            <Terminal className="w-3.5 h-3.5 text-[#B2D234]" />
            <span className="text-[#B2D234]">SYS //</span>
            <span>PHASE 01-05 CONTINUUM</span>
          </div>

          {/* Bottom-Center 5-Stage Stepper Bar */}
          <div className="flex items-center gap-6 sm:gap-8 font-mono text-[10px] tracking-widest text-neutral-400">
            {[
              { id: 1, label: "01 GENESIS" },
              { id: 2, label: "02 WINGS" },
              { id: 3, label: "03 CRAFT" },
              { id: 4, label: "04 SILHOUETTE" },
              { id: 5, label: "05 APEX" },
            ].map((stage) => {
              return (
                <div key={stage.id} className="flex flex-col items-center gap-1">
                  <span className="text-neutral-400 hover:text-white transition-colors cursor-default">
                    {stage.label}
                  </span>
                  <div className="w-8 sm:w-12 h-0.5 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#B2D234] shadow-[0_0_8px_#B2D234]"
                      style={{
                        width: useTransform(
                          smoothProgress,
                          [(stage.id - 1) * 0.2, stage.id * 0.2],
                          ["0%", "100%"]
                        ),
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom-Right Coordinates */}
          <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] text-neutral-500 tracking-wider">
            <span>AXIS: 100% ALIGNED</span>
            <span>•</span>
            <span className="text-[#B2D234]">ONLINE</span>
          </div>
        </div>

      </div>
    </div>
  );
}

