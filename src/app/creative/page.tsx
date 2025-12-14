"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MetatronCube from "@/components/MetatronCube";
import GoldenSpiral from "@/components/GoldenSpiral";
import FlowerOfLife from "@/components/FlowerOfLife";
import GeometricDivider from "@/components/GeometricDivider";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon } from "@/components/WorkIcons";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";

// Dynamic imports for 3D - prevent SSR flash
const Trade69Icon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.Trade69Icon3D })), { ssr: false });
const MegaAgentIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.MegaAgentIcon3D })), { ssr: false });
const OctopusIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OctopusIcon3D })), { ssr: false });
const OvermindIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OvermindIcon3D })), { ssr: false });
const WebsiteIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.WebsiteIcon3D })), { ssr: false });
const DashboardIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.DashboardIcon3D })), { ssr: false });
const APIIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.APIIcon3D })), { ssr: false });
const LLMIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.LLMIcon3D })), { ssr: false });
const QuantumManifold = dynamic(() => import("@/components/QuantumManifold"), { ssr: false });
const QuantumSphere = dynamic(() => import("@/components/QuantumSphere"), { ssr: false });
const Trade69Architecture = dynamic(() => import("@/components/Trade69Architecture"), { ssr: false });

// App data - All are folders
const apps = [
  { id: 'work3d', name: 'Work 3D' },
  { id: 'services3d', name: 'Services 3D' },
  { id: 'geometry', name: 'Geometry' },
  { id: 'experiences', name: 'Experiences' },
  { id: 'icons', name: 'Icons' },
];

// Work 3D items - Darker elegant colors
const work3DItems = [
  { id: 'trade69', name: 'Trade69', desc: 'Holographic trading terminal', color: ['#1a5040', '#0d2820'] },
  { id: 'megaagent', name: 'MegaAgent', desc: 'Quantum neural network', color: ['#3d4a8f', '#1e2550'] },
  { id: 'octopus', name: 'Octopus', desc: 'Bioluminescent entity', color: ['#8f3d6b', '#501e3a'] },
  { id: 'overmind', name: 'Overmind', desc: 'Cosmic consciousness', color: ['#5a3d8f', '#2e1e50'] },
];

// Service 3D items - Darker elegant colors
const service3DItems = [
  { id: 'website', name: 'Web Apps', desc: 'Holographic floating layers', color: ['#2a2845', '#151228'] },
  { id: 'dashboard', name: 'Dashboards', desc: 'Circular HUD with data arcs', color: ['#452838', '#281518'] },
  { id: 'api', name: 'API', desc: 'Constellation network', color: ['#1a3530', '#0d1a18'] },
  { id: 'llm', name: 'LLM', desc: 'Neural brain visualization', color: ['#453020', '#281a10'] },
];

// Geometry items - Darker elegant colors
const geometryItems = [
  { id: 'metatron', name: 'Metatron', desc: 'Blueprint of creation', color: ['#3a2855', '#1e1430'] },
  { id: 'spiral', name: 'Spiral', desc: 'Nature\'s perfect ratio', color: ['#552838', '#301418'] },
  { id: 'flower', name: 'Flower', desc: 'Pattern of genesis', color: ['#283855', '#141e30'] },
  { id: 'lemniscate', name: 'Infinity', desc: 'Eternal symbol', color: ['#385528', '#1e3014'] },
];

