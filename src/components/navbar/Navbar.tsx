"use client";

import { useState } from "react";
import { X, Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LegalInfoModal, ModalTab } from "@/components/modals/LegalInfoModal";

interface NavbarProps {
  onStartFree?: () => void;
  onOpenConsultation?: () => void;
}

interface SubNavItem {
  label: string;
  href?: string;
  action: "scroll" | "modal";
  modalTab?: ModalTab;
  tag?: string;
  desc?: string;
}

interface NavItem {
  label: string;
  href?: string;
  id: string;
  hasSubmenu?: boolean;
  subItems?: SubNavItem[];
}

export function Navbar({ onStartFree, onOpenConsultation }: NavbarProps) {
  const [fullscreenMenuOpen, setFullscreenMenuOpen] = useState(false);
  const [activeSideCategory, setActiveSideCategory] = useState<"resource" | "policies">("resource");
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<ModalTab>("terms");

  // Navigation data matching requirements
  const mainNavLinks: NavItem[] = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About us", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    {
      label: "Resource",
      id: "resource",
      hasSubmenu: true,
      subItems: [
        { label: "Case study", href: "#case-studies", action: "scroll", tag: "Featured Work", desc: "Interactive 3D client portfolio" },
        { label: "Career", action: "modal", modalTab: "career", tag: "We're Hiring", desc: "Join our autonomous engineering squad" },
        { label: "Technologies", href: "#technologies", action: "scroll", tag: "GPU Architecture", desc: "Sub-16ms WebGL & GLSL kinetic engine" },
        { label: "FAQs", action: "modal", modalTab: "faqs", tag: "Knowledge Base", desc: "Architectural & operational answers" },
      ],
    },
    {
      label: "Policies",
      id: "policies",
      hasSubmenu: true,
      subItems: [
        { label: "Terms and Conditions", action: "modal", modalTab: "terms", tag: "Master SLA", desc: "100% sovereign client IP rights" },
        { label: "Privacy Policy", action: "modal", modalTab: "privacy", tag: "Zero Telemetry", desc: "SOC2 Type II data governance charter" },
      ],
    },
  ];

  const handleSubItemClick = (item: SubNavItem) => {
    setFullscreenMenuOpen(false);

    if (item.action === "modal" && item.modalTab) {
      setLegalModalTab(item.modalTab);
      setLegalModalOpen(true);
    } else if (item.href) {
      const targetId = item.href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handlePrimaryLinkClick = (link: NavItem) => {
    if (link.hasSubmenu) {
      setActiveSideCategory(link.id as "resource" | "policies");
      return;
    }

    setFullscreenMenuOpen(false);
    if (link.href) {
      const targetId = link.href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Sub-items for the active side category
  const activeSideItems =
    activeSideCategory === "resource"
      ? mainNavLinks.find((l) => l.id === "resource")?.subItems ?? []
      : mainNavLinks.find((l) => l.id === "policies")?.subItems ?? [];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          MINIMALIST FLOATING CONTROLS (HEADER REMOVED — JUST MENU)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 pt-6 sm:pt-8 pointer-events-none flex items-center justify-between">
        {/* Top-Left: Sovereign Logo */}
        <a
          href="#home"
          className="pointer-events-auto flex items-center gap-2.5 group cursor-pointer select-none"
        >
          <img
            src="/logo.png"
            alt="Bounty Bytes AI Studios"
            className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(178,210,52,0.45)] transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-syne font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
            Bounty Bytes
            <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] shadow-[0_0_8px_#B2D234] animate-pulse" />
          </span>
        </a>

        {/* Top-Right: Fixed Editorial Menu Button ("Just menu is enough") */}
        <button
          onClick={() => setFullscreenMenuOpen(true)}
          className="pointer-events-auto group px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0a0c08]/85 backdrop-blur-xl border border-white/15 hover:border-[#B2D234] text-neutral-200 hover:text-white transition-all duration-300 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(178,210,52,0.15)] hover:shadow-[0_0_25px_rgba(178,210,52,0.35)] select-none"
          aria-label="Open Navigation Menu"
        >
          <span className="w-2 h-2 rounded-full bg-[#B2D234] shadow-[0_0_8px_#B2D234] group-hover:scale-125 transition-transform" />
          <span className="font-bold tracking-wider">MENU</span>
          <div className="flex flex-col gap-1 w-3.5 ml-0.5">
            <span className="h-[1.5px] w-full bg-white group-hover:bg-[#B2D234] transition-colors" />
            <span className="h-[1.5px] w-full bg-white group-hover:bg-[#B2D234] transition-colors" />
          </div>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          FULLSCREEN EDITORIAL NAVIGATION MENU (EXACT 2ND IMAGE PLACEMENT)
      ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {fullscreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[120] bg-[#000000] text-white flex flex-col justify-between overflow-y-auto selection:bg-[#B2D234] selection:text-black"
          >
            {/* Ambient Lighting in Brand Palette */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(178,210,52,0.12)_0%,transparent_70%)] blur-[100px]" />
              <div className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(216,255,56,0.06)_0%,transparent_70%)] blur-[90px]" />
            </div>

            {/* Top Bar inside Menu */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pt-8 px-6 sm:px-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Bounty Bytes"
                  className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(178,210,52,0.5)]"
                />
                <span className="font-syne font-black text-lg tracking-tight uppercase">
                  BOUNTY BYTES <span className="text-[#B2D234]">AI STUDIOS</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-[#B2D234] animate-pulse" />
                  <span>ALL SYSTEMS NORMAL</span>
                </div>

                <button
                  onClick={() => setFullscreenMenuOpen(false)}
                  className="p-2.5 rounded-full border border-white/20 hover:border-[#B2D234] bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer group shadow-[0_0_20px_rgba(178,210,52,0.2)]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Center Stage: 2 Columns Side-by-Side (EXACT 2ND IMAGE PLACEMENT) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 my-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* ─── LEFT COLUMN: PRIMARY NAVIGATION (HOME, ABOUT, SERVICES, RESOURCE, POLICIES) ─── */}
                <div className="md:col-span-6 space-y-4 sm:space-y-6">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#B2D234] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B2D234]" />
                    <span>PRIMARY INDEX // 01</span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {/* HOME */}
                    <li>
                      <a
                        href="#home"
                        onClick={() => handlePrimaryLinkClick(mainNavLinks[0])}
                        className="group flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-syne font-black uppercase tracking-tight text-neutral-200 hover:text-white transition-all cursor-pointer"
                      >
                        <span className="group-hover:text-[#B2D234] transition-colors">HOME</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#B2D234] group-hover:bg-[#B2D234] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0">
                          <Plus className="w-4 h-4 text-black rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </a>
                    </li>

                    {/* ABOUT US */}
                    <li>
                      <a
                        href="#about"
                        onClick={() => handlePrimaryLinkClick(mainNavLinks[1])}
                        className="group flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-syne font-black uppercase tracking-tight text-neutral-200 hover:text-white transition-all cursor-pointer"
                      >
                        <span className="group-hover:text-[#B2D234] transition-colors">ABOUT US</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#B2D234] group-hover:bg-[#B2D234] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0">
                          <Plus className="w-4 h-4 text-black rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </a>
                    </li>

                    {/* SERVICES */}
                    <li>
                      <a
                        href="#services"
                        onClick={() => handlePrimaryLinkClick(mainNavLinks[2])}
                        className="group flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-syne font-black uppercase tracking-tight text-neutral-200 hover:text-white transition-all cursor-pointer"
                      >
                        <span className="group-hover:text-[#B2D234] transition-colors">SERVICES</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#B2D234] group-hover:bg-[#B2D234] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0">
                          <Plus className="w-4 h-4 text-black rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </a>
                    </li>

                    {/* RESOURCE (ACTIVE / HOVER EXPANDS SIDE ITEMS) */}
                    <li>
                      <div
                        onMouseEnter={() => setActiveSideCategory("resource")}
                        onClick={() => setActiveSideCategory("resource")}
                        className={`group flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-syne font-black uppercase tracking-tight transition-all cursor-pointer ${
                          activeSideCategory === "resource" ? "text-[#B2D234]" : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <span>RESOURCE</span>
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                            activeSideCategory === "resource"
                              ? "border-[#B2D234] bg-[#B2D234] text-black opacity-100"
                              : "border-white/20 opacity-0 group-hover:opacity-100 text-black group-hover:bg-[#B2D234] group-hover:border-[#B2D234]"
                          }`}
                        >
                          <Plus className="w-4 h-4 transition-transform duration-300" />
                        </div>
                      </div>
                    </li>

                    {/* POLICIES (ACTIVE / HOVER EXPANDS SIDE ITEMS) */}
                    <li>
                      <div
                        onMouseEnter={() => setActiveSideCategory("policies")}
                        onClick={() => setActiveSideCategory("policies")}
                        className={`group flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-syne font-black uppercase tracking-tight transition-all cursor-pointer ${
                          activeSideCategory === "policies" ? "text-[#B2D234]" : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <span>POLICIES</span>
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                            activeSideCategory === "policies"
                              ? "border-[#B2D234] bg-[#B2D234] text-black opacity-100"
                              : "border-white/20 opacity-0 group-hover:opacity-100 text-black group-hover:bg-[#B2D234] group-hover:border-[#B2D234]"
                          }`}
                        >
                          <Plus className="w-4 h-4 transition-transform duration-300" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* ─── RIGHT COLUMN: SUB-ITEMS PLACED TO THE SIDE (IMAGE 2 PLACEMENT) ─── */}
                <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 lg:pl-16 space-y-6">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-400 border-b border-white/10 pb-3">
                    <span className="text-[#B2D234] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B2D234] animate-pulse" />
                      <span>{activeSideCategory === "resource" ? "IN RESOURCE // SECTOR 02" : "IN POLICIES // LEGAL 03"}</span>
                    </span>
                    <span className="opacity-60">SELECT TO LAUNCH</span>
                  </div>

                  {/* Secondary Links List with Rotating Plus Icon on Hover (Image 2 Match) */}
                  <ul className="space-y-4 sm:space-y-5">
                    {activeSideItems.map((item, idx) => (
                      <li key={idx}>
                        <div
                          onClick={() => handleSubItemClick(item)}
                          className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-[#B2D234]/40 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-syne font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-neutral-300 group-hover:text-white transition-colors">
                              {item.label}
                            </span>
                            {item.tag && (
                              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B2D234]/15 border border-[#B2D234]/40 text-[#B2D234]">
                                {item.tag}
                              </span>
                            )}
                          </div>

                          {/* Plus glyph with rotation on hover */}
                          <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#B2D234] group-hover:bg-[#B2D234] flex items-center justify-center text-neutral-400 group-hover:text-black transition-all">
                            <Plus className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Side Switcher Indicator & Quick CTA */}
                  <div className="pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveSideCategory("resource")}
                        className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                          activeSideCategory === "resource"
                            ? "border-[#B2D234] text-[#B2D234] bg-[#B2D234]/10"
                            : "border-white/10 text-neutral-400 hover:text-white"
                        }`}
                      >
                        VIEW RESOURCE (4)
                      </button>
                      <button
                        onClick={() => setActiveSideCategory("policies")}
                        className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                          activeSideCategory === "policies"
                            ? "border-[#B2D234] text-[#B2D234] bg-[#B2D234]/10"
                            : "border-white/10 text-neutral-400 hover:text-white"
                        }`}
                      >
                        VIEW POLICIES (2)
                      </button>
                    </div>

                    {onStartFree && (
                      <button
                        onClick={() => {
                          setFullscreenMenuOpen(false);
                          onStartFree();
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B2D234] hover:bg-[#C5EB2A] text-black font-bold font-sans text-xs transition-colors cursor-pointer"
                      >
                        <span>START FREE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Bar: Telemetry matching Reference */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pb-6 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 font-mono text-[11px] sm:text-xs text-neutral-400 gap-4">
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-[#B2D234] font-bold">+</span>
                  <span className="tracking-wider">TENSION</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B2D234] font-bold">+</span>
                  <span className="tracking-wider">IMMERSION</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B2D234] font-bold">+</span>
                  <span className="tracking-wider">IMPACT</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-500">
                <span>BOUNTY BYTES AI STUDIOS // EDITORIAL NAVIGATION</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════
          LEGAL & INFO MODAL (TERMS, PRIVACY, FAQS, CAREER)
      ═══════════════════════════════════════════════════════════════════ */}
      <LegalInfoModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
        onOpenConsultation={() => {
          setLegalModalOpen(false);
          if (onOpenConsultation) onOpenConsultation();
        }}
      />
    </>
  );
}
