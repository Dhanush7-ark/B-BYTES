"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CinematicPhoenixBeamCanvas
 * Hardware-accelerated WebGL shader canvas:
 * 1. 100% Static Bird: Phoenix wings, body, feathers, and laser pillar remain razor-sharp and stationary. Zero wing warping.
 * 2. Ground Smoke Floats & Travels with Scroll:
 *    - Continuous fluid undulation: Ground smoke floats gently across the floor at all times.
 *    - Scroll reactive: Travels upwards when scrolling down, and travels downwards when scrolling up!
 *    - Inertial responsiveness: Captures scroll velocity to create natural fluid momentum.
 * 3. Exact 1:1 Right-Side Up Alignment: Laser from top, phoenix on floor.
 * 4. Silky 60fps GPU Performance.
 */

const VERTEX_SHADER_SRC = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  // Correct 1:1 image orientation:
  // Top of canvas (a_position.y = 1) -> v_uv.y = 0 (laser needle)
  // Bottom of canvas (a_position.y = -1) -> v_uv.y = 1 (floor & phoenix)
  v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5);
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SRC = `
precision highp float;

uniform sampler2D u_texture;
uniform float u_time;
uniform float u_scrollProgress;
uniform float u_scrollVelocity;
varying vec2 v_uv;

// ─── 2D SIMPLEX NOISE & FRACTAL BROWNIAN MOTION (FBM) FOR FLUID SMOKE ───
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float v = 0.0;
  v += 0.55 * snoise(p);
  v += 0.30 * snoise(p * 2.06);
  v += 0.15 * snoise(p * 4.12);
  return v;
}

void main() {
  vec2 uv = v_uv;

  // ─── 1. BIRD IS 100% STATIC (ZERO WING DEFORMATION) ───
  vec4 baseColor = texture2D(u_texture, uv);

  // ─── 2. GROUND SMOKE SCROLL-REACTIVE TRAVEL (UPSIDE/DOWNSIDE) ───
  // Scrolling down (u_scrollVelocity > 0) travels ground smoke UP
  // Scrolling up (u_scrollVelocity < 0) travels ground smoke DOWN
  float groundScrollTravel = (u_scrollProgress - 0.5) * 0.14 + u_scrollVelocity * 0.65;

  // ─── 3. CONTINUOUS GROUND SMOKE FLOATING MOTION ───
  // Floating undulation wave: smoke floats continuously at all times
  float floatWaveX = sin(u_time * 0.70 + uv.x * 5.0) * 0.015;
  float floatWaveY = cos(u_time * 0.85 + uv.x * 4.2) * 0.012;
  vec2 floatOffset = vec2(floatWaveX, floatWaveY);

  // Floor zone: bottom 30% of the image (uv.y from 0.70 to 1.0)
  float floorMask = smoothstep(0.66, 0.95, uv.y + groundScrollTravel * 0.5);

  // Multi-octave ground fog coordinates with continuous float + scroll travel
  vec2 groundUV1 = vec2(uv.x * 4.5 + floatOffset.x, (uv.y - groundScrollTravel - floatOffset.y) * 4.0 - u_time * 0.08);
  vec2 groundUV2 = vec2(uv.x * 8.2 - floatOffset.x * 1.5, (uv.y - groundScrollTravel * 1.2) * 6.5 - u_time * 0.14);

  float groundFog1 = fbm(groundUV1);
  float groundFog2 = snoise(groundUV2);
  float groundSmokeDensity = max(0.0, groundFog1 * 0.62 + groundFog2 * 0.38) * floorMask;

  // ─── 4. ATMOSPHERIC SMOKE PLUMES (AROUND FLANKS & BEAM) ───
  float dx = abs(uv.x - 0.50);
  float sideSmokeMask = smoothstep(0.44, 0.62, uv.y) * (1.0 - smoothstep(0.85, 0.94, uv.y))
                      * smoothstep(0.08, 0.22, dx) * (1.0 - smoothstep(0.45, 0.50, dx));

  vec2 atmoUV1 = vec2(uv.x * 5.5 + sin(u_time * 0.25) * 0.2, (uv.y - groundScrollTravel * 0.3) * 4.5 - u_time * 0.15);
  vec2 atmoUV2 = vec2(uv.x * 9.0 - cos(u_time * 0.30) * 0.2, uv.y * 7.5 - u_time * 0.22);
  float atmoFog = max(0.0, fbm(atmoUV1) * 0.60 + fbm(atmoUV2) * 0.40) * sideSmokeMask;

  // Exclude bright bird core & sharp wings: smoke only floats around & behind
  float birdLuminance = max(baseColor.r, max(baseColor.g, baseColor.b));
  float smokeOcclusion = 1.0 - smoothstep(0.40, 0.82, birdLuminance);

  // Subtle fluid texture drift in smoke/fog areas (0 on the crisp bird)
  vec2 smokeDrift = vec2(groundFog2 * 0.007, (groundFog1 - 0.5) * 0.008) * (floorMask + sideSmokeMask) * smokeOcclusion;
  vec2 sampleUV = clamp(uv + smokeDrift, vec2(0.001), vec2(0.999));
  vec4 driftedBase = texture2D(u_texture, sampleUV);

  // Preserve 100% crisp bird pixels
  vec4 color = mix(driftedBase, baseColor, smoothstep(0.35, 0.75, birdLuminance));

  // ─── 5. TOP-TO-BOTTOM TRAVELING GREEN LASER BEAM ───
  // At scrollProgress = 0.0 -> reaches Step 01 (Discovery, ~0.25 down)
  // At scrollProgress = 0.33 -> reaches Step 02 (Creative Direction, ~0.50 down)
  // At scrollProgress = 0.66 -> reaches Step 03 (Digital Craftsmanship, ~0.75 down)
  // At scrollProgress = 1.00 -> reaches Step 04 (Launch & Evolution) and ground floor
  float beamProgressY = mix(0.24, 1.05, clamp(u_scrollProgress, 0.0, 1.0));
  
  // Vertical laser beam reach mask
  float beamReachMask = smoothstep(beamProgressY + 0.16, beamProgressY - 0.02, uv.y);
  
  // Distance from central laser beam
  float distFromBeam = abs(uv.x - 0.50);
  float isBeamCore = smoothstep(0.22, 0.015, distFromBeam);
  
  // Traveling Laser Head Flare (corona burst that travels down with scroll)
  float headDist = length(vec2((uv.x - 0.50) * 4.0, uv.y - beamProgressY));
  float headFlare = exp(-headDist * headDist * 50.0) * isBeamCore * 2.2;

  // Apply beam progress illumination (softly dim upcoming regions until laser arrives)
  float ambientDim = mix(0.18, 1.0, beamReachMask);
  // Keep the dormant phoenix visible even before arrival, but ignite when laser reaches it
  color.rgb *= mix(ambientDim, 1.0, smoothstep(0.70, 0.90, uv.y) * 0.4);
  
  // Add traveling laser head corona burst
  color.rgb += vec3(0.75, 1.0, 0.22) * headFlare;

  // Ground floor impact burst when laser connects with the bottom
  float groundImpact = smoothstep(0.75, 1.0, u_scrollProgress) * floorMask * 0.35;
  color.rgb += vec3(0.70, 0.95, 0.20) * groundImpact;

  // ─── 6. VOLUMETRIC GREEN SMOKE GLOW IN BOUNTY LIME (#B2D234 / #D8FF38) ───
  vec3 groundSmokeColor = mix(vec3(0.68, 0.88, 0.20), vec3(0.85, 1.0, 0.24), groundFog2 * 0.5 + 0.5);
  float totalSmokeAlpha = (groundSmokeDensity * 0.50 + atmoFog * 0.32) * smokeOcclusion;

  color.rgb += groundSmokeColor * totalSmokeAlpha;

  gl_FragColor = color;
}
`;

interface CinematicPhoenixBeamCanvasProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: number;
}

export function CinematicPhoenixBeamCanvas({ className, style, progress }: CinematicPhoenixBeamCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const progressPropRef = useRef<number | undefined>(progress);

  useEffect(() => {
    progressPropRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      setHasWebGL(false);
      return;
    }

    // Helper: compile shader
    function createShader(glCtx: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn("Shader compile error:", glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
    if (!vertShader || !fragShader) {
      setHasWebGL(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setHasWebGL(false);
      return;
    }

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("Program link error:", gl.getProgramInfoLog(program));
      setHasWebGL(false);
      return;
    }

    gl.useProgram(program);

    // Quad geometry: full-screen quad (-1..1)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const quadPositions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, quadPositions, gl.STATIC_DRAW);

    const aPositionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTextureLoc = gl.getUniformLocation(program, "u_texture");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uScrollProgressLoc = gl.getUniformLocation(program, "u_scrollProgress");
    const uScrollVelocityLoc = gl.getUniformLocation(program, "u_scrollVelocity");

    // Load Phoenix texture
    const texture = gl.createTexture();
    const image = new Image();
    image.src = "/phoenix-beam-pillar.png";

    let textureReady = false;

    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

      // Set native texture resolution on canvas
      canvas.width = image.naturalWidth || 968;
      canvas.height = image.naturalHeight || 1625;
      gl.viewport(0, 0, canvas.width, canvas.height);

      textureReady = true;
    };

    let animId: number;
    const startTime = performance.now();

    // Scroll & Velocity tracking variables
    let prevScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let smoothVelocity = 0;
    let smoothProgress = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!textureReady) return;

      const elapsed = (performance.now() - startTime) / 1000.0;

      // Real-time scroll measurement
      const currentScrollY = window.scrollY;
      const rawVelocity = (currentScrollY - prevScrollY) / 16.0;
      prevScrollY = currentScrollY;

      // Smooth velocity with inertia decay
      smoothVelocity += (rawVelocity * 0.0022 - smoothVelocity) * 0.14;
      smoothVelocity = Math.max(-0.12, Math.min(0.12, smoothVelocity));

      // Calculate scroll progress through the parent section (#step-of-work)
      let rawProgress = 0;
      if (progressPropRef.current !== undefined) {
        rawProgress = Math.max(0, Math.min(1, progressPropRef.current));
      } else {
        const parentSection = (canvas.closest('#step-of-work') || canvas.parentElement?.closest('section') || canvas) as HTMLElement;
        const rect = parentSection.getBoundingClientRect();
        const winH = window.innerHeight;
        const sectionH = rect.height;
        const scrollDist = -rect.top;
        const maxScroll = Math.max(1, sectionH - winH);
        rawProgress = Math.max(0, Math.min(1, scrollDist / maxScroll));
      }
      smoothProgress += (rawProgress - smoothProgress) * 0.12;

      gl.useProgram(program);
      gl.uniform1f(uTimeLoc, elapsed);
      gl.uniform1f(uScrollProgressLoc, smoothProgress);
      gl.uniform1f(uScrollVelocityLoc, smoothVelocity);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(uTextureLoc, 0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      if (texture) gl.deleteTexture(texture);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  if (!hasWebGL) {
    // Graceful fallback to static high-res image if WebGL is unavailable
    return (
      <img
        src="/phoenix-beam-pillar.png"
        alt="Cinematic Green Phoenix in Vertical Light Beam"
        className={className}
        style={style}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        ...style,
        display: "block",
      }}
    />
  );
}
