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
            {type === 'work3d' && renderWork3D(item.id, 22)}
            {type === 'services3d' && renderService3D(item.id, 22)}
            {type === 'geometry' && <div style={{ transform: 'scale(0.16)' }}>{renderGeometry(item.id)}</div>}
            {type === 'experiences' && (
              <svg width="16" height="16" viewBox="0 0 60 60" fill="none">
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
        <div style={{ transform: 'scale(0.6)' }}><Trade69Icon /></div>
      </div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
        <div style={{ transform: 'scale(0.6)' }}><MegaAgentIcon /></div>
      </div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #2a2845, #151228)' }}>
        <div style={{ transform: 'scale(0.6)' }}><WebsiteIcon /></div>
      </div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a3530, #0d1a18)' }}>
        <div style={{ transform: 'scale(0.6)' }}><APIIcon /></div>
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
        /* MAIN GRID                                                   */
        /* ═══════════════════════════════════════════════════════════ */
        
        .creative-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 20px;
          max-width: 200px;
          margin: 0 auto;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* FOLDER ICON - iOS STYLE WITH 4 MINI ICONS                   */
        /* ═══════════════════════════════════════════════════════════ */
        
        .folder-icon {
          position: relative;
          width: 70px;
          height: 70px;
          border-radius: 16px;
          background: rgba(180, 180, 180, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.15),
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
        
        /* 4 mini icons grid inside folder - tight, no padding */
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3px;
          width: 58px;
          height: 58px;
        }
        
        .folder-mini-icon {
          width: 27px;
          height: 27px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        /* Folder name */
        .folder-name {
          font-size: 11px;
          font-weight: 400;
          color: #FAFAF8;
          text-align: center;
          opacity: 0;
          transform: translateY(5px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
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
        /* iOS FOLDER OVERLAY - PERFECT CENTERED EXPANSION             */
        /* ═══════════════════════════════════════════════════════════ */
        
        .folder-overlay {
          position: fixed;
          inset: 0;
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
          inset: 0;
          background: rgba(100, 100, 100, 0.35);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }
        
        /* Folder title above container */
        .folder-overlay-title {
          position: relative;
          z-index: 2;
          font-size: 24px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 14px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 18px;
          opacity: 0;
          transform: scale(0.4);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.active .folder-container {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Grid of apps inside folder */
        .folder-apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .folder-apps-grid.grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        
        .folder-apps-grid.grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }
        
        /* Each app inside folder */
        .folder-app {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.3);
          transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.active .folder-app {
          opacity: 1;
          transform: scale(1);
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
          width: 56px;
          height: 56px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.15s ease;
          overflow: hidden;
        }
        
        .folder-app-icon:active {
          transform: scale(0.9);
        }
        
        .folder-app-name {
          font-size: 10px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          max-width: 64px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* EXPANDED ITEM VIEW                                          */
        /* ═══════════════════════════════════════════════════════════ */
        
        .expanded-view {
          position: fixed;
          inset: 0;
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
        
        .expanded-title {
          font-size: 22px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 6px;
        }
        
        .expanded-desc {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }
        
        .expanded-content {
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .expanded-close {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: transparent;
          border: none;
        }
        
        .expanded-close:active {
          transform: translateX(-50%) scale(0.9);
        }
        
        .expanded-close svg {
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP - MUCH BIGGER                                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .creative-grid {
            gap: 48px 40px;
            max-width: 500px;
          }
          
          .app-container {
            gap: 12px;
          }
          
          .folder-icon {
            width: 160px;
            height: 160px;
            border-radius: 36px;
          }
          
          .folder-preview {
            width: 136px;
            height: 136px;
            gap: 8px;
          }
          
          .folder-mini-icon {
            width: 64px;
            height: 64px;
            border-radius: 14px;
          }
          
          .folder-name {
            font-size: 15px;
          }
          
          .folder-icon:hover {
            transform: scale(1.05);
          }
          
          .folder-overlay-title {
            font-size: 32px;
            margin-bottom: 20px;
          }
          
          .folder-container {
            padding: 32px;
            border-radius: 32px;
          }
          
          .folder-apps-grid {
            gap: 24px;
          }
          
          .folder-app-icon {
            width: 90px;
            height: 90px;
            border-radius: 22px;
          }
          
          .folder-app-icon:hover {
            transform: scale(1.06);
          }
          
          .folder-app-name {
            font-size: 13px;
            max-width: 90px;
          }
          
          .expanded-content {
            width: 450px;
            height: 450px;
          }
          
          .expanded-title {
            font-size: 28px;
          }
          
          .expanded-desc {
            font-size: 14px;
          }
        }
        
        /* Extra large screens */
        @media (min-width: 900px) {
          .creative-grid {
            gap: 56px 48px;
            max-width: 600px;
          }
          
          .folder-icon {
            width: 180px;
            height: 180px;
            border-radius: 40px;
          }
          
          .folder-preview {
            width: 152px;
            height: 152px;
            gap: 10px;
          }
          
          .folder-mini-icon {
            width: 71px;
            height: 71px;
            border-radius: 16px;
          }
          
          .folder-name {
            font-size: 16px;
          }
          
          .folder-container {
            padding: 40px;
          }
          
          .folder-apps-grid {
            gap: 28px;
          }
          
          .folder-app-icon {
            width: 100px;
            height: 100px;
            border-radius: 24px;
          }
          
          .folder-app-name {
            font-size: 14px;
          }
          
          .expanded-content {
            width: 520px;
            height: 520px;
          }
        }
      `}</style>

      <div className="creative-page" style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(100px, 15vh, 160px)",
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
                  {renderWork3D(item.id, 48)}
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
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
                  {renderService3D(item.id, 48)}
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
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
                  <div style={{ transform: 'scale(0.35)' }}>{renderGeometry(item.id)}</div>
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
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
                  <svg width="34" height="34" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="14" stroke="white" strokeWidth="2.5" opacity="0.8"/>
                    <circle cx="30" cy="30" r="5" fill="white" opacity="0.9"/>
                  </svg>
                </div>
                <span className="folder-app-name">{item.name}</span>
              </div>
            ))}
          </div>
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
      </div>

      {/* Expanded Views for Work 3D */}
      {work3DItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `work3d-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `work3d-${item.id}` && renderWork3D(item.id, 240)}
          </div>
        </div>
      ))}

      {/* Expanded Views for Services 3D */}
      {service3DItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `services3d-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `services3d-${item.id}` && renderService3D(item.id, 240)}
          </div>
        </div>
      ))}

      {/* Expanded Views for Geometry */}
      {geometryItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `geometry-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `geometry-${item.id}` && renderGeometry(item.id)}
          </div>
        </div>
      ))}

      {/* Expanded Views for Experiences */}
      {experienceItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `experiences-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `experiences-${item.id}` && renderExperience(item.id)}
          </div>
        </div>
      ))}
    </>
  );
}