"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import MetatronCube from "@/components/MetatronCube";
import GoldenSpiral from "@/components/GoldenSpiral";
import FlowerOfLife from "@/components/FlowerOfLife";
import GeometricDivider from "@/components/GeometricDivider";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon } from "@/components/WorkIcons";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";

// Dynamic imports for 3D
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

// ═══════════════════════════════════════════════════════════════════════════════
// DATA STRUCTURES
// ═══════════════════════════════════════════════════════════════════════════════

const mainFolders = [
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'interactive', name: '3D Interactive' },
];

const entertainmentCategories = [
  { id: '3dicons', name: '3D Icons' },
  { id: 'geometry', name: 'Geometry' },
  { id: 'icons', name: 'Icons' },
];

const interactiveApps = [
  { id: 'sphere', name: 'Sphere', color: ['#2a2018', '#15100a'] },
  { id: 'manifold', name: 'Manifold', color: ['#1a2820', '#0a1510'] },
  { id: 'architecture', name: 'Architecture', color: ['#18202a', '#0a1015'] },
];

const icons3DItems = [
  { id: 'trade69', name: 'Trade69', color: ['#1a5040', '#0d2820'] },
  { id: 'megaagent', name: 'MegaAgent', color: ['#3d4a8f', '#1e2550'] },
  { id: 'octopus', name: 'Octopus', color: ['#8f3d6b', '#501e3a'] },
  { id: 'overmind', name: 'Overmind', color: ['#5a3d8f', '#2e1e50'] },
  { id: 'website', name: 'Web Apps', color: ['#2a2845', '#151228'] },
  { id: 'dashboard', name: 'Dashboards', color: ['#452838', '#281518'] },
  { id: 'api', name: 'API', color: ['#1a3530', '#0d1a18'] },
  { id: 'llm', name: 'LLM', color: ['#453020', '#281a10'] },
];

const geometryItems = [
  { id: 'metatron', name: 'Metatron', color: ['#3a2855', '#1e1430'] },
  { id: 'spiral', name: 'Spiral', color: ['#552838', '#301418'] },
  { id: 'flower', name: 'Flower', color: ['#283855', '#141e30'] },
  { id: 'lemniscate', name: 'Infinity', color: ['#385528', '#1e3014'] },
];

const staticIconItems = [
  { id: 'trade69-2d', name: 'Trade69', color: ['#1a5040', '#0d2820'] },
  { id: 'megaagent-2d', name: 'MegaAgent', color: ['#3d4a8f', '#1e2550'] },
  { id: 'octopus-2d', name: 'Octopus', color: ['#8f3d6b', '#501e3a'] },
  { id: 'overmind-2d', name: 'Overmind', color: ['#5a3d8f', '#2e1e50'] },
  { id: 'website-2d', name: 'Web', color: ['#2a2845', '#151228'] },
  { id: 'dashboard-2d', name: 'Dashboard', color: ['#452838', '#281518'] },
  { id: 'api-2d', name: 'API', color: ['#1a3530', '#0d1a18'] },
  { id: 'llm-2d', name: 'LLM', color: ['#453020', '#281a10'] },
];

