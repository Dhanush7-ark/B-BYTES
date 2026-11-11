"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, Award, ExternalLink, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Creates the Bounty Bytes brand tile texture with clean, crisp logo
 * and multi-tier glowing neon line borders.
 */
function createBountyBytesTileTexture(logoImage: HTMLImageElement | null): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d")!;

  // 1. Dark obsidian base with subtle cyber grid
  ctx.fillStyle = "#050903";
  ctx.fillRect(0, 0, 1024, 1024);

  // 2. Inner beveled tile body
  ctx.fillStyle = "#081205";
  ctx.fillRect(36, 36, 952, 952);

  // ─── 3. MULTI-LAYER GLOWING NEON LINE BORDERS ───
  // Outer soft neon aura border
  ctx.strokeStyle = "rgba(178, 210, 52, 0.4)";
  ctx.lineWidth = 18;
  ctx.strokeRect(32, 32, 960, 960);

  // Mid intense neon lime line (#B2D234)
  ctx.strokeStyle = "#b2d234";
  ctx.lineWidth = 8;
  ctx.strokeRect(32, 32, 960, 960);

  // Core bright electric chartreuse line (#D8FF38)
  ctx.strokeStyle = "#d8ff38";
  ctx.lineWidth = 3;
  ctx.strokeRect(32, 32, 960, 960);

  // Double inner glowing precision line
  ctx.strokeStyle = "rgba(216, 255, 56, 0.75)";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(54, 54, 916, 916);

  // 4. L-shaped cyber bracket corners in glowing white/lime
  const bracketSize = 44;
  const bOff = 32;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.moveTo(bOff, bOff + bracketSize);
  ctx.lineTo(bOff, bOff);
  ctx.lineTo(bOff + bracketSize, bOff);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(1024 - bOff - bracketSize, bOff);
  ctx.lineTo(1024 - bOff, bOff);
  ctx.lineTo(1024 - bOff, bOff + bracketSize);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(bOff, 1024 - bOff - bracketSize);
  ctx.lineTo(bOff, 1024 - bOff);
  ctx.lineTo(bOff + bracketSize, 1024 - bOff);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(1024 - bOff - bracketSize, 1024 - bOff);
  ctx.lineTo(1024 - bOff, 1024 - bOff);
  ctx.lineTo(1024 - bOff, 1024 - bOff - bracketSize);
  ctx.stroke();

  // Corner glowing dots
  ctx.fillStyle = "#d8ff38";
  const cornerDots = [
    [54, 54],
    [970, 54],
    [54, 970],
    [970, 970],
  ];
  cornerDots.forEach(([cx, cy]) => {
    ctx.fillRect(cx - 5, cy - 5, 10, 10);
  });

  // 5. Tech markings along the tile perimeter
  ctx.fillStyle = "#b2d234";
  ctx.font = "bold 20px monospace";
  ctx.fillText("BOUNTY BYTES // SYSTEM TILE", 72, 92);
  ctx.fillText("MODULAR SPEC // 0xBB-2026", 72, 948);
  ctx.fillText("LATENCY <16MS", 760, 92);
  ctx.fillText("AUTONOMOUS CORE", 720, 948);

  // Crosshair center lines
  ctx.strokeStyle = "rgba(178, 210, 52, 0.4)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(512, 60);
  ctx.lineTo(512, 150);
  ctx.moveTo(512, 874);
  ctx.lineTo(512, 964);
  ctx.moveTo(60, 512);
  ctx.lineTo(150, 512);
  ctx.moveTo(874, 512);
  ctx.lineTo(964, 512);
  ctx.stroke();

  // 6. Clean, crisp logo
  if (logoImage && logoImage.complete && logoImage.naturalWidth > 0) {
    ctx.save();
    const logoW = 720;
    const logoH = 360;
    const lx = (1024 - logoW) / 2;
    const ly = (1024 - logoH) / 2;
    ctx.drawImage(logoImage, lx, ly, logoW, logoH);
    ctx.restore();
  } else {
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.font = "900 80px 'Syne', sans-serif";
    ctx.fillText("BOUNTY BYTES", 512, 470);

    ctx.fillStyle = "#b2d234";
    ctx.font = "700 30px monospace";
    ctx.fillText("AI STUDIOS // KINETIC CORE", 512, 555);
    ctx.restore();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

interface Card3DLocation {
  id: string;
  tag: string;
  category: string;
  date: string;
  recipient: string;
  author: string;
  bgColor: string;
  textColor: string;
  badgeColor: string;
  ribbonText: string;
  sectorLabel: string;
  tileAnchorLabel: string;
  desc: string;
  stamp: string;
  logo: string;
  lightColor: number;
  worldPos: THREE.Vector3;
  rotY: number;
  rotX: number;
}

function smoothstep(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * clamped * (3 - 2 * clamped);
}

export function AwardsRecognitionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Split-vault doors refs
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const doorsWrapRef = useRef<HTMLDivElement>(null);

  // 3D DOM card overlay refs
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ─── 1. FIXED STATIONARY CARDS ATTACHED TO BOUNTY BYTES TILES ───
  const certificates: Card3DLocation[] = [
    {
      id: "sotd",
      tag: "SITE OF THE DAY",
      category: "Site of the Day.",
      date: "Sep 26, 2026",
      recipient: "BOUNTY BYTES.",
      author: "By Bounty Bytes AI Studios",
      bgColor: "#E53E34",
      textColor: "#FFFFFF",
      badgeColor: "#FFA49E",
      ribbonText: "— SOTD // 01",
      sectorLabel: "BB TILE // LEFT SECTOR",
      tileAnchorLabel: "ATTACHED TO BB TILE #01",
      desc: "2026 Official Certificate. Site of the Day in recognition of outstanding design, sovereign execution, and cinematic visual mastery created for the autonomous frontier.",
      stamp: "awwwards.winners",
      logo: "W.",
      lightColor: 0xff3b30,
      worldPos: new THREE.Vector3(-4.5, 1.8, 3.5),
      rotY: 0.18,
      rotX: -0.04,
    },
    {
      id: "honors",
      tag: "HONORS",
      category: "Honors.",
      date: "Aug 19, 2026",
      recipient: "BOUNTY BYTES.",
      author: "By Bounty Bytes AI Studios",
      bgColor: "#D2E7E6",
      textColor: "#0A2422",
      badgeColor: "#174C47",
      ribbonText: "— Honors // 02",
      sectorLabel: "BB TILE // MIDDLE FAR AWAY",
      tileAnchorLabel: "ATTACHED TO BB TILE #02",
      desc: "2026 Official Certificate. The awwwards jury is proud to declare this platform Honors in recognition of exceptional digital craft, architectural precision, and autonomous motion design.",
      stamp: "awwwards.winners",
      logo: "W.",
      lightColor: 0x5ce1e6,
      worldPos: new THREE.Vector3(0.0, 1.8, -7.5),
      rotY: 0.0,
      rotX: 0.03,
    },
    {
      id: "dev-award",
      tag: "DEV AWARD",
      category: "Developer Award.",
      date: "Sep 26, 2026",
      recipient: "BOUNTY BYTES.",
      author: "By Bounty Bytes AI Studios",
      bgColor: "#5B3FA8",
      textColor: "#FFFFFF",
      badgeColor: "#8D72DE",
      ribbonText: "— Dev Award // 03",
      sectorLabel: "BB TILE // RIGHT SECTOR",
      tileAnchorLabel: "ATTACHED TO BB TILE #03",
      desc: "2026 Official Certificate. The awwwards developer jury is proud to give this platform a Developer Award in recognition of cutting-edge GPU kinetic shader engine and sub-16ms latency.",
      stamp: "awwwards.winners",
      logo: "W.",
      lightColor: 0xaf52de,
      worldPos: new THREE.Vector3(4.8, 1.8, 0.8),
      rotY: -0.22,
      rotX: -0.04,
    },
    {
      id: "fwa",
      tag: "FWA OF THE DAY",
      category: "FWA of the Day.",
      date: "Oct 14, 2026",
      recipient: "BOUNTY BYTES.",
      author: "By Bounty Bytes AI Studios",
      bgColor: "#141A0E",
      textColor: "#D8FF38",
      badgeColor: "#B2D234",
      ribbonText: "— FWA Winner // 04",
      sectorLabel: "BB TILE // LEFT MID-DEPTH",
      tileAnchorLabel: "ATTACHED TO BB TILE #04",
      desc: "Official Award Certificate. Rewarding progressive cutting-edge interactive architecture, dark editorial typography, and sovereign machine execution since 2000.",
      stamp: "thefwa.com/winners",
      logo: "FWA",
      lightColor: 0xb2d234,
      worldPos: new THREE.Vector3(-3.5, 1.8, -2.2),
      rotY: 0.16,
      rotX: -0.03,
    },
  ];

  // ─── 2. PRECISE WAYPOINTS FOR ALL 4 CARDS (NO INTERMEDIATE STOPS) ───
  const waypoints = {
    overview: {
      pos: new THREE.Vector3(0.0, 5.0, 13.5),
      lookAt: new THREE.Vector3(0.0, 1.2, 0.0),
    },
    card0: {
      pos: new THREE.Vector3(-4.08, 1.7, 5.65),
      lookAt: new THREE.Vector3(-4.5, 1.5, 3.5),
    },
    card1: {
      pos: new THREE.Vector3(0.0, 1.7, -5.35),
      lookAt: new THREE.Vector3(0.0, 1.5, -7.5),
    },
    card2: {
      pos: new THREE.Vector3(4.32, 1.7, 2.95),
      lookAt: new THREE.Vector3(4.8, 1.5, 0.8),
    },
    card3: {
      pos: new THREE.Vector3(-3.15, 1.7, -0.05),
      lookAt: new THREE.Vector3(-3.5, 1.5, -2.2),
    },
  };

  /**
   * Continuous camera travel stopping ONLY at the 4 cards.
   */
  const computeStableCameraTransform = useCallback((p: number, outPos: THREE.Vector3, outLook: THREE.Vector3) => {
    // 0. Entrance (0.00 to 0.08)
    if (p <= 0.08) {
      outPos.copy(waypoints.overview.pos);
      outLook.copy(waypoints.overview.lookAt);
      return;
    }

    // Travel to Card 0 (0.08 to 0.18)
    if (p < 0.18) {
      const t = (p - 0.08) / (0.18 - 0.08);
      const e = smoothstep(t);
      outPos.lerpVectors(waypoints.overview.pos, waypoints.card0.pos, e);
      outLook.lerpVectors(waypoints.overview.lookAt, waypoints.card0.lookAt, e);
      return;
    }

    // ─── STOP 1: CARD 0 (0.18 to 0.32) ───
    if (p <= 0.32) {
      outPos.copy(waypoints.card0.pos);
      outLook.copy(waypoints.card0.lookAt);
      return;
    }

    // Travel Card 0 -> Card 1 (0.32 to 0.42) - ZERO STOP IN MIDDLE
    if (p < 0.42) {
      const t = (p - 0.32) / (0.42 - 0.32);
      const e = smoothstep(t);
      outPos.lerpVectors(waypoints.card0.pos, waypoints.card1.pos, e);
      outPos.y += Math.sin(e * Math.PI) * 1.1;
      outLook.lerpVectors(waypoints.card0.lookAt, waypoints.card1.lookAt, e);
      return;
    }

    // ─── STOP 2: CARD 1 (0.42 to 0.56) ───
    if (p <= 0.56) {
      outPos.copy(waypoints.card1.pos);
      outLook.copy(waypoints.card1.lookAt);
      return;
    }

    // Travel Card 1 -> Card 2 (0.56 to 0.66) - ZERO STOP IN MIDDLE
    if (p < 0.66) {
      const t = (p - 0.56) / (0.66 - 0.56);
      const e = smoothstep(t);
      outPos.lerpVectors(waypoints.card1.pos, waypoints.card2.pos, e);
      outPos.y += Math.sin(e * Math.PI) * 1.1;
      outLook.lerpVectors(waypoints.card1.lookAt, waypoints.card2.lookAt, e);
      return;
    }

    // ─── STOP 3: CARD 2 (0.66 to 0.80) ───
    if (p <= 0.80) {
      outPos.copy(waypoints.card2.pos);
      outLook.copy(waypoints.card2.lookAt);
      return;
    }

    // Travel Card 2 -> Card 3 (0.80 to 0.88) - ZERO STOP IN MIDDLE
    if (p < 0.88) {
      const t = (p - 0.80) / (0.88 - 0.80);
      const e = smoothstep(t);
      outPos.lerpVectors(waypoints.card2.pos, waypoints.card3.pos, e);
      outPos.y += Math.sin(e * Math.PI) * 0.9;
      outLook.lerpVectors(waypoints.card2.lookAt, waypoints.card3.lookAt, e);
      return;
    }

    // ─── STOP 4: CARD 3 (0.88 to 0.95) ───
    if (p <= 0.95) {
      outPos.copy(waypoints.card3.pos);
      outLook.copy(waypoints.card3.lookAt);
      return;
    }

    // Exit transition as doors seal shut (0.95 to 1.00)
    const t = (p - 0.95) / 0.05;
    const e = smoothstep(t);
    outPos.lerpVectors(waypoints.card3.pos, waypoints.overview.pos, e * 0.35);
    outLook.lerpVectors(waypoints.card3.lookAt, waypoints.overview.lookAt, e * 0.35);
  }, []);

  const threeRef = useRef<{
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    currentCamPos: THREE.Vector3;
    currentLookAt: THREE.Vector3;
    targetCamPos: THREE.Vector3;
    targetLookAt: THREE.Vector3;
    floorMaterial: THREE.MeshStandardMaterial | null;
    greenKeyLight: THREE.PointLight | null;
  }>({
    camera: null,
    renderer: null,
    currentCamPos: waypoints.overview.pos.clone(),
    currentLookAt: waypoints.overview.lookAt.clone(),
    targetCamPos: waypoints.overview.pos.clone(),
    targetLookAt: waypoints.overview.lookAt.clone(),
    floorMaterial: null,
    greenKeyLight: null,
  });

  // ─── 3. THREE.JS CIRCULAR BLACK WALL & 3D SCENE SETUP ───
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020301, 0.016);

    const camera = new THREE.PerspectiveCamera(
      52,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      140
    );
    camera.position.copy(waypoints.overview.pos);
    camera.lookAt(waypoints.overview.lookAt);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ─── A. 3D FACETED LOW-POLY STEPPED TILES ("TAILS") IN LOGO COLOURS ───
    // Replicates the exact faceted stepped geometric structure from the reference screenshot
    // but in Bounty Bytes neon lime (#B2D234) & obsidian (#020502) palette
    const width = 46;
    const depth = 44;
    const segX = 46;
    const segZ = 40;
    const rawFloorGeo = new THREE.PlaneGeometry(width, depth, segX, segZ);
    rawFloorGeo.rotateX(-Math.PI / 2);

    const pos = rawFloorGeo.attributes.position;

    // Pseudorandom generator for deterministic, repeatable facet triangulation
    function pseudoRandom(i: number) {
      const v = Math.sin(i * 127.1 + 311.7) * 43758.5453123;
      return v - Math.floor(v);
    }

    const cardPositions = certificates.map((c) => c.worldPos);

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let z = pos.getZ(i);

      let minDistToCard = 999;
      for (const cp of cardPositions) {
        const d = Math.hypot(x - cp.x, z - cp.z);
        if (d < minDistToCard) minDistToCard = d;
      }

      const distFromCenter = Math.hypot(x, z + 1.0);

      // Perturb vertex positions slightly to generate irregular low-poly triangular facets
      if (distFromCenter < 20.0 && minDistToCard > 1.2) {
        const jX = (pseudoRandom(i * 3 + 1) - 0.5) * 0.44;
        const jZ = (pseudoRandom(i * 3 + 2) - 0.5) * 0.44;
        x += jX;
        z += jZ;
        pos.setX(i, x);
        pos.setZ(i, z);
      }

      // Stepped geometric heightfield (faceted tiles with plateaus and sheer prism steps)
      const baseNoise =
        Math.sin(x * 0.32 + 0.4) * Math.cos(z * 0.36) * 0.72 +
        Math.sin(x * 0.68 - z * 0.52) * 0.42 +
        Math.cos(x * 0.18 + z * 0.72) * 0.35 +
        0.35;

      // Solid flat terrace under each card so cards anchor rock-solid to the floor tiles
      const terraceFactor = Math.min(1.0, Math.max(0.0, (minDistToCard - 1.2) / 1.6));

      // Seamlessly taper to ground level at the circular black wall perimeter
      const wallTaper = distFromCenter > 18.5 ? Math.max(0.0, 1.0 - (distFromCenter - 18.5) / 3.0) : 1.0;

      // Quantize height into discrete stepped tile layers (0.28 unit steps)
      const step = 0.28;
      const steppedH = Math.round(baseNoise / step) * step;

      pos.setY(i, Math.max(0.0, steppedH * terraceFactor * wallTaper));
    }

    // Convert to non-indexed geometry so every single triangular facet has its own flat normal
    const facetedGeo = rawFloorGeo.toNonIndexed();
    facetedGeo.computeVertexNormals();

    // Dark obsidian / deep emerald-charcoal faceted tile material
    const facetedTileMat = new THREE.MeshStandardMaterial({
      color: 0x071105, // Deep obsidian-graphite with subtle olive undertone
      roughness: 0.38, // Specular gloss on flat facets
      metalness: 0.75, // Cyber metallic sheen
      emissive: 0x050e03, // Subtle internal ambient cyber glow
      emissiveIntensity: 0.4,
      flatShading: true, // Crucial for crisp, crystalline low-poly facets like the reference image
    });

    const floor = new THREE.Mesh(facetedGeo, facetedTileMat);
    floor.position.set(0, 0, 0);
    scene.add(floor);

    // ─── B. DUAL-LAYER GLOWING NEON LINE BORDERS TRACING EVERY TRIANGULAR TILE ───
    const wireGeo = new THREE.WireframeGeometry(facetedGeo);

    // Layer 1: Radiant Neon Lime (#B2D234) Wireframe Aura
    const wireMat1 = new THREE.LineBasicMaterial({
      color: 0xb2d234,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthTest: true,
    });
    const wireframeMesh1 = new THREE.LineSegments(wireGeo, wireMat1);
    wireframeMesh1.position.set(0, 0.005, 0);
    scene.add(wireframeMesh1);

    // Layer 2: Electric Chartreuse (#D8FF38) Precision Core Highlight
    const wireMat2 = new THREE.LineBasicMaterial({
      color: 0xd8ff38,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthTest: true,
    });
    const wireframeMesh2 = new THREE.LineSegments(wireGeo, wireMat2);
    wireframeMesh2.position.set(0, 0.012, 0);
    scene.add(wireframeMesh2);

    // ─── C. CIRCULAR BLACK WALL ENCLOSING THE ENTIRE ARENA ───
    // A grand, seamless circular cylindrical wall in pure architectural black encircling all cards
    const wallRadius = 22.0;
    const wallHeight = 22.0;
    const cylinderGeo = new THREE.CylinderGeometry(
      wallRadius,
      wallRadius,
      wallHeight,
      64,
      1,
      true // open-ended top/bottom
    );

    // Deep, pure matte architectural black material
    const circularWallMat = new THREE.MeshStandardMaterial({
      color: 0x020302, // Pure sovereign black
      roughness: 0.88,
      metalness: 0.18,
      side: THREE.BackSide, // Viewed from inside the circular rotunda
    });

    const circularWall = new THREE.Mesh(cylinderGeo, circularWallMat);
    circularWall.position.set(0, wallHeight / 2, -1.0);
    scene.add(circularWall);

    // Dark architectural vertical monolith ribs lining the circular black wall
    const ribGeo = new THREE.BoxGeometry(0.22, wallHeight, 0.35);
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0x060805,
      roughness: 0.75,
      metalness: 0.35,
    });

    const numRibs = 32;
    for (let i = 0; i < numRibs; i++) {
      const angle = (i / numRibs) * Math.PI * 2;
      const rib = new THREE.Mesh(ribGeo, ribMat);
      const rx = Math.sin(angle) * (wallRadius - 0.16);
      const rz = -1.0 + Math.cos(angle) * (wallRadius - 0.16);
      rib.position.set(rx, wallHeight / 2, rz);
      rib.rotation.y = angle;
      scene.add(rib);
    }

    // Heavy dark circular baseboard ring where the wall meets the floor
    const ringGeo = new THREE.TorusGeometry(wallRadius, 0.22, 12, 64);
    ringGeo.rotateX(Math.PI / 2);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x080c06,
      roughness: 0.6,
      metalness: 0.5,
    });
    const baseRing = new THREE.Mesh(ringGeo, ringMat);
    baseRing.position.set(0, 0.11, -1.0);
    scene.add(baseRing);

    // Subtle neon lime circular trace line grounding the circular black wall to the tiles
    const lineRingGeo = new THREE.BufferGeometry();
    const ringPoints: number[] = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      ringPoints.push(
        Math.sin(theta) * (wallRadius - 0.25),
        0.03,
        -1.0 + Math.cos(theta) * (wallRadius - 0.25)
      );
    }
    lineRingGeo.setAttribute("position", new THREE.Float32BufferAttribute(ringPoints, 3));
    const lineRingMat = new THREE.LineBasicMaterial({
      color: 0xb2d234,
      transparent: true,
      opacity: 0.55,
    });
    const floorRingLine = new THREE.Line(lineRingGeo, lineRingMat);
    scene.add(floorRingLine);

    // ─── D. ATMOSPHERIC LIGHTING INSIDE THE CIRCULAR ARENA ───
    const ambientLight = new THREE.AmbientLight(0x0a1606, 2.5);
    scene.add(ambientLight);

    const greenKeyLight = new THREE.PointLight(0xb2d234, 9.0, 48);
    greenKeyLight.position.set(-5, 5.5, 3);
    scene.add(greenKeyLight);

    const brightRimLight = new THREE.PointLight(0xd8ff38, 8.0, 40);
    brightRimLight.position.set(6, 5, -2);
    scene.add(brightRimLight);

    const floorGlazeLight = new THREE.PointLight(0xc5eb2a, 6.5, 34);
    floorGlazeLight.position.set(0, 2.5, 6);
    scene.add(floorGlazeLight);

    const wallUplight = new THREE.PointLight(0x9fc820, 6.0, 36);
    wallUplight.position.set(0, 5.0, -18);
    scene.add(wallUplight);

    // ─── E. HERO BOUNTY BYTES PEDESTAL SLABS ATTACHED TO GROUND TILES ───
    certificates.forEach((cert) => {
      const { worldPos, rotY, rotX } = cert;

      const slabGeo = new THREE.BoxGeometry(3.8, 0.18, 3.0);
      const slabMat = new THREE.MeshStandardMaterial({
        color: 0x091406,
        emissive: 0x142c0b,
        emissiveIntensity: 0.5,
        roughness: 0.35,
        metalness: 0.8,
      });
      const slabMesh = new THREE.Mesh(slabGeo, slabMat);
      slabMesh.position.set(worldPos.x, 0.09, worldPos.z);
      slabMesh.rotation.y = rotY;
      slabMesh.rotation.x = rotX;

      const slabEdgesGeo = new THREE.EdgesGeometry(slabGeo);
      const slabEdgesMat = new THREE.LineBasicMaterial({
        color: 0xd8ff38,
        transparent: true,
        opacity: 0.95,
      });
      slabMesh.add(new THREE.LineSegments(slabEdgesGeo, slabEdgesMat));
      scene.add(slabMesh);

      // Twin mounting clamps gripping the card
      const clampGeo = new THREE.BoxGeometry(0.22, 0.75, 0.38);
      const clampMat = new THREE.MeshStandardMaterial({
        color: 0x16240d,
        emissive: 0xb2d234,
        emissiveIntensity: 0.4,
        metalness: 0.9,
        roughness: 0.2,
      });

      const leftClamp = new THREE.Mesh(clampGeo, clampMat);
      leftClamp.position.set(-1.45, 0.35, 0);
      slabMesh.add(leftClamp);

      const rightClamp = new THREE.Mesh(clampGeo, clampMat);
      rightClamp.position.set(1.45, 0.35, 0);
      slabMesh.add(rightClamp);

      // Glowing contact ring
      const ringGeo = new THREE.RingGeometry(1.7, 2.2, 16);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xb2d234,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      const groundRing = new THREE.Mesh(ringGeo, ringMat);
      groundRing.position.set(worldPos.x, 0.02, worldPos.z);
      scene.add(groundRing);

      // Contact spotlight on tile
      const tileSpotLight = new THREE.PointLight(cert.lightColor, 4.2, 7.5);
      tileSpotLight.position.set(worldPos.x, 0.25, worldPos.z);
      scene.add(tileSpotLight);
    });

    threeRef.current = {
      camera,
      renderer,
      currentCamPos: waypoints.overview.pos.clone(),
      currentLookAt: waypoints.overview.lookAt.clone(),
      targetCamPos: waypoints.overview.pos.clone(),
      targetLookAt: waypoints.overview.lookAt.clone(),
      floorMaterial: facetedTileMat,
      greenKeyLight,
    };

    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ─── F. RENDER & 3D PROJECTION LOOP ───
    let animId: number;
    const tempProjVec = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const three = threeRef.current;

      const lerpSpeed = 0.14;
      three.currentCamPos.lerp(three.targetCamPos, lerpSpeed);
      three.currentLookAt.lerp(three.targetLookAt, lerpSpeed);

      camera.position.copy(three.currentCamPos);
      camera.lookAt(three.currentLookAt);

      renderer.render(scene, camera);

      // ─── RIGID 3D-TO-2D PROJECTION: CARDS STAY PERMANENTLY IN PLACE ───
      const stageW = canvas.clientWidth;
      const stageH = canvas.clientHeight;
      const isMobile = stageW < 640;

      certificates.forEach((cert, i) => {
        const domEl = cardElementsRef.current[i];
        if (!domEl) return;

        tempProjVec.copy(cert.worldPos);
        tempProjVec.project(camera);

        if (tempProjVec.z > 1.0) {
          domEl.style.display = "none";
          return;
        }

        const screenX = (tempProjVec.x * 0.5 + 0.5) * stageW;
        const screenY = (-tempProjVec.y * 0.5 + 0.5) * stageH;

        const dist = camera.position.distanceTo(cert.worldPos);

        const baseScale = 2.45 / dist;
        const scale = Math.min(1.18, Math.max(0.2, isMobile ? baseScale * 0.9 : baseScale));

        const isClose = dist < 2.9;
        const opacity = isClose ? 1.0 : Math.max(0.4, Math.min(0.85, 3.4 / dist));
        const blur = isClose ? 0 : Math.max(0, Math.min(3.5, (dist - 2.8) * 0.7));
        const zIndex = Math.round(100 - dist * 4);

        domEl.style.display = "flex";
        domEl.style.transform = `translate3d(${screenX}px, ${screenY}px, 0px) translate(-50%, -50%) scale(${scale})`;
        domEl.style.opacity = `${opacity}`;
        domEl.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : "none";
        domEl.style.zIndex = `${zIndex}`;
      });
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      rawFloorGeo.dispose();
      facetedGeo.dispose();
      facetedTileMat.dispose();
      wireGeo.dispose();
      wireMat1.dispose();
      wireMat2.dispose();
      cylinderGeo.dispose();
      circularWallMat.dispose();
      ribGeo.dispose();
      ribMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      lineRingGeo.dispose();
      lineRingMat.dispose();
      renderer.dispose();
      threeRef.current.camera = null;
      threeRef.current.renderer = null;
    };
  }, []);

  // ─── 4. GSAP SCROLLTRIGGER SPLIT-VAULT OPENS & CLOSES BACK TOGETHER ───
  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    const leftDoor = leftDoorRef.current;
    const rightDoor = rightDoorRef.current;
    const doorsWrap = doorsWrapRef.current;

    if (!container || !stage || !leftDoor || !rightDoor || !doorsWrap) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1.0,
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);

            const three = threeRef.current;
            computeStableCameraTransform(p, three.targetCamPos, three.targetLookAt);

            // Doors open at start (0.00 to 0.10) and only seal shut at exit (0.95 to 1.00)
            if (p < 0.10) {
              const openT = p / 0.10;
              const openE = smoothstep(openT);
              leftDoor.style.transform = `translateX(${-105 * openE}%) scale(${1 + 0.15 * openE}) rotateY(${-16 * openE}deg)`;
              rightDoor.style.transform = `translateX(${105 * openE}%) scale(${1 + 0.15 * openE}) rotateY(${16 * openE}deg)`;
              doorsWrap.style.opacity = `${1 - openE}`;
              doorsWrap.style.pointerEvents = openE > 0.85 ? "none" : "auto";
            } else if (p > 0.95) {
              const closeT = (p - 0.95) / 0.05;
              const closeE = smoothstep(closeT);
              leftDoor.style.transform = `translateX(${-105 * (1 - closeE)}%) scale(${1 + 0.15 * (1 - closeE)}) rotateY(${-16 * (1 - closeE)}deg)`;
              rightDoor.style.transform = `translateX(${105 * (1 - closeE)}%) scale(${1 + 0.15 * (1 - closeE)}) rotateY(${16 * (1 - closeE)}deg)`;
              doorsWrap.style.opacity = `${closeE}`;
              doorsWrap.style.pointerEvents = closeE > 0.2 ? "auto" : "none";
            } else {
              leftDoor.style.transform = "translateX(-105%) scale(1.15) rotateY(-16deg)";
              rightDoor.style.transform = "translateX(105%) scale(1.15) rotateY(16deg)";
              doorsWrap.style.opacity = "0";
              doorsWrap.style.pointerEvents = "none";
            }

            // Active card index strictly maps to each of the 4 card stops
            if (p < 0.18) {
              setActiveCardIndex(0);
            } else if (p < 0.38) {
              setActiveCardIndex(0); // Card 0: SOTD
            } else if (p < 0.62) {
              setActiveCardIndex(1); // Card 1: Honors
            } else if (p < 0.85) {
              setActiveCardIndex(2); // Card 2: Dev Award
            } else {
              setActiveCardIndex(3); // Card 3: FWA Winner
            }
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, [computeStableCameraTransform]);

  // Jump camera directly into any of the 4 card resting zones
  const scrollToCard = useCallback((index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const progressMap = [0.25, 0.49, 0.73, 0.91];
    const targetProgress = progressMap[index] ?? 0.25;
    const targetY = containerTop + containerHeight * targetProgress;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  return (
    <section
      ref={containerRef}
      id="recognitions"
      className="relative w-full h-[470vh] bg-[#000000] text-neutral-100 select-none"
    >
      {/* ═══════════════════════════════════════════════════════════════════
          GSAP PINNED STAGE (100VH VIEWPORT LOCKED DURING 3D TRAVEL)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        ref={stageRef}
        className="w-full h-screen overflow-hidden flex flex-col justify-between items-center bg-[#000000] relative"
      >
        {/* ─── LAYER A: THREE.JS LIVE 3D TILES, CIRCULAR BLACK WALL & CAMERA ─── */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute inset-0 w-screen min-w-full h-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 95% 75% at 50% 60%, rgba(178, 210, 52, 0.16) 0%, rgba(10, 16, 8, 0.7) 45%, #000000 100%)",
            }}
          />
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* ─── LAYER B: TOP RECOGNITIONS LEDGER BAR ─── */}
        <div className="relative z-30 w-full max-w-7xl mx-auto pt-6 px-6 sm:px-12 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-6 sm:gap-10 font-mono text-[10px] tracking-widest text-neutral-400">
            <span>July 1, 2026</span>
            <span className="hidden sm:inline">June 14, 2026</span>
            <span className="text-[#B2D234] font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#B2D234]" />
              <span>BOUNTY HONORS</span>
            </span>
            <span className="hidden sm:inline">May 22, 2026</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-400">
            <span className="px-2.5 py-0.5 rounded-full bg-[#101704]/90 border border-[#B2D234]/50 text-[#B2D234] text-[10px] flex items-center gap-1.5 shadow-[0_0_12px_rgba(178,210,52,0.25)]">
              <Compass className="w-3 h-3 text-[#B2D234] animate-spin" style={{ animationDuration: "12s" }} />
              <span>CIRCULAR BLACK ROTUNDA // 4 AWARDS</span>
            </span>
          </div>
        </div>

        {/* ─── LAYER C: 3D CERTIFICATE CARDS (GRAND PROMINENT SIZE) ─── */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {certificates.map((cert, index) => {
            const isCurrentFocus = index === activeCardIndex;
            return (
              <div
                key={cert.id}
                ref={(el) => {
                  cardElementsRef.current[index] = el;
                }}
                onClick={() => scrollToCard(index)}
                className={`award-3d-card-item absolute left-0 top-0 will-change-transform select-none cursor-pointer pointer-events-auto w-[350px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[520px] sm:h-[620px] md:h-[680px] lg:h-[720px] rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col justify-between shadow-[0_35px_100px_rgba(0,0,0,0.96)] border transform-gpu origin-center ${
                  isCurrentFocus
                    ? "ring-2 ring-[#B2D234] shadow-[0_0_70px_rgba(178,210,52,0.52)]"
                    : "hover:ring-1 hover:ring-[#B2D234]/70"
                }`}
                style={{
                  backgroundColor: cert.bgColor,
                  color: cert.textColor,
                  borderColor: isCurrentFocus ? "#B2D234" : "rgba(255,255,255,0.16)",
                  transition: "opacity 0.25s ease, filter 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {/* 3D Location Pill Header */}
                <div className="absolute -top-4 left-7 px-3.5 py-1 rounded-full bg-[#080d04] border border-[#B2D234]/70 text-[#B2D234] font-mono text-[9px] sm:text-[10px] tracking-widest uppercase shadow-[0_0_16px_rgba(178,210,52,0.45)]">
                  {cert.sectorLabel}
                </div>

                {/* Top Row: Logo & Category */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-syne font-black text-3xl sm:text-4xl tracking-tighter">
                      {cert.logo}
                    </span>
                    <span
                      className="text-[10px] sm:text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded"
                      style={{
                        backgroundColor: `${cert.textColor}18`,
                        color: cert.textColor,
                      }}
                    >
                      {cert.tag}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none mb-3">
                    {cert.category}
                  </h3>

                  <div className="text-base sm:text-lg md:text-xl font-medium opacity-85 mb-1.5">
                    {cert.date}
                  </div>

                  <div className="font-syne font-black text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase">
                    {cert.recipient}
                  </div>

                  <div className="text-xs sm:text-sm md:text-base opacity-75 font-sans mt-1">
                    {cert.author}
                  </div>
                </div>

                {/* Middle / Bottom Description & Official Stamps */}
                <div>
                  <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed opacity-85 font-sans mb-5">
                    {cert.desc}
                  </p>

                  {/* Signature Line & Stamps */}
                  <div
                    className="pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: `${cert.textColor}25` }}
                  >
                    <div className="flex flex-col">
                      <span
                        className="text-2xl sm:text-3xl opacity-90 leading-none"
                        style={{
                          fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                        }}
                      >
                        Jury Evaluation
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono opacity-65 uppercase tracking-widest mt-1">
                        Verified Official Award
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] sm:text-xs tracking-wider opacity-80">
                        {cert.stamp}
                      </span>
                      <ExternalLink className="w-4 h-4 opacity-75" />
                    </div>
                  </div>

                  {/* Visible Ground Tile Anchor Ledger Footing */}
                  <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#B2D234] tracking-widest uppercase">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B2D234] shadow-[0_0_8px_#B2D234] animate-pulse" />
                      <span>{cert.tileAnchorLabel}</span>
                    </span>
                    <span className="opacity-75">GROUND ROOTED</span>
                  </div>
                </div>

                {/* Vertical Ribbon Text on Right Edge */}
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[10px] sm:text-[11px] font-mono tracking-widest uppercase opacity-50 select-none pointer-events-none">
                  {cert.ribbonText}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── LAYER D: SPLIT-VAULT DOORS (OPENS AT START & CLOSES SHUT AT END) ─── */}
        <div
          ref={doorsWrapRef}
          className="absolute inset-0 z-40 overflow-hidden pointer-events-none"
          style={{ perspective: 1200 }}
        >
          {/* Top-Left Chrome Gothic Sigil */}
          <div className="absolute top-6 left-6 z-50 pointer-events-none select-none opacity-90">
            <svg
              width="44"
              height="44"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_12px_rgba(178,210,52,0.6)]"
            >
              <path
                d="M50 5 L55 35 L85 20 L65 48 L95 50 L65 52 L85 80 L55 65 L50 95 L45 65 L15 80 L35 52 L5 50 L35 48 L15 20 L45 35 Z"
                fill="url(#gothic-foil-vault-4)"
                stroke="#B2D234"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient id="gothic-foil-vault-4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#B2D234" />
                  <stop offset="100%" stopColor="#0B1204" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* LEFT SPLIT PANEL */}
          <div
            ref={leftDoorRef}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#000000] overflow-hidden border-r border-[#B2D234]/30 transform-gpu"
            style={{ transformOrigin: "left center" }}
          >
            <div className="absolute top-0 left-0 w-screen h-full flex flex-col items-center justify-center">
              <div className="text-center select-none leading-none">
                <span
                  className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] text-[#B2D234]"
                  style={{
                    fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                    textShadow: "0 0 50px rgba(178, 210, 52, 0.65)",
                  }}
                >
                  AWARDS &
                </span>
                <span className="font-syne font-black uppercase tracking-tight text-white block text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] mt-2">
                  RECOGNITIONS
                </span>
              </div>
              <p className="absolute bottom-[13%] w-[90vw] max-w-xl text-center font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed px-4">
                Forged in obsession, shaped in darkness, and recognized beyond the screen.
                These awards mark the moments when sovereign machine intelligence became
                impossible to ignore.
              </p>
            </div>
          </div>

          {/* RIGHT SPLIT PANEL */}
          <div
            ref={rightDoorRef}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#000000] overflow-hidden border-l border-[#B2D234]/30 transform-gpu"
            style={{ transformOrigin: "right center" }}
          >
            <div className="absolute top-0 right-0 w-screen h-full flex flex-col items-center justify-center">
              <div className="text-center select-none leading-none">
                <span
                  className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] text-[#B2D234]"
                  style={{
                    fontFamily: "'Ruthie', var(--font-bodoni-72), cursive",
                    textShadow: "0 0 50px rgba(178, 210, 52, 0.65)",
                  }}
                >
                  AWARDS &
                </span>
                <span className="font-syne font-black uppercase tracking-tight text-white block text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] mt-2">
                  RECOGNITIONS
                </span>
              </div>
              <p className="absolute bottom-[13%] w-[90vw] max-w-xl text-center font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed px-4">
                Forged in obsession, shaped in darkness, and recognized beyond the screen.
                These awards mark the moments when sovereign machine intelligence became
                impossible to ignore.
              </p>
            </div>
          </div>
        </div>

        {/* ─── LAYER E: BOTTOM CONTROLLER & NAVIGATION PILL ─── */}
        <div className="relative z-50 w-full pb-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/5 font-mono text-[11px] sm:text-xs text-neutral-400 pointer-events-auto gap-3">
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[#B2D234] font-bold text-sm">+</span>
              <span className="tracking-wider">TENSION</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#B2D234] font-bold text-sm">+</span>
              <span className="tracking-wider">IMMERSION</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#B2D234] font-bold text-sm">+</span>
              <span className="tracking-wider">IMPACT</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToCard(Math.max(0, activeCardIndex - 1))}
              disabled={activeCardIndex === 0}
              aria-label="Previous Award"
              className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-black/60 text-white disabled:opacity-30 hover:border-[#B2D234] hover:text-[#B2D234] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Fly camera close to card ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeCardIndex
                      ? "w-8 bg-[#B2D234] shadow-[0_0_10px_#B2D234]"
                      : "w-2 bg-neutral-700 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                scrollToCard(Math.min(certificates.length - 1, activeCardIndex + 1))
              }
              disabled={activeCardIndex === certificates.length - 1}
              aria-label="Next Award"
              className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-black/60 text-white disabled:opacity-30 hover:border-[#B2D234] hover:text-[#B2D234] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <span className="hidden md:inline font-mono text-[10px] text-neutral-500 ml-2">
              SCROLL TO FLY // CIRCULAR ROTUNDA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
