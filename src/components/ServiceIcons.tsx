"use client";

// Custom Websites - Browser window with grid layout
export function WebsiteIcon() {
  const size = 32;
  
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="websiteGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#websiteGlow)">
        {/* Browser frame */}
        <rect x="4" y="6" width="24" height="20" rx="1.5" stroke="#FAFAF8" strokeWidth="0.5" fill="none" opacity="0.7" />
        
        {/* Top bar */}
        <line x1="4" y1="11" x2="28" y2="11" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        
        {/* Window dots */}
        <circle cx="7" cy="8.5" r="0.8" fill="#FAFAF8" opacity="0.6" />
        <circle cx="10" cy="8.5" r="0.8" fill="#FAFAF8" opacity="0.6" />
        <circle cx="13" cy="8.5" r="0.8" fill="#FAFAF8" opacity="0.6" />
        
        {/* Grid layout inside */}
        <rect x="6" y="13" width="8" height="5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.5" />
        <rect x="6" y="19" width="8" height="5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.5" />
        <rect x="16" y="13" width="10" height="11" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.5" />
        
        {/* Content lines */}
        <line x1="17" y1="15" x2="24" y2="15" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.4" />
        <line x1="17" y1="17" x2="22" y2="17" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.4" />
        <line x1="17" y1="19" x2="25" y2="19" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.4" />
      </g>
    </svg>
  );
}

// Dashboards - Data visualization panels
export function DashboardIcon() {
  const size = 32;
  
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="dashboardGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#dashboardGlow)">
        {/* Outer frame */}
        <rect x="4" y="4" width="24" height="24" rx="1" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.5" />
        
        {/* Gauge/speedometer arc */}
        <path d="M10,14 A6,6 0 0,1 22,14" stroke="#FAFAF8" strokeWidth="0.5" fill="none" opacity="0.7" />
        <line x1="16" y1="14" x2="19" y2="10" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.8" />
        <circle cx="16" cy="14" r="1" fill="#FAFAF8" opacity="0.8" />
        
        {/* Bar chart */}
        <line x1="7" y1="26" x2="7" y2="22" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.6" />
        <line x1="10" y1="26" x2="10" y2="19" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.7" />
        <line x1="13" y1="26" x2="13" y2="21" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.6" />
        
        {/* Mini line chart */}
        <path d="M18,24 L20,21 L23,23 L26,19" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        <circle cx="18" cy="24" r="0.6" fill="#FAFAF8" opacity="0.6" />
        <circle cx="20" cy="21" r="0.6" fill="#FAFAF8" opacity="0.6" />
        <circle cx="23" cy="23" r="0.6" fill="#FAFAF8" opacity="0.6" />
        <circle cx="26" cy="19" r="0.6" fill="#FAFAF8" opacity="0.6" />
      </g>
    </svg>
  );
}

// API Development - Connected endpoints
export function APIIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;
  
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="apiGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#apiGlow)">
        {/* Central hub */}
        <rect x="12" y="12" width="8" height="8" rx="1" stroke="#FAFAF8" strokeWidth="0.5" fill="none" opacity="0.8" />
        <circle cx={cx} cy={cy} r="2" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.6" />
        <circle cx={cx} cy={cy} r="0.8" fill="#FAFAF8" opacity="0.9" />
        
        {/* Connection lines with arrows */}
        {/* Top */}
        <line x1={cx} y1="12" x2={cx} y2="5" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.6" />
        <circle cx={cx} cy="5" r="1.5" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        
        {/* Right */}
        <line x1="20" y1={cy} x2="27" y2={cy} stroke="#FAFAF8" strokeWidth="0.4" opacity="0.6" />
        <circle cx="27" cy={cy} r="1.5" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        
        {/* Bottom */}
        <line x1={cx} y1="20" x2={cx} y2="27" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.6" />
        <circle cx={cx} cy="27" r="1.5" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        
        {/* Left */}
        <line x1="12" y1={cy} x2="5" y2={cy} stroke="#FAFAF8" strokeWidth="0.4" opacity="0.6" />
        <circle cx="5" cy={cy} r="1.5" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.7" />
        
        {/* Data flow dots */}
        <circle cx={cx} cy="8" r="0.5" fill="#FAFAF8" opacity="0.5" />
        <circle cx="24" cy={cy} r="0.5" fill="#FAFAF8" opacity="0.5" />
        <circle cx={cx} cy="24" r="0.5" fill="#FAFAF8" opacity="0.5" />
        <circle cx="8" cy={cy} r="0.5" fill="#FAFAF8" opacity="0.5" />
      </g>
    </svg>
  );
}

// LLM Middleware - Brain/neural network
export function LLMIcon() {
  const size = 32;
  const cx = size / 2;
  const cy = size / 2;
  
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <filter id="llmGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#llmGlow)">
        {/* Brain outline - organic shape */}
        <path 
          d="M16,6 C10,6 6,10 6,16 C6,20 8,23 11,25 C11,27 13,28 16,28 C19,28 21,27 21,25 C24,23 26,20 26,16 C26,10 22,6 16,6" 
          stroke="#FAFAF8" 
          strokeWidth="0.5" 
          fill="none" 
          opacity="0.6" 
        />
        
        {/* Neural connections inside */}
        <circle cx="11" cy="13" r="1.5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.7" />
        <circle cx="21" cy="13" r="1.5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.7" />
        <circle cx="16" cy="11" r="1.5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.7" />
        <circle cx="13" cy="19" r="1.5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.7" />
        <circle cx="19" cy="19" r="1.5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.7" />
        <circle cx="16" cy="23" r="1.5" stroke="#FAFAF8" strokeWidth="0.3" fill="none" opacity="0.7" />
        
        {/* Synapses */}
        <line x1="12" y1="12" x2="15" y2="11" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        <line x1="17" y1="11" x2="20" y2="12" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        <line x1="11" y1="14" x2="13" y2="18" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        <line x1="21" y1="14" x2="19" y2="18" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        <line x1="16" y1="12" x2="16" y2="17" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        <line x1="14" y1="20" x2="15" y2="22" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        <line x1="18" y1="20" x2="17" y2="22" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.5" />
        
        {/* Center node */}
        <circle cx={cx} cy="17" r="2" stroke="#FAFAF8" strokeWidth="0.4" fill="none" opacity="0.8" />
        <circle cx={cx} cy="17" r="0.8" fill="#FAFAF8" opacity="0.9" />
      </g>
    </svg>
  );
}
