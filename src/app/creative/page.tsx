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
// DATA DEFINITIONS - MATCHING WORK PAGE EXACTLY
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
  { id: 'sphere', name: 'Sphere', color: ['#2a2018', '#15100a'], glow: 'rgba(255, 200, 150, 0.2)' },
  { id: 'manifold', name: 'Manifold', color: ['#1a2820', '#0a1510'], glow: 'rgba(150, 255, 200, 0.2)' },
  { id: 'architecture', name: 'Architecture', color: ['#18202a', '#0a1015'], glow: 'rgba(150, 200, 255, 0.2)' },
];

const icons3DItems = [
  { id: 'trade69', name: 'Trade69', color: ['#1a5040', '#0d2820'], glow: 'rgba(94, 234, 212, 0.25)' },
  { id: 'megaagent', name: 'MegaAgent', color: ['#3d4a8f', '#1e2550'], glow: 'rgba(165, 180, 252, 0.25)' },
  { id: 'octopus', name: 'Octopus', color: ['#8f3d6b', '#501e3a'], glow: 'rgba(251, 130, 180, 0.25)' },
  { id: 'overmind', name: 'Overmind', color: ['#5a3d8f', '#2e1e50'], glow: 'rgba(192, 132, 252, 0.25)' },
  { id: 'website', name: 'Web Apps', color: ['#2a2845', '#151228'], glow: 'rgba(165, 130, 252, 0.25)' },
  { id: 'dashboard', name: 'Dashboards', color: ['#452838', '#281518'], glow: 'rgba(251, 130, 180, 0.25)' },
  { id: 'api', name: 'API', color: ['#1a3530', '#0d1a18'], glow: 'rgba(134, 239, 172, 0.25)' },
  { id: 'llm', name: 'LLM', color: ['#453020', '#281a10'], glow: 'rgba(253, 186, 140, 0.25)' },
];

const geometryItems = [
  { id: 'metatron', name: 'Metatron', color: ['#3a2855', '#1e1430'], glow: 'rgba(192, 132, 252, 0.25)' },
  { id: 'spiral', name: 'Spiral', color: ['#552838', '#301418'], glow: 'rgba(251, 130, 180, 0.25)' },
  { id: 'flower', name: 'Flower', color: ['#283855', '#141e30'], glow: 'rgba(147, 197, 253, 0.25)' },
  { id: 'lemniscate', name: 'Infinity', color: ['#385528', '#1e3014'], glow: 'rgba(134, 239, 172, 0.25)' },
];

const staticIconItems = [
  { id: 'trade69-2d', name: 'Trade69', color: ['#1a5040', '#0d2820'], glow: 'rgba(94, 234, 212, 0.25)' },
  { id: 'megaagent-2d', name: 'MegaAgent', color: ['#3d4a8f', '#1e2550'], glow: 'rgba(165, 180, 252, 0.25)' },
  { id: 'octopus-2d', name: 'Octopus', color: ['#8f3d6b', '#501e3a'], glow: 'rgba(251, 130, 180, 0.25)' },
  { id: 'overmind-2d', name: 'Overmind', color: ['#5a3d8f', '#2e1e50'], glow: 'rgba(192, 132, 252, 0.25)' },
  { id: 'website-2d', name: 'Web', color: ['#2a2845', '#151228'], glow: 'rgba(165, 130, 252, 0.25)' },
  { id: 'dashboard-2d', name: 'Dashboard', color: ['#452838', '#281518'], glow: 'rgba(251, 130, 180, 0.25)' },
  { id: 'api-2d', name: 'API', color: ['#1a3530', '#0d1a18'], glow: 'rgba(134, 239, 172, 0.25)' },
  { id: 'llm-2d', name: 'LLM', color: ['#453020', '#281a10'], glow: 'rgba(253, 186, 140, 0.25)' },
];

