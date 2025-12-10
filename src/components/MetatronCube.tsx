"use client";

export default function MetatronCube() {
  const size = 160;
  const cx = size / 2;
  const cy = size / 2;
  const r = 12; // Circle radius
  const d1 = 30; // Inner ring distance
  const d2 = 60; // Outer ring distance

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
    <div style={{ width: size, height: size, margin: '0 auto', animation: 'fadeIn 0.6s ease-out' }}><style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{ display: 'block' }}
      >
        <defs>
          {/* Subtle glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Radial gradient for depth */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAFAF8" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#FAFAF8" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Subtle background glow */}
        <circle cx={cx} cy={cy} r={d2 + 10} fill="url(#centerGlow)" />

        {/* Main geometry group */}
        <g filter="url(#glow)">
          
          {/* Outer structure lines - very subtle */}
          <g stroke="#FAFAF8" strokeWidth="0.25" fill="none" opacity="0.4">
            {/* Main diagonal lines through center */}
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

            {/* Cross connections - outer to inner */}
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

          {/* Inner star (hexagram) - medium opacity */}
          <g stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.5">
            {innerPositions.map((pos, i) => {
              const skip2 = innerPositions[(i + 2) % 6];
              return <line key={`star-${i}`} x1={pos.x} y1={pos.y} x2={skip2.x} y2={skip2.y} />;
            })}
          </g>

          {/* Hexagon structures */}
          <g stroke="#FAFAF8" strokeWidth="0.35" fill="none" opacity="0.6">
            {/* Inner hexagon */}
            {innerPositions.map((pos, i) => {
              const next = innerPositions[(i + 1) % 6];
              return <line key={`inner-hex-${i}`} x1={pos.x} y1={pos.y} x2={next.x} y2={next.y} />;
            })}

            {/* Outer hexagon */}
            {outerPositions.map((pos, i) => {
              const next = outerPositions[(i + 1) % 6];
              return <line key={`outer-hex-${i}`} x1={pos.x} y1={pos.y} x2={next.x} y2={next.y} />;
            })}
          </g>

          {/* Radial lines - connecting structure */}
          <g stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.5">
            {/* Lines from center to inner ring */}
            {innerPositions.map((pos, i) => (
              <line key={`center-inner-${i}`} x1={cx} y1={cy} x2={pos.x} y2={pos.y} />
            ))}

            {/* Lines from inner to outer ring */}
            {innerPositions.map((pos, i) => {
              const outer = outerPositions[i];
              return <line key={`inner-outer-${i}`} x1={pos.x} y1={pos.y} x2={outer.x} y2={outer.y} />;
            })}
          </g>

          {/* Circles - most prominent */}
          <g stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.8">
            {/* Center circle */}
            <circle cx={cx} cy={cy} r={r} />

            {/* Inner ring circles */}
            {innerPositions.map((pos, i) => (
              <circle key={`inner-${i}`} cx={pos.x} cy={pos.y} r={r} />
            ))}

            {/* Outer ring circles */}
            {outerPositions.map((pos, i) => (
              <circle key={`outer-${i}`} cx={pos.x} cy={pos.y} r={r} />
            ))}
          </g>

          {/* Center point accent */}
          <circle cx={cx} cy={cy} r="1.5" fill="#FAFAF8" opacity="0.6" />
          
          {/* Inner ring center points */}
          {innerPositions.map((pos, i) => (
            <circle key={`inner-dot-${i}`} cx={pos.x} cy={pos.y} r="0.8" fill="#FAFAF8" opacity="0.4" />
          ))}
        </g>
      </svg>
    </div>
  );
}
