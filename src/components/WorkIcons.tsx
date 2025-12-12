"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════
// ORIGINAL SVG ICONS (for Creative page)
// ═══════════════════════════════════════════════════════════════

export function Trade69Icon() {
  const size = 32;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="trade69Glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#trade69Glow)">
        <line x1="8" y1="24" x2="8" y2="18" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.5" />
        <line x1="12" y1="24" x2="12" y2="14" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.6" />
        <line x1="16" y1="24" x2="16" y2="16" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.7" />
        <line x1="20" y1="24" x2="20" y2="10" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.8" />
        <line x1="24" y1="24" x2="24" y2="6" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.9" />
        <path d="M6,20 L14,14 L18,16 L26,5" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        <circle cx="6" cy="20" r="1" fill="#FAFAF8" opacity="0.6" />
        <circle cx="14" cy="14" r="1" fill="#FAFAF8" opacity="0.7" />
        <circle cx="18" cy="16" r="1" fill="#FAFAF8" opacity="0.8" />
        <circle cx="26" cy="5" r="1.2" fill="#FAFAF8" opacity="0.9" />
      </g>
    </svg>
  );
}

export function MegaAgentIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;
  const hexPoints = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    const r = 6;
    return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
  }).join(' ');
  const outerNodes = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    const r = 12;
    return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="megaAgentGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#megaAgentGlow)">
        <polygon points={hexPoints} stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.8" />
        {outerNodes.map((node, i) => (
          <g key={i}>
            <line x1={cx} y1={cy} x2={node.x} y2={node.y} stroke="#FAFAF8" strokeWidth="0.3" opacity="0.4" />
            <circle cx={node.x} cy={node.y} r="2" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
            <circle cx={node.x} cy={node.y} r="0.8" fill="#FAFAF8" opacity="0.8" />
          </g>
        ))}
        <circle cx={cx} cy={cy} r="1.5" fill="#FAFAF8" opacity="0.9" />
      </g>
    </svg>
  );
}

