"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for 3D - prevent SSR flash
const WebsiteIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.WebsiteIcon3D })), { ssr: false });
const DashboardIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.DashboardIcon3D })), { ssr: false });
const APIIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.APIIcon3D })), { ssr: false });
const LLMIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.LLMIcon3D })), { ssr: false });

// App data - Dark matte colors matching Work/Creative
const apps = [
  { id: 'website', name: 'Web Apps', color: ['#4a3d7a', '#2a1d52'] },
  { id: 'dashboard', name: 'Dashboards', color: ['#7a3d5a', '#521d3a'] },
  { id: 'api', name: 'API', color: ['#2a6a55', '#1a4035'] },
  { id: 'llm', name: 'LLM', color: ['#8a5535', '#52301a'] },
  { id: 'social', name: 'Social', color: ['#2a2a2a', '#151515'], isFolder: true },
];

// Service descriptions for expanded view
const serviceDescriptions: Record<string, string> = {
  website: 'Full-stack applications with modern frameworks. SEO, responsive design, authentication, and deployment.',
  dashboard: 'Real-time data visualization and monitoring. Custom analytics and interactive charts.',
  api: 'RESTful and GraphQL APIs with robust architecture. Authentication and third-party integrations.',
  llm: 'Custom AI integrations and agent systems. Prompt engineering and multi-model pipelines.',
};

