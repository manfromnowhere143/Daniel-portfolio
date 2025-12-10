"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function QuantumManifold() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    // Explicit mobile height
    const height = isMobile ? 220 : Math.min(380, window.innerHeight * 0.4);

    const scene = new THREE.Scene();
    scene.background = null; // Transparent for seamless blend

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 40 : 32;
    camera.position.y = isMobile ? 15 : 10;

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

    // Enhanced vertex shader with more complex wave patterns
    const vertexShader = `
      uniform float uTime;
      uniform float uInteraction;
      uniform vec2 uMouse;
      
      varying vec3 vPosition;
      varying float vElevation;
      varying float vDistFromCenter;
      
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
        vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
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
      
      void main() {
        vPosition = position;
        vDistFromCenter = length(position.xy);
        
        float slow = uTime * 0.06;
        
        // Multi-layered quantum waves
        float noise1 = snoise(vec3(position.x * 0.05, position.y * 0.05, slow));
        float noise2 = snoise(vec3(position.x * 0.1 + 50.0, position.y * 0.1, slow * 0.8)) * 0.6;
        float noise3 = snoise(vec3(position.x * 0.025, position.y * 0.025, slow * 1.5 + 100.0)) * 2.0;
        float noise4 = snoise(vec3(position.x * 0.2, position.y * 0.2, slow * 0.5)) * 0.3;
        
        // Ripple from interaction point
        float distFromMouse = length(position.xy - uMouse * 30.0);
        float ripple = sin(distFromMouse * 0.5 - uTime * 3.0) * exp(-distFromMouse * 0.05) * uInteraction * 2.0;
        
        float elevation = (noise1 + noise2 + noise3 + noise4 + ripple) * 2.5;
        vElevation = elevation;
        
        vec3 newPosition = position;
        newPosition.z += elevation;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    // Enhanced fragment shader with depth-based glow
    const fragmentShader = `
      uniform float uTime;
      
      varying vec3 vPosition;
      varying float vElevation;
      varying float vDistFromCenter;
      
      void main() {
        // Elevation-based brightness with enhanced contrast
        float brightness = 0.25 + (vElevation + 4.0) * 0.15;
        brightness = clamp(brightness, 0.1, 1.0);
        
        // Pulsing glow
        float pulse = 0.92 + sin(uTime * 0.4) * 0.08;
        brightness *= pulse;
        
        // Center glow
        float centerGlow = exp(-vDistFromCenter * 0.04) * 0.3;
        brightness += centerGlow;
        
        // Distance fade with softer edge
        float fade = 1.0 - smoothstep(18.0, 32.0, vDistFromCenter);
        
        // Color with subtle blue tint on peaks
        vec3 color = vec3(brightness);
        color += vec3(0.0, 0.02, 0.05) * vElevation * 0.2;
        
        gl_FragColor = vec4(color, brightness * fade * 0.95);
      }
    `;

    // Responsive grid resolution
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
    mesh.position.y = -6;
    scene.add(mesh);

    // Finer secondary grid
    const fineSegments = isMobile ? 35 : 50;
    const fineGeometry = new THREE.PlaneGeometry(gridSize, gridSize, fineSegments, fineSegments);
    const fineMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vPosition;
        varying float vElevation;
        varying float vDistFromCenter;
        
        void main() {
          float brightness = 0.08 + (vElevation + 4.0) * 0.04;
          brightness = clamp(brightness, 0.03, 0.25);
          float fade = 1.0 - smoothstep(15.0, 28.0, vDistFromCenter);
          gl_FragColor = vec4(vec3(brightness), brightness * fade * 0.4);
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
    fineMesh.position.y = -6;
    fineMesh.position.z = -0.3;
    scene.add(fineMesh);

    // Floating quantum particles
    const particleCount = isMobile ? 40 : 60;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20 + 5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12 + 4;
      particleVelocities.push(
        (Math.random() - 0.5) * 0.012,
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.006
      );
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xfafaf8,
      size: isMobile ? 0.08 : 0.05,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Interaction state
    let targetRotationY = 0;
    let targetRotationX = -Math.PI * 0.48;
    let currentRotationY = 0;
    let currentRotationX = -Math.PI * 0.48;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let interactionStrength = 0;
    const mousePos = new THREE.Vector2(0, 0);

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      velocityX = 0;
      velocityY = 0;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.x = ((event.clientX - rect.left) / width - 0.5) * 2;
      mousePos.y = -((event.clientY - rect.top) / height - 0.5) * 2;

      if (isDragging) {
        const deltaX = event.clientX - lastX;
        const deltaY = event.clientY - lastY;
        velocityX = deltaX * 0.002;
        velocityY = deltaY * 0.002;
        targetRotationY += velocityX;
        targetRotationX += velocityY;
        targetRotationX = Math.max(-Math.PI * 0.65, Math.min(-Math.PI * 0.35, targetRotationX));
        lastX = event.clientX;
        lastY = event.clientY;
        interactionStrength = 1;
      } else {
        targetRotationY = mousePos.x * 0.06;
        targetRotationX = -Math.PI * 0.48 + mousePos.y * 0.06;
        interactionStrength = 0.5;
      }
    };

    const handleMouseUp = () => { isDragging = false; };
    const handleMouseLeave = () => {
      isDragging = false;
      targetRotationY = 0;
      targetRotationX = -Math.PI * 0.48;
      interactionStrength = 0;
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        isDragging = true;
        lastX = event.touches[0].clientX;
        lastY = event.touches[0].clientY;
        interactionStrength = 1;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        mousePos.x = ((touch.clientX - rect.left) / width - 0.5) * 2;
        mousePos.y = -((touch.clientY - rect.top) / height - 0.5) * 2;

        if (isDragging) {
          const deltaX = touch.clientX - lastX;
          const deltaY = touch.clientY - lastY;
          velocityX = deltaX * 0.003;
          velocityY = deltaY * 0.003;
          targetRotationY += velocityX;
          targetRotationX += velocityY;
          targetRotationX = Math.max(-Math.PI * 0.65, Math.min(-Math.PI * 0.35, targetRotationX));
          lastX = touch.clientX;
          lastY = touch.clientY;
        }
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    let time = 0;
    const animate = () => {
      time += 0.008;

      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value = mousePos;
      material.uniforms.uInteraction.value += (interactionStrength - material.uniforms.uInteraction.value) * 0.1;
      fineMaterial.uniforms.uTime.value = time;
      fineMaterial.uniforms.uMouse.value = mousePos;
      fineMaterial.uniforms.uInteraction.value = material.uniforms.uInteraction.value;

      // Momentum and return
      if (!isDragging) {
        targetRotationY += velocityX;
        targetRotationX += velocityY;
        velocityX *= 0.96;
        velocityY *= 0.96;
        interactionStrength *= 0.95;

        if (Math.abs(velocityX) < 0.00005 && Math.abs(velocityY) < 0.00005) {
          targetRotationY *= 0.985;
          targetRotationX = targetRotationX * 0.985 + (-Math.PI * 0.48) * 0.015;
        }
      }

      currentRotationY += (targetRotationY - currentRotationY) * 0.06;
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;

      mesh.rotation.z = currentRotationY;
      mesh.rotation.x = currentRotationX;
      fineMesh.rotation.z = currentRotationY;
      fineMesh.rotation.x = currentRotationX;

      // Particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += particleVelocities[i * 3];
        positions[i * 3 + 1] += particleVelocities[i * 3 + 1];
        positions[i * 3 + 2] += particleVelocities[i * 3 + 2];
        if (Math.abs(positions[i * 3]) > 22) particleVelocities[i * 3] *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 12) particleVelocities[i * 3 + 1] *= -1;
        if (positions[i * 3 + 2] > 12 || positions[i * 3 + 2] < 0) particleVelocities[i * 3 + 2] *= -1;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.06) * 1.5;
      camera.position.y = (isMobile ? 15 : 10) + Math.cos(time * 0.08) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const mobile = window.innerWidth < 768;
      const newHeight = mobile ? 220 : Math.min(380, window.innerHeight * 0.4);
      camera.aspect = newWidth / newHeight;
      camera.position.z = mobile ? 40 : 32;
      camera.position.y = mobile ? 15 : 10;
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

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: isMobile ? '220px' : 'min(380px, 40vh)',
        backgroundColor: 'transparent',
        touchAction: 'none',
        cursor: 'grab'
      }}
    />
  );
}