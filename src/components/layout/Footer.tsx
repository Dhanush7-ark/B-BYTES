"use client";

export function Footer() {
  const equalizerBars = [
    { id: 1, dur: "0.8s", h: "16px" },
    { id: 2, dur: "1.15s", h: "24px" },
    { id: 3, dur: "0.7s", h: "12px" },
    { id: 4, dur: "1.3s", h: "28px" },
    { id: 5, dur: "0.9s", h: "18px" },
    { id: 6, dur: "1.2s", h: "14px" },
    { id: 7, dur: "0.65s", h: "26px" },
    { id: 8, dur: "1.05s", h: "16px" },
    { id: 9, dur: "0.75s", h: "22px" },
    { id: 10, dur: "1.1s", h: "14px" },
    { id: 11, dur: "0.85s", h: "23px" },
    { id: 12, dur: "1.0s", h: "20px" },
  ];

  const productLinks = [
    { label: "Visual Canvas", href: "#workflow" },
    { label: "Integrations (240+)", href: "#product" },
    { label: "Human-in-the-Loop", href: "#workflow" },
    { label: "90-Day Execution Replay", href: "#product" },
    { label: "Security & SOC2", href: "#product" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Customers", href: "#customers" },
    { label: "Careers (We're hiring)", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Press Kit", href: "#" },
  ];

  const resourceLinks = [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Webhook Simulator", href: "#" },
    { label: "Community Discord", href: "#" },
    { label: "Status Page", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security Whitepaper", href: "#" },
    { label: "Subprocessors", href: "#" },
  ];

  return (
    <footer className="relative bg-[#050505] pt-14 pb-14 px-4 sm:px-6 lg:px-8 text-white overflow-hidden border-t border-[#B2D234]/30">
      
      {/* ─── 1. GREEN FLAME ANIMATION (RISING DRAMATICALLY UP AT BASE OF FOOTER) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute bottom-0 left-0 w-full h-[65vh] min-h-[420px] overflow-hidden opacity-75">
          <img
            src="/fire-green.gif"
            alt="Green Flame Atmosphere"
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{
              maskImage: "linear-gradient(to top, black 25%, rgba(0,0,0,0.5) 65%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 25%, rgba(0,0,0,0.5) 65%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* ─── 2. CONTRAST PROTECTION SHIELD (ENSURES 100% TEXT LEGIBILITY OVER FLAME) ─── */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050505]/95 via-[#050505]/80 to-[#050505]/85 z-[1]" />

      {/* ─── 3. GLOWING BOUNTY GREEN DIVIDER LINE AT TOP ─── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B2D234]/60 to-transparent shadow-[0_0_20px_#B2D234] z-10" />

      {/* ─── 4. SUBTLE RADIAL GLOW & LIGHT TRAILS ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse,rgba(178,210,52,0.15),transparent_70%)] blur-[100px]" />
        <div className="absolute left-1/4 bottom-0 w-px h-64 bg-gradient-to-t from-[#B2D234]/25 to-transparent" />
        <div className="absolute right-1/4 bottom-0 w-px h-64 bg-gradient-to-t from-[#B2D234]/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Top Status Strip */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10 select-none">
          {/* Left: Barcode Equalizer with Label */}
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-[2.5px] h-4">
              {equalizerBars.map((bar) => (
                <span
                  key={bar.id}
                  className="w-[2px] bg-[#B2D234] rounded-full shadow-[0_0_6px_rgba(178,210,52,0.85)]"
                  style={{
                    height: bar.h,
                    animation: `greenEqualizerPulse ${bar.dur} ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#B2D234] uppercase font-semibold">
              AUDIO TELEMETRY
            </span>
          </div>

          {/* Right: Online Status Badge */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/90 border border-[#B2D234]/40 shadow-[0_0_15px_rgba(0,0,0,0.95)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B2D234] shadow-[0_0_8px_#B2D234] animate-pulse" />
            <span className="text-[11px] text-white font-mono tracking-wider font-semibold">
              ONLINE <span className="text-[#B2D234]">&bull; Let&apos;s Connect</span>
            </span>
          </div>
        </div>

        {/* Main Footer Grid with High-Contrast Text */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Column (Col 1 & 2 on mobile) */}
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/logo.png"
                  alt="Bounty Bytes AI Studios"
                  className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(178,210,52,0.5)]"
                />
              </div>

              <p className="text-sm text-neutral-200 max-w-sm leading-relaxed mb-6 font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                Next-generation 3D interactive web experiences engineered with cutting-edge visual technologies, GSAP motion, and WebGL kinetic shaders.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0f05]/95 border border-[#B2D234]/40 text-xs font-mono text-white shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B2D234] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B2D234]" />
                </span>
                <span className="font-medium">All systems operational • 99.98% uptime</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {/* GitHub */}
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:text-[#B2D234] hover:bg-white/20 border border-white/10 transition-colors shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:text-[#B2D234] hover:bg-white/20 border border-white/10 transition-colors shadow-md"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:text-[#B2D234] hover:bg-white/20 border border-white/10 transition-colors shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Product Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B2D234] font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#B2D234] transition-colors font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B2D234] font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#B2D234] transition-colors font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B2D234] font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#B2D234] transition-colors font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-200">
          <div className="font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
            &copy; {new Date().getFullYear()} Bounty Bytes AI Studios. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-200 hover:text-[#B2D234] transition-colors font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
