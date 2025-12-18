"use client";

import { useEffect, useRef, useState } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - SPACE & TIME BACKGROUND
// Pure canvas magic - deep void black with vibrant stars, colorful nebulas, shooting stars
// Steve Jobs: Breathtaking simplicity
// Elon Musk: SpaceX launch vibes
// Sam Altman: Mathematical cosmic intelligence
// ═══════════════════════════════════════════════════════════════════════════════════════

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  active: boolean;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color1: string;
  color2: string;
  rotation: number;
  rotationSpeed: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const nebulasRef = useRef<Nebula[]>([]);
  const timeRef = useRef(0);

  // Check theme
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsVisible(theme === 'space');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);

    // Set canvas size
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initStars();
      initNebulas();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // STAR COLORS - Realistic astronomical colors
    // ═══════════════════════════════════════════════════════════════════════════════
    const starColors = [
      '#FFFFFF', // White
      '#FFE4C4', // Warm white
      '#B0C4FF', // Blue-white
      '#87CEEB', // Sky blue
      '#FFF8DC', // Cream
      '#E6E6FA', // Lavender
      '#FFB6C1', // Light pink
      '#98FB98', // Pale green (rare)
      '#DDA0DD', // Plum
      '#F0E68C', // Khaki/yellow
    ];

    // ═══════════════════════════════════════════════════════════════════════════════
    // INITIALIZE STARS - Multiple layers for depth
    // ═══════════════════════════════════════════════════════════════════════════════
    const initStars = () => {
      const stars: Star[] = [];

      // Layer 1: Distant small stars (most numerous)
      for (let i = 0; i < 800; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.1 + Math.random() * 0.3,
          size: 0.5 + Math.random() * 1,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      // Layer 2: Medium stars
      for (let i = 0; i < 400; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.3 + Math.random() * 0.4,
          size: 1 + Math.random() * 1.5,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: 0.3 + Math.random() * 1.5,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      // Layer 3: Close bright stars
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.7 + Math.random() * 0.3,
          size: 2 + Math.random() * 2.5,
          color: starColors[Math.floor(Math.random() * 6)],
          twinkleSpeed: 0.2 + Math.random() * 1,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      // Layer 4: Super bright stars (very few)
      for (let i = 0; i < 30; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.9 + Math.random() * 0.1,
          size: 3 + Math.random() * 2,
          color: '#FFFFFF',
          twinkleSpeed: 0.1 + Math.random() * 0.5,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      starsRef.current = stars;
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // INITIALIZE NEBULAS - Colorful cosmic clouds
    // ═══════════════════════════════════════════════════════════════════════════════
    const initNebulas = () => {
      nebulasRef.current = [
        // Purple nebula - top right
        {
          x: width * 0.75,
          y: height * 0.2,
          radius: Math.min(width, height) * 0.4,
          color1: 'rgba(138, 43, 226, 0.15)',
          color2: 'rgba(75, 0, 130, 0.08)',
          rotation: 0,
          rotationSpeed: 0.0001
        },
        // Blue nebula - bottom left
        {
          x: width * 0.2,
          y: height * 0.75,
          radius: Math.min(width, height) * 0.35,
          color1: 'rgba(0, 150, 255, 0.12)',
          color2: 'rgba(0, 50, 150, 0.06)',
          rotation: Math.PI / 4,
          rotationSpeed: -0.00015
        },
        // Pink/magenta nebula - center
        {
          x: width * 0.5,
          y: height * 0.5,
          radius: Math.min(width, height) * 0.5,
          color1: 'rgba(255, 20, 147, 0.08)',
          color2: 'rgba(139, 0, 139, 0.04)',
          rotation: Math.PI / 2,
          rotationSpeed: 0.00008
        },
        // Cyan nebula - top left
        {
          x: width * 0.15,
          y: height * 0.25,
          radius: Math.min(width, height) * 0.3,
          color1: 'rgba(0, 255, 255, 0.1)',
          color2: 'rgba(0, 139, 139, 0.05)',
          rotation: Math.PI,
          rotationSpeed: 0.00012
        },
        // Orange/gold nebula - bottom right
        {
          x: width * 0.85,
          y: height * 0.8,
          radius: Math.min(width, height) * 0.25,
          color1: 'rgba(255, 140, 0, 0.08)',
          color2: 'rgba(255, 69, 0, 0.04)',
          rotation: -Math.PI / 3,
          rotationSpeed: -0.0001
        }
      ];
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // INITIALIZE SHOOTING STARS
    // ═══════════════════════════════════════════════════════════════════════════════
    const initShootingStars = () => {
      shootingStarsRef.current = Array(8).fill(null).map(() => ({
        x: 0, y: 0, vx: 0, vy: 0,
        life: 0, maxLife: 0, size: 0, active: false
      }));
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW NEBULA
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawNebula = (nebula: Nebula) => {
      ctx.save();
      ctx.translate(nebula.x, nebula.y);
      ctx.rotate(nebula.rotation);

      for (let i = 0; i < 3; i++) {
        const offset = i * 20;
        const scale = 1 - i * 0.15;
        const gradient = ctx.createRadialGradient(offset, offset, 0, 0, 0, nebula.radius * scale);
        gradient.addColorStop(0, nebula.color1);
        gradient.addColorStop(0.4, nebula.color2);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, nebula.radius * scale, nebula.radius * scale * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW STAR - With glow and twinkle
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawStar = (star: Star, time: number) => {
      const twinkle = 0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
      const brightness = 0.4 + twinkle * 0.6;
      const size = star.size * (0.8 + twinkle * 0.4);

      // Parallax
      const parallaxX = (mouseRef.current.x - 0.5) * 50 * star.z;
      const parallaxY = (mouseRef.current.y - 0.5) * 30 * star.z;
      const x = star.x + parallaxX;
      const y = star.y + parallaxY;

      // Outer glow for bright stars
      if (star.size > 2) {
        const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 6);
        glow.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.4})`);
        glow.addColorStop(0.5, `rgba(200, 220, 255, ${brightness * 0.15})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, size * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Star body
      ctx.globalAlpha = brightness;
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW SHOOTING STAR
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawShootingStar = (star: ShootingStar) => {
      if (!star.active) return;

      const progress = star.life / star.maxLife;
      const alpha = progress < 0.1 ? progress * 10 : (1 - progress) * 1.2;
      const tailLength = 100 + star.size * 30;

      const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
      const tailX = -star.vx / speed * tailLength;
      const tailY = -star.vy / speed * tailLength;

      const gradient = ctx.createLinearGradient(star.x, star.y, star.x + tailX, star.y + tailY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.2, `rgba(180, 200, 255, ${alpha * 0.7})`);
      gradient.addColorStop(1, 'transparent');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = star.size * 1.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x + tailX, star.y + tailY);
      ctx.stroke();

      // Bright head
      const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
      headGlow.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      headGlow.addColorStop(0.5, `rgba(200, 220, 255, ${alpha * 0.5})`);
      headGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
      ctx.fill();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // SPAWN SHOOTING STAR
    // ═══════════════════════════════════════════════════════════════════════════════
    const spawnShootingStar = () => {
      const inactive = shootingStarsRef.current.find(s => !s.active);
      if (!inactive) return;

      const fromTop = Math.random() > 0.4;
      inactive.x = fromTop ? Math.random() * width : width + 50;
      inactive.y = fromTop ? -50 : Math.random() * height * 0.5;

      const angle = Math.PI * 0.6 + Math.random() * 0.4;
      const speed = 10 + Math.random() * 10;
      inactive.vx = Math.cos(angle) * speed;
      inactive.vy = Math.sin(angle) * speed;

      inactive.life = 0;
      inactive.maxLife = 50 + Math.random() * 50;
      inactive.size = 1.5 + Math.random() * 2;
      inactive.active = true;
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // ANIMATION LOOP
    // ═══════════════════════════════════════════════════════════════════════════════
    const animate = () => {
      timeRef.current += 0.016;

      // Deep space black
      ctx.fillStyle = '#000005';
      ctx.fillRect(0, 0, width, height);

      // Nebulas
      nebulasRef.current.forEach(nebula => {
        nebula.rotation += nebula.rotationSpeed;
        drawNebula(nebula);
      });

      // Stars
      starsRef.current.forEach(star => drawStar(star, timeRef.current));

      // Shooting stars
      shootingStarsRef.current.forEach(star => {
        if (star.active) {
          star.x += star.vx;
          star.y += star.vy;
          star.life++;
          if (star.life >= star.maxLife || star.x < -100 || star.y > height + 100) {
            star.active = false;
          }
          drawShootingStar(star);
        }
      });

      // Random spawn
      if (Math.random() < 0.01) spawnShootingStar();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / width;
      mouseRef.current.y = e.clientY / height;
    };

    // Initialize
    resize();
    initShootingStars();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .space-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          pointer-events: none;
          opacity: 0;
          animation: spaceIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes spaceIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <canvas ref={canvasRef} className="space-canvas" />
    </>
  );
}