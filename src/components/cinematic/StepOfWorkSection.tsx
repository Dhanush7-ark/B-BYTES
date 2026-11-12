"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Activity, ShieldCheck, ArrowDown, Compass, Palette, Code2, Rocket } from "lucide-react";
import { CinematicPhoenixBeamCanvas } from "./CinematicPhoenixBeamCanvas";

export function StepOfWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Track active step based on scroll progression across the 4 sections
  useEffect(() => {
    return scrollYProgress.on("change", (p) => {
      // 0.0 - 0.22: Intro & Step 1
      // 0.22 - 0.44: Step 2
      // 0.44 - 0.68: Step 3
      // 0.68 - 1.00: Step 4 & Monolith Climax
      if (p < 0.28) setActiveStep(1);
      else if (p < 0.50) setActiveStep(2);
      else if (p < 0.74) setActiveStep(3);
      else setActiveStep(4);
    });
  }, [scrollYProgress]);

  // Ground smoke travels UP when scrolling down, and DOWN when scrolling up
  const groundSmokeY = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const groundSmokeY2 = useTransform(scrollYProgress, [0, 1], [110, -160]);
  const groundSmokeScale = useTransform(scrollYProgress, [0.3, 1], [0.95, 1.3]);
  const groundSmokeOpacity = useTransform(scrollYProgress, [0.15, 0.65, 1], [0.35, 0.85, 1.0]);

  const stepsData = [
    {
      id: 1,
      tag: "STEP 01 // DISCOVERY",
      shortTitle: "01 DISCOVERY",
      title: "Discovery",
      icon: Compass,
      align: "left",
      telemetry: "PHASE_01 // INTENT_EXPLORATION",
      desc: "Every great story begins with understanding. We explore your vision, audience, and goals to uncover the foundation for an experience that feels authentic and unforgettable.",
    },
    {
      id: 2,
      tag: "STEP 02 // CREATIVE DIRECTION",
      shortTitle: "02 DIRECTION",
      title: "Creative Direction",
      icon: Palette,
      align: "right",
      telemetry: "PHASE_02 // SYSTEM_ARCHITECTURE",
      desc: "Ideas take shape through thoughtful research, wireframes, visual exploration, motion concepts, and design systems. Every decision is intentional, ensuring the experience is both visually compelling and purpose-driven.",
    },
    {
      id: 3,
      tag: "STEP 03 // DIGITAL CRAFTSMANSHIP",
      shortTitle: "03 CRAFTSMANSHIP",
      title: "Digital Craftsmanship",
      icon: Code2,
      align: "left",
      telemetry: "PHASE_03 // KINETIC_SYNTHESIS",
      desc: "With strategy and design in place, we transform concepts into immersive digital experiences. Every interaction, animation, and line of code is crafted for performance, accessibility, and lasting impact.",
    },
    {
      id: 4,
      tag: "STEP 04 // LAUNCH & EVOLUTION",
      shortTitle: "04 LAUNCH",
      title: "Launch & Evolution",
      icon: Rocket,
      align: "right",
      telemetry: "PHASE_04 // CONTINUOUS_ASCENT",
      desc: "A successful launch is only the beginning. We monitor performance, refine the experience, and continuously evolve the product to keep it relevant, engaging, and aligned with your business goals.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="step-of-work"
      className="step-of-work relative w-full min-h-[560vh] bg-[#000000] text-neutral-100 select-none overflow-clip"
    >
      {/* Target anchor for "How it works" navbar link */}
      <div id="workflow" className="absolute -top-12" />

      {/* ═══════════════════════════════════════════════════════════════════
          STICKY CINEMATIC PHOENIX & TRAVELING GREEN BEAM BACKGROUND
          (Pins smoothly in viewport across all 4 full scrollable sections)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none select-none z-0">
        
        {/* Full-Width Radial Volumetric Radiance */}
        <div
          className="absolute inset-0 w-screen min-w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 65%, rgba(178, 210, 52, 0.22) 0%, rgba(178, 210, 52, 0.06) 45%, rgba(178, 210, 52, 0.015) 75%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />

        {/* ─── HARDWARE WEBGL: REAL-TIME TRAVELING GREEN BEAM & FLUID SMOKE ─── */}
        <CinematicPhoenixBeamCanvas
          className="absolute top-0 left-0 w-screen min-w-full h-full object-cover object-bottom select-none pointer-events-none filter drop-shadow-[0_0_60px_rgba(178,210,52,0.55)]"
          style={{
            mixBlendMode: "screen",
          }}
        />

        {/* Full-Width Soft Floor Ambient Glow & Reactive Ground Smoke */}
        <div className="absolute bottom-0 left-0 right-0 w-screen min-w-full flex flex-col items-center pointer-events-none z-12 overflow-visible">
          {/* Base Floor Radiance */}
          <div
            className="w-screen min-w-full h-[220px]"
            style={{
              background:
                "radial-gradient(ellipse 95% 70% at 50% 100%, rgba(178, 210, 52, 0.40) 0%, rgba(178, 210, 52, 0.09) 45%, transparent 80%)",
              filter: "blur(35px)",
            }}
          />

          {/* Layer 1: Reactive Floating Ground Smoke (Travels Upward when scrolling down, Downward when scrolling up) */}
          <motion.div
            style={{
              y: groundSmokeY,
              scale: groundSmokeScale,
              opacity: groundSmokeOpacity,
            }}
            className="absolute bottom-4 w-screen min-w-full h-[280px] pointer-events-none"
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse 90% 65% at 50% 85%, rgba(178, 210, 52, 0.35) 0%, rgba(216, 255, 56, 0.12) 35%, transparent 75%)",
                filter: "blur(45px)",
              }}
            />
          </motion.div>

          {/* Layer 2: Deeper Mist Tendrils (Faster Parallax Travel) */}
          <motion.div
            style={{
              y: groundSmokeY2,
              opacity: groundSmokeOpacity,
            }}
            className="absolute bottom-8 w-screen min-w-full h-[200px] pointer-events-none"
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse 75% 50% at 50% 90%, rgba(178, 210, 52, 0.28) 0%, rgba(178, 210, 52, 0.08) 40%, transparent 70%)",
                filter: "blur(35px)",
              }}
            />
          </motion.div>
        </div>

        {/* ─── LATERAL PROCESS STEPS HUD INDICATOR (STICKY OVERVIEW) ─── */}
        <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 font-mono text-[10px] tracking-widest uppercase pointer-events-auto z-30 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <div className="text-[9px] text-[#B2D234]/70 border-b border-white/10 pb-1.5 mb-1 font-bold">
            // PROCESS_AXIS
          </div>
          {stepsData.map((s) => (
            <div
              key={s.id}
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeStep === s.id
                  ? "text-white font-bold translate-x-1"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === s.id
                    ? "bg-[#B2D234] shadow-[0_0_8px_#B2D234] scale-125"
                    : "bg-neutral-700"
                }`}
              />
              <span>{s.shortTitle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          FOREGROUND CONTENT: 4 FULL SCROLLABLE SECTIONS (EACH ~100VH)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full -mt-[100vh]">
        
        {/* ─── 0. TOP INTRO & TELEMETRY SECTION (~85VH) ─── */}
        <div className="min-h-[85vh] w-full max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-16 flex flex-col justify-between">
          {/* Top Telemetry Header */}
          <div className="w-full flex items-center justify-between pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-sm border border-[#B2D234]/40 flex items-center justify-center bg-[#101704]/90 backdrop-blur-md shadow-[0_0_12px_rgba(178,210,52,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] shadow-[0_0_6px_#D8FF38]" />
              </div>
              <div className="font-mono text-[11px] tracking-wider text-neutral-300">
                <span className="text-[#B2D234] font-semibold">BOUNTY</span>
                <span className="text-neutral-500 mx-1.5">//</span>
                <span className="text-neutral-400">PROCESS CONTINUUM (4 SCROLLABLE SECTIONS)</span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5 text-[#B2D234]">
                <Activity className="w-3.5 h-3.5 text-[#B2D234] animate-pulse" />
                <span>ACTIVE BEAM SYNCHRONIZED</span>
              </span>
              <span className="text-neutral-700">•</span>
              <span>4 SECTIONS TRAVEL</span>
            </div>
          </div>

          {/* Intro Title & Narrative */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 my-auto py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:max-w-2xl text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-[10px] font-mono text-[#B2D234] mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(178,210,52,0.15)]">
                <Sparkles className="w-3 h-3 text-[#B2D234]" />
                <span>PHASE 01 // ARCHITECTURAL MASTERY</span>
              </div>

              <h2 className="heading-of-step-work text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light leading-[1.12] text-white tracking-tight">
                From the First Idea to the Final Frame Every Step Is Crafted to Create an Unforgettable{" "}
                <span
                  className="font-calligraphy text-[#B2D234] font-normal inline-block text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] align-baseline ml-1"
                  style={{
                    fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                    textShadow: "0 0 35px rgba(178, 210, 52, 0.7)",
                  }}
                >
                  Digital Experience.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="w-full lg:max-w-md lg:text-right flex flex-col lg:items-end pt-2"
            >
              <div className="text-[10px] font-mono tracking-widest text-[#B2D234]/80 uppercase mb-2">
                PHILOSOPHY // ZERO GUESSWORK
              </div>
              <p className="para-for-stepss text-xs sm:text-sm md:text-base font-sans text-neutral-300 leading-relaxed font-light">
                Every project is approached with intention, not assumptions. Through strategy, design, and development, each stage is carefully crafted to create digital experiences that are visually striking, technically refined, and built to leave a lasting impression.
              </p>
            </motion.div>
          </div>

          {/* Scroll Prompt */}
          <div className="w-full pt-8 flex items-center justify-between border-t border-white/5 font-mono text-[11px] text-neutral-400">
            <div className="flex items-center gap-2 text-[#B2D234]">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span>SCROLL TO DESCEND THROUGH THE 4 PROCESS SECTIONS</span>
            </div>
            <div className="hidden sm:block text-neutral-500">
              01 DISCOVERY → 02 DIRECTION → 03 CRAFTSMANSHIP → 04 LAUNCH
            </div>
          </div>
        </div>

        {/* ─── SECTION 01 // DISCOVERY (FULL 100VH SECTION) ─── */}
        <div className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 py-16">
          <div className="w-full max-w-7xl mx-auto flex justify-start">
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="max-w-md sm:max-w-lg text-left bg-[#0c1202]/85 backdrop-blur-xl p-8 rounded-2xl border border-[#B2D234]/35 shadow-[0_0_50px_rgba(178,210,52,0.18)]"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a2905] border border-[#B2D234]/40 flex items-center justify-center shadow-[0_0_15px_rgba(178,210,52,0.3)]">
                    <Compass className="w-4 h-4 text-[#B2D234]" />
                  </div>
                  <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase font-bold">
                    STEP 01 // DISCOVERY
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                  01 / 04
                </span>
              </div>

              <h3
                className="font-calligraphy text-5xl sm:text-7xl text-[#B2D234] leading-tight mb-4"
                style={{
                  fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                  textShadow: "0 0 35px rgba(178, 210, 52, 0.6)",
                }}
              >
                Discovery
              </h3>

              <p className="text-sm sm:text-base font-sans text-neutral-200 leading-relaxed font-light mb-5">
                Every great story begins with understanding. We explore your vision, audience, and goals to uncover the foundation for an experience that feels authentic and unforgettable.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#B2D234]/80">
                <span>// INTENT_EXPLORATION</span>
                <span>AXIS_BEAM // ENTERING</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── SECTION 02 // CREATIVE DIRECTION (FULL 100VH SECTION) ─── */}
        <div className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 py-16">
          <div className="w-full max-w-7xl mx-auto flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="max-w-md sm:max-w-lg text-right flex flex-col items-end bg-[#0c1202]/85 backdrop-blur-xl p-8 rounded-2xl border border-[#B2D234]/35 shadow-[0_0_50px_rgba(178,210,52,0.18)]"
            >
              <div className="flex items-center justify-between gap-4 w-full mb-4 flex-row-reverse">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase font-bold">
                    STEP 02 // CREATIVE DIRECTION
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#1a2905] border border-[#B2D234]/40 flex items-center justify-center shadow-[0_0_15px_rgba(178,210,52,0.3)]">
                    <Palette className="w-4 h-4 text-[#B2D234]" />
                  </div>
                </div>
                <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                  02 / 04
                </span>
              </div>

              <h3
                className="font-calligraphy text-5xl sm:text-7xl text-[#B2D234] leading-tight mb-4"
                style={{
                  fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                  textShadow: "0 0 35px rgba(178, 210, 52, 0.6)",
                }}
              >
                Creative Direction
              </h3>

              <p className="text-sm sm:text-base font-sans text-neutral-200 leading-relaxed font-light text-right mb-5">
                Ideas take shape through thoughtful research, wireframes, visual exploration, motion concepts, and design systems. Every decision is intentional, ensuring the experience is both visually compelling and purpose-driven.
              </p>

              <div className="pt-4 border-t border-white/10 w-full flex items-center justify-between font-mono text-[10px] text-[#B2D234]/80">
                <span>AXIS_BEAM // MID_TRANSIT</span>
                <span>// SYSTEM_ARCHITECTURE</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── SECTION 03 // DIGITAL CRAFTSMANSHIP (FULL 100VH SECTION) ─── */}
        <div className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 py-16">
          <div className="w-full max-w-7xl mx-auto flex justify-start">
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="max-w-md sm:max-w-lg text-left bg-[#0c1202]/85 backdrop-blur-xl p-8 rounded-2xl border border-[#B2D234]/35 shadow-[0_0_50px_rgba(178,210,52,0.18)]"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a2905] border border-[#B2D234]/40 flex items-center justify-center shadow-[0_0_15px_rgba(178,210,52,0.3)]">
                    <Code2 className="w-4 h-4 text-[#B2D234]" />
                  </div>
                  <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase font-bold">
                    STEP 03 // DIGITAL CRAFTSMANSHIP
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                  03 / 04
                </span>
              </div>

              <h3
                className="font-calligraphy text-5xl sm:text-7xl text-[#B2D234] leading-tight mb-4"
                style={{
                  fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                  textShadow: "0 0 35px rgba(178, 210, 52, 0.6)",
                }}
              >
                Digital Craftsmanship
              </h3>

              <p className="text-sm sm:text-base font-sans text-neutral-200 leading-relaxed font-light mb-5">
                With strategy and design in place, we transform concepts into immersive digital experiences. Every interaction, animation, and line of code is crafted for performance, accessibility, and lasting impact.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#B2D234]/80">
                <span>// KINETIC_SYNTHESIS</span>
                <span>AXIS_BEAM // PENETRATING</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── SECTION 04 // LAUNCH & EVOLUTION (FULL 100VH SECTION) ─── */}
        <div className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 py-16">
          <div className="w-full max-w-7xl mx-auto flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="max-w-md sm:max-w-lg text-right flex flex-col items-end bg-[#0c1202]/85 backdrop-blur-xl p-8 rounded-2xl border border-[#B2D234]/35 shadow-[0_0_50px_rgba(178,210,52,0.18)]"
            >
              <div className="flex items-center justify-between gap-4 w-full mb-4 flex-row-reverse">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase font-bold">
                    STEP 04 // LAUNCH & EVOLUTION
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#1a2905] border border-[#B2D234]/40 flex items-center justify-center shadow-[0_0_15px_rgba(178,210,52,0.3)]">
                    <Rocket className="w-4 h-4 text-[#B2D234]" />
                  </div>
                </div>
                <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                  04 / 04
                </span>
              </div>

              <h3
                className="font-calligraphy text-5xl sm:text-7xl text-[#B2D234] leading-tight mb-4"
                style={{
                  fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                  textShadow: "0 0 35px rgba(178, 210, 52, 0.6)",
                }}
              >
                Launch & Evolution
              </h3>

              <p className="text-sm sm:text-base font-sans text-neutral-200 leading-relaxed font-light text-right mb-5">
                A successful launch is only the beginning. We monitor performance, refine the experience, and continuously evolve the product to keep it relevant, engaging, and aligned with your business goals.
              </p>

              <div className="pt-4 border-t border-white/10 w-full flex items-center justify-between font-mono text-[10px] text-[#B2D234]/80">
                <span>AXIS_BEAM // CONNECTED_TO_GROUND</span>
                <span>// CONTINUOUS_ASCENT</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── CLIMAX // MONOLITH ARRIVAL & SILHOUETTE BASE SECTION (~95VH) ─── */}
        <div className="min-h-[95vh] w-full max-w-7xl mx-auto px-6 sm:px-12 pb-20 flex flex-col justify-end items-center relative">
          
          {/* Centered Mysterious Human Silhouette Standing Under the Blazing Laser Beam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="relative flex items-center justify-center mb-8 pointer-events-none"
          >
            {/* Volumetric Green Horizon Halo behind silhouette */}
            <div className="absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full bg-[radial-gradient(circle,rgba(178,210,52,0.35)_0%,rgba(6,61,32,0.12)_45%,transparent_70%)] blur-[70px] pointer-events-none" />

            {/* Silhouette Figure */}
            <img
              src="/cinematic-silhouette-bounty-clean.png"
              alt="Human Silhouette at Monolith Base"
              className="relative z-10 w-[240px] sm:w-[320px] md:w-[380px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
            />
          </motion.div>

          {/* Bottom Telemetry Status Row */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col sm:flex-row items-end justify-between gap-8 pt-6 border-t border-white/10"
          >
            {/* Left Telemetry Accent */}
            <div className="max-w-xs text-left font-mono text-[11px] text-neutral-400">
              <div className="text-[#B2D234] font-semibold flex items-center gap-2 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>STAGE // MONOLITH ARRIVAL</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Where high-precision machine intelligence converges with human intention on the sovereign frontier.
              </p>
            </div>

            {/* Right Status */}
            <div className="text-right flex flex-col items-end font-mono text-[11px] text-neutral-400">
              <div className="px-3.5 py-1.5 rounded-full bg-[#101704]/90 border border-[#B2D234]/40 text-[#B2D234] text-[10px] tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(178,210,52,0.25)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B2D234] animate-ping" />
                <span>ALL SYSTEMS ONLINE // UNBROKEN FLOW</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#B2D234] animate-pulse" />
                <span>CONTINUING SEAMLESSLY INTO AWARDS & WORKFLOW</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
