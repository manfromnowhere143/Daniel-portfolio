"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function CosmosBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsVisible(theme === 'cosmos');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050510, 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const createStarField = (count: number, size: number, depth: number, color: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      const opacities = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = depth * (0.3 + Math.random() * 0.7);
        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi) - depth * 0.5;
        sizes[i] = size * (0.5 + Math.random() * 0.5);
        opacities[i] = 0.3 + Math.random() * 0.7;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(color) }, uPixelRatio: { value: renderer.getPixelRatio() } },
        vertexShader: \`
          attribute float size;
          attribute float opacity;
          varying float vOpacity;
          uniform float uTime;
          uniform float uPixelRatio;
          void main() {
            vOpacity = opacity * (0.7 + 0.3 * sin(uTime * 0.5 + position.x * 0.01));
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        \`,
        fragmentShader: \`
          uniform vec3 uColor;
          varying float vOpacity;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float alpha = smoothstep(0.5, 0.0, d) * vOpacity;
            gl_FragColor = vec4(uColor, alpha);
          }
        \`,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      return new THREE.Points(geometry, material);
    };

    const stars1 = createStarField(3000, 1.5, 1500, 0x8888aa);
    const stars2 = createStarField(2000, 2.5, 1000, 0xaaaacc);
    const stars3 = createStarField(500, 4, 600, 0xffffff);
    const stars4 = createStarField(300, 3, 800, 0x9966ff);
    const stars5 = createStarField(200, 2.5, 700, 0x00ccff);
    scene.add(stars1, stars2, stars3, stars4, stars5);

    const createNebula = (x: number, y: number, z: number, scale: number, color: number) => {
      const geometry = new THREE.PlaneGeometry(scale, scale);
      const material = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(color) } },
        vertexShader: \`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }\`,
        fragmentShader: \`
          uniform float uTime;
          uniform vec3 uColor;
          varying vec2 vUv;
          vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
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
            i = mod289(i);
            vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            float n_ = 0.142857142857;
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
            vec2 uv = vUv - 0.5;
            float dist = length(uv);
            float noise = snoise(vec3(uv * 2.0, uTime * 0.05)) * 0.5 + 0.5;
            noise += snoise(vec3(uv * 4.0, uTime * 0.03)) * 0.25;
            float alpha = smoothstep(0.5, 0.0, dist + noise * 0.2) * 0.15 * noise;
            gl_FragColor = vec4(uColor, alpha);
          }
        \`,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.lookAt(camera.position);
      return mesh;
    };

    const nebula1 = createNebula(-300, 150, -400, 800, 0x8844aa);
    const nebula2 = createNebula(350, -100, -500, 600, 0x4488cc);
    const nebula3 = createNebula(100, 200, -600, 700, 0xcc4488);
    const nebula4 = createNebula(-200, -200, -300, 500, 0x44aacc);
    scene.add(nebula1, nebula2, nebula3, nebula4);

    const shootingStars: THREE.Line[] = [];
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, -30, -10, 5]), 3));
      const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const line = new THREE.Line(geometry, material);
      (line as any).velocity = { x: 8 + Math.random() * 4, y: -3 - Math.random() * 2 };
      (line as any).life = 0;
      (line as any).maxLife = 60 + Math.random() * 40;
      (line as any).active = false;
      shootingStars.push(line);
      scene.add(line);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / width - 0.5) * 2;
      mouseRef.current.y = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      timeRef.current += 0.016;
      const time = timeRef.current;

      [stars1, stars2, stars3, stars4, stars5].forEach(s => { (s.material as THREE.ShaderMaterial).uniforms.uTime.value = time; });
      [nebula1, nebula2, nebula3, nebula4].forEach(n => { (n.material as THREE.ShaderMaterial).uniforms.uTime.value = time; });

      camera.position.x += (mouseRef.current.x * 30 - camera.position.x) * 0.02;
      camera.position.y += (-mouseRef.current.y * 20 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      stars1.rotation.y = time * 0.01;
      stars2.rotation.y = time * 0.015;
      stars3.rotation.y = time * 0.008;
      stars4.rotation.x = time * 0.005;
      stars5.rotation.z = time * 0.003;

      shootingStars.forEach(star => {
        const data = star as any;
        if (!data.active && Math.random() < 0.002) {
          data.active = true;
          data.life = 0;
          star.position.set((Math.random() - 0.5) * 800, 200 + Math.random() * 200, -100 - Math.random() * 200);
          (star.material as THREE.LineBasicMaterial).opacity = 1;
        }
        if (data.active) {
          data.life++;
          star.position.x += data.velocity.x;
          star.position.y += data.velocity.y;
          const progress = data.life / data.maxLife;
          (star.material as THREE.LineBasicMaterial).opacity = progress < 0.2 ? progress * 5 : (1 - progress) * 1.25;
          if (data.life >= data.maxLife) {
            data.active = false;
            (star.material as THREE.LineBasicMaterial).opacity = 0;
          }
        }
      });

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <style>{\`
        .cosmos-background { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; pointer-events: none; opacity: 0; animation: cosmosIn 2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        @keyframes cosmosIn { from { opacity: 0; } to { opacity: 1; } }
        .cosmos-background canvas { display: block; }
      \`}</style>
      <div ref={containerRef} className="cosmos-background" />
    </>
  );
}
