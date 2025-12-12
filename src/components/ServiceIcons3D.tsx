"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════════════════
// ULTIMATE SERVICE ICONS - State of the Art - Each Completely Unique
// ═══════════════════════════════════════════════════════════════════════════

interface ServiceIcon3DProps {
  type: 'website' | 'dashboard' | 'api' | 'llm';
  size?: number;
}

function ServiceIcon3D({ type, size = 220 }: ServiceIcon3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const hoverRef = useRef(0);
  const isTouching = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 4.2; // Pulled back for full view

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
    // WEBSITE - Floating Holographic Interface with Code Rain & Depth Layers
    // ═══════════════════════════════════════════════════════════════════════
    if (type === 'website') {

      // Ultra-thin frame lines
      const frameMaterial = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vPos;
          void main() {
            vPos = position;
            vec3 p = position * (1.0 + uHover * 0.08);
            p.z += sin(p.x * 4.0 + uTime * 0.8) * 0.015 * (1.0 + uHover);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vPos;
          void main() {
            float energy = sin(vPos.x * 10.0 - uTime * 1.5) * 0.5 + 0.5;
            vec3 col = vec3(0.7, 0.8, 0.95) + vec3(0.2, 0.15, 0.05) * energy;
            float alpha = (0.6 + energy * 0.3) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(frameMaterial);

      // Main browser frame - ultra thin lines - scaled for full visibility
      const framePoints = [
        [-0.65, 0.45, 0], [0.65, 0.45, 0], [0.65, -0.45, 0], [-0.65, -0.45, 0], [-0.65, 0.45, 0],
        [-0.65, 0.34, 0], [0.65, 0.34, 0]
      ];
      const frameGeo = new THREE.BufferGeometry().setFromPoints(
        framePoints.map(p => new THREE.Vector3(p[0], p[1], p[2]))
      );
      mainGroup.add(new THREE.Line(frameGeo, frameMaterial));

      // Window control dots
      const dotMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase;
          varying float vAlpha;
          void main() {
            vAlpha = 0.7 + sin(uTime * 2.0 + aPhase) * 0.3;
            vec3 p = position * (1.0 + uHover * 0.1);
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = (6.0 + uHover * 3.0) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float ring = smoothstep(0.3, 0.4, d) * smoothstep(0.5, 0.4, d);
            gl_FragColor = vec4(0.9, 0.95, 1.0, (ring * 0.8 + 0.2) * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(dotMat);

      const dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute('position', new THREE.Float32BufferAttribute([-0.55, 0.39, 0.01, -0.47, 0.39, 0.01, -0.39, 0.39, 0.01], 3));
      dotGeo.setAttribute('aPhase', new THREE.Float32BufferAttribute([0, 1.5, 3], 1));
      mainGroup.add(new THREE.Points(dotGeo, dotMat));

      // Floating content layers with parallax depth
      const layerMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uDepth: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover, uDepth;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 p = position * (1.0 + uHover * 0.06);
            p.z += uDepth + sin(uTime * 0.5 + position.x * 2.0) * 0.02;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec2 vUv;
          void main() {
            // Grid lines
            float gx = smoothstep(0.03, 0.0, abs(fract(vUv.x * 6.0) - 0.5));
            float gy = smoothstep(0.03, 0.0, abs(fract(vUv.y * 8.0) - 0.5));
            float grid = max(gx, gy) * 0.4;
            
            // Scan line
            float scan = smoothstep(0.02, 0.0, abs(fract(vUv.y - uTime * 0.15) - 0.5)) * 0.3;
            
            // Edge fade
            float edge = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) *
                         smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
            
            vec3 col = vec3(0.75, 0.85, 1.0);
            float alpha = (grid + scan + 0.03) * edge * (1.0 + uHover * 0.5);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending
      });

      // Three floating layers at different depths - scaled
      [0.04, 0.1, 0.16].forEach((depth, i) => {
        const mat = layerMat.clone();
        mat.uniforms.uDepth = { value: depth };
        materials.push(mat);
        const geo = new THREE.PlaneGeometry(0.36 - i * 0.06, 0.55 - i * 0.12, 8, 12);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(-0.28 + i * 0.28, -0.04, depth);
        mesh.rotation.y = (i - 1) * 0.06;
        mainGroup.add(mesh);
      });

      // Code rain particles
      const rainMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aSpeed, aPhase;
          varying float vAlpha;
          void main() {
            vec3 p = position;
            p.y = mod(p.y - uTime * aSpeed * 0.15, 1.0) - 0.5;
            p.y = p.y * 0.9 - 0.05;
            p *= 1.0 + uHover * 0.08;
            
            vAlpha = (0.3 + sin(aPhase + uTime * 3.0) * 0.25) * smoothstep(-0.5, 0.0, p.y);
            vAlpha *= 1.0 + uHover * 0.5;
            
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = (2.0 + uHover * 1.5) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            gl_FragColor = vec4(0.6, 0.9, 0.7, smoothstep(0.5, 0.0, d) * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(rainMat);

      const rainCount = 60;
      const rainPos = new Float32Array(rainCount * 3);
      const rainSpeed = new Float32Array(rainCount);
      const rainPhase = new Float32Array(rainCount);
      for (let i = 0; i < rainCount; i++) {
        rainPos[i * 3] = (Math.random() - 0.5) * 1.1;
        rainPos[i * 3 + 1] = Math.random();
        rainPos[i * 3 + 2] = 0.02 + Math.random() * 0.12;
        rainSpeed[i] = 0.5 + Math.random() * 1.5;
        rainPhase[i] = Math.random() * Math.PI * 2;
      }
      const rainGeo = new THREE.BufferGeometry();
      rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
      rainGeo.setAttribute('aSpeed', new THREE.BufferAttribute(rainSpeed, 1));
      rainGeo.setAttribute('aPhase', new THREE.BufferAttribute(rainPhase, 1));
      mainGroup.add(new THREE.Points(rainGeo, rainMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // DASHBOARD - Orbital HUD Rings with Live Data Streams
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'dashboard') {

      // Orbital ring shader
      const createRingMat = (speed: number, reverse: boolean) => {
        const mat = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uSpeed: { value: speed } },
          vertexShader: `
            uniform float uTime, uHover, uSpeed;
            varying float vAngle;
            void main() {
              vAngle = atan(position.y, position.x);
              vec3 p = position * (1.0 + uHover * 0.12);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
            }
          `,
          fragmentShader: `
            uniform float uTime, uHover, uSpeed;
            varying float vAngle;
            void main() {
              float a = vAngle + 3.14159;
              float pulse = sin(a * 8.0 ${reverse ? '+' : '-'} uTime * uSpeed) * 0.5 + 0.5;
              float glow = pow(pulse, 4.0);
              
              vec3 col = vec3(0.6, 0.75, 0.95) + vec3(0.35, 0.2, 0.05) * glow;
              float alpha = (0.25 + glow * 0.6) * (1.0 + uHover * 0.5);
              gl_FragColor = vec4(col, alpha);
            }
          `,
          transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending
        });
        materials.push(mat);
        return mat;
      };

      // Multiple orbital rings at different angles - scaled for full visibility
      const rings = [
        { r: 0.82, thick: 0.01, tilt: 0.3, speed: 1.8 },
        { r: 0.7, thick: 0.008, tilt: -0.2, speed: -2.2 },
        { r: 0.58, thick: 0.007, tilt: 0.5, speed: 2.8 },
        { r: 0.46, thick: 0.005, tilt: -0.4, speed: -1.5 }
      ];

      rings.forEach((ring, i) => {
        const geo = new THREE.TorusGeometry(ring.r, ring.thick, 8, 100);
        const mesh = new THREE.Mesh(geo, createRingMat(ring.speed, i % 2 === 1));
        mesh.rotation.x = Math.PI / 2 + ring.tilt;
        mesh.rotation.z = i * 0.4;
        mainGroup.add(mesh);
      });

      // Central gauge arc
      const gaugeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 p = position * (1.0 + uHover * 0.1);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec2 vUv;
          void main() {
            float fill = smoothstep(0.0, 0.65 + sin(uTime * 0.4) * 0.15, vUv.x);
            vec3 col = mix(vec3(0.3, 0.5, 0.9), vec3(0.9, 0.6, 0.3), fill);
            float alpha = (0.5 + fill * 0.4) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(gaugeMat);

      const gaugeGeo = new THREE.RingGeometry(0.26, 0.31, 48, 1, Math.PI * 0.75, Math.PI * 1.5);
      mainGroup.add(new THREE.Mesh(gaugeGeo, gaugeMat));

      // Gauge tick marks
      const tickMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uHover;
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.1), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            gl_FragColor = vec4(0.8, 0.85, 0.95, (0.5 + sin(uTime) * 0.2) * (1.0 + uHover * 0.3));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(tickMat);

      for (let i = 0; i <= 12; i++) {
        const angle = Math.PI * 0.75 + (i / 12) * Math.PI * 1.5;
        const len = i % 3 === 0 ? 0.06 : 0.03;
        const inner = 0.33;
        const geo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(Math.cos(angle) * inner, Math.sin(angle) * inner, 0),
          new THREE.Vector3(Math.cos(angle) * (inner + len), Math.sin(angle) * (inner + len), 0)
        ]);
        mainGroup.add(new THREE.Line(geo, tickMat));
      }

      // Center core
      const coreMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            float pulse = 1.0 + sin(uTime * 2.0) * 0.05;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.15), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec2 vUv;
          void main() {
            vec2 c = vUv - 0.5;
            float d = length(c);
            float rings = sin(d * 25.0 - uTime * 2.0) * 0.5 + 0.5;
            float glow = smoothstep(0.5, 0.0, d);
            
            vec3 col = vec3(0.7, 0.85, 1.0);
            float alpha = (rings * 0.3 + glow * 0.4) * (1.0 + uHover * 0.5);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(coreMat);
      mainGroup.add(new THREE.Mesh(new THREE.CircleGeometry(0.2, 48), coreMat));

      // Data stream particles on rings
      const streamMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aRadius, aSpeed, aPhase, aTilt;
          varying float vAlpha;
          void main() {
            float angle = aPhase + uTime * aSpeed;
            vec3 p = vec3(cos(angle) * aRadius, sin(angle) * aRadius, 0.0);
            
            // Apply tilt
            float c = cos(aTilt), s = sin(aTilt);
            p = vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
            
            p *= 1.0 + uHover * 0.12;
            vAlpha = (0.6 + sin(uTime * 3.0 + aPhase) * 0.3) * (1.0 + uHover * 0.5);
            
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = (4.0 + uHover * 2.0) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float glow = smoothstep(0.5, 0.0, d);
            gl_FragColor = vec4(0.9, 0.95, 1.0, glow * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(streamMat);

      const streamCount = 24;
      const streamGeo = new THREE.BufferGeometry();
      const sPos = new Float32Array(streamCount * 3);
      const sRadius = new Float32Array(streamCount);
      const sSpeed = new Float32Array(streamCount);
      const sPhase = new Float32Array(streamCount);
      const sTilt = new Float32Array(streamCount);

      for (let i = 0; i < streamCount; i++) {
        sPos[i * 3] = sPos[i * 3 + 1] = sPos[i * 3 + 2] = 0;
        sRadius[i] = rings[i % 4].r;
        sSpeed[i] = rings[i % 4].speed * 0.5;
        sPhase[i] = (i / streamCount) * Math.PI * 2;
        sTilt[i] = rings[i % 4].tilt;
      }
      streamGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
      streamGeo.setAttribute('aRadius', new THREE.BufferAttribute(sRadius, 1));
      streamGeo.setAttribute('aSpeed', new THREE.BufferAttribute(sSpeed, 1));
      streamGeo.setAttribute('aPhase', new THREE.BufferAttribute(sPhase, 1));
      streamGeo.setAttribute('aTilt', new THREE.BufferAttribute(sTilt, 1));
      mainGroup.add(new THREE.Points(streamGeo, streamMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // API - Hexagonal Network Constellation with Data Packets
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'api') {

      // Node positions - hexagonal constellation spread - scaled for full visibility
      const nodes: {x: number, y: number, z: number, s: number}[] = [
        { x: 0, y: 0, z: 0, s: 0.08 }, // Center hub
        // Inner ring - hex pattern
        { x: 0.4, y: 0, z: 0.08, s: 0.05 },
        { x: 0.2, y: 0.35, z: -0.04, s: 0.05 },
        { x: -0.2, y: 0.35, z: 0.06, s: 0.05 },
        { x: -0.4, y: 0, z: -0.06, s: 0.05 },
        { x: -0.2, y: -0.35, z: 0.04, s: 0.05 },
        { x: 0.2, y: -0.35, z: -0.04, s: 0.05 },
        // Outer points
        { x: 0.72, y: 0.16, z: 0.04, s: 0.035 },
        { x: 0, y: 0.68, z: -0.06, s: 0.035 },
        { x: -0.68, y: 0.2, z: 0.05, s: 0.035 },
        { x: -0.6, y: -0.4, z: -0.03, s: 0.035 },
        { x: 0.32, y: -0.64, z: 0.05, s: 0.035 },
        { x: 0.68, y: -0.28, z: -0.05, s: 0.035 }
      ];

      // Connections
      const conns = [
        [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
        [1,2],[2,3],[3,4],[4,5],[5,6],[6,1],
        [1,7],[2,8],[3,9],[4,10],[5,11],[6,12],[1,12],[7,12]
      ];

      // Hexagonal node material
      const nodeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal;
          void main() {
            vNormal = normal;
            float pulse = 1.0 + sin(uTime * 3.0) * 0.08;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.15), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vNormal;
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.0);
            vec3 col = vec3(0.7, 0.85, 1.0) + vec3(0.25, 0.1, 0.0) * fresnel;
            float alpha = (0.5 + fresnel * 0.4) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(nodeMat);

      // Node cores
      const coreMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 1.0 + sin(uTime * 4.0) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * pulse * (1.0 + uHover * 0.15), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          void main() {
            float pulse = 0.7 + sin(uTime * 3.0) * 0.3;
            gl_FragColor = vec4(0.95, 0.98, 1.0, pulse * (1.0 + uHover * 0.3));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(coreMat);

      // Create hexagonal nodes
      nodes.forEach((n, i) => {
        // Outer hex wireframe
        const hexGeo = i === 0
          ? new THREE.IcosahedronGeometry(n.s, 1)
          : new THREE.OctahedronGeometry(n.s, 0);
        const hex = new THREE.Mesh(hexGeo, nodeMat);
        hex.position.set(n.x, n.y, n.z);
        hex.rotation.z = i * 0.3;
        mainGroup.add(hex);

        // Inner glowing core
        const core = new THREE.Mesh(new THREE.SphereGeometry(n.s * 0.35, 8, 8), coreMat);
        core.position.set(n.x, n.y, n.z);
        mainGroup.add(core);
      });

      // Connection lines with flowing data
      const lineMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aProgress;
          varying float vProgress;
          void main() {
            vProgress = aProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.1), 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vProgress;
          void main() {
            // Multiple data packets
            float p1 = smoothstep(0.08, 0.0, abs(fract(vProgress - uTime * 0.3) - 0.1));
            float p2 = smoothstep(0.08, 0.0, abs(fract(vProgress - uTime * 0.3 + 0.5) - 0.1));
            float packets = max(p1, p2);
            
            vec3 col = vec3(0.5, 0.65, 0.9) + vec3(0.45, 0.3, 0.1) * packets;
            float alpha = (0.12 + packets * 0.7) * (1.0 + uHover * 0.5);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(lineMat);

      conns.forEach(([a, b]) => {
        const points: THREE.Vector3[] = [];
        const segments = 25;
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          points.push(new THREE.Vector3(
            nodes[a].x + (nodes[b].x - nodes[a].x) * t,
            nodes[a].y + (nodes[b].y - nodes[a].y) * t,
            nodes[a].z + (nodes[b].z - nodes[a].z) * t
          ));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const prog = new Float32Array(segments + 1);
        for (let i = 0; i <= segments; i++) prog[i] = i / segments;
        geo.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
        mainGroup.add(new THREE.Line(geo, lineMat));
      });

      // Outer boundary hex ring
      const boundaryMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying float vAngle;
          void main() {
            vAngle = atan(position.y, position.x);
            vec3 p = position * (1.0 + uHover * 0.08);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying float vAngle;
          void main() {
            float pulse = sin(vAngle * 6.0 + uTime * 1.0) * 0.5 + 0.5;
            vec3 col = vec3(0.6, 0.75, 0.95);
            float alpha = (0.15 + pulse * 0.25) * (1.0 + uHover * 0.4);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(boundaryMat);

      // Hexagonal boundary - scaled
      const hexPoints: THREE.Vector3[] = [];
      for (let i = 0; i <= 6; i++) {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
        hexPoints.push(new THREE.Vector3(Math.cos(angle) * 0.88, Math.sin(angle) * 0.88, 0));
      }
      mainGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hexPoints), boundaryMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // LLM - Organic Neural Brain with Synaptic Lightning
    // ═══════════════════════════════════════════════════════════════════════
    else if (type === 'llm') {

      // Brain surface with organic noise deformation
      const brainMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          varying vec3 vPos, vNormal;
          
          // Simplex noise
          vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
          vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
          vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
          vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
          
          float snoise(vec3 v){
            const vec2 C=vec2(1./6.,1./3.);
            const vec4 D=vec4(0.,.5,1.,2.);
            vec3 i=floor(v+dot(v,C.yyy));
            vec3 x0=v-i+dot(i,C.xxx);
            vec3 g=step(x0.yzx,x0.xyz);
            vec3 l=1.-g;
            vec3 i1=min(g.xyz,l.zxy);
            vec3 i2=max(g.xyz,l.zxy);
            vec3 x1=x0-i1+C.xxx;
            vec3 x2=x0-i2+C.yyy;
            vec3 x3=x0-D.yyy;
            i=mod289(i);
            vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
            float n_=.142857142857;
            vec3 ns=n_*D.wyz-D.xzx;
            vec4 j=p-49.*floor(p*ns.z*ns.z);
            vec4 x_=floor(j*ns.z);
            vec4 y_=floor(j-7.*x_);
            vec4 x=x_*ns.x+ns.yyyy;
            vec4 y=y_*ns.x+ns.yyyy;
            vec4 h=1.-abs(x)-abs(y);
            vec4 b0=vec4(x.xy,y.xy);
            vec4 b1=vec4(x.zw,y.zw);
            vec4 s0=floor(b0)*2.+1.;
            vec4 s1=floor(b1)*2.+1.;
            vec4 sh=-step(h,vec4(0.));
            vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
            vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
            vec3 p0=vec3(a0.xy,h.x);
            vec3 p1=vec3(a0.zw,h.y);
            vec3 p2=vec3(a1.xy,h.z);
            vec3 p3=vec3(a1.zw,h.w);
            vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
            p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
            vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
            m=m*m;
            return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
          }
          
          void main() {
            vNormal = normal;
            vec3 p = position;
            
            // Organic brain pulsing
            float n1 = snoise(p * 2.5 + uTime * 0.2) * 0.06;
            float n2 = snoise(p * 5.0 - uTime * 0.3) * 0.03;
            p += normal * (n1 + n2) * (1.0 + uHover * 0.5);
            
            vPos = p;
            p *= 1.0 + uHover * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime, uHover;
          varying vec3 vPos, vNormal;
          
          void main() {
            float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0,0,1))), 2.5);
            
            // Neural activity waves
            float wave1 = sin(vPos.x * 12.0 + vPos.y * 8.0 - uTime * 1.5) * 0.5 + 0.5;
            float wave2 = sin(vPos.y * 10.0 - vPos.z * 6.0 + uTime * 1.2) * 0.5 + 0.5;
            float activity = wave1 * 0.6 + wave2 * 0.4;
            
            vec3 baseCol = vec3(0.55, 0.65, 0.85);
            vec3 glowCol = vec3(0.95, 0.8, 0.6);
            vec3 col = mix(baseCol, glowCol, activity * 0.4 + fresnel * 0.3);
            
            float alpha = (0.25 + fresnel * 0.4 + activity * 0.15) * (1.0 + uHover * 0.5);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true, wireframe: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(brainMat);

      // Create organic brain shape - scaled for full visibility
      const brainGeo = new THREE.SphereGeometry(0.52, 40, 32);
      const pos = brainGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);

        // Flatten vertically
        y *= 0.72;

        // Hemisphere division (groove)
        const groove = Math.exp(-x * x * 15) * 0.12;
        z += z > 0 ? groove : -groove;

        // Frontal bulge
        const frontal = Math.exp(-(z - 0.35) * (z - 0.35) * 4) * 0.08;
        x *= 1 + frontal;

        // Temporal lobes
        const temporal = Math.exp(-y * y * 3) * Math.exp(-(Math.abs(x) - 0.5) * (Math.abs(x) - 0.5) * 8) * 0.1;
        z += temporal * Math.sign(z);

        pos.setXYZ(i, x, y, z);
      }
      brainGeo.computeVertexNormals();

      const brain = new THREE.Mesh(brainGeo, brainMat);
      brain.rotation.x = -0.15;
      mainGroup.add(brain);

      // Synaptic lightning paths - scaled
      const synapsePaths = [
        [[-0.32, 0.12, 0.4], [-0.08, 0.2, 0.44], [0.16, 0.08, 0.42], [0.32, 0.16, 0.36]],
        [[0.28, 0, 0.4], [0.12, -0.12, 0.44], [-0.12, -0.08, 0.4], [-0.28, 0.04, 0.38]],
        [[-0.24, -0.16, 0.36], [0, -0.2, 0.4], [0.2, -0.12, 0.42]],
        [[0.24, 0.2, 0.32], [0.08, 0.24, 0.38], [-0.16, 0.2, 0.36]],
        [[-0.2, 0.24, 0.28], [-0.04, 0.12, 0.4], [0.12, 0.22, 0.34]],
        [[0.32, -0.16, 0.34], [0.16, -0.22, 0.38], [-0.08, -0.18, 0.36], [-0.24, -0.12, 0.32]]
      ];

      synapsePaths.forEach((path, idx) => {
        const synMat = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 }, uHover: { value: 0 }, uPhase: { value: idx * 0.5 } },
          vertexShader: `
            uniform float uTime, uHover, uPhase;
            attribute float aProgress;
            varying float vFire, vProgress;
            void main() {
              vProgress = aProgress;
              float fireT = mod(uTime * 0.6 + uPhase, 2.5);
              vFire = smoothstep(0.25, 0.0, abs(aProgress - fireT * 0.4)) * step(fireT * 0.4, 1.0);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + uHover * 0.1), 1.0);
            }
          `,
          fragmentShader: `
            uniform float uTime, uHover;
            varying float vFire, vProgress;
            void main() {
              vec3 baseCol = vec3(0.5, 0.6, 0.85);
              vec3 fireCol = vec3(1.0, 0.95, 0.8);
              vec3 col = mix(baseCol, fireCol, vFire);
              float alpha = (0.15 + vFire * 0.8) * (1.0 + uHover * 0.5);
              gl_FragColor = vec4(col, alpha);
            }
          `,
          transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
        });
        materials.push(synMat);

        const curve = new THREE.CatmullRomCurve3(path.map(p => new THREE.Vector3(p[0], p[1], p[2])));
        const pts = curve.getPoints(35);
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const prog = new Float32Array(36);
        for (let i = 0; i < 36; i++) prog[i] = i / 35;
        geo.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
        const line = new THREE.Line(geo, synMat);
        line.rotation.x = -0.15;
        mainGroup.add(line);
      });

      // Neuron sparkle points
      const neuronMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase;
          varying float vPulse;
          void main() {
            float fire = sin(uTime * 2.0 + aPhase * 3.0) * 0.5 + 0.5;
            vPulse = pow(fire, 3.0);
            
            vec3 p = position * (1.0 + uHover * 0.1);
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = (3.0 + vPulse * 5.0 + uHover * 2.0) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vPulse;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float glow = smoothstep(0.5, 0.0, d);
            vec3 col = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 0.95, 0.85), vPulse);
            gl_FragColor = vec4(col, glow * (0.4 + vPulse * 0.6));
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(neuronMat);

      const neuronCount = 50;
      const nPos = new Float32Array(neuronCount * 3);
      const nPhase = new Float32Array(neuronCount);
      for (let i = 0; i < neuronCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.85 + 0.075;
        const r = 0.46 + Math.random() * 0.1;
        nPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        nPos[i * 3 + 1] = r * Math.cos(phi) * 0.72;
        nPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
        nPhase[i] = Math.random() * Math.PI * 2;
      }
      const nGeo = new THREE.BufferGeometry();
      nGeo.setAttribute('position', new THREE.BufferAttribute(nPos, 3));
      nGeo.setAttribute('aPhase', new THREE.BufferAttribute(nPhase, 1));
      const neurons = new THREE.Points(nGeo, neuronMat);
      neurons.rotation.x = -0.15;
      mainGroup.add(neurons);

      // Ambient thought particles
      const thoughtMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
        vertexShader: `
          uniform float uTime, uHover;
          attribute float aPhase, aOrbit;
          varying float vAlpha;
          void main() {
            float orbit = uTime * 0.15 + aPhase;
            vec3 p = position;
            p.x += sin(orbit + aOrbit) * 0.15;
            p.y += cos(orbit * 0.7 + aOrbit) * 0.1;
            p.z += sin(orbit * 0.5) * 0.1;
            p *= 1.0 + uHover * 0.1;
            
            vAlpha = (0.25 + sin(uTime * 2.0 + aPhase * 4.0) * 0.15) * (1.0 + uHover * 0.4);
            
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = (2.0 + uHover * 1.0) / -mv.z;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            gl_FragColor = vec4(0.75, 0.85, 1.0, smoothstep(0.5, 0.1, d) * vAlpha);
          }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      materials.push(thoughtMat);

      const tCount = 35;
      const tPos = new Float32Array(tCount * 3);
      const tPhase = new Float32Array(tCount);
      const tOrbit = new Float32Array(tCount);
      for (let i = 0; i < tCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = 0.68 + Math.random() * 0.25;
        tPos[i * 3] = Math.cos(angle) * r;
        tPos[i * 3 + 1] = (Math.random() - 0.5) * 0.7;
        tPos[i * 3 + 2] = Math.sin(angle) * r;
        tPhase[i] = Math.random() * Math.PI * 2;
        tOrbit[i] = Math.random() * Math.PI * 2;
      }
      const tGeo = new THREE.BufferGeometry();
      tGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3));
      tGeo.setAttribute('aPhase', new THREE.BufferAttribute(tPhase, 1));
      tGeo.setAttribute('aOrbit', new THREE.BufferAttribute(tOrbit, 1));
      mainGroup.add(new THREE.Points(tGeo, thoughtMat));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ANIMATION LOOP
    // ═══════════════════════════════════════════════════════════════════════
    let time = 0;
    let frameCount = 0;

    const animate = () => {
      time += 0.004; // Much slower
      frameCount++;
      if (frameCount === 5) setIsLoaded(true);

      hoverRef.current += (isHovered ? 1 : 0 - hoverRef.current) * 0.05;

      materials.forEach(m => {
        if (m.uniforms.uTime) m.uniforms.uTime.value = time;
        if (m.uniforms.uHover) m.uniforms.uHover.value = hoverRef.current;
      });

      // Unique rotation per type - slow and elegant
      if (type === 'website') {
        mainGroup.rotation.y = Math.sin(time * 0.06) * 0.06 + hoverRef.current * 0.12;
        mainGroup.rotation.x = Math.cos(time * 0.05) * 0.03 + hoverRef.current * 0.03;
      } else if (type === 'dashboard') {
        mainGroup.rotation.y = Math.sin(time * 0.05) * 0.05 + hoverRef.current * 0.15;
        mainGroup.rotation.x = 0.25 + Math.cos(time * 0.04) * 0.02;
      } else if (type === 'api') {
        mainGroup.rotation.y = time * 0.015 + hoverRef.current * 0.12;
        mainGroup.rotation.x = Math.sin(time * 0.06) * 0.05;
        mainGroup.rotation.z = Math.cos(time * 0.04) * 0.02;
      } else if (type === 'llm') {
        mainGroup.rotation.y = Math.sin(time * 0.07) * 0.08 + hoverRef.current * 0.12;
        mainGroup.rotation.x = -0.08 + Math.cos(time * 0.05) * 0.03;
        mainGroup.scale.setScalar(1.0 + Math.sin(time * 0.3) * 0.012 + hoverRef.current * 0.03);
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
      onTouchStart={() => { isTouching.current = true; setIsHovered(true); }}
      onTouchEnd={() => { isTouching.current = false; setTimeout(() => { if (!isTouching.current) setIsHovered(false); }, 500); }}
      style={{ width: size, height: size, cursor: 'pointer', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease-out' }}
    />
  );
}

export function WebsiteIcon3D({ size = 220 }: { size?: number }) {
  return <ServiceIcon3D type="website" size={size} />;
}

export function DashboardIcon3D({ size = 220 }: { size?: number }) {
  return <ServiceIcon3D type="dashboard" size={size} />;
}

export function APIIcon3D({ size = 220 }: { size?: number }) {
  return <ServiceIcon3D type="api" size={size} />;
}

export function LLMIcon3D({ size = 220 }: { size?: number }) {
  return <ServiceIcon3D type="llm" size={size} />;
}