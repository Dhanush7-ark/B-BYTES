"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, ShieldCheck, ArrowDown, Compass, Palette, Code2, Rocket } from "lucide-react";

/**
 * StepOfWorkSection
 * Direct motion-transplant recreation of the cinematic post-cards section from https://www.meermohsin.me/
 * Stretched to fit full sides (100vw) and seamlessly continue into the sections below:
 * - Full-width edge-to-edge stretching (w-screen min-w-full, object-cover object-bottom, zero side margins)
 * - 3 long scroll sections starting from black atmosphere at the top, down to the human silhouette at the glowing floor
 * - Stretched long to below sections also (#workflow) with unbroken laser filament, volumetric pillar, and floor radiance
 * - Section 1 (0 to 100vh): Pure black atmospheric opening with laser needle tip, top headline & philosophical narrative
 * - Section 2 (100vh to 220vh): The 4 staggered step boxes (Discovery, Creative Direction, Digital Craftsmanship, Launch & Evolution)
 * - Section 3 (220vh to 330vh): The dramatic human silhouette standing in the green beam on the full-width glowing floor
 */
export function StepOfWorkSection() {
  return (
    <section
      id="step-of-work"
      className="step-of-work relative w-full min-h-[320vh] bg-[#000000] text-neutral-100 select-none overflow-hidden"
    >
      {/* Target anchor for "How it works" navbar link */}
      <div id="workflow" className="absolute -top-12" />
      {/* ═══════════════════════════════════════════════════════════════════
          LAYER A: FULL-WIDTH STRETCHED CINEMATIC IMAGE & AMBIENT AURA
          (FITS SIDES COMPLETELY 100vw, EXTENDS LONG DOWN THE 3 SECTIONS)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        
        {/* Full-Width Radial Volumetric Radiance */}
        <div
          className="absolute inset-0 w-screen min-w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 65%, rgba(178, 210, 52, 0.25) 0%, rgba(178, 210, 52, 0.07) 45%, rgba(178, 210, 52, 0.02) 75%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />

        {/* The Silhouette & Beam Image Stretched Edge-to-Edge Across the Screen */}
        <img
          src="/cinematic-silhouette-bounty-clean.png"
          alt="Cinematic Silhouette in Vertical Green Light Beam"
          className="absolute top-0 left-0 w-screen min-w-full h-full object-cover object-bottom select-none pointer-events-none filter drop-shadow-[0_0_60px_rgba(178,210,52,0.55)]"
          style={{
            mixBlendMode: "screen",
          }}
        />

        {/* Full-Width Soft Floor Ambient Glow at Silhouette Base */}
        <div className="absolute bottom-[2vh] sm:bottom-[4vh] left-0 right-0 w-screen min-w-full flex flex-col items-center pointer-events-none z-12">
          <div
            className="w-screen min-w-full h-[220px]"
            style={{
              background:
                "radial-gradient(ellipse 95% 70% at 50% 100%, rgba(178, 210, 52, 0.4) 0%, rgba(178, 210, 52, 0.1) 45%, transparent 80%)",
              filter: "blur(35px)",
            }}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          TOP TELEMETRY BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-40 w-full max-w-7xl mx-auto pt-8 px-6 sm:px-12 flex items-center justify-between pointer-events-auto">
        {/* Chapter / Phase Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-sm border border-[#B2D234]/40 flex items-center justify-center bg-[#101704]/90 backdrop-blur-md shadow-[0_0_12px_rgba(178,210,52,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] shadow-[0_0_6px_#D8FF38]" />
          </div>
          <div className="font-mono text-[11px] tracking-wider text-neutral-300">
            <span className="text-[#B2D234] font-semibold">BOUNTY</span>
            <span className="text-neutral-500 mx-1.5">//</span>
            <span className="text-neutral-400">PROCESS CONTINUUM (3 LONG SCROLL SECTIONS)</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-neutral-400">
          <span className="flex items-center gap-1.5 text-[#B2D234]">
            <Activity className="w-3.5 h-3.5 text-[#B2D234] animate-pulse" />
            <span>FULL-WIDTH FIT // 100VW</span>
          </span>
          <span className="text-neutral-700">•</span>
          <span>AXIS ALIGNED</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 01: THE VISION & DISCOVERY (TOP SECTION ~100VH)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 min-h-[90vh] w-full max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-16 flex flex-col justify-between">
        
        {/* Top Split Row: Headline on Left/Center, Narrative on Right */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12">
          {/* Main Headline (.heading-of-step-work) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101704]/90 border border-[#B2D234]/30 text-[10px] font-mono text-[#B2D234] mb-4 backdrop-blur-md">
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

          {/* Supporting Narrative (.para-for-stepss) */}
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

        {/* Scroll Indicator Prompt */}
        <div className="w-full pt-16 flex items-center justify-between border-t border-white/5 font-mono text-[11px] text-neutral-400">
          <div className="flex items-center gap-2 text-[#B2D234]">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>SCROLL TO DESCEND THROUGH THE PROCESS</span>
          </div>
          <div className="hidden sm:block text-neutral-500">
            01 VISION → 02 DIRECTION → 03 CRAFT → 04 LAUNCH
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 02: THE 4 STAGGERED STEP BOXES ALONG THE EXPANDING BEAM
          (MIDDLE SECTION ~120VH)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 min-h-[130vh] w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col justify-around gap-20 sm:gap-28">
        
        {/* Step 01: Discovery (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex justify-start"
        >
          <div className="max-w-sm sm:max-w-md text-left bg-[#101704]/40 backdrop-blur-md p-6 rounded-xl border border-[#B2D234]/20 shadow-[0_0_30px_rgba(178,210,52,0.1)]">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-[#B2D234]" />
              <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase">
                STEP 01 // DISCOVERY
              </span>
            </div>
            <h3
              className="font-calligraphy text-5xl sm:text-6xl md:text-7xl text-[#B2D234] leading-none mb-3"
              style={{
                fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                textShadow: "0 0 35px rgba(178, 210, 52, 0.5)",
              }}
            >
              Discovery
            </h3>
            <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light">
              Every great story begins with understanding. We explore your vision, audience, and goals to uncover the foundation for an experience that feels authentic and unforgettable.
            </p>
          </div>
        </motion.div>

        {/* Step 02: Creative Direction (Right Side, text-right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex justify-end"
        >
          <div className="max-w-sm sm:max-w-md text-right flex flex-col items-end bg-[#101704]/40 backdrop-blur-md p-6 rounded-xl border border-[#B2D234]/20 shadow-[0_0_30px_rgba(178,210,52,0.1)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase">
                STEP 02 // CREATIVE DIRECTION
              </span>
              <Palette className="w-4 h-4 text-[#B2D234]" />
            </div>
            <h3
              className="font-calligraphy text-5xl sm:text-6xl md:text-7xl text-[#B2D234] leading-none mb-3"
              style={{
                fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                textShadow: "0 0 35px rgba(178, 210, 52, 0.5)",
              }}
            >
              Creative Direction
            </h3>
            <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light text-right">
              Ideas take shape through thoughtful research, wireframes, visual exploration, motion concepts, and design systems. Every decision is intentional, ensuring the experience is both visually compelling and purpose-driven.
            </p>
          </div>
        </motion.div>

        {/* Step 03: Digital Craftsmanship (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex justify-start"
        >
          <div className="max-w-sm sm:max-w-md text-left bg-[#101704]/40 backdrop-blur-md p-6 rounded-xl border border-[#B2D234]/20 shadow-[0_0_30px_rgba(178,210,52,0.1)]">
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-[#B2D234]" />
              <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase">
                STEP 03 // DIGITAL CRAFTSMANSHIP
              </span>
            </div>
            <h3
              className="font-calligraphy text-5xl sm:text-6xl md:text-7xl text-[#B2D234] leading-none mb-3"
              style={{
                fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                textShadow: "0 0 35px rgba(178, 210, 52, 0.5)",
              }}
            >
              Digital Craftsmanship
            </h3>
            <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light">
              With strategy and design in place, we transform concepts into immersive digital experiences. Every interaction, animation, and line of code is crafted for performance, accessibility, and lasting impact.
            </p>
          </div>
        </motion.div>

        {/* Step 04: Launch & Evolution (Right Side, text-right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex justify-end"
        >
          <div className="max-w-sm sm:max-w-md text-right flex flex-col items-end bg-[#101704]/40 backdrop-blur-md p-6 rounded-xl border border-[#B2D234]/20 shadow-[0_0_30px_rgba(178,210,52,0.1)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#B2D234] tracking-widest uppercase">
                STEP 04 // LAUNCH & EVOLUTION
              </span>
              <Rocket className="w-4 h-4 text-[#B2D234]" />
            </div>
            <h3
              className="font-calligraphy text-5xl sm:text-6xl md:text-7xl text-[#B2D234] leading-none mb-3"
              style={{
                fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                textShadow: "0 0 35px rgba(178, 210, 52, 0.5)",
              }}
            >
              Launch & Evolution
            </h3>
            <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light text-right">
              A successful launch is only the beginning. We monitor performance, refine the experience, and continuously evolve the product to keep it relevant, engaging, and aligned with your business goals.
            </p>
          </div>
        </motion.div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 03: CINEMATIC HUMAN SILHOUETTE (BOTTOM SECTION ~100VH)
          ARRIVING AT THE BASE OF THE GREEN PILLAR & GLOWING HORIZON FLOOR
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 min-h-[90vh] w-full max-w-7xl mx-auto px-6 sm:px-12 pb-16 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full flex flex-col sm:flex-row items-end justify-between gap-8 pb-10"
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
            <div className="px-3 py-1 rounded bg-[#101704]/90 border border-[#B2D234]/40 text-[#B2D234] text-[10px] tracking-widest uppercase mb-2 shadow-[0_0_12px_rgba(178,210,52,0.25)]">
              ALL SYSTEMS ONLINE // UNBROKEN FLOW
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#B2D234] animate-pulse" />
              <span>CONTINUING SEAMLESSLY INTO WORKFLOW SIMULATOR</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
