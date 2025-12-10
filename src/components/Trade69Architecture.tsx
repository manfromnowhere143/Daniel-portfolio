"use client";

import { useEffect, useRef, useState } from 'react';

export default function Trade69Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = width < 500 ? 350 : width < 700 ? 420 : 500;
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0) return;

    const container = containerRef.current;
    const width = dimensions.width;
    const height = dimensions.height;
    const scale = Math.min(1, width / 600);

    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) existingCanvas.remove();

    const canvas = document.createElement('canvas');
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d')!;
    ctx.scale(2, 2);

    // Enhanced layers with more detail
    const layers = [
      { name: 'INTERFACE', nodes: ['Dashboard', 'Analytics', 'Monitor'], radius: 45 * scale, color: 'rgba(255, 255, 255, 0.95)' },
      { name: 'RISK', nodes: ['Kelly', 'Options', 'Heat', 'Executor'], radius: 85 * scale, color: 'rgba(255, 255, 255, 0.9)' },
      { name: 'ML', nodes: ['Tracker', 'Backtest', 'Pipeline', 'Pattern', 'Version'], radius: 125 * scale, color: 'rgba(255, 255, 255, 0.85)' },
      { name: 'INTELLIGENCE', nodes: ['Sentiment', 'Technical', 'HMM', 'Signal'], radius: 165 * scale, color: 'rgba(255, 255, 255, 0.8)' },
      { name: 'DATA', nodes: ['StockTwits', 'Reddit', 'Alpaca', 'ThetaData', 'DarkPool', 'News'], radius: 205 * scale, color: 'rgba(255, 255, 255, 0.75)' }
    ];

    let time = 0;

    const animate = () => {
      // Clear with slight trail effect
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      time += 0.006;

      // Outer atmospheric glow - more visible
      const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 240 * scale);
      outerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      outerGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.03)');
      outerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 240 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Draw radial guide lines first (behind everything)
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI * 2) / 12;
        const gradient = ctx.createLinearGradient(
          cx + Math.cos(angle) * 25 * scale,
          cy + Math.sin(angle) * 25 * scale,
          cx + Math.cos(angle) * 220 * scale,
          cy + Math.sin(angle) * 220 * scale
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.03)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * 25 * scale, cy + Math.sin(angle) * 25 * scale);
        ctx.lineTo(cx + Math.cos(angle) * 220 * scale, cy + Math.sin(angle) * 220 * scale);
        ctx.stroke();
      }

      // Draw connection lines between layers (behind nodes)
      layers.forEach((layer, layerIndex) => {
        if (layerIndex < layers.length - 1) {
          const nextLayer = layers[layerIndex + 1];
          const pulse = 1 + Math.sin(time * 2 + layerIndex * 0.5) * 0.015;

          layer.nodes.forEach((_, nodeIndex) => {
            const angle = (nodeIndex * Math.PI * 2) / layer.nodes.length - Math.PI / 2 + time * 0.08;
            const nodeX = cx + Math.cos(angle) * layer.radius * pulse;
            const nodeY = cy + Math.sin(angle) * layer.radius * pulse;

            // Connect to multiple nodes in next layer for web effect
            const connectionsPerNode = 2;
            for (let c = 0; c < connectionsPerNode; c++) {
              const targetIndex = (nodeIndex + c) % nextLayer.nodes.length;
              const targetAngle = (targetIndex * Math.PI * 2) / nextLayer.nodes.length - Math.PI / 2 + time * 0.08;
              const targetX = cx + Math.cos(targetAngle) * nextLayer.radius * pulse;
              const targetY = cy + Math.sin(targetAngle) * nextLayer.radius * pulse;

              // Gradient connection line
              const lineGradient = ctx.createLinearGradient(nodeX, nodeY, targetX, targetY);
              lineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
              lineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.12)');
              lineGradient.addColorStop(1, 'rgba(255, 255, 255, 0.25)');

              ctx.strokeStyle = lineGradient;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(nodeX, nodeY);
              ctx.lineTo(targetX, targetY);
              ctx.stroke();
            }
          });
        }
      });

      // Draw hexagonal layers
      layers.forEach((layer, layerIndex) => {
        const r = layer.radius;
        const pulse = 1 + Math.sin(time * 2 + layerIndex * 0.5) * 0.015;
        const adjustedR = r * pulse;

        // Hexagon glow
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 + layerIndex * 0.02})`;
        ctx.lineWidth = 8 * scale;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) {
          const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
          const x = cx + Math.cos(angle) * adjustedR;
          const y = cy + Math.sin(angle) * adjustedR;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Hexagon main line
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 + layerIndex * 0.08})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) {
          const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
          const x = cx + Math.cos(angle) * adjustedR;
          const y = cy + Math.sin(angle) * adjustedR;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Draw nodes
        const nodeCount = layer.nodes.length;
        layer.nodes.forEach((nodeName, nodeIndex) => {
          const angle = (nodeIndex * Math.PI * 2) / nodeCount - Math.PI / 2 + time * 0.08;
          const nodeX = cx + Math.cos(angle) * adjustedR;
          const nodeY = cy + Math.sin(angle) * adjustedR;

          // Node outer glow
          const nodeGlow = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, 20 * scale);
          nodeGlow.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
          nodeGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
          nodeGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = nodeGlow;
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 20 * scale, 0, Math.PI * 2);
          ctx.fill();

          // Node ring
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 4 * scale, 0, Math.PI * 2);
          ctx.stroke();

          // Node center - solid white
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 2 * scale, 0, Math.PI * 2);
          ctx.fill();

          // Node label - bright and visible
          if (scale > 0.35) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.font = `${Math.max(8, 10 * scale)}px system-ui, -apple-system, sans-serif`;
            ctx.textAlign = 'center';
            const labelOffset = adjustedR > 100 * scale ? 14 * scale : -14 * scale;
            ctx.fillText(nodeName, nodeX, nodeY + labelOffset);
          }
        });
      });

      // Enhanced center core
      ctx.save();
      ctx.translate(cx, cy);

      // Rotating outer square
      ctx.rotate(time * 0.5);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      const outerSize = 14 * scale;
      ctx.beginPath();
      ctx.rect(-outerSize, -outerSize, outerSize * 2, outerSize * 2);
      ctx.stroke();

      // Counter-rotating inner diamond
      ctx.rotate(-time);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      const innerSize = 9 * scale;
      ctx.beginPath();
      ctx.moveTo(0, -innerSize);
      ctx.lineTo(innerSize, 0);
      ctx.lineTo(0, innerSize);
      ctx.lineTo(-innerSize, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      // Center glow
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 25 * scale);
      centerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      centerGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 25 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Center circle
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 18 * scale, 0, Math.PI * 2);
      ctx.stroke();

      // Center dot
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.beginPath();
      ctx.arc(cx, cy, 3 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Center label
      if (scale > 0.35) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = `bold ${Math.max(8, 10 * scale)}px system-ui, -apple-system, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('PostgreSQL', cx, cy + 32 * scale);
      }

      // Enhanced data flow particles
      for (let i = 0; i < 30; i++) {
        const particleTime = (time * 0.4 + i * 0.15) % 1;
        const layerFrom = Math.floor(i / 6);
        const layerTo = Math.max(0, layerFrom - 1);

        if (layerFrom < layers.length && layerTo < layers.length) {
          const fromR = layers[layerFrom]?.radius || 205 * scale;
          const toR = layers[layerTo]?.radius || 45 * scale;
          const angle = (i * 0.5 + time * 0.2) % (Math.PI * 2);

          const currentR = fromR + (toR - fromR) * particleTime;
          const particleX = cx + Math.cos(angle) * currentR;
          const particleY = cy + Math.sin(angle) * currentR;

          // Particle with trail effect
          const particleAlpha = 0.6 * (1 - particleTime);
          ctx.fillStyle = `rgba(255, 255, 255, ${particleAlpha})`;
          ctx.beginPath();
          ctx.arc(particleX, particleY, 1.5 * scale, 0, Math.PI * 2);
          ctx.fill();

          // Particle glow
          ctx.fillStyle = `rgba(255, 255, 255, ${particleAlpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(particleX, particleY, 4 * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Pulsing ring effect
      const ringPulse = (time * 0.3) % 1;
      const ringRadius = 30 * scale + ringPulse * 180 * scale;
      const ringAlpha = 0.15 * (1 - ringPulse);
      ctx.strokeStyle = `rgba(255, 255, 255, ${ringAlpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

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
        height: dimensions.height || 500,
        margin: '0 auto',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A'
      }}
    />
  );
}