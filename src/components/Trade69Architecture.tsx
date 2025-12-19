"use client";

import { useEffect, useRef, useState } from 'react';

export default function Trade69Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height);
        setDimensions({ width: size, height: size });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0) return;

    const container = containerRef.current;
    const size = dimensions.width;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) existingCanvas.remove();

    const canvas = document.createElement('canvas');
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d', { alpha: false })!;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const scale = size / 480; // Smaller scale to fit all elements with padding

    // Architecture layers - from center outward (reduced radii for better fit)
    const layers = [
      {
        name: 'CORE',
        nodes: ['PostgreSQL', 'TimescaleDB', 'Redis'],
        radius: 45,
        speed: 0.15,
        nodeSize: 5
      },
      {
        name: 'INTELLIGENCE',
        nodes: ['Sentiment', 'HMM', 'Pattern', 'Signal'],
        radius: 78,
        speed: -0.08,
        nodeSize: 4.5
      },
      {
        name: 'ML',
        nodes: ['Tracker', 'Backtest', 'Pipeline', 'Model', 'Version'],
        radius: 110,
        speed: 0.05,
        nodeSize: 4
      },
      {
        name: 'RISK',
        nodes: ['Kelly', 'Options', 'Heat', 'Executor', 'Monitor'],
        radius: 142,
        speed: -0.03,
        nodeSize: 3.5
      },
      {
        name: 'DATA',
        nodes: ['StockTwits', 'Reddit', 'Alpaca', 'ThetaData', 'DarkPool', 'News'],
        radius: 172,
        speed: 0.02,
        nodeSize: 3
      }
    ];

    // Particle system
    const particles: Array<{
      angle: number;
      radius: number;
      targetRadius: number;
      speed: number;
      size: number;
      alpha: number;
      layer: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      const layerIndex = Math.floor(Math.random() * layers.length);
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: layers[layerIndex].radius * scale,
        targetRadius: layers[Math.max(0, layerIndex - 1)].radius * scale,
        speed: 0.3 + Math.random() * 0.4,
        size: 1 + Math.random() * 1.5,
        alpha: 0.3 + Math.random() * 0.5,
        layer: layerIndex
      });
    }

    // Ambient floating particles
    const ambientParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      ambientParticles.push({
        x: Math.random() * size,
        y: Math.random() * size,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 0.5 + Math.random() * 1,
        alpha: 0.1 + Math.random() * 0.2
      });
    }

    let time = 0;
    let pulseWaves: Array<{ radius: number; alpha: number }> = [];

    const animate = () => {
      time += 0.008;

      // Clear with deep black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, size, size);

      // Subtle radial gradient background
      const bgGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.6);
      bgGradient.addColorStop(0, 'rgba(15, 15, 20, 1)');
      bgGradient.addColorStop(0.5, 'rgba(8, 8, 12, 1)');
      bgGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, size, size);

      // Ambient particles (background dust)
      ambientParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = size;
        if (p.x > size) p.x = 0;
        if (p.y < 0) p.y = size;
        if (p.y > size) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * (0.5 + Math.sin(time * 2 + p.x * 0.01) * 0.5)})`;
        ctx.fill();
      });

      // Outer atmospheric glow
      const atmosphereGlow = ctx.createRadialGradient(cx, cy, 120 * scale, cx, cy, 200 * scale);
      atmosphereGlow.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
      atmosphereGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.015)');
      atmosphereGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = atmosphereGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 200 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbital paths (subtle rings)
      layers.forEach((layer, i) => {
        const r = layer.radius * scale;
        const alpha = 0.08 + i * 0.015;

        // Glow ring
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 8 * scale;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();

        // Main ring
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2 * scale, 4 * scale]);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw connections between adjacent layers
      layers.forEach((layer, layerIndex) => {
        if (layerIndex < layers.length - 1) {
          const nextLayer = layers[layerIndex + 1];

          layer.nodes.forEach((_, nodeIndex) => {
            const angle = (nodeIndex / layer.nodes.length) * Math.PI * 2 + time * layer.speed;
            const x1 = cx + Math.cos(angle) * layer.radius * scale;
            const y1 = cy + Math.sin(angle) * layer.radius * scale;

            // Connect to nearest nodes in next layer
            for (let c = 0; c < 2; c++) {
              const targetIndex = (nodeIndex + c) % nextLayer.nodes.length;
              const targetAngle = (targetIndex / nextLayer.nodes.length) * Math.PI * 2 + time * nextLayer.speed;
              const x2 = cx + Math.cos(targetAngle) * nextLayer.radius * scale;
              const y2 = cy + Math.sin(targetAngle) * nextLayer.radius * scale;

              // Bezier curve connection
              const midX = (x1 + x2) / 2;
              const midY = (y1 + y2) / 2;
              const ctrlX = midX + (Math.random() - 0.5) * 10 * scale;
              const ctrlY = midY + (Math.random() - 0.5) * 10 * scale;

              const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
              gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
              gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
              gradient.addColorStop(1, 'rgba(255, 255, 255, 0.15)');

              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          });
        }
      });

      // Draw nodes on each layer
      layers.forEach((layer, layerIndex) => {
        const r = layer.radius * scale;

        layer.nodes.forEach((nodeName, nodeIndex) => {
          const angle = (nodeIndex / layer.nodes.length) * Math.PI * 2 + time * layer.speed;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;

          // Node outer glow
          const nodeGlow = ctx.createRadialGradient(x, y, 0, x, y, 20 * scale);
          nodeGlow.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
          nodeGlow.addColorStop(0.4, 'rgba(255, 255, 255, 0.05)');
          nodeGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = nodeGlow;
          ctx.beginPath();
          ctx.arc(x, y, 20 * scale, 0, Math.PI * 2);
          ctx.fill();

          // Node ring
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, layer.nodeSize * scale, 0, Math.PI * 2);
          ctx.stroke();

          // Node core - pulsing
          const pulse = 0.8 + Math.sin(time * 3 + nodeIndex) * 0.2;
          ctx.fillStyle = `rgba(255, 255, 255, ${pulse})`;
          ctx.beginPath();
          ctx.arc(x, y, (layer.nodeSize * 0.5) * scale, 0, Math.PI * 2);
          ctx.fill();

          // Node label
          if (scale > 0.7) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.font = `300 ${Math.max(8, 9 * scale)}px -apple-system, BlinkMacSystemFont, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Position label outside the orbit
            const labelOffset = layer.nodeSize * scale + 12 * scale;
            const labelX = cx + Math.cos(angle) * (r + labelOffset);
            const labelY = cy + Math.sin(angle) * (r + labelOffset);

            ctx.fillText(nodeName, labelX, labelY);
          }
        });
      });

      // Data flow particles
      particles.forEach(p => {
        const progress = (Math.sin(time * p.speed + p.angle) + 1) / 2;
        const currentRadius = p.radius + (p.targetRadius - p.radius) * progress;
        const spiralAngle = p.angle + time * 0.3 + progress * 0.5;

        const x = cx + Math.cos(spiralAngle) * currentRadius;
        const y = cy + Math.sin(spiralAngle) * currentRadius;

        // Particle trail
        const trailLength = 3;
        for (let t = 0; t < trailLength; t++) {
          const trailProgress = progress - t * 0.02;
          if (trailProgress < 0) continue;

          const trailRadius = p.radius + (p.targetRadius - p.radius) * trailProgress;
          const trailAngle = p.angle + time * 0.3 + trailProgress * 0.5;
          const tx = cx + Math.cos(trailAngle) * trailRadius;
          const ty = cy + Math.sin(trailAngle) * trailRadius;

          ctx.beginPath();
          ctx.arc(tx, ty, p.size * scale * (1 - t * 0.2), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * (1 - t * 0.3) * 0.5})`;
          ctx.fill();
        }

        // Main particle
        ctx.beginPath();
        ctx.arc(x, y, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Center core - multiple rotating elements
      ctx.save();
      ctx.translate(cx, cy);

      // Outer rotating hexagon
      ctx.rotate(time * 0.2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i <= 6; i++) {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
        const hx = Math.cos(angle) * 35 * scale;
        const hy = Math.sin(angle) * 35 * scale;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.stroke();

      // Counter-rotating square
      ctx.rotate(-time * 0.5);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      const sqSize = 22 * scale;
      ctx.beginPath();
      ctx.rect(-sqSize, -sqSize, sqSize * 2, sqSize * 2);
      ctx.stroke();

      // Inner rotating diamond
      ctx.rotate(time * 0.8);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      const dSize = 12 * scale;
      ctx.beginPath();
      ctx.moveTo(0, -dSize);
      ctx.lineTo(dSize, 0);
      ctx.lineTo(0, dSize);
      ctx.lineTo(-dSize, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      // Center glow
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 45 * scale);
      coreGlow.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      coreGlow.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
      coreGlow.addColorStop(0.6, 'rgba(255, 255, 255, 0.03)');
      coreGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 45 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Center circle
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 18 * scale, 0, Math.PI * 2);
      ctx.stroke();

      // Center dot - breathing
      const breathe = 0.7 + Math.sin(time * 2) * 0.3;
      ctx.fillStyle = `rgba(255, 255, 255, ${breathe})`;
      ctx.beginPath();
      ctx.arc(cx, cy, 4 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Pulse waves emanating from center
      if (Math.random() < 0.02) {
        pulseWaves.push({ radius: 20 * scale, alpha: 0.3 });
      }

      pulseWaves = pulseWaves.filter(wave => {
        wave.radius += 1.5 * scale;
        wave.alpha -= 0.004;

        if (wave.alpha <= 0) return false;

        ctx.strokeStyle = `rgba(255, 255, 255, ${wave.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, wave.radius, 0, Math.PI * 2);
        ctx.stroke();

        return true;
      });

      // Layer labels (static, at fixed positions)
      if (scale > 0.6) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = `500 ${Math.max(8, 8 * scale)}px -apple-system, BlinkMacSystemFont, sans-serif`;
        ctx.textAlign = 'left';
        ctx.letterSpacing = '0.1em';

        layers.forEach((layer, i) => {
          if (i > 0) { // Skip CORE label
            const labelY = cy - layer.radius * scale - 8 * scale;
            ctx.fillText(layer.name, cx + 10 * scale, labelY);
          }
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      const canvasToRemove = container.querySelector('canvas');
      if (canvasToRemove) canvasToRemove.remove();
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        borderRadius: 'inherit',
        overflow: 'hidden'
      }}
    />
  );
}