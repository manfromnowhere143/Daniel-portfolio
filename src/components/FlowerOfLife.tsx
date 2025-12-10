"use client";

export default function FlowerOfLife() {
  const size = 100;
  const cx = size / 2;
  const cy = size / 2;
  const r = 12; // radius of each circle

  // Generate the 7 core circles of Flower of Life
  const circles: { x: number; y: number; opacity: number }[] = [
    { x: cx, y: cy, opacity: 0.8 }, // center
  ];

  // First ring - 6 circles around center
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    circles.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      opacity: 0.6
    });
  }

  // Second ring - 6 circles at intersections
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2 + Math.PI / 6;
    circles.push({
      x: cx + Math.cos(angle) * r * 1.732,
      y: cy + Math.sin(angle) * r * 1.732,
      opacity: 0.4
    });
  }

  // Third ring - outer 6
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    circles.push({
      x: cx + Math.cos(angle) * r * 2,
      y: cy + Math.sin(angle) * r * 2,
      opacity: 0.3
    });
  }

  return (
    <div style={{ width: size, height: size, margin: '0 auto' }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{ display: 'block' }}
      >
        <defs>
          <filter id="flowerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <radialGradient id="flowerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAFAF8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FAFAF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle background glow */}
        <circle cx={cx} cy={cy} r={r * 2.5} fill="url(#flowerGradient)" />

        <g filter="url(#flowerGlow)">
          {/* Outer containing circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r * 2.5}
            stroke="#FAFAF8"
            strokeWidth="0.2"
            fill="none"
            opacity="0.2"
          />

          {/* All flower circles */}
          {circles.map((circle, i) => (
            <circle
              key={i}
              cx={circle.x}
              cy={circle.y}
              r={r}
              stroke="#FAFAF8"
              strokeWidth="0.3"
              fill="none"
              opacity={circle.opacity}
            />
          ))}

          {/* Sacred center - seed of life pattern */}
          <circle cx={cx} cy={cy} r={r / 3} stroke="#FAFAF8" strokeWidth="0.25" fill="none" opacity="0.7" />
          
          {/* Center point */}
          <circle cx={cx} cy={cy} r={1} fill="#FAFAF8" opacity="0.9" />

          {/* 6 petals at center intersections */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * Math.PI * 2) / 6;
            const px = cx + Math.cos(angle) * (r / 2);
            const py = cy + Math.sin(angle) * (r / 2);
            return (
              <circle
                key={`petal-${i}`}
                cx={px}
                cy={py}
                r={0.6}
                fill="#FAFAF8"
                opacity="0.5"
              />
            );
          })}

          {/* Outer vertices */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
            const px = cx + Math.cos(angle) * r * 2;
            const py = cy + Math.sin(angle) * r * 2;
            return (
              <circle
                key={`vertex-${i}`}
                cx={px}
                cy={py}
                r={0.5}
                fill="#FAFAF8"
                opacity="0.4"
              />
            );
          })}

          {/* Connecting lines - hexagram hint */}
          {[0, 2, 4].map((i) => {
            const angle1 = (i * Math.PI * 2) / 6 - Math.PI / 2;
            const angle2 = ((i + 2) * Math.PI * 2) / 6 - Math.PI / 2;
            const x1 = cx + Math.cos(angle1) * r * 2;
            const y1 = cy + Math.sin(angle1) * r * 2;
            const x2 = cx + Math.cos(angle2) * r * 2;
            const y2 = cy + Math.sin(angle2) * r * 2;
            return (
              <line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FAFAF8"
                strokeWidth="0.15"
                opacity="0.2"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
