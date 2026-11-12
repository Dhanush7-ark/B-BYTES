"use client";

import { useState } from "react";
import { LoadingProvider, useLoadingState } from "@/hooks/useLoadingState";
import { CinematicLoader } from "@/components/loader/CinematicLoader";
import { BackgroundAnimationSystem } from "@/components/animations/BackgroundAnimationSystem";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { GothicCinematicSequence } from "@/components/cinematic/GothicCinematicSequence";
import { ThisWillFeelDifferentSection } from "@/components/statement/ThisWillFeelDifferentSection";
import { CinematicGreenSection } from "@/components/statement/CinematicGreenSection";
import { CinematicPortfolioShowcase } from "@/components/portfolio/CinematicPortfolioShowcase";
import { StepOfWorkSection } from "@/components/cinematic/StepOfWorkSection";
import { AwardsRecognitionSection } from "@/components/awards/AwardsRecognitionSection";
import { WorkflowSection } from "@/components/workflow/WorkflowSection";
import { EditorialFeatures } from "@/components/features/EditorialFeatures";
import { AnalyticsSection } from "@/components/analytics/AnalyticsSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Footer } from "@/components/layout/Footer";
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

          {/* 4. REFERENCE-MATCH CINEMATIC PORTFOLIO SHOWCASE (CODENARTS, AZ-DIGITAL, AMRON, CHATONE, FINANCE) */}
          <div id="case-studies" className="relative">
            <CinematicPortfolioShowcase />
          </div>

          {/* 5. MEER MOHSIN POST-CARDS CINEMATIC SECTION (SILHOUETTE UNDER GREEN BEAM, 4 STAGGERED STEP BOXES & HEADLINE) */}
          <div id="services">
            <StepOfWorkSection />
          </div>

          {/* 5.5 MEER MOHSIN AWARDS & RECOGNITIONS SPLIT-VAULT & 3D TERRAIN SHOWCASE */}
          <AwardsRecognitionSection />

          {/* 6. Deep Interactive Workflow Demonstration */}
          <div id="technologies">
            <WorkflowSection />
          </div>

          {/* 6. Product Editorial Features */}
          <EditorialFeatures />

          {/* 7. Analytics & Performance Section */}
          <AnalyticsSection />

          {/* 8. Testimonials Section */}
          <TestimonialsSection />

          {/* 9. Pricing Section */}
          <PricingSection onSelectPlan={handleOpenStartFree} />

          {/* 10. "THIS WILL FEEL DIFFERENT" Statement Screen */}
          <div id="career">
            <ThisWillFeelDifferentSection onBookConsultation={() => setConsultationOpen(true)} />
          </div>
        </main>

        {/* ─── FOOTER ─── */}
        <div className="relative z-10">
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
