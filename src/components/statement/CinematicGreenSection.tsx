"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CinematicGreenSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const topFlameRef = useRef<HTMLDivElement>(null);
  const bottomFlameRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Viewport sleep observer: completely suspends GIF animation decoding when off-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // GSAP ScrollTrigger synchronization (unified with Lenis & central ticker, zero competing listeners)
  useEffect(() => {
    const section = sectionRef.current;
    const textEl = textRef.current;
    const topFlame = topFlameRef.current;
    const bottomFlame = bottomFlameRef.current;

    if (!section || !textEl || !topFlame || !bottomFlame) return;

    const ctx = gsap.context(() => {
      // Parallax text drift and scale
      gsap.fromTo(
        textEl,
        { opacity: 0.5, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.6,
          },
        }
      );

      // Top flame exit drift
      gsap.fromTo(
        topFlame,
        { y: 0 },
        {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "center top",
            scrub: 0.6,
          },
        }
      );

      // Bottom flame entrance drift
      gsap.fromTo(
        bottomFlame,
        { y: 50 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "center bottom",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-[140vh] sm:min-h-[160vh] flex flex-col justify-center items-center overflow-hidden bg-[#aaca31] select-none"
      style={{
        backgroundColor: "#aaca31",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {/* ─── GREEN FLAME HANDS ANIMATION LAYERS ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Top Hanging Flame Claws (Inverted - Transitions from black into #aaca31 green) */}
        <div
          ref={topFlameRef}
          className="absolute top-0 left-0 w-full h-[30vh] sm:h-[38vh] md:h-[44vh] overflow-hidden opacity-100 pointer-events-none transform-gpu will-change-transform"
        >
          <img
            src="/fire-green.gif"
            alt="Green Flame Top"
            className="w-full h-full object-cover rotate-180 select-none pointer-events-none transform-gpu"
            loading="eager"
          />
          {/* Seamless feathering gradient overlay to eliminate any horizontal boundary line */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#aaca31] via-[#aaca31]/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* Bottom Rising Flame Hands (Upright - Transitions from #aaca31 green into black below) */}
        <div
          ref={bottomFlameRef}
          className="absolute bottom-0 left-0 w-full h-[30vh] sm:h-[38vh] md:h-[44vh] overflow-hidden opacity-100 pointer-events-none transform-gpu will-change-transform"
        >
          {/* Seamless feathering gradient overlay to eliminate any horizontal boundary line */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#aaca31] via-[#aaca31]/80 to-transparent pointer-events-none z-10" />
          <img
            src="/fire-green.gif"
            alt="Green Flame Bottom"
            className="w-full h-full object-cover select-none pointer-events-none transform-gpu"
            loading="eager"
          />
        </div>
      </div>

      {/* ─── FOREGROUND EDITORIAL CONTENT (HIGH CONTRAST ON #aaca31 GREEN) ─── */}
      <div className="relative z-30 w-full flex flex-col justify-center items-center min-h-[140vh] sm:min-h-[160vh] py-16 px-6 sm:px-12 lg:px-20 pointer-events-none">
        
        {/* Center Floating Editorial Copy (Isolated with generous spacing - Bold high-contrast black typography) */}
        <div
          ref={textRef}
          className="w-full max-w-4xl mx-auto text-center my-auto py-20 sm:py-28 md:py-36 flex flex-col items-center pointer-events-auto transform-gpu will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-[11px] font-mono text-[#aaca31] mb-6 shadow-lg">
            <Sparkles className="w-3 h-3 text-[#aaca31]" />
            <span className="tracking-[0.25em] uppercase text-[#aaca31]">BEYOND DETERMINISTIC WORKFLOWS</span>
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
        </div>

      </div>
    </section>
  );
}