// Experience items - Darker elegant colors
const experienceItems = [
  { id: 'sphere', name: 'Sphere', desc: 'Living geodesic structure', color: ['#5a4018', '#30220c'] },
  { id: 'manifold', name: 'Manifold', desc: 'Field of possibility', color: ['#405a18', '#22300c'] },
  { id: 'architecture', name: 'Architecture', desc: 'System visualization', color: ['#18405a', '#0c2230'] },
];

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when overlay or expanded view is open
  useEffect(() => {
    if (openApp || expandedItem) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [openApp, expandedItem]);

  const renderWork3D = (id: string, size: number) => {
    switch (id) {
      case 'trade69': return <Trade69Icon3D size={size} />;
      case 'megaagent': return <MegaAgentIcon3D size={size} />;
      case 'octopus': return <OctopusIcon3D size={size} />;
      case 'overmind': return <OvermindIcon3D size={size} />;
      default: return null;
    }
  };

  const renderService3D = (id: string, size: number) => {
    switch (id) {
      case 'website': return <WebsiteIcon3D size={size} />;
      case 'dashboard': return <DashboardIcon3D size={size} />;
      case 'api': return <APIIcon3D size={size} />;
      case 'llm': return <LLMIcon3D size={size} />;
      default: return null;
    }
  };

  const renderGeometry = (id: string) => {
    switch (id) {
      case 'metatron': return <MetatronCube />;
      case 'spiral': return <GoldenSpiral />;
      case 'flower': return <FlowerOfLife />;
      case 'lemniscate': return <GeometricDivider />;
      default: return null;
    }
  };

  const renderExperience = (id: string) => {
    switch (id) {
      case 'sphere': return <QuantumSphere />;
      case 'manifold': return <QuantumManifold />;
      case 'architecture': return <Trade69Architecture />;
      default: return null;
    }
  };

  // Render folder preview with 4 mini 3D icons inside
  const renderFolderPreview = (type: string) => {
    const items = type === 'work3d' ? work3DItems :
                  type === 'services3d' ? service3DItems :
                  type === 'geometry' ? geometryItems :
                  type === 'experiences' ? experienceItems : work3DItems;

    return (
      <div className="folder-preview">
        {items.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className="folder-mini-icon"
            style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}
          >
            {type === 'work3d' && renderWork3D(item.id, 30)}
            {type === 'services3d' && renderService3D(item.id, 30)}
            {type === 'geometry' && <div style={{ transform: 'scale(0.22)' }}>{renderGeometry(item.id)}</div>}
            {type === 'experiences' && (
              <svg width="22" height="22" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="14" stroke="white" strokeWidth="3" opacity="0.9"/>
                <circle cx="30" cy="30" r="5" fill="white" opacity="0.9"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Icons folder preview - darker elegant colors
  const renderIconsFolderPreview = () => (
    <div className="folder-preview">
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}>
        <div style={{ transform: 'scale(0.8)' }}><Trade69Icon /></div>
      </div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
        <div style={{ transform: 'scale(0.8)' }}><MegaAgentIcon /></div>
      </div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #2a2845, #151228)' }}>
        <div style={{ transform: 'scale(0.8)' }}><WebsiteIcon /></div>
      </div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a3530, #0d1a18)' }}>
        <div style={{ transform: 'scale(0.8)' }}><APIIcon /></div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - iOS FOLDER SYSTEM                        */
        /* ═══════════════════════════════════════════════════════════ */
        
        .creative-page {
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* MAIN GRID - USE THE SPACE                                   */
        /* ═══════════════════════════════════════════════════════════ */
        
        .creative-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 32px;
          max-width: 300px;
          margin: 0 auto;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* FOLDER ICON - BIGGER SIZE                                   */
        /* ═══════════════════════════════════════════════════════════ */
        
        .folder-icon {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 24px;
          background: rgba(150, 150, 150, 0.22);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          /* Floating effect - icons look alive */
          box-shadow: 
            0 6px 24px rgba(0, 0, 0, 0.35),
            0 12px 48px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(255, 255, 255, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
        }
        
        .folder-icon.loaded {
          opacity: 1;
          transform: scale(1);
        }
        
        .folder-icon:active {
          transform: scale(0.92);
        }
        
        /* Staggered load animation */
        .app-container:nth-child(1) .folder-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .folder-icon { transition-delay: 50ms; }
        .app-container:nth-child(3) .folder-icon { transition-delay: 100ms; }
        .app-container:nth-child(4) .folder-icon { transition-delay: 150ms; }
        .app-container:nth-child(5) .folder-icon { transition-delay: 200ms; }
        
        /* 4 mini icons grid inside folder */
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          width: 84px;
          height: 84px;
        }
        
        .folder-mini-icon {
          width: 39px;
          height: 39px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          /* Mini floating glow */
          box-shadow: 
            0 3px 10px rgba(0, 0, 0, 0.35),
            0 0 8px rgba(255, 255, 255, 0.05);
        }
        
        /* Folder name */
        .folder-name {
          font-size: 13px;
          font-weight: 400;
          color: #FAFAF8;
          text-align: center;
          opacity: 0;
          transform: translateY(5px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
        }
        
        .folder-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        .app-container:nth-child(1) .folder-name { transition-delay: 80ms; }
        .app-container:nth-child(2) .folder-name { transition-delay: 130ms; }
        .app-container:nth-child(3) .folder-name { transition-delay: 180ms; }
        .app-container:nth-child(4) .folder-name { transition-delay: 230ms; }
        .app-container:nth-child(5) .folder-name { transition-delay: 280ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* iOS FOLDER OVERLAY - PERFECTLY CENTERED                     */
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
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        
        .folder-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        /* Blurred background - click to close */
        .folder-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(50, 50, 50, 0.45);
          backdrop-filter: blur(35px);
          -webkit-backdrop-filter: blur(35px);
        }
        
        /* Folder title above container */
        .folder-overlay-title {
          position: relative;
          z-index: 2;
          font-size: 24px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 16px;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.25s ease 0.08s, transform 0.25s ease 0.08s;
        }
        
        .folder-overlay.active .folder-overlay-title {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* White frosted glass container - grows from center */
        .folder-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.93);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 24px;
          opacity: 0;
          transform: scale(0.4);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          /* Floating container glow */
          box-shadow: 
            0 15px 50px rgba(0, 0, 0, 0.35),
            0 0 60px rgba(255, 255, 255, 0.08);
        }
        
        .folder-overlay.active .folder-container {
          opacity: 1;
          transform: scale(1);
        }
        
        /* X close button - below container */
        .folder-close {
          position: relative;
          z-index: 2;
          margin-top: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.3s ease 0.15s, transform 0.3s ease 0.15s, background 0.15s ease;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        
        .folder-overlay.active .folder-close {
          opacity: 1;
          transform: scale(1);
        }
        
        .folder-close:active {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0.9);
        }
        
        /* Grid of apps inside folder */
        .folder-apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        
        .folder-apps-grid.grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        
        .folder-apps-grid.grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }
        
        /* Each app inside folder - FLOATING WITH GLOW */
        .folder-app {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.3) translateY(10px);
          transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.active .folder-app {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        /* Staggered pop-in - fast and snappy */
        .folder-overlay.active .folder-app:nth-child(1) { transition-delay: 0.06s; }
        .folder-overlay.active .folder-app:nth-child(2) { transition-delay: 0.09s; }
        .folder-overlay.active .folder-app:nth-child(3) { transition-delay: 0.12s; }
        .folder-overlay.active .folder-app:nth-child(4) { transition-delay: 0.15s; }
        .folder-overlay.active .folder-app:nth-child(5) { transition-delay: 0.18s; }
        .folder-overlay.active .folder-app:nth-child(6) { transition-delay: 0.21s; }
        .folder-overlay.active .folder-app:nth-child(7) { transition-delay: 0.24s; }
        .folder-overlay.active .folder-app:nth-child(8) { transition-delay: 0.27s; }
        
        .folder-app-icon {
          width: 70px;
          height: 70px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.15s ease;
          overflow: hidden;
          /* FLOATING GLOW - makes icons look alive */
          box-shadow: 
            0 5px 18px rgba(0, 0, 0, 0.4),
            0 10px 36px rgba(0, 0, 0, 0.2),
            0 0 24px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        }
        
        .folder-app-icon:active {
          transform: scale(0.9);
        }
        
        .folder-app-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          max-width: 76px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* EXPANDED ITEM VIEW - PERFECTLY CENTERED                     */
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
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        
        .expanded-view.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        .expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .expanded-title {
          font-size: 22px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 6px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        
        .expanded-desc {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }
        
        .expanded-content {
          width: 240px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* 3D floating effect */
          filter: drop-shadow(0 15px 40px rgba(0, 0, 0, 0.6));
        }
        
        /* X close button - below 3D content */
        .expanded-close {
          margin-top: 28px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.15s ease;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .expanded-close:active {
          background: rgba(255, 255, 255, 0.22);
          transform: scale(0.9);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP - BIGGER                                            */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .creative-grid {
            gap: 40px 36px;
            max-width: 400px;
          }
          
          .app-container {
            gap: 10px;
          }
          
          .folder-icon {
            width: 140px;
            height: 140px;
            border-radius: 32px;
          }
          
          .folder-preview {
            width: 116px;
            height: 116px;
            gap: 6px;
          }
          
          .folder-mini-icon {
            width: 55px;
            height: 55px;
            border-radius: 12px;
          }
          
          .folder-name {
            font-size: 14px;
          }
          
          .folder-icon:hover {
            transform: scale(1.04);
            box-shadow: 
              0 8px 30px rgba(0, 0, 0, 0.4),
              0 12px 50px rgba(0, 0, 0, 0.25),
              0 0 40px rgba(255, 255, 255, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
          
          .folder-overlay-title {
            font-size: 28px;
            margin-bottom: 18px;
          }
          
          .folder-container {
            padding: 28px;
            border-radius: 28px;
          }
          
          .folder-apps-grid {
            gap: 20px;
          }
          
          .folder-app-icon {
            width: 80px;
            height: 80px;
            border-radius: 18px;
          }
          
          .folder-app-icon:hover {
            transform: scale(1.06);
            box-shadow: 
              0 6px 24px rgba(0, 0, 0, 0.4),
              0 12px 40px rgba(0, 0, 0, 0.25),
              0 0 30px rgba(255, 255, 255, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
          
          .folder-app-name {
            font-size: 12px;
            max-width: 85px;
          }
          
          .expanded-content {
            width: 340px;
            height: 340px;
          }
          
          .expanded-title {
            font-size: 26px;
          }
          
          .expanded-desc {
            font-size: 13px;
            margin-bottom: 20px;
          }
        }
        
        /* Extra large screens */
        @media (min-width: 900px) {
          .creative-grid {
            gap: 50px 44px;
            max-width: 520px;
          }
          
          .folder-icon {
            width: 170px;
            height: 170px;
            border-radius: 38px;
          }
          
          .folder-preview {
            width: 142px;
            height: 142px;
            gap: 8px;
          }
          
          .folder-mini-icon {
            width: 67px;
            height: 67px;
            border-radius: 15px;
          }
          
          .folder-name {
            font-size: 15px;
          }
          
          .folder-container {
            padding: 36px;
          }
          
          .folder-apps-grid {
            gap: 26px;
          }
          
          .folder-app-icon {
            width: 95px;
            height: 95px;
            border-radius: 22px;
          }
          
          .folder-app-name {
            font-size: 13px;
          }
          
          .expanded-content {
            width: 420px;
            height: 420px;
          }
        }
      `}</style>

      <div className="creative-page" style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(90px, 12vh, 140px)",
        paddingBottom: "100px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Main Folder Grid */}
        <div className="creative-grid">
          {apps.map((app) => (
            <div key={app.id} className="app-container">
              <div
                className={`folder-icon ${isLoaded ? 'loaded' : ''}`}
                onClick={() => setOpenApp(app.id)}
              >
                {app.id === 'icons' ? renderIconsFolderPreview() : renderFolderPreview(app.id)}
              </div>
              <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Work 3D Folder Overlay */}
      <div className={`folder-overlay ${openApp === 'work3d' ? 'active' : ''}`}>
        <div className="folder-overlay-bg" onClick={() => setOpenApp(null)} />
        <div className="folder-overlay-title">Work 3D</div>
        <div className="folder-container">
          <div className="folder-apps-grid">
            {work3DItems.map(item => (
              <div key={item.id} className="folder-app" onClick={() => setExpandedItem(`work3d-${item.id}`)}>
                <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {renderWork3D(item.id, 52)}
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="folder-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Services 3D Folder Overlay */}
      <div className={`folder-overlay ${openApp === 'services3d' ? 'active' : ''}`}>
        <div className="folder-overlay-bg" onClick={() => setOpenApp(null)} />
        <div className="folder-overlay-title">Services 3D</div>
        <div className="folder-container">
          <div className="folder-apps-grid">
            {service3DItems.map(item => (
              <div key={item.id} className="folder-app" onClick={() => setExpandedItem(`services3d-${item.id}`)}>
                <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {renderService3D(item.id, 52)}
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="folder-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Geometry Folder Overlay */}
      <div className={`folder-overlay ${openApp === 'geometry' ? 'active' : ''}`}>
        <div className="folder-overlay-bg" onClick={() => setOpenApp(null)} />
        <div className="folder-overlay-title">Sacred Geometry</div>
        <div className="folder-container">
          <div className="folder-apps-grid">
            {geometryItems.map(item => (
              <div key={item.id} className="folder-app" onClick={() => setExpandedItem(`geometry-${item.id}`)}>
                <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  <div style={{ transform: 'scale(0.40)' }}>{renderGeometry(item.id)}</div>
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="folder-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Experiences Folder Overlay */}
      <div className={`folder-overlay ${openApp === 'experiences' ? 'active' : ''}`}>
        <div className="folder-overlay-bg" onClick={() => setOpenApp(null)} />
        <div className="folder-overlay-title">Experiences</div>
        <div className="folder-container">
          <div className="folder-apps-grid grid-3">
            {experienceItems.map(item => (
              <div key={item.id} className="folder-app" onClick={() => setExpandedItem(`experiences-${item.id}`)}>
                <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  <svg width="38" height="38" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="14" stroke="white" strokeWidth="2.5" opacity="0.8"/>
                    <circle cx="30" cy="30" r="5" fill="white" opacity="0.9"/>
                  </svg>
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="folder-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Icons Folder Overlay */}
      <div className={`folder-overlay ${openApp === 'icons' ? 'active' : ''}`}>
        <div className="folder-overlay-bg" onClick={() => setOpenApp(null)} />
        <div className="folder-overlay-title">Icons</div>
        <div className="folder-container">
          <div className="folder-apps-grid grid-4">
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}><Trade69Icon /></div>
              <span className="folder-app-name">Trade69</span>
            </div>
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}><MegaAgentIcon /></div>
              <span className="folder-app-name">MegaAgent</span>
            </div>
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #8f3d6b, #501e3a)' }}><OctopusIcon /></div>
              <span className="folder-app-name">Octopus</span>
            </div>
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #5a3d8f, #2e1e50)' }}><OvermindIcon /></div>
              <span className="folder-app-name">Overmind</span>
            </div>
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #2a2845, #151228)' }}><WebsiteIcon /></div>
              <span className="folder-app-name">Web</span>
            </div>
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #452838, #281518)' }}><DashboardIcon /></div>
              <span className="folder-app-name">Dashboard</span>
            </div>
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #1a3530, #0d1a18)' }}><APIIcon /></div>
              <span className="folder-app-name">API</span>
            </div>
            <div className="folder-app">
              <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #453020, #281a10)' }}><LLMIcon /></div>
              <span className="folder-app-name">LLM</span>
            </div>
          </div>
        </div>
        <div className="folder-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Expanded Views for Work 3D */}
      {work3DItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `work3d-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content">
              {expandedItem === `work3d-${item.id}` && renderWork3D(item.id, 200)}
            </div>
            <div className="expanded-close" onClick={() => setExpandedItem(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Expanded Views for Services 3D */}
      {service3DItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `services3d-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content">
              {expandedItem === `services3d-${item.id}` && renderService3D(item.id, 200)}
            </div>
            <div className="expanded-close" onClick={() => setExpandedItem(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Expanded Views for Geometry */}
      {geometryItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `geometry-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content">
              {expandedItem === `geometry-${item.id}` && renderGeometry(item.id)}
            </div>
            <div className="expanded-close" onClick={() => setExpandedItem(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Expanded Views for Experiences */}
      {experienceItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `experiences-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content">
              {expandedItem === `experiences-${item.id}` && renderExperience(item.id)}
            </div>
            <div className="expanded-close" onClick={() => setExpandedItem(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}