type AnimationState = 'idle' | 'entering' | 'active' | 'exiting';

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Folder overlay state
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [folderAnimState, setFolderAnimState] = useState<AnimationState>('idle');

  // Gallery overlay state
  const [openGallery, setOpenGallery] = useState<string | null>(null);
  const [galleryAnimState, setGalleryAnimState] = useState<AnimationState>('idle');

  // Expanded view state
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedAnimState, setExpandedAnimState] = useState<AnimationState>('idle');

  // STATE OF THE ART - Apple-level crossfade bridge
  const [bridgePhase, setBridgePhase] = useState<'idle' | 'loading' | 'transitioning'>('idle');

  const folderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const expandedTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bridgeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    return () => {
      if (folderTimeoutRef.current) clearTimeout(folderTimeoutRef.current);
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
      if (expandedTimeoutRef.current) clearTimeout(expandedTimeoutRef.current);
      if (bridgeTimeoutRef.current) clearTimeout(bridgeTimeoutRef.current);
    };
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - SOLID ROCK LOCK (matching Work page exactly)
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const isOpen = folderAnimState !== 'idle' || galleryAnimState !== 'idle' ||
                   expandedAnimState !== 'idle' || bridgePhase !== 'idle';

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const blockAllTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.expanded-content')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      const blockWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.expanded-content')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      document.addEventListener('touchmove', blockAllTouch, { passive: false, capture: true });
      document.addEventListener('wheel', blockWheel, { passive: false, capture: true });

      (window as any).__creativeSolidRockCleanup = () => {
        document.removeEventListener('touchmove', blockAllTouch, { capture: true } as any);
        document.removeEventListener('wheel', blockWheel, { capture: true } as any);
      };

      return () => {
        if ((window as any).__creativeSolidRockCleanup) {
          (window as any).__creativeSolidRockCleanup();
        }
      };
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      if ((window as any).__creativeSolidRockCleanup) {
        (window as any).__creativeSolidRockCleanup();
        delete (window as any).__creativeSolidRockCleanup;
      }
    }
  }, [folderAnimState, galleryAnimState, expandedAnimState, bridgePhase]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // HANDLERS - Matching Work page patterns exactly
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenFolder = useCallback((folderId: string) => {
    if (folderAnimState !== 'idle') return;
    setOpenFolder(folderId);
    setFolderAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setFolderAnimState('active'));
    });
  }, [folderAnimState]);

  const handleCloseFolder = useCallback(() => {
    if (folderAnimState !== 'active') return;
    setFolderAnimState('exiting');
    folderTimeoutRef.current = setTimeout(() => {
      setOpenFolder(null);
      setFolderAnimState('idle');
    }, 350);
  }, [folderAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - APPLE-LEVEL CROSSFADE TRANSITIONS
  // Content fades IN while bridge is still visible = ZERO gap
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenGalleryWithBridge = useCallback((galleryId: string) => {
    if (galleryAnimState !== 'idle' || bridgePhase !== 'idle') return;

    // Phase 1: Bridge appears immediately
    setBridgePhase('loading');
    handleCloseFolder();

    // Phase 2: After folder closes, prepare content BEHIND bridge
    bridgeTimeoutRef.current = setTimeout(() => {
      setOpenGallery(galleryId);
      setGalleryAnimState('entering');

      // Phase 3: Start crossfade
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setGalleryAnimState('active');
          setBridgePhase('transitioning');

          // Phase 4: Bridge fully gone after content is visible
          setTimeout(() => {
            setBridgePhase('idle');
          }, 450);
        });
      });
    }, 400);
  }, [galleryAnimState, bridgePhase, handleCloseFolder]);

  const handleCloseGallery = useCallback(() => {
    if (galleryAnimState !== 'active') return;
    setGalleryAnimState('exiting');
    galleryTimeoutRef.current = setTimeout(() => {
      setOpenGallery(null);
      setGalleryAnimState('idle');
    }, 350);
  }, [galleryAnimState]);

  const handleOpenExpandedWithBridge = useCallback((itemId: string) => {
    if (expandedAnimState !== 'idle' || bridgePhase !== 'idle') return;

    setBridgePhase('loading');
    handleCloseFolder();

    bridgeTimeoutRef.current = setTimeout(() => {
      setExpandedItem(itemId);
      setExpandedAnimState('entering');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setExpandedAnimState('active');
          setBridgePhase('transitioning');

          setTimeout(() => {
            setBridgePhase('idle');
          }, 450);
        });
      });
    }, 400);
  }, [expandedAnimState, bridgePhase, handleCloseFolder]);

  const handleOpenExpandedFromGallery = useCallback((itemId: string) => {
    if (expandedAnimState !== 'idle') return;
    setExpandedItem(itemId);
    setExpandedAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpandedAnimState('active'));
    });
  }, [expandedAnimState]);

  const handleCloseExpanded = useCallback(() => {
    if (expandedAnimState !== 'active') return;
    setExpandedAnimState('exiting');
    expandedTimeoutRef.current = setTimeout(() => {
      setExpandedItem(null);
      setExpandedAnimState('idle');
    }, 400);
  }, [expandedAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // RENDERERS
  // ═══════════════════════════════════════════════════════════════════════════════

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

  // ═══════════════════════════════════════════════════════════════════════════════
  // MINI ICON RENDERERS - Matching Work page style
  // ═══════════════════════════════════════════════════════════════════════════════

  const miniIconSize = isMobile ? 18 : 22;
  const folderIconSize = isMobile ? 48 : 58;

  const render3DIconMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'trade69':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/><path d="M17 7h4v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/></svg>;
      case 'megaagent':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="6" cy="16" r="3" stroke="white" strokeWidth="1.5" opacity="0.7"/><circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.5" opacity="0.7"/><path d="M12 12v2M8.5 14l-1 1M15.5 14l1 1" stroke="white" strokeWidth="1.5" opacity="0.5"/></svg>;
      case 'octopus':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="5" stroke="white" strokeWidth="1.5" opacity="0.9"/><path d="M7 15c-1 2-2 4-1 5M10 14c0 3-1 5 0 6M14 14c0 3 1 5 0 6M17 15c1 2 2 4 1 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/><circle cx="10" cy="9" r="1" fill="white" opacity="0.9"/><circle cx="14" cy="9" r="1" fill="white" opacity="0.9"/></svg>;
      case 'overmind':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" opacity="0.5"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" opacity="0.7"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="white" strokeWidth="1" opacity="0.4"/></svg>;
      case 'website':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.5" opacity="0.9"/><path d="M3 8h18" stroke="white" strokeWidth="1" opacity="0.6"/><circle cx="5.5" cy="6" r="0.8" fill="white" opacity="0.8"/><circle cx="8" cy="6" r="0.8" fill="white" opacity="0.8"/></svg>;
      case 'dashboard':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" opacity="0.9"/><path d="M12 6v3M12 15v3M6 12h3M15 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/><circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/></svg>;
      case 'api':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2" fill="white" opacity="0.9"/><circle cx="5" cy="12" r="2" fill="white" opacity="0.9"/><circle cx="19" cy="12" r="2" fill="white" opacity="0.9"/><circle cx="12" cy="19" r="2" fill="white" opacity="0.9"/><path d="M12 7v4M12 13v4M7 12h4M13 12h4" stroke="white" strokeWidth="1.5" opacity="0.6"/></svg>;
      case 'llm':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="9" ry="5" stroke="white" strokeWidth="1.2" opacity="0.5"/><ellipse cx="12" cy="12" rx="9" ry="5" stroke="white" strokeWidth="1.2" opacity="0.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="5" stroke="white" strokeWidth="1.2" opacity="0.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="3" fill="white" opacity="0.9"/></svg>;
      default: return null;
    }
  };

  const renderGeometryMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'metatron':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.2" opacity="0.5"/><circle cx="12" cy="4" r="1.5" fill="white" opacity="0.8"/><circle cx="12" cy="20" r="1.5" fill="white" opacity="0.8"/><circle cx="5" cy="8" r="1.5" fill="white" opacity="0.8"/><circle cx="19" cy="8" r="1.5" fill="white" opacity="0.8"/><circle cx="5" cy="16" r="1.5" fill="white" opacity="0.8"/><circle cx="19" cy="16" r="1.5" fill="white" opacity="0.8"/><circle cx="12" cy="12" r="2" fill="white" opacity="0.95"/></svg>;
      case 'spiral':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 12c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5c-4 0-7-3-7-7s3-7 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.95"/></svg>;
      case 'flower':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="12" cy="6" r="2.5" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="12" cy="18" r="2.5" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="6.5" cy="9" r="2.5" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="17.5" cy="9" r="2.5" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="6.5" cy="15" r="2.5" stroke="white" strokeWidth="1" opacity="0.5"/><circle cx="17.5" cy="15" r="2.5" stroke="white" strokeWidth="1" opacity="0.5"/></svg>;
      case 'lemniscate':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 12c-2.5-2.5-6-2.5-6 1.5s4 4 6 1.5c2.5 2.5 6 2.5 6-1.5s-4-4-6-1.5z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.85"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.95"/></svg>;
      default: return null;
    }
  };

  const render2DIconMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'trade69-2d': return render3DIconMini('trade69', size);
      case 'megaagent-2d': return render3DIconMini('megaagent', size);
      case 'octopus-2d': return render3DIconMini('octopus', size);
      case 'overmind-2d': return render3DIconMini('overmind', size);
      case 'website-2d': return render3DIconMini('website', size);
      case 'dashboard-2d': return render3DIconMini('dashboard', size);
      case 'api-2d': return render3DIconMini('api', size);
      case 'llm-2d': return render3DIconMini('llm', size);
      default: return null;
    }
  };

  const renderInteractiveMini = (id: string, size: number = miniIconSize) => {
    switch (id) {
      case 'sphere':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" opacity="0.8"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="white" strokeWidth="1" opacity="0.4"/><ellipse cx="12" cy="12" rx="3" ry="8" stroke="white" strokeWidth="1" opacity="0.4"/><circle cx="12" cy="12" r="2" fill="white" opacity="0.95"/></svg>;
      case 'manifold':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 12h18M12 3v18" stroke="white" strokeWidth="0.8" opacity="0.3"/><circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.2" opacity="0.5"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.95"/><circle cx="7" cy="7" r="1.2" fill="white" opacity="0.7"/><circle cx="17" cy="7" r="1.2" fill="white" opacity="0.7"/><circle cx="7" cy="17" r="1.2" fill="white" opacity="0.7"/><circle cx="17" cy="17" r="1.2" fill="white" opacity="0.7"/></svg>;
      case 'architecture':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="6" height="10" rx="1" stroke="white" strokeWidth="1.5" opacity="0.85"/><rect x="14" y="6" width="6" height="12" rx="1" stroke="white" strokeWidth="1.5" opacity="0.85"/><path d="M10 13h4" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.95"/><circle cx="7" cy="11" r="1.2" fill="white" opacity="0.85"/><circle cx="17" cy="10" r="1.2" fill="white" opacity="0.85"/></svg>;
      default: return null;
    }
  };

  const getFolderAnimClass = () => {
    switch (folderAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const getGalleryAnimClass = (galleryId: string) => {
    if (openGallery !== galleryId) return '';
    switch (galleryAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const getExpandedAnimClass = (itemId: string) => {
    if (expandedItem !== itemId) return '';
    switch (expandedAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // FOLDER PREVIEW - 3 icons layout (matching Work page style)
  // ═══════════════════════════════════════════════════════════════════════════════

  const renderFolderPreview = (folderId: string) => {
    if (folderId === 'entertainment') {
      return (
        <div className="folder-preview folder-preview-3">
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)', '--glow-color': 'rgba(94, 234, 212, 0.25)' } as React.CSSProperties}>
            {render3DIconMini('trade69', miniIconSize)}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3a2855, #1e1430)', '--glow-color': 'rgba(192, 132, 252, 0.25)' } as React.CSSProperties}>
            {renderGeometryMini('metatron', miniIconSize)}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)', '--glow-color': 'rgba(165, 180, 252, 0.25)' } as React.CSSProperties}>
            {render2DIconMini('megaagent-2d', miniIconSize)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="folder-preview folder-preview-3">
          {interactiveApps.map((app) => (
            <div key={app.id} className="folder-mini-icon" style={{ background: `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})`, '--glow-color': app.glow } as React.CSSProperties}>
              {renderInteractiveMini(app.id, miniIconSize)}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - CREATIVE PAGE                                                */
        /* Matching Work page EXACTLY - same sizes, transitions, everything                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        * { -webkit-tap-highlight-color: transparent; }
        
        .creative-page {
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .creative-page.overlay-open {
          touch-action: none;
          overflow: hidden;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDERS GRID - MATCHING WORK PAGE EXACTLY                                       */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .folders-grid {
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
          transform: translateZ(0) scale(0.85) translateY(15px);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, opacity 0.5s ease;
          box-shadow: 0 0 50px rgba(255, 255, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.08);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
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
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        .folder-wrapper:nth-child(1) .folder-icon { transition-delay: 0ms; }
        .folder-wrapper:nth-child(2) .folder-icon { transition-delay: 60ms; }
        
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          width: 95px;
          height: 95px;
          position: relative;
          z-index: 5;
        }
        
        .folder-preview-3 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr 1fr;
        }
        
        .folder-preview-3 .folder-mini-icon:nth-child(3) {
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
          box-shadow: 0 0 12px var(--glow-color, rgba(255, 255, 255, 0.1)), 0 3px 8px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
        }
        
        .folder-mini-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 11px 11px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-name {
          font-size: 12px;
          font-weight: 400;
          color: #FAFAF8;
          letter-spacing: 0.02em;
          text-align: center;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        }
        
        .folder-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        .folder-wrapper:nth-child(1) .folder-name { transition-delay: 60ms; }
        .folder-wrapper:nth-child(2) .folder-name { transition-delay: 120ms; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDER OVERLAY - MATCHING WORK PAGE EXACTLY                                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
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
          touch-action: none;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, visibility;
          transform: translateZ(0);
        }
        
        .folder-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .folder-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .folder-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .folder-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          touch-action: none;
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
          transform: translateZ(0);
          transition: none;
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.15), 0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          touch-action: none;
        }
        
        .folder-overlay.active .folder-container {
          opacity: 1;
          transform: translateZ(0);
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.02s;
        }
        
        .folder-overlay.exiting .folder-container {
          opacity: 0;
          transform: translateZ(0);
          transition: opacity 0.25s ease;
        }
        
        .folder-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          touch-action: none;
        }
        
        .folder-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0;
          transform: translateZ(0) scale(0.7) translateY(12px);
          transition: none;
          touch-action: none;
        }
        
        .folder-overlay.active .folder-card {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.exiting .folder-card {
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(5px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .folder-overlay.active .folder-card:nth-child(1) { transition-delay: 0.04s; }
        .folder-overlay.active .folder-card:nth-child(2) { transition-delay: 0.07s; }
        .folder-overlay.active .folder-card:nth-child(3) { transition-delay: 0.10s; }
        
        .folder-card-icon {
          width: 70px;
          height: 70px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.12), 0 6px 20px rgba(0, 0, 0, 0.45), 0 12px 40px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.2);
        }
        
        .folder-card-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 17px 17px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-card-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GALLERY OVERLAY - MATCHING WORK PAGE MEDIA OVERLAY EXACTLY                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .gallery-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
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
        }
        
        .gallery-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .gallery-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .gallery-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .gallery-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          touch-action: manipulation;
        }
        
        .gallery-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 24px;
          opacity: 0;
          transform: translateZ(0);
          transition: none;
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.15), 0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          touch-action: manipulation;
        }
        
        .gallery-overlay.active .gallery-container {
          opacity: 1;
          transform: translateZ(0);
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.02s;
        }
        
        .gallery-overlay.exiting .gallery-container {
          opacity: 0;
          transform: translateZ(0);
          transition: opacity 0.25s ease;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GALLERY GRID - 4x2 for 8 items, 2x2 for 4 items (MATCHING WORK PAGE)            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          touch-action: manipulation;
        }
        
        .gallery-grid.grid-2x2 {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .gallery-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0;
          transform: translateZ(0) scale(0.7) translateY(12px);
          transition: none;
          touch-action: manipulation;
        }
        
        .gallery-overlay.active .gallery-card {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .gallery-overlay.exiting .gallery-card {
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(5px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .gallery-overlay.active .gallery-card:nth-child(1) { transition-delay: 0.04s; }
        .gallery-overlay.active .gallery-card:nth-child(2) { transition-delay: 0.06s; }
        .gallery-overlay.active .gallery-card:nth-child(3) { transition-delay: 0.08s; }
        .gallery-overlay.active .gallery-card:nth-child(4) { transition-delay: 0.10s; }
        .gallery-overlay.active .gallery-card:nth-child(5) { transition-delay: 0.12s; }
        .gallery-overlay.active .gallery-card:nth-child(6) { transition-delay: 0.14s; }
        .gallery-overlay.active .gallery-card:nth-child(7) { transition-delay: 0.16s; }
        .gallery-overlay.active .gallery-card:nth-child(8) { transition-delay: 0.18s; }
        
        .gallery-card-icon {
          width: 70px;
          height: 70px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.12), 0 6px 20px rgba(0, 0, 0, 0.45), 0 12px 40px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          flex-shrink: 0;
        }
        
        .gallery-card-icon::before {
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
        
        .gallery-card-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          max-width: 70px;
        }
        
        .gallery-close {
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
        }
        
        .gallery-overlay.active .gallery-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.15s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
        }
        
        .gallery-overlay.exiting .gallery-close {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .gallery-close svg { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* EXPANDED VIEW - MATCHING WORK PAGE IMAGE EXPANDED EXACTLY                       */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .expanded-view {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0A0A0A;
          z-index: 3000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(80px, 15vh, 150px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: none;
        }
        
        .expanded-view.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .expanded-view.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .expanded-view.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          touch-action: manipulation;
          opacity: 0;
          transform: translateZ(0) scale(0.88);
          transition: none;
        }
        
        .expanded-view.active .expanded-inner {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .expanded-view.exiting .expanded-inner {
          opacity: 0;
          transform: translateZ(0) scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .expanded-content {
          width: 280px;
          height: 280px;
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.1)) drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6));
          touch-action: manipulation;
          opacity: 0;
          transform: translateZ(0) scale(0.9);
          transition: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .expanded-view.active .expanded-content {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1) 0.12s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.12s;
        }
        
        .expanded-view.exiting .expanded-content {
          opacity: 0;
          transform: translateZ(0) scale(0.95);
          transition: opacity 0.2s ease, transform 0.25s ease;
        }
        
        .expanded-content canvas {
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
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
          touch-action: manipulation;
          z-index: 10;
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .expanded-view.active .expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s;
        }
        
        .expanded-view.exiting .expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .expanded-close svg { filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6)); }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - APPLE-LEVEL TRANSITION BRIDGE (matching Work page)           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .transition-bridge {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0A0A0A;
          z-index: 2500;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(180px, 30vh, 280px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity;
          transition: opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), visibility 0s linear 0.25s;
        }
        
        .transition-bridge.loading {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transition: opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), visibility 0s;
        }
        
        .transition-bridge.transitioning {
          opacity: 0;
          visibility: visible;
          pointer-events: none;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear 0.5s;
        }
        
        .bridge-spinner {
          width: 44px;
          height: 44px;
          border: 2.5px solid rgba(255, 255, 255, 0.12);
          border-top-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          animation: bridgeSpin 0.9s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite;
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.15));
        }
        
        @keyframes bridgeSpin {
          to { transform: rotate(360deg); }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE - MATCHING WORK PAGE EXACTLY                                         */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .folders-grid { gap: 48px 44px; max-width: 400px; }
          .folder-icon { width: 145px; height: 145px; border-radius: 32px; }
          .folder-preview { width: 120px; height: 120px; gap: 7px; }
          .folder-mini-icon { width: 56px; height: 56px; border-radius: 13px; }
          .folder-name { font-size: 13px; }
          .folder-container { padding: 28px; }
          .folder-cards-grid { gap: 20px; }
          .folder-card-icon { width: 80px; height: 80px; border-radius: 18px; }
          .gallery-container { padding: 28px; border-radius: 30px; }
          .gallery-grid { gap: 20px; }
          .gallery-card-icon { width: 80px; height: 80px; border-radius: 18px; }
          .gallery-card-name { font-size: 12px; max-width: 80px; }
          .expanded-content { width: 340px; height: 340px; border-radius: 26px; }
        }
        
        @media (min-width: 900px) {
          .folders-grid { gap: 54px 50px; max-width: 480px; }
          .folder-icon { width: 175px; height: 175px; border-radius: 38px; }
          .folder-preview { width: 145px; height: 145px; gap: 8px; }
          .folder-mini-icon { width: 68px; height: 68px; border-radius: 15px; }
          .folder-name { font-size: 14px; }
          .folder-container { padding: 36px; }
          .folder-cards-grid { gap: 26px; }
          .folder-card-icon { width: 95px; height: 95px; border-radius: 22px; }
          .gallery-container { padding: 32px; }
          .gallery-grid { gap: 24px; }
          .gallery-card-icon { width: 90px; height: 90px; border-radius: 20px; }
          .gallery-card-name { font-size: 13px; max-width: 90px; }
        }
        
        canvas { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-backface-visibility: hidden; backface-visibility: hidden; }
      `}</style>

      <div className={`creative-page ${folderAnimState !== 'idle' || galleryAnimState !== 'idle' || expandedAnimState !== 'idle' || bridgePhase !== 'idle' ? 'overlay-open' : ''}`} style={{ minHeight: "100vh", backgroundColor: "#0A0A0A", paddingTop: "clamp(100px, 15vh, 160px)", paddingBottom: "100px", paddingLeft: "20px", paddingRight: "20px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
        <div className="folders-grid">
          {mainFolders.map((folder) => (
            <div key={folder.id} className="folder-wrapper">
              <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder(folder.id)}>
                {renderFolderPreview(folder.id)}
              </div>
              <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>{folder.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STATE OF THE ART - Apple-Level Transition Bridge */}
      <div className={`transition-bridge ${bridgePhase}`}>
        <div className="bridge-spinner" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* ENTERTAINMENT FOLDER                                                            */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {openFolder === 'entertainment' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-cards-grid" onClick={(e) => e.stopPropagation()}>
              {entertainmentCategories.map((cat) => (
                <div key={cat.id} className="folder-card" onClick={() => handleOpenGalleryWithBridge(cat.id)}>
                  <div className="folder-card-icon" style={{ background: cat.id === '3dicons' ? 'linear-gradient(145deg, #1a5040, #0d2820)' : cat.id === 'geometry' ? 'linear-gradient(145deg, #3a2855, #1e1430)' : 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
                    {cat.id === '3dicons' && render3DIconMini('trade69', folderIconSize * 0.75)}
                    {cat.id === 'geometry' && renderGeometryMini('metatron', folderIconSize * 0.75)}
                    {cat.id === 'icons' && render2DIconMini('megaagent-2d', folderIconSize * 0.75)}
                  </div>
                  <span className="folder-card-name">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 3D INTERACTIVE FOLDER                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {openFolder === 'interactive' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-cards-grid" onClick={(e) => e.stopPropagation()}>
              {interactiveApps.map((app) => (
                <div key={app.id} className="folder-card" onClick={() => handleOpenExpandedWithBridge(`exp-${app.id}`)}>
                  <div className="folder-card-icon" style={{ background: `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})` }}>
                    {renderInteractiveMini(app.id, folderIconSize * 0.75)}
                  </div>
                  <span className="folder-card-name">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 3D ICONS GALLERY - 4x2 grid                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`gallery-overlay ${getGalleryAnimClass('3dicons')}`}>
        <div className="gallery-overlay-bg" onClick={handleCloseGallery} />
        <div className="gallery-container" onClick={handleCloseGallery}>
          <div className="gallery-grid" onClick={(e) => e.stopPropagation()}>
            {icons3DItems.map((item) => (
              <div key={item.id} className="gallery-card" onClick={() => handleOpenExpandedFromGallery(`3d-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {render3DIconMini(item.id, folderIconSize * 0.65)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* GEOMETRY GALLERY - 2x2 grid                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`gallery-overlay ${getGalleryAnimClass('geometry')}`}>
        <div className="gallery-overlay-bg" onClick={handleCloseGallery} />
        <div className="gallery-container" onClick={handleCloseGallery}>
          <div className="gallery-grid grid-2x2" onClick={(e) => e.stopPropagation()}>
            {geometryItems.map((item) => (
              <div key={item.id} className="gallery-card" onClick={() => handleOpenExpandedFromGallery(`geo-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {renderGeometryMini(item.id, folderIconSize * 0.65)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 2D ICONS GALLERY - 4x2 grid                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`gallery-overlay ${getGalleryAnimClass('icons')}`}>
        <div className="gallery-overlay-bg" onClick={handleCloseGallery} />
        <div className="gallery-container" onClick={handleCloseGallery}>
          <div className="gallery-grid" onClick={(e) => e.stopPropagation()}>
            {staticIconItems.map((item) => (
              <div key={item.id} className="gallery-card" onClick={() => handleOpenExpandedFromGallery(`2d-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {render2DIconMini(item.id, folderIconSize * 0.65)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - 3D Icons                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {icons3DItems.map((item) => (
        <div key={item.id} className={`expanded-view ${getExpandedAnimClass(`3d-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `3d-${item.id}` && render3DIcon(item.id, 200)}
            </div>
            <button className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - Geometry                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {geometryItems.map((item) => (
        <div key={item.id} className={`expanded-view ${getExpandedAnimClass(`geo-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `geo-${item.id}` && renderGeometry(item.id)}
            </div>
            <button className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - 2D Icons                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {staticIconItems.map((item) => (
        <div key={item.id} className={`expanded-view ${getExpandedAnimClass(`2d-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `2d-${item.id}` && render2DIcon(item.id, 3)}
            </div>
            <button className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - 3D Interactive Experiences                                     */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {interactiveApps.map((app) => (
        <div key={app.id} className={`expanded-view ${getExpandedAnimClass(`exp-${app.id}`)}`}>
          <div className="expanded-inner" onTouchStart={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()}>
            <div className="expanded-content" style={{ touchAction: 'manipulation' }} onTouchStart={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()}>
              {expandedItem === `exp-${app.id}` && renderExperience(app.id)}
            </div>
            <button className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}