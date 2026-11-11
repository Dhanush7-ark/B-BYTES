"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CinematicGreenBackground } from "@/components/animations/CinematicGreenBackground";
import { Sparkles, Terminal, Activity } from "lucide-react";

export function CinematicGreenSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Layered parallax transformations
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.9], [0.4, 1, 1, 0.4]);
  const textScale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.96, 1, 0.98]);
  const textY = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [20, 0, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#000000] z-20 border-t border-b border-[#B2D234]/20 select-none"
    >
      {/* ─── GPU WEBGL LIQUID-INK BACKGROUND (CLEAN TYPOGRAPHY PRESERVED) ─── */}
      <CinematicGreenBackground className="absolute inset-0 w-full h-full" showEmblem={false} />

      {/* ─── GREEN FLAME HANDS ANIMATION LAYERS (TOP & BOTTOM REFERENCE MATCH) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Top Hanging Flame Claws (Inverted) */}
        <div className="absolute top-0 left-0 w-full h-[30vh] sm:h-[38vh] md:h-[42vh] overflow-hidden opacity-95">
          <img
            src="/fire-green.gif"
            alt="Green Flame Top"
            className="w-full h-full object-cover rotate-180 select-none pointer-events-none"
            style={{
              maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            }}
          />
        </div>

        {/* Bottom Rising Flame Hands (Upright) */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] sm:h-[38vh] md:h-[42vh] overflow-hidden opacity-95">
          <img
            src="/fire-green.gif"
            alt="Green Flame Bottom"
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{
              maskImage: "linear-gradient(to top, black 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 55%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* ─── FOREGROUND EDITORIAL CONTENT (SCROLL-REACTIVE) ─── */}
      <div className="relative z-30 w-full flex flex-col justify-between min-h-screen py-8 sm:py-14 px-6 sm:px-12 lg:px-20 pointer-events-none">
        
        {/* Top Header Row */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B2608]/80 border border-[#B2D234]/40 text-xs font-mono text-[#B2D234] backdrop-blur-md shadow-[0_0_15px_rgba(178, 210, 52,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#B2D234] animate-pulse shadow-[0_0_8px_#B2D234]" />
            <span>03 // AUTONOMOUS MATRIX</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-[#B2D234]/80">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#B2D234]" />
              <span>GPU KINETIC SHADER</span>
            </span>
            <span>•</span>
            <span>SHARP SILHOUETTE ENGINE</span>
          </div>
        </div>

        {/* Center Floating Editorial Copy */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="w-full max-w-4xl mx-auto text-center my-auto py-8 sm:py-12 flex flex-col items-center pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 border border-[#B2D234]/30 text-[11px] font-mono text-neutral-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(178, 210, 52,0.15)]">
            <Sparkles className="w-3 h-3 text-[#B2D234]" />
            <span className="tracking-[0.25em] uppercase text-[#B2D234]">BEYOND DETERMINISTIC WORKFLOWS</span>
          </div>

          <h2
            className="font-syne font-extrabold uppercase text-white tracking-tight leading-[1.05] text-3xl sm:text-5xl md:text-6xl lg:text-[72px] mb-6"
            style={{
              textShadow: "0 0 45px rgba(178, 210, 52, 0.45)",
            }}
          >
            ORGANIC VELOCITY.{" "}
            <span
              className="text-[#B2D234] block sm:inline font-serif-italic font-normal"
              style={{
                fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                fontStyle: "italic",
                textShadow: "0 0 55px rgba(178, 210, 52, 0.8)",
              }}
            >
              Unbroken flow.
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance">
            Watch the handoffs dissolve into continuous execution. When machines coordinate autonomously, latency approaches zero and operations evolve organically.
          </p>
        </motion.div>

        {/* Bottom Status Ticker Bar (Image 1 Style with Green Theme) */}
        <div className="w-full max-w-7xl mx-auto pt-6 border-t border-[#B2D234]/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#B2D234]/90 pointer-events-auto">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#B2D234]" />
            <span className="tracking-widest uppercase text-[10px] text-neutral-400">
              TELEMETRY CORE // SHADER_FLUID_V4
            </span>
          </div>

          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-5 tracking-[0.25em] text-neutral-300">
            <span className="text-[#B2D234]">+</span>
            <span>TENSION</span>
            <span className="text-[#B2D234]">+</span>
            <span>IMMERSION</span>
            <span className="text-[#B2D234]">+</span>
            <span>IMPACT</span>
            <span className="text-[#B2D234]">+</span>
          </div>
        </div>

      </div>
    </section>
  );
}
