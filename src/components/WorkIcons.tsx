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
// 3D ANIMATED ICONS - STATE OF THE ART - ELEGANT & SLOW
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
  const isTouching = useRef(false);

  // Detect mobile on mount
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
    camera.position.z = isMobile ? 1.6 : 2.0; // Closer on mobile = bigger icons

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
    // TRADE69 - Holographic Trading Terminal with Live Data Streams
    // ═══════════════════════════════════════════════════════════════════════
    if (type === 'trade69') {

      // Ascending data bars with gradient glow
      const barData = [
        { h: 0.18, x: -0.32 },
        { h: 0.32, x: -0.16 },
        { h: 0.24, x: 0 },
        { h: 0.44, x: 0.16 },
        { h: 0.62, x: 0.32 }
      ];

      barData.forEach((bar, i) => {
        const barMat = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uPhase: { value: i * 0.7 } },
          vertexShader: `
            uniform float uTime, uHover, uPhase;
            varying float vHeight;
            varying vec3 vPos;
            void main() {
              vHeight = uv.y;
              vPos = position;
              vec3 pos = position;
              float wave = sin(uTime * 0.3 + uPhase) * 0.015;
              pos.y += wave;
              pos *= 1.0 + uHover * 0.06;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            uniform float uTime, uHover, uPhase;
            varying float vHeight;
            void main() {
              float glow = pow(vHeight, 1.8);
              float pulse = sin(uTime * 0.5 + uPhase) * 0.1 + 0.9;
              vec3 col = mix(vec3(0.5, 0.6, 0.75), vec3(0.92, 0.95, 1.0), vHeight);
              col += vec3(0.08, 0.1, 0.15) * glow * uHover;
              float alpha = (0.3 + glow * 0.5) * pulse * (1.0 + uHover * 0.25);
              gl_FragColor = vec4(col, alpha);
            }
          `,
          transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
        });
        materials.push(barMat);

        const barGeo = new THREE.BoxGeometry(0.06, bar.h, 0.03, 1, 4, 1);
        const mesh = new THREE.Mesh(barGeo, barMat);
        mesh.position.set(bar.x, bar.h / 2 - 0.28, 0);
        mainGroup.add(mesh);
      });

      // Trend line with flowing energy
      const trendMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aProgress;
          varying float vProgress;
          void main() {
            vProgress = aProgress;
            vec3 pos = position * (1.0 + uHover * 0.06);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vProgress;
          void main() {
            float energy = sin(vProgress * 10.0 - uTime * 0.8) * 0.5 + 0.5;
            float glow = pow(energy, 2.5);
            vec3 col = vec3(0.75, 0.82, 0.95) + vec3(0.2, 0.12, 0.05) * glow;
            float alpha = (0.35 + glow * 0.5) * (1.0 + uHover * 0.35);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(trendMat);

      const trendCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.38, -0.12, 0.05),
        new THREE.Vector3(-0.15, 0.06, 0.05),
        new THREE.Vector3(0, -0.02, 0.05),
        new THREE.Vector3(0.15, 0.16, 0.05),
        new THREE.Vector3(0.36, 0.36, 0.05)
      ]);
      const trendPts = trendCurve.getPoints(50);
      const trendGeo = new THREE.BufferGeometry().setFromPoints(trendPts);
      const progAttr = new Float32Array(51);
      for (let i = 0; i <= 50; i++) progAttr[i] = i / 50;
      trendGeo.setAttribute('aProgress', new THREE.BufferAttribute(progAttr, 1));
      mainGroup.add(new THREE.Line(trendGeo, trendMat));

      // Data points with pulsing glow
      const pointMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase;
          varying float vPulse;
          void main() {
            vPulse = sin(uTime * 0.8 + aPhase) * 0.5 + 0.5;
            vec3 pos = position * (1.0 + uHover * 0.08);
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = (3.5 + vPulse * 2.5 + uHover * 1.5) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vPulse;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float core = smoothstep(0.5, 0.0, d);
            vec3 col = mix(vec3(0.85, 0.88, 1.0), vec3(1.0, 0.97, 0.92), vPulse);
            gl_FragColor = vec4(col, core * (0.6 + vPulse * 0.4));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(pointMat);

      const ptGeo = new THREE.BufferGeometry();
      const pts = [[-0.38, -0.12, 0.07], [-0.15, 0.06, 0.07], [0, -0.02, 0.07], [0.15, 0.16, 0.07], [0.36, 0.36, 0.07]];
      ptGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts.flat(), 3));
      ptGeo.setAttribute('aPhase', new THREE.Float32BufferAttribute([0, 1.2, 2.4, 3.6, 4.8], 1));
      mainGroup.add(new THREE.Points(ptGeo, pointMat));

      // Subtle frame
      const frameMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uHover;
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.05), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 0.85 + sin(uTime * 0.4) * 0.1;
            gl_FragColor = vec4(0.7, 0.75, 0.85, 0.15 * pulse * (1.0 + uHover * 0.3));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(frameMat);

      const frameGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.82, 0.72, 0.01));
      mainGroup.add(new THREE.LineSegments(frameGeo, frameMat));

      // Grid floor lines
      for (let i = 0; i < 4; i++) {
        const lineGeo = new THREE.PlaneGeometry(0.75, 0.002);
        mainGroup.add(new THREE.Mesh(lineGeo, frameMat));
        const line = mainGroup.children[mainGroup.children.length - 1] as THREE.Mesh;
        line.position.y = -0.3 + i * 0.15;
        line.position.z = -0.01;
      }
    }

    // ═══════════════════════════════════════════════════════════════════════
    // MEGAAGENT - Multi-Agent Neural Network with Data Flow
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'megaagent') {

      const nodes = [
        { x: 0, y: 0, z: 0, s: 0.08 },
        { x: 0.35, y: 0.2, z: 0.06, s: 0.05 },
        { x: -0.32, y: 0.25, z: -0.05, s: 0.048 },
        { x: 0.25, y: -0.32, z: 0.08, s: 0.052 },
        { x: -0.28, y: -0.26, z: -0.06, s: 0.048 },
        { x: 0.06, y: 0.4, z: -0.04, s: 0.044 },
        { x: -0.1, y: -0.38, z: 0.05, s: 0.044 }
      ];

      const connections = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,5],[2,5],[3,6],[4,6],[1,3],[2,4]];

      // Node material with energy flow
      const nodeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            vNormal = normal;
            vPos = position;
            float pulse = 1.0 + sin(uTime * 0.8) * 0.03;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.08), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.0);
            float energy = sin(vPos.x * 6.0 + vPos.y * 6.0 - uTime * 0.6) * 0.5 + 0.5;
            vec3 col = vec3(0.78, 0.84, 0.95) + vec3(0.15, 0.1, 0.05) * (fresnel + energy * 0.25);
            float alpha = (0.4 + fresnel * 0.35) * (1.0 + uHover * 0.35);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(nodeMat);

      // Core glow
      const coreMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 1.0 + sin(uTime * 1.2) * 0.06;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.1), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 0.75 + sin(uTime * 0.8) * 0.2;
            gl_FragColor = vec4(0.95, 0.97, 1.0, pulse * (1.0 + uHover * 0.25));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(coreMat);

      nodes.forEach((n, i) => {
        const geo = i === 0
          ? new THREE.BoxGeometry(n.s, n.s, n.s, 2, 2, 2)
          : new THREE.TetrahedronGeometry(n.s, 0);
        const mesh = new THREE.Mesh(geo, nodeMat);
        mesh.position.set(n.x, n.y, n.z);
        mesh.rotation.set(i * 0.5, i * 0.3, i * 0.4);
        mainGroup.add(mesh);

        const core = new THREE.Mesh(new THREE.SphereGeometry(n.s * 0.32, 8, 8), coreMat);
        core.position.set(n.x, n.y, n.z);
        mainGroup.add(core);
      });

      // Connection lines with flowing packets
      const lineMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aProgress;
          varying float vProgress;
          void main() {
            vProgress = aProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.06), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vProgress;
          void main() {
            float p1 = smoothstep(0.1, 0.0, abs(fract(vProgress - uTime * 0.2) - 0.12));
            float p2 = smoothstep(0.1, 0.0, abs(fract(vProgress - uTime * 0.2 + 0.5) - 0.12));
            float packets = max(p1, p2);
            vec3 col = vec3(0.65, 0.72, 0.9) + vec3(0.3, 0.2, 0.1) * packets;
            float alpha = (0.12 + packets * 0.55) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(lineMat);

      connections.forEach(([a, b]) => {
        const pts: THREE.Vector3[] = [];
        for (let t = 0; t <= 16; t++) {
          const p = t / 16;
          pts.push(new THREE.Vector3(
            nodes[a].x + (nodes[b].x - nodes[a].x) * p,
            nodes[a].y + (nodes[b].y - nodes[a].y) * p,
            nodes[a].z + (nodes[b].z - nodes[a].z) * p
          ));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const prog = new Float32Array(17);
        for (let i = 0; i <= 16; i++) prog[i] = i / 16;
        geo.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
        mainGroup.add(new THREE.Line(geo, lineMat));
      });

      // Ambient particles
      const particleMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase;
          varying float vAlpha;
          void main() {
            vec3 pos = position;
            pos.x += sin(uTime * 0.15 + aPhase) * 0.03;
            pos.y += cos(uTime * 0.12 + aPhase * 1.2) * 0.03;
            pos *= 1.0 + uHover * 0.08;
            vAlpha = 0.35 + sin(uTime * 0.5 + aPhase * 2.0) * 0.2;
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = (2.0 + uHover * 1.2) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            gl_FragColor = vec4(0.88, 0.92, 1.0, smoothstep(0.5, 0.0, d) * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(particleMat);

      const pCount = 14;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(pCount * 3);
      const pPhase = new Float32Array(pCount);
      for (let i = 0; i < pCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 0.28 + Math.random() * 0.2;
        pPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
        pPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        pPos[i*3+2] = r * Math.cos(phi);
        pPhase[i] = Math.random() * Math.PI * 2;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      pGeo.setAttribute('aPhase', new THREE.BufferAttribute(pPhase, 1));
      mainGroup.add(new THREE.Points(pGeo, particleMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // OCTOPUS - Organic Bioluminescent Creature
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'octopus') {

      // Organic head/mantle with pulsing
      const headMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            vNormal = normal;
            vPos = position;
            vec3 pos = position;
            float breathe = 1.0 + sin(uTime * 0.4) * 0.02;
            pos *= breathe * (1.0 + uHover * 0.06);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.2);
            float pulse = sin(vPos.y * 6.0 - uTime * 0.5) * 0.5 + 0.5;
            vec3 col = vec3(0.75, 0.82, 0.95) + vec3(0.18, 0.12, 0.08) * (fresnel + pulse * 0.2);
            float alpha = (0.4 + fresnel * 0.4) * (1.0 + uHover * 0.3);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(headMat);

      const headGeo = new THREE.SphereGeometry(0.18, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.7);
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 0.12;
      head.scale.set(1, 1.25, 0.88);
      mainGroup.add(head);

      // Eyes
      const eyeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 1.0 + sin(uTime * 1.5) * 0.08;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.1), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float glow = 0.8 + sin(uTime * 0.8) * 0.15;
            gl_FragColor = vec4(0.95, 0.97, 1.0, glow * (1.0 + uHover * 0.2));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(eyeMat);

      const eyeGeo = new THREE.SphereGeometry(0.022, 10, 10);
      const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
      leftEye.position.set(-0.08, 0.1, 0.12);
      mainGroup.add(leftEye);

      const rightEye = new THREE.Mesh(eyeGeo.clone(), eyeMat);
      rightEye.position.set(0.08, 0.1, 0.12);
      mainGroup.add(rightEye);

      // 8 Tentacles with flowing animation
      const tentacleMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aProgress;
          varying float vProgress;
          varying vec3 vPos;
          void main() {
            vProgress = aProgress;
            vPos = position;
            vec3 pos = position;
            // Gentle sway
            float sway = sin(uTime * 0.3 + aProgress * 3.0) * 0.02 * aProgress;
            pos.x += sway;
            pos.z += sway * 0.5;
            pos *= 1.0 + uHover * 0.06;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vProgress;
          void main() {
            float energy = sin(vProgress * 8.0 - uTime * 0.6) * 0.5 + 0.5;
            float fade = 1.0 - vProgress * 0.5;
            vec3 col = vec3(0.72, 0.8, 0.94) + vec3(0.2, 0.15, 0.08) * energy;
            float alpha = (0.35 + energy * 0.25) * fade * (1.0 + uHover * 0.35);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(tentacleMat);

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const isLong = i % 2 === 0;
        const len = isLong ? 0.52 : 0.44;

        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(Math.cos(angle) * 0.1, -0.04, Math.sin(angle) * 0.08),
          new THREE.Vector3(Math.cos(angle) * 0.2, -0.15, Math.sin(angle) * 0.17),
          new THREE.Vector3(Math.cos(angle + 0.12) * 0.32, -0.28, Math.sin(angle + 0.12) * 0.28),
          new THREE.Vector3(Math.cos(angle - 0.08) * 0.4, -0.38, Math.sin(angle - 0.08) * 0.34),
          new THREE.Vector3(Math.cos(angle + 0.15) * len, -0.46 - (isLong ? 0.06 : 0), Math.sin(angle + 0.15) * (len * 0.82))
        ]);

        const pts = curve.getPoints(28);
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const prog = new Float32Array(29);
        for (let j = 0; j <= 28; j++) prog[j] = j / 28;
        geo.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
        mainGroup.add(new THREE.Line(geo, tentacleMat));

        // Sucker dots
        for (let s = 0; s < 3; s++) {
          const t = 0.3 + s * 0.22;
          const pt = curve.getPointAt(t);
          const suckerMat = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
            vertexShader: `
              uniform float uTime, uHover;
              void main() {
                vec4 mv = modelViewMatrix * vec4(position * (1.0 + uHover * 0.08), 1.0);
                gl_PointSize = (1.8 - float(${s}) * 0.3) / -mv.z;
                gl_Position = projectionMatrix * mv;
              }
            `,
            fragmentShader: `
              uniform float uTime, uHover;
              void main() {
                float d = length(gl_PointCoord - 0.5);
                if (d > 0.5) discard;
                float alpha = smoothstep(0.5, 0.1, d) * (0.4 + sin(uTime * 0.6) * 0.1);
                gl_FragColor = vec4(0.85, 0.9, 1.0, alpha * (1.0 + uHover * 0.3));
              }
            `,
            transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
          });
          materials.push(suckerMat);
          const suckerGeo = new THREE.BufferGeometry();
          suckerGeo.setAttribute('position', new THREE.Float32BufferAttribute([pt.x, pt.y, pt.z], 3));
          mainGroup.add(new THREE.Points(suckerGeo, suckerMat));
        }
      }

      // Ambient bioluminescent particles
      const bioMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase;
          varying float vAlpha;
          void main() {
            vec3 pos = position;
            pos.x += sin(uTime * 0.2 + aPhase) * 0.025;
            pos.y += cos(uTime * 0.15 + aPhase * 1.3) * 0.02;
            pos *= 1.0 + uHover * 0.08;
            vAlpha = 0.3 + sin(uTime * 0.6 + aPhase * 2.0) * 0.2;
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = (1.8 + uHover * 1.0) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            gl_FragColor = vec4(0.8, 0.88, 1.0, smoothstep(0.5, 0.0, d) * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(bioMat);

      const bioCount = 12;
      const bioGeo = new THREE.BufferGeometry();
      const bioPos = new Float32Array(bioCount * 3);
      const bioPhase = new Float32Array(bioCount);
      for (let i = 0; i < bioCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const r = 0.28 + Math.random() * 0.28;
        bioPos[i*3] = Math.cos(theta) * r;
        bioPos[i*3+1] = (Math.random() - 0.5) * 0.5 - 0.1;
        bioPos[i*3+2] = Math.sin(theta) * r;
        bioPhase[i] = Math.random() * Math.PI * 2;
      }
      bioGeo.setAttribute('position', new THREE.BufferAttribute(bioPos, 3));
      bioGeo.setAttribute('aPhase', new THREE.BufferAttribute(bioPhase, 1));
      mainGroup.add(new THREE.Points(bioGeo, bioMat));

      mainGroup.position.y = 0.08;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // OVERMIND - Cosmic Unified Consciousness
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'overmind') {

      // Orbital rings with energy flow
      const createRingMat = (speed: number) => {
        const mat = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uSpeed: { value: speed } },
          vertexShader: `
            uniform float uTime, uHover;
            varying float vAngle;
            void main() {
              vAngle = atan(position.y, position.x);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.08), 1.0);
            }
          `,
          fragmentShader: `
            uniform float uTime, uHover, uSpeed;
            varying float vAngle;
            void main() {
              float a = vAngle + 3.14159;
              float pulse = sin(a * 4.0 - uTime * uSpeed) * 0.5 + 0.5;
              float glow = pow(pulse, 3.0);
              vec3 col = vec3(0.68, 0.78, 0.95) + vec3(0.25, 0.15, 0.05) * glow;
              float alpha = (0.2 + glow * 0.45) * (1.0 + uHover * 0.4);
              gl_FragColor = vec4(col, alpha);
            }
          `,
          transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending
        });
        materials.push(mat);
        return mat;
      };

      const rings = [
        { r: 0.42, thick: 0.006, rx: 0, ry: 0, rz: 0, speed: 0.4 },
        { r: 0.35, thick: 0.005, rx: Math.PI / 3, ry: Math.PI / 6, rz: 0, speed: -0.5 },
        { r: 0.28, thick: 0.004, rx: -Math.PI / 4, ry: 0, rz: Math.PI / 5, speed: 0.6 }
      ];

      rings.forEach(ring => {
        const geo = new THREE.TorusGeometry(ring.r, ring.thick, 16, 64);
        const mesh = new THREE.Mesh(geo, createRingMat(ring.speed));
        mesh.rotation.set(ring.rx, ring.ry, ring.rz);
        mainGroup.add(mesh);
      });

      // Merkaba - two interlocking tetrahedrons
      const merkabaMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            vNormal = normal;
            vPos = position;
            float pulse = 1.0 + sin(uTime * 0.5) * 0.03;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.1), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal, vPos;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.0);
            float energy = sin(vPos.x * 8.0 + vPos.y * 8.0 - uTime * 0.4) * 0.5 + 0.5;
            vec3 col = vec3(0.75, 0.82, 0.95) + vec3(0.18, 0.12, 0.05) * (fresnel + energy * 0.25);
            float alpha = (0.45 + fresnel * 0.35) * (1.0 + uHover * 0.35);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(merkabaMat);

      const tetra1 = new THREE.Mesh(new THREE.TetrahedronGeometry(0.15, 0), merkabaMat);
      mainGroup.add(tetra1);

      const tetra2 = new THREE.Mesh(new THREE.TetrahedronGeometry(0.15, 0), merkabaMat);
      tetra2.rotation.x = Math.PI;
      mainGroup.add(tetra2);

      // Central eye/consciousness
      const eyeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 1.0 + sin(uTime * 0.8) * 0.08;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.12), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float glow = 0.85 + sin(uTime * 0.6) * 0.12;
            gl_FragColor = vec4(0.98, 0.99, 1.0, glow * (1.0 + uHover * 0.2));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(eyeMat);

      mainGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.048, 20, 20), eyeMat));

      // Orbiting consciousness points
      const orbitMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase, aRadius;
          varying float vAlpha;
          void main() {
            float angle = uTime * 0.1 + aPhase;
            vec3 pos = vec3(cos(angle) * aRadius, sin(angle) * aRadius, 0.0);
            pos *= 1.0 + uHover * 0.08;
            vAlpha = 0.5 + sin(uTime * 0.5 + aPhase * 3.0) * 0.25;
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = (2.5 + uHover * 1.2) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float core = smoothstep(0.5, 0.0, d);
            gl_FragColor = vec4(0.92, 0.95, 1.0, core * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(orbitMat);

      const orbitCount = 8;
      const orbitGeo = new THREE.BufferGeometry();
      const oPos = new Float32Array(orbitCount * 3);
      const oPhase = new Float32Array(orbitCount);
      const oRadius = new Float32Array(orbitCount);
      for (let i = 0; i < orbitCount; i++) {
        oPos[i*3] = oPos[i*3+1] = oPos[i*3+2] = 0;
        oPhase[i] = (i / orbitCount) * Math.PI * 2;
        oRadius[i] = 0.42;
      }
      orbitGeo.setAttribute('position', new THREE.BufferAttribute(oPos, 3));
      orbitGeo.setAttribute('aPhase', new THREE.BufferAttribute(oPhase, 1));
      orbitGeo.setAttribute('aRadius', new THREE.BufferAttribute(oRadius, 1));
      mainGroup.add(new THREE.Points(orbitGeo, orbitMat));

      // Ambient cosmic dust
      const dustMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase;
          varying float vAlpha;
          void main() {
            vec3 pos = position;
            pos.x += sin(uTime * 0.1 + aPhase) * 0.02;
            pos.y += cos(uTime * 0.08 + aPhase * 1.2) * 0.02;
            pos *= 1.0 + uHover * 0.08;
            vAlpha = 0.25 + sin(uTime * 0.4 + aPhase * 2.0) * 0.15;
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = (1.5 + uHover * 0.8) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            gl_FragColor = vec4(0.85, 0.9, 1.0, smoothstep(0.5, 0.0, d) * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(dustMat);

      const dustCount = 18;
      const dustGeo = new THREE.BufferGeometry();
      const dPos = new Float32Array(dustCount * 3);
      const dPhase = new Float32Array(dustCount);
      for (let i = 0; i < dustCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 0.2 + Math.random() * 0.3;
        dPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
        dPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        dPos[i*3+2] = r * Math.cos(phi);
        dPhase[i] = Math.random() * Math.PI * 2;
      }
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
      dustGeo.setAttribute('aPhase', new THREE.BufferAttribute(dPhase, 1));
      mainGroup.add(new THREE.Points(dustGeo, dustMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ANIMATION - Slow, Elegant, Meditative (Static on Mobile)
    // ═══════════════════════════════════════════════════════════════════════
    let time = 0;
    let frameCount = 0;

    const animate = () => {
      // On mobile: static render (no time progression)
      // On desktop: full animation
      if (!isMobile) {
        time += 0.004;
      }
      frameCount++;
      if (frameCount === 5) setIsLoaded(true);

      // Only animate hover on desktop
      if (!isMobile) {
        hoverRef.current += (isHovered ? 1 : 0 - hoverRef.current) * 0.04;
      }

      materials.forEach(mat => {
        if (mat.uniforms.uTime) mat.uniforms.uTime.value = time;
        if (mat.uniforms.uHover) mat.uniforms.uHover.value = hoverRef.current;
      });

      // Gentle rotation per type (only on desktop)
      if (!isMobile) {
        if (type === 'trade69') {
          mainGroup.rotation.y = Math.sin(time * 0.08) * 0.06 + hoverRef.current * 0.1;
          mainGroup.rotation.x = Math.cos(time * 0.06) * 0.03;
        } else if (type === 'megaagent') {
          mainGroup.rotation.y = Math.sin(time * 0.06) * 0.05 + hoverRef.current * 0.12;
          mainGroup.rotation.x = Math.cos(time * 0.05) * 0.03;
          mainGroup.rotation.z = Math.sin(time * 0.04) * 0.015;
        } else if (type === 'octopus') {
          mainGroup.position.y = 0.08 + Math.sin(time * 0.12) * 0.015;
          mainGroup.rotation.y = Math.sin(time * 0.08) * 0.06 + hoverRef.current * 0.1;
          mainGroup.rotation.x = Math.cos(time * 0.06) * 0.025;
          mainGroup.rotation.z = Math.sin(time * 0.07) * 0.03;
        } else if (type === 'overmind') {
          mainGroup.rotation.z = time * 0.025;
          mainGroup.rotation.y = Math.sin(time * 0.05) * 0.04 + hoverRef.current * 0.1;
          mainGroup.rotation.x = Math.cos(time * 0.04) * 0.025;
        }
      }

      renderer.render(scene, camera);

      // On mobile: stop animation loop after initial render
      // On desktop: continue animation
      if (isMobile && frameCount > 10) {
        return; // Stop loop on mobile after initial render
      }
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