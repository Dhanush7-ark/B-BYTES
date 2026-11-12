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

  // Layered parallax transformations for extended 220vh scroll track
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.55, 0.75], [0.4, 1, 1, 0.3]);
  const textScale = useTransform(scrollYProgress, [0.1, 0.35, 0.65], [0.96, 1, 0.98]);
  const textY = useTransform(scrollYProgress, [0.1, 0.35, 0.65], [30, 0, -30]);

  // Subtle flame parallax drifts so they exit/enter smoothly
  const topFlameY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const bottomFlameY = useTransform(scrollYProgress, [0.6, 1], [60, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[180vh] flex flex-col justify-between overflow-hidden bg-[#a4c330] select-none"
      style={{ backgroundColor: "#a4c330" }}
    >
      {/* ─── GREEN FLAME HANDS ANIMATION LAYERS (SEPARATED ACROSS 220VH TRACK) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Top Hanging Flame Claws (Inverted - Transitions from black into #a4c330 green) */}
        <motion.div
          style={{ y: topFlameY }}
          className="absolute top-0 left-0 w-full h-[32vh] sm:h-[40vh] md:h-[48vh] overflow-hidden opacity-100 pointer-events-none"
        >
          <img
            src="/fire-green.gif"
            alt="Green Flame Top"
            className="w-full h-full object-cover rotate-180 select-none pointer-events-none"
          />
        </motion.div>

        {/* Bottom Rising Flame Hands (Upright - Transitions from #a4c330 green into black below) */}
        <motion.div
          style={{ y: bottomFlameY }}
          className="absolute bottom-0 left-0 w-full h-[32vh] sm:h-[40vh] md:h-[48vh] overflow-hidden opacity-100 pointer-events-none"
        >
          <img
            src="/fire-green.gif"
            alt="Green Flame Bottom"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </motion.div>
      </div>

      {/* ─── FOREGROUND EDITORIAL CONTENT (HIGH CONTRAST ON #a4c330 GREEN) ─── */}
      <div className="relative z-30 w-full flex flex-col justify-between min-h-[180vh] py-10 sm:py-16 px-6 sm:px-12 lg:px-20 pointer-events-none">
        
        {/* Top Header Row (Stationed safely under top flame claws) */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-auto pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-xs font-mono text-[#a4c330] shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#a4c330] animate-pulse shadow-[0_0_8px_#a4c330]" />
            <span>03 // AUTONOMOUS MATRIX</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-black/85 font-semibold">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-black" />
              <span>GPU KINETIC SHADER</span>
            </span>
            <span>•</span>
            <span>SHARP SILHOUETTE ENGINE</span>
          </div>
        </div>

        {/* Center Floating Editorial Copy (Isolated with generous spacing - Bold high-contrast black typography) */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="w-full max-w-4xl mx-auto text-center my-auto py-24 sm:py-36 md:py-48 flex flex-col items-center pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-[11px] font-mono text-[#a4c330] mb-6 shadow-lg">
            <Sparkles className="w-3 h-3 text-[#a4c330]" />
            <span className="tracking-[0.25em] uppercase text-[#a4c330]">BEYOND DETERMINISTIC WORKFLOWS</span>
          </div>

          <h2
            className="font-syne font-black uppercase text-black tracking-tight leading-[1.03] text-4xl sm:text-6xl md:text-7xl lg:text-[84px] mb-6"
          >
            ORGANIC VELOCITY.{" "}
            <span
              className="text-black block sm:inline font-serif-italic font-normal"
              style={{
                fontFamily: 'var(--font-bodoni-72), "ITC Bodoni 72", Georgia, serif',
                fontStyle: "italic",
              }}
            >
              Unbroken flow.
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-black/90 font-medium leading-relaxed max-w-2xl text-balance">
            Watch the handoffs dissolve into continuous execution. When machines coordinate autonomously, latency approaches zero and operations evolve organically.
          </p>
        </motion.div>

        {/* Bottom Status Ticker Bar (Positioned above bottom rising flames at section exit) */}
        <div className="w-full max-w-7xl mx-auto pt-8 pb-10 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-black/90 pointer-events-auto font-bold">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-black" />
            <span className="tracking-widest uppercase text-[10px] text-black/80">
              TELEMETRY CORE // SHADER_FLUID_V4
            </span>
          </div>

          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-5 tracking-[0.25em] text-black">
            <span className="text-black font-extrabold">+</span>
            <span>TENSION</span>
            <span className="text-black font-extrabold">+</span>
            <span>IMMERSION</span>
            <span className="text-black font-extrabold">+</span>
            <span>IMPACT</span>
            <span className="text-black font-extrabold">+</span>
          </div>
        </div>

      </div>
    </section>
  );
}
