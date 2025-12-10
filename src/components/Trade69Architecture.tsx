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
        // Responsive height: shorter on mobile
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
    
    // Scale factor for mobile
    const scale = Math.min(1, width / 600);

    // Clear existing canvas
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

    // Define layers - scaled for mobile
    const layers = [
      { name: 'INTERFACE', nodes: ['Dashboard', 'Analytics', 'Monitor'], radius: 40 * scale },
      { name: 'RISK', nodes: ['Kelly', 'Options', 'Heat', 'Executor'], radius: 80 * scale },
      { name: 'ML', nodes: ['Tracker', 'Backtest', 'Pipeline', 'Pattern', 'Version'], radius: 120 * scale },
      { name: 'INTELLIGENCE', nodes: ['Sentiment', 'Technical', 'HMM', 'Signal'], radius: 160 * scale },
      { name: 'DATA', nodes: ['StockTwits', 'Reddit', 'Alpaca', 'ThetaData', 'DarkPool', 'News'], radius: 200 * scale }
    ];

    let time = 0;

    const animate = () => {
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      time += 0.008;

      // Draw outer glow
      const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 220 * scale);
      outerGlow.addColorStop(0, 'rgba(250, 250, 248, 0.03)');
      outerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 220 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Draw concentric hexagons for each layer
      layers.forEach((layer, layerIndex) => {
        const r = layer.radius;
        const pulse = 1 + Math.sin(time * 2 + layerIndex * 0.5) * 0.02;
        const adjustedR = r * pulse;

        // Draw hexagon
        ctx.strokeStyle = `rgba(250, 250, 248, ${0.15 + layerIndex * 0.05})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) {
          const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
          const x = cx + Math.cos(angle) * adjustedR;
          const y = cy + Math.sin(angle) * adjustedR;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Draw nodes on this layer
        const nodeCount = layer.nodes.length;
        layer.nodes.forEach((nodeName, nodeIndex) => {
          const angle = (nodeIndex * Math.PI * 2) / nodeCount - Math.PI / 2 + time * 0.1;
          const nodeX = cx + Math.cos(angle) * adjustedR;
          const nodeY = cy + Math.sin(angle) * adjustedR;

          // Node glow
          const nodeGlow = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, 15 * scale);
          nodeGlow.addColorStop(0, 'rgba(250, 250, 248, 0.15)');
          nodeGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = nodeGlow;
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 15 * scale, 0, Math.PI * 2);
          ctx.fill();

          // Node circle
          ctx.strokeStyle = 'rgba(250, 250, 248, 0.6)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 3 * scale, 0, Math.PI * 2);
          ctx.stroke();

          // Node center dot
          ctx.fillStyle = 'rgba(250, 250, 248, 0.8)';
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 1.5 * scale, 0, Math.PI * 2);
          ctx.fill();

          // Node label - hide on very small screens
          if (scale > 0.6) {
            ctx.fillStyle = 'rgba(250, 250, 248, 0.5)';
            ctx.font = `${Math.max(6, 8 * scale)}px system-ui`;
            ctx.textAlign = 'center';
            const labelOffset = adjustedR > 100 * scale ? 12 * scale : -12 * scale;
            ctx.fillText(nodeName, nodeX, nodeY + labelOffset);
          }

          // Connection lines to inner layer
          if (layerIndex < layers.length - 1) {
            const innerLayer = layers[layerIndex + 1];
            const innerNodeCount = innerLayer.nodes.length;
            
            const innerAngle = (nodeIndex % innerNodeCount) * Math.PI * 2 / innerNodeCount - Math.PI / 2 + time * 0.1;
            const innerX = cx + Math.cos(innerAngle) * innerLayer.radius * pulse;
            const innerY = cy + Math.sin(innerAngle) * innerLayer.radius * pulse;

            ctx.strokeStyle = 'rgba(250, 250, 248, 0.08)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodeX, nodeY);
            ctx.lineTo(innerX, innerY);
            ctx.stroke();
          }
        });
      });

      // Center core - PostgreSQL
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time);
      
      // Inner square
      ctx.strokeStyle = 'rgba(250, 250, 248, 0.4)';
      ctx.lineWidth = 0.5;
      const innerSize = 10 * scale;
      ctx.beginPath();
      ctx.rect(-innerSize, -innerSize, innerSize * 2, innerSize * 2);
      ctx.stroke();
      
      // Inner diamond
      ctx.rotate(Math.PI / 4);
      const diamondSize = 7 * scale;
      ctx.beginPath();
      ctx.rect(-diamondSize, -diamondSize, diamondSize * 2, diamondSize * 2);
      ctx.stroke();
      
      ctx.restore();

      // Center circle
      ctx.strokeStyle = 'rgba(250, 250, 248, 0.6)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 15 * scale, 0, Math.PI * 2);
      ctx.stroke();

      // Center dot
      ctx.fillStyle = 'rgba(250, 250, 248, 0.9)';
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Center label
      if (scale > 0.6) {
        ctx.fillStyle = 'rgba(250, 250, 248, 0.6)';
        ctx.font = `${Math.max(6, 8 * scale)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.fillText('PostgreSQL', cx, cy + 25 * scale);
      }

      // Data flow particles
      for (let i = 0; i < 20; i++) {
        const particleTime = (time * 0.5 + i * 0.2) % 1;
        const layerFrom = Math.floor(i / 4);
        const layerTo = Math.max(0, layerFrom - 1);
        
        if (layerFrom < layers.length && layerTo < layers.length) {
          const fromR = layers[layerFrom]?.radius || 200 * scale;
          const toR = layers[layerTo]?.radius || 40 * scale;
          const angle = (i * 0.7 + time * 0.3) % (Math.PI * 2);
          
          const currentR = fromR + (toR - fromR) * particleTime;
          const particleX = cx + Math.cos(angle) * currentR;
          const particleY = cy + Math.sin(angle) * currentR;
          
          ctx.fillStyle = `rgba(250, 250, 248, ${0.3 * (1 - particleTime)})`;
          ctx.beginPath();
          ctx.arc(particleX, particleY, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Radial lines from center
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI * 2) / 12;
        ctx.strokeStyle = 'rgba(250, 250, 248, 0.04)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * 20 * scale, cy + Math.sin(angle) * 20 * scale);
        ctx.lineTo(cx + Math.cos(angle) * 210 * scale, cy + Math.sin(angle) * 210 * scale);
        ctx.stroke();
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
        height: dimensions.height || 500,
        margin: '0 auto',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A'
      }} 
    />
  );
}
