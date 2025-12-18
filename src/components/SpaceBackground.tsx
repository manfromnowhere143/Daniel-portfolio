"use client";

import { useEffect, useRef, useState } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - ULTIMATE SPACE EXPERIENCE
// Real universe: Black holes, Mars, Moon, galaxies, nebulas
// Deep void black with tiny glowing stars
// Steve Jobs + Elon Musk + Sam Altman = This masterpiece
// ═══════════════════════════════════════════════════════════════════════════════════════

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
  color: { r: number; g: number; b: number };
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface CosmicDust {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
  drift: number;
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

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const starsRef = useRef<Star[]>([]);
  const dustRef = useRef<CosmicDust[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const timeRef = useRef(0);

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
    const ctx = canvas.getContext('2d', { alpha: false })!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
      initDust();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // STAR COLORS - Real astronomical spectral classes
    // ═══════════════════════════════════════════════════════════════════════════════
    const starColors = [
      { r: 255, g: 255, b: 255 },   // White
      { r: 255, g: 250, b: 245 },   // Warm white
      { r: 200, g: 220, b: 255 },   // Blue-white
      { r: 170, g: 200, b: 255 },   // Blue
      { r: 255, g: 240, b: 220 },   // Yellow-white
      { r: 255, g: 220, b: 180 },   // Orange
      { r: 255, g: 200, b: 150 },   // Orange-red
      { r: 220, g: 240, b: 255 },   // Pale blue
    ];

    // ═══════════════════════════════════════════════════════════════════════════════
    // INITIALIZE 3000+ STARS - Deep field
    // ═══════════════════════════════════════════════════════════════════════════════
    const initStars = () => {
      const stars: Star[] = [];

      // Ultra distant stars - tiny pinpoints (2000)
      for (let i = 0; i < 2000; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.05 + Math.random() * 0.15,
          size: 0.3 + Math.random() * 0.5,
          brightness: 0.3 + Math.random() * 0.4,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      // Distant stars (800)
      for (let i = 0; i < 800; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.2 + Math.random() * 0.3,
          size: 0.5 + Math.random() * 1,
          brightness: 0.4 + Math.random() * 0.4,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: 0.3 + Math.random() * 1.5,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      // Medium stars (300)
      for (let i = 0; i < 300; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.5 + Math.random() * 0.3,
          size: 1 + Math.random() * 1.5,
          brightness: 0.6 + Math.random() * 0.3,
          color: starColors[Math.floor(Math.random() * 5)],
          twinkleSpeed: 0.2 + Math.random() * 1,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      // Bright prominent stars (50)
      for (let i = 0; i < 50; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.8 + Math.random() * 0.2,
          size: 2 + Math.random() * 2,
          brightness: 0.8 + Math.random() * 0.2,
          color: starColors[Math.floor(Math.random() * 4)],
          twinkleSpeed: 0.1 + Math.random() * 0.5,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }

      starsRef.current = stars;
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // COSMIC DUST PARTICLES
    // ═══════════════════════════════════════════════════════════════════════════════
    const initDust = () => {
      const dust: CosmicDust[] = [];
      for (let i = 0; i < 200; i++) {
        dust.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(),
          size: 0.5 + Math.random() * 1.5,
          alpha: 0.02 + Math.random() * 0.05,
          drift: (Math.random() - 0.5) * 0.3
        });
      }
      dustRef.current = dust;
    };

    // Initialize shooting stars pool
    shootingStarsRef.current = Array(5).fill(null).map(() => ({
      x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 0, size: 0, active: false
    }));

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW BLACK HOLE - Gravitational lensing effect
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawBlackHole = (cx: number, cy: number, radius: number) => {
      // Parallax position
      const px = cx + (mouseRef.current.x - 0.5) * 100;
      const py = cy + (mouseRef.current.y - 0.5) * 60;

      // Accretion disk - outer glow
      const diskGradient = ctx.createRadialGradient(px, py, radius * 0.8, px, py, radius * 4);
      diskGradient.addColorStop(0, 'rgba(255, 100, 50, 0.15)');
      diskGradient.addColorStop(0.3, 'rgba(255, 150, 80, 0.08)');
      diskGradient.addColorStop(0.5, 'rgba(255, 200, 100, 0.04)');
      diskGradient.addColorStop(0.7, 'rgba(200, 150, 255, 0.02)');
      diskGradient.addColorStop(1, 'transparent');

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(timeRef.current * 0.05);
      ctx.scale(1, 0.3); // Flatten for disk effect
      ctx.fillStyle = diskGradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Inner accretion ring - brighter
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(-timeRef.current * 0.08);
      ctx.scale(1, 0.25);
      const innerRing = ctx.createRadialGradient(0, 0, radius * 0.9, 0, 0, radius * 2);
      innerRing.addColorStop(0, 'rgba(255, 200, 150, 0.3)');
      innerRing.addColorStop(0.5, 'rgba(255, 150, 100, 0.15)');
      innerRing.addColorStop(1, 'transparent');
      ctx.fillStyle = innerRing;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Event horizon - pure black
      const eventHorizon = ctx.createRadialGradient(px, py, 0, px, py, radius);
      eventHorizon.addColorStop(0, '#000000');
      eventHorizon.addColorStop(0.7, '#000000');
      eventHorizon.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = eventHorizon;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();

      // Photon sphere - subtle ring of light
      ctx.strokeStyle = 'rgba(255, 220, 180, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(px, py, radius * 1.2, 0, Math.PI * 2);
      ctx.stroke();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW MARS - Red planet with surface detail
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawMars = (cx: number, cy: number, radius: number) => {
      const px = cx + (mouseRef.current.x - 0.5) * 80;
      const py = cy + (mouseRef.current.y - 0.5) * 50;

      // Base planet
      const marsGradient = ctx.createRadialGradient(
        px - radius * 0.3, py - radius * 0.3, 0,
        px, py, radius
      );
      marsGradient.addColorStop(0, '#e07050');
      marsGradient.addColorStop(0.5, '#c45030');
      marsGradient.addColorStop(0.8, '#a03020');
      marsGradient.addColorStop(1, '#601510');

      ctx.fillStyle = marsGradient;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();

      // Surface features - darker regions
      ctx.fillStyle = 'rgba(80, 20, 10, 0.3)';
      ctx.beginPath();
      ctx.ellipse(px - radius * 0.2, py + radius * 0.1, radius * 0.4, radius * 0.2, 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(px + radius * 0.3, py - radius * 0.2, radius * 0.25, radius * 0.15, -0.5, 0, Math.PI * 2);
      ctx.fill();

      // Polar ice cap
      ctx.fillStyle = 'rgba(255, 250, 245, 0.4)';
      ctx.beginPath();
      ctx.ellipse(px, py - radius * 0.85, radius * 0.3, radius * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();

      // Atmospheric glow
      const atmoGlow = ctx.createRadialGradient(px, py, radius * 0.9, px, py, radius * 1.15);
      atmoGlow.addColorStop(0, 'transparent');
      atmoGlow.addColorStop(0.5, 'rgba(255, 150, 100, 0.05)');
      atmoGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = atmoGlow;
      ctx.beginPath();
      ctx.arc(px, py, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW MOON - With craters
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawMoon = (cx: number, cy: number, radius: number) => {
      const px = cx + (mouseRef.current.x - 0.5) * 120;
      const py = cy + (mouseRef.current.y - 0.5) * 70;

      // Base moon
      const moonGradient = ctx.createRadialGradient(
        px - radius * 0.4, py - radius * 0.4, 0,
        px, py, radius
      );
      moonGradient.addColorStop(0, '#e8e8e0');
      moonGradient.addColorStop(0.6, '#c0c0b8');
      moonGradient.addColorStop(1, '#606058');

      ctx.fillStyle = moonGradient;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();

      // Craters
      const craters = [
        { x: -0.3, y: -0.2, r: 0.15 },
        { x: 0.2, y: 0.3, r: 0.12 },
        { x: -0.1, y: 0.4, r: 0.1 },
        { x: 0.35, y: -0.1, r: 0.08 },
        { x: -0.4, y: 0.2, r: 0.07 },
        { x: 0.1, y: -0.35, r: 0.09 },
      ];

      craters.forEach(crater => {
        const craterX = px + crater.x * radius;
        const craterY = py + crater.y * radius;
        const craterR = crater.r * radius;

        // Crater shadow
        const craterGradient = ctx.createRadialGradient(
          craterX - craterR * 0.3, craterY - craterR * 0.3, 0,
          craterX, craterY, craterR
        );
        craterGradient.addColorStop(0, 'rgba(60, 60, 55, 0.6)');
        craterGradient.addColorStop(0.7, 'rgba(80, 80, 75, 0.4)');
        craterGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = craterGradient;
        ctx.beginPath();
        ctx.arc(craterX, craterY, craterR, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle glow
      const glow = ctx.createRadialGradient(px, py, radius, px, py, radius * 1.2);
      glow.addColorStop(0, 'transparent');
      glow.addColorStop(0.5, 'rgba(255, 255, 250, 0.03)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(px, py, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW DISTANT GALAXY - Spiral
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawGalaxy = (cx: number, cy: number, radius: number) => {
      const px = cx + (mouseRef.current.x - 0.5) * 40;
      const py = cy + (mouseRef.current.y - 0.5) * 25;

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(timeRef.current * 0.01);
      ctx.scale(1, 0.4); // Tilt

      // Galaxy core
      const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 0.3);
      coreGradient.addColorStop(0, 'rgba(255, 250, 230, 0.4)');
      coreGradient.addColorStop(0.5, 'rgba(255, 220, 180, 0.2)');
      coreGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Spiral arms
      ctx.strokeStyle = 'rgba(200, 180, 255, 0.08)';
      ctx.lineWidth = radius * 0.15;
      ctx.lineCap = 'round';

      for (let arm = 0; arm < 2; arm++) {
        ctx.beginPath();
        for (let i = 0; i < 100; i++) {
          const angle = (i / 100) * Math.PI * 3 + arm * Math.PI;
          const r = (i / 100) * radius;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Outer glow
      const outerGlow = ctx.createRadialGradient(0, 0, radius * 0.5, 0, 0, radius);
      outerGlow.addColorStop(0, 'rgba(150, 130, 200, 0.06)');
      outerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW NEBULA - Colorful gas cloud
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawNebula = (cx: number, cy: number, radius: number, hue: number) => {
      const px = cx + (mouseRef.current.x - 0.5) * 30;
      const py = cy + (mouseRef.current.y - 0.5) * 20;

      // Multiple layers for depth
      for (let layer = 0; layer < 4; layer++) {
        const layerRadius = radius * (1 - layer * 0.15);
        const alpha = 0.04 - layer * 0.008;

        const gradient = ctx.createRadialGradient(
          px + layer * 10, py + layer * 5, 0,
          px, py, layerRadius
        );

        const h1 = (hue + layer * 20) % 360;
        const h2 = (hue + 40 + layer * 15) % 360;

        gradient.addColorStop(0, `hsla(${h1}, 80%, 60%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${h2}, 70%, 50%, ${alpha * 0.6})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(px, py, layerRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW STAR
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawStar = (star: Star, time: number) => {
      const twinkle = 0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
      const brightness = star.brightness * twinkle;
      const size = star.size * (0.9 + twinkle * 0.2);

      const parallaxX = (mouseRef.current.x - 0.5) * 60 * star.z;
      const parallaxY = (mouseRef.current.y - 0.5) * 40 * star.z;
      const x = star.x + parallaxX;
      const y = star.y + parallaxY;

      // Glow for larger stars
      if (star.size > 1.5) {
        const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
        glow.addColorStop(0, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${brightness * 0.3})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Star core
      ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${brightness})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      if (star.size > 1) {
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8})`;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // DRAW SHOOTING STAR
    // ═══════════════════════════════════════════════════════════════════════════════
    const drawShootingStar = (star: ShootingStar) => {
      if (!star.active) return;

      const progress = star.life / star.maxLife;
      const alpha = progress < 0.1 ? progress * 10 : Math.pow(1 - progress, 2);
      const tailLength = 120 + star.size * 40;

      const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
      const tailX = -star.vx / speed * tailLength;
      const tailY = -star.vy / speed * tailLength;

      const gradient = ctx.createLinearGradient(star.x, star.y, star.x + tailX, star.y + tailY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.1, `rgba(200, 220, 255, ${alpha * 0.8})`);
      gradient.addColorStop(0.4, `rgba(150, 180, 255, ${alpha * 0.3})`);
      gradient.addColorStop(1, 'transparent');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = star.size;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x + tailX, star.y + tailY);
      ctx.stroke();

      // Bright head
      const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
      headGlow.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      headGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      ctx.fill();
    };

    // Spawn shooting star
    const spawnShootingStar = () => {
      const inactive = shootingStarsRef.current.find(s => !s.active);
      if (!inactive) return;

      inactive.x = Math.random() * width * 0.8 + width * 0.1;
      inactive.y = -20;
      const angle = Math.PI * 0.55 + Math.random() * 0.3;
      const speed = 12 + Math.random() * 8;
      inactive.vx = Math.cos(angle) * speed;
      inactive.vy = Math.sin(angle) * speed;
      inactive.life = 0;
      inactive.maxLife = 40 + Math.random() * 40;
      inactive.size = 1.5 + Math.random() * 1.5;
      inactive.active = true;
    };

    // ═══════════════════════════════════════════════════════════════════════════════
    // ANIMATION LOOP
    // ═══════════════════════════════════════════════════════════════════════════════
    const animate = () => {
      timeRef.current += 0.016;

      // Smooth mouse movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Deep void black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Very subtle blue tint at edges
      const vignette = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height) * 0.8);
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(0.7, 'transparent');
      vignette.addColorStop(1, 'rgba(10, 10, 30, 0.3)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // Nebulas (far background)
      drawNebula(width * 0.15, height * 0.2, Math.min(width, height) * 0.35, 270); // Purple
      drawNebula(width * 0.85, height * 0.7, Math.min(width, height) * 0.3, 200);  // Blue
      drawNebula(width * 0.6, height * 0.15, Math.min(width, height) * 0.25, 320); // Pink

      // Distant galaxy
      drawGalaxy(width * 0.2, height * 0.65, Math.min(width, height) * 0.12);

      // All stars
      starsRef.current.forEach(star => drawStar(star, timeRef.current));

      // Cosmic dust
      dustRef.current.forEach(dust => {
        const px = dust.x + (mouseRef.current.x - 0.5) * 20 * dust.z;
        const py = dust.y + (mouseRef.current.y - 0.5) * 15 * dust.z;
        ctx.fillStyle = `rgba(200, 200, 220, ${dust.alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, dust.size, 0, Math.PI * 2);
        ctx.fill();

        // Drift
        dust.x += dust.drift;
        if (dust.x < -10) dust.x = width + 10;
        if (dust.x > width + 10) dust.x = -10;
      });

      // Black hole (center-right area)
      drawBlackHole(width * 0.72, height * 0.38, Math.min(width, height) * 0.06);

      // Mars (distant, upper left)
      drawMars(width * 0.18, height * 0.28, Math.min(width, height) * 0.035);

      // Moon (closer, bottom right)
      drawMoon(width * 0.82, height * 0.75, Math.min(width, height) * 0.055);

      // Shooting stars
      shootingStarsRef.current.forEach(star => {
        if (star.active) {
          star.x += star.vx;
          star.y += star.vy;
          star.life++;
          if (star.life >= star.maxLife || star.y > height + 50) {
            star.active = false;
          }
          drawShootingStar(star);
        }
      });

      // Random shooting star spawn
      if (Math.random() < 0.008) spawnShootingStar();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / width;
      mouseRef.current.targetY = e.clientY / height;
    };

    // Initialize
    resize();
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
          animation: spaceIn 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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