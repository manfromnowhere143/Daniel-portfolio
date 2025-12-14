"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import MetatronCube from "@/components/MetatronCube";
import GoldenSpiral from "@/components/GoldenSpiral";
import FlowerOfLife from "@/components/FlowerOfLife";
import GeometricDivider from "@/components/GeometricDivider";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon } from "@/components/WorkIcons";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";

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

const apps = [
  { id: 'work3d', name: 'Work 3D' },
  { id: 'services3d', name: 'Services 3D' },
  { id: 'geometry', name: 'Geometry' },
  { id: 'experiences', name: 'Experiences' },
  { id: 'icons', name: 'Icons' },
];

const work3DItems = [
  { id: 'trade69', name: 'Trade69', desc: 'Holographic trading terminal', color: ['#1a5040', '#0d2820'] },
  { id: 'megaagent', name: 'MegaAgent', desc: 'Quantum neural network', color: ['#3d4a8f', '#1e2550'] },
  { id: 'octopus', name: 'Octopus', desc: 'Bioluminescent entity', color: ['#8f3d6b', '#501e3a'] },
  { id: 'overmind', name: 'Overmind', desc: 'Cosmic consciousness', color: ['#5a3d8f', '#2e1e50'] },
];

const service3DItems = [
  { id: 'website', name: 'Web Apps', desc: 'Holographic floating layers', color: ['#2a2845', '#151228'] },
  { id: 'dashboard', name: 'Dashboards', desc: 'Circular HUD with data arcs', color: ['#452838', '#281518'] },
  { id: 'api', name: 'API', desc: 'Constellation network', color: ['#1a3530', '#0d1a18'] },
  { id: 'llm', name: 'LLM', desc: 'Neural brain visualization', color: ['#453020', '#281a10'] },
];

const geometryItems = [
  { id: 'metatron', name: 'Metatron', desc: 'Blueprint of creation', color: ['#3a2855', '#1e1430'] },
  { id: 'spiral', name: 'Spiral', desc: 'Nature\'s perfect ratio', color: ['#552838', '#301418'] },
  { id: 'flower', name: 'Flower', desc: 'Pattern of genesis', color: ['#283855', '#141e30'] },
  { id: 'lemniscate', name: 'Infinity', desc: 'Eternal symbol', color: ['#385528', '#1e3014'] },
];

const experienceItems = [
  { id: 'sphere', name: 'Sphere', desc: 'Living geodesic structure', color: ['#5a4018', '#30220c'] },
  { id: 'manifold', name: 'Manifold', desc: 'Field of possibility', color: ['#405a18', '#22300c'] },
  { id: 'architecture', name: 'Architecture', desc: 'System visualization', color: ['#18405a', '#0c2230'] },
];

