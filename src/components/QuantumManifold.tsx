"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function QuantumManifold() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || (width < 500 ? 350 : 500);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0A0A0A);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 35;
    camera.position.y = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const vertexShader = `
      uniform float uTime;
      varying vec3 vPosition;
      varying float vElevation;
      
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
        float slow = uTime * 0.08;
        float noise1 = snoise(vec3(position.x * 0.06, position.y * 0.06, slow));
        float noise2 = snoise(vec3(position.x * 0.12 + 50.0, position.y * 0.12, slow * 0.7)) * 0.5;
        float noise3 = snoise(vec3(position.x * 0.03, position.y * 0.03, slow * 1.3 + 100.0)) * 1.5;
        float elevation = (noise1 + noise2 + noise3) * 3.0;
        vElevation = elevation;
        vec3 newPosition = position;
        newPosition.z += elevation;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      varying vec3 vPosition;
      varying float vElevation;
      
      void main() {
        float brightness = 0.3 + (vElevation + 3.0) * 0.12;
        brightness = clamp(brightness, 0.15, 0.9);
        float pulse = 0.95 + sin(uTime * 0.3) * 0.05;
        brightness *= pulse;
        float dist = length(vPosition.xy);
        float fade = 1.0 - smoothstep(20.0, 35.0, dist);
        gl_FragColor = vec4(vec3(brightness), brightness * fade * 0.9);
      }
    `;

    const gridSize = 70;
    const geometry = new THREE.PlaneGeometry(gridSize, gridSize, 100, 100);
    const material = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: { uTime: { value: 0 } },
      transparent: true, wireframe: true, depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.45;
    mesh.position.y = -8;
    scene.add(mesh);

    const fineGeometry = new THREE.PlaneGeometry(gridSize, gridSize, 50, 50);
    const fineMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vPosition;
        varying float vElevation;
        void main() {
          float brightness = 0.1 + (vElevation + 3.0) * 0.05;
          brightness = clamp(brightness, 0.05, 0.3);
          float dist = length(vPosition.xy);
          float fade = 1.0 - smoothstep(15.0, 30.0, dist);
          gl_FragColor = vec4(vec3(brightness), brightness * fade * 0.5);
        }
      `,
      uniforms: { uTime: { value: 0 } },
      transparent: true, wireframe: true, depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const fineMesh = new THREE.Mesh(fineGeometry, fineMaterial);
    fineMesh.rotation.x = -Math.PI * 0.45;
    fineMesh.position.y = -8;
    fineMesh.position.z = -0.5;
    scene.add(fineMesh);

    const pointCount = 80;
    const pointsGeometry = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(pointCount * 3);
    const pointVelocities: number[] = [];

    for (let i = 0; i < pointCount; i++) {
      pointPositions[i * 3] = (Math.random() - 0.5) * 50;
      pointPositions[i * 3 + 1] = (Math.random() - 0.5) * 25 + 5;
      pointPositions[i * 3 + 2] = (Math.random() - 0.5) * 15 + 5;
      pointVelocities.push((Math.random() - 0.5) * 0.015, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.008);
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xfafaf8, size: 0.06, transparent: true, opacity: 0.5,
      sizeAttenuation: true, blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    const nodeCount = 25;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 40;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      nodePositions[i * 3 + 2] = Math.random() * 8;
    }
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0xfafaf8, size: 0.15, transparent: true, opacity: 0.8,
      sizeAttenuation: true, blending: THREE.AdditiveBlending
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodes);

    let targetRotationY = 0;
    let targetRotationX = -Math.PI * 0.45;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / width - 0.5) * 2;
      const mouseY = ((event.clientY - rect.top) / height - 0.5) * 2;
      targetRotationY = mouseX * 0.08;
      targetRotationX = -Math.PI * 0.45 + mouseY * 0.08;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const touchX = ((touch.clientX - rect.left) / width - 0.5) * 2;
        const touchY = ((touch.clientY - rect.top) / height - 0.5) * 2;
        targetRotationY = touchX * 0.12;
        targetRotationX = -Math.PI * 0.45 + touchY * 0.12;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    let time = 0;
    const animate = () => {
      time += 0.01;
      material.uniforms.uTime.value = time;
      fineMaterial.uniforms.uTime.value = time;

      mesh.rotation.x += (targetRotationX - mesh.rotation.x) * 0.015;
      mesh.rotation.z += (targetRotationY - mesh.rotation.z) * 0.015;
      fineMesh.rotation.x = mesh.rotation.x;
      fineMesh.rotation.z = mesh.rotation.z;

      const positions = pointsGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < pointCount; i++) {
        positions[i * 3] += pointVelocities[i * 3];
        positions[i * 3 + 1] += pointVelocities[i * 3 + 1];
        positions[i * 3 + 2] += pointVelocities[i * 3 + 2];
        if (Math.abs(positions[i * 3]) > 25) pointVelocities[i * 3] *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 15) pointVelocities[i * 3 + 1] *= -1;
        if (positions[i * 3 + 2] > 15 || positions[i * 3 + 2] < 0) pointVelocities[i * 3 + 2] *= -1;
      }
      pointsGeometry.attributes.position.needsUpdate = true;
      nodeMaterial.opacity = 0.6 + Math.sin(time * 0.5) * 0.2;

      camera.position.x = Math.sin(time * 0.08) * 3;
      camera.position.y = 12 + Math.cos(time * 0.1) * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || (newWidth < 500 ? 350 : 500);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      geometry.dispose();
      material.dispose();
      fineGeometry.dispose();
      fineMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: '100%', 
        height: 'clamp(350px, 50vh, 500px)',
        backgroundColor: '#0A0A0A',
        touchAction: 'none'
      }} 
    />
  );
}
