"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

interface QuantumSphereProps {
  initialExpanded?: boolean;
}

export default function QuantumSphere({ initialExpanded = false }: QuantumSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);

  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const [isMobile, setIsMobile] = useState(false);
  const expandProgress = useRef(initialExpanded ? 1 : 0);
  const targetExpand = useRef(initialExpanded ? 1 : 0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => {
      targetExpand.current = prev ? 0 : 1;
      return !prev;
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return () => {};

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ═══════════════════════════════════════════════════════════════
    // ADVANCED SHADER LIBRARY
    // ═══════════════════════════════════════════════════════════════

    const shaderLib = `
      // Permutation and gradient functions
      vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      
      // 3D Simplex Noise
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 1.0/7.0;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
      
      // Fractal Brownian Motion - 5 octaves for ultra-smooth organic motion
      float fbm(vec3 p) {
        float v = 0.0;
        float a = 0.5;
        vec3 shift = vec3(100.0);
        for (int i = 0; i < 5; i++) {
          v += a * snoise(p);
          p = p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }
      
      // Domain warping for fluid-like distortion
      vec3 domainWarp(vec3 p, float time) {
        vec3 q = vec3(
          fbm(p + vec3(0.0, 0.0, 0.0) + time * 0.1),
          fbm(p + vec3(5.2, 1.3, 2.8) + time * 0.12),
          fbm(p + vec3(2.1, 7.5, 4.3) + time * 0.08)
        );
        return p + q * 0.15;
      }
      
      // Curl noise for swirling motion
      vec3 curlNoise(vec3 p, float time) {
        float e = 0.1;
        vec3 dx = vec3(e, 0.0, 0.0);
        vec3 dy = vec3(0.0, e, 0.0);
        vec3 dz = vec3(0.0, 0.0, e);
        
        float n1 = snoise(p + dy + time * 0.15) - snoise(p - dy + time * 0.15);
        float n2 = snoise(p + dz + time * 0.15) - snoise(p - dz + time * 0.15);
        float n3 = snoise(p + dx + time * 0.15) - snoise(p - dx + time * 0.15);
        float n4 = snoise(p + dz + time * 0.15) - snoise(p - dz + time * 0.15);
        float n5 = snoise(p + dx + time * 0.15) - snoise(p - dx + time * 0.15);
        float n6 = snoise(p + dy + time * 0.15) - snoise(p - dy + time * 0.15);
        
        return normalize(vec3(n1 - n2, n3 - n4, n5 - n6));
      }
    `;

    // ═══════════════════════════════════════════════════════════════
    // 1. PRIMARY SHELL - Ultra-detailed morphing geodesic
    // ═══════════════════════════════════════════════════════════════

    const primaryGeo = new THREE.IcosahedronGeometry(1.0, isMobile ? 5 : 6);
    const primaryMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        ${shaderLib}
        uniform float uTime;
        uniform float uScale;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying float vDisplacement;
        varying float vEdgeGlow;
        varying float vEnergy;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          
          vec3 pos = position;
          
          // Domain warped position for fluid motion
          vec3 warpedPos = domainWarp(position * 1.5, uTime);
          
          // Multi-layered organic displacement
          float displacement = 0.0;
          
          // Layer 1: Large slow waves
          displacement += fbm(warpedPos * 0.8 + uTime * 0.08) * 0.06;
          
          // Layer 2: Medium flowing waves
          displacement += snoise(warpedPos * 1.5 + uTime * 0.15) * 0.04;
          
          // Layer 3: Fine detail ripples
          displacement += snoise(warpedPos * 3.0 - uTime * 0.2) * 0.02;
          
          // Layer 4: Curl noise swirl
          vec3 curl = curlNoise(position * 2.0, uTime);
          displacement += dot(curl, normal) * 0.025;
          
          // Breathing - multiple harmonic frequencies
          float breathe = sin(uTime * 0.25) * 0.025 
                        + sin(uTime * 0.4 + 0.5) * 0.015
                        + sin(uTime * 0.6 + 1.0) * 0.01
                        + sin(uTime * 0.15) * 0.02;
          
          // Jellyfish-like undulation
          float undulation = sin(position.y * 4.0 - uTime * 1.2) * 0.02
                           * (1.0 + sin(position.x * 3.0 + uTime * 0.8) * 0.3);
          
          // Traveling pulse waves
          float pulse1 = sin(length(position.xy) * 6.0 - uTime * 2.0) * 0.015;
          float pulse2 = sin(length(position.yz) * 5.0 + uTime * 1.5) * 0.01;
          
          vDisplacement = displacement + breathe + undulation + pulse1 + pulse2;
          pos += normal * vDisplacement;
          
          // Spiral twist for organic feel
          float twist = sin(position.y * 2.5 + uTime * 0.3) * 0.04;
          float c = cos(twist);
          float s = sin(twist);
          pos.xz = mat2(c, -s, s, c) * pos.xz;
          
          pos *= uScale;
          
          // Energy flow for color variation
          vEnergy = sin(position.x * 4.0 + position.y * 3.0 + position.z * 2.0 - uTime * 1.5) * 0.5 + 0.5;
          vEnergy += sin(position.y * 6.0 - uTime * 2.0) * 0.25;
          
          // Edge glow intensity based on viewing angle
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vec3 viewDir = normalize(-mvPosition.xyz);
          vec3 worldNormal = normalize(mat3(modelViewMatrix) * normal);
          vEdgeGlow = pow(1.0 - abs(dot(worldNormal, viewDir)), 3.0);
          
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying float vDisplacement;
        varying float vEdgeGlow;
        varying float vEnergy;
        
        void main() {
          // Sophisticated color palette
          vec3 deepColor = vec3(0.55, 0.6, 0.75);
          vec3 midColor = vec3(0.75, 0.78, 0.88);
          vec3 brightColor = vec3(0.92, 0.94, 1.0);
          vec3 accentColor = vec3(0.6, 0.7, 0.95);
          
          // Blend based on energy and displacement
          vec3 color = mix(deepColor, midColor, vEnergy);
          color = mix(color, brightColor, vDisplacement * 4.0 + 0.3);
          color += accentColor * vEdgeGlow * 0.4;
          
          // Traveling light bands
          float bands = sin(vPosition.x * 8.0 + vPosition.y * 6.0 - uTime * 1.8) * 0.5 + 0.5;
          color += vec3(0.1, 0.12, 0.18) * bands * 0.3;
          
          // Pulsing luminosity
          float pulse = 0.7 + sin(uTime * 0.4) * 0.1 + sin(uTime * 0.7 + 1.0) * 0.05;
          color *= pulse;
          
          // Dynamic alpha
          float alpha = 0.55 + vEdgeGlow * 0.25 + vEnergy * 0.15;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const primaryShell = new THREE.Mesh(primaryGeo, primaryMat);
    mainGroup.add(primaryShell);

    // ═══════════════════════════════════════════════════════════════
    // 2. OUTER ETHEREAL SHELL - Delicate flowing veil
    // ═══════════════════════════════════════════════════════════════

    const outerGeo = new THREE.IcosahedronGeometry(1.25, isMobile ? 3 : 4);
    const outerMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        ${shaderLib}
        uniform float uTime;
        uniform float uScale;
        
        varying float vAlpha;
        varying float vGlow;
        
        void main() {
          vec3 pos = position;
          
          // Ethereal flowing motion
          vec3 warped = domainWarp(position * 1.0, uTime * 0.8);
          float flow = fbm(warped * 1.5);
          pos += normal * flow * 0.08;
          
          // Gentle wave
          float wave = sin(position.x * 2.0 + position.y * 3.0 - uTime * 0.6) * 0.04;
          pos += normal * wave;
          
          pos *= uScale;
          
          // Shimmering alpha
          vAlpha = 0.15 + sin(position.x * 6.0 + position.y * 5.0 + uTime * 0.8) * 0.08;
          vGlow = sin(position.z * 5.0 - uTime * 1.2) * 0.5 + 0.5;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vAlpha;
        varying float vGlow;
        
        void main() {
          vec3 color = vec3(0.6, 0.65, 0.8);
          color += vec3(0.15, 0.18, 0.25) * vGlow;
          gl_FragColor = vec4(color, vAlpha);
        }
      `,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const outerShell = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerShell);

    // ═══════════════════════════════════════════════════════════════
    // 3. INNER SHELL - Complex internal structure
    // ═══════════════════════════════════════════════════════════════

    const innerGeo = new THREE.IcosahedronGeometry(0.65, isMobile ? 4 : 5);
    const innerMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        ${shaderLib}
        uniform float uTime;
        uniform float uScale;
        
        varying float vIntensity;
        
        void main() {
          vec3 pos = position;
          
          // Internal pulsing complexity
          float noise = fbm(position * 2.5 + uTime * 0.2);
          pos += normal * noise * 0.04;
          
          // Counter-rhythm pulse
          float pulse = sin(uTime * 0.8 + position.x * 5.0) * 0.02;
          pulse += cos(uTime * 0.6 + position.y * 4.0) * 0.015;
          pos += normal * pulse;
          
          pos *= uScale;
          
          vIntensity = sin(position.x * 7.0 + position.y * 6.0 - uTime * 2.5) * 0.5 + 0.5;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vIntensity;
        
        void main() {
          float brightness = 0.35 + vIntensity * 0.3;
          vec3 color = vec3(0.6, 0.65, 0.8) * brightness;
          gl_FragColor = vec4(color, 0.3 + vIntensity * 0.15);
        }
      `,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const innerShell = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerShell);

    // ═══════════════════════════════════════════════════════════════
    // 4. MICRO CORE - Tiny geodesic heart
    // ═══════════════════════════════════════════════════════════════

    const microGeo = new THREE.IcosahedronGeometry(0.15, 2);
    const microMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uScale;
        
        void main() {
          vec3 pos = position;
          float pulse = 1.0 + sin(uTime * 1.5) * 0.1 + sin(uTime * 2.3) * 0.05;
          pos *= pulse * uScale;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        
        void main() {
          float glow = 0.3 + sin(uTime * 1.0) * 0.1;
          vec3 color = vec3(0.7, 0.75, 0.9) * glow;
          gl_FragColor = vec4(color, 0.35);
        }
      `,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const microCore = new THREE.Mesh(microGeo, microMat);
    mainGroup.add(microCore);

    // ═══════════════════════════════════════════════════════════════
    // 5. VERTEX NODES - Living glowing points
    // ═══════════════════════════════════════════════════════════════

    const nodeCount = isMobile ? 100 : 180;
    const nodeGeo = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeSizes = new Float32Array(nodeCount);
    const nodePhases = new Float32Array(nodeCount);
    const nodeDepths = new Float32Array(nodeCount);

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 0.25 + Math.random() * 0.8;

      nodePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      nodePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      nodePositions[i * 3 + 2] = r * Math.cos(phi);

      nodeSizes[i] = 1.0 + Math.random() * 2.0;
      nodePhases[i] = Math.random() * Math.PI * 2;
      nodeDepths[i] = r;
    }

    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute('aSize', new THREE.BufferAttribute(nodeSizes, 1));
    nodeGeo.setAttribute('aPhase', new THREE.BufferAttribute(nodePhases, 1));
    nodeGeo.setAttribute('aDepth', new THREE.BufferAttribute(nodeDepths, 1));

    const nodeMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        ${shaderLib}
        attribute float aSize;
        attribute float aPhase;
        attribute float aDepth;
        uniform float uTime;
        uniform float uScale;
        
        varying float vAlpha;
        varying float vGlow;
        
        void main() {
          vec3 pos = position;
          
          // Organic floating with fbm
          float noise = fbm(position * 1.5 + uTime * 0.2);
          pos += normalize(position) * noise * 0.06;
          
          // Orbital drift
          float orbit = uTime * (0.15 + aDepth * 0.1) + aPhase;
          float c = cos(orbit * 0.4);
          float s = sin(orbit * 0.4);
          pos.xz = mat2(c, -s, s, c) * pos.xz;
          
          // Vertical bob
          pos.y += sin(uTime * 0.6 + aPhase * 3.0) * 0.03;
          
          // Breathing
          pos *= 1.0 + sin(uTime * 0.4 + aPhase * 2.0) * 0.04;
          
          pos *= uScale;
          
          // Sophisticated pulsing
          vAlpha = 0.35 + sin(uTime * 2.0 + aPhase * 8.0) * 0.25
                       + sin(uTime * 3.5 + aPhase * 4.0) * 0.1;
          vGlow = sin(uTime * 1.2 + aPhase * 5.0) * 0.5 + 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          float sizeMultiplier = 0.7 + vGlow * 0.5;
          gl_PointSize = aSize * (200.0 / -mvPosition.z) * uScale * sizeMultiplier;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying float vGlow;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          // Soft glowing core with halo
          float core = smoothstep(0.5, 0.0, dist);
          float halo = smoothstep(0.5, 0.15, dist) * 0.6;
          
          vec3 color = vec3(0.85, 0.88, 1.0);
          color += vec3(0.1, 0.15, 0.3) * vGlow;
          
          float alpha = (core * 0.8 + halo) * vAlpha;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const nodes = new THREE.Points(nodeGeo, nodeMat);
    mainGroup.add(nodes);

    // ═══════════════════════════════════════════════════════════════
    // 6. SYNAPTIC CONNECTIONS - Sparse elegant lines
    // ═══════════════════════════════════════════════════════════════

    const synapseCount = isMobile ? 25 : 45;
    const synapseGeo = new THREE.BufferGeometry();
    const synapsePositions = new Float32Array(synapseCount * 6);

    for (let i = 0; i < synapseCount; i++) {
      const t1 = Math.random() * Math.PI * 2;
      const p1 = Math.acos(2 * Math.random() - 1);
      const r1 = 0.2 + Math.random() * 0.5;

      const t2 = t1 + (Math.random() - 0.5) * 2.0;
      const p2 = p1 + (Math.random() - 0.5) * 1.5;
      const r2 = 0.2 + Math.random() * 0.5;

      synapsePositions[i * 6] = r1 * Math.sin(p1) * Math.cos(t1);
      synapsePositions[i * 6 + 1] = r1 * Math.sin(p1) * Math.sin(t1);
      synapsePositions[i * 6 + 2] = r1 * Math.cos(p1);
      synapsePositions[i * 6 + 3] = r2 * Math.sin(p2) * Math.cos(t2);
      synapsePositions[i * 6 + 4] = r2 * Math.sin(p2) * Math.sin(t2);
      synapsePositions[i * 6 + 5] = r2 * Math.cos(p2);
    }

    synapseGeo.setAttribute('position', new THREE.BufferAttribute(synapsePositions, 3));

    const synapseMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uScale;
        void main() {
          vec3 pos = position * uScale;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        void main() {
          float pulse = 0.1 + sin(uTime * 1.8) * 0.05;
          gl_FragColor = vec4(vec3(0.65, 0.7, 0.85), pulse);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const synapses = new THREE.LineSegments(synapseGeo, synapseMat);
    mainGroup.add(synapses);

    // ═══════════════════════════════════════════════════════════════
    // 7. FLOWING MESH TENDRILS - Ethereal ribbons extending outward
    // ═══════════════════════════════════════════════════════════════

    const tendrilCount = isMobile ? 4 : 6;
    const tendrils: THREE.Mesh[] = [];
    const tendrilMaterials: THREE.ShaderMaterial[] = [];

    for (let t = 0; t < tendrilCount; t++) {
      // Create a ribbon geometry - long and flowing
      const ribbonLength = 80 + Math.random() * 40;
      const ribbonWidth = 25 + Math.random() * 15;
      const tendrilGeo = new THREE.PlaneGeometry(2.5, 4.0, ribbonWidth, ribbonLength);

      // Store initial positions for animation
      const positions = tendrilGeo.attributes.position.array as Float32Array;
      const initialPositions = new Float32Array(positions.length);

      // Shape into flowing tendril
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];

        // Progress along the ribbon (0 to 1)
        const progress = (y + 2.0) / 4.0;

        // Spiral outward from sphere
        const spiralAngle = progress * Math.PI * 2.5 + t * (Math.PI * 2 / tendrilCount);
        const radius = 0.3 + progress * 1.8;

        // Create flowing spiral shape
        positions[i] = Math.cos(spiralAngle) * radius + x * (0.15 + progress * 0.4);
        positions[i + 1] = Math.sin(spiralAngle) * radius * 0.6;
        positions[i + 2] = progress * 2.5 - 1.0 + Math.sin(spiralAngle * 2) * 0.3;

        initialPositions[i] = positions[i];
        initialPositions[i + 1] = positions[i + 1];
        initialPositions[i + 2] = positions[i + 2];
      }

      tendrilGeo.setAttribute('initialPosition', new THREE.BufferAttribute(initialPositions, 3));
      tendrilGeo.computeVertexNormals();

      const tendrilMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uScale: { value: 1 },
          uTendrilIndex: { value: t }
        },
        vertexShader: `
          ${shaderLib}
          attribute vec3 initialPosition;
          uniform float uTime;
          uniform float uScale;
          uniform float uTendrilIndex;
          
          varying float vProgress;
          varying float vAlpha;
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            vProgress = uv.y;
            
            vec3 pos = initialPosition;
            
            // Flowing wave animation
            float wave1 = sin(vProgress * 8.0 - uTime * 1.2 + uTendrilIndex) * 0.15 * vProgress;
            float wave2 = sin(vProgress * 12.0 + uTime * 0.8 + uTendrilIndex * 2.0) * 0.08 * vProgress;
            float wave3 = cos(vProgress * 6.0 - uTime * 1.5) * 0.1 * vProgress;
            
            // Organic noise displacement
            float noise = fbm(pos * 1.5 + uTime * 0.15) * 0.2 * vProgress;
            
            // Apply waves perpendicular to flow direction
            pos.x += wave1 + noise;
            pos.y += wave2;
            pos.z += wave3 + sin(uTime * 0.3 + uTendrilIndex) * 0.1 * vProgress;
            
            // Breathing/pulsing
            float breathe = 1.0 + sin(uTime * 0.4 + vProgress * 2.0) * 0.05;
            pos *= breathe;
            
            // Rotation around origin
            float rotSpeed = 0.15 + uTendrilIndex * 0.02;
            float angle = uTime * rotSpeed;
            float c = cos(angle);
            float s = sin(angle);
            pos.xz = mat2(c, -s, s, c) * pos.xz;
            
            pos *= uScale;
            
            // Fade out towards the end
            vAlpha = smoothstep(1.0, 0.7, vProgress) * smoothstep(0.0, 0.15, vProgress);
            vAlpha *= 0.35 + sin(uTime * 0.5 + uTendrilIndex * 1.5) * 0.1;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uTendrilIndex;
          
          varying float vProgress;
          varying float vAlpha;
          varying vec2 vUv;
          
          void main() {
            // Gradient along the tendril
            vec3 baseColor = vec3(0.6, 0.65, 0.78);
            vec3 tipColor = vec3(0.45, 0.5, 0.65);
            vec3 color = mix(baseColor, tipColor, vProgress);
            
            // Subtle shimmer
            float shimmer = sin(vUv.x * 30.0 + uTime * 2.0) * 0.5 + 0.5;
            color += vec3(0.1, 0.12, 0.18) * shimmer * 0.2;
            
            // Energy pulse traveling along tendril
            float pulse = sin(vProgress * 15.0 - uTime * 3.0) * 0.5 + 0.5;
            color += vec3(0.15, 0.18, 0.25) * pulse * (1.0 - vProgress);
            
            gl_FragColor = vec4(color, vAlpha);
          }
        `,
        transparent: true,
        wireframe: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });

      const tendril = new THREE.Mesh(tendrilGeo, tendrilMat);

      // Position each tendril at different angles around the sphere
      const angle = (t / tendrilCount) * Math.PI * 2;
      tendril.rotation.z = angle;
      tendril.rotation.x = (Math.random() - 0.5) * 0.5;
      tendril.rotation.y = (Math.random() - 0.5) * 0.8;

      mainGroup.add(tendril);
      tendrils.push(tendril);
      tendrilMaterials.push(tendrilMat);
    }

    // ═══════════════════════════════════════════════════════════════
    // 8. SECONDARY FLOWING VEILS - Larger sweeping mesh ribbons
    // ═══════════════════════════════════════════════════════════════

    const veilCount = isMobile ? 2 : 3;
    const veils: THREE.Mesh[] = [];
    const veilMaterials: THREE.ShaderMaterial[] = [];

    for (let v = 0; v < veilCount; v++) {
      const veilGeo = new THREE.PlaneGeometry(3.5, 5.0, 35, 60);
      const veilPositions = veilGeo.attributes.position.array as Float32Array;
      const veilInitial = new Float32Array(veilPositions.length);

      for (let i = 0; i < veilPositions.length; i += 3) {
        const x = veilPositions[i];
        const y = veilPositions[i + 1];
        const progress = (y + 2.5) / 5.0;

        // Large sweeping arc
        const arcAngle = progress * Math.PI * 1.5 + v * (Math.PI * 2 / veilCount);
        const arcRadius = 0.5 + progress * 2.2;

        veilPositions[i] = Math.cos(arcAngle) * arcRadius + x * (0.1 + progress * 0.5);
        veilPositions[i + 1] = Math.sin(arcAngle) * arcRadius * 0.8 + y * 0.1;
        veilPositions[i + 2] = progress * 3.0 - 1.5 + Math.sin(arcAngle * 1.5) * 0.5;

        veilInitial[i] = veilPositions[i];
        veilInitial[i + 1] = veilPositions[i + 1];
        veilInitial[i + 2] = veilPositions[i + 2];
      }

      veilGeo.setAttribute('initialPosition', new THREE.BufferAttribute(veilInitial, 3));

      const veilMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uScale: { value: 1 },
          uVeilIndex: { value: v }
        },
        vertexShader: `
          ${shaderLib}
          attribute vec3 initialPosition;
          uniform float uTime;
          uniform float uScale;
          uniform float uVeilIndex;
          
          varying float vProgress;
          varying float vAlpha;
          
          void main() {
            vProgress = uv.y;
            
            vec3 pos = initialPosition;
            
            // Gentle undulating motion
            float wave = sin(vProgress * 5.0 - uTime * 0.8 + uVeilIndex * 2.0) * 0.25 * vProgress;
            float wave2 = cos(vProgress * 7.0 + uTime * 0.6) * 0.15 * vProgress;
            
            pos.x += wave;
            pos.y += wave2 * 0.5;
            pos.z += sin(vProgress * 4.0 - uTime * 0.5) * 0.2 * vProgress;
            
            // Slow rotation
            float angle = uTime * 0.08 + uVeilIndex * 0.5;
            float c = cos(angle);
            float s = sin(angle);
            pos.xz = mat2(c, -s, s, c) * pos.xz;
            
            pos *= uScale;
            
            vAlpha = smoothstep(1.0, 0.6, vProgress) * smoothstep(0.0, 0.2, vProgress) * 0.2;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          varying float vProgress;
          varying float vAlpha;
          
          void main() {
            vec3 color = vec3(0.55, 0.6, 0.72);
            float pulse = sin(vProgress * 10.0 - uTime * 2.0) * 0.5 + 0.5;
            color += vec3(0.1, 0.12, 0.15) * pulse;
            gl_FragColor = vec4(color, vAlpha);
          }
        `,
        transparent: true,
        wireframe: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });

      const veil = new THREE.Mesh(veilGeo, veilMat);
      veil.rotation.x = v * 0.8;
      veil.rotation.z = v * (Math.PI * 2 / veilCount) + 0.3;
      mainGroup.add(veil);
      veils.push(veil);
      veilMaterials.push(veilMat);
    }

    // ═══════════════════════════════════════════════════════════════
    // 9. AMBIENT DUST - Very subtle atmosphere
    // ═══════════════════════════════════════════════════════════════

    const dustCount = isMobile ? 25 : 40;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustPhases = new Float32Array(dustCount);

    for (let i = 0; i < dustCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.4 + Math.random() * 0.6;

      dustPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dustPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPositions[i * 3 + 2] = r * Math.cos(phi);
      dustPhases[i] = Math.random() * Math.PI * 2;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeo.setAttribute('aPhase', new THREE.BufferAttribute(dustPhases, 1));

    const dustMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        attribute float aPhase;
        uniform float uTime;
        uniform float uScale;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position * uScale;
          float a = uTime * 0.03 + aPhase;
          pos.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * pos.xz;
          vAlpha = 0.04 + sin(uTime * 0.6 + aPhase * 4.0) * 0.02;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = 1.5 * (150.0 / -mvPosition.z) * uScale;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
          gl_FragColor = vec4(vec3(0.7, 0.75, 0.85), alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const dust = new THREE.Points(dustGeo, dustMat);
    mainGroup.add(dust);

    // ═══════════════════════════════════════════════════════════════
    // INTERACTION
    // ═══════════════════════════════════════════════════════════════

    let isDragging = false;
    let prevX = 0, prevY = 0;
    let velX = 0, velY = 0;
    let targetRotX = 0, targetRotY = 0;
    let isPinching = false;
    let pinchDist = 0;
    let zoom = 4.5, targetZoom = 4.5;
    const minZoom = 2.5, maxZoom = 7.0;

    const getDist = (t1: Touch, t2: Touch) =>
      Math.sqrt((t1.clientX - t2.clientX) ** 2 + (t1.clientY - t2.clientY) ** 2);

    const handleMouseDown = (e: MouseEvent) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; };
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        velY = (e.clientX - prevX) * 0.004;
        velX = (e.clientY - prevY) * 0.002;
        prevX = e.clientX; prevY = e.clientY;
      }
    };
    const handleMouseUp = () => { isDragging = false; };
    const handleMouseLeave = () => { isDragging = false; };
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + e.deltaY * 0.004));
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        isPinching = true; isDragging = false;
        pinchDist = getDist(e.touches[0], e.touches[1]);
      } else if (e.touches.length === 1) {
        isDragging = true; isPinching = false;
        prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && isPinching) {
        const d = getDist(e.touches[0], e.touches[1]);
        targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + (pinchDist - d) * 0.012));
        pinchDist = d;
      } else if (e.touches.length === 1 && isDragging) {
        velY = (e.touches[0].clientX - prevX) * 0.004;
        velX = (e.touches[0].clientY - prevY) * 0.002;
        prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) isPinching = false;
      if (e.touches.length === 0) isDragging = false;
    };
    const handleClick = () => {
      if (Math.abs(velX) < 0.008 && Math.abs(velY) < 0.008 && !isPinching) toggleExpand();
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('click', handleClick);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // ═══════════════════════════════════════════════════════════════
    // ANIMATION
    // ═══════════════════════════════════════════════════════════════

    let time = 0;

    const animate = () => {
      time += 0.008;

      expandProgress.current += (targetExpand.current - expandProgress.current) * 0.05;
      const scale = 0.6 + expandProgress.current * 0.55;

      zoom += (targetZoom - zoom) * 0.06;
      camera.position.z = zoom;

      // Update all uniforms
      primaryMat.uniforms.uTime.value = time;
      primaryMat.uniforms.uScale.value = scale;
      outerMat.uniforms.uTime.value = time;
      outerMat.uniforms.uScale.value = scale;
      innerMat.uniforms.uTime.value = time;
      innerMat.uniforms.uScale.value = scale;
      microMat.uniforms.uTime.value = time;
      microMat.uniforms.uScale.value = scale;
      nodeMat.uniforms.uTime.value = time;
      nodeMat.uniforms.uScale.value = scale;
      synapseMat.uniforms.uTime.value = time;
      synapseMat.uniforms.uScale.value = scale;
      dustMat.uniforms.uTime.value = time;
      dustMat.uniforms.uScale.value = scale;

      // Update tendril materials
      tendrilMaterials.forEach(mat => {
        mat.uniforms.uTime.value = time;
        mat.uniforms.uScale.value = scale;
      });

      // Update veil materials
      veilMaterials.forEach(mat => {
        mat.uniforms.uTime.value = time;
        mat.uniforms.uScale.value = scale;
      });

      // Smooth rotation with momentum
      if (!isDragging) { velX *= 0.96; velY *= 0.96; }
      targetRotX += velX;
      targetRotY += velY;

      // Elegant auto-rotation
      if (Math.abs(velX) < 0.0003 && Math.abs(velY) < 0.0003) {
        targetRotY += 0.001;
        targetRotX += 0.00015;
      }

      mainGroup.rotation.x = targetRotX;
      mainGroup.rotation.y = targetRotY;

      // Counter-rotating layers for mesmerizing depth
      outerShell.rotation.y = -targetRotY * 0.35 + time * 0.015;
      outerShell.rotation.x = -targetRotX * 0.25;

      innerShell.rotation.y = targetRotY * 0.5 - time * 0.025;
      innerShell.rotation.z = time * 0.01;

      microCore.rotation.y = time * 0.12;
      microCore.rotation.x = time * 0.1;
      microCore.rotation.z = time * 0.06;

      // Subtle camera breathing
      camera.position.x = Math.sin(time * 0.1) * 0.1;
      camera.position.y = Math.cos(time * 0.08) * 0.06;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);

      try {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('click', handleClick);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);

        if (rendererRef.current && container) {
          container.removeChild(rendererRef.current.domElement);
          rendererRef.current.dispose();
        }

        primaryGeo.dispose(); outerGeo.dispose(); innerGeo.dispose(); microGeo.dispose();
        nodeGeo.dispose(); synapseGeo.dispose(); dustGeo.dispose();
        primaryMat.dispose(); outerMat.dispose(); innerMat.dispose(); microMat.dispose();
        nodeMat.dispose(); synapseMat.dispose(); dustMat.dispose();

        // Dispose tendrils
        tendrils.forEach(t => t.geometry.dispose());
        tendrilMaterials.forEach(m => m.dispose());

        // Dispose veils
        veils.forEach(v => v.geometry.dispose());
        veilMaterials.forEach(m => m.dispose());
      } catch (e) {}
    };
  }, [isMobile, toggleExpand]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: isMobile ? '320px' : '450px',
          backgroundColor: 'transparent',
          touchAction: 'none',
          cursor: 'grab',
          overflow: 'hidden',
          borderRadius: '12px'
        }}
      />
    </div>
  );
}