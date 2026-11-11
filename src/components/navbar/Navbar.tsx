"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onStartFree?: () => void;
}

export function Navbar({ onStartFree }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section spy
      const sections = ["product", "step-of-work", "workflow", "customers", "pricing"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === "step-of-work" ? "workflow" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#product", id: "product" },
    { label: "How it works", href: "#workflow", id: "workflow" },
    { label: "Customers", href: "#customers", id: "customers" },
    { label: "Pricing", href: "#pricing", id: "pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pointer-events-none transition-all duration-500">
      <div
        className={`max-w-6xl mx-auto rounded-full pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-[#10110E]/85 backdrop-blur-2xl border border-[#B2D234]/25 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(178,210,52,0.12)] py-2.5 px-4 sm:px-6"
            : "bg-transparent border border-white/5 py-3 px-4 sm:px-6 backdrop-blur-[2px]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Bounty Bytes AI Studios Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative h-9 sm:h-10 flex items-center transition-all duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Bounty Bytes AI Studios"
                className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(178,210,52,0.45)]"
              />
            </div>
            <span className="font-syne font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
              Bounty Bytes
              <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] shadow-[0_0_8px_#B2D234] animate-pulse" />
            </span>
          </a>

          {/* Center: Navigation Links with Active-Section Highlighting */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#888888] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B2D234] rounded-full shadow-[0_0_8px_#B2D234]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Status Indicator Pill & Start Free Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Status indicator pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#161814]/80 border border-white/5 text-[11px] font-mono text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B2D234] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B2D234]" />
              </span>
              <span>All systems normal</span>
            </div>

            {/* Bounty Green "Start free" button with light sweep & glow */}
            <button
              onClick={onStartFree}
              className="btn-primary-neon group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#B2D234] hover:bg-[#C5EB2A] text-[#050505] font-bold text-xs sm:text-sm cursor-pointer shadow-[0_0_20px_rgba(178,210,52,0.35)] transition-all duration-300"
            >
              <span>Start free</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-white/10 mt-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-1.5 transition-colors font-medium px-2 ${
                  activeSection === link.id
                    ? "text-[#B2D234]"
                    : "text-neutral-300 hover:text-[#B2D234]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-400 px-2">
              <span className="w-2 h-2 rounded-full bg-[#B2D234]" />
              <span>All systems normal</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
