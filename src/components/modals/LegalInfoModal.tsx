"use client";

import React, { useState } from "react";
import { X, Shield, FileText, HelpCircle, Briefcase, ChevronDown, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type ModalTab = "terms" | "privacy" | "faqs" | "career";

interface LegalInfoModalProps {
  isOpen: boolean;
  initialTab?: ModalTab;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export function LegalInfoModal({
  isOpen,
  initialTab = "terms",
  onClose,
  onOpenConsultation,
}: LegalInfoModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>(initialTab);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  // Sync tab if initialTab changes
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const faqs = [
    {
      q: "How does Bounty Bytes engineer bespoke 3D kinetic web experiences?",
      a: "We develop proprietary WebGL architectures using Three.js, custom GLSL shaders, and GSAP ScrollTrigger. Every project undergoes GPU memory profiling to guarantee sub-16ms latency across both mobile and desktop hardware.",
    },
    {
      q: "What is the typical turnaround timeline for an autonomous studio project?",
      a: "Our standard sprint runs between 2 to 4 weeks from creative conception to full production deployment, complete with automated CI/CD pipelines, analytics, and 90-day execution replay telemetry.",
    },
    {
      q: "Do we maintain full intellectual property ownership of all custom code?",
      a: "Yes, 100%. Upon final delivery, all custom 3D shaders, React components, 3D model assets, and brand animations belong exclusively to your organization under a sovereign commercial license.",
    },
    {
      q: "How do you handle compatibility with existing headless stacks and CMS?",
      a: "Our frontend architectures are fully modular Next.js / React systems compatible with over 240+ headless APIs, Shopify Hydrogen, Sanity, Contentful, and custom backend microservices.",
    },
    {
      q: "What are your security standards and data handling guarantees?",
      a: "We enforce SOC2 Type II compliance, zero third-party telemetry on confidential client workflows, and enterprise-grade end-to-end encryption across all repository exchanges.",
    },
  ];

  const careerRoles = [
    {
      title: "Senior Creative Developer (Three.js / WebGL / GLSL)",
      type: "Full-time • Remote (Global)",
      equity: "0.25% - 0.75%",
      desc: "Architect cutting-edge GPU shader pipelines, low-poly procedural terrains, and cinematic 3D web applications with sovereign machine execution.",
    },
    {
      title: "Kinetic Motion Designer (GSAP & Interaction)",
      type: "Full-time • Remote (Global)",
      equity: "0.20% - 0.50%",
      desc: "Design award-winning scroll choreography, micro-interactions, split-vault transitions, and editorial typography animations.",
    },
    {
      title: "Autonomous Systems Architect",
      type: "Full-time • San Francisco / Remote",
      equity: "0.50% - 1.20%",
      desc: "Engineer AI workflow engines, high-concurrency event brokers, and sub-16ms latency kinetic streaming infrastructure.",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#090B08] border border-[#B2D234]/30 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(178,210,52,0.15)] overflow-hidden z-10 my-auto flex flex-col max-h-[88vh]"
          >
            {/* Top Header Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#060805]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B2D234] shadow-[0_0_10px_#B2D234]" />
                <span className="font-syne font-bold text-white text-base sm:text-lg tracking-tight">
                  BOUNTY BYTES // INFORMATION & POLICIES
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-[#B2D234] text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/5 bg-[#090C07] overflow-x-auto no-scrollbar font-mono text-xs">
              <button
                onClick={() => setActiveTab("terms")}
                className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "terms"
                    ? "border-[#B2D234] text-[#B2D234] font-semibold"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>TERMS & CONDITIONS</span>
              </button>

              <button
                onClick={() => setActiveTab("privacy")}
                className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "privacy"
                    ? "border-[#B2D234] text-[#B2D234] font-semibold"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>PRIVACY POLICY</span>
              </button>

              <button
                onClick={() => setActiveTab("faqs")}
                className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "faqs"
                    ? "border-[#B2D234] text-[#B2D234] font-semibold"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FAQS</span>
              </button>

              <button
                onClick={() => setActiveTab("career")}
                className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "career"
                    ? "border-[#B2D234] text-[#B2D234] font-semibold"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>CAREER OPPORTUNITIES</span>
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-neutral-300 font-sans leading-relaxed">
              {/* TAB 1: TERMS & CONDITIONS */}
              {activeTab === "terms" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-l-2 border-[#B2D234] pl-4">
                    <h3 className="font-syne font-bold text-xl text-white">Master Service Terms & Sovereign IP Agreement</h3>
                    <p className="text-xs font-mono text-[#B2D234] mt-1">Version 2.4 • Effective November 2026</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">1. Sovereign Intellectual Property</h4>
                      <p className="text-neutral-400">
                        Upon settlement of deliverables, all bespoke Three.js kinetic engines, custom GLSL vertex/fragment shaders, tailored React components, and 3D architectural models transfer 100% to the client under exclusive commercial title with zero recurring royalties.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">2. GPU Performance & Latency Guarantee</h4>
                      <p className="text-neutral-400">
                        Bounty Bytes guarantees sub-16ms interactive frame response (&ge;60fps) on baseline modern mobile and desktop browsers under standard WebGL2 contexts. Memory allocations are audited against GPU leaks prior to production signing.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">3. Non-Disclosure & Asset Protection</h4>
                      <p className="text-neutral-400">
                        All client briefs, proprietary datasets, product roadmaps, and unreleased assets remain strictly confidential. Bounty Bytes never trains autonomous foundational models on client codebases or proprietary media.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">4. Deployment & Maintenance SLA</h4>
                      <p className="text-neutral-400">
                        Projects include a 90-day sovereign warranty period covering browser vendor updates, WebGL API evolutions, and zero-downtime container deployments.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PRIVACY POLICY */}
              {activeTab === "privacy" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-l-2 border-[#B2D234] pl-4">
                    <h3 className="font-syne font-bold text-xl text-white">Global Privacy & Data Governance Charter</h3>
                    <p className="text-xs font-mono text-[#B2D234] mt-1">SOC2 Type II • GDPR & CCPA Verified</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">1. Zero-Telemetry Policy</h4>
                      <p className="text-neutral-400">
                        We respect developer and user privacy. We do not sell, broker, or monetize visitor interaction records. Real-time telemetry is restricted exclusively to GPU render frame profiling and critical error boundaries.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">2. Cryptographic Storage & Transmission</h4>
                      <p className="text-neutral-400">
                        All communications, design files, 3D GLTF assets, and client access tokens are encrypted in transit via TLS 1.3 and at rest via AES-256 vault infrastructure.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">3. Subprocessors & Infrastructure</h4>
                      <p className="text-neutral-400">
                        Hosting infrastructure is provisioned through verified tier-1 cloud providers located in ISO/IEC 27001-certified facilities.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: FAQS */}
              {activeTab === "faqs" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-l-2 border-[#B2D234] pl-4 mb-6">
                    <h3 className="font-syne font-bold text-xl text-white">Frequently Asked Questions</h3>
                    <p className="text-xs font-mono text-[#B2D234] mt-1">Architectural & Operational Insights</p>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                      const isExpanded = expandedFaq === idx;
                      return (
                        <div
                          key={idx}
                          className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-white hover:text-[#B2D234] transition-colors cursor-pointer"
                          >
                            <span className="pr-4">{faq.q}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#B2D234] transition-transform duration-200 shrink-0 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isExpanded && (
                            <div className="px-5 pb-5 pt-1 text-neutral-400 text-sm border-t border-white/5 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 4: CAREER */}
              {activeTab === "career" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-l-2 border-[#B2D234] pl-4">
                    <h3 className="font-syne font-bold text-xl text-white">Careers at Bounty Bytes AI Studios</h3>
                    <p className="text-xs font-mono text-[#B2D234] mt-1">Join the Autonomous Frontier</p>
                  </div>

                  <p className="text-neutral-300">
                    We are an elite squad of creative technologists, 3D graphics engineers, and motion artists crafting the highest tier of kinetic digital experiences on the web.
                  </p>

                  <div className="space-y-4">
                    {careerRoles.map((role, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#B2D234]/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-1.5">
                          <h4 className="font-bold text-white text-base">{role.title}</h4>
                          <div className="flex items-center gap-3 font-mono text-xs text-[#B2D234]">
                            <span>{role.type}</span>
                            <span>•</span>
                            <span>Equity: {role.equity}</span>
                          </div>
                          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{role.desc}</p>
                        </div>

                        <button
                          onClick={() => {
                            setAppliedRole(role.title);
                            if (onOpenConsultation) {
                              onClose();
                              onOpenConsultation();
                            }
                          }}
                          className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#B2D234] hover:bg-[#C5EB2A] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(178,210,52,0.3)]"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer Actions */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#060805] flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B2D234]" />
                <span>BOUNTY BYTES PROTOCOL // 2026</span>
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-full border border-white/20 hover:border-[#B2D234] hover:text-[#B2D234] transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

