"use client";

export default function GoldenSpiral() {
  const size = 140;
  const cx = size / 2;
  const cy = size / 2;
  
  // Golden ratio
  const phi = 1.618033988749;
  
  // Generate Fibonacci spiral points
  const generateSpiral = () => {
    const points: string[] = [];
    let angle = 0;
    let scale = 2.5;
    
    for (let i = 0; i < 60; i++) {
      const r = scale * Math.pow(phi, angle / (Math.PI / 2));
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
      angle += 0.12;
    }
    
    return points.join(' ');
  };

  return (
    <div style={{ width: size, height: size, margin: '0 auto' }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{ display: 'block' }}
      >
        <defs>
          {/* Subtle glow filter */}
          <filter id="goldenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Radial gradient for depth */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAFAF8" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#FAFAF8" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Subtle background glow */}
        <circle cx={cx} cy={cy} r={60} fill="url(#centerGlow)" />

        {/* Main geometry group */}
        <g filter="url(#goldenGlow)">
          
          {/* Outer circles based on golden ratio - subtle */}
          <g stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.4">
            <circle cx={cx} cy={cy} r={55} />
            <circle cx={cx} cy={cy} r={55 / phi} />
            <circle cx={cx} cy={cy} r={55 / (phi * phi)} />
            <circle cx={cx} cy={cy} r={55 / (phi * phi * phi)} />
          </g>

          {/* Radiating lines - very subtle */}
          <g stroke="#FAFAF8" strokeWidth="0.25" opacity="0.3">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const angle = (i * Math.PI * 2) / 8;
              return (
                <line
                  key={`ray-${i}`}
                  x1={cx + Math.cos(angle) * 10}
                  y1={cy + Math.sin(angle) * 10}
                  x2={cx + Math.cos(angle) * 55}
                  y2={cy + Math.sin(angle) * 55}
                />
              );
            })}
          </g>

          {/* Golden spiral - main feature */}
          <polyline
            points={generateSpiral()}
            stroke="#FAFAF8"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Inner structure */}
          <g stroke="#FAFAF8" strokeWidth="0.35" fill="none" opacity="0.5">
            {/* Golden rectangle proportions */}
            <rect 
              x={cx - 20} 
              y={cy - 20 / phi} 
              width={40} 
              height={40 / phi} 
              transform={`rotate(45, ${cx}, ${cy})`}
            />
            <rect 
              x={cx - 12} 
              y={cy - 12 / phi} 
              width={24} 
              height={24 / phi} 
              transform={`rotate(45, ${cx}, ${cy})`}
            />
          </g>

          {/* Center point accent */}
          <circle cx={cx} cy={cy} r="2" fill="#FAFAF8" opacity="0.7" />
          <circle cx={cx} cy={cy} r="4" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.5" />

          {/* Small dots at golden ratio intersections */}
          {[1, 2, 3, 4].map((i) => {
            const r = 55 / Math.pow(phi, i);
            const angle = i * 0.5;
            return (
              <circle
                key={`dot-${i}`}
                cx={cx + r * Math.cos(angle)}
                cy={cy + r * Math.sin(angle)}
                r="1"
                fill="#FAFAF8"
                opacity={0.7 - i * 0.12}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
