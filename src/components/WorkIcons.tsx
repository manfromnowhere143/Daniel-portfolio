"use client";

// Trade69 - Algorithmic trading - ascending geometric pattern with data flow
export function Trade69Icon() {
  const size = 32;

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

  const hexPoints = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    const r = 6;
    return `${Math.round((cx + Math.cos(angle) * r) * 100) / 100},${Math.round((cy + Math.sin(angle) * r) * 100) / 100}`;
  }).join(' ');

  const outerNodes = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
    const r = 12;
    return {
      x: Math.round((cx + Math.cos(angle) * r) * 100) / 100,
      y: Math.round((cy + Math.sin(angle) * r) * 100) / 100
    };
  });

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
          points={hexPoints}
          stroke="#FAFAF8"
          strokeWidth="0.4"
          fill="none"
          opacity="0.8"
        />
        
        {/* Outer nodes */}
        {outerNodes.map((node, i) => (
          <g key={i}>
            <line x1={cx} y1={cy} x2={node.x} y2={node.y} stroke="#FAFAF8" strokeWidth="0.3" opacity="0.4" />
            <circle cx={node.x} cy={node.y} r="2" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
            <circle cx={node.x} cy={node.y} r="0.8" fill="#FAFAF8" opacity="0.8" />
          </g>
        ))}
        
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

  const tentacles = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
    const angle = (i * Math.PI * 2) / 8;
    const startX = Math.round((cx + Math.cos(angle) * 4) * 100) / 100;
    const startY = Math.round((cy + Math.sin(angle) * 4) * 100) / 100;
    const midX = Math.round((cx + Math.cos(angle + 0.2) * 9) * 100) / 100;
    const midY = Math.round((cy + Math.sin(angle + 0.2) * 9) * 100) / 100;
    const endX = Math.round((cx + Math.cos(angle - 0.1) * 14) * 100) / 100;
    const endY = Math.round((cy + Math.sin(angle - 0.1) * 14) * 100) / 100;
    return { startX, startY, midX, midY, endX, endY, opacity: 0.5 + (i % 2) * 0.2 };
  });

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
        {tentacles.map((t, i) => (
          <g key={i}>
            <path
              d={`M${t.startX},${t.startY} Q${t.midX},${t.midY} ${t.endX},${t.endY}`}
              stroke="#FAFAF8"
              strokeWidth="0.4"
              fill="none"
              opacity={t.opacity}
            />
            <circle cx={t.endX} cy={t.endY} r="0.6" fill="#FAFAF8" opacity="0.7" />
          </g>
        ))}
      </g>
    </svg>
  );
}

// Overmind - Blockchain/ouroboros - circular chain
export function OvermindIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;

  const chainLinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
    const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
    const r = 10;
    const x = Math.round((cx + Math.cos(angle) * r) * 100) / 100;
    const y = Math.round((cy + Math.sin(angle) * r) * 100) / 100;
    const rotation = (i * 30) + 45;
    return { x, y, rotation, opacity: 0.5 + (i % 3) * 0.15 };
  });

  const trianglePoints = `${cx},${cy - 5} ${Math.round((cx - 4.3) * 100) / 100},${cy + 2.5} ${Math.round((cx + 4.3) * 100) / 100},${cy + 2.5}`;

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
        {chainLinks.map((link, i) => (
          <rect
            key={i}
            x={link.x - 1.5}
            y={link.y - 1.5}
            width="3"
            height="3"
            transform={`rotate(${link.rotation}, ${link.x}, ${link.y})`}
            stroke="#FAFAF8"
            strokeWidth="0.3"
            fill="none"
            opacity={link.opacity}
          />
        ))}
        
        {/* Inner sacred triangle */}
        <polygon
          points={trianglePoints}
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
