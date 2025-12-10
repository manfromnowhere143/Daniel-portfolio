"use client";

export default function GeometricDivider() {
  const width = 80;
  const height = 30;

  return (
    <div style={{ width, height, margin: '0 auto' }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ display: 'block' }}
      >
        <defs>
          <filter id="infinityGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#infinityGlow)">
          {/* Infinity path - thin elegant curves */}
          <path
            d="M20,15 
               C20,8 28,8 32,12 
               C36,16 44,16 48,12 
               C52,8 60,8 60,15 
               C60,22 52,22 48,18 
               C44,14 36,14 32,18 
               C28,22 20,22 20,15 Z"
            stroke="#FAFAF8"
            strokeWidth="0.5"
            fill="none"
            opacity="0.7"
          />
          
          {/* Inner infinity - more subtle */}
          <path
            d="M24,15 
               C24,10 30,10 33,13 
               C36,16 44,16 47,13 
               C50,10 56,10 56,15 
               C56,20 50,20 47,17 
               C44,14 36,14 33,17 
               C30,20 24,20 24,15 Z"
            stroke="#FAFAF8"
            strokeWidth="0.3"
            fill="none"
            opacity="0.4"
          />

          {/* Center crossing point accent */}
          <circle cx={40} cy={15} r={1} fill="#FAFAF8" opacity="0.6" />
          
          {/* End points subtle dots */}
          <circle cx={20} cy={15} r={0.6} fill="#FAFAF8" opacity="0.4" />
          <circle cx={60} cy={15} r={0.6} fill="#FAFAF8" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}
