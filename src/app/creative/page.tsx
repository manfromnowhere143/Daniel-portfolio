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
// 2 MAIN FOLDERS
// ═══════════════════════════════════════════════════════════════════════════════

const mainFolders = [
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'interactive', name: '3D Interactive' },
];

// Entertainment contains 3 gallery categories (shown as cards, not apps)
const entertainmentCategories = [
  { id: '3dicons', name: '3D Icons' },
  { id: 'geometry', name: 'Geometry' },
  { id: 'icons', name: 'Icons' },
];

// 3D Interactive contains 3 standalone experiences
const interactiveApps = [
  { id: 'sphere', name: 'Sphere', color: ['#2a2018', '#15100a'] },
  { id: 'manifold', name: 'Manifold', color: ['#1a2820', '#0a1510'] },
  { id: 'architecture', name: 'Architecture', color: ['#18202a', '#0a1015'] },
];

// 3D Icons gallery items (8 cards)
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

// Geometry gallery items (4 cards)
const geometryItems = [
  { id: 'metatron', name: 'Metatron', color: ['#3a2855', '#1e1430'] },
  { id: 'spiral', name: 'Spiral', color: ['#552838', '#301418'] },
  { id: 'flower', name: 'Flower', color: ['#283855', '#141e30'] },
  { id: 'lemniscate', name: 'Infinity', color: ['#385528', '#1e3014'] },
];

// Static Icons gallery items (8 cards)
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

