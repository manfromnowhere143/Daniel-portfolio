"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function QuantumManifold() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = isMobile ? 280 : Math.min(400, window.innerHeight * 0.45);

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 38 : 30;
    camera.position.y = isMobile ? 14 : 10;

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

    // ═══════════════════════════════════════════════════════════════
    // ADVANCED SHADER LIBRARY
    // ═══════════════════════════════════════════════════════════════

    const shaderLib = `
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
      
      // 5-octave FBM for organic motion
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
      
      // Domain warping
      vec3 domainWarp(vec3 p, float time) {
        vec3 q = vec3(
          fbm(p + vec3(0.0, 0.0, 0.0) + time * 0.08),
          fbm(p + vec3(5.2, 1.3, 2.8) + time * 0.1),
          fbm(p + vec3(2.1, 7.5, 4.3) + time * 0.06)
        );
        return p + q * 0.1;
      }
    `;

    // ═══════════════════════════════════════════════════════════════
    // PRIMARY MANIFOLD - Clean, elegant grid
    // ═══════════════════════════════════════════════════════════════

    const vertexShader = `
      ${shaderLib}
      uniform float uTime;
      uniform float uInteraction;
      uniform vec2 uMouse;
      
      varying vec3 vPosition;
      varying float vElevation;
      varying float vDistFromCenter;
      varying float vEnergy;
      
      void main() {
        vPosition = position;
        vDistFromCenter = length(position.xy);
        
        vec3 warpedPos = domainWarp(position * 0.04, uTime);
        float slow = uTime * 0.05;
        
        // Multi-layered organic waves
        float wave1 = fbm(warpedPos * 0.7 + slow) * 2.5;
        float wave2 = snoise(vec3(position.xy * 0.06, slow * 0.8)) * 1.8;
        float wave3 = snoise(vec3(position.xy * 0.12, slow * 1.2)) * 0.8;
        
        // Traveling pulses
        float pulse1 = sin(length(position.xy) * 0.25 - uTime * 1.2) * 0.6;
        float pulse2 = sin(length(position.xy) * 0.15 + uTime * 0.8) * 0.4;
        
        // Breathing
        float breathe = sin(uTime * 0.2) * 0.4 + sin(uTime * 0.3) * 0.2;
        
        // Interaction ripple
        float distFromMouse = length(position.xy - uMouse * 25.0);
        float ripple = sin(distFromMouse * 0.35 - uTime * 3.5) 
                     * exp(-distFromMouse * 0.045) 
                     * uInteraction * 2.5;
        
        float elevation = wave1 + wave2 + wave3 + pulse1 + pulse2 + breathe + ripple;
        vElevation = elevation;
        
        // Energy flow
        vEnergy = sin(position.x * 0.15 + position.y * 0.12 - uTime * 1.0) * 0.5 + 0.5;
        
        vec3 newPosition = position;
        newPosition.z += elevation;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      
      varying vec3 vPosition;
      varying float vElevation;
      varying float vDistFromCenter;
      varying float vEnergy;
      
      void main() {
        // Elegant color palette
        vec3 deepColor = vec3(0.2, 0.22, 0.28);
        vec3 midColor = vec3(0.55, 0.58, 0.68);
        vec3 brightColor = vec3(0.88, 0.9, 0.96);
        
        float normalizedElev = clamp((vElevation + 4.0) * 0.12, 0.0, 1.0);
        
        vec3 color = mix(deepColor, midColor, normalizedElev);
        color = mix(color, brightColor, normalizedElev * normalizedElev);
        
        // Subtle energy tint
        color += vec3(0.05, 0.08, 0.15) * vEnergy * 0.3;
        
        // Traveling light
        float bands = sin(vPosition.x * 0.12 + vPosition.y * 0.08 - uTime * 1.2) * 0.5 + 0.5;
        color += vec3(0.08, 0.1, 0.15) * bands * 0.25;
        
        // Pulsing
        float pulse = 0.88 + sin(uTime * 0.25) * 0.08;
        color *= pulse;
        
        // Center glow
        float centerGlow = exp(-vDistFromCenter * 0.04) * 0.3;
        color += vec3(0.15, 0.18, 0.22) * centerGlow;
        
        // Fade at edges
        float fade = 1.0 - smoothstep(18.0, 30.0, vDistFromCenter);
        
        float alpha = 0.35 + normalizedElev * 0.4 + vEnergy * 0.1;
        alpha *= fade;
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const gridSize = 60;
    const segments = isMobile ? 70 : 100;
    const geometry = new THREE.PlaneGeometry(gridSize, gridSize, segments, segments);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uInteraction: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.48;
    mesh.position.y = -5;
    scene.add(mesh);

    // ═══════════════════════════════════════════════════════════════
    // SECONDARY LAYER - Subtle depth
    // ═══════════════════════════════════════════════════════════════

    const fineSegments = isMobile ? 35 : 50;
    const fineGeometry = new THREE.PlaneGeometry(gridSize, gridSize, fineSegments, fineSegments);
    const fineMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: `
        uniform float uTime;
        varying float vElevation;
        varying float vDistFromCenter;
        varying float vEnergy;
        
        void main() {
          float brightness = 0.05 + (vElevation + 4.0) * 0.025;
          brightness += vEnergy * 0.03;
          brightness = clamp(brightness, 0.02, 0.18);
          
          vec3 color = vec3(0.6, 0.65, 0.75) * brightness;
          float fade = 1.0 - smoothstep(16.0, 28.0, vDistFromCenter);
          
          gl_FragColor = vec4(color, brightness * fade * 0.4);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uInteraction: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const fineMesh = new THREE.Mesh(fineGeometry, fineMaterial);
    fineMesh.rotation.x = -Math.PI * 0.48;
    fineMesh.position.y = -5;
    fineMesh.position.z = -0.4;
    scene.add(fineMesh);

    // ═══════════════════════════════════════════════════════════════
    // FLOATING PARTICLES - Subtle atmosphere
    // ═══════════════════════════════════════════════════════════════

    const particleCount = isMobile ? 30 : 50;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particlePhases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20 + 5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12 + 4;
      particleSizes[i] = 0.4 + Math.random() * 1.0;
      particlePhases[i] = Math.random() * Math.PI * 2;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute('aSize', new THREE.BufferAttribute(particleSizes, 1));
    particlesGeometry.setAttribute('aPhase', new THREE.BufferAttribute(particlePhases, 1));

    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float aSize;
        attribute float aPhase;
        uniform float uTime;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position;
          pos.x += sin(uTime * 0.25 + aPhase) * 0.4;
          pos.y += cos(uTime * 0.2 + aPhase * 1.2) * 0.25;
          pos.z += sin(uTime * 0.15 + aPhase * 0.8) * 0.3;
          
          vAlpha = 0.3 + sin(uTime * 1.2 + aPhase * 4.0) * 0.2;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = aSize * (120.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float core = smoothstep(0.5, 0.0, dist);
          gl_FragColor = vec4(vec3(0.8, 0.83, 0.9), core * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // ═══════════════════════════════════════════════════════════════
    // INTERACTION - Drag, pinch-to-zoom, momentum (same as Sphere)
    // ═══════════════════════════════════════════════════════════════

    let isDragging = false;
    let prevX = 0, prevY = 0;
    let velX = 0, velZ = 0;
    let targetRotX = -Math.PI * 0.48;
    let targetRotZ = 0;
    let currentRotX = -Math.PI * 0.48;
    let currentRotZ = 0;

    let isPinching = false;
    let pinchDist = 0;
    let zoom = isMobile ? 38 : 30;
    let targetZoom = zoom;
    const minZoom = isMobile ? 25 : 20;
    const maxZoom = isMobile ? 55 : 45;

    let interactionStrength = 0;
    const mousePos = new THREE.Vector2(0, 0);

    const getDist = (t1: Touch, t2: Touch) =>
      Math.sqrt((t1.clientX - t2.clientX) ** 2 + (t1.clientY - t2.clientY) ** 2);

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      velX = 0;
      velZ = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.x = ((e.clientX - rect.left) / width - 0.5) * 2;
      mousePos.y = -((e.clientY - rect.top) / height - 0.5) * 2;
      interactionStrength = Math.min(interactionStrength + 0.1, 0.8);

      if (isDragging) {
        velZ = (e.clientX - prevX) * 0.003;
        velX = (e.clientY - prevY) * 0.002;
        targetRotZ += velZ;
        targetRotX += velX;
        targetRotX = Math.max(-Math.PI * 0.65, Math.min(-Math.PI * 0.35, targetRotX));
        prevX = e.clientX;
        prevY = e.clientY;
        interactionStrength = 1;
      }
    };

    const handleMouseUp = () => { isDragging = false; };
    const handleMouseLeave = () => {
      isDragging = false;
      interactionStrength = 0;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + e.deltaY * 0.03));
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        isPinching = true;
        isDragging = false;
        pinchDist = getDist(e.touches[0], e.touches[1]);
      } else if (e.touches.length === 1) {
        isDragging = true;
        isPinching = false;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
        velX = 0;
        velZ = 0;
        interactionStrength = 1;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && isPinching) {
        const d = getDist(e.touches[0], e.touches[1]);
        targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + (pinchDist - d) * 0.08));
        pinchDist = d;
      } else if (e.touches.length === 1 && isDragging && !isPinching) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mousePos.x = ((touch.clientX - rect.left) / width - 0.5) * 2;
        mousePos.y = -((touch.clientY - rect.top) / height - 0.5) * 2;

        velZ = (touch.clientX - prevX) * 0.004;
        velX = (touch.clientY - prevY) * 0.003;
        targetRotZ += velZ;
        targetRotX += velX;
        targetRotX = Math.max(-Math.PI * 0.65, Math.min(-Math.PI * 0.35, targetRotX));
        prevX = touch.clientX;
        prevY = touch.clientY;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) isPinching = false;
      if (e.touches.length === 0) {
        isDragging = false;
        interactionStrength = 0;
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // ═══════════════════════════════════════════════════════════════
    // ANIMATION
    // ═══════════════════════════════════════════════════════════════

    let time = 0;

    const animate = () => {
      time += 0.008;

      // Update uniforms
      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value = mousePos;
      material.uniforms.uInteraction.value += (interactionStrength - material.uniforms.uInteraction.value) * 0.08;

      fineMaterial.uniforms.uTime.value = time;
      fineMaterial.uniforms.uMouse.value = mousePos;
      fineMaterial.uniforms.uInteraction.value = material.uniforms.uInteraction.value;

      particlesMaterial.uniforms.uTime.value = time;

      // Smooth zoom
      zoom += (targetZoom - zoom) * 0.06;
      camera.position.z = zoom;

      // Momentum
      if (!isDragging) {
        targetRotZ += velZ;
        targetRotX += velX;
        velZ *= 0.96;
        velX *= 0.96;
        interactionStrength *= 0.95;

        // Return to rest
        if (Math.abs(velZ) < 0.0001 && Math.abs(velX) < 0.0001) {
          targetRotZ *= 0.985;
          targetRotX = targetRotX * 0.98 + (-Math.PI * 0.48) * 0.02;
        }
      }

      // Smooth rotation
      currentRotZ += (targetRotZ - currentRotZ) * 0.06;
      currentRotX += (targetRotX - currentRotX) * 0.06;

      mesh.rotation.z = currentRotZ;
      mesh.rotation.x = currentRotX;
      fineMesh.rotation.z = currentRotZ;
      fineMesh.rotation.x = currentRotX;

      // Particle floating
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const phase = particlePhases[i];
        positions[i * 3] += Math.sin(time * 0.3 + phase) * 0.008;
        positions[i * 3 + 1] += Math.cos(time * 0.25 + phase) * 0.006;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Camera breathing
      camera.position.x = Math.sin(time * 0.08) * 1.5;
      camera.position.y = (isMobile ? 14 : 10) + Math.cos(time * 0.06) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const mobile = window.innerWidth < 768;
      const newHeight = mobile ? 280 : Math.min(400, window.innerHeight * 0.45);
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
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }

      geometry.dispose();
      material.dispose();
      fineGeometry.dispose();
      fineMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [isMobile]);

  const containerHeight = isMobile ? '280px' : 'min(400px, 45vh)';

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