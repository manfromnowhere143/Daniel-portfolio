"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

// App data - Dark matte colors with alive lighting
const services = [
  { id: 'website', name: 'Web Apps', color: ['#3d2860', '#1e1438'], glow: 'rgba(165, 130, 252, 0.25)', glowInner: 'rgba(165, 130, 252, 0.15)', desc: 'Full-stack applications with modern frameworks. SEO, responsive design, authentication, databases, and deployment.' },
  { id: 'dashboard', name: 'Dashboards', color: ['#602848', '#381428'], glow: 'rgba(251, 130, 180, 0.25)', glowInner: 'rgba(251, 130, 180, 0.15)', desc: 'Real-time data visualization and analytics. Interactive charts, live data streams, and beautiful interfaces.' },
  { id: 'api', name: 'API', color: ['#1a4038', '#0d2420'], glow: 'rgba(134, 239, 172, 0.25)', glowInner: 'rgba(134, 239, 172, 0.15)', desc: 'REST and GraphQL APIs. Authentication, rate limiting, documentation, and third-party integrations.' },
  { id: 'llm', name: 'LLM', color: ['#604028', '#382010'], glow: 'rgba(253, 186, 140, 0.25)', glowInner: 'rgba(253, 186, 140, 0.15)', desc: 'AI integrations and middleware. Prompt engineering, tool orchestration, and multi-model pipelines.' },
  { id: 'social', name: 'Social', color: ['#2a2a2a', '#1a1a1a'], glow: 'rgba(180, 180, 180, 0.2)', glowInner: 'rgba(180, 180, 180, 0.1)', desc: '' },
];