type AnimationState = 'idle' | 'entering' | 'active' | 'exiting';

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Folder overlay state (Entertainment or Interactive)
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [folderAnimState, setFolderAnimState] = useState<AnimationState>('idle');

  // Gallery overlay state (3D Icons, Geometry, Icons galleries)
  const [openGallery, setOpenGallery] = useState<string | null>(null);
  const [galleryAnimState, setGalleryAnimState] = useState<AnimationState>('idle');

  // Expanded view state (fullscreen view for any item)
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedAnimState, setExpandedAnimState] = useState<AnimationState>('idle');

  const folderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const expandedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (folderTimeoutRef.current) clearTimeout(folderTimeoutRef.current);
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
      if (expandedTimeoutRef.current) clearTimeout(expandedTimeoutRef.current);
    };
  }, []);

  // Folder handlers
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

  // Gallery handlers
  const handleOpenGallery = useCallback((galleryId: string) => {
    if (galleryAnimState !== 'idle') return;
    setOpenGallery(galleryId);
    setGalleryAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setGalleryAnimState('active'));
    });
  }, [galleryAnimState]);

  const handleCloseGallery = useCallback(() => {
    if (galleryAnimState !== 'active') return;
    setGalleryAnimState('exiting');
    galleryTimeoutRef.current = setTimeout(() => {
      setOpenGallery(null);
      setGalleryAnimState('idle');
    }, 350);
  }, [galleryAnimState]);

  // Expanded handlers
  const handleOpenExpanded = useCallback((itemId: string) => {
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

  // Lock body scroll
  const preventTouchMove = useCallback((e: TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.gallery-close') || target.closest('.expanded-close') ||
        target.closest('.folder-close') || target.closest('.gallery-card') ||
        target.closest('.folder-card') || target.closest('.expanded-content')) {
      return;
    }
    e.preventDefault();
  }, []);

  useEffect(() => {
    const isOpen = folderAnimState !== 'idle' || galleryAnimState !== 'idle' || expandedAnimState !== 'idle';
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.addEventListener('touchmove', preventTouchMove, { passive: false });
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.removeEventListener('touchmove', preventTouchMove);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, [folderAnimState, galleryAnimState, expandedAnimState, preventTouchMove]);

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

  // Mini icon renderers for folder previews - MATCHING the actual content
  const render3DIconMini = (id: string) => {
    // These mini versions match what shows in expanded view
    switch (id) {
      case 'trade69':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L21 8v8l-9 5-9-5V8l9-5z" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <path d="M12 3v18M3 8l9 5 9-5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'megaagent':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="3" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <circle cx="6" cy="16" r="2.5" stroke="white" strokeWidth="1" opacity="0.6"/>
            <circle cx="18" cy="16" r="2.5" stroke="white" strokeWidth="1" opacity="0.6"/>
            <path d="M12 11v2M9 14l-2 1M15 14l2 1" stroke="white" strokeWidth="1" opacity="0.7"/>
          </svg>
        );
      case 'octopus':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="10" rx="5" ry="4" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <path d="M7 13c-1 2-2 5-1 6M10 14c0 2-1 5 0 6M14 14c0 2 1 5 0 6M17 13c1 2 2 5 1 6" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>
            <circle cx="10" cy="9" r="1" fill="white" opacity="0.9"/>
            <circle cx="14" cy="9" r="1" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'overmind':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1" opacity="0.6"/>
            <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1" opacity="0.8"/>
            <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/>
            <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="white" strokeWidth="1" opacity="0.5"/>
          </svg>
        );
      case 'website':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="12" rx="2" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <path d="M4 10h16" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="6.5" cy="8" r="0.8" fill="white" opacity="0.7"/>
            <circle cx="9" cy="8" r="0.8" fill="white" opacity="0.7"/>
          </svg>
        );
      case 'dashboard':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <rect x="13" y="4" width="7" height="4" rx="1" stroke="white" strokeWidth="1" opacity="0.6"/>
            <rect x="13" y="10" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <rect x="4" y="13" width="7" height="4" rx="1" stroke="white" strokeWidth="1" opacity="0.6"/>
          </svg>
        );
      case 'api':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
            <path d="M14 4l-4 16" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
          </svg>
        );
      case 'llm':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1" opacity="0.6"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
            <path d="M12 6v2M12 16v2M6 12h2M16 12h2M8 8l1.5 1.5M14.5 14.5L16 16M8 16l1.5-1.5M14.5 9.5L16 8" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        );
      default: return null;
    }
  };

  const renderGeometryMini = (id: string) => {
    switch (id) {
      case 'metatron':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1" opacity="0.6"/>
            <circle cx="12" cy="5" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="12" cy="19" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="6" cy="8.5" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="18" cy="8.5" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="6" cy="15.5" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="18" cy="15.5" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'spiral':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 12c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
            <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'flower':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1" opacity="0.9"/>
            <circle cx="12" cy="6.5" r="2.5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="12" cy="17.5" r="2.5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="7.2" cy="9.3" r="2.5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="16.8" cy="9.3" r="2.5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="7.2" cy="14.7" r="2.5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="16.8" cy="14.7" r="2.5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        );
      case 'lemniscate':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 12c-2-2-5-2-5 1s3 3 5 1c2 2 5 2 5-1s-3-3-5-1z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
            <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/>
          </svg>
        );
      default: return null;
    }
  };

  const render2DIconMini = (id: string) => {
    // Simplified mini versions for 2D icons
    switch (id) {
      case 'trade69-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L21 8v8l-9 5-9-5V8l9-5z" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'megaagent-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="3" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <circle cx="6" cy="16" r="2.5" stroke="white" strokeWidth="1" opacity="0.6"/>
            <circle cx="18" cy="16" r="2.5" stroke="white" strokeWidth="1" opacity="0.6"/>
          </svg>
        );
      case 'octopus-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="10" rx="5" ry="4" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <path d="M7 13c-1 2-2 5-1 6M17 13c1 2 2 5 1 6" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>
          </svg>
        );
      case 'overmind-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1" opacity="0.7"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'website-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="12" rx="2" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <path d="M4 10h16" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        );
      case 'dashboard-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.2" opacity="0.8"/>
            <rect x="13" y="10" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.2" opacity="0.8"/>
          </svg>
        );
      case 'api-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
          </svg>
        );
      case 'llm-2d':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1" opacity="0.7"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
          </svg>
        );
      default: return null;
    }
  };

  const renderInteractiveMini = (id: string) => {
    switch (id) {
      case 'sphere':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1" opacity="0.7"/>
            <ellipse cx="12" cy="12" rx="8" ry="3" stroke="white" strokeWidth="0.6" opacity="0.4"/>
            <ellipse cx="12" cy="12" rx="3" ry="8" stroke="white" strokeWidth="0.6" opacity="0.4"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'manifold':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12h16M12 4v16" stroke="white" strokeWidth="0.6" opacity="0.3"/>
            <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/>
            <circle cx="8" cy="8" r="1" fill="white" opacity="0.6"/>
            <circle cx="16" cy="8" r="1" fill="white" opacity="0.6"/>
            <circle cx="8" cy="16" r="1" fill="white" opacity="0.6"/>
            <circle cx="16" cy="16" r="1" fill="white" opacity="0.6"/>
          </svg>
        );
      case 'architecture':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="8" width="6" height="10" rx="1" stroke="white" strokeWidth="1" opacity="0.7"/>
            <rect x="14" y="6" width="6" height="12" rx="1" stroke="white" strokeWidth="1" opacity="0.7"/>
            <path d="M10 13h4" stroke="white" strokeWidth="1.5" opacity="0.9"/>
            <circle cx="7" cy="11" r="1" fill="white" opacity="0.8"/>
            <circle cx="17" cy="10" r="1" fill="white" opacity="0.8"/>
          </svg>
        );
      default: return null;
    }
  };

  // Animation class getters
  const getFolderAnimClass = (folderId: string) => openFolder === folderId ? folderAnimState : '';
  const getGalleryAnimClass = (galleryId: string) => openGallery === galleryId ? galleryAnimState : '';
  const getExpandedAnimClass = (itemId: string) => expandedItem === itemId ? expandedAnimState : '';

  // ═══════════════════════════════════════════════════════════════════════════════
  // FOLDER PREVIEW - Shows actual mini icons that match expanded content
  // ═══════════════════════════════════════════════════════════════════════════════

  const renderFolderPreview = (folderId: string) => {
    if (folderId === 'entertainment') {
      // Show 4 representative items from the 3 categories
      return (
        <div className="folder-preview">
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}>
            {render3DIconMini('trade69')}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3a2855, #1e1430)' }}>
            {renderGeometryMini('metatron')}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
            {render2DIconMini('megaagent-2d')}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #552838, #301418)' }}>
            {renderGeometryMini('spiral')}
          </div>
        </div>
      );
    } else {
      // Interactive folder - show the 3 experiences
      return (
        <div className="folder-preview">
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #2a2018, #15100a)' }}>
            {renderInteractiveMini('sphere')}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a2820, #0a1510)' }}>
            {renderInteractiveMini('manifold')}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #18202a, #0a1015)' }}>
            {renderInteractiveMini('architecture')}
          </div>
          <div className="folder-mini-icon folder-mini-empty" />
        </div>
      );
    }
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - CREATIVE PAGE                                                */
        /* Gallery-style cards with premium animations                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
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
        /* MAIN GRID - 2 FOLDERS                                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .creative-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 32px;
          max-width: 320px;
          margin: 0 auto;
        }
        
        .folder-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDER ICON - Premium Glass Effect                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
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
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.4s ease, opacity 0.5s ease;
          box-shadow: 
            0 0 50px rgba(255, 255, 255, 0.06),
            0 8px 32px rgba(0, 0, 0, 0.5),
            0 2px 8px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -1px 1px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.08);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-tap-highlight-color: transparent;
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
        
        .folder-icon:active {
          transform: translateZ(0) scale(0.94);
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
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .folder-mini-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
          border-radius: 11px 11px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-mini-empty {
          background: transparent !important;
          box-shadow: none !important;
        }
        
        .folder-mini-empty::before {
          display: none;
        }
        
        .folder-name {
          font-size: 12px;
          font-weight: 400;
          color: #FAFAF8;
          text-align: center;
          opacity: 0;
          transform: translateY(5px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .folder-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        .folder-wrapper:nth-child(1) .folder-name { transition-delay: 80ms; }
        .folder-wrapper:nth-child(2) .folder-name { transition-delay: 140ms; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDER OVERLAY - Shows Category Cards                                           */
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
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, visibility;
          transform: translateZ(0);
          -webkit-tap-highlight-color: transparent;
        }
        
        .folder-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .folder-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .folder-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .folder-overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
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
        
        .folder-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          -webkit-tap-highlight-color: transparent;
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
          -webkit-tap-highlight-color: transparent;
        }
        
        .folder-overlay.active .folder-card {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), 
                      transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
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
          box-shadow: 
            0 0 25px rgba(255, 255, 255, 0.12),
            0 6px 20px rgba(0, 0, 0, 0.45),
            0 12px 40px rgba(0, 0, 0, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.4),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
        }
        
        .folder-card-icon::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%; height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 17px 17px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-card-icon:active { transform: scale(0.92); }
        
        .folder-card-name {
          font-size: 11px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
        }
        
        /* Empty card placeholder */
        .folder-card-empty {
          width: 70px;
          height: 70px;
          border-radius: 17px;
          background: rgba(0, 0, 0, 0.03);
          border: 1px dashed rgba(0, 0, 0, 0.08);
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
        
        .folder-close svg { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); }
        .folder-close:active { transform: scale(0.85); }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GALLERY OVERLAY - Card Grid for Items                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .gallery-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(80px, 14vh, 140px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, visibility;
          transform: translateZ(0);
          -webkit-tap-highlight-color: transparent;
        }
        
        .gallery-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .gallery-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .gallery-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .gallery-overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          -webkit-tap-highlight-color: transparent;
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
          transform: translateZ(0) scale(0.8);
          transition: none;
          box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.15),
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 25px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.8);
          max-height: 70vh;
          overflow-y: auto;
          -webkit-tap-highlight-color: transparent;
        }
        
        .gallery-overlay.active .gallery-container {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.02s, 
                      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.02s;
        }
        
        .gallery-overlay.exiting .gallery-container {
          opacity: 0;
          transform: translateZ(0) scale(0.9);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          -webkit-tap-highlight-color: transparent;
        }
        
        .gallery-grid.grid-2 {
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
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
          -webkit-tap-highlight-color: transparent;
        }
        
        .gallery-overlay.active .gallery-card {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), 
                      transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .gallery-overlay.exiting .gallery-card {
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(5px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .gallery-overlay.active .gallery-card:nth-child(1) { transition-delay: 0.03s; }
        .gallery-overlay.active .gallery-card:nth-child(2) { transition-delay: 0.05s; }
        .gallery-overlay.active .gallery-card:nth-child(3) { transition-delay: 0.07s; }
        .gallery-overlay.active .gallery-card:nth-child(4) { transition-delay: 0.09s; }
        .gallery-overlay.active .gallery-card:nth-child(5) { transition-delay: 0.11s; }
        .gallery-overlay.active .gallery-card:nth-child(6) { transition-delay: 0.13s; }
        .gallery-overlay.active .gallery-card:nth-child(7) { transition-delay: 0.15s; }
        .gallery-overlay.active .gallery-card:nth-child(8) { transition-delay: 0.17s; }
        
        .gallery-card-icon {
          width: 70px;
          height: 70px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.1),
            0 5px 16px rgba(0, 0, 0, 0.4),
            0 10px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.35),
            inset 0 -1px 1px rgba(0, 0, 0, 0.15);
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .gallery-card-icon::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%; height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%);
          border-radius: 16px 16px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .gallery-card-icon:active { transform: scale(0.9); }
        
        .gallery-card-name {
          font-size: 11px;
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
          -webkit-tap-highlight-color: transparent;
        }
        
        .gallery-overlay.active .gallery-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.15s, 
                      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
        }
        
        .gallery-overlay.exiting .gallery-close {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .gallery-close svg { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); }
        .gallery-close:active { transform: scale(0.85); }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* EXPANDED VIEW - Fullscreen Experience                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .expanded-view {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #0A0A0A;
          z-index: 3000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, visibility;
          transform: translateZ(0);
          -webkit-tap-highlight-color: transparent;
        }
        
        .expanded-view.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .expanded-view.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .expanded-view.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateZ(0) scale(0.88);
          transition: none;
        }
        
        .expanded-view.active .expanded-inner {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.05s, 
                      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .expanded-view.exiting .expanded-inner {
          opacity: 0;
          transform: translateZ(0) scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .expanded-content {
          width: 280px;
          height: 280px;
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
          transition: none;
          -webkit-tap-highlight-color: transparent;
        }
        
        .expanded-view.active .expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.18s, 
                      transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s;
        }
        
        .expanded-view.exiting .expanded-close {
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
          .folder-icon:hover { transform: translateZ(0) scale(1.04) translateY(-3px); }
          .folder-preview { width: 120px; height: 120px; gap: 7px; }
          .folder-mini-icon { width: 56px; height: 56px; border-radius: 13px; }
          .folder-name { font-size: 13px; }
          .folder-container { padding: 28px; }
          .folder-cards-grid { gap: 20px; }
          .folder-card-icon { width: 80px; height: 80px; border-radius: 18px; }
          .folder-card-icon:hover { transform: scale(1.06); }
          .folder-card-name { font-size: 12px; }
          .gallery-container { padding: 28px; }
          .gallery-grid { gap: 16px; }
          .gallery-grid.grid-2 { gap: 20px; }
          .gallery-card-icon { width: 80px; height: 80px; border-radius: 18px; }
          .gallery-card-icon:hover { transform: scale(1.06); }
          .gallery-card-name { font-size: 12px; max-width: 80px; }
          .expanded-content { width: 360px; height: 360px; }
        }
        
        @media (min-width: 900px) {
          .creative-grid { gap: 54px 50px; max-width: 480px; }
          .folder-icon { width: 175px; height: 175px; border-radius: 38px; }
          .folder-preview { width: 145px; height: 145px; gap: 8px; }
          .folder-mini-icon { width: 68px; height: 68px; border-radius: 15px; }
          .folder-name { font-size: 14px; }
          .folder-container { padding: 36px; }
          .folder-cards-grid { gap: 26px; }
          .folder-card-icon { width: 95px; height: 95px; border-radius: 22px; }
          .folder-card-name { font-size: 13px; }
          .gallery-container { padding: 32px; }
          .gallery-grid { gap: 20px; }
          .gallery-grid.grid-2 { gap: 24px; }
          .gallery-card-icon { width: 90px; height: 90px; border-radius: 20px; }
          .gallery-card-name { font-size: 13px; max-width: 95px; }
          .expanded-content { width: 440px; height: 440px; }
        }
        
        * { -webkit-tap-highlight-color: transparent; }
        canvas { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-backface-visibility: hidden; backface-visibility: hidden; }
      `}</style>

      <div className={`creative-page ${folderAnimState !== 'idle' || galleryAnimState !== 'idle' || expandedAnimState !== 'idle' ? 'overlay-open' : ''}`} style={{
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
        {/* 2 Main Folders */}
        <div className="creative-grid">
          {mainFolders.map((folder) => (
            <div key={folder.id} className="folder-wrapper">
              <div
                className={`folder-icon ${isLoaded ? 'loaded' : ''}`}
                onClick={() => handleOpenFolder(folder.id)}
              >
                {renderFolderPreview(folder.id)}
              </div>
              <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>{folder.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* ENTERTAINMENT FOLDER - Shows 3 Category Cards                                   */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`folder-overlay ${getFolderAnimClass('entertainment')}`}>
        <div className="folder-overlay-bg" onClick={handleCloseFolder} />
        <div className="folder-container">
          <div className="folder-cards-grid">
            {/* 3D Icons Category */}
            <div className="folder-card" onClick={() => { handleCloseFolder(); setTimeout(() => handleOpenGallery('3dicons'), 400); }}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}>
                {render3DIconMini('trade69')}
              </div>
              <span className="folder-card-name">3D Icons</span>
            </div>

            {/* Geometry Category */}
            <div className="folder-card" onClick={() => { handleCloseFolder(); setTimeout(() => handleOpenGallery('geometry'), 400); }}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #3a2855, #1e1430)' }}>
                {renderGeometryMini('metatron')}
              </div>
              <span className="folder-card-name">Geometry</span>
            </div>

            {/* Icons Category */}
            <div className="folder-card" onClick={() => { handleCloseFolder(); setTimeout(() => handleOpenGallery('icons'), 400); }}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
                {render2DIconMini('megaagent-2d')}
              </div>
              <span className="folder-card-name">Icons</span>
            </div>
          </div>
        </div>
        <div className="folder-close" onClick={handleCloseFolder}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 3D INTERACTIVE FOLDER - Shows 3 Experience Cards + Empty Slot                   */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`folder-overlay ${getFolderAnimClass('interactive')}`}>
        <div className="folder-overlay-bg" onClick={handleCloseFolder} />
        <div className="folder-container">
          <div className="folder-cards-grid">
            {interactiveApps.map(app => (
              <div key={app.id} className="folder-card" onClick={() => { handleCloseFolder(); setTimeout(() => handleOpenExpanded(`exp-${app.id}`), 400); }}>
                <div className="folder-card-icon" style={{ background: `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})` }}>
                  {renderInteractiveMini(app.id)}
                </div>
                <span className="folder-card-name">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="folder-close" onClick={handleCloseFolder}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 3D ICONS GALLERY                                                                */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`gallery-overlay ${getGalleryAnimClass('3dicons')}`}>
        <div className="gallery-overlay-bg" onClick={handleCloseGallery} />
        <div className="gallery-container">
          <div className="gallery-grid">
            {icons3DItems.map(item => (
              <div key={item.id} className="gallery-card" onClick={() => handleOpenExpanded(`3d-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {render3DIconMini(item.id)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gallery-close" onClick={handleCloseGallery}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* GEOMETRY GALLERY                                                                */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`gallery-overlay ${getGalleryAnimClass('geometry')}`}>
        <div className="gallery-overlay-bg" onClick={handleCloseGallery} />
        <div className="gallery-container">
          <div className="gallery-grid grid-2">
            {geometryItems.map(item => (
              <div key={item.id} className="gallery-card" onClick={() => handleOpenExpanded(`geo-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {renderGeometryMini(item.id)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gallery-close" onClick={handleCloseGallery}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* 2D ICONS GALLERY                                                                */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`gallery-overlay ${getGalleryAnimClass('icons')}`}>
        <div className="gallery-overlay-bg" onClick={handleCloseGallery} />
        <div className="gallery-container">
          <div className="gallery-grid">
            {staticIconItems.map(item => (
              <div key={item.id} className="gallery-card" onClick={() => handleOpenExpanded(`2d-${item.id}`)}>
                <div className="gallery-card-icon" style={{ background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})` }}>
                  {render2DIconMini(item.id)}
                </div>
                <span className="gallery-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gallery-close" onClick={handleCloseGallery}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - 3D Icons                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {icons3DItems.map(item => (
        <div key={item.id} className={`expanded-view ${getExpandedAnimClass(`3d-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `3d-${item.id}` && render3DIcon(item.id, 200)}
            </div>
            <div className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - Geometry                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {geometryItems.map(item => (
        <div key={item.id} className={`expanded-view ${getExpandedAnimClass(`geo-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `geo-${item.id}` && renderGeometry(item.id)}
            </div>
            <div className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - 2D Icons                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {staticIconItems.map(item => (
        <div key={item.id} className={`expanded-view ${getExpandedAnimClass(`2d-${item.id}`)}`}>
          <div className="expanded-inner">
            <div className="expanded-content">
              {expandedItem === `2d-${item.id}` && render2DIcon(item.id, 3)}
            </div>
            <div className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED VIEWS - 3D Interactive Experiences                                     */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {interactiveApps.map(app => (
        <div
          key={app.id}
          className={`expanded-view ${getExpandedAnimClass(`exp-${app.id}`)}`}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="expanded-inner">
            <div
              className="expanded-content"
              style={{ touchAction: 'manipulation' }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {expandedItem === `exp-${app.id}` && renderExperience(app.id)}
            </div>
            <div className="expanded-close" onClick={handleCloseExpanded}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}