type AnimationPhase = 'idle' | 'mounting' | 'entering' | 'active' | 'exiting' | 'unmounting';

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [folderPhase, setFolderPhase] = useState<AnimationPhase>('idle');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<AnimationPhase>('idle');

  const folderRAF = useRef<number | null>(null);
  const expandedRAF = useRef<number | null>(null);
  const folderTimeout = useRef<NodeJS.Timeout | null>(null);
  const expandedTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMounted = useRef(true);
  const scrollYRef = useRef(0);

  useEffect(() => {
    isMounted.current = true;
    const timer = setTimeout(() => {
      if (isMounted.current) setIsLoaded(true);
    }, 50);
    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (folderRAF.current) cancelAnimationFrame(folderRAF.current);
      if (expandedRAF.current) cancelAnimationFrame(expandedRAF.current);
      if (folderTimeout.current) clearTimeout(folderTimeout.current);
      if (expandedTimeout.current) clearTimeout(expandedTimeout.current);
    };
  }, []);

  const handleOpenFolder = useCallback((appId: string) => {
    if (folderPhase !== 'idle') return;
    setOpenApp(appId);
    setFolderPhase('mounting');
    folderRAF.current = requestAnimationFrame(() => {
      if (!isMounted.current) return;
      folderRAF.current = requestAnimationFrame(() => {
        if (!isMounted.current) return;
        setFolderPhase('entering');
        folderRAF.current = requestAnimationFrame(() => {
          if (!isMounted.current) return;
          setFolderPhase('active');
        });
      });
    });
  }, [folderPhase]);

  const handleCloseFolder = useCallback(() => {
    if (folderPhase !== 'active') return;
    setFolderPhase('exiting');
    folderTimeout.current = setTimeout(() => {
      if (!isMounted.current) return;
      setFolderPhase('unmounting');
      folderRAF.current = requestAnimationFrame(() => {
        if (!isMounted.current) return;
        setOpenApp(null);
        setFolderPhase('idle');
      });
    }, 300);
  }, [folderPhase]);

  const handleOpenExpanded = useCallback((itemId: string) => {
    if (expandedPhase !== 'idle') return;
    setExpandedItem(itemId);
    setExpandedPhase('mounting');
    expandedRAF.current = requestAnimationFrame(() => {
      if (!isMounted.current) return;
      expandedRAF.current = requestAnimationFrame(() => {
        if (!isMounted.current) return;
        setExpandedPhase('entering');
        expandedRAF.current = requestAnimationFrame(() => {
          if (!isMounted.current) return;
          setExpandedPhase('active');
        });
      });
    });
  }, [expandedPhase]);

  const handleCloseExpanded = useCallback(() => {
    if (expandedPhase !== 'active') return;
    setExpandedPhase('exiting');
    expandedTimeout.current = setTimeout(() => {
      if (!isMounted.current) return;
      setExpandedPhase('unmounting');
      expandedRAF.current = requestAnimationFrame(() => {
        if (!isMounted.current) return;
        setExpandedItem(null);
        setExpandedPhase('idle');
      });
    }, 320);
  }, [expandedPhase]);

  useEffect(() => {
    const isOpen = folderPhase !== 'idle' || expandedPhase !== 'idle';
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.cssText = `overflow:hidden;position:fixed;top:-${scrollYRef.current}px;left:0;right:0;padding-right:${scrollBarWidth}px;`;
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.cssText = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.cssText = '';
      document.documentElement.style.overflow = '';
    };
  }, [folderPhase, expandedPhase]);

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

  const renderServiceMiniIcon = (id: string) => {
    switch (id) {
      case 'website': return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.5" opacity="0.9"/><path d="M3 8h18" stroke="white" strokeWidth="1" opacity="0.6"/><circle cx="5.5" cy="6" r="0.8" fill="white" opacity="0.8"/><circle cx="8" cy="6" r="0.8" fill="white" opacity="0.8"/><rect x="6" y="11" width="5" height="4" rx="0.5" fill="white" opacity="0.5"/><rect x="13" y="11" width="5" height="1.5" rx="0.5" fill="white" opacity="0.4"/></svg>;
      case 'dashboard': return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1" opacity="0.5"/><path d="M12 6v3M12 15v3M6 12h3M15 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/><circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/></svg>;
      case 'api': return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2" fill="white" opacity="0.9"/><circle cx="5" cy="12" r="2" fill="white" opacity="0.9"/><circle cx="19" cy="12" r="2" fill="white" opacity="0.9"/><circle cx="12" cy="19" r="2" fill="white" opacity="0.9"/><path d="M12 7v4M12 13v4M7 12h4M13 12h4" stroke="white" strokeWidth="1.5" opacity="0.6"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.7"/></svg>;
      case 'llm': return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="9" ry="5" stroke="white" strokeWidth="1.2" opacity="0.5"/><ellipse cx="12" cy="12" rx="9" ry="5" stroke="white" strokeWidth="1.2" opacity="0.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="5" stroke="white" strokeWidth="1.2" opacity="0.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="3" fill="white" opacity="0.9"/></svg>;
      default: return null;
    }
  };

  const renderGeometryMiniIcon = (id: string) => {
    switch (id) {
      case 'metatron': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1" opacity="0.6"/><circle cx="12" cy="4" r="1.5" fill="white" opacity="0.8"/><circle cx="12" cy="20" r="1.5" fill="white" opacity="0.8"/><circle cx="5" cy="8" r="1.5" fill="white" opacity="0.8"/><circle cx="19" cy="8" r="1.5" fill="white" opacity="0.8"/><circle cx="5" cy="16" r="1.5" fill="white" opacity="0.8"/><circle cx="19" cy="16" r="1.5" fill="white" opacity="0.8"/><circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/></svg>;
      case 'spiral': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 12c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5c4 0 7.5 3.5 7.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" fill="none"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/></svg>;
      case 'flower': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1" opacity="0.9"/><circle cx="12" cy="6" r="3" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="12" cy="18" r="3" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="6.8" cy="9" r="3" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="17.2" cy="9" r="3" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="6.8" cy="15" r="3" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="17.2" cy="15" r="3" stroke="white" strokeWidth="1" opacity="0.5"/></svg>;
      case 'lemniscate': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 12c-2-2-5-2-5 1s3 3 5 1c2 2 5 2 5-1s-3-3-5-1z" stroke="white" strokeWidth="1.8" fill="none" opacity="0.9"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/></svg>;
      default: return null;
    }
  };

  const renderExperienceMiniIcon = (id: string) => {
    switch (id) {
      case 'sphere': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.2" opacity="0.8"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="white" strokeWidth="0.8" opacity="0.5"/><ellipse cx="12" cy="12" rx="3" ry="8" stroke="white" strokeWidth="0.8" opacity="0.5"/><circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/></svg>;
      case 'manifold': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4v16M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="0.8" opacity="0.4"/><circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1" opacity="0.6"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/><circle cx="8" cy="8" r="1" fill="white" opacity="0.6"/><circle cx="16" cy="8" r="1" fill="white" opacity="0.6"/><circle cx="8" cy="16" r="1" fill="white" opacity="0.6"/><circle cx="16" cy="16" r="1" fill="white" opacity="0.6"/></svg>;
      case 'architecture': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="6" height="10" rx="1" stroke="white" strokeWidth="1" opacity="0.7"/><rect x="14" y="6" width="6" height="12" rx="1" stroke="white" strokeWidth="1" opacity="0.7"/><path d="M10 13h4" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="7" cy="11" r="1" fill="white" opacity="0.8"/><circle cx="17" cy="10" r="1" fill="white" opacity="0.8"/></svg>;
      default: return null;
    }
  };

  const renderFolderPreview = (type: string) => {
    const items = type === 'work3d' ? work3DItems : type === 'services3d' ? service3DItems : type === 'geometry' ? geometryItems : type === 'experiences' ? experienceItems : work3DItems;
    return (
      <div className="folder-preview">
        {items.slice(0, 4).map((item, i) => (
          <div key={i} className="folder-mini-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
            {type === 'work3d' && renderWork3D(item.id, 30)}
            {type === 'services3d' && renderServiceMiniIcon(item.id)}
            {type === 'geometry' && renderGeometryMiniIcon(item.id)}
            {type === 'experiences' && renderExperienceMiniIcon(item.id)}
          </div>
        ))}
      </div>
    );
  };

  const renderIconsFolderPreview = () => (
    <div className="folder-preview">
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}><div style={{ transform: 'scale(0.8)' }}><Trade69Icon /></div></div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}><div style={{ transform: 'scale(0.8)' }}><MegaAgentIcon /></div></div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #2a2845, #151228)' }}><div style={{ transform: 'scale(0.8)' }}><WebsiteIcon /></div></div>
      <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a3530, #0d1a18)' }}><div style={{ transform: 'scale(0.8)' }}><APIIcon /></div></div>
    </div>
  );

  const getFolderClass = (appId: string) => openApp === appId ? folderPhase : '';
  const getExpandedClass = (itemId: string) => expandedItem === itemId ? expandedPhase : '';
  const shouldRenderFolder = (appId: string) => openApp === appId && folderPhase !== 'idle';
  const shouldRenderExpanded = (itemId: string) => expandedItem === itemId && expandedPhase !== 'idle';

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* NUCLEAR TAP HIGHLIGHT REMOVAL - NO FLASHES ANYWHERE                     */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        html {
          -webkit-tap-highlight-color: transparent;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          tap-highlight-color: transparent;
        }
        
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
          outline: none;
        }
        
        *:focus {
          outline: none;
        }
        
        *:active {
          -webkit-tap-highlight-color: transparent;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          tap-highlight-color: transparent;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* PAGE SETUP                                                              */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .creative-page {
          min-height: 100vh;
          min-height: 100dvh;
          background-color: #0A0A0A;
          padding-top: clamp(90px, 12vh, 140px);
          padding-bottom: 100px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
        }
        
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
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* FOLDER ICONS                                                            */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .folder-icon {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 24px;
          background: rgba(140, 140, 140, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.8);
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4), 0 16px 48px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.35), inset 0 -1px 1px rgba(0, 0, 0, 0.15);
        }
        
        .folder-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%);
          border-radius: 24px 24px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .folder-icon.loaded {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        
        .folder-icon:active {
          transform: translate3d(0, 0, 0) scale(0.92);
          transition: transform 0.08s ease-out;
        }
        
        .app-container:nth-child(1) .folder-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .folder-icon { transition-delay: 40ms; }
        .app-container:nth-child(3) .folder-icon { transition-delay: 80ms; }
        .app-container:nth-child(4) .folder-icon { transition-delay: 120ms; }
        .app-container:nth-child(5) .folder-icon { transition-delay: 160ms; }
        
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          width: 84px;
          height: 84px;
          pointer-events: none;
        }
        
        .folder-mini-icon {
          width: 39px;
          height: 39px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          pointer-events: none;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .folder-mini-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
          border-radius: 10px 10px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-name {
          font-size: 13px;
          font-weight: 400;
          color: #FAFAF8;
          text-align: center;
          opacity: 0;
          transform: translate3d(0, 5px, 0);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8);
          will-change: transform, opacity;
          pointer-events: none;
        }
        
        .folder-name.loaded {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        
        .app-container:nth-child(1) .folder-name { transition-delay: 60ms; }
        .app-container:nth-child(2) .folder-name { transition-delay: 100ms; }
        .app-container:nth-child(3) .folder-name { transition-delay: 140ms; }
        .app-container:nth-child(4) .folder-name { transition-delay: 180ms; }
        .app-container:nth-child(5) .folder-name { transition-delay: 220ms; }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* FOLDER OVERLAY                                                          */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .folder-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(100px, 18vh, 180px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          will-change: opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          transition: none;
        }
        
        .folder-overlay.mounting, .folder-overlay.entering {
          visibility: visible;
          opacity: 0;
          pointer-events: auto;
        }
        
        .folder-overlay.active {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .folder-overlay.exiting {
          visibility: visible;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .folder-overlay.unmounting {
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        }
        
        .folder-overlay-bg {
          position: absolute;
          inset: 0;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          transform: translateZ(0);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* FOLDER CONTAINER - WHITE BOX                                            */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .folder-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 24px;
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.72);
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transition: none;
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.15), 0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.8);
        }
        
        .folder-overlay.active .folder-container {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.02s, transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) 0.02s;
        }
        
        .folder-overlay.exiting .folder-container {
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.85);
          transition: opacity 0.2s ease-out, transform 0.22s ease-out;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* FOLDER CLOSE BUTTON                                                     */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .folder-close {
          position: relative;
          z-index: 2;
          margin-top: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.5);
          will-change: transform, opacity;
          transition: none;
        }
        
        .folder-overlay.active .folder-close {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.26s ease 0.1s, transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }
        
        .folder-overlay.exiting .folder-close {
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.7);
          transition: opacity 0.12s ease, transform 0.15s ease;
        }
        
        .folder-close svg {
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }
        
        .folder-close:active {
          transform: translate3d(0, 0, 0) scale(0.85);
          transition: transform 0.08s ease-out;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* FOLDER APPS GRID                                                        */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .folder-apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        
        .folder-apps-grid.grid-3 { grid-template-columns: repeat(3, 1fr); }
        .folder-apps-grid.grid-4 { grid-template-columns: repeat(4, 1fr); }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* FOLDER APP - COMPLETELY NO TAP HIGHLIGHT                                */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .folder-app {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0;
          transform: translate3d(0, 12px, 0) scale(0.7);
          will-change: transform, opacity;
          transition: none;
          /* CRITICAL: These prevent the white flash */
          -webkit-tap-highlight-color: transparent;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          background: transparent;
        }
        
        .folder-overlay.active .folder-app {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.exiting .folder-app {
          opacity: 0;
          transform: translate3d(0, 5px, 0) scale(0.88);
          transition: opacity 0.1s ease, transform 0.12s ease;
        }
        
        .folder-overlay.active .folder-app:nth-child(1) { transition-delay: 0.02s; }
        .folder-overlay.active .folder-app:nth-child(2) { transition-delay: 0.04s; }
        .folder-overlay.active .folder-app:nth-child(3) { transition-delay: 0.06s; }
        .folder-overlay.active .folder-app:nth-child(4) { transition-delay: 0.08s; }
        .folder-overlay.active .folder-app:nth-child(5) { transition-delay: 0.10s; }
        .folder-overlay.active .folder-app:nth-child(6) { transition-delay: 0.12s; }
        .folder-overlay.active .folder-app:nth-child(7) { transition-delay: 0.14s; }
        .folder-overlay.active .folder-app:nth-child(8) { transition-delay: 0.16s; }
        
        .folder-overlay.exiting .folder-app:nth-child(8) { transition-delay: 0ms; }
        .folder-overlay.exiting .folder-app:nth-child(7) { transition-delay: 8ms; }
        .folder-overlay.exiting .folder-app:nth-child(6) { transition-delay: 16ms; }
        .folder-overlay.exiting .folder-app:nth-child(5) { transition-delay: 24ms; }
        .folder-overlay.exiting .folder-app:nth-child(4) { transition-delay: 32ms; }
        .folder-overlay.exiting .folder-app:nth-child(3) { transition-delay: 40ms; }
        .folder-overlay.exiting .folder-app:nth-child(2) { transition-delay: 48ms; }
        .folder-overlay.exiting .folder-app:nth-child(1) { transition-delay: 56ms; }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* FOLDER APP ICON - NO FLASH ON TAP                                       */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .folder-app-icon {
          width: 70px;
          height: 70px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transform: translateZ(0);
          will-change: transform;
          transition: transform 0.1s ease;
          /* CRITICAL: No flash */
          -webkit-tap-highlight-color: transparent;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.12), 0 6px 20px rgba(0, 0, 0, 0.45), 0 12px 40px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.2);
        }
        
        .folder-app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 17px 17px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .folder-app-icon:active {
          transform: translateZ(0) scale(0.88);
          transition: transform 0.08s ease-out;
        }
        
        .folder-app-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          max-width: 76px;
          pointer-events: none;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* EXPANDED VIEW                                                           */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        .expanded-view {
          position: fixed;
          inset: 0;
          background: #0A0A0A;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(80px, 15vh, 150px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          will-change: opacity;
          transform: translateZ(0);
          transition: none;
        }
        
        .expanded-view.mounting, .expanded-view.entering {
          visibility: visible;
          opacity: 0;
          pointer-events: auto;
        }
        
        .expanded-view.active {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .expanded-view.exiting {
          visibility: visible;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .expanded-view.unmounting {
          visibility: hidden;
          opacity: 0;
        }
        
        .expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.82);
          will-change: transform, opacity;
          transition: none;
        }
        
        .expanded-view.active .expanded-inner {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.32s ease 0.03s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.03s;
        }
        
        .expanded-view.exiting .expanded-inner {
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.9);
          transition: opacity 0.18s ease, transform 0.2s ease;
        }
        
        .expanded-title {
          font-size: 22px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 6px;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.3), 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        
        .expanded-desc {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 16px;
        }
        
        .expanded-content {
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.88);
          will-change: transform, opacity;
          transition: none;
          filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.1)) drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6));
        }
        
        .expanded-view.active .expanded-content {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.38s ease 0.08s, transform 0.42s cubic-bezier(0.34, 1.4, 0.64, 1) 0.08s;
        }
        
        .expanded-view.exiting .expanded-content {
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.94);
          transition: opacity 0.15s ease, transform 0.18s ease;
        }
        
        .expanded-close {
          margin-top: 40px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.5);
          will-change: transform, opacity;
          transition: none;
        }
        
        .expanded-view.active .expanded-close {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.28s ease 0.12s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) 0.12s;
        }
        
        .expanded-view.exiting .expanded-close {
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.7);
          transition: opacity 0.1s ease, transform 0.12s ease;
        }
        
        .expanded-close svg {
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6));
        }
        
        .expanded-close:active {
          transform: translate3d(0, 0, 0) scale(0.85);
          transition: transform 0.08s ease-out;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════ */
        /* DESKTOP                                                                 */
        /* ═══════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .creative-grid { gap: 40px 36px; max-width: 400px; }
          .folder-icon { width: 140px; height: 140px; border-radius: 32px; }
          .folder-icon::before { border-radius: 32px 32px 50% 50%; }
          .folder-preview { width: 116px; height: 116px; gap: 6px; }
          .folder-mini-icon { width: 55px; height: 55px; border-radius: 12px; }
          .folder-name { font-size: 14px; }
          .folder-icon:hover { transform: translate3d(0, 0, 0) scale(1.04); }
          .folder-container { padding: 28px; }
          .folder-apps-grid { gap: 20px; }
          .folder-app-icon { width: 80px; height: 80px; border-radius: 18px; }
          .folder-app-icon:hover { transform: translateZ(0) scale(1.06); }
          .folder-app-name { font-size: 12px; max-width: 85px; }
          .expanded-content { width: 340px; height: 340px; }
          .expanded-title { font-size: 26px; }
          .expanded-desc { font-size: 13px; margin-bottom: 20px; }
        }
        
        @media (min-width: 900px) {
          .creative-grid { gap: 50px 44px; max-width: 520px; }
          .folder-icon { width: 170px; height: 170px; border-radius: 38px; }
          .folder-icon::before { border-radius: 38px 38px 50% 50%; }
          .folder-preview { width: 142px; height: 142px; gap: 8px; }
          .folder-mini-icon { width: 67px; height: 67px; border-radius: 15px; }
          .folder-name { font-size: 15px; }
          .folder-container { padding: 36px; }
          .folder-apps-grid { gap: 26px; }
          .folder-app-icon { width: 95px; height: 95px; border-radius: 22px; }
          .expanded-content { width: 420px; height: 420px; }
        }
      `}</style>

      <div className="creative-page">
        <div className="creative-grid">
          {apps.map((app) => (
            <div key={app.id} className="app-container">
              <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder(app.id)}>
                {app.id === 'icons' ? renderIconsFolderPreview() : renderFolderPreview(app.id)}
              </div>
              <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Work 3D Folder */}
      {shouldRenderFolder('work3d') && (
        <div className={`folder-overlay ${getFolderClass('work3d')}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container">
            <div className="folder-apps-grid">
              {work3DItems.map(item => (
                <div key={item.id} className="folder-app" onClick={() => handleOpenExpanded(`work3d-${item.id}`)}>
                  <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                    {renderWork3D(item.id, 52)}
                  </div>
                  <span className="folder-app-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="folder-close" onClick={handleCloseFolder}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>
      )}

      {/* Services 3D Folder */}
      {shouldRenderFolder('services3d') && (
        <div className={`folder-overlay ${getFolderClass('services3d')}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container">
            <div className="folder-apps-grid">
              {service3DItems.map(item => (
                <div key={item.id} className="folder-app" onClick={() => handleOpenExpanded(`services3d-${item.id}`)}>
                  <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                    {renderService3D(item.id, 52)}
                  </div>
                  <span className="folder-app-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="folder-close" onClick={handleCloseFolder}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>
      )}

      {/* Geometry Folder */}
      {shouldRenderFolder('geometry') && (
        <div className={`folder-overlay ${getFolderClass('geometry')}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container">
            <div className="folder-apps-grid">
              {geometryItems.map(item => (
                <div key={item.id} className="folder-app" onClick={() => handleOpenExpanded(`geometry-${item.id}`)}>
                  <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                    <div style={{ transform: 'scale(0.40)' }}>{renderGeometry(item.id)}</div>
                  </div>
                  <span className="folder-app-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="folder-close" onClick={handleCloseFolder}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>
      )}

      {/* Experiences Folder */}
      {shouldRenderFolder('experiences') && (
        <div className={`folder-overlay ${getFolderClass('experiences')}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container">
            <div className="folder-apps-grid grid-3">
              {experienceItems.map(item => (
                <div key={item.id} className="folder-app" onClick={() => handleOpenExpanded(`experiences-${item.id}`)}>
                  <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                    {item.id === 'sphere' && <svg width="42" height="42" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="22" stroke="white" strokeWidth="1.5" opacity="0.8"/><ellipse cx="30" cy="30" rx="22" ry="8" stroke="white" strokeWidth="1" opacity="0.4"/><ellipse cx="30" cy="30" rx="8" ry="22" stroke="white" strokeWidth="1" opacity="0.4"/><circle cx="30" cy="30" r="6" fill="white" opacity="0.9"/></svg>}
                    {item.id === 'manifold' && <svg width="42" height="42" viewBox="0 0 60 60" fill="none"><path d="M10 30h40M30 10v40M14 14l32 32M46 14L14 46" stroke="white" strokeWidth="0.8" opacity="0.3"/><circle cx="30" cy="30" r="18" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="30" cy="30" r="3" fill="white" opacity="0.9"/><circle cx="18" cy="18" r="2.5" fill="white" opacity="0.7"/><circle cx="42" cy="18" r="2.5" fill="white" opacity="0.7"/><circle cx="18" cy="42" r="2.5" fill="white" opacity="0.7"/><circle cx="42" cy="42" r="2.5" fill="white" opacity="0.7"/></svg>}
                    {item.id === 'architecture' && <svg width="42" height="42" viewBox="0 0 60 60" fill="none"><rect x="8" y="18" width="16" height="28" rx="2" stroke="white" strokeWidth="1.5" opacity="0.8"/><rect x="36" y="12" width="16" height="34" rx="2" stroke="white" strokeWidth="1.5" opacity="0.8"/><path d="M24 32h12" stroke="white" strokeWidth="2" opacity="0.9"/><circle cx="16" cy="26" r="3" fill="white" opacity="0.9"/><circle cx="44" cy="22" r="3" fill="white" opacity="0.9"/></svg>}
                  </div>
                  <span className="folder-app-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="folder-close" onClick={handleCloseFolder}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>
      )}

      {/* Icons Folder */}
      {shouldRenderFolder('icons') && (
        <div className={`folder-overlay ${getFolderClass('icons')}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container">
            <div className="folder-apps-grid grid-4">
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}><Trade69Icon /></div><span className="folder-app-name">Trade69</span></div>
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}><MegaAgentIcon /></div><span className="folder-app-name">MegaAgent</span></div>
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #8f3d6b, #501e3a)' }}><OctopusIcon /></div><span className="folder-app-name">Octopus</span></div>
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #5a3d8f, #2e1e50)' }}><OvermindIcon /></div><span className="folder-app-name">Overmind</span></div>
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #2a2845, #151228)' }}><WebsiteIcon /></div><span className="folder-app-name">Web</span></div>
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #452838, #281518)' }}><DashboardIcon /></div><span className="folder-app-name">Dashboard</span></div>
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #1a3530, #0d1a18)' }}><APIIcon /></div><span className="folder-app-name">API</span></div>
              <div className="folder-app"><div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #453020, #281a10)' }}><LLMIcon /></div><span className="folder-app-name">LLM</span></div>
            </div>
          </div>
          <button className="folder-close" onClick={handleCloseFolder}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>
      )}

      {/* Expanded Views */}
      {work3DItems.map(item => shouldRenderExpanded(`work3d-${item.id}`) && (
        <div key={item.id} className={`expanded-view ${getExpandedClass(`work3d-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content">{renderWork3D(item.id, 200)}</div>
            <button className="expanded-close" onClick={handleCloseExpanded}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
          </div>
        </div>
      ))}

      {service3DItems.map(item => shouldRenderExpanded(`services3d-${item.id}`) && (
        <div key={item.id} className={`expanded-view ${getExpandedClass(`services3d-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content">{renderService3D(item.id, 200)}</div>
            <button className="expanded-close" onClick={handleCloseExpanded}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
          </div>
        </div>
      ))}

      {geometryItems.map(item => shouldRenderExpanded(`geometry-${item.id}`) && (
        <div key={item.id} className={`expanded-view ${getExpandedClass(`geometry-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content">{renderGeometry(item.id)}</div>
            <button className="expanded-close" onClick={handleCloseExpanded}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></button>
          </div>
        </div>
      ))}

      {experienceItems.map(item => shouldRenderExpanded(`experiences-${item.id}`) && (
        <div key={item.id} className={`expanded-view ${getExpandedClass(`experiences-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-title">{item.name}</div>
            <div className="expanded-desc">{item.desc}</div>
            <div className="expanded-content" style={{ touchAction: 'manipulation' }}>{renderExperience(item.id)}</div>
            <button className="expanded-close" onClick={handleCloseExpanded}><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg></button>
          </div>
        </div>
      ))}
    </>
  );
}