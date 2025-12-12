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
    if (!containerRef.current) return;

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

    // Main group for all elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ═══════════════════════════════════════════════════════════════
    // SIMPLEX NOISE IMPLEMENTATION
    // ═══════════════════════════════════════════════════════════════

    const noiseVertexHeader = `
      vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      
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
    `;

    // ═══════════════════════════════════════════════════════════════
    // 1. CORE NEURAL SPHERE - Dense internal brain-like structure
    // ═══════════════════════════════════════════════════════════════

    const neuralParticleCount = isMobile ? 3000 : 6000;
    const neuralGeometry = new THREE.BufferGeometry();
    const neuralPositions = new Float32Array(neuralParticleCount * 3);
    const neuralSizes = new Float32Array(neuralParticleCount);
    const neuralOpacities = new Float32Array(neuralParticleCount);

    for (let i = 0; i < neuralParticleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      // Brain-like folded structure
      const baseRadius = 0.3 + Math.random() * 0.5;
      const foldNoise = Math.sin(theta * 6) * Math.cos(phi * 4) * 0.15;
      const radius = baseRadius + foldNoise;

      neuralPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      neuralPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      neuralPositions[i * 3 + 2] = radius * Math.cos(phi);

      neuralSizes[i] = 0.5 + Math.random() * 2.0;
      neuralOpacities[i] = 0.3 + Math.random() * 0.7;
    }

    neuralGeometry.setAttribute('position', new THREE.BufferAttribute(neuralPositions, 3));
    neuralGeometry.setAttribute('size', new THREE.BufferAttribute(neuralSizes, 1));
    neuralGeometry.setAttribute('opacity', new THREE.BufferAttribute(neuralOpacities, 1));

    const neuralMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        ${noiseVertexHeader}
        attribute float size;
        attribute float opacity;
        uniform float uTime;
        uniform float uScale;
        varying float vOpacity;
        varying float vDepth;
        
        void main() {
          vOpacity = opacity;
          
          vec3 pos = position * uScale;
          
          // Organic pulsing movement
          float noise = snoise(pos * 2.0 + uTime * 0.3);
          pos += normalize(pos) * noise * 0.05;
          
          // Brain-like folding animation
          float fold = sin(pos.x * 8.0 + uTime * 0.5) * cos(pos.y * 8.0 + uTime * 0.3) * 0.02;
          pos += normalize(pos) * fold;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vDepth = -mvPosition.z;
          
          gl_PointSize = size * (200.0 / -mvPosition.z) * uScale;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vOpacity;
        varying float vDepth;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.2, dist) * vOpacity * 0.2;
          float depthFade = clamp(1.0 - vDepth * 0.2, 0.1, 1.0);
          
          vec3 color = vec3(0.7, 0.73, 0.8);
          gl_FragColor = vec4(color, alpha * depthFade);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const neuralCloud = new THREE.Points(neuralGeometry, neuralMaterial);
    mainGroup.add(neuralCloud);

    // ═══════════════════════════════════════════════════════════════
    // 2. OUTER GEODESIC SHELL - Delicate wireframe sphere
    // ═══════════════════════════════════════════════════════════════

    const shellGeometry = new THREE.IcosahedronGeometry(0.95, isMobile ? 3 : 4);
    const shellMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        ${noiseVertexHeader}
        uniform float uTime;
        uniform float uScale;
        varying vec3 vPosition;
        varying float vNoise;
        
        void main() {
          vPosition = position;
          
          vec3 pos = position * uScale;
          
          float noise = snoise(position * 3.0 + uTime * 0.2);
          vNoise = noise;
          pos += normal * noise * 0.03;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vPosition;
        varying float vNoise;
        
        void main() {
          float pulse = 0.7 + sin(uTime * 0.5) * 0.15;
          float brightness = pulse + vNoise * 0.15;
          vec3 color = vec3(0.85, 0.88, 0.95) * brightness;
          gl_FragColor = vec4(color, 0.6);
        }
      `,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    mainGroup.add(shell);

    // ═══════════════════════════════════════════════════════════════
    // 3. FLOWING ENERGY RIBBONS - Ethereal spiral streams
    // ═══════════════════════════════════════════════════════════════

    const ribbonCount = isMobile ? 5 : 8;
    const ribbons: THREE.Line[] = [];

    for (let r = 0; r < ribbonCount; r++) {
      const ribbonPoints = 100;
      const ribbonGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(ribbonPoints * 3);
      const progress = new Float32Array(ribbonPoints);

      const startAngle = (r / ribbonCount) * Math.PI * 2;
      const spiralTightness = 0.5 + Math.random() * 0.5;
      const direction = r % 2 === 0 ? 1 : -1;

      for (let i = 0; i < ribbonPoints; i++) {
        const t = i / ribbonPoints;
        progress[i] = t;

        // Spiral outward with wave
        const angle = startAngle + t * Math.PI * 4 * spiralTightness * direction;
        const radius = 0.85 + t * 2.2;
        const height = Math.sin(t * Math.PI * 2) * 0.8 * (1 - t * 0.3);

        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = height + (Math.random() - 0.5) * 0.1;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
      }

      ribbonGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      ribbonGeometry.setAttribute('progress', new THREE.BufferAttribute(progress, 1));

      const ribbonMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uScale: { value: 1 },
          uOffset: { value: r * 0.4 }
        },
        vertexShader: `
          ${noiseVertexHeader}
          attribute float progress;
          uniform float uTime;
          uniform float uScale;
          uniform float uOffset;
          varying float vProgress;
          varying float vAlpha;
          
          void main() {
            vProgress = progress;
            
            vec3 pos = position * uScale;
            
            // Flowing wave motion
            float wave = sin(progress * 8.0 - uTime * 2.5 + uOffset) * 0.2;
            float wave2 = cos(progress * 5.0 - uTime * 1.8 + uOffset * 2.0) * 0.12;
            
            // Noise displacement
            float noise = snoise(vec3(pos.x * 0.5, pos.y + uTime * 0.4, pos.z * 0.5) * 1.5);
            
            pos.x += wave * (1.0 - progress * 0.4);
            pos.y += wave2 + noise * 0.15 * progress;
            pos.z += wave * 0.6;
            
            // Fade at ends
            vAlpha = sin(progress * 3.14159) * 0.7;
            vAlpha *= smoothstep(0.0, 0.1, progress) * smoothstep(1.0, 0.85, progress);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          varying float vProgress;
          varying float vAlpha;
          
          void main() {
            vec3 color = mix(
              vec3(0.5, 0.6, 0.85),
              vec3(0.9, 0.93, 1.0),
              vProgress
            );
            gl_FragColor = vec4(color, vAlpha * 0.5);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const ribbon = new THREE.Line(ribbonGeometry, ribbonMaterial);
      ribbon.rotation.x = (Math.random() - 0.5) * 0.5;
      ribbon.rotation.z = (Math.random() - 0.5) * 0.3;
      ribbons.push(ribbon);
      mainGroup.add(ribbon);
    }

    // ═══════════════════════════════════════════════════════════════
    // 4. ETHEREAL MESH VEILS - Delicate extending nets
    // ═══════════════════════════════════════════════════════════════

    const veilCount = isMobile ? 3 : 5;
    const veils: THREE.Mesh[] = [];

    for (let v = 0; v < veilCount; v++) {
      const veilGeometry = new THREE.PlaneGeometry(3, 3, 30, 30);

      const veilPositions = veilGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < veilPositions.length; i += 3) {
        const x = veilPositions[i];
        const y = veilPositions[i + 1];

        // Curve into flowing veil shape
        const dist = Math.sqrt(x * x + y * y);
        veilPositions[i + 2] = Math.sin(dist * 1.5) * 0.4 + Math.sin(x * 2 + y) * 0.15;

        // Taper edges
        const edgeFade = 1 - Math.pow(dist / 2.0, 2);
        veilPositions[i] *= Math.max(0, edgeFade);
        veilPositions[i + 1] *= Math.max(0, edgeFade);
      }

      const veilMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uScale: { value: 1 }
        },
        vertexShader: `
          ${noiseVertexHeader}
          uniform float uTime;
          uniform float uScale;
          varying vec2 vUv;
          varying float vAlpha;
          
          void main() {
            vUv = uv;
            
            vec3 pos = position * uScale;
            
            // Flowing wave
            float wave = sin(pos.x * 2.0 + uTime * 0.8) * cos(pos.y * 1.5 + uTime * 0.6) * 0.2;
            pos.z += wave;
            
            // Noise displacement
            float noise = snoise(vec3(pos.xy * 1.5, uTime * 0.25));
            pos.z += noise * 0.15;
            pos.x += noise * 0.05;
            
            // Distance-based alpha
            float dist = length(pos.xy);
            vAlpha = smoothstep(2.0, 0.4, dist) * 0.35;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          varying float vAlpha;
          
          void main() {
            vec3 color = vec3(0.7, 0.75, 0.88);
            gl_FragColor = vec4(color, vAlpha);
          }
        `,
        transparent: true,
        wireframe: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });

      const veil = new THREE.Mesh(veilGeometry, veilMaterial);

      // Position veils around sphere
      const veilAngle = (v / veilCount) * Math.PI * 2;
      veil.position.set(
        Math.cos(veilAngle) * 0.6,
        (Math.random() - 0.5) * 0.4,
        Math.sin(veilAngle) * 0.6
      );
      veil.rotation.set(
        Math.random() * Math.PI * 0.4 - 0.2,
        veilAngle + Math.PI / 2,
        Math.random() * 0.4 - 0.2
      );

      veils.push(veil);
      mainGroup.add(veil);
    }

    // ═══════════════════════════════════════════════════════════════
    // 5. OUTER PARTICLE HALO - Cosmic dust atmosphere
    // ═══════════════════════════════════════════════════════════════

    const haloParticleCount = isMobile ? 1000 : 2000;
    const haloGeometry = new THREE.BufferGeometry();
    const haloPositions = new Float32Array(haloParticleCount * 3);
    const haloSizes = new Float32Array(haloParticleCount);
    const haloPhases = new Float32Array(haloParticleCount);

    for (let i = 0; i < haloParticleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.0 + Math.random() * 2.0;

      haloPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      haloPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      haloPositions[i * 3 + 2] = radius * Math.cos(phi);

      haloSizes[i] = 0.2 + Math.random() * 1.8;
      haloPhases[i] = Math.random() * Math.PI * 2;
    }

    haloGeometry.setAttribute('position', new THREE.BufferAttribute(haloPositions, 3));
    haloGeometry.setAttribute('size', new THREE.BufferAttribute(haloSizes, 1));
    haloGeometry.setAttribute('phase', new THREE.BufferAttribute(haloPhases, 1));

    const haloMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        attribute float size;
        attribute float phase;
        uniform float uTime;
        uniform float uScale;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position * uScale;
          
          // Gentle orbital drift
          float angle = uTime * 0.08 + phase;
          float c = cos(angle * 0.3);
          float s = sin(angle * 0.3);
          pos.xz = mat2(c, -s, s, c) * pos.xz;
          
          // Twinkle
          vAlpha = 0.15 + sin(uTime * 2.5 + phase * 12.0) * 0.1;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (180.0 / -mvPosition.z) * uScale;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
          vec3 color = vec3(0.7, 0.75, 0.85);
          gl_FragColor = vec4(color, alpha * 0.4);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const halo = new THREE.Points(haloGeometry, haloMaterial);
    mainGroup.add(halo);

    // ═══════════════════════════════════════════════════════════════
    // 6. INNER CORE GLOW - Pulsing energy center
    // ═══════════════════════════════════════════════════════════════

    // Core is now just a subtle hint - almost invisible
    const coreGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const coreMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 1 }
      },
      vertexShader: `
        uniform float uScale;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position * uScale, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 5.0);
          
          float pulse = 0.1 + sin(uTime * 0.5) * 0.03;
          
          vec3 color = vec3(0.6, 0.65, 0.75) * pulse;
          float alpha = fresnel * pulse * 0.15;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(core);

    // ═══════════════════════════════════════════════════════════════
    // 7. NEURAL CONNECTIONS - Internal synaptic links
    // ═══════════════════════════════════════════════════════════════

    const connectionCount = isMobile ? 40 : 80;
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = new Float32Array(connectionCount * 6);

    for (let i = 0; i < connectionCount; i++) {
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.acos(2 * Math.random() - 1);
      const r1 = 0.15 + Math.random() * 0.65;

      const theta2 = theta1 + (Math.random() - 0.5) * 1.8;
      const phi2 = phi1 + (Math.random() - 0.5) * 1.2;
      const r2 = 0.15 + Math.random() * 0.65;

      connectionPositions[i * 6] = r1 * Math.sin(phi1) * Math.cos(theta1);
      connectionPositions[i * 6 + 1] = r1 * Math.sin(phi1) * Math.sin(theta1);
      connectionPositions[i * 6 + 2] = r1 * Math.cos(phi1);
      connectionPositions[i * 6 + 3] = r2 * Math.sin(phi2) * Math.cos(theta2);
      connectionPositions[i * 6 + 4] = r2 * Math.sin(phi2) * Math.sin(theta2);
      connectionPositions[i * 6 + 5] = r2 * Math.cos(phi2);
    }

    connectionGeometry.setAttribute('position', new THREE.BufferAttribute(connectionPositions, 3));

    const connectionMaterial = new THREE.ShaderMaterial({
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
          float pulse = 0.12 + sin(uTime * 2.0) * 0.05;
          gl_FragColor = vec4(vec3(0.7, 0.75, 0.85), pulse);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    mainGroup.add(connections);

    // ═══════════════════════════════════════════════════════════════
    // INTERACTION HANDLING
    // ═══════════════════════════════════════════════════════════════

    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // Pinch zoom variables
    let isPinching = false;
    let initialPinchDistance = 0;
    let currentZoom = 4.5;
    let targetZoom = 4.5;
    const minZoom = 2.5;
    const maxZoom = 7.0;

    const getDistance = (touch1: Touch, touch2: Touch) => {
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        rotationVelocityY = deltaX * 0.005;
        rotationVelocityX = deltaY * 0.003;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => { isDragging = false; };
    const handleMouseLeave = () => { isDragging = false; };

    // Mouse wheel zoom for desktop
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + e.deltaY * 0.005));
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // Two finger pinch start
        isPinching = true;
        isDragging = false;
        initialPinchDistance = getDistance(e.touches[0], e.touches[1]);
      } else if (e.touches.length === 1) {
        isDragging = true;
        isPinching = false;
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && isPinching) {
        // Pinch zoom
        const currentDistance = getDistance(e.touches[0], e.touches[1]);
        const delta = initialPinchDistance - currentDistance;
        targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + delta * 0.015));
        initialPinchDistance = currentDistance;
      } else if (e.touches.length === 1 && isDragging && !isPinching) {
        const deltaX = e.touches[0].clientX - previousMouseX;
        const deltaY = e.touches[0].clientY - previousMouseY;
        rotationVelocityY = deltaX * 0.005;
        rotationVelocityX = deltaY * 0.003;
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        isPinching = false;
      }
      if (e.touches.length === 0) {
        isDragging = false;
      }
    };

    const handleClick = () => {
      if (Math.abs(rotationVelocityX) < 0.01 && Math.abs(rotationVelocityY) < 0.01 && !isPinching) {
        toggleExpand();
      }
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
    // ANIMATION LOOP
    // ═══════════════════════════════════════════════════════════════

    let time = 0;
    const animate = () => {
      time += 0.008;

      // Smooth expand/collapse - more dramatic scale within fixed container
      expandProgress.current += (targetExpand.current - expandProgress.current) * 0.06;
      const scale = 0.6 + expandProgress.current * 0.6;

      // Smooth zoom
      currentZoom += (targetZoom - currentZoom) * 0.08;
      camera.position.z = currentZoom;

      // Update all uniforms
      const allMaterials = [
        neuralMaterial, shellMaterial, haloMaterial, coreMaterial, connectionMaterial,
        ...ribbons.map(r => r.material as THREE.ShaderMaterial),
        ...veils.map(v => v.material as THREE.ShaderMaterial)
      ];

      allMaterials.forEach(mat => {
        mat.uniforms.uTime.value = time;
        mat.uniforms.uScale.value = scale;
      });

      // Rotation with momentum
      if (!isDragging) {
        rotationVelocityX *= 0.97;
        rotationVelocityY *= 0.97;
      }

      targetRotationX += rotationVelocityX;
      targetRotationY += rotationVelocityY;

      // Auto-rotation when idle
      if (Math.abs(rotationVelocityX) < 0.0005 && Math.abs(rotationVelocityY) < 0.0005) {
        targetRotationY += 0.0015;
        targetRotationX += 0.0002;
      }

      mainGroup.rotation.x = targetRotationX;
      mainGroup.rotation.y = targetRotationY;

      // Ribbons individual slow rotation
      ribbons.forEach((ribbon, i) => {
        ribbon.rotation.z += 0.0008 * (i % 2 === 0 ? 1 : -1);
      });

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.12) * 0.15;
      camera.position.y = Math.cos(time * 0.08) * 0.1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }

      // Dispose all
      neuralGeometry.dispose();
      neuralMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      connectionGeometry.dispose();
      connectionMaterial.dispose();
      ribbons.forEach(r => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      veils.forEach(v => {
        v.geometry.dispose();
        (v.material as THREE.Material).dispose();
      });
    };
  }, [isMobile, toggleExpand]);

  const containerHeight = isMobile ? '320px' : '450px';

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: containerHeight,
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