type OverlayState = 'closed' | 'opening' | 'open' | 'closing';

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // STATE OF THE ART - Single overlay system with stacked layers
  // Instead of closing folder then opening gallery, we STACK them
  const [folderState, setFolderState] = useState<OverlayState>('closed');
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const [galleryState, setGalleryState] = useState<OverlayState>('closed');
  const [openGallery, setOpenGallery] = useState<string | null>(null);

  const [expandedState, setExpandedState] = useState<OverlayState>('closed');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Scroll refs for horizontal scroll containers
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Lock body scroll when any overlay is open
  useEffect(() => {
    const isAnyOpen = folderState !== 'closed' || galleryState !== 'closed' || expandedState !== 'closed';
    if (isAnyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [folderState, galleryState, expandedState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - SMOOTH TRANSITION HANDLERS
  // No setTimeout gaps - direct state transitions
  // ═══════════════════════════════════════════════════════════════════════════════

  const openFolderOverlay = useCallback((folderId: string) => {
    setOpenFolder(folderId);
    setFolderState('opening');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setFolderState('open'));
    });
  }, []);

  const closeFolderOverlay = useCallback(() => {
    setFolderState('closing');
    setTimeout(() => {
      setFolderState('closed');
      setOpenFolder(null);
    }, 300);
  }, []);

  // STATE OF THE ART - Gallery opens ON TOP of folder (no close first)
  const openGalleryOverlay = useCallback((galleryId: string) => {
    setOpenGallery(galleryId);
    setGalleryState('opening');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setGalleryState('open'));
    });
  }, []);

  const closeGalleryOverlay = useCallback(() => {
    setGalleryState('closing');
    setTimeout(() => {
      setGalleryState('closed');
      setOpenGallery(null);
    }, 300);
  }, []);

  // STATE OF THE ART - Expanded opens ON TOP of gallery (no close first)
  const openExpandedView = useCallback((itemId: string) => {
    setExpandedItem(itemId);
    setExpandedState('opening');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpandedState('open'));
    });
  }, []);

  const closeExpandedView = useCallback(() => {
    setExpandedState('closing');
    setTimeout(() => {
      setExpandedState('closed');
      setExpandedItem(null);
    }, 350);
  }, []);

  // Close all overlays (back to home)
  const closeAllOverlays = useCallback(() => {
    if (expandedState !== 'closed') {
      setExpandedState('closing');
      setTimeout(() => {
        setExpandedState('closed');
        setExpandedItem(null);
      }, 300);
    }
    if (galleryState !== 'closed') {
      setTimeout(() => {
        setGalleryState('closing');
        setTimeout(() => {
          setGalleryState('closed');
          setOpenGallery(null);
        }, 250);
      }, 50);
    }
    if (folderState !== 'closed') {
      setTimeout(() => {
        setFolderState('closing');
        setTimeout(() => {
          setFolderState('closed');
          setOpenFolder(null);
        }, 250);
      }, 100);
    }
  }, [expandedState, galleryState, folderState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // MINI ICON RENDERERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const miniIconSize = isMobile ? 22 : 26;
  const folderIconSize = isMobile ? 36 : 42;
  const galleryIconSize = isMobile ? 38 : 44;

  const render3DIconMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'trade69':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M3 17l6-6 4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
            <path d="M17 7h4v4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
          </svg>
        );
      case 'megaagent':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" opacity="0.95"/>
            <circle cx="5" cy="17" r="3" stroke="white" strokeWidth="1.8" opacity="0.8"/>
            <circle cx="19" cy="17" r="3" stroke="white" strokeWidth="1.8" opacity="0.8"/>
            <path d="M12 11v3M8 14l-2 2M16 14l2 2" stroke="white" strokeWidth="1.8" opacity="0.6"/>
          </svg>
        );
      case 'octopus':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="9" rx="6" ry="5" stroke="white" strokeWidth="2" opacity="0.95"/>
            <path d="M6 13c-1.5 2.5-2.5 5.5-1 6.5M9 14c0 3-1 5.5 0 6.5M15 14c0 3 1 5.5 0 6.5M18 13c1.5 2.5 2.5 5.5 1 6.5" stroke="white" strokeWidth="1.8" opacity="0.7" strokeLinecap="round"/>
            <circle cx="9.5" cy="8" r="1.2" fill="white" opacity="0.95"/>
            <circle cx="14.5" cy="8" r="1.2" fill="white" opacity="0.95"/>
          </svg>
        );
      case 'overmind':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" opacity="0.6"/>
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" opacity="0.85"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.95"/>
          </svg>
        );
      case 'website':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="15" rx="2.5" stroke="white" strokeWidth="2" opacity="0.95"/>
            <path d="M2 9h20" stroke="white" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="5" cy="6.5" r="1" fill="white" opacity="0.85"/>
            <circle cx="8" cy="6.5" r="1" fill="white" opacity="0.85"/>
          </svg>
        );
      case 'dashboard':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" opacity="0.95"/>
            <circle cx="12" cy="12" r="2.5" fill="white" opacity="0.95"/>
          </svg>
        );
      case 'api':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="4" r="2.5" fill="white" opacity="0.95"/>
            <circle cx="4" cy="12" r="2.5" fill="white" opacity="0.95"/>
            <circle cx="20" cy="12" r="2.5" fill="white" opacity="0.95"/>
            <circle cx="12" cy="20" r="2.5" fill="white" opacity="0.95"/>
            <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" opacity="0.9"/>
          </svg>
        );
      case 'llm':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="5" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="12" cy="12" r="4" fill="white" opacity="0.95"/>
          </svg>
        );
      default: return null;
    }
  };

  const renderGeometryMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'metatron':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="12" cy="4" r="2" fill="white" opacity="0.9"/>
            <circle cx="12" cy="20" r="2" fill="white" opacity="0.9"/>
            <circle cx="5" cy="8" r="2" fill="white" opacity="0.9"/>
            <circle cx="19" cy="8" r="2" fill="white" opacity="0.9"/>
            <circle cx="12" cy="12" r="2.5" fill="white" opacity="1"/>
          </svg>
        );
      case 'spiral':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M12 12c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5c-4 0-7-3-7-7s3-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="1"/>
          </svg>
        );
      case 'flower':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" opacity="1"/>
            <circle cx="12" cy="5" r="3" stroke="white" strokeWidth="1.2" opacity="0.6"/>
            <circle cx="12" cy="19" r="3" stroke="white" strokeWidth="1.2" opacity="0.6"/>
            <circle cx="6" cy="8.5" r="3" stroke="white" strokeWidth="1.2" opacity="0.6"/>
            <circle cx="18" cy="8.5" r="3" stroke="white" strokeWidth="1.2" opacity="0.6"/>
          </svg>
        );
      case 'lemniscate':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M12 12c-2.5-2.5-6-2.5-6 1.5s4 4 6 1.5c2.5 2.5 6 2.5 6-1.5s-4-4-6-1.5z" stroke="white" strokeWidth="2" fill="none" opacity="0.95"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="1"/>
          </svg>
        );
      default: return null;
    }
  };

  const render2DIconMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'trade69-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M3 17l6-6 4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.95"/>
            <circle cx="12" cy="12" r="2.5" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'megaagent-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" opacity="0.95"/>
            <circle cx="5" cy="17" r="3" stroke="white" strokeWidth="1.8" opacity="0.8"/>
            <circle cx="19" cy="17" r="3" stroke="white" strokeWidth="1.8" opacity="0.8"/>
          </svg>
        );
      case 'octopus-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="9" rx="6" ry="5" stroke="white" strokeWidth="2" opacity="0.95"/>
            <path d="M6 13c-1.5 3-2.5 6-1 7M18 13c1.5 3 2.5 6 1 7" stroke="white" strokeWidth="1.8" opacity="0.7" strokeLinecap="round"/>
          </svg>
        );
      case 'overmind-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.8" opacity="0.8"/>
            <circle cx="12" cy="12" r="3" fill="white" opacity="0.95"/>
          </svg>
        );
      case 'website-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="15" rx="2.5" stroke="white" strokeWidth="2" opacity="0.95"/>
            <path d="M2 9h20" stroke="white" strokeWidth="1.5" opacity="0.6"/>
          </svg>
        );
      case 'dashboard-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" opacity="0.95"/>
            <circle cx="12" cy="12" r="2.5" fill="white" opacity="0.95"/>
          </svg>
        );
      case 'api-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="4" r="2.5" fill="white" opacity="0.95"/>
            <circle cx="4" cy="12" r="2.5" fill="white" opacity="0.95"/>
            <circle cx="20" cy="12" r="2.5" fill="white" opacity="0.95"/>
            <circle cx="12" cy="20" r="2.5" fill="white" opacity="0.95"/>
          </svg>
        );
      case 'llm-2d':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" opacity="0.7"/>
            <circle cx="12" cy="12" r="4" fill="white" opacity="0.95"/>
          </svg>
        );
      default: return null;
    }
  };

  const renderInteractiveMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'sphere':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" opacity="0.8"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="white" strokeWidth="1.2" opacity="0.5"/>
            <circle cx="12" cy="12" r="2.5" fill="white" opacity="1"/>
          </svg>
        );
      case 'manifold':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="1"/>
            <circle cx="7" cy="7" r="1.5" fill="white" opacity="0.75"/>
            <circle cx="17" cy="7" r="1.5" fill="white" opacity="0.75"/>
            <circle cx="7" cy="17" r="1.5" fill="white" opacity="0.75"/>
            <circle cx="17" cy="17" r="1.5" fill="white" opacity="0.75"/>
          </svg>
        );
      case 'architecture':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <rect x="3" y="7" width="7" height="12" rx="1.5" stroke="white" strokeWidth="1.8" opacity="0.85"/>
            <rect x="14" y="5" width="7" height="14" rx="1.5" stroke="white" strokeWidth="1.8" opacity="0.85"/>
            <path d="M10 13h4" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="1"/>
          </svg>
        );
      default: return null;
    }
  };

  // Full renderers for expanded view
  const render3DIcon = (id: string, size: number) => {
    switch (id) {
      case 'trade69': return <Trade69Icon3D size={size} />;
      case 'megaagent': return <MegaAgentIcon3D size={size} />;
      case 'octopus': return <OctopusIcon3D size={size} />;
      case 'overmind': return <OvermindIcon3D size={size} />;
      case 'website': return <WebsiteIcon3D size={size} />;
      case 'dashboard': return <DashboardIcon3D size={size} />;
      case 'api': return <APIIcon3D size={size} />;
      case 'llm': return <LLMIcon3D size={size} />;
      default: return null;
    }
  };

  const render2DIcon = (id: string, scale: number = 1) => {
    const style = { transform: `scale(${scale})` };
    switch (id) {
      case 'trade69-2d': return <div style={style}><Trade69Icon /></div>;
      case 'megaagent-2d': return <div style={style}><MegaAgentIcon /></div>;
      case 'octopus-2d': return <div style={style}><OctopusIcon /></div>;
      case 'overmind-2d': return <div style={style}><OvermindIcon /></div>;
      case 'website-2d': return <div style={style}><WebsiteIcon /></div>;
      case 'dashboard-2d': return <div style={style}><DashboardIcon /></div>;
      case 'api-2d': return <div style={style}><APIIcon /></div>;
      case 'llm-2d': return <div style={style}><LLMIcon /></div>;
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

  // Folder preview - 3 mini icons
  const renderFolderPreview = (folderId: string) => {
    if (folderId === 'entertainment') {
      return (
        <div className="folder-preview">
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}>
            {render3DIconMini('trade69', miniIconSize)}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3a2855, #1e1430)' }}>
            {renderGeometryMini('metatron', miniIconSize)}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
            {render2DIconMini('megaagent-2d', miniIconSize)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="folder-preview">
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #2a2018, #15100a)' }}>
            {renderInteractiveMini('sphere', miniIconSize)}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a2820, #0a1510)' }}>
            {renderInteractiveMini('manifold', miniIconSize)}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #18202a, #0a1015)' }}>
            {renderInteractiveMini('architecture', miniIconSize)}
          </div>
        </div>
      );
    }
  };

  // Get animation class based on state
  const getAnimClass = (state: OverlayState) => {
    switch (state) {
      case 'opening': return 'entering';
      case 'open': return 'active';
      case 'closing': return 'exiting';
      default: return '';
    }
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - CREATIVE PAGE                                                */
        /* iOS-style overlays with horizontal scroll galleries                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        * { -webkit-tap-highlight-color: transparent; }
        
        .creative-page {
          min-height: 100vh;
          background: #0A0A0A;
          padding-top: clamp(100px, 15vh, 160px);
          padding-bottom: 100px;
          padding-left: 20px;
          padding-right: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* MAIN GRID - 2 FOLDERS                                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .creative-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 32px;
          max-width: 280px;
          margin: 0 auto;
        }
        
        .folder-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        .folder-icon {
          position: relative;
          width: 115px;
          height: 115px;
          border-radius: 28px;
          background: rgba(120, 120, 120, 0.18);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.85) translateY(15px);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.4s ease, opacity 0.5s ease;
          box-shadow: 
            0 0 50px rgba(255, 255, 255, 0.06),
            0 8px 32px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .folder-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 100%);
          border-radius: 28px 28px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .folder-icon.loaded {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .folder-icon:active { transform: scale(0.94); }
        
        .folder-wrapper:nth-child(1) .folder-icon { transition-delay: 0ms; }
        .folder-wrapper:nth-child(2) .folder-icon { transition-delay: 60ms; }
        
        /* Folder preview - 3 icons layout */
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr 1fr;
          gap: 6px;
          width: 95px;
          height: 95px;
          position: relative;
          z-index: 5;
        }
        
        .folder-preview .folder-mini-icon:nth-child(3) {
          grid-column: 1 / -1;
          justify-self: center;
        }
        
        .folder-mini-icon {
          width: 44px;
          height: 44px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 12px rgba(255, 255, 255, 0.1),
            0 3px 8px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .folder-mini-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 100%);
          border-radius: 11px 11px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #FAFAF8;
          text-align: center;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        }
        
        .folder-name.loaded { opacity: 1; transform: translateY(0); }
        
        .folder-wrapper:nth-child(1) .folder-name { transition-delay: 60ms; }
        .folder-wrapper:nth-child(2) .folder-name { transition-delay: 120ms; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - OVERLAY SYSTEM                                               */
        /* Stacked layers - each opens on top without closing previous                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(100px, 18vh, 180px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        
        .overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .overlay.active { visibility: visible; pointer-events: auto; opacity: 1; }
        .overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; }
        
        .overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
        
        /* Folder overlay - z-index 1000 */
        .folder-overlay { z-index: 1000; }
        
        /* Gallery overlay - z-index 2000 (on top of folder) */
        .gallery-overlay { z-index: 2000; }
        
        /* Expanded view - z-index 3000 (on top of all) */
        .expanded-overlay {
          z-index: 3000;
          background: #0A0A0A;
          padding-top: clamp(80px, 15vh, 150px);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* CONTAINER - iOS Style with spring animation                                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .overlay-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 20px;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.35s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.15),
            0 20px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.8);
          max-width: 90vw;
        }
        
        .overlay.active .overlay-container {
          opacity: 1;
          transform: scale(1);
        }
        
        .overlay.exiting .overlay-container {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.2s ease, transform 0.25s ease;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - iOS HORIZONTAL SCROLL GALLERY                                */
        /* Shows 4 icons at a time with smooth horizontal scroll                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .scroll-gallery {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 4px 0;
          /* Fixed width to show exactly 4 items */
          width: calc(4 * 72px + 3 * 16px);
          max-width: calc(100vw - 80px);
        }
        
        .scroll-gallery::-webkit-scrollbar { display: none; }
        
        .scroll-gallery .gallery-card {
          flex-shrink: 0;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.7) translateY(12px);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .overlay.active .scroll-gallery .gallery-card {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .overlay.active .scroll-gallery .gallery-card:nth-child(1) { transition-delay: 0.04s; }
        .overlay.active .scroll-gallery .gallery-card:nth-child(2) { transition-delay: 0.07s; }
        .overlay.active .scroll-gallery .gallery-card:nth-child(3) { transition-delay: 0.10s; }
        .overlay.active .scroll-gallery .gallery-card:nth-child(4) { transition-delay: 0.13s; }
        .overlay.active .scroll-gallery .gallery-card:nth-child(5) { transition-delay: 0.16s; }
        .overlay.active .scroll-gallery .gallery-card:nth-child(6) { transition-delay: 0.19s; }
        .overlay.active .scroll-gallery .gallery-card:nth-child(7) { transition-delay: 0.22s; }
        .overlay.active .scroll-gallery .gallery-card:nth-child(8) { transition-delay: 0.25s; }
        
        .gallery-card-icon {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.1),
            0 6px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.4);
          transition: transform 0.2s ease;
        }
        
        .gallery-card-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 100%);
          border-radius: 18px 18px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .gallery-card-icon:active { transform: scale(0.92); }
        
        .gallery-card-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          max-width: 72px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        /* Scroll indicator dots */
        .scroll-indicator {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 12px;
        }
        
        .scroll-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease, transform 0.3s ease;
        }
        
        .scroll-dot.active {
          background: rgba(0, 0, 0, 0.6);
          transform: scale(1.2);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDER CARDS GRID - 3 items                                                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .folder-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        .folder-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.7) translateY(12px);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .overlay.active .folder-card {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .overlay.active .folder-card:nth-child(1) { transition-delay: 0.04s; }
        .overlay.active .folder-card:nth-child(2) { transition-delay: 0.07s; }
        .overlay.active .folder-card:nth-child(3) { transition-delay: 0.10s; }
        
        .folder-card-icon {
          width: 68px;
          height: 68px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.1),
            0 6px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.4);
          transition: transform 0.2s ease;
        }
        
        .folder-card-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 100%);
          border-radius: 17px 17px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-card-icon:active { transform: scale(0.92); }
        
        .folder-card-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* CLOSE BUTTON                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .close-btn {
          position: relative;
          z-index: 2;
          margin-top: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.3s ease 0.15s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
        }
        
        .overlay.active .close-btn {
          opacity: 1;
          transform: scale(1);
        }
        
        .overlay.exiting .close-btn {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .close-btn svg { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); }
        .close-btn:active { transform: scale(0.85); }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* EXPANDED VIEW                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: scale(0.88);
          transition: opacity 0.4s ease 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .expanded-overlay.active .expanded-inner {
          opacity: 1;
          transform: scale(1);
        }
        
        .expanded-overlay.exiting .expanded-inner {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .expanded-content {
          width: 280px;
          height: 280px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.1)) drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6));
        }
        
        .expanded-close {
          margin-top: 40px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.35s ease 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s;
        }
        
        .expanded-overlay.active .expanded-close {
          opacity: 1;
          transform: scale(1);
        }
        
        .expanded-overlay.exiting .expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .expanded-close svg { filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6)); }
        .expanded-close:active { transform: scale(0.85); }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* DESKTOP ENHANCEMENTS                                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .creative-grid { gap: 48px 44px; max-width: 400px; }
          .folder-icon { width: 145px; height: 145px; border-radius: 32px; }
          .folder-icon:hover { transform: scale(1.04) translateY(-3px); }
          .folder-preview { width: 120px; height: 120px; gap: 7px; }
          .folder-mini-icon { width: 56px; height: 56px; border-radius: 13px; }
          .folder-name { font-size: 13px; }
          .overlay-container { padding: 24px; }
          .folder-cards-grid { gap: 20px; }
          .folder-card-icon { width: 80px; height: 80px; border-radius: 18px; }
          .folder-card-icon:hover { transform: scale(1.06); }
          .scroll-gallery { width: calc(4 * 85px + 3 * 18px); }
          .gallery-card-icon { width: 85px; height: 85px; border-radius: 20px; }
          .gallery-card-icon:hover { transform: scale(1.06); }
          .gallery-card-name { font-size: 12px; max-width: 85px; }
          .expanded-content { width: 340px; height: 340px; border-radius: 26px; }
        }
      `}</style>

      <div className="creative-page">
        {/* 2 Main Folders */}
        <div className="creative-grid">
          {mainFolders.map((folder) => (
            <div key={folder.id} className="folder-wrapper">
              <div
                className={`folder-icon ${isLoaded ? 'loaded' : ''}`}
                onClick={() => openFolderOverlay(folder.id)}
              >
                {renderFolderPreview(folder.id)}
              </div>
              <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>{folder.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* ENTERTAINMENT FOLDER OVERLAY                                                    */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`overlay folder-overlay ${getAnimClass(folderState)}`} style={{ display: openFolder === 'entertainment' || folderState !== 'closed' && openFolder === 'entertainment' ? 'flex' : 'none' }}>
        <div className="overlay-bg" onClick={closeFolderOverlay} />
        <div className="overlay-container">
          <div className="folder-cards-grid">
            <div className="folder-card" onClick={() => openGalleryOverlay('3dicons')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}>
                {render3DIconMini('trade69', folderIconSize)}
              </div>
              <span className="folder-card-name">3D Icons</span>
            </div>
            <div className="folder-card" onClick={() => openGalleryOverlay('geometry')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #3a2855, #1e1430)' }}>
                {renderGeometryMini('metatron', folderIconSize)}
              </div>
              <span className="folder-card-name">Geometry</span>
            </div>
            <div className="folder-card" onClick={() => openGalleryOverlay('icons')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
                {render2DIconMini('megaagent-2d', folderIconSize)}
              </div>
              <span className="folder-card-name">Icons</span>
            </div>
          </div>
        </div>
        <button className="close-btn" onClick={closeFolderOverlay}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* INTERACTIVE FOLDER OVERLAY                                                      */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`overlay folder-overlay ${openFolder === 'interactive' ? getAnimClass(folderState) : ''}`} style={{ display: openFolder === 'interactive' ? 'flex' : 'none' }}>
        <div className="overlay-bg" onClick={closeFolderOverlay} />
        <div className="overlay-container">
          <div className="folder-cards-grid">
            {interactiveApps.map(app => (
              <div key={app.id} className="folder-card" onClick={() => openExpandedView(`exp-${app.id}`)}>
                <div className="folder-card-icon" style={{ background: `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})` }}>
                  {renderInteractiveMini(app.id, folderIconSize)}
                </div>
                <span className="folder-card-name">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="close-btn" onClick={closeFolderOverlay}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 3D ICONS GALLERY - HORIZONTAL SCROLL                                            */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`overlay gallery-overlay ${openGallery === '3dicons' ? getAnimClass(galleryState) : ''}`} style={{ display: openGallery === '3dicons' ? 'flex' : 'none' }}>
        <div className="overlay-bg" onClick={closeGalleryOverlay} />
        <div className="overlay-container">
          <div className="scroll-gallery" ref={scrollContainerRef}>
            {icons3DItems.map(item => (
              <div key={item.id} className="gallery-card" onClick={() => openExpandedView(`3d-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {render3DIconMini(item.id, galleryIconSize)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="scroll-indicator">
            <div className="scroll-dot active" />
            <div className="scroll-dot" />
          </div>
        </div>
        <button className="close-btn" onClick={closeGalleryOverlay}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* GEOMETRY GALLERY - HORIZONTAL SCROLL                                            */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`overlay gallery-overlay ${openGallery === 'geometry' ? getAnimClass(galleryState) : ''}`} style={{ display: openGallery === 'geometry' ? 'flex' : 'none' }}>
        <div className="overlay-bg" onClick={closeGalleryOverlay} />
        <div className="overlay-container">
          <div className="scroll-gallery">
            {geometryItems.map(item => (
              <div key={item.id} className="gallery-card" onClick={() => openExpandedView(`geo-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {renderGeometryMini(item.id, galleryIconSize)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="close-btn" onClick={closeGalleryOverlay}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 2D ICONS GALLERY - HORIZONTAL SCROLL                                            */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`overlay gallery-overlay ${openGallery === 'icons' ? getAnimClass(galleryState) : ''}`} style={{ display: openGallery === 'icons' ? 'flex' : 'none' }}>
        <div className="overlay-bg" onClick={closeGalleryOverlay} />
        <div className="overlay-container">
          <div className="scroll-gallery">
            {staticIconItems.map(item => (
              <div key={item.id} className="gallery-card" onClick={() => openExpandedView(`2d-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {render2DIconMini(item.id, galleryIconSize)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="scroll-indicator">
            <div className="scroll-dot active" />
            <div className="scroll-dot" />
          </div>
        </div>
        <button className="close-btn" onClick={closeGalleryOverlay}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - All items                                                      */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}

      {/* 3D Icons expanded */}
      {icons3DItems.map(item => (
        <div key={item.id} className={`overlay expanded-overlay ${expandedItem === `3d-${item.id}` ? getAnimClass(expandedState) : ''}`} style={{ display: expandedItem === `3d-${item.id}` ? 'flex' : 'none' }}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `3d-${item.id}` && render3DIcon(item.id, 200)}
            </div>
            <button className="expanded-close" onClick={closeExpandedView}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ))}

      {/* Geometry expanded */}
      {geometryItems.map(item => (
        <div key={item.id} className={`overlay expanded-overlay ${expandedItem === `geo-${item.id}` ? getAnimClass(expandedState) : ''}`} style={{ display: expandedItem === `geo-${item.id}` ? 'flex' : 'none' }}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `geo-${item.id}` && renderGeometry(item.id)}
            </div>
            <button className="expanded-close" onClick={closeExpandedView}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ))}

      {/* 2D Icons expanded */}
      {staticIconItems.map(item => (
        <div key={item.id} className={`overlay expanded-overlay ${expandedItem === `2d-${item.id}` ? getAnimClass(expandedState) : ''}`} style={{ display: expandedItem === `2d-${item.id}` ? 'flex' : 'none' }}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `2d-${item.id}` && render2DIcon(item.id, 3)}
            </div>
            <button className="expanded-close" onClick={closeExpandedView}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ))}

      {/* Interactive experiences expanded */}
      {interactiveApps.map(app => (
        <div key={app.id} className={`overlay expanded-overlay ${expandedItem === `exp-${app.id}` ? getAnimClass(expandedState) : ''}`} style={{ display: expandedItem === `exp-${app.id}` ? 'flex' : 'none' }}>
          <div className="expanded-inner">
            <div className="expanded-content" style={{ touchAction: 'manipulation' }}>
              {expandedItem === `exp-${app.id}` && renderExperience(app.id)}
            </div>
            <button className="expanded-close" onClick={closeExpandedView}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}