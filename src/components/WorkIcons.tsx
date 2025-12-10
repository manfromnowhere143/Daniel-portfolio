"use client";

// Trade69 - Algorithmic trading - ascending geometric pattern with data flow
export function Trade69Icon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="trade69Glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#trade69Glow)">
        {/* Ascending bars - trading chart */}
        <line x1="8" y1="24" x2="8" y2="18" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.5" />
        <line x1="12" y1="24" x2="12" y2="14" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.6" />
        <line x1="16" y1="24" x2="16" y2="16" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.7" />
        <line x1="20" y1="24" x2="20" y2="10" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.8" />
        <line x1="24" y1="24" x2="24" y2="6" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.9" />
        
        {/* Trend line */}
        <path d="M6,20 L14,14 L18,16 L26,5" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        
        {/* Data points */}
        <circle cx="6" cy="20" r="1" fill="#FAFAF8" opacity="0.6" />
        <circle cx="14" cy="14" r="1" fill="#FAFAF8" opacity="0.7" />
        <circle cx="18" cy="16" r="1" fill="#FAFAF8" opacity="0.8" />
        <circle cx="26" cy="5" r="1.2" fill="#FAFAF8" opacity="0.9" />
      </g>
    </svg>
  );
}

// MegaAgent - Multi-agent network - interconnected nodes
export function MegaAgentIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="megaAgentGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#megaAgentGlow)">
        {/* Central hexagon */}
        <polygon
          points={Array.from({ length: 6 }, (_, i) => {
            const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
            const r = 6;
            return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
          }).join(' ')}
          stroke="#FAFAF8"
          strokeWidth="0.4"
          fill="none"
          opacity="0.8"
        />
        
        {/* Outer nodes */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
          const r = 12;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          return (
            <g key={i}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="#FAFAF8" strokeWidth="0.3" opacity="0.4" />
              <circle cx={x} cy={y} r="2" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
              <circle cx={x} cy={y} r="0.8" fill="#FAFAF8" opacity="0.8" />
            </g>
          );
        })}
        
        {/* Center dot */}
        <circle cx={cx} cy={cy} r="1.5" fill="#FAFAF8" opacity="0.9" />
      </g>
    </svg>
  );
}

// Octopus - Cognitive tentacles - organic branching
export function OctopusIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="octopusGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#octopusGlow)">
        {/* Central brain/core */}
        <circle cx={cx} cy={cy} r="4" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.8" />
        <circle cx={cx} cy={cy} r="2" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.6" />
        <circle cx={cx} cy={cy} r="1" fill="#FAFAF8" opacity="0.9" />
        
        {/* 8 tentacles - curved paths */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i * Math.PI * 2) / 8;
          const startX = cx + Math.cos(angle) * 4;
          const startY = cy + Math.sin(angle) * 4;
          const midX = cx + Math.cos(angle + 0.2) * 9;
          const midY = cy + Math.sin(angle + 0.2) * 9;
          const endX = cx + Math.cos(angle - 0.1) * 14;
          const endY = cy + Math.sin(angle - 0.1) * 14;
          return (
            <g key={i}>
              <path
                d={`M${startX},${startY} Q${midX},${midY} ${endX},${endY}`}
                stroke="#FAFAF8"
                strokeWidth="0.4"
                fill="none"
                opacity={0.5 + (i % 2) * 0.2}
              />
              <circle cx={endX} cy={endY} r="0.6" fill="#FAFAF8" opacity="0.7" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

// Overmind - Blockchain/ouroboros - circular chain
export function OvermindIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="overmindGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#overmindGlow)">
        {/* Outer circle - the whole */}
        <circle cx={cx} cy={cy} r="12" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.4" />
        
        {/* Chain links around the circle */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
          const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
          const r = 10;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          return (
            <rect
              key={i}
              x={x - 1.5}
              y={y - 1.5}
              width="3"
              height="3"
              transform={`rotate(${(i * 30) + 45}, ${x}, ${y})`}
              stroke="#FAFAF8"
              strokeWidth="0.3"
              fill="none"
              opacity={0.5 + (i % 3) * 0.15}
            />
          );
        })}
        
        {/* Inner sacred triangle */}
        <polygon
          points={`${cx},${cy - 5} ${cx - 4.3},${cy + 2.5} ${cx + 4.3},${cy + 2.5}`}
          stroke="#FAFAF8"
          strokeWidth="0.4"
          fill="none"
          opacity="0.7"
        />
        
        {/* Center eye/point */}
        <circle cx={cx} cy={cy} r="1.2" fill="#FAFAF8" opacity="0.9" />
      </g>
    </svg>
  );
}