// Social links
const socialLinks = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/manfromnowhere143' },
  { id: 'x', name: 'X', url: 'https://x.com/satori936' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/overmind143' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@danielwahnich' },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [socialOpen, setSocialOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollbarWidthRef = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Prevent touch move function - only blocks swipe, not tap
  const preventTouchMove = useCallback((e: TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.expanded-close') ||
        target.closest('.folder-close') ||
        target.closest('.social-item') ||
        target.closest('.expanded-content')) {
      return;
    }
    e.preventDefault();
  }, []);

  // STATE OF THE ART: Flash-free scroll lock
  useEffect(() => {
    if (expandedIndex !== null || socialOpen) {
      // Calculate scrollbar width ONCE
      scrollbarWidthRef.current = window.innerWidth - document.documentElement.clientWidth;

      // Apply styles in a single frame to prevent flash
      requestAnimationFrame(() => {
        document.body.style.cssText = `
          overflow: hidden;
          padding-right: ${scrollbarWidthRef.current}px;
          touch-action: none;
        `;
        document.documentElement.style.touchAction = 'none';
      });

      document.addEventListener('touchmove', preventTouchMove, { passive: false });
    } else {
      // Remove styles in a single frame
      requestAnimationFrame(() => {
        document.body.style.cssText = '';
        document.documentElement.style.touchAction = '';
      });

      document.removeEventListener('touchmove', preventTouchMove);
    }

    return () => {
      document.body.style.cssText = '';
      document.documentElement.style.touchAction = '';
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, [expandedIndex, socialOpen, preventTouchMove]);

  // Render service icons
  const renderServiceIcon = (id: string, size: number = 48) => {
    switch (id) {
      case 'website':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="8" y="12" width="44" height="32" rx="4" stroke="white" strokeWidth="2" opacity="0.9"/>
            <path d="M8 20h44" stroke="white" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="13" cy="16" r="2" fill="white" opacity="0.8"/>
            <circle cx="19" cy="16" r="2" fill="white" opacity="0.8"/>
            <circle cx="25" cy="16" r="2" fill="white" opacity="0.8"/>
            <rect x="14" y="26" width="14" height="12" rx="1" fill="white" opacity="0.5"/>
            <rect x="32" y="26" width="14" height="4" rx="1" fill="white" opacity="0.4"/>
            <rect x="32" y="33" width="10" height="3" rx="1" fill="white" opacity="0.3"/>
            <rect x="32" y="38" width="7" height="2" rx="0.5" fill="white" opacity="0.2"/>
          </svg>
        );
      case 'dashboard':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="22" stroke="white" strokeWidth="2" opacity="0.9"/>
            <circle cx="30" cy="30" r="16" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="30" cy="30" r="10" stroke="white" strokeWidth="1" opacity="0.3"/>
            <path d="M30 12v6M30 42v6M12 30h6M42 30h6" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <path d="M18 18l4 4M38 38l4 4M18 42l4-4M38 18l4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
            <circle cx="30" cy="30" r="5" fill="white" opacity="0.9"/>
            <path d="M30 30l8-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
          </svg>
        );
      case 'api':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="10" r="6" stroke="white" strokeWidth="2" opacity="0.9"/>
            <circle cx="10" cy="30" r="6" stroke="white" strokeWidth="2" opacity="0.9"/>
            <circle cx="50" cy="30" r="6" stroke="white" strokeWidth="2" opacity="0.9"/>
            <circle cx="30" cy="50" r="6" stroke="white" strokeWidth="2" opacity="0.9"/>
            <path d="M30 16v8M30 36v8M16 30h8M36 30h8" stroke="white" strokeWidth="2" opacity="0.6"/>
            <circle cx="30" cy="30" r="8" fill="white" opacity="0.9"/>
            <circle cx="30" cy="30" r="4" fill="white" opacity="1"/>
            <path d="M18 18l8 8M34 34l8 8M18 42l8-8M34 26l8-8" stroke="white" strokeWidth="1.5" opacity="0.4"/>
          </svg>
        );
      case 'llm':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="30" rx="24" ry="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <ellipse cx="30" cy="30" rx="24" ry="14" stroke="white" strokeWidth="1.5" opacity="0.5" transform="rotate(60 30 30)"/>
            <ellipse cx="30" cy="30" rx="24" ry="14" stroke="white" strokeWidth="1.5" opacity="0.5" transform="rotate(120 30 30)"/>
            <circle cx="30" cy="30" r="10" fill="white" opacity="0.9"/>
            <circle cx="30" cy="30" r="5" fill="white" opacity="1"/>
            <circle cx="30" cy="8" r="3" fill="white" opacity="0.7"/>
            <circle cx="30" cy="52" r="3" fill="white" opacity="0.7"/>
            <circle cx="10" cy="20" r="3" fill="white" opacity="0.7"/>
            <circle cx="50" cy="20" r="3" fill="white" opacity="0.7"/>
            <circle cx="10" cy="40" r="3" fill="white" opacity="0.7"/>
            <circle cx="50" cy="40" r="3" fill="white" opacity="0.7"/>
          </svg>
        );
      case 'social':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="15" r="8" stroke="white" strokeWidth="2" opacity="0.8"/>
            <circle cx="15" cy="35" r="6" stroke="white" strokeWidth="1.5" opacity="0.7"/>
            <circle cx="45" cy="35" r="6" stroke="white" strokeWidth="1.5" opacity="0.7"/>
            <circle cx="30" cy="48" r="5" stroke="white" strokeWidth="1.5" opacity="0.6"/>
            <path d="M30 23v8M23 33l-5 0M37 33l5 0M27 43l-8-5M33 43l8-5" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="30" cy="30" r="4" fill="white" opacity="0.9"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Render social icons
  const renderSocialIcon = (id: string) => {
    switch (id) {
      case 'github':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        );
      case 'x':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
            <circle cx="18" cy="6" r="1.5" fill="white"/>
          </svg>
        );
      case 'tiktok':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const iconSize = isMobile ? 48 : 60;

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLASH-FREE SERVICES PAGE                    */
        /* ═══════════════════════════════════════════════════════════════ */
        
        .services-page {
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          /* Contain prevents layout thrash affecting overlays */
          contain: layout style;
        }
        
        .services-page.overlay-open {
          touch-action: none;
          overflow: hidden;
          /* Strict containment when overlay active */
          contain: strict;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 32px;
          max-width: 260px;
          margin: 0 auto;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        /* ═══════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - APP ICONS WITH ALIVE LIGHTING               */
        /* ═══════════════════════════════════════════════════════════════ */
        
        .app-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          width: 88px;
          height: 88px;
          cursor: pointer;
          overflow: visible;
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(15px);
          transition: 
            transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
            box-shadow 0.4s ease,
            opacity 0.5s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .app-icon.loaded {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        /* Staggered animation */
        .app-container:nth-child(1) .app-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .app-icon { transition-delay: 60ms; }
        .app-container:nth-child(3) .app-icon { transition-delay: 120ms; }
        .app-container:nth-child(4) .app-icon { transition-delay: 180ms; }
        .app-container:nth-child(5) .app-icon { transition-delay: 240ms; }
        
        /* ═══════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - TOP SHINE REFLECTION                        */
        /* ═══════════════════════════════════════════════════════════════ */
        
        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.32) 0%, 
            rgba(255, 255, 255, 0.12) 40%,
            transparent 100%
          );
          border-radius: 22px 22px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          box-shadow: 
            inset 0 0 25px rgba(255, 255, 255, 0.08),
            inset 0 -2px 10px rgba(0, 0, 0, 0.2);
          pointer-events: none;
          z-index: 2;
        }
        
        .app-icon:active {
          transform: translateZ(0) scale(0.92);
        }
        
        .icon-wrapper {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        /* ═══════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLOATING GLOWING TEXT                       */
        /* ═══════════════════════════════════════════════════════════════ */
        
        .app-name {
          font-size: 12px;
          font-weight: 400;
          color: #FAFAF8;
          letter-spacing: 0.02em;
          text-align: center;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .app-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered name animation */
        .app-container:nth-child(1) .app-name { transition-delay: 100ms; }
        .app-container:nth-child(2) .app-name { transition-delay: 160ms; }
        .app-container:nth-child(3) .app-name { transition-delay: 220ms; }
        .app-container:nth-child(4) .app-name { transition-delay: 280ms; }
        .app-container:nth-child(5) .app-name { transition-delay: 340ms; }
        
        /* ═══════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLASH-FREE EXPANDED VIEW                    */
        /* Key techniques:                                                 */
        /* 1. contain: layout style paint - Isolates rendering             */
        /* 2. isolation: isolate - New stacking context                    */
        /* 3. Pre-rendered GPU layer                                       */
        /* 4. Matched opacity/visibility timing                            */
        /* ═══════════════════════════════════════════════════════════════ */
        
        .expanded-view {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0A0A0A;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(80px, 15vh, 150px);
          
          /* FLASH PREVENTION */
          contain: layout style paint;
          isolation: isolate;
          
          /* Initial state */
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          
          /* GPU layer - created BEFORE animation */
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          /* MATCHED timing - same duration for opacity/visibility */
          transition: 
            opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0s linear 0.35s;
          
          will-change: opacity;
          
          touch-action: manipulation;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: contain;
        }
        
        .expanded-view.active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          /* Remove visibility delay on OPEN */
          transition: 
            opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0s linear 0s;
        }
        
        .expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          
          /* Initial */
          opacity: 0;
          transform: translateZ(0) scale(0.92);
          
          /* GPU */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          contain: layout style;
          
          /* Delayed spring animation - starts AFTER parent begins */
          transition: 
            opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.08s,
            transform 0.4s cubic-bezier(0.34, 1.4, 0.64, 1) 0.08s;
        }
        
        .expanded-view.active .expanded-inner {
          opacity: 1;
          transform: translateZ(0) scale(1);
        }
        
        .expanded-title {
          font-size: 22px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 6px;
          text-shadow: 
            0 0 30px rgba(255, 255, 255, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.5);
        }
        
        .expanded-desc {
          font-size: 13px;
          color: #FAFAF8;
          margin-bottom: 20px;
          max-width: 280px;
          text-align: left;
          line-height: 1.6;
        }
        
        .expanded-content {
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.1)) 
                  drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6));
          
          /* Initial */
          opacity: 0;
          transform: translateZ(0);
          
          /* GPU */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          /* Delayed fade */
          transition: opacity 0.4s ease 0.15s;
          touch-action: manipulation;
        }
        
        .expanded-view.active .expanded-content {
          opacity: 1;
        }
        
        .expanded-close {
          margin-top: 24px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          z-index: 10;
          
          /* Initial */
          opacity: 0;
          transform: translateZ(0) scale(0.5);
          
          /* GPU */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          /* Delayed animation */
          transition: 
            opacity 0.25s ease 0.2s,
            transform 0.3s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s;
          
          touch-action: manipulation;
        }
        
        .expanded-view.active .expanded-close {
          opacity: 1;
          transform: translateZ(0) scale(1);
        }
        
        .expanded-close svg {
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6));
        }
        
        .expanded-close:active {
          transform: translateZ(0) scale(0.85);
          transition: transform 0.1s ease;
        }
        
        /* ═══════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLASH-FREE FOLDER OVERLAY                   */
        /* ═══════════════════════════════════════════════════════════════ */
        
        .folder-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(100px, 18vh, 180px);
          
          /* FLASH PREVENTION */
          contain: layout style paint;
          isolation: isolate;
          
          /* Initial state */
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          
          /* GPU layer */
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          /* MATCHED timing */
          transition: 
            opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0s linear 0.35s;
          
          will-change: opacity;
          background: transparent;
          
          touch-action: manipulation;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: contain;
        }
        
        .folder-overlay.active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transition: 
            opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0s linear 0s;
        }
        
        /* FLASH-FREE backdrop - Pre-rendered blur state */
        .folder-overlay-bg {
          position: absolute;
          inset: 0;
          
          /* Initial - blur at 0 but filter APPLIED (no flash on transition) */
          background: rgba(20, 20, 20, 0);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          
          /* GPU */
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          /* Smooth blur transition */
          transition: 
            background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            -webkit-backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .folder-overlay.active .folder-overlay-bg {
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
        
        .folder-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 24px;
          
          /* Initial */
          opacity: 0;
          transform: translateZ(0) scale(0.85);
          
          /* GPU */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          contain: layout style;
          
          box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.15),
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 25px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.8);
          
          /* Delayed spring animation */
          transition: 
            opacity 0.3s ease 0.05s,
            transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .folder-overlay.active .folder-container {
          opacity: 1;
          transform: translateZ(0) scale(1);
        }
        
        .folder-close {
          position: relative;
          z-index: 2;
          margin-top: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          
          /* Initial */
          opacity: 0;
          transform: translateZ(0) scale(0.5);
          
          /* GPU */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          /* Delayed animation */
          transition: 
            opacity 0.25s ease 0.15s,
            transform 0.3s cubic-bezier(0.34, 1.4, 0.64, 1) 0.15s;
          
          touch-action: manipulation;
        }
        
        .folder-overlay.active .folder-close {
          opacity: 1;
          transform: translateZ(0) scale(1);
        }
        
        .folder-close svg {
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }
        
        .folder-close:active {
          transform: translateZ(0) scale(0.85);
          transition: transform 0.1s ease;
        }
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          touch-action: manipulation;
        }
        
        /* FLASH-FREE staggered items */
        .social-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          text-decoration: none;
          
          /* Initial */
          opacity: 0;
          transform: translateZ(0) scale(0.8) translateY(8px);
          
          /* GPU */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          /* Base transition */
          transition: 
            opacity 0.3s ease,
            transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
          
          touch-action: manipulation;
        }
        
        .folder-overlay.active .social-item {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        /* Staggered delays */
        .folder-overlay.active .social-item:nth-child(1) { transition-delay: 0.08s; }
        .folder-overlay.active .social-item:nth-child(2) { transition-delay: 0.11s; }
        .folder-overlay.active .social-item:nth-child(3) { transition-delay: 0.14s; }
        .folder-overlay.active .social-item:nth-child(4) { transition-delay: 0.17s; }
        
        .social-icon {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          
          /* GPU */
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          transition: transform 0.15s ease;
          
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.3),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
        }
        
        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          border-radius: 15px 15px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .social-icon:active {
          transform: translateZ(0) scale(0.9);
        }
        
        .social-icon.github {
          background: linear-gradient(145deg, #2d333b, #161b22);
        }
        
        .social-icon.x {
          background: linear-gradient(145deg, #1a1a1a, #000000);
        }
        
        .social-icon.instagram {
          background: linear-gradient(145deg, #833ab4, #fd1d1d, #fcb045);
        }
        
        .social-icon.tiktok {
          background: linear-gradient(145deg, #1a1a1a, #000000);
        }
        
        .social-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
        }
        
        /* ═══════════════════════════════════════════════════════════════ */
        /* DESKTOP STYLES                                                  */
        /* ═══════════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .services-grid {
            gap: 45px 40px;
            max-width: 400px;
          }
          
          .app-container {
            gap: 14px;
          }
          
          .app-icon {
            width: 150px;
            height: 150px;
            border-radius: 34px;
          }
          
          .app-icon::before {
            border-radius: 34px 34px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 34px;
          }
          
          .app-icon:hover {
            transform: translateZ(0) scale(1.05) translateY(-5px);
          }
          
          .app-name {
            font-size: 13px;
            font-weight: 400;
          }
          
          .expanded-content {
            width: 260px;
            height: 260px;
          }
          
          .expanded-title {
            font-size: 26px;
          }
          
          .expanded-desc {
            font-size: 14px;
            max-width: 340px;
          }
          
          .folder-container {
            padding: 28px;
          }
          
          .social-grid {
            gap: 22px;
          }
          
          .social-icon {
            width: 72px;
            height: 72px;
            border-radius: 18px;
          }
          
          .social-icon:hover {
            transform: translateZ(0) scale(1.06);
          }
          
          .social-name {
            font-size: 13px;
          }
        }
        
        @media (min-width: 900px) {
          .services-grid {
            gap: 50px 45px;
            max-width: 450px;
          }
          
          .app-icon {
            width: 170px;
            height: 170px;
            border-radius: 38px;
          }
          
          .app-icon::before {
            border-radius: 38px 38px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 38px;
          }
          
          .app-name {
            font-size: 14px;
          }
          
          .expanded-content {
            width: 320px;
            height: 320px;
          }
        }
      `}</style>

      <div className={`services-page ${expandedIndex !== null || socialOpen ? 'overlay-open' : ''}`} style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(100px, 15vh, 160px)",
        paddingBottom: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="app-container">
              <div
                className={`app-icon ${isLoaded ? 'loaded' : ''}`}
                onClick={() => service.id === 'social' ? setSocialOpen(true) : setExpandedIndex(index)}
                style={{
                  background: `linear-gradient(145deg, ${service.color[0]}, ${service.color[1]})`,
                  boxShadow: `
                    0 0 35px ${service.glow},
                    0 0 15px ${service.glowInner},
                    0 8px 25px rgba(0, 0, 0, 0.45),
                    0 15px 40px ${service.color[1]}88,
                    inset 0 1px 1px rgba(255, 255, 255, 0.2),
                    inset 0 -2px 6px rgba(0, 0, 0, 0.2)
                  `,
                  border: `1px solid ${service.glow.replace('0.25', '0.15')}`
                }}
              >
                <div className="icon-wrapper">
                  {renderServiceIcon(service.id, iconSize)}
                </div>
              </div>
              <span
                className={`app-name ${isLoaded ? 'loaded' : ''}`}
                style={{
                  textShadow: `
                    0 0 15px ${service.glow.replace('0.25', '0.5')},
                    0 0 30px ${service.glow.replace('0.25', '0.2')},
                    0 2px 4px rgba(0, 0, 0, 0.8)
                  `
                }}
              >
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Views for Services */}
      {services.filter(s => s.id !== 'social').map((service, index) => (
        <div key={service.id} className={`expanded-view ${expandedIndex === index ? 'active' : ''}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{service.name}</div>
            <div className="expanded-desc">{service.desc}</div>
            <div className="expanded-content">
              {expandedIndex === index && renderServiceIcon(service.id, isMobile ? 120 : 160)}
            </div>
            <div className="expanded-close" onClick={() => setExpandedIndex(null)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Social Folder Overlay */}
      <div className={`folder-overlay ${socialOpen ? 'active' : ''}`}>
        <div className="folder-overlay-bg" onClick={() => setSocialOpen(false)} />
        <div className="folder-container">
          <div className="social-grid">
            {socialLinks.map((link) => (
              <Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="social-item">
                <div className={`social-icon ${link.id}`}>
                  {renderSocialIcon(link.id)}
                </div>
                <span className="social-name">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="folder-close" onClick={() => setSocialOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}