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

// ═══════════════════════════════════════════════════════════════
// 3D ANIMATED ICONS - ELEGANT, SLOW, REFINED
// ═══════════════════════════════════════════════════════════════

interface WorkIcon3DProps {
  type: 'trade69' | 'megaagent' | 'octopus' | 'overmind';
  size?: number;
}

function WorkIcon3D({ type, size = 80 }: WorkIcon3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const hoverRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.5;

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

    // Elegant thin wireframe material
    const elegantMaterial = (opacity: number) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        varying vec3 vPosition;
        varying float vFresnel;
        
        void main() {
          vPosition = position;
          vec3 pos = position;
          
          // Very subtle breathing - slow and gentle
          float breathe = 1.0 + sin(uTime * 0.8) * 0.008;
          pos *= breathe;
          
          // Gentle hover expansion
          pos *= 1.0 + uHover * 0.05;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vec3 viewDir = normalize(-mvPosition.xyz);
          vec3 worldNormal = normalize(normalMatrix * normal);
          vFresnel = pow(1.0 - abs(dot(viewDir, worldNormal)), 2.0);
          
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        uniform float uHover;
        varying vec3 vPosition;
        varying float vFresnel;
        
        void main() {
          // Very slow, gentle pulse
          float pulse = 0.92 + sin(uTime * 0.6) * 0.08;
          
          // Subtle energy flow
          float energy = sin(vPosition.x * 3.0 + vPosition.y * 3.0 - uTime * 0.5) * 0.5 + 0.5;
          
          // Elegant white with subtle blue tint
          vec3 color = vec3(0.94, 0.95, 0.98);
          color += vec3(0.02, 0.04, 0.08) * energy * (0.5 + uHover * 0.3);
          
          // Edge glow on hover
          color += vec3(0.1, 0.12, 0.15) * vFresnel * uHover;
          
          float alpha = uOpacity * pulse * (1.0 + uHover * 0.15);
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Ethereal point material
    const etherealPointMaterial = (opacity: number) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        attribute float aPhase;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position;
          
          // Very slow, gentle floating
          pos.x += sin(uTime * 0.4 + aPhase) * 0.015;
          pos.y += cos(uTime * 0.3 + aPhase * 1.3) * 0.015;
          pos.z += sin(uTime * 0.35 + aPhase * 0.7) * 0.01;
          
          pos *= 1.0 + uHover * 0.08;
          
          // Gentle pulsing alpha
          vAlpha = 0.7 + sin(uTime * 0.8 + aPhase * 2.0) * 0.2;
          vAlpha *= (1.0 + uHover * 0.2);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (2.5 + uHover * 1.5) * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying float vAlpha;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          // Soft glow falloff
          float core = smoothstep(0.5, 0.0, dist);
          float glow = smoothstep(0.5, 0.2, dist) * 0.5;
          
          vec3 color = vec3(0.95, 0.96, 0.98);
          gl_FragColor = vec4(color, (core + glow) * vAlpha * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Thin line material for connections
    const lineMaterial = (opacity: number) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        varying float vProgress;
        
        void main() {
          vProgress = position.y;
          vec3 pos = position;
          pos *= 1.0 + uHover * 0.05;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        uniform float uHover;
        varying float vProgress;
        
        void main() {
          // Traveling light pulse - very slow
          float pulse = sin(vProgress * 6.0 - uTime * 0.8) * 0.5 + 0.5;
          float alpha = uOpacity * (0.3 + pulse * 0.4) * (1.0 + uHover * 0.3);
          
          vec3 color = vec3(0.92, 0.94, 0.98);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const materials: THREE.ShaderMaterial[] = [];

    // ═══════════════════════════════════════════════════════════════
    // TRADE69 - Elegant ascending constellation
    // ═══════════════════════════════════════════════════════════════
    if (type === 'trade69') {
      // Thin vertical lines - like light beams
      const heights = [0.25, 0.45, 0.35, 0.6, 0.8];
      heights.forEach((h, i) => {
        const lineGeo = new THREE.CylinderGeometry(0.008, 0.008, h, 8);
        const mat = elegantMaterial(0.4 + i * 0.1);
        materials.push(mat);
        const line = new THREE.Mesh(lineGeo, mat);
        line.position.x = (i - 2) * 0.22;
        line.position.y = h / 2 - 0.35;
        mainGroup.add(line);
      });

      // Elegant curve - thinner tube
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.55, -0.12, 0.08),
        new THREE.Vector3(-0.22, 0.12, 0.08),
        new THREE.Vector3(0, -0.02, 0.08),
        new THREE.Vector3(0.22, 0.22, 0.08),
        new THREE.Vector3(0.5, 0.45, 0.08)
      ]);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.012, 8, false);
      const tubeMat = elegantMaterial(0.7);
      materials.push(tubeMat);
      mainGroup.add(new THREE.Mesh(tubeGeo, tubeMat));

      // Constellation points
      const pointsGeo = new THREE.BufferGeometry();
      const positions = new Float32Array([
        -0.55, -0.12, 0.12,
        -0.22, 0.12, 0.12,
        0, -0.02, 0.12,
        0.22, 0.22, 0.12,
        0.5, 0.45, 0.12
      ]);
      const phases = new Float32Array([0, 1.2, 2.4, 3.6, 4.8]);
      pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointsGeo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
      const ptMat = etherealPointMaterial(1);
      materials.push(ptMat);
      mainGroup.add(new THREE.Points(pointsGeo, ptMat));

      // Subtle outer ring
      const ringGeo = new THREE.TorusGeometry(0.7, 0.006, 16, 64);
      const ringMat = elegantMaterial(0.15);
      materials.push(ringMat);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      mainGroup.add(ring);
    }

    // ═══════════════════════════════════════════════════════════════
    // MEGAAGENT - Constellation network - spread out nodes
    // ═══════════════════════════════════════════════════════════════
    else if (type === 'megaagent') {
      // Central cube - distinct from overmind's spherical center
      const coreGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18, 2, 2, 2);
      const coreMat = elegantMaterial(0.75);
      materials.push(coreMat);
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.rotation.x = Math.PI / 4;
      core.rotation.y = Math.PI / 4;
      mainGroup.add(core);

      // Outer nodes at varying distances - constellation pattern
      const nodePositions = [
        { x: 0.5, y: 0.3, z: 0.1 },
        { x: -0.45, y: 0.35, z: -0.1 },
        { x: 0.35, y: -0.45, z: 0.15 },
        { x: -0.4, y: -0.35, z: -0.12 },
        { x: 0.1, y: 0.55, z: -0.08 },
        { x: -0.15, y: -0.5, z: 0.1 }
      ];

      nodePositions.forEach((pos, i) => {
        // Small tetrahedron nodes
        const nodeGeo = new THREE.TetrahedronGeometry(0.05, 0);
        const nodeMat = elegantMaterial(0.55 + i * 0.05);
        materials.push(nodeMat);
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(pos.x, pos.y, pos.z);
        node.rotation.set(i * 0.5, i * 0.3, i * 0.4);
        mainGroup.add(node);

        // Connection line to center
        const direction = new THREE.Vector3(pos.x, pos.y, pos.z).normalize();
        const length = Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z) - 0.12;
        const lineGeo = new THREE.CylinderGeometry(0.003, 0.003, length, 4);
        const lineMat = lineMaterial(0.3);
        materials.push(lineMat);
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.set(pos.x / 2, pos.y / 2, pos.z / 2);
        line.lookAt(new THREE.Vector3(0, 0, 0));
        line.rotateX(Math.PI / 2);
        mainGroup.add(line);
      });

      // Cross-connections between some nodes
      const connections = [[0, 2], [1, 3], [4, 5], [0, 4], [2, 5]];
      connections.forEach(([a, b]) => {
        const start = nodePositions[a];
        const end = nodePositions[b];
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2;
        const midZ = (start.z + end.z) / 2;
        const length = Math.sqrt(
          Math.pow(end.x - start.x, 2) +
          Math.pow(end.y - start.y, 2) +
          Math.pow(end.z - start.z, 2)
        );

        const lineGeo = new THREE.CylinderGeometry(0.002, 0.002, length, 4);
        const lineMat = lineMaterial(0.2);
        materials.push(lineMat);
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.set(midX, midY, midZ);
        line.lookAt(new THREE.Vector3(end.x, end.y, end.z));
        line.rotateX(Math.PI / 2);
        mainGroup.add(line);
      });

      // Floating particles around the network
      const particleGeo = new THREE.BufferGeometry();
      const particleCount = 12;
      const particlePositions = new Float32Array(particleCount * 3);
      const particlePhases = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 0.4 + Math.random() * 0.25;
        particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        particlePositions[i * 3 + 2] = r * Math.cos(phi);
        particlePhases[i] = Math.random() * Math.PI * 2;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particleGeo.setAttribute('aPhase', new THREE.BufferAttribute(particlePhases, 1));
      const particleMat = etherealPointMaterial(0.6);
      materials.push(particleMat);
      mainGroup.add(new THREE.Points(particleGeo, particleMat));
    }

    // ═══════════════════════════════════════════════════════════════
    // OCTOPUS - True octopus form with head and 8 tentacles
    // ═══════════════════════════════════════════════════════════════
    else if (type === 'octopus') {
      // Mantle/head - elongated dome shape
      const headGeo = new THREE.SphereGeometry(0.22, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.7);
      const headMat = elegantMaterial(0.75);
      materials.push(headMat);
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 0.15;
      head.scale.set(1, 1.3, 0.9);
      mainGroup.add(head);

      // Inner head structure
      const innerHeadGeo = new THREE.SphereGeometry(0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6);
      const innerHeadMat = elegantMaterial(0.4);
      materials.push(innerHeadMat);
      const innerHead = new THREE.Mesh(innerHeadGeo, innerHeadMat);
      innerHead.position.y = 0.18;
      innerHead.scale.set(1, 1.2, 0.85);
      mainGroup.add(innerHead);

      // Eyes - two small glowing points
      const eyeGeo = new THREE.SphereGeometry(0.025, 12, 12);
      const eyeMat = elegantMaterial(0.95);
      materials.push(eyeMat);

      const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
      leftEye.position.set(-0.1, 0.12, 0.15);
      mainGroup.add(leftEye);

      const rightEye = new THREE.Mesh(eyeGeo.clone(), eyeMat);
      rightEye.position.set(0.1, 0.12, 0.15);
      mainGroup.add(rightEye);

      // 8 Tentacles - organic flowing curves
      const tentacleCount = 8;
      for (let i = 0; i < tentacleCount; i++) {
        const angle = (i / tentacleCount) * Math.PI * 2;
        const isLong = i % 2 === 0;
        const length = isLong ? 0.65 : 0.55;

        // Base position around the head bottom
        const baseX = Math.cos(angle) * 0.12;
        const baseZ = Math.sin(angle) * 0.1;
        const baseY = -0.05;

        // Create organic S-curve for each tentacle
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(baseX, baseY, baseZ),
          new THREE.Vector3(
            Math.cos(angle) * 0.25,
            -0.18,
            Math.sin(angle) * 0.22
          ),
          new THREE.Vector3(
            Math.cos(angle + 0.15) * 0.4,
            -0.35 - (i % 3) * 0.05,
            Math.sin(angle + 0.15) * 0.35
          ),
          new THREE.Vector3(
            Math.cos(angle - 0.1) * 0.5,
            -0.48 - (i % 2) * 0.08,
            Math.sin(angle - 0.1) * 0.42
          ),
          new THREE.Vector3(
            Math.cos(angle + 0.2) * length,
            -0.55 - (isLong ? 0.1 : 0),
            Math.sin(angle + 0.2) * (length * 0.85)
          )
        ]);

        // Tapered tentacle - thicker at base, thin at tip
        const tentacleRadii = [0.025, 0.02, 0.015, 0.01, 0.005];
        const tentacleGeo = new THREE.TubeGeometry(curve, 24, 0.015, 8, false);

        // Custom tapered tube
        const positions = tentacleGeo.attributes.position;
        for (let j = 0; j < positions.count; j++) {
          const vertex = new THREE.Vector3(
            positions.getX(j),
            positions.getY(j),
            positions.getZ(j)
          );
          // Find progress along tube (approximate)
          const progress = (vertex.y - baseY) / (-0.65 - baseY);
          const taper = 1.0 - progress * 0.6;
          // Scale perpendicular to curve direction
          const center = curve.getPointAt(Math.max(0, Math.min(1, progress)));
          const toVertex = vertex.clone().sub(center);
          toVertex.multiplyScalar(taper);
          vertex.copy(center).add(toVertex);
          positions.setXYZ(j, vertex.x, vertex.y, vertex.z);
        }
        tentacleGeo.computeVertexNormals();

        const tentacleMat = elegantMaterial(0.5 + (i % 3) * 0.1);
        materials.push(tentacleMat);
        mainGroup.add(new THREE.Mesh(tentacleGeo, tentacleMat));

        // Sucker dots along tentacles
        const suckerCount = 4;
        for (let s = 0; s < suckerCount; s++) {
          const t = 0.25 + (s / suckerCount) * 0.6;
          const point = curve.getPointAt(t);
          const suckerGeo = new THREE.SphereGeometry(0.012 - s * 0.002, 8, 8);
          const suckerMat = elegantMaterial(0.35);
          materials.push(suckerMat);
          const sucker = new THREE.Mesh(suckerGeo, suckerMat);
          // Offset slightly inward
          const inward = new THREE.Vector3(-point.x, 0, -point.z).normalize().multiplyScalar(0.015);
          sucker.position.copy(point).add(inward);
          mainGroup.add(sucker);
        }
      }

      // Subtle particle aura
      const auraGeo = new THREE.BufferGeometry();
      const auraCount = 15;
      const auraPositions = new Float32Array(auraCount * 3);
      const auraPhases = new Float32Array(auraCount);
      for (let i = 0; i < auraCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 0.35 + Math.random() * 0.35;
        auraPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        auraPositions[i * 3 + 1] = r * Math.cos(phi) - 0.15;
        auraPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
        auraPhases[i] = Math.random() * Math.PI * 2;
      }
      auraGeo.setAttribute('position', new THREE.BufferAttribute(auraPositions, 3));
      auraGeo.setAttribute('aPhase', new THREE.BufferAttribute(auraPhases, 1));
      const auraMat = etherealPointMaterial(0.4);
      materials.push(auraMat);
      mainGroup.add(new THREE.Points(auraGeo, auraMat));

      // Position whole octopus slightly up so tentacles have room
      mainGroup.position.y = 0.1;
    }

    // ═══════════════════════════════════════════════════════════════
    // OVERMIND - Concentric cosmic rings, unified whole
    // ═══════════════════════════════════════════════════════════════
    else if (type === 'overmind') {
      // Three concentric rings at different angles - cosmic orbits
      const ring1Geo = new THREE.TorusGeometry(0.5, 0.008, 16, 64);
      const ring1Mat = elegantMaterial(0.5);
      materials.push(ring1Mat);
      mainGroup.add(new THREE.Mesh(ring1Geo, ring1Mat));

      const ring2Geo = new THREE.TorusGeometry(0.42, 0.006, 16, 64);
      const ring2Mat = elegantMaterial(0.35);
      materials.push(ring2Mat);
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = Math.PI / 3;
      ring2.rotation.y = Math.PI / 6;
      mainGroup.add(ring2);

      const ring3Geo = new THREE.TorusGeometry(0.35, 0.005, 16, 64);
      const ring3Mat = elegantMaterial(0.25);
      materials.push(ring3Mat);
      const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
      ring3.rotation.x = -Math.PI / 4;
      ring3.rotation.z = Math.PI / 5;
      mainGroup.add(ring3);

      // Inner merkaba - two interlocking tetrahedrons
      const tetraGeo = new THREE.TetrahedronGeometry(0.18, 0);
      const tetraMat = elegantMaterial(0.65);
      materials.push(tetraMat);
      const tetra = new THREE.Mesh(tetraGeo, tetraMat);
      mainGroup.add(tetra);

      const tetra2Geo = new THREE.TetrahedronGeometry(0.18, 0);
      const tetra2Mat = elegantMaterial(0.45);
      materials.push(tetra2Mat);
      const tetra2 = new THREE.Mesh(tetra2Geo, tetra2Mat);
      tetra2.rotation.x = Math.PI;
      mainGroup.add(tetra2);

      // Central glowing sphere - the eye
      const eyeGeo = new THREE.SphereGeometry(0.06, 24, 24);
      const eyeMat = elegantMaterial(0.95);
      materials.push(eyeMat);
      mainGroup.add(new THREE.Mesh(eyeGeo, eyeMat));

      // Orbiting points on the rings
      const orbitPointsGeo = new THREE.BufferGeometry();
      const orbitCount = 8;
      const orbitPositions = new Float32Array(orbitCount * 3);
      const orbitPhases = new Float32Array(orbitCount);
      for (let i = 0; i < orbitCount; i++) {
        const angle = (i / orbitCount) * Math.PI * 2;
        const r = 0.5;
        orbitPositions[i * 3] = Math.cos(angle) * r;
        orbitPositions[i * 3 + 1] = Math.sin(angle) * r;
        orbitPositions[i * 3 + 2] = 0;
        orbitPhases[i] = i * 0.8;
      }
      orbitPointsGeo.setAttribute('position', new THREE.BufferAttribute(orbitPositions, 3));
      orbitPointsGeo.setAttribute('aPhase', new THREE.BufferAttribute(orbitPhases, 1));
      const orbitMat = etherealPointMaterial(0.7);
      materials.push(orbitMat);
      mainGroup.add(new THREE.Points(orbitPointsGeo, orbitMat));
    }

    // ═══════════════════════════════════════════════════════════════
    // ANIMATION - Slow, elegant, meditative
    // ═══════════════════════════════════════════════════════════════

    let time = 0;
    let frameCount = 0;

    const animate = () => {
      // Very slow time progression
      time += 0.006;
      frameCount++;

      if (frameCount === 5) {
        setIsLoaded(true);
      }

      // Smooth, slow hover transition
      hoverRef.current += (isHovered ? 1 : 0 - hoverRef.current) * 0.04;

      // Update materials
      materials.forEach(mat => {
        mat.uniforms.uTime.value = time;
        mat.uniforms.uHover.value = hoverRef.current;
      });

      // Very gentle rotation - almost meditative
      const baseRotY = Math.sin(time * 0.15) * 0.08;
      const baseRotX = Math.cos(time * 0.12) * 0.04;

      mainGroup.rotation.y = baseRotY + hoverRef.current * 0.15;
      mainGroup.rotation.x = baseRotX;

      // Type-specific subtle animations
      if (type === 'overmind') {
        // Very slow eternal rotation
        mainGroup.rotation.z = time * 0.05;
      } else if (type === 'octopus') {
        // Gentle floating bob and subtle rotation
        mainGroup.position.y = 0.1 + Math.sin(time * 0.2) * 0.02;
        mainGroup.rotation.z = Math.sin(time * 0.15) * 0.05;
        mainGroup.rotation.x = baseRotX + Math.sin(time * 0.12) * 0.03;
      } else if (type === 'megaagent') {
        // Subtle network pulse
        mainGroup.rotation.z = Math.sin(time * 0.08) * 0.02;
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
  }, [type, size, isHovered]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: size,
        height: size,
        cursor: 'pointer',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease-out'
      }}
    />
  );
}

export function Trade69Icon3D({ size = 80 }: { size?: number }) {
  return <WorkIcon3D type="trade69" size={size} />;
}

export function MegaAgentIcon3D({ size = 80 }: { size?: number }) {
  return <WorkIcon3D type="megaagent" size={size} />;
}

export function OctopusIcon3D({ size = 80 }: { size?: number }) {
  return <WorkIcon3D type="octopus" size={size} />;
}

export function OvermindIcon3D({ size = 80 }: { size?: number }) {
  return <WorkIcon3D type="overmind" size={size} />;
}