export function OctopusIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;
  const tentacles = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
    const angle = (i * Math.PI * 2) / 8;
    return {
      startX: cx + Math.cos(angle) * 4,
      startY: cy + Math.sin(angle) * 4,
      midX: cx + Math.cos(angle + 0.2) * 9,
      midY: cy + Math.sin(angle + 0.2) * 9,
      endX: cx + Math.cos(angle - 0.1) * 14,
      endY: cy + Math.sin(angle - 0.1) * 14,
      opacity: 0.5 + (i % 2) * 0.2
    };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="octopusGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#octopusGlow)">
        <circle cx={cx} cy={cy} r="4" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.8" />
        <circle cx={cx} cy={cy} r="2" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.6" />
        <circle cx={cx} cy={cy} r="1" fill="#FAFAF8" opacity="0.9" />
        {tentacles.map((t, i) => (
          <g key={i}>
            <path d={`M${t.startX},${t.startY} Q${t.midX},${t.midY} ${t.endX},${t.endY}`} stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity={t.opacity} />
            <circle cx={t.endX} cy={t.endY} r="0.6" fill="#FAFAF8" opacity="0.7" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function OvermindIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;
  const chainLinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
    const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
    const r = 10;
    return {
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      rotation: (i * 30) + 45,
      opacity: 0.5 + (i % 3) * 0.15
    };
  });
  const trianglePoints = `${cx},${cy - 5} ${cx - 4.3},${cy + 2.5} ${cx + 4.3},${cy + 2.5}`;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="overmindGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#overmindGlow)">
        <circle cx={cx} cy={cy} r="12" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.4" />
        {chainLinks.map((link, i) => (
          <rect key={i} x={link.x - 1.5} y={link.y - 1.5} width="3" height="3" transform={`rotate(${link.rotation}, ${link.x}, ${link.y})`} stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity={link.opacity} />
        ))}
        <polygon points={trianglePoints} stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        <circle cx={cx} cy={cy} r="1.2" fill="#FAFAF8" opacity="0.9" />
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 3D ANIMATED ICONS - STATE OF THE ART - TRULY SPECTACULAR
// ═══════════════════════════════════════════════════════════════════════════

interface WorkIcon3DProps {
  type: 'trade69' | 'megaagent' | 'octopus' | 'overmind';
  size?: number;
}

function WorkIcon3D({ type, size = 90 }: WorkIcon3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hoverRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    // Desktop: much closer for bigger icons, Mobile: medium distance
    camera.position.z = isMobile ? 1.8 : 1.4;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    const materials: THREE.ShaderMaterial[] = [];

    // ═══════════════════════════════════════════════════════════════════════
    // TRADE69 - Holographic Trading Terminal with 3D Candlesticks
    // ═══════════════════════════════════════════════════════════════════════
    if (type === 'trade69') {

      // 3D Candlestick bars with gradient glow
      const candleData = [
        { x: -0.32, h: 0.22, g: true },
        { x: -0.16, h: 0.38, g: false },
        { x: 0, h: 0.28, g: true },
        { x: 0.16, h: 0.52, g: true },
        { x: 0.32, h: 0.68, g: true }
      ];

      const candleMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uHeight: { value: 0 }, uGreen: { value: 1 } },
        vertexShader: `
          uniform float uTime, uHover, uHeight;
          varying vec3 vPos;
          varying float vH;
          void main() {
            vPos = position;
            vH = uHeight;
            float wave = sin(uTime * 0.5 + position.y * 3.0) * 0.008;
            vec3 p = position;
            p.x += wave;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p * (1.0 + uHover * 0.08), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover, uGreen;
          varying vec3 vPos;
          varying float vH;
          void main() {
            float yNorm = (vPos.y + 0.35) / vH;
            vec3 greenCol = vec3(0.2, 0.95, 0.6);
            vec3 redCol = vec3(0.95, 0.3, 0.35);
            vec3 baseCol = mix(redCol, greenCol, uGreen);
            vec3 col = baseCol * (0.6 + yNorm * 0.5);
            float edge = 1.0 - abs(dot(normalize(vec3(vPos.x, 0.0, 1.0)), vec3(0,0,1)));
            float alpha = (0.5 + edge * 0.4 + yNorm * 0.2) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });

      candleData.forEach((c, i) => {
        const mat = candleMat.clone();
        mat.uniforms.uHeight = { value: c.h };
        mat.uniforms.uGreen = { value: c.g ? 1.0 : 0.0 };
        materials.push(mat);

        const geo = new THREE.BoxGeometry(0.06, c.h, 0.04, 1, 8, 1);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(c.x, -0.35 + c.h / 2, 0);
        mainGroup.add(mesh);

        // Wick
        const wickGeo = new THREE.CylinderGeometry(0.004, 0.004, c.h * 0.3, 4);
        const wickMat = new THREE.MeshBasicMaterial({ color: 0xfafaf8, transparent: true, opacity: 0.3 });
        const wick = new THREE.Mesh(wickGeo, wickMat);
        wick.position.set(c.x, -0.35 + c.h + c.h * 0.15, 0);
        mainGroup.add(wick);
      });

      // Trend line with energy flow
      const trendMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          attribute float aProgress;
          varying float vProg;
          uniform float uHover;
          void main() {
            vProg = aProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.06), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vProg;
          void main() {
            float energy = sin(vProg * 15.0 - uTime * 1.2) * 0.5 + 0.5;
            vec3 col = mix(vec3(0.3, 0.8, 0.5), vec3(0.9, 0.95, 1.0), energy);
            float alpha = (0.4 + energy * 0.5) * (1.0 + uHover * 0.3);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(trendMat);

      const trendPts = [
        new THREE.Vector3(-0.4, -0.2, 0.05),
        new THREE.Vector3(-0.2, 0.05, 0.05),
        new THREE.Vector3(0, -0.08, 0.05),
        new THREE.Vector3(0.2, 0.2, 0.05),
        new THREE.Vector3(0.4, 0.35, 0.05)
      ];
      const trendCurve = new THREE.CatmullRomCurve3(trendPts);
      const trendGeo = new THREE.BufferGeometry().setFromPoints(trendCurve.getPoints(50));
      const trendProg = new Float32Array(51);
      for (let i = 0; i <= 50; i++) trendProg[i] = i / 50;
      trendGeo.setAttribute('aProgress', new THREE.BufferAttribute(trendProg, 1));
      mainGroup.add(new THREE.Line(trendGeo, trendMat));

      // Data particles flowing upward
      const particleMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase, aSpeed;
          varying float vAlpha;
          void main() {
            vec3 pos = position;
            pos.y = mod(pos.y + uTime * aSpeed * 0.15, 1.0) - 0.5;
            vAlpha = 0.4 + sin(uTime * 2.0 + aPhase) * 0.3;
            vec4 mv = modelViewMatrix * vec4(pos * (1.0 + uHover * 0.1), 1.0);
            gl_PointSize = (3.0 + uHover * 1.5) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float glow = smoothstep(0.5, 0.0, d);
            gl_FragColor = vec4(0.3, 0.9, 0.6, glow * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(particleMat);

      const pCount = 30;
      const pPos = new Float32Array(pCount * 3);
      const pPhase = new Float32Array(pCount);
      const pSpeed = new Float32Array(pCount);
      for (let i = 0; i < pCount; i++) {
        pPos[i * 3] = (Math.random() - 0.5) * 0.9;
        pPos[i * 3 + 1] = Math.random() - 0.5;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
        pPhase[i] = Math.random() * Math.PI * 2;
        pSpeed[i] = 0.5 + Math.random() * 1.5;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      pGeo.setAttribute('aPhase', new THREE.BufferAttribute(pPhase, 1));
      pGeo.setAttribute('aSpeed', new THREE.BufferAttribute(pSpeed, 1));
      mainGroup.add(new THREE.Points(pGeo, particleMat));

      // Holographic grid floor
      const gridMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            gl_FragColor = vec4(0.5, 0.7, 0.9, 0.15 * (1.0 + uHover * 0.3));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(gridMat);

      for (let i = 0; i < 5; i++) {
        const lineGeo = new THREE.PlaneGeometry(0.9, 0.002);
        const line = new THREE.Mesh(lineGeo, gridMat);
        line.position.set(0, -0.35 + i * 0.2, -0.02);
        mainGroup.add(line);
      }
    }

    // ═══════════════════════════════════════════════════════════════════════
    // MEGAAGENT - Quantum Neural Network with Holographic Core
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'megaagent') {

      // Central quantum processing sphere with holographic rings
      const coreMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            vNormal = normal;
            vPos = position;
            float pulse = 1.0 + sin(uTime * 0.8) * 0.05;
            vec3 p = position * pulse;
            // Subtle vertex displacement
            p += normal * sin(uTime * 1.5 + position.y * 8.0) * 0.008;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p * (1.0 + uHover * 0.1), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.5);
            // Holographic scan lines
            float scan = sin(vPos.y * 40.0 - uTime * 2.0) * 0.5 + 0.5;
            // Energy grid pattern
            float gridX = smoothstep(0.9, 1.0, abs(sin(vPos.x * 25.0)));
            float gridY = smoothstep(0.9, 1.0, abs(sin(vPos.y * 25.0)));
            float grid = max(gridX, gridY);
            
            vec3 col1 = vec3(0.3, 0.7, 1.0);
            vec3 col2 = vec3(0.8, 0.4, 1.0);
            vec3 col = mix(col1, col2, fresnel + sin(uTime * 0.5) * 0.2);
            
            float alpha = (0.15 + fresnel * 0.5 + scan * 0.15 + grid * 0.3) * (1.0 + uHover * 0.5);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(coreMat);

      // Main quantum core sphere
      const coreGeo = new THREE.IcosahedronGeometry(0.12, 2);
      mainGroup.add(new THREE.Mesh(coreGeo, coreMat));

      // Inner energy core (solid glow)
      const innerCoreMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime;
          void main() {
            float pulse = 1.0 + sin(uTime * 1.5) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float glow = 0.8 + sin(uTime * 2.0) * 0.2;
            gl_FragColor = vec4(0.5, 0.8, 1.0, glow * (1.0 + uHover * 0.3));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(innerCoreMat);
      mainGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), innerCoreMat));

      // Holographic orbital rings
      const ringMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aAngle;
          varying float vAngle;
          void main() {
            vAngle = aAngle;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.08), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vAngle;
          void main() {
            float energy = sin(vAngle * 6.0 - uTime * 1.5) * 0.5 + 0.5;
            vec3 col = mix(vec3(0.3, 0.6, 1.0), vec3(0.9, 0.5, 1.0), energy);
            float alpha = (0.25 + energy * 0.5) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(ringMat);

      // Create 3 orbital rings at different angles
      const ringConfigs = [
        { radius: 0.22, rotX: 0, rotY: 0, rotZ: 0 },
        { radius: 0.2, rotX: Math.PI / 3, rotY: 0, rotZ: Math.PI / 6 },
        { radius: 0.18, rotX: -Math.PI / 4, rotY: Math.PI / 4, rotZ: 0 }
      ];

      ringConfigs.forEach(cfg => {
        const ringGeo = new THREE.BufferGeometry();
        const ringPts: number[] = [];
        const ringAngles: number[] = [];
        const segments = 64;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          ringPts.push(Math.cos(angle) * cfg.radius, Math.sin(angle) * cfg.radius, 0);
          ringAngles.push(angle);
        }
        ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(ringPts, 3));
        ringGeo.setAttribute('aAngle', new THREE.Float32BufferAttribute(ringAngles, 1));
        const ring = new THREE.Line(ringGeo, ringMat.clone());
        materials.push(ring.material as THREE.ShaderMaterial);
        ring.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
        mainGroup.add(ring);
      });

      // Agent nodes - 6 orbiting icosahedrons
      const agentMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uPhase: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover, uPhase;
          varying vec3 vNormal;
          void main() {
            vNormal = normal;
            float pulse = 1.0 + sin(uTime * 1.2 + uPhase) * 0.08;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.15), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover, uPhase;
          varying vec3 vNormal;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.0);
            vec3 col = mix(vec3(0.4, 0.8, 1.0), vec3(1.0, 0.6, 0.9), sin(uTime * 0.5 + uPhase) * 0.5 + 0.5);
            float alpha = (0.35 + fresnel * 0.45) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });

      const agentPositions = [
        { x: 0.38, y: 0, z: 0 },
        { x: -0.38, y: 0, z: 0 },
        { x: 0, y: 0.38, z: 0 },
        { x: 0, y: -0.38, z: 0 },
        { x: 0.27, y: 0.27, z: 0.15 },
        { x: -0.27, y: -0.27, z: -0.15 }
      ];

      const agentGroup = new THREE.Group();
      agentPositions.forEach((pos, i) => {
        const mat = agentMat.clone();
        mat.uniforms.uPhase = { value: i * Math.PI / 3 };
        materials.push(mat);

        const geo = new THREE.IcosahedronGeometry(0.045, 1);
        const agent = new THREE.Mesh(geo, mat);
        agent.position.set(pos.x, pos.y, pos.z);
        agent.rotation.set(i * 0.5, i * 0.3, i * 0.2);
        agentGroup.add(agent);

        // Agent core glow
        const glowMat = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
          vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
          fragmentShader: `
            uniform float uTime, uHover;
            void main() {
              float glow = 0.7 + sin(uTime * 2.0) * 0.2;
              gl_FragColor = vec4(0.6, 0.85, 1.0, glow * (1.0 + uHover * 0.3));
            }
          `,
          transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
        });
        materials.push(glowMat);
        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), glowMat);
        glow.position.set(pos.x, pos.y, pos.z);
        agentGroup.add(glow);
      });
      mainGroup.add(agentGroup);

      // Neural connections with data flow
      const connMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          attribute float aProgress;
          varying float vProg;
          uniform float uHover;
          void main() {
            vProg = aProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.05), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vProg;
          void main() {
            // Multiple data packets traveling
            float p1 = smoothstep(0.08, 0.0, abs(fract(vProg - uTime * 0.25) - 0.1));
            float p2 = smoothstep(0.08, 0.0, abs(fract(vProg - uTime * 0.25 + 0.33) - 0.1));
            float p3 = smoothstep(0.08, 0.0, abs(fract(vProg - uTime * 0.25 + 0.66) - 0.1));
            float packets = max(max(p1, p2), p3);
            
            vec3 col = mix(vec3(0.3, 0.5, 0.8), vec3(0.9, 0.6, 1.0), packets);
            float alpha = (0.08 + packets * 0.7) * (1.0 + uHover * 0.5);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(connMat);

      // Connect each agent to center
      agentPositions.forEach(pos => {
        const pts: THREE.Vector3[] = [];
        for (let t = 0; t <= 20; t++) {
          const p = t / 20;
          pts.push(new THREE.Vector3(pos.x * p, pos.y * p, pos.z * p));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const prog = new Float32Array(21);
        for (let i = 0; i <= 20; i++) prog[i] = i / 20;
        geo.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
        mainGroup.add(new THREE.Line(geo, connMat));
      });

      // Connect agents to each other (forming network)
      const agentConnections = [[0,2], [0,4], [1,3], [1,5], [2,4], [3,5], [4,5]];
      agentConnections.forEach(([a, b]) => {
        const pts: THREE.Vector3[] = [];
        const pa = agentPositions[a], pb = agentPositions[b];
        for (let t = 0; t <= 16; t++) {
          const p = t / 16;
          pts.push(new THREE.Vector3(
            pa.x + (pb.x - pa.x) * p,
            pa.y + (pb.y - pa.y) * p,
            pa.z + (pb.z - pa.z) * p
          ));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const prog = new Float32Array(17);
        for (let i = 0; i <= 16; i++) prog[i] = i / 16;
        geo.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
        mainGroup.add(new THREE.Line(geo, connMat));
      });

      // Floating quantum particles
      const quantumMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase, aOrbit;
          varying float vAlpha;
          void main() {
            float angle = uTime * 0.15 + aPhase;
            vec3 pos = position;
            pos.x += cos(angle + aOrbit) * 0.05;
            pos.y += sin(angle * 1.3 + aOrbit) * 0.05;
            pos.z += sin(angle * 0.7) * 0.03;
            vAlpha = 0.4 + sin(uTime * 1.5 + aPhase * 5.0) * 0.3;
            vec4 mv = modelViewMatrix * vec4(pos * (1.0 + uHover * 0.1), 1.0);
            gl_PointSize = (2.5 + uHover * 1.5 + sin(uTime + aPhase) * 0.5) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float core = smoothstep(0.5, 0.0, d);
            gl_FragColor = vec4(0.5, 0.8, 1.0, core * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(quantumMat);

      const qCount = 40;
      const qPos = new Float32Array(qCount * 3);
      const qPhase = new Float32Array(qCount);
      const qOrbit = new Float32Array(qCount);
      for (let i = 0; i < qCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 0.25 + Math.random() * 0.3;
        qPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        qPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        qPos[i * 3 + 2] = r * Math.cos(phi);
        qPhase[i] = Math.random() * Math.PI * 2;
        qOrbit[i] = Math.random() * Math.PI * 2;
      }
      const qGeo = new THREE.BufferGeometry();
      qGeo.setAttribute('position', new THREE.BufferAttribute(qPos, 3));
      qGeo.setAttribute('aPhase', new THREE.BufferAttribute(qPhase, 1));
      qGeo.setAttribute('aOrbit', new THREE.BufferAttribute(qOrbit, 1));
      mainGroup.add(new THREE.Points(qGeo, quantumMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // OCTOPUS - Bioluminescent Cognitive Entity
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'octopus') {

      // Organic head/mantle with neural pattern
      const headMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            vNormal = normal;
            vPos = position;
            float breathe = 1.0 + sin(uTime * 0.5) * 0.03;
            vec3 p = position * breathe;
            // Subtle organic movement
            p += normal * sin(uTime * 0.8 + position.y * 5.0) * 0.006;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p * (1.0 + uHover * 0.08), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.2);
            // Bioluminescent patterns
            float pattern1 = sin(vPos.x * 15.0 + vPos.y * 10.0 - uTime * 0.8) * 0.5 + 0.5;
            float pattern2 = sin(vPos.y * 20.0 + uTime * 0.5) * 0.5 + 0.5;
            
            vec3 col1 = vec3(0.1, 0.6, 0.8);
            vec3 col2 = vec3(0.6, 0.2, 0.9);
            vec3 col = mix(col1, col2, pattern1 * 0.5 + fresnel * 0.3);
            col += vec3(0.3, 0.8, 0.6) * pattern2 * 0.2;
            
            float alpha = (0.35 + fresnel * 0.45 + pattern1 * 0.15) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(headMat);

      // Create organic mantle shape
      const mantleGeo = new THREE.SphereGeometry(0.15, 24, 18);
      const mantlePositions = mantleGeo.attributes.position;
      for (let i = 0; i < mantlePositions.count; i++) {
        const y = mantlePositions.getY(i);
        const x = mantlePositions.getX(i);
        const z = mantlePositions.getZ(i);
        // Elongate and shape like mantle
        mantlePositions.setY(i, y * 1.3);
        // Slight bottom tapering
        if (y < 0) {
          const factor = 1.0 - Math.abs(y) * 0.5;
          mantlePositions.setX(i, x * factor);
          mantlePositions.setZ(i, z * factor);
        }
      }
      mantleGeo.computeVertexNormals();
      const mantle = new THREE.Mesh(mantleGeo, headMat);
      mantle.position.y = 0.12;
      mainGroup.add(mantle);

      // Glowing eyes
      const eyeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 0.85 + sin(uTime * 1.5) * 0.15;
            gl_FragColor = vec4(0.9, 0.95, 1.0, pulse * (1.0 + uHover * 0.3));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(eyeMat);

      const eyeGeo = new THREE.SphereGeometry(0.022, 12, 12);
      const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
      leftEye.position.set(-0.06, 0.14, 0.12);
      mainGroup.add(leftEye);
      const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
      rightEye.position.set(0.06, 0.14, 0.12);
      mainGroup.add(rightEye);

      // 8 Tentacles with organic curves and suckers
      const tentacleMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          attribute float aProgress;
          varying float vProg;
          uniform float uTime, uHover;
          void main() {
            vProg = aProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.06), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vProg;
          void main() {
            float energy = sin(vProg * 8.0 - uTime * 1.0) * 0.5 + 0.5;
            float tip = smoothstep(0.7, 1.0, vProg);
            vec3 col = mix(vec3(0.2, 0.5, 0.8), vec3(0.5, 0.9, 0.7), energy);
            float alpha = (0.35 + energy * 0.3 - tip * 0.2) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(tentacleMat);

      for (let t = 0; t < 8; t++) {
        const baseAngle = (t / 8) * Math.PI * 2;
        const length = 0.38 + (t % 2) * 0.08;

        // Create curved tentacle path
        const pts: THREE.Vector3[] = [];
        for (let i = 0; i <= 24; i++) {
          const p = i / 24;
          const angle = baseAngle + Math.sin(p * 3) * 0.3;
          const r = 0.08 + p * length * 0.9;
          const y = -p * length * 0.6;
          const wave = Math.sin(p * 4 + t) * 0.04 * p;
          pts.push(new THREE.Vector3(
            Math.cos(angle) * r + wave,
            y,
            Math.sin(angle) * r + wave
          ));
        }

        const curve = new THREE.CatmullRomCurve3(pts);
        const curveGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(32));
        const prog = new Float32Array(33);
        for (let i = 0; i <= 32; i++) prog[i] = i / 32;
        curveGeo.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
        mainGroup.add(new THREE.Line(curveGeo, tentacleMat));

        // Suckers along tentacle
        const suckerMat = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
          vertexShader: `
            uniform float uTime, uHover;
            attribute float aPhase;
            varying float vAlpha;
            void main() {
              vAlpha = 0.5 + sin(uTime * 1.5 + aPhase * 4.0) * 0.25;
              vec4 mv = modelViewMatrix * vec4(position * (1.0 + uHover * 0.08), 1.0);
              gl_PointSize = (2.0 + uHover * 1.0) / -mv.z;
              gl_Position = projectionMatrix * mv;
            }
          `,
          fragmentShader: `
            varying float vAlpha;
            void main() {
              float d = length(gl_PointCoord - 0.5);
              if (d > 0.5) discard;
              float ring = smoothstep(0.3, 0.4, d) * (1.0 - smoothstep(0.4, 0.5, d));
              float core = smoothstep(0.5, 0.0, d) * 0.5;
              gl_FragColor = vec4(0.4, 0.9, 0.7, (ring + core) * vAlpha);
            }
          `,
          transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
        });
        materials.push(suckerMat);

        const suckerCount = 5;
        const suckerPos = new Float32Array(suckerCount * 3);
        const suckerPhase = new Float32Array(suckerCount);
        for (let s = 0; s < suckerCount; s++) {
          const sp = (s + 1) / (suckerCount + 1);
          const pt = curve.getPoint(sp);
          suckerPos[s * 3] = pt.x;
          suckerPos[s * 3 + 1] = pt.y;
          suckerPos[s * 3 + 2] = pt.z;
          suckerPhase[s] = t + s * 0.5;
        }
        const suckerGeo = new THREE.BufferGeometry();
        suckerGeo.setAttribute('position', new THREE.BufferAttribute(suckerPos, 3));
        suckerGeo.setAttribute('aPhase', new THREE.BufferAttribute(suckerPhase, 1));
        mainGroup.add(new THREE.Points(suckerGeo, suckerMat));
      }

      // Bioluminescent particles
      const bioMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase;
          varying float vAlpha;
          void main() {
            vec3 pos = position;
            pos += vec3(sin(uTime * 0.3 + aPhase), cos(uTime * 0.25 + aPhase * 1.3), sin(uTime * 0.2 + aPhase * 0.7)) * 0.02;
            vAlpha = 0.35 + sin(uTime * 2.0 + aPhase * 3.0) * 0.25;
            vec4 mv = modelViewMatrix * vec4(pos * (1.0 + uHover * 0.1), 1.0);
            gl_PointSize = (2.0 + uHover * 1.2) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            gl_FragColor = vec4(0.3, 0.9, 0.7, smoothstep(0.5, 0.0, d) * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(bioMat);

      const bioCount = 25;
      const bioPos = new Float32Array(bioCount * 3);
      const bioPhase = new Float32Array(bioCount);
      for (let i = 0; i < bioCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = 0.2 + Math.random() * 0.35;
        bioPos[i * 3] = Math.cos(angle) * r;
        bioPos[i * 3 + 1] = (Math.random() - 0.3) * 0.5;
        bioPos[i * 3 + 2] = Math.sin(angle) * r;
        bioPhase[i] = Math.random() * Math.PI * 2;
      }
      const bioGeo = new THREE.BufferGeometry();
      bioGeo.setAttribute('position', new THREE.BufferAttribute(bioPos, 3));
      bioGeo.setAttribute('aPhase', new THREE.BufferAttribute(bioPhase, 1));
      mainGroup.add(new THREE.Points(bioGeo, bioMat));

      mainGroup.position.y = 0.05;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // OVERMIND - Sacred Geometry Cosmic Consciousness
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'overmind') {

      // Metatron's Cube - Sacred Geometry Core
      const sacredMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vPos;
          void main() {
            vPos = position;
            float pulse = 1.0 + sin(uTime * 0.6) * 0.03;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.1), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vPos;
          void main() {
            float dist = length(vPos);
            float energy = sin(dist * 20.0 - uTime * 1.5) * 0.5 + 0.5;
            vec3 col = mix(vec3(0.6, 0.4, 1.0), vec3(1.0, 0.8, 0.4), energy);
            float alpha = (0.35 + energy * 0.35) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(sacredMat);

      // Create interlocking tetrahedrons (Merkaba/Star Tetrahedron)
      const tetraUp = new THREE.TetrahedronGeometry(0.18, 0);
      const tetraDown = new THREE.TetrahedronGeometry(0.18, 0);

      const merkaba1 = new THREE.Mesh(tetraUp, sacredMat);
      merkaba1.rotation.x = Math.PI;
      mainGroup.add(merkaba1);

      const merkaba2Mat = sacredMat.clone();
      materials.push(merkaba2Mat);
      const merkaba2 = new THREE.Mesh(tetraDown, merkaba2Mat);
      mainGroup.add(merkaba2);

      // Outer dodecahedron wireframe
      const dodecaMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal;
          void main() {
            vNormal = normal;
            float breathe = 1.0 + sin(uTime * 0.4) * 0.02;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * breathe * (1.0 + uHover * 0.08), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.0);
            vec3 col = vec3(0.7, 0.5, 1.0) + vec3(0.3, 0.3, 0.0) * fresnel;
            float alpha = (0.2 + fresnel * 0.3) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(dodecaMat);

      const dodeca = new THREE.Mesh(new THREE.DodecahedronGeometry(0.32, 0), dodecaMat);
      mainGroup.add(dodeca);

      // Multiple orbital rings with energy flow
      const ringMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uSpeed: { value: 1 } },
        vertexShader: `
          attribute float aAngle;
          varying float vAngle;
          uniform float uHover;
          void main() {
            vAngle = aAngle;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.06), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover, uSpeed;
          varying float vAngle;
          void main() {
            float energy = sin(vAngle * 8.0 - uTime * uSpeed) * 0.5 + 0.5;
            vec3 col = mix(vec3(0.5, 0.3, 0.9), vec3(1.0, 0.7, 0.3), energy);
            float alpha = (0.2 + energy * 0.5) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });

      const ringConfigs = [
        { r: 0.42, rx: Math.PI / 2, ry: 0, speed: 1.2 },
        { r: 0.38, rx: Math.PI / 2.5, ry: Math.PI / 4, speed: -0.8 },
        { r: 0.35, rx: Math.PI / 3, ry: -Math.PI / 3, speed: 1.5 }
      ];

      ringConfigs.forEach(cfg => {
        const mat = ringMat.clone();
        mat.uniforms.uSpeed = { value: cfg.speed };
        materials.push(mat);

        const pts: number[] = [];
        const angles: number[] = [];
        for (let i = 0; i <= 64; i++) {
          const a = (i / 64) * Math.PI * 2;
          pts.push(Math.cos(a) * cfg.r, Math.sin(a) * cfg.r, 0);
          angles.push(a);
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
        geo.setAttribute('aAngle', new THREE.Float32BufferAttribute(angles, 1));
        const ring = new THREE.Line(geo, mat);
        ring.rotation.x = cfg.rx;
        ring.rotation.y = cfg.ry;
        mainGroup.add(ring);
      });

      // Central all-seeing eye / consciousness core
      const eyeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime;
          void main() {
            float pulse = 1.0 + sin(uTime * 1.0) * 0.15;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float glow = 0.9 + sin(uTime * 1.5) * 0.1;
            gl_FragColor = vec4(1.0, 0.95, 0.8, glow * (1.0 + uHover * 0.2));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(eyeMat);
      mainGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), eyeMat));

      // Constellation field particles
      const starMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase, aTwinkle;
          varying float vAlpha;
          void main() {
            vec3 pos = position;
            // Gentle orbital drift
            float angle = uTime * 0.05 + aPhase;
            pos.x += cos(angle) * 0.015;
            pos.z += sin(angle) * 0.015;
            
            vAlpha = 0.3 + sin(uTime * aTwinkle + aPhase * 5.0) * 0.25;
            vec4 mv = modelViewMatrix * vec4(pos * (1.0 + uHover * 0.08), 1.0);
            gl_PointSize = (2.0 + sin(uTime * aTwinkle) * 0.8 + uHover * 1.0) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float core = smoothstep(0.5, 0.0, d);
            gl_FragColor = vec4(1.0, 0.95, 0.85, core * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(starMat);

      const starCount = 50;
      const starPos = new Float32Array(starCount * 3);
      const starPhase = new Float32Array(starCount);
      const starTwinkle = new Float32Array(starCount);
      for (let i = 0; i < starCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 0.35 + Math.random() * 0.25;
        starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        starPos[i * 3 + 2] = r * Math.cos(phi);
        starPhase[i] = Math.random() * Math.PI * 2;
        starTwinkle[i] = 1.5 + Math.random() * 2.5;
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      starGeo.setAttribute('aPhase', new THREE.BufferAttribute(starPhase, 1));
      starGeo.setAttribute('aTwinkle', new THREE.BufferAttribute(starTwinkle, 1));
      mainGroup.add(new THREE.Points(starGeo, starMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ANIMATION - Desktop: Full | Mobile: Slow Rotation
    // ═══════════════════════════════════════════════════════════════════════
    let time = 0;
    let frameCount = 0;

    const animate = () => {
      // Both mobile and desktop animate, but at different speeds
      time += isMobile ? 0.002 : 0.004;
      frameCount++;
      if (frameCount === 5) setIsLoaded(true);

      // Hover only on desktop
      if (!isMobile) {
        hoverRef.current += (isHovered ? 1 : 0 - hoverRef.current) * 0.04;
      }

      materials.forEach(mat => {
        if (mat.uniforms.uTime) mat.uniforms.uTime.value = time;
        if (mat.uniforms.uHover) mat.uniforms.uHover.value = hoverRef.current;
      });

      // Rotation - both mobile and desktop, but gentler on mobile
      const rotSpeed = isMobile ? 0.5 : 1.0;

      if (type === 'trade69') {
        mainGroup.rotation.y = Math.sin(time * 0.08 * rotSpeed) * 0.08 + hoverRef.current * 0.15;
        mainGroup.rotation.x = Math.cos(time * 0.06 * rotSpeed) * 0.04;
      } else if (type === 'megaagent') {
        mainGroup.rotation.y = time * 0.03 * rotSpeed + hoverRef.current * 0.15;
        mainGroup.rotation.x = Math.sin(time * 0.05 * rotSpeed) * 0.05;
        mainGroup.rotation.z = Math.cos(time * 0.04 * rotSpeed) * 0.03;
      } else if (type === 'octopus') {
        mainGroup.rotation.y = Math.sin(time * 0.06 * rotSpeed) * 0.1 + hoverRef.current * 0.12;
        mainGroup.rotation.x = Math.cos(time * 0.05 * rotSpeed) * 0.04;
        mainGroup.rotation.z = Math.sin(time * 0.07 * rotSpeed) * 0.03;
      } else if (type === 'overmind') {
        mainGroup.rotation.y = time * 0.025 * rotSpeed + hoverRef.current * 0.12;
        mainGroup.rotation.x = Math.sin(time * 0.04 * rotSpeed) * 0.04;
        mainGroup.rotation.z = Math.cos(time * 0.03 * rotSpeed) * 0.03;
      }

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      materials.forEach(m => m.dispose());
    };
  }, [type, size, isHovered, isMobile]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{ width: size, height: size, cursor: 'pointer', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease-out' }}
    />
  );
}

export function Trade69Icon3D({ size = 90 }: { size?: number }) {
  return <WorkIcon3D type="trade69" size={size} />;
}

export function MegaAgentIcon3D({ size = 90 }: { size?: number }) {
  return <WorkIcon3D type="megaagent" size={size} />;
}

export function OctopusIcon3D({ size = 90 }: { size?: number }) {
  return <WorkIcon3D type="octopus" size={size} />;
}

export function OvermindIcon3D({ size = 90 }: { size?: number }) {
  return <WorkIcon3D type="overmind" size={size} />;
}