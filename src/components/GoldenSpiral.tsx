"use client";

import { useMemo } from 'react';

export default function GoldenSpiral() {
  const size = 140;
  const cx = size / 2;
  const cy = size / 2;
  const phi = 1.618033988749;

  // Pre-compute spiral points as a static string
  const spiralPoints = useMemo(() => {
    const points: string[] = [];
    const numPoints = 60;
    for (let i = 0; i <= numPoints; i++) {
      const t = (i / numPoints) * 4 * Math.PI;
      const r = 2.5 * Math.pow(phi, t / (2 * Math.PI));
      if (r < 65) {
        const x = cx + r * Math.cos(t);
        const y = cy + r * Math.sin(t);
        points.push(`${Math.round(x * 100) / 100},${Math.round(y * 100) / 100}`);
      }
    }
    return points.join(' ');
  }, []);

  // Pre-compute circle positions
  const circles = useMemo(() => {
    const result: { r: number; opacity: number }[] = [];
    for (let i = 1; i <= 6; i++) {
      result.push({
        r: Math.round(8 * Math.pow(phi, i - 1) * 100) / 100,
        opacity: Math.round((0.4 - i * 0.05) * 100) / 100
      });
    }
    return result;
  }, []);

  // Pre-compute rays
  const rays = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i * Math.PI * 2) / 8;
      return {
        x1: Math.round((cx + Math.cos(angle) * 8) * 100) / 100,
        y1: Math.round((cy + Math.sin(angle) * 8) * 100) / 100,
        x2: Math.round((cx + Math.cos(angle) * 60) * 100) / 100,
        y2: Math.round((cy + Math.sin(angle) * 60) * 100) / 100
      };
    });
  }, []);

  // Pre-compute golden dots
  const goldenDots = useMemo(() => {
    return [1, 2, 3, 4, 5].map((i) => {
      const r = 8 * Math.pow(phi, i - 1);
      const angle = i * phi * Math.PI;
      return {
        cx: Math.round((cx + Math.cos(angle) * r) * 100) / 100,
        cy: Math.round((cy + Math.sin(angle) * r) * 100) / 100,
        opacity: Math.round((0.5 - i * 0.06) * 100) / 100
      };
    });
  }, []);

  return (
    <div style={{ width: size, height: size, margin: '0 auto' }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{ display: 'block' }}
      >
        <defs>
          <filter id="goldenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="goldenGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAFAF8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FAFAF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r="65" fill="url(#goldenGradient)" />

        <g filter="url(#goldenGlow)">
          {/* Concentric circles at golden ratio intervals */}
          {circles.map((circle, i) => (
            <circle
              key={`circle-${i}`}
              cx={cx}
              cy={cy}
              r={circle.r}
              stroke="#FAFAF8"
              strokeWidth="0.3"
              fill="none"
              opacity={circle.opacity}
            />
          ))}

          {/* Radiating lines */}
          {rays.map((ray, i) => (
            <line
              key={`ray-${i}`}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke="#FAFAF8"
              strokeWidth="0.25"
              opacity="0.2"
            />
          ))}

          {/* Golden spiral */}
          <polyline
            points={spiralPoints}
            stroke="#FAFAF8"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Golden rectangles hint */}
          <rect x={cx - 21} y={cy - 21} width="42" height="42" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.3" />
          <rect x={cx - 13} y={cy - 13} width="26" height="26" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.35" transform={`rotate(90, ${cx}, ${cy})`} />

          {/* Center point */}
          <circle cx={cx} cy={cy} r="2" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
          <circle cx={cx} cy={cy} r="0.8" fill="#FAFAF8" opacity="0.9" />

          {/* Golden ratio intersection points */}
          {goldenDots.map((dot, i) => (
            <circle
              key={`dot-${i}`}
              cx={dot.cx}
              cy={dot.cy}
              r="1"
              fill="#FAFAF8"
              opacity={dot.opacity}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
