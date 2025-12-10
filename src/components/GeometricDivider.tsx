"use client";

export default function GeometricDivider() {
  const width = 40;
  const height = 80;

  return (
    <div style={{ width: '100%', maxWidth: width, height, margin: '0 auto' }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ display: 'block' }}
      >
        <defs>
          <filter id="infinityGlow" x="-100%" y="-50%" width="300%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAFAF8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FAFAF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FAFAF8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <g filter="url(#infinityGlow)">
          {/* Outer vertical infinity */}
          <path
            d="M20,16 C12,16 12,28 16,32 C20,36 20,44 16,48 C12,52 12,64 20,64 C28,64 28,52 24,48 C20,44 20,36 24,32 C28,28 28,16 20,16 Z"
            stroke="url(#infinityGradient)"
            strokeWidth="0.6"
            fill="none"
          />
          
          {/* Inner vertical infinity */}
          <path
            d="M20,20 C14,20 14,28 17,31 C20,34 20,46 17,49 C14,52 14,60 20,60 C26,60 26,52 23,49 C20,46 20,34 23,31 C26,28 26,20 20,20 Z"
            stroke="#FAFAF8"
            strokeWidth="0.3"
            fill="none"
            opacity="0.4"
          />

          {/* Horizontal accent line */}
          <line x1="14" y1="40" x2="26" y2="40" stroke="#FAFAF8" strokeWidth="0.2" opacity="0.3" />
          
          {/* Center crossing point */}
          <circle cx={20} cy={40} r={2} stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.6" />
          <circle cx={20} cy={40} r={0.8} fill="#FAFAF8" opacity="0.8" />
          
          {/* Top and bottom focal points */}
          <circle cx={20} cy={16} r={0.5} fill="#FAFAF8" opacity="0.5" />
          <circle cx={20} cy={64} r={0.5} fill="#FAFAF8" opacity="0.5" />
          
          {/* Loop centers */}
          <circle cx={20} cy={24} r={0.4} fill="#FAFAF8" opacity="0.3" />
          <circle cx={20} cy={56} r={0.4} fill="#FAFAF8" opacity="0.3" />

          {/* Vertical axis lines */}
          <line x1="20" y1="8" x2="20" y2="14" stroke="#FAFAF8" strokeWidth="0.2" opacity="0.25" />
          <line x1="20" y1="66" x2="20" y2="72" stroke="#FAFAF8" strokeWidth="0.2" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}
