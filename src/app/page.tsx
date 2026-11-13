"use client";

import { useState } from "react";
import { LoadingProvider, useLoadingState } from "@/hooks/useLoadingState";
import { CinematicLoader } from "@/components/loader/CinematicLoader";
import { BackgroundAnimationSystem } from "@/components/animations/BackgroundAnimationSystem";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { GothicCinematicSequence } from "@/components/cinematic/GothicCinematicSequence";
import { Footer } from "@/components/layout/Footer";
import { CinematicGreenSection } from "@/components/statement/CinematicGreenSection";
import { CinematicPortfolioShowcase } from "@/components/portfolio/CinematicPortfolioShowcase";
import { WatchBuildModal } from "@/components/modals/WatchBuildModal";
import { StartFreeModal } from "@/components/modals/StartFreeModal";
import { ConsultationModal } from "@/components/modals/ConsultationModal";

function HomeContent() {
  const { isLoading } = useLoadingState();
  const [watchBuildOpen, setWatchBuildOpen] = useState(false);
  const [startFreeOpen, setStartFreeOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Professional");

  const handleOpenStartFree = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setStartFreeOpen(true);
  };

  return (
    <>
      {/* ─── CINEMATIC 1 TO 100 PRELOADER ─── */}
      {isLoading && <CinematicLoader />}

      <div className="relative min-h-screen bg-[#000000] text-[#e5e5e5] overflow-x-clip">
        {/* ─── CONTINUOUS FUTURISTIC BACKGROUND ANIMATION SYSTEM (LAYERED & SCROLL-REACTIVE) ─── */}
        <BackgroundAnimationSystem />

        {/* ─── NAVIGATION BAR ─── */}
        <Navbar
          onStartFree={() => handleOpenStartFree()}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* ─── MAIN CONTENT SECTIONS (ELEVATED ABOVE BACKGROUND) ─── */}
        <main className="relative z-10">
          {/* ─── 1. HERO SECTION (3D LIGHT RIBBON) ─── */}
          <section id="home" className="relative">
            <HeroSection
              onWatchBuild={() => setWatchBuildOpen(true)}
              onStartFree={() => handleOpenStartFree()}
            />
          </section>

          {/* ─── 2. GOTHIC CINEMATIC ANIMATED EXPERIENCE (GSAP 6-PHASE TIMELINE) ─── */}
          <section id="about" className="relative">
            <GothicCinematicSequence />
          </section>

          {/* 3. "ORGANIC VELOCITY. UNBROKEN FLOW." CINEMATIC GREEN FLAME STATEMENT SCREEN */}
          <CinematicGreenSection />

          {/* 4. REFERENCE-MATCH CINEMATIC PORTFOLIO SHOWCASE (9 CARDS) */}
          <div id="case-studies" className="relative">
            <div id="services" className="relative" />
            <div id="technologies" className="relative" />
            <CinematicPortfolioShowcase />
          </div>
        </main>

        {/* ─── FOOTER WITH INTEGRATED GREEN FLAME ANIMATION ─── */}
        <div id="career" className="relative z-10">
          <Footer />
        </div>

        {/* ─── INTERACTIVE MODALS ─── */}
        <WatchBuildModal
          isOpen={watchBuildOpen}
          onClose={() => setWatchBuildOpen(false)}
          onStartFree={() => {
            setWatchBuildOpen(false);
            handleOpenStartFree();
          }}
        />

        <StartFreeModal
          isOpen={startFreeOpen}
          onClose={() => setStartFreeOpen(false)}
          selectedPlan={selectedPlan}
        />

        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
        />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <LoadingProvider>
      <HomeContent />
    </LoadingProvider>
  );
}
