"use client";

import React from "react";
import { motion } from "framer-motion";

interface WingedThornOrnamentProps {
  scale?: number;
  glowOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * WingedThornOrnament
 * Symmetrical, biomechanical organic thorn-wing structure matching the master prompt:
 * - Symmetrical sharp metallic wings with irregular branches and sharp pointed quills
 * - Central spine / vertebrae without any middle circular logo (per explicit instruction)
 * - Layered metallic gradients in Bounty Logo Green (#B2D234) and glowing lime (#D8FF38)
 * - Inner energy filigree veins with glowing stroke highlights
 */
export function WingedThornOrnament({
  scale = 1,
  glowOpacity = 0.85,
  className = "",
  style = {},
}: WingedThornOrnamentProps) {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{
        ...style,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {/* Volumetric Radial Glow Behind Wings */}
      <div
        className="absolute w-[800px] h-[550px] pointer-events-none transition-opacity duration-700"
        style={{
          opacity: glowOpacity,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(178, 210, 52, 0.28) 0%, rgba(178, 210, 52, 0.08) 45%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      <svg
        viewBox="-620 -420 1240 840"
        className="w-[85vw] max-w-[1200px] h-auto max-h-[70vh] filter drop-shadow-[0_0_35px_rgba(178,210,52,0.4)] overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Green Fill Gradient */}
          <linearGradient id="wingMetallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2FF5A" />
            <stop offset="25%" stopColor="#B2D234" />
            <stop offset="60%" stopColor="#556B13" />
            <stop offset="90%" stopColor="#1C2407" />
            <stop offset="100%" stopColor="#0B0E03" />
          </linearGradient>

          {/* Deep Core Spine Gradient */}
          <linearGradient id="spineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#D8FF38" />
            <stop offset="50%" stopColor="#B2D234" />
            <stop offset="85%" stopColor="#3C4B0F" />
            <stop offset="100%" stopColor="#0D1204" />
          </linearGradient>

          {/* Glowing Energy Vein Stroke */}
          <linearGradient id="veinGlow" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#D8FF38" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B2D234" stopOpacity="0.3" />
          </linearGradient>

          {/* Feather Blade Specular Highlight */}
          <linearGradient id="featherHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#B2D234" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#101704" stopOpacity="0.1" />
          </linearGradient>

          {/* Single Side Wing Definition (Left Wing) */}
          <g id="singleWingSide">
            {/* Primary Arching Upper Quill Blade */}
            <path
              d="M 0 -80 C -90 -130 -220 -260 -420 -330 C -490 -355 -550 -330 -590 -285 C -565 -270 -510 -250 -445 -235 C -365 -215 -245 -155 -170 -95 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#D8FF38"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />

            {/* Specular Edge Highlight on Primary Quill */}
            <path
              d="M 0 -80 C -90 -130 -220 -260 -420 -330 C -490 -355 -550 -330 -590 -285"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Feather Spear 1 (Apex Razor Needle) */}
            <path
              d="M -410 -325 C -490 -385 -555 -365 -600 -315 C -565 -295 -500 -285 -445 -260 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#D8FF38"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            {/* Feather Spear 1 Inner Spine Vein */}
            <path
              d="M -415 -315 Q -510 -340 -590 -310"
              fill="none"
              stroke="url(#veinGlow)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Feather Spear 2 */}
            <path
              d="M -350 -260 C -450 -310 -530 -290 -575 -235 C -530 -215 -455 -205 -390 -175 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#B2D234"
              strokeWidth="1"
              strokeOpacity="0.7"
            />
            <path
              d="M -360 -250 Q -460 -270 -565 -230"
              fill="none"
              stroke="url(#veinGlow)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />

            {/* Feather Spear 3 */}
            <path
              d="M -290 -185 C -415 -235 -495 -205 -540 -150 C -485 -130 -410 -120 -335 -95 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#B2D234"
              strokeWidth="1"
              strokeOpacity="0.7"
            />
            <path
              d="M -300 -175 Q -420 -190 -530 -145"
              fill="none"
              stroke="url(#veinGlow)"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Feather Spear 4 (Mid Wing Spine) */}
            <path
              d="M -230 -115 C -370 -155 -455 -115 -490 -60 C -435 -48 -360 -48 -275 -25 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#B2D234"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            <path
              d="M -240 -105 Q -370 -110 -480 -55"
              fill="none"
              stroke="url(#veinGlow)"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Feather Spear 5 */}
            <path
              d="M -170 -45 C -315 -75 -405 -30 -440 25 C -385 20 -310 10 -215 35 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#B2D234"
              strokeWidth="1"
              strokeOpacity="0.5"
            />

            {/* Mid Wing Secondary Serrated Barbs */}
            <path
              d="M -135 25 C -265 25 -360 80 -385 135 C -330 120 -255 90 -155 70 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#B2D234"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <path
              d="M -95 85 C -215 105 -300 170 -315 225 C -270 200 -195 160 -115 130 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#8EA824"
              strokeWidth="0.9"
              strokeOpacity="0.6"
            />
            <path
              d="M -65 155 C -165 185 -230 260 -240 315 C -195 280 -140 230 -75 190 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#8EA824"
              strokeWidth="0.8"
              strokeOpacity="0.5"
            />

            {/* Lower Barbed Tendrils (Sweeping Downward Framing the Beam) */}
            <path
              d="M -35 225 C -105 290 -150 380 -160 435 C -138 400 -95 330 -38 275 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#B2D234"
              strokeWidth="0.8"
              strokeOpacity="0.5"
            />
            <path
              d="M -18 290 C -65 370 -85 455 -95 505 C -80 460 -52 380 -18 330 Z"
              fill="url(#wingMetallicGrad)"
              stroke="#D8FF38"
              strokeWidth="0.7"
              strokeOpacity="0.6"
            />

            {/* Sharp Biomechanical Rib Spurs (Horizontal Accent Barbs) */}
            <path
              d="M -70 -70 Q -150 -60 -210 -40 Q -150 -45 -70 -50 Z"
              fill="#D8FF38"
              opacity="0.8"
            />
            <path
              d="M -60 -10 Q -130 5 -180 30 Q -125 15 -60 5 Z"
              fill="#D8FF38"
              opacity="0.7"
            />
            <path
              d="M -45 50 Q -110 70 -150 100 Q -105 80 -45 65 Z"
              fill="#D8FF38"
              opacity="0.6"
            />
          </g>
        </defs>

        {/* ─── 1. LEFT WING ─── */}
        <use href="#singleWingSide" />

        {/* ─── 2. RIGHT WING (EXACT SYMMETRICAL MIRROR) ─── */}
        <use href="#singleWingSide" transform="scale(-1, 1)" />

        {/* ─── 3. CENTRAL BIOMECHANICAL VERTEBRAE SPINE (NO MIDDLE LOGO) ─── */}
        <g id="centralSpine">
          {/* Vertical Core Luminous Filament */}
          <line
            x1="0"
            y1="-380"
            x2="0"
            y2="520"
            stroke="url(#spineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* High-Intensity Laser Core */}
          <line
            x1="0"
            y1="-350"
            x2="0"
            y2="480"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Vertebrae Segment 1 (Top Spear Crown) */}
          <polygon
            points="0,-360 -12,-320 0,-290 12,-320"
            fill="url(#spineGrad)"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
          <polygon
            points="0,-310 -18,-270 0,-240 18,-270"
            fill="url(#spineGrad)"
            stroke="#D8FF38"
            strokeWidth="1"
          />

          {/* Vertebrae Segment 2 */}
          <polygon
            points="0,-255 -24,-215 0,-185 24,-215"
            fill="url(#spineGrad)"
            stroke="#B2D234"
            strokeWidth="1"
          />
          {/* Vertebrae Ribs */}
          <path
            d="M -24 -215 Q -40 -205 -60 -210 Q -40 -220 -24 -215"
            fill="#D8FF38"
            opacity="0.8"
          />
          <path
            d="M 24 -215 Q 40 -205 60 -210 Q 40 -220 24 -215"
            fill="#D8FF38"
            opacity="0.8"
          />

          {/* Vertebrae Segment 3 */}
          <polygon
            points="0,-195 -28,-150 0,-120 28,-150"
            fill="url(#spineGrad)"
            stroke="#D8FF38"
            strokeWidth="1.2"
          />
          <path
            d="M -28 -150 Q -50 -140 -80 -145 Q -50 -155 -28 -150"
            fill="#D8FF38"
            opacity="0.8"
          />
          <path
            d="M 28 -150 Q 50 -140 80 -145 Q 50 -155 28 -150"
            fill="#D8FF38"
            opacity="0.8"
          />

          {/* Vertebrae Segment 4 (Upper Center Monolith Node) */}
          <polygon
            points="0,-130 -32,-80 0,-45 32,-80"
            fill="url(#spineGrad)"
            stroke="#FFFFFF"
            strokeWidth="1.2"
          />

          {/* Vertebrae Segment 5 (Central Spinal Junction) */}
          <polygon
            points="0,-50 -36,0 0,40 36,0"
            fill="url(#spineGrad)"
            stroke="#D8FF38"
            strokeWidth="1.4"
          />
          {/* Central Radiating Barbs */}
          <path
            d="M -36 0 Q -70 10 -105 5 Q -70 -5 -36 0"
            fill="#D8FF38"
            opacity="0.9"
          />
          <path
            d="M 36 0 Q 70 10 105 5 Q 70 -5 36 0"
            fill="#D8FF38"
            opacity="0.9"
          />

          {/* Vertebrae Segment 6 */}
          <polygon
            points="0,35 -30,80 0,115 30,80"
            fill="url(#spineGrad)"
            stroke="#B2D234"
            strokeWidth="1.2"
          />
          <path
            d="M -30 80 Q -60 90 -90 95 Q -60 80 -30 80"
            fill="#D8FF38"
            opacity="0.7"
          />
          <path
            d="M 30 80 Q 60 90 90 95 Q 60 80 30 80"
            fill="#D8FF38"
            opacity="0.7"
          />

          {/* Vertebrae Segment 7 */}
          <polygon
            points="0,110 -25,150 0,180 25,150"
            fill="url(#spineGrad)"
            stroke="#B2D234"
            strokeWidth="1"
          />

          {/* Vertebrae Segment 8 */}
          <polygon
            points="0,175 -20,210 0,240 20,210"
            fill="url(#spineGrad)"
            stroke="#8EA824"
            strokeWidth="0.9"
          />

          {/* Vertebrae Segment 9 */}
          <polygon
            points="0,235 -16,265 0,290 16,265"
            fill="url(#spineGrad)"
            stroke="#8EA824"
            strokeWidth="0.8"
          />

          {/* Vertebrae Tail Tip */}
          <polygon
            points="0,285 -10,320 0,360 10,320"
            fill="url(#spineGrad)"
            stroke="#D8FF38"
            strokeWidth="0.8"
          />
          <polygon
            points="0,355 -6,390 0,430 6,390"
            fill="url(#spineGrad)"
            stroke="#D8FF38"
            strokeWidth="0.7"
          />
        </g>
      </svg>
    </div>
  );
}

