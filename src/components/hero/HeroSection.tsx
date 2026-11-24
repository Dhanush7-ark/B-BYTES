"use client";

import { useMemo, type JSX } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onWatchBuild?: () => void;
  onStartFree?: () => void;
}

/* ─────────────────────────────────────────────────────────────
   FLOATING LOGO-GREEN (#B2D234) EMBER PARTICLES
   ───────────────────────────────────────────────────────────── */
function FloatingEmbers() {
  const embers = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${15 + (i * 3.7) % 80}%`,
      bottom: `${(i * 4) % 65}%`,
      size: `${2 + (i % 3) * 1.5}px`,
      duration: `${4 + (i % 5) * 1.5}s`,
      delay: `${(i * 0.4) % 5}s`,
      drift: `${(i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 10)}px`,
      opacity: 0.35 + (i % 4) * 0.18,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {embers.map((e) => (
        <motion.div
          key={`ember-${e.id}`}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [-10, -180],
            x: [0, parseFloat(e.drift)],
            opacity: [0, e.opacity, 0],
          }}
          transition={{
            duration: parseFloat(e.duration),
            repeat: Infinity,
            delay: parseFloat(e.delay),
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: e.left,
            bottom: e.bottom,
            width: e.size,
            height: e.size,
            borderRadius: "50%",
            backgroundColor: "#B2D234",
            boxShadow: "0 0 8px #B2D234, 0 0 16px rgba(178, 210, 52, 0.8)",
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO SECTION COMPONENT (CLEAN MINIMALIST VERSION)
   ───────────────────────────────────────────────────────────── */
export function HeroSection({ onWatchBuild, onStartFree }: HeroSectionProps): JSX.Element {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030704] text-white flex flex-col justify-center pt-24 sm:pt-32 pb-16 px-6 sm:px-10 lg:px-16 selection:bg-[#B2D234] selection:text-black">
      
      {/* ─── 1. CINEMATIC PHOENIX & MOUNTAIN BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* The Clean Color-Graded Wallpaper in #B2D234 Logo Green */}
        <img
          src="/images/phoenix-hero-lime.jpg"
          alt="Emerald Phoenix atop Mountain in Project Colors"
          className="w-full h-full object-cover object-right lg:object-center filter brightness-[1.02] contrast-[1.05]"
        />

        {/* Soft Left Mist Vignette — enhances typography contrast while preserving mountain ridges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030704]/85 via-[#030704]/45 to-transparent sm:w-[60%] pointer-events-none" />

        {/* Soft Radial Ambient Logo Green Glow behind Phoenix */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(178,210,52,0.18),transparent_65%)] blur-[90px]" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(178,210,52,0.08),transparent_70%)] blur-[100px]" />

        {/* Thin Geometric Orbit Ring in Sky behind Phoenix in #B2D234 */}
        <div
          className="absolute right-[4%] sm:right-[14%] top-[10%] sm:top-[12%] w-[260px] sm:w-[540px] lg:w-[680px] h-[260px] sm:h-[540px] lg:h-[680px] rounded-full border border-[#B2D234]/25 pointer-events-none"
          style={{
            boxShadow: "0 0 25px rgba(178, 210, 52, 0.15)",
          }}
        />

        {/* Bottom Fade to Solid Obsidian to blend seamlessly into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent pointer-events-none" />
      </div>

      {/* ─── 2. FLOATING LOGO-GREEN EMBERS / SPARKS ─── */}
      <FloatingEmbers />

      {/* ─── 3. MAIN HERO CONTENT AREA (LEFT COLUMN) ─── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          
          {/* ─── HERO HEADLINE WITH EXACT MATCH LENS FLARE EFFECT (MATCHING USER SCREENSHOT) ─── */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-bold tracking-tight leading-[1.05] mb-6 sm:mb-8 select-none"
          >
            {/* Line 1: Pure Crisp White */}
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Ignite Your
            </span>

            {/* Line 2: Infinite Potential with Gradient, Glow & Integrated Baseline Lens Flare */}
            <span className="relative inline-block mt-1">
              {/* Luminous Tinted Green Text (Matching Image 1:1) */}
              <span
                className="bg-gradient-to-b from-[#F2FFE0] via-[#D5F565] to-[#B2D234] bg-clip-text text-transparent font-extrabold"
                style={{
                  filter: "drop-shadow(0 0 25px rgba(178, 210, 52, 0.45))",
                }}
              >
                Infinite Potential
              </span>

              {/* ─── EXACT BASELINE LENS FLARE EFFECT ─── */}
              {/* 1. Main Horizontal Anamorphic Laser Beam directly across the baseline */}
              <span
                className="absolute -bottom-1 -left-4 sm:-left-12 -right-8 sm:-right-36 max-w-[95vw] h-[2px] pointer-events-none block"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(178, 210, 52, 0.3) 12%, rgba(178, 210, 52, 0.95) 35%, #FFFFFF 60%, rgba(178, 210, 52, 0.95) 80%, rgba(178, 210, 52, 0.3) 92%, transparent 100%)",
                  boxShadow: "0 0 10px #B2D234, 0 0 24px #B2D234, 0 0 50px rgba(178, 210, 52, 0.7)",
                }}
              />

              {/* 2. Soft Volumetric Radiance under the baseline */}
              <span
                className="absolute -bottom-5 left-0 right-0 h-10 pointer-events-none block blur-md"
                style={{
                  background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(178, 210, 52, 0.55), transparent 70%)",
                }}
              />

              {/* 3. Primary Optical Starburst Hotspot (Just after the 'l' in Potential, matching photo) */}
              <span className="absolute -bottom-1 right-2 sm:right-6 pointer-events-none flex items-center justify-center">
                {/* Intense White Core */}
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white shadow-[0_0_12px_#FFFFFF,0_0_28px_#B2D234,0_0_60px_#B2D234] block" />
                {/* Horizontal Flare Ray */}
                <span className="absolute w-28 sm:w-40 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#B2D234] block" />
                {/* Vertical Flare Ray */}
                <span className="absolute h-12 sm:h-16 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent opacity-85 shadow-[0_0_8px_#B2D234] block" />
                {/* Subtle 45-degree Starburst Rays */}
                <span className="absolute w-16 sm:w-20 h-[1px] rotate-45 bg-gradient-to-r from-transparent via-[#C5EB2A] to-transparent opacity-65 block" />
                <span className="absolute w-16 sm:w-20 h-[1px] -rotate-45 bg-gradient-to-r from-transparent via-[#C5EB2A] to-transparent opacity-65 block" />
              </span>

              {/* 4. Secondary Soft Flare Hotspot (Under 'Infinite', matching photo) */}
              <span className="absolute -bottom-1 left-[18%] pointer-events-none flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-white/95 shadow-[0_0_10px_#FFFFFF,0_0_22px_#B2D234,0_0_45px_rgba(178,210,52,0.9)] block" />
                <span className="absolute w-20 sm:w-28 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 block" />
              </span>
            </span>
          </motion.h1>

          {/* Subtitle / Description (Clean & Crisp below the Lens Flare) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 text-balance"
          >
            A new era of creativity, innovation and possibilities.<br className="hidden sm:inline" />
            Let&apos;s build something extraordinary together.
          </motion.p>

          {/* Primary Action Button: Explore More → in Logo Green (#B2D234) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto"
          >
            <button
              onClick={onStartFree}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#B2D234] text-[#050505] font-semibold text-sm sm:text-base hover:bg-[#c5eb2a] shadow-[0_0_30px_rgba(178,210,52,0.55),0_0_60px_rgba(178,210,52,0.25)] hover:shadow-[0_0_45px_rgba(178,210,52,0.85)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
