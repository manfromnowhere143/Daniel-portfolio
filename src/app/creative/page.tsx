"use client";

import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - COMING SOON PAGE
// Minimal, elegant, with breathing sacred geometry logo
// ═══════════════════════════════════════════════════════════════════════════════

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - THEME VARIABLES (STEVE JOBS LEVEL)                           */
        /* Embedded for guaranteed loading                                                  */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root {
          --bg-primary: #050506;
          --text-primary: #FFFFFF;
          --text-secondary: rgba(255, 255, 255, 0.8);
          --text-tertiary: rgba(255, 255, 255, 0.5);
          --text-muted: rgba(255, 255, 255, 0.3);
        }
        
        [data-theme="light"] {
          --bg-primary: #F5F5F0;
          --text-primary: #1a1a1a;
          --text-secondary: rgba(26, 26, 26, 0.75);
          --text-tertiary: rgba(26, 26, 26, 0.5);
          --text-muted: rgba(26, 26, 26, 0.3);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - LOCKED SCREEN (NO SCROLL)                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        html, body {
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          overflow: hidden;
          touch-action: none;
        }
        
        * { -webkit-tap-highlight-color: transparent; }
        
        .coming-soon-page {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-primary, #050506);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 25vh;
          overflow: hidden;
          touch-action: none;
          overscroll-behavior: none;
          transition: background-color 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Subtle radial gradient background */
        .coming-soon-page::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150%;
          height: 150%;
          background: radial-gradient(ellipse at center, var(--border-primary, rgba(255, 255, 255, 0.02)) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .coming-soon-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .coming-soon-content.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - SACRED GEOMETRY LOGO                                         */
        /* Metatron's Cube with breathing animation                                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .logo-container {
          position: relative;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          animation: logoGlowPulse 4s ease-in-out infinite;
        }
        
        @keyframes logoGlowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        .logo-svg {
          position: relative;
          z-index: 1;
          animation: logoBreathe 6s ease-in-out infinite;
          filter: drop-shadow(0 0 20px var(--text-muted, rgba(255, 255, 255, 0.1)));
          transition: filter 0.5s ease;
        }
        
        @keyframes logoBreathe {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.03); opacity: 1; }
        }
        
        .logo-svg .ring {
          stroke: var(--text-muted, rgba(255, 255, 255, 0.15));
          fill: none;
          stroke-width: 0.5;
          transition: stroke 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-svg .ring-inner {
          stroke: var(--text-tertiary, rgba(255, 255, 255, 0.25));
          animation: ringRotate 30s linear infinite;
          transform-origin: center;
          transition: stroke 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-svg .ring-outer {
          stroke: var(--text-muted, rgba(255, 255, 255, 0.1));
          animation: ringRotate 45s linear infinite reverse;
          transform-origin: center;
          transition: stroke 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .logo-svg .line {
          stroke: var(--text-muted, rgba(255, 255, 255, 0.12));
          stroke-width: 0.3;
          transition: stroke 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-svg .node {
          fill: var(--text-tertiary, rgba(255, 255, 255, 0.4));
          transition: fill 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-svg .node-center {
          fill: var(--text-secondary, rgba(255, 255, 255, 0.9));
          animation: centerPulse 3s ease-in-out infinite;
          transition: fill 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes centerPulse {
          0%, 100% { opacity: 0.9; r: 4; }
          50% { opacity: 1; r: 5; }
        }
        
        .logo-svg .hexagon {
          stroke: var(--text-muted, rgba(255, 255, 255, 0.2));
          fill: none;
          stroke-width: 0.4;
          transition: stroke 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* COMING SOON TEXT                                                                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .coming-soon-text {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-tertiary, rgba(255, 255, 255, 0.4));
          text-align: center;
          transition: color 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @media (min-width: 600px) {
          .logo-container {
            width: 220px;
            height: 220px;
          }
          
          .coming-soon-text {
            font-size: 14px;
            letter-spacing: 0.3em;
          }
        }
        
        @media (min-width: 900px) {
          .logo-container {
            width: 260px;
            height: 260px;
          }
        }
      `}</style>

      <div className="coming-soon-page">
        <div className={`coming-soon-content ${isLoaded ? 'loaded' : ''}`}>
          {/* Sacred Geometry Logo - Metatron's Cube */}
          <div className="logo-container">
            <div className="logo-glow" />
            <svg className="logo-svg" width="160" height="160" viewBox="0 0 100 100" fill="none">
              {/* Outer rings */}
              <circle className="ring ring-outer" cx="50" cy="50" r="46" />
              <circle className="ring ring-inner" cx="50" cy="50" r="38" />
              <circle className="ring" cx="50" cy="50" r="30" />
              <circle className="ring" cx="50" cy="50" r="22" />
              <circle className="ring" cx="50" cy="50" r="14" />

              {/* Hexagonal structure */}
              <polygon className="hexagon" points="50,12 78,31 78,69 50,88 22,69 22,31" />
              <polygon className="hexagon" points="50,20 70,35 70,65 50,80 30,65 30,35" />

              {/* Cross lines */}
              <line className="line" x1="50" y1="4" x2="50" y2="96" />
              <line className="line" x1="4" y1="50" x2="96" y2="50" />
              <line className="line" x1="14" y1="14" x2="86" y2="86" />
              <line className="line" x1="86" y1="14" x2="14" y2="86" />

              {/* Radial lines to vertices */}
              <line className="line" x1="50" y1="50" x2="50" y2="12" />
              <line className="line" x1="50" y1="50" x2="78" y2="31" />
              <line className="line" x1="50" y1="50" x2="78" y2="69" />
              <line className="line" x1="50" y1="50" x2="50" y2="88" />
              <line className="line" x1="50" y1="50" x2="22" y2="69" />
              <line className="line" x1="50" y1="50" x2="22" y2="31" />

              {/* Vertex nodes */}
              <circle className="node" cx="50" cy="12" r="2.5" />
              <circle className="node" cx="78" cy="31" r="2" />
              <circle className="node" cx="78" cy="69" r="2" />
              <circle className="node" cx="50" cy="88" r="2.5" />
              <circle className="node" cx="22" cy="69" r="2" />
              <circle className="node" cx="22" cy="31" r="2" />

              {/* Cardinal nodes */}
              <circle className="node" cx="50" cy="4" r="1.5" />
              <circle className="node" cx="96" cy="50" r="1.5" />
              <circle className="node" cx="50" cy="96" r="1.5" />
              <circle className="node" cx="4" cy="50" r="1.5" />

              {/* Diagonal nodes */}
              <circle className="node" cx="14" cy="14" r="1" />
              <circle className="node" cx="86" cy="14" r="1" />
              <circle className="node" cx="86" cy="86" r="1" />
              <circle className="node" cx="14" cy="86" r="1" />

              {/* Center node */}
              <circle className="node-center" cx="50" cy="50" r="4" />
            </svg>
          </div>

          {/* Coming Soon Text */}
          <span className="coming-soon-text">Coming Soon</span>
        </div>
      </div>
    </>
  );
}