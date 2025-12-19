"use client";

import { useEffect, useState } from "react";

export default function MetatronCube() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Get initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null;
    if (currentTheme) setTheme(currentTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
          setTheme(newTheme || 'dark');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const size = 120; // Smaller size
  const cx = size / 2;
  const cy = size / 2;
  const r = 9; // Smaller circle radius
  const d1 = 22; // Inner ring distance
  const d2 = 45; // Outer ring distance

  // Theme-aware colors
  const strokeColor = theme === 'light' ? '#1a1a1a' : '#FAFAF8';
  const glowColor = theme === 'light' ? 'rgba(26, 26, 26, 0.1)' : 'rgba(250, 250, 248, 0.15)';

  // Calculate positions for inner ring (6 circles)
  const innerPositions = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * d1, y: cy + Math.sin(angle) * d1 };
  });

  // Calculate positions for outer ring (6 circles)
  const outerPositions = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * d2, y: cy + Math.sin(angle) * d2 };
  });

  return (
    <div style={{
      width: size,
      height: size,
      margin: '0 auto',
      transition: 'opacity 0.3s ease'
    }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{ display: 'block' }}
      >
        <defs>
          <filter id="metatron-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="metatron-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.12"/>
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Subtle background glow */}
        <circle cx={cx} cy={cy} r={d2 + 8} fill="url(#metatron-center-glow)" />

        {/* Main geometry group */}
        <g filter="url(#metatron-glow)">

          {/* Outer structure lines */}
          <g stroke={strokeColor} strokeWidth="0.2" fill="none" opacity="0.35">
            {[0, 1, 2].map((i) => {
              const opposite = i + 3;
              return (
                <line
                  key={`diagonal-${i}`}
                  x1={outerPositions[i].x}
                  y1={outerPositions[i].y}
                  x2={outerPositions[opposite].x}
                  y2={outerPositions[opposite].y}
                />
              );
            })}

            {outerPositions.map((pos, i) => {
              const nextInner = innerPositions[(i + 1) % 6];
              const prevInner = innerPositions[(i + 5) % 6];
              return (
                <g key={`cross-${i}`}>
                  <line x1={pos.x} y1={pos.y} x2={nextInner.x} y2={nextInner.y} />
                  <line x1={pos.x} y1={pos.y} x2={prevInner.x} y2={prevInner.y} />
                </g>
              );
            })}
          </g>

          {/* Inner star (hexagram) */}
          <g stroke={strokeColor} strokeWidth="0.25" fill="none" opacity="0.45">
            {innerPositions.map((pos, i) => {
              const skip2 = innerPositions[(i + 2) % 6];
              return <line key={`star-${i}`} x1={pos.x} y1={pos.y} x2={skip2.x} y2={skip2.y} />;
            })}
          </g>

          {/* Hexagon structures */}
          <g stroke={strokeColor} strokeWidth="0.3" fill="none" opacity="0.55">
            {innerPositions.map((pos, i) => {
              const next = innerPositions[(i + 1) % 6];
              return <line key={`inner-hex-${i}`} x1={pos.x} y1={pos.y} x2={next.x} y2={next.y} />;
            })}

            {outerPositions.map((pos, i) => {
              const next = outerPositions[(i + 1) % 6];
              return <line key={`outer-hex-${i}`} x1={pos.x} y1={pos.y} x2={next.x} y2={next.y} />;
            })}
          </g>

          {/* Radial lines */}
          <g stroke={strokeColor} strokeWidth="0.25" fill="none" opacity="0.45">
            {innerPositions.map((pos, i) => (
              <line key={`center-inner-${i}`} x1={cx} y1={cy} x2={pos.x} y2={pos.y} />
            ))}

            {innerPositions.map((pos, i) => {
              const outer = outerPositions[i];
              return <line key={`inner-outer-${i}`} x1={pos.x} y1={pos.y} x2={outer.x} y2={outer.y} />;
            })}
          </g>

          {/* Circles */}
          <g stroke={strokeColor} strokeWidth="0.35" fill="none" opacity="0.75">
            <circle cx={cx} cy={cy} r={r} />
            {innerPositions.map((pos, i) => (
              <circle key={`inner-${i}`} cx={pos.x} cy={pos.y} r={r} />
            ))}
            {outerPositions.map((pos, i) => (
              <circle key={`outer-${i}`} cx={pos.x} cy={pos.y} r={r} />
            ))}
          </g>

          {/* Center point */}
          <circle cx={cx} cy={cy} r="1.2" fill={strokeColor} opacity="0.5" />

          {/* Inner ring dots */}
          {innerPositions.map((pos, i) => (
            <circle key={`inner-dot-${i}`} cx={pos.x} cy={pos.y} r="0.6" fill={strokeColor} opacity="0.35" />
          ))}
        </g>
      </svg>
    </div>
  );
}