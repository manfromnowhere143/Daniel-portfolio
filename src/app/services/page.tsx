"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

// App data - Dark matte colors with subtle alive lighting
const services = [
  { id: 'website', name: 'Web Apps', color: ['#3d2860', '#1e1438'], glow: 'rgba(165, 130, 252, 0.18)', glowInner: 'rgba(165, 130, 252, 0.08)', desc: 'Full-stack applications with modern frameworks. SEO, responsive design, authentication, databases, and deployment.' },
  { id: 'dashboard', name: 'Dashboards', color: ['#602848', '#381428'], glow: 'rgba(251, 130, 180, 0.18)', glowInner: 'rgba(251, 130, 180, 0.08)', desc: 'Real-time data visualization and analytics. Interactive charts, live data streams, and beautiful interfaces.' },
  { id: 'api', name: 'API', color: ['#1a4038', '#0d2420'], glow: 'rgba(134, 239, 172, 0.18)', glowInner: 'rgba(134, 239, 172, 0.08)', desc: 'REST and GraphQL APIs. Authentication, rate limiting, documentation, and third-party integrations.' },
  { id: 'llm', name: 'LLM', color: ['#604028', '#382010'], glow: 'rgba(253, 186, 140, 0.18)', glowInner: 'rgba(253, 186, 140, 0.08)', desc: 'AI integrations and middleware. Prompt engineering, tool orchestration, and multi-model pipelines.' },
  { id: 'social', name: 'Social', color: ['#2a2a2a', '#1a1a1a'], glow: 'rgba(180, 180, 180, 0.12)', glowInner: 'rgba(180, 180, 180, 0.06)', desc: '' },
];

// Social links
const socialLinks = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/manfromnowhere143' },
  { id: 'x', name: 'X', url: 'https://x.com/satori936' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/overmind143' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@danielwahnich' },
];