// Social links
const socialLinks = [
  { id: 'tiktok', name: 'TikTok', url: 'https://tiktok.com/@derp' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/derp' },
  { id: 'x', name: 'X', url: 'https://x.com/derp' },
];

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [icons3DReady, setIcons3DReady] = useState(false);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIcons3DReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const renderService3D = (id: string, size: number) => {
    if (!icons3DReady) return <div style={{ width: size, height: size }} />;
    switch (id) {
      case 'website': return <WebsiteIcon3D size={size} />;
      case 'dashboard': return <DashboardIcon3D size={size} />;
      case 'api': return <APIIcon3D size={size} />;
      case 'llm': return <LLMIcon3D size={size} />;
      default: return null;
    }
  };

  // Render Social 3D icon - interconnected nodes
  const renderSocialIcon = () => (
    <svg width="75" height="75" viewBox="0 0 60 60" fill="none">
      {/* Connection lines */}
      <line x1="15" y1="20" x2="30" y2="30" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="45" y1="20" x2="30" y2="30" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="30" y1="30" x2="30" y2="45" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="15" y1="20" x2="45" y2="20" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      {/* Outer glow rings */}
      <circle cx="15" cy="20" r="10" stroke="white" strokeWidth="0.5" opacity="0.2"/>
      <circle cx="45" cy="20" r="10" stroke="white" strokeWidth="0.5" opacity="0.2"/>
      <circle cx="30" cy="45" r="10" stroke="white" strokeWidth="0.5" opacity="0.2"/>
      {/* Main nodes */}
      <circle cx="15" cy="20" r="6" fill="white" opacity="0.9"/>
      <circle cx="45" cy="20" r="6" fill="white" opacity="0.9"/>
      <circle cx="30" cy="45" r="6" fill="white" opacity="0.9"/>
      {/* Center hub */}
      <circle cx="30" cy="30" r="4" fill="white" opacity="0.7"/>
      <circle cx="30" cy="30" r="8" stroke="white" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  );

  // App icon thumbnail
  const renderAppThumbnail = (id: string) => {
    if (id === 'social') return renderSocialIcon();
    return icons3DReady ? renderService3D(id, 90) : <div style={{ width: 90, height: 90 }} />;
  };

  // TikTok icon
  const TikTokIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M22.5 8.5C21.5 7.3 21 5.8 21 4H17V21C17 23.2 15.2 25 13 25C10.8 25 9 23.2 9 21C9 18.8 10.8 17 13 17C13.3 17 13.6 17 13.9 17.1V13C13.6 13 13.3 13 13 13C8.6 13 5 16.6 5 21C5 25.4 8.6 29 13 29C17.4 29 21 25.4 21 21V12.5C22.7 13.8 24.8 14.5 27 14.5V10.5C25.3 10.5 23.7 9.7 22.5 8.5Z" fill="white"/>
    </svg>
  );

  // Instagram icon
  const InstagramIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="6" stroke="white" strokeWidth="2"/>
      <circle cx="16" cy="16" r="5" stroke="white" strokeWidth="2"/>
      <circle cx="23" cy="9" r="1.5" fill="white"/>
    </svg>
  );

  // X (Twitter) icon
  const XIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M5 5L13.5 16.5L5 27H7.5L14.8 18.2L20.5 27H27L18 14.8L26 5H23.5L16.7 13.1L11.5 5H5ZM8.5 7H10.5L23.5 25H21.5L8.5 7Z" fill="white"/>
    </svg>
  );

  const handleAppClick = (id: string, isFolder?: boolean) => {
    if (isFolder) {
      setOpenApp(id);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════ */
        /* SMOOTH SCROLL - PREVENT MOBILE BOUNCE                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        .services-page {
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
        }
        
        .app-overlay,
        .expanded-view {
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* iOS-LEVEL ELEGANCE - MAIN GRID                              */
        /* ═══════════════════════════════════════════════════════════ */
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 28px;
          max-width: 240px;
          margin: 0 auto;
          padding: 0 10px;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .app-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          width: 98px;
          height: 98px;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.3s ease,
                      opacity 0.5s ease;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8) translateY(20px);
          overflow: visible;
        }
        
        .app-icon.loaded {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .app-container:nth-child(1) .app-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .app-icon { transition-delay: 80ms; }
        .app-container:nth-child(3) .app-icon { transition-delay: 160ms; }
        .app-container:nth-child(4) .app-icon { transition-delay: 240ms; }
        .app-container:nth-child(5) .app-icon { transition-delay: 320ms; }
        
        /* Premium glass shine - top highlight */
        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.22) 0%, 
            rgba(255, 255, 255, 0.08) 40%,
            transparent 100%
          );
          border-radius: 24px 24px 60% 60%;
          pointer-events: none;
          z-index: 3;
        }
        
        /* Inner glow overlay for depth */
        .app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.08);
          pointer-events: none;
          z-index: 2;
        }
        
        .app-icon:active { transform: scale(0.92); }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* ALIVE MATTE COLORS WITH OUTER GLOW                         */
        /* ═══════════════════════════════════════════════════════════ */
        
        /* Website - Indigo/Violet */
        .app-icon.website {
          box-shadow: 
            0 0 25px rgba(165, 180, 252, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(74, 61, 122, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(165, 180, 252, 0.18);
        }
        
        /* Dashboard - Rose/Pink */
        .app-icon.dashboard {
          box-shadow: 
            0 0 25px rgba(251, 182, 206, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(122, 61, 90, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(251, 182, 206, 0.18);
        }
        
        /* API - Mint/Green */
        .app-icon.api {
          box-shadow: 
            0 0 25px rgba(134, 239, 172, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(42, 106, 85, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(134, 239, 172, 0.18);
        }
        
        /* LLM - Coral/Orange */
        .app-icon.llm {
          box-shadow: 
            0 0 25px rgba(253, 186, 140, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(138, 85, 53, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(253, 186, 140, 0.18);
        }
        
        /* Social - Gray/Dark */
        .app-icon.social {
          box-shadow: 
            0 0 20px rgba(180, 180, 180, 0.15),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(40, 40, 40, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(180, 180, 180, 0.12);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* FLOATING GLOWING TEXT                                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-name {
          font-size: 12px;
          font-weight: 500;
          color: #FAFAF8;
          letter-spacing: 0.03em;
          text-align: center;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .app-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Color-matched text glow */
        .app-container:nth-child(1) .app-name {
          text-shadow: 
            0 0 12px rgba(165, 180, 252, 0.5),
            0 0 25px rgba(165, 180, 252, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(2) .app-name {
          text-shadow: 
            0 0 12px rgba(251, 182, 206, 0.5),
            0 0 25px rgba(251, 182, 206, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(3) .app-name {
          text-shadow: 
            0 0 12px rgba(134, 239, 172, 0.5),
            0 0 25px rgba(134, 239, 172, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(4) .app-name {
          text-shadow: 
            0 0 12px rgba(253, 186, 140, 0.5),
            0 0 25px rgba(253, 186, 140, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(5) .app-name {
          text-shadow: 
            0 0 10px rgba(180, 180, 180, 0.4),
            0 0 20px rgba(180, 180, 180, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        /* Staggered name animation */
        .app-container:nth-child(1) .app-name { transition-delay: 150ms; }
        .app-container:nth-child(2) .app-name { transition-delay: 230ms; }
        .app-container:nth-child(3) .app-name { transition-delay: 310ms; }
        .app-container:nth-child(4) .app-name { transition-delay: 390ms; }
        .app-container:nth-child(5) .app-name { transition-delay: 470ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* EXPANDED SERVICE VIEW                                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        .expanded-view {
          position: fixed;
          inset: 0;
          background: #0A0A0A;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 12vh;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        
        .expanded-view.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        .expanded-title {
          font-size: 24px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 12px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        
        .expanded-desc {
          font-size: 14px;
          color: rgba(250, 250, 248, 0.7);
          text-align: center;
          max-width: 300px;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        
        .expanded-content {
          width: 100%;
          max-width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
        }
        
        .expanded-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease;
          z-index: 10;
        }
        
        .expanded-close:active { transform: scale(0.95); }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* SOCIAL FOLDER OVERLAY                                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 15vh;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        
        .app-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        .app-overlay-title {
          font-size: 24px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 32px;
          letter-spacing: 0.03em;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.5);
        }
        
        .social-grid {
          display: flex;
          gap: 24px;
          padding: 28px 36px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .social-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
        }
        
        .social-icon {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
          overflow: hidden;
        }
        
        /* Glass shine on social icons */
        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.2) 0%, 
            rgba(255, 255, 255, 0.06) 40%,
            transparent 100%
          );
          border-radius: 16px 16px 50% 50%;
          pointer-events: none;
          z-index: 3;
        }
        
        .social-icon:active { transform: scale(0.95); }
        
        /* TikTok - Black/Dark */
        .social-icon.tiktok {
          background: linear-gradient(145deg, #1a1a1a 0%, #000000 100%);
          box-shadow: 
            0 0 20px rgba(238, 29, 82, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.4),
            0 8px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(238, 29, 82, 0.2);
        }
        
        /* Instagram - Gradient */
        .social-icon.instagram {
          background: linear-gradient(145deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
          box-shadow: 
            0 0 20px rgba(131, 58, 180, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 20px rgba(253, 29, 29, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        /* X - Black */
        .social-icon.x {
          background: linear-gradient(145deg, #1a1a1a 0%, #000000 100%);
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.1),
            0 4px 12px rgba(0, 0, 0, 0.4),
            0 8px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .social-name {
          font-size: 11px;
          font-weight: 500;
          color: #FAFAF8;
          text-align: center;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.5);
          opacity: 0.95;
        }
        
        .app-overlay-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }
        
        .app-overlay-close:active {
          transform: scale(0.95);
          background: rgba(255, 255, 255, 0.15);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP                                                     */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .services-grid {
            gap: 40px 36px;
            max-width: 420px;
          }
          
          .app-container {
            gap: 16px;
          }
          
          .app-icon {
            width: 165px;
            height: 165px;
            border-radius: 38px;
          }
          
          .app-icon::before {
            border-radius: 38px 38px 60% 60%;
          }
          
          .app-icon::after {
            border-radius: 38px;
          }
          
          .app-icon:hover {
            transform: scale(1.06) translateY(-6px);
          }
          
          .app-icon.website:hover {
            box-shadow: 
              0 0 40px rgba(165, 180, 252, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(74, 61, 122, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.dashboard:hover {
            box-shadow: 
              0 0 40px rgba(251, 182, 206, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(122, 61, 90, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.api:hover {
            box-shadow: 
              0 0 40px rgba(134, 239, 172, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(42, 106, 85, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.llm:hover {
            box-shadow: 
              0 0 40px rgba(253, 186, 140, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(138, 85, 53, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.social:hover {
            box-shadow: 
              0 0 30px rgba(180, 180, 180, 0.2),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(40, 40, 40, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-name {
            font-size: 14px;
            font-weight: 500;
          }
          
          .expanded-content {
            max-width: 400px;
            height: 350px;
          }
          
          .social-grid {
            gap: 32px;
            padding: 36px 48px;
          }
          
          .social-icon {
            width: 80px;
            height: 80px;
            border-radius: 20px;
          }
          
          .social-icon::before {
            border-radius: 20px 20px 50% 50%;
          }
          
          .social-icon:hover {
            transform: scale(1.05);
          }
          
          .social-name {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="services-page" style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(100px, 15vh, 160px)",
        paddingBottom: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Main App Grid */}
        <div className="services-grid">
          {apps.map((app) => (
            <div key={app.id} className="app-container">
              <div
                className={`app-icon ${app.id} ${isLoaded ? 'loaded' : ''}`}
                style={{ background: `linear-gradient(145deg, ${app.color[0]} 0%, ${app.color[1]} 100%)` }}
                onClick={() => handleAppClick(app.id, app.isFolder)}
              >
                {renderAppThumbnail(app.id)}
              </div>
              <span className={`app-name ${isLoaded ? 'loaded' : ''}`}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Service Views */}
      {apps.filter(app => !app.isFolder).map(app => (
        <div key={app.id} className={`expanded-view ${expandedService === app.id ? 'active' : ''}`}>
          <div className="expanded-title">{app.name}</div>
          <div className="expanded-desc">{serviceDescriptions[app.id]}</div>
          <div className="expanded-content">
            {expandedService === app.id && renderService3D(app.id, 250)}
          </div>
          <div className="expanded-close" onClick={() => setExpandedService(null)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      ))}

      {/* Social Folder Overlay */}
      <div className={`app-overlay ${openApp === 'social' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-title">Social</div>
        <div className="social-grid" onClick={e => e.stopPropagation()}>
          {socialLinks.map(social => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <div className={`social-icon ${social.id}`}>
                {social.id === 'tiktok' && <TikTokIcon />}
                {social.id === 'instagram' && <InstagramIcon />}
                {social.id === 'x' && <XIcon />}
              </div>
              <span className="social-name">{social.name}</span>
            </a>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}