// Animation states for Apple-style transitions
type AnimationState = 'idle' | 'entering' | 'active' | 'exiting';

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // STATE OF THE ART - Separate state for animation phases
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedAnimState, setExpandedAnimState] = useState<AnimationState>('idle');

  const [socialOpen, setSocialOpen] = useState(false);
  const [socialAnimState, setSocialAnimState] = useState<AnimationState>('idle');

  // Refs for cleanup
  const expandedTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const socialTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (expandedTimeoutRef.current) clearTimeout(expandedTimeoutRef.current);
      if (socialTimeoutRef.current) clearTimeout(socialTimeoutRef.current);
    };
  }, []);

  // STATE OF THE ART - Apple-style expanded view open
  const handleOpenExpanded = useCallback((index: number) => {
    if (expandedAnimState !== 'idle') return;

    setExpandedIndex(index);
    setExpandedAnimState('entering');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setExpandedAnimState('active');
      });
    });
  }, [expandedAnimState]);

  // STATE OF THE ART - Apple-style expanded view close
  const handleCloseExpanded = useCallback(() => {
    if (expandedAnimState !== 'active') return;

    setExpandedAnimState('exiting');

    expandedTimeoutRef.current = setTimeout(() => {
      setExpandedIndex(null);
      setExpandedAnimState('idle');
    }, 400);
  }, [expandedAnimState]);

  // STATE OF THE ART - Apple-style social folder open
  const handleOpenSocial = useCallback(() => {
    if (socialAnimState !== 'idle') return;

    setSocialOpen(true);
    setSocialAnimState('entering');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSocialAnimState('active');
      });
    });
  }, [socialAnimState]);

  // STATE OF THE ART - Apple-style social folder close
  const handleCloseSocial = useCallback(() => {
    if (socialAnimState !== 'active') return;

    setSocialAnimState('exiting');

    socialTimeoutRef.current = setTimeout(() => {
      setSocialOpen(false);
      setSocialAnimState('idle');
    }, 350);
  }, [socialAnimState]);

  // Prevent touch move function
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

  // Lock body scroll when overlay is open
  useEffect(() => {
    const isOpen = expandedAnimState !== 'idle' || socialAnimState !== 'idle';

    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.touchAction = 'pan-y';
      document.documentElement.style.touchAction = 'pan-y';
      document.addEventListener('touchmove', preventTouchMove, { passive: false });
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.touchAction = '';
      document.documentElement.style.touchAction = '';
      document.removeEventListener('touchmove', preventTouchMove);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.touchAction = '';
      document.documentElement.style.touchAction = '';
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, [expandedAnimState, socialAnimState, preventTouchMove]);

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

  // Get animation class based on state
  const getExpandedAnimClass = (index: number) => {
    if (expandedIndex !== index) return '';
    switch (expandedAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const getSocialAnimClass = () => {
    if (!socialOpen) return '';
    switch (socialAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const iconSize = isMobile ? 40 : 52;

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - SERVICES PAGE                            */
        /* Refined elegance with subtle sophistication                 */
        /* ═══════════════════════════════════════════════════════════ */
        
        .services-page {
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .services-page.overlay-open {
          touch-action: none;
          overflow: hidden;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 28px;
          max-width: 240px;
          margin: 0 auto;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - ELEGANT APP ICONS                        */
        /* Refined, smaller, subtle lighting                           */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          width: 76px;
          height: 76px;
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
          -webkit-tap-highlight-color: transparent;
        }
        
        .app-icon.loaded {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        /* Staggered animation */
        .app-container:nth-child(1) .app-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .app-icon { transition-delay: 50ms; }
        .app-container:nth-child(3) .app-icon { transition-delay: 100ms; }
        .app-container:nth-child(4) .app-icon { transition-delay: 150ms; }
        .app-container:nth-child(5) .app-icon { transition-delay: 200ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - SUBTLE TOP SHINE                         */
        /* Refined, less aggressive reflection                         */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 42%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.22) 0%, 
            rgba(255, 255, 255, 0.06) 50%,
            transparent 100%
          );
          border-radius: 20px 20px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          box-shadow: 
            inset 0 0 15px rgba(255, 255, 255, 0.04),
            inset 0 -1px 6px rgba(0, 0, 0, 0.15);
          pointer-events: none;
          z-index: 2;
        }
        
        .app-icon:active {
          transform: translateZ(0) scale(0.94);
        }
        
        .icon-wrapper {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - ELEGANT TEXT                             */
        /* ═══════════════════════════════════════════════════════════ */
        
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
            0 0 15px rgba(255, 255, 255, 0.2),
            0 1px 3px rgba(0, 0, 0, 0.6);
        }
        
        .app-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered name animation - synced with icons */
        .app-container:nth-child(1) .app-name { transition-delay: 50ms; }
        .app-container:nth-child(2) .app-name { transition-delay: 100ms; }
        .app-container:nth-child(3) .app-name { transition-delay: 150ms; }
        .app-container:nth-child(4) .app-name { transition-delay: 200ms; }
        .app-container:nth-child(5) .app-name { transition-delay: 250ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - EXPANDED VIEW                            */
        /* Professional layout: Icon first, then text                  */
        /* ═══════════════════════════════════════════════════════════ */
        
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
          padding-top: clamp(100px, 18vh, 180px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: manipulation;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, visibility;
          transform: translateZ(0);
          -webkit-tap-highlight-color: transparent;
        }
        
        .expanded-view.entering {
          visibility: visible;
          pointer-events: auto;
          opacity: 0;
        }
        
        .expanded-view.active {
          visibility: visible;
          pointer-events: auto;
          opacity: 1;
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .expanded-view.exiting {
          visibility: visible;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        
        .expanded-view.active .expanded-inner {
          animation: expandedFadeIn 0.5s cubic-bezier(0.32, 0.72, 0, 1) forwards;
        }
        
        .expanded-view.exiting .expanded-inner {
          animation: expandedFadeOut 0.3s ease forwards;
        }
        
        @keyframes expandedFadeIn {
          0% {
            opacity: 0;
            transform: translateZ(0) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }
        
        @keyframes expandedFadeOut {
          0% {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateZ(0) scale(0.95);
          }
        }
        
        /* Icon comes FIRST - centered prominently */
        .expanded-content {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.08)) 
                  drop-shadow(0 15px 40px rgba(0, 0, 0, 0.5));
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Title - STATE OF THE ART elegant typography */
        .expanded-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
          font-size: 22px;
          font-weight: 300;
          color: #FFFFFF;
          margin-bottom: 14px;
          letter-spacing: 0.03em;
          text-shadow: 
            0 0 25px rgba(255, 255, 255, 0.2),
            0 1px 4px rgba(0, 0, 0, 0.3);
        }
        
        /* Description - elegant, readable, WHITE */
        .expanded-desc {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #FFFFFF;
          margin-bottom: 0;
          max-width: 300px;
          text-align: center;
          line-height: 1.75;
          letter-spacing: 0.01em;
        }
        
        .expanded-close {
          margin-top: 36px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          touch-action: manipulation;
          z-index: 10;
          -webkit-tap-highlight-color: transparent;
        }
        
        .expanded-close svg {
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }
        
        .expanded-close:active {
          transform: scale(0.85);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - SOCIAL FOLDER OVERLAY                    */
        /* ═══════════════════════════════════════════════════════════ */
        
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
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: manipulation;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, visibility;
          transform: translateZ(0);
          -webkit-tap-highlight-color: transparent;
        }
        
        .folder-overlay.entering {
          visibility: visible;
          pointer-events: auto;
          opacity: 0;
        }
        
        .folder-overlay.active {
          visibility: visible;
          pointer-events: auto;
          opacity: 1;
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .folder-overlay.exiting {
          visibility: visible;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .folder-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-tap-highlight-color: transparent;
        }
        
        .folder-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 24px;
          opacity: 0;
          transform: translateZ(0) scale(0.8);
          transition: none;
          box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.15),
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 25px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.8);
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
          -webkit-tap-highlight-color: transparent;
        }
        
        .folder-overlay.active .folder-container {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.02s, 
                      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.02s;
        }
        
        .folder-overlay.exiting .folder-container {
          opacity: 0;
          transform: translateZ(0) scale(0.9);
          transition: opacity 0.25s ease, transform 0.3s ease;
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
          opacity: 0;
          transform: scale(0.5);
          transition: none;
          border: none;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        
        .folder-overlay.active .folder-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.15s, 
                      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
        }
        
        .folder-overlay.exiting .folder-close {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .folder-close svg {
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }
        
        .folder-close:active {
          transform: scale(0.85);
        }
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        
        .social-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          text-decoration: none;
          opacity: 0;
          transform: translateZ(0) scale(0.7) translateY(12px);
          transition: none;
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-tap-highlight-color: transparent;
        }
        
        .folder-overlay.active .social-item {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), 
                      transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.exiting .social-item {
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(5px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        /* Staggered pop-in */
        .folder-overlay.active .social-item:nth-child(1) { transition-delay: 0.04s; }
        .folder-overlay.active .social-item:nth-child(2) { transition-delay: 0.07s; }
        .folder-overlay.active .social-item:nth-child(3) { transition-delay: 0.10s; }
        .folder-overlay.active .social-item:nth-child(4) { transition-delay: 0.13s; }
        
        /* Staggered exit */
        .folder-overlay.exiting .social-item:nth-child(4) { transition-delay: 0ms; }
        .folder-overlay.exiting .social-item:nth-child(3) { transition-delay: 15ms; }
        .folder-overlay.exiting .social-item:nth-child(2) { transition-delay: 30ms; }
        .folder-overlay.exiting .social-item:nth-child(1) { transition-delay: 45ms; }
        
        .social-icon {
          width: 70px;
          height: 70px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 
            0 0 25px rgba(255, 255, 255, 0.12),
            0 6px 20px rgba(0, 0, 0, 0.45),
            0 12px 40px rgba(0, 0, 0, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.4),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-tap-highlight-color: transparent;
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
            rgba(255, 255, 255, 0.35) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          border-radius: 17px 17px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .social-icon:active {
          transform: scale(0.9);
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
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          letter-spacing: 0.01em;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* GLOBAL TAP HIGHLIGHT REMOVAL                                */
        /* ═══════════════════════════════════════════════════════════ */
        
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP STYLES                                              */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .services-grid {
            gap: 40px 36px;
            max-width: 340px;
          }
          
          .app-container {
            gap: 12px;
          }
          
          .app-icon {
            width: 120px;
            height: 120px;
            border-radius: 28px;
          }
          
          .app-icon::before {
            border-radius: 28px 28px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 28px;
          }
          
          .app-icon:hover {
            transform: translateZ(0) scale(1.04) translateY(-3px);
          }
          
          .app-name {
            font-size: 13px;
          }
          
          .expanded-content {
            width: 180px;
            height: 180px;
            margin-bottom: 32px;
          }
          
          .expanded-title {
            font-size: 26px;
            margin-bottom: 16px;
          }
          
          .expanded-desc {
            font-size: 15px;
            max-width: 360px;
            line-height: 1.8;
          }
          
          .folder-container {
            padding: 28px;
            border-radius: 28px;
          }
          
          .social-grid {
            gap: 20px;
          }
          
          .social-icon {
            width: 80px;
            height: 80px;
            border-radius: 18px;
          }
          
          .social-icon::before {
            border-radius: 18px 18px 50% 50%;
          }
          
          .social-icon:hover {
            transform: scale(1.06);
            box-shadow: 
              0 6px 24px rgba(0, 0, 0, 0.4),
              0 12px 40px rgba(0, 0, 0, 0.25),
              0 0 30px rgba(255, 255, 255, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
          
          .social-name {
            font-size: 12px;
            max-width: 85px;
          }
        }
        
        @media (min-width: 900px) {
          .services-grid {
            gap: 46px 42px;
            max-width: 400px;
          }
          
          .app-icon {
            width: 140px;
            height: 140px;
            border-radius: 32px;
          }
          
          .app-icon::before {
            border-radius: 32px 32px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 32px;
          }
          
          .app-name {
            font-size: 14px;
          }
          
          .expanded-content {
            width: 220px;
            height: 220px;
            margin-bottom: 36px;
          }
          
          .expanded-title {
            font-size: 28px;
            margin-bottom: 18px;
          }
          
          .expanded-desc {
            font-size: 16px;
            max-width: 420px;
            line-height: 1.85;
          }
          
          .folder-container {
            padding: 36px;
          }
          
          .social-grid {
            gap: 26px;
          }
          
          .social-icon {
            width: 95px;
            height: 95px;
            border-radius: 22px;
          }
          
          .social-icon::before {
            border-radius: 22px 22px 50% 50%;
          }
          
          .social-name {
            font-size: 13px;
          }
        }
      `}</style>

      <div className={`services-page ${expandedAnimState !== 'idle' || socialAnimState !== 'idle' ? 'overlay-open' : ''}`} style={{
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
                onClick={() => service.id === 'social' ? handleOpenSocial() : handleOpenExpanded(index)}
                style={{
                  background: `linear-gradient(145deg, ${service.color[0]}, ${service.color[1]})`,
                  boxShadow: `
                    0 0 25px ${service.glow},
                    0 0 10px ${service.glowInner},
                    0 6px 20px rgba(0, 0, 0, 0.4),
                    0 12px 32px ${service.color[1]}66,
                    inset 0 1px 1px rgba(255, 255, 255, 0.15),
                    inset 0 -1px 4px rgba(0, 0, 0, 0.15)
                  `,
                  border: `1px solid ${service.glow.replace('0.18', '0.08')}`
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
                    0 0 12px ${service.glow.replace('0.18', '0.35')},
                    0 0 25px ${service.glow.replace('0.18', '0.15')},
                    0 1px 3px rgba(0, 0, 0, 0.6)
                  `
                }}
              >
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Views for Services - Icon FIRST, then text */}
      {services.filter(s => s.id !== 'social').map((service, index) => (
        <div key={service.id} className={`expanded-view ${getExpandedAnimClass(index)}`}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedIndex === index && renderServiceIcon(service.id, isMobile ? 100 : 140)}
            </div>
            <div className="expanded-title">{service.name}</div>
            <div className="expanded-desc">{service.desc}</div>
            <div className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Social Folder Overlay */}
      <div className={`folder-overlay ${getSocialAnimClass()}`}>
        <div className="folder-overlay-bg" onClick={handleCloseSocial} />
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
        <div className="folder-close" onClick={handleCloseSocial}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}