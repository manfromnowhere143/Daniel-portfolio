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

// Entertainment contains 3 gallery categories
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

// Static Icons - used for showcase display
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

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - Global scroll restore function
// ═══════════════════════════════════════════════════════════════════════════════
const restoreScroll = () => {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  if ((window as any).__solidRockCleanup) {
    (window as any).__solidRockCleanup();
    delete (window as any).__solidRockCleanup;
  }
};

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Folder overlay state (Entertainment or Interactive)
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [folderAnimState, setFolderAnimState] = useState<AnimationState>('idle');

  // Gallery overlay state (3D Icons, Geometry galleries)
  const [openGallery, setOpenGallery] = useState<string | null>(null);
  const [galleryAnimState, setGalleryAnimState] = useState<AnimationState>('idle');

  // Expanded view state (fullscreen view for any item)
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedAnimState, setExpandedAnimState] = useState<AnimationState>('idle');

  // Sub-expanded state (for items within showcase apps)
  const [subExpandedItem, setSubExpandedItem] = useState<string | null>(null);
  const [subExpandedAnimState, setSubExpandedAnimState] = useState<AnimationState>('idle');

  // STATE OF THE ART - Elegant transition bridge to prevent flash
  const [bridgePhase, setBridgePhase] = useState<'idle' | 'in' | 'hold' | 'out'>('idle');

  const folderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const expandedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // STATE OF THE ART - Smooth overscroll prevention
  useEffect(() => {
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';

    let lastY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      lastY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop <= 0 && currentY > lastY) {
        e.preventDefault();
      }
      if (scrollTop + clientHeight >= scrollHeight && currentY < lastY) {
        e.preventDefault();
      }
      lastY = currentY;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.documentElement.style.overscrollBehavior = '';
      document.body.style.overscrollBehavior = '';
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - Cleanup on unmount to restore scroll
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    return () => {
      if (folderTimeoutRef.current) clearTimeout(folderTimeoutRef.current);
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
      if (expandedTimeoutRef.current) clearTimeout(expandedTimeoutRef.current);
      restoreScroll();
    };
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════════
  // IRON LOCK - Complete lock for interactive 3D experiences
  // Prevents ALL scrolling/swiping on the page (left/right/up/down)
  // ONLY canvas element can receive touch events
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const isInteractive = expandedItem?.startsWith('exp-');

    if (isInteractive && expandedAnimState === 'active') {
      // IRON LOCK - prevent ALL touch events except on canvas
      const preventAll = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        // ONLY allow touch on canvas - block everything else
        if (target.tagName === 'CANVAS') return;
        e.preventDefault();
        e.stopPropagation();
      };

      // IRON LOCK - prevent ALL touch start except on canvas
      const preventTouchStart = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'CANVAS') return;
        // Don't prevent on close button
        if (target.closest('.expanded-close') || target.closest('.interactive-close')) return;
      };

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.touchAction = 'none';

      // Capture phase to intercept before anything else
      document.addEventListener('touchmove', preventAll, { passive: false, capture: true });
      document.addEventListener('touchstart', preventTouchStart, { passive: true, capture: true });

      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.touchAction = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.touchAction = '';
        document.removeEventListener('touchmove', preventAll, { capture: true } as any);
        document.removeEventListener('touchstart', preventTouchStart, { capture: true } as any);
      };
    }
  }, [expandedItem, expandedAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // SOLID ROCK LOCK - NO MOVEMENT AT ALL when overlays open
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const isOpen = folderAnimState !== 'idle' || galleryAnimState !== 'idle' || expandedAnimState !== 'idle' || bridgePhase !== 'idle';
    const isInteractive = expandedItem?.startsWith('exp-');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const blockAllTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;

        // For interactive 3D experiences - ONLY allow canvas
        if (isInteractive) {
          if (target.tagName === 'CANVAS') return;
          if (target.closest('.expanded-close') || target.closest('.interactive-close')) return;
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // For other expanded content, allow touch inside
        if (target.closest('.expanded-content')) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
      };

      const blockWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.expanded-content')) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
      };

      document.addEventListener('touchmove', blockAllTouch, { passive: false, capture: true });
      document.addEventListener('wheel', blockWheel, { passive: false, capture: true });

      (window as any).__solidRockCleanup = () => {
        document.removeEventListener('touchmove', blockAllTouch, { capture: true } as any);
        document.removeEventListener('wheel', blockWheel, { capture: true } as any);
      };

      return () => {
        if ((window as any).__solidRockCleanup) {
          (window as any).__solidRockCleanup();
        }
      };
    } else {
      restoreScroll();
    }
  }, [folderAnimState, galleryAnimState, expandedAnimState, bridgePhase, expandedItem]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // FOLDER HANDLERS
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
  // STATE OF THE ART - SEAMLESS TRANSITIONS WITH ELEGANT BRIDGE
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenGalleryFromFolder = useCallback((galleryId: string) => {
    if (folderAnimState !== 'active') return;

    setBridgePhase('in');

    setTimeout(() => {
      setBridgePhase('hold');
      setFolderAnimState('exiting');

      setTimeout(() => {
        setOpenFolder(null);
        setFolderAnimState('idle');
        setOpenGallery(galleryId);
        setGalleryAnimState('entering');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setGalleryAnimState('active');
            setBridgePhase('out');
            setTimeout(() => setBridgePhase('idle'), 350);
          });
        });
      }, 180);
    }, 120);
  }, [folderAnimState]);

  const handleCloseGallery = useCallback(() => {
    if (galleryAnimState !== 'active') return;
    setGalleryAnimState('exiting');
    galleryTimeoutRef.current = setTimeout(() => {
      setOpenGallery(null);
      setGalleryAnimState('idle');
    }, 350);
  }, [galleryAnimState]);

  const handleOpenExpandedFromFolder = useCallback((itemId: string) => {
    if (folderAnimState !== 'active') return;

    // For 2D Icons showcase only, use direct crossfade (no bridge spinner)
    if (itemId === 'icons-showcase') {
      setFolderAnimState('exiting');

      setTimeout(() => {
        setOpenFolder(null);
        setFolderAnimState('idle');
        setExpandedItem(itemId);
        setExpandedAnimState('entering');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setExpandedAnimState('active');
          });
        });
      }, 250);
      return;
    }

    // For 3D Icons, Geometry, and all other items - use bridge transition
    // This prevents flash by keeping spinner visible until app is ready
    setBridgePhase('in');

    setTimeout(() => {
      setBridgePhase('hold');
      setFolderAnimState('exiting');

      setTimeout(() => {
        setOpenFolder(null);
        setFolderAnimState('idle');
        setExpandedItem(itemId);
        setExpandedAnimState('entering');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setExpandedAnimState('active');
            setBridgePhase('out');
            setTimeout(() => setBridgePhase('idle'), 350);
          });
        });
      }, 180);
    }, 120);
  }, [folderAnimState]);

  const handleOpenExpandedFromGallery = useCallback((itemId: string) => {
    if (galleryAnimState !== 'active') return;
    setExpandedItem(itemId);
    setExpandedAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpandedAnimState('active'));
    });
  }, [galleryAnimState]);

  const handleCloseExpanded = useCallback(() => {
    if (expandedAnimState !== 'active') return;

    // If sub-expanded is open, close it first
    if (subExpandedItem) {
      setSubExpandedAnimState('exiting');
      setTimeout(() => {
        setSubExpandedItem(null);
        setSubExpandedAnimState('idle');
      }, 350);
      return;
    }

    setExpandedAnimState('exiting');
    expandedTimeoutRef.current = setTimeout(() => {
      setExpandedItem(null);
      setExpandedAnimState('idle');
    }, 400);
  }, [expandedAnimState, subExpandedItem]);

  // Handler for opening sub-expanded item within a showcase
  const handleOpenSubExpanded = useCallback((itemId: string) => {
    setSubExpandedItem(itemId);
    setSubExpandedAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setSubExpandedAnimState('active'));
    });
  }, []);

  const handleCloseSubExpanded = useCallback(() => {
    if (subExpandedAnimState !== 'active') return;
    setSubExpandedAnimState('exiting');
    setTimeout(() => {
      setSubExpandedItem(null);
      setSubExpandedAnimState('idle');
    }, 100); // INSTANT
  }, [subExpandedAnimState]);

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

  const miniIconSize = isMobile ? 22 : 26;
  const folderIconSize = isMobile ? 36 : 42;
  const galleryIconSize = isMobile ? 38 : 44;

  // ═══════════════════════════════════════════════════════════════════════════════
  // MINI ICON RENDERERS
  // ═══════════════════════════════════════════════════════════════════════════════

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
            <path d="M12 1v4M12 19v4M1 12h4M19 12h4" stroke="white" strokeWidth="1.5" opacity="0.5"/>
          </svg>
        );
      case 'website':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="15" rx="2.5" stroke="white" strokeWidth="2" opacity="0.95"/>
            <path d="M2 9h20" stroke="white" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="5" cy="6.5" r="1" fill="white" opacity="0.85"/>
            <circle cx="8" cy="6.5" r="1" fill="white" opacity="0.85"/>
            <circle cx="11" cy="6.5" r="1" fill="white" opacity="0.85"/>
          </svg>
        );
      case 'dashboard':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" opacity="0.95"/>
            <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <path d="M12 5v4M12 15v4M5 12h4M15 12h4" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
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
            <path d="M12 6.5v4M12 13.5v4M6.5 12h4M13.5 12h4" stroke="white" strokeWidth="2" opacity="0.7"/>
            <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" opacity="0.9"/>
          </svg>
        );
      case 'llm':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="5" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <ellipse cx="12" cy="12" rx="10" ry="5" stroke="white" strokeWidth="1.5" opacity="0.5" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="5" stroke="white" strokeWidth="1.5" opacity="0.5" transform="rotate(120 12 12)"/>
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
            <circle cx="5" cy="16" r="2" fill="white" opacity="0.9"/>
            <circle cx="19" cy="16" r="2" fill="white" opacity="0.9"/>
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
            <circle cx="6" cy="15.5" r="3" stroke="white" strokeWidth="1.2" opacity="0.6"/>
            <circle cx="18" cy="15.5" r="3" stroke="white" strokeWidth="1.2" opacity="0.6"/>
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
            <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="white" strokeWidth="1.2" opacity="0.5"/>
            <circle cx="12" cy="12" r="2.5" fill="white" opacity="1"/>
          </svg>
        );
      case 'manifold':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M12 3v18" stroke="white" strokeWidth="1" opacity="0.4"/>
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
            <circle cx="6.5" cy="10" r="1.5" fill="white" opacity="0.9"/>
            <circle cx="17.5" cy="9" r="1.5" fill="white" opacity="0.9"/>
          </svg>
        );
      default: return null;
    }
  };

  const getFolderAnimClass = (folderId: string) => openFolder === folderId ? folderAnimState : '';
  const getGalleryAnimClass = (galleryId: string) => openGallery === galleryId ? galleryAnimState : '';
  const getExpandedAnimClass = (itemId: string) => expandedItem === itemId ? expandedAnimState : '';

  const renderFolderPreview = (folderId: string) => {
    if (folderId === 'entertainment') {
      return (
        <div className="folder-preview folder-preview-3">
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
        <div className="folder-preview folder-preview-3">
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

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - 3D ICONS SHOWCASE APP
  // Orbital gallery - icons presented in floating glass orbs with ambient glow
  // Different from Geometry (which uses 2x2 circular frames)
  // This uses horizontal scrolling showcase with featured center piece
  // ═══════════════════════════════════════════════════════════════════════════════
  const [icons3DShowReady, setIcons3DShowReady] = useState(false);
  const [icons3DFeaturedIndex, setIcons3DFeaturedIndex] = useState(0);

  // Reset and trigger animation when 3dicons-showcase becomes active
  useEffect(() => {
    if (expandedItem === '3dicons-showcase' && expandedAnimState === 'active') {
      // Small delay to ensure smooth entrance
      const timer = setTimeout(() => setIcons3DShowReady(true), 50);
      return () => clearTimeout(timer);
    } else if (expandedItem !== '3dicons-showcase') {
      setIcons3DShowReady(false);
    }
  }, [expandedItem, expandedAnimState]);

  const Icons3DShowcase = () => {
    const featuredItem = icons3DItems[icons3DFeaturedIndex];

    return (
      <div className="showcase-app showcase-3d-minimal">
        {/* App Header */}
        <div className={`showcase-app-header ${icons3DShowReady ? 'visible' : ''}`}>
          <span className="showcase-app-title">3D Icons</span>
          <span className="showcase-app-subtitle">Interactive Collection</span>
        </div>

        {/* Featured Icon - White on Black */}
        <div
          className={`showcase-3d-featured ${icons3DShowReady ? 'visible' : ''}`}
          onClick={() => handleOpenSubExpanded(`3d-${featuredItem.id}`)}
        >
          <div className="showcase-3d-featured-frame">
            <div className="showcase-3d-featured-icon">
              {render3DIcon(featuredItem.id, isMobile ? 100 : 130)}
            </div>
          </div>
          <span className="showcase-3d-featured-name">{featuredItem.name}</span>
          <span className="showcase-3d-featured-hint">Tap to explore</span>
        </div>

        {/* Icon Selector - Row of minimal black cards */}
        <div className={`showcase-3d-selector ${icons3DShowReady ? 'visible' : ''}`}>
          {icons3DItems.map((item, index) => (
            <div
              key={item.id}
              className={`showcase-3d-selector-item ${index === icons3DFeaturedIndex ? 'active' : ''}`}
              style={{ ['--delay' as any]: `${index * 0.03}s` }}
              onClick={(e) => {
                e.stopPropagation();
                setIcons3DFeaturedIndex(index);
              }}
            >
              <div className="showcase-3d-selector-card">
                {render3DIcon(item.id, isMobile ? 18 : 24)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - GEOMETRY SHOWCASE APP
  // All 4 sacred geometries presented in prestige gallery style
  // Tap any to expand to full immersive view
  // ═══════════════════════════════════════════════════════════════════════════════
  const [geometryShowReady, setGeometryShowReady] = useState(false);

  // Reset and trigger animation when geometry-showcase becomes active
  useEffect(() => {
    if (expandedItem === 'geometry-showcase' && expandedAnimState === 'active') {
      const timer = setTimeout(() => setGeometryShowReady(true), 50);
      return () => clearTimeout(timer);
    } else if (expandedItem !== 'geometry-showcase') {
      setGeometryShowReady(false);
    }
  }, [expandedItem, expandedAnimState]);

  const GeometryShowcase = () => {
    return (
      <div className="showcase-app showcase-geometry">
        {/* White light effect at top */}
        <div className={`showcase-geometry-light ${geometryShowReady ? 'visible' : ''}`} />

        <div className={`showcase-app-header ${geometryShowReady ? 'visible' : ''}`}>
          <span className="showcase-app-title">Sacred Geometry</span>
          <span className="showcase-app-subtitle">Ancient Patterns</span>
        </div>
        <div className={`showcase-geometry-grid ${geometryShowReady ? 'visible' : ''}`}>
          {geometryItems.map((item, index) => (
            <div
              key={item.id}
              className="showcase-geometry-item"
              style={{ ['--delay' as any]: `${index * 0.1}s` }}
              onClick={() => handleOpenSubExpanded(`geo-${item.id}`)}
            >
              <div className={`showcase-geometry-frame showcase-geo-${item.id}`}>
                <div
                  className="showcase-geometry-glow"
                  style={{ boxShadow: `0 0 40px ${item.color[0]}50, 0 0 60px ${item.color[1]}30` }}
                />
                <div className="showcase-geometry-content">
                  {renderGeometry(item.id)}
                </div>
              </div>
              <span className="showcase-geometry-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - 2D ICONS GALLERY SHOWCASE
  // Elegant white/cream paper cards with large 2D symbols
  // Museum gallery presentation - clean, minimal, sophisticated
  // ═══════════════════════════════════════════════════════════════════════════════
  const Icons2DShowcase = () => {
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setShowIcons(true), 80);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="icons-showcase">
        <div className={`icons-showcase-grid ${showIcons ? 'visible' : ''}`}>
          {staticIconItems.map((item, index) => (
            <div
              key={item.id}
              className="showcase-card"
              style={{ ['--delay' as any]: `${index * 0.04}s` }}
            >
              <div className="showcase-card-inner">
                {item.id === 'trade69-2d' && <Trade69Icon />}
                {item.id === 'megaagent-2d' && <MegaAgentIcon />}
                {item.id === 'octopus-2d' && <OctopusIcon />}
                {item.id === 'overmind-2d' && <OvermindIcon />}
                {item.id === 'website-2d' && <WebsiteIcon />}
                {item.id === 'dashboard-2d' && <DashboardIcon />}
                {item.id === 'api-2d' && <APIIcon />}
                {item.id === 'llm-2d' && <LLMIcon />}
              </div>
              <div className="showcase-card-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        * { -webkit-tap-highlight-color: transparent; }
        
        html {
          scroll-behavior: smooth;
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          -webkit-overflow-scrolling: touch;
        }
        
        body {
          overscroll-behavior: none;
          overscroll-behavior-y: none;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - iPHONE-STYLE SCROLL LOCK                                     */
        /* Lock vertical scroll on main page, preserve horizontal swipe navigation         */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .creative-page {
          /* LOCK vertical scroll - iPhone home screen style */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          -webkit-overflow-scrolling: touch;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          /* Allow horizontal touch for swipe navigation */
          touch-action: pan-x;
        }
        
        .creative-page.overlay-open {
          touch-action: none;
          overflow: hidden;
        }
        
        @supports (-webkit-touch-callout: none) {
          .creative-page {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-y: none;
          }
        }
        
        .transition-bridge {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1500;
          background: radial-gradient(ellipse at center, rgba(20, 20, 20, 0.96) 0%, rgba(10, 10, 10, 0.99) 100%);
          backdrop-filter: blur(60px) saturate(180%);
          -webkit-backdrop-filter: blur(60px) saturate(180%);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: clamp(180px, 30vh, 280px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        
        .transition-bridge.in {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s;
        }
        
        .transition-bridge.hold {
          opacity: 1;
          visibility: visible;
        }
        
        .transition-bridge.out {
          opacity: 0;
          visibility: visible;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s;
        }
        
        .bridge-spinner {
          width: 32px;
          height: 32px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .bridge-spinner::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        
        .bridge-spinner::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.9);
          animation: elegantSpin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        @keyframes elegantSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .transition-bridge.in .bridge-spinner {
          opacity: 0;
          animation: spinnerFadeIn 0.2s ease 0.1s forwards;
        }
        
        .transition-bridge.out .bridge-spinner {
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        
        @keyframes spinnerFadeIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
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
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.1), 0 3px 8px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
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
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 11px 11px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
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
        
        .folder-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
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
          top: 0; left: 0; right: 0; bottom: 0;
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
          top: 0; left: 8%; right: 8%; height: 45%;
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
        
        .gallery-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 2000;
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
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
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
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.15), 0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
          -webkit-tap-highlight-color: transparent;
          overflow: hidden;
        }
        
        .gallery-overlay.active .gallery-container {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.02s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.02s;
        }
        
        .gallery-overlay.exiting .gallery-container {
          opacity: 0;
          transform: translateZ(0) scale(0.9);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 70px);
          gap: 14px;
          touch-action: none;
        }
        
        .gallery-grid.grid-2 {
          grid-template-columns: repeat(2, 80px);
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
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
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
          transition-delay: 0s !important;
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
          width: 80px;
          height: 80px;
          border-radius: 18px;
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
          top: 0; left: 8%; right: 8%; height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 18px 18px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .gallery-card-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          max-width: 76px;
        }
        
        .expanded-view {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
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
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, visibility;
          transform: translateZ(0);
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
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.1)) drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6));
          touch-action: manipulation;
          -webkit-user-select: none;
          user-select: none;
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
        /* STATE OF THE ART - SHOWCASE APPS                                                */
        /* Full app experiences for 3D Icons and Geometry                                  */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .showcase-expanded .expanded-content,
        .showcase-content {
          width: 100%;
          height: 100%;
          max-width: 400px;
          max-height: 500px;
          border-radius: 0;
          filter: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .showcase-expanded .expanded-inner {
          width: 100%;
          height: auto;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* Showcase backgrounds - prevent black flash */
        .showcase-3d-expanded {
          background: #000000;
        }
        
        .showcase-geometry-expanded {
          background: radial-gradient(ellipse at center, #0d0d12 0%, #050507 100%);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - SMOOTH LOADING PULSE                                         */
        /* Elegant loading indicator that fades out when content is ready                  */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .showcase-app {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 8px;
        }
        
        .showcase-app-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, 
                      transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.05s;
        }
        
        .showcase-app-header.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .showcase-app-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 26px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.02em;
        }
        
        .showcase-app-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - 3D ICONS MINIMAL SHOWCASE                                    */
        /* White on black - clean, sophisticated, premium Apple-quality                    */
        /* COMPLETE SCROLL LOCK for perfect mobile experience                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .showcase-3d-expanded {
          touch-action: none;
          overflow: hidden;
        }
        
        .showcase-3d-expanded.active {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
        }
        
        .showcase-3d-minimal {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 16px 8px;
          gap: 20px;
          background: #000000;
          touch-action: none;
          overflow: hidden;
        }
        
        /* Featured Icon - Large center piece */
        .showcase-3d-featured {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          position: relative;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, 
                      transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.1s;
        }
        
        .showcase-3d-featured.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .showcase-3d-featured:active .showcase-3d-featured-frame {
          transform: scale(0.95);
        }
        
        /* Black frame with subtle border */
        .showcase-3d-featured-frame {
          width: 160px;
          height: 160px;
          border-radius: 32px;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: transform 0.3s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        
        .showcase-3d-featured-icon {
          position: relative;
          z-index: 2;
        }
        
        .showcase-3d-featured-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          text-align: center;
          letter-spacing: -0.01em;
        }
        
        .showcase-3d-featured-hint {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.02em;
        }
        
        /* Icon Selector - Bottom row - COMPACT for mobile */
        .showcase-3d-selector {
          display: flex;
          gap: 6px;
          padding: 8px 10px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, 
                      transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.15s;
        }
        
        .showcase-3d-selector.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .showcase-3d-selector-item {
          cursor: pointer;
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.4, 0.64, 1);
          transition-delay: var(--delay, 0s);
        }
        
        .showcase-3d-selector.visible .showcase-3d-selector-item {
          opacity: 1;
          transform: scale(1);
        }
        
        .showcase-3d-selector-item.active {
          transform: scale(1.1);
        }
        
        .showcase-3d-selector-item:active {
          transform: scale(0.9);
        }
        
        /* Compact cards for mobile */
        .showcase-3d-selector-card {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 2px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .showcase-3d-selector-item.active .showcase-3d-selector-card {
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.15),
            0 0 20px rgba(255, 255, 255, 0.1),
            0 4px 16px rgba(0, 0, 0, 0.4);
        }
        
        /* Geometry Showcase Grid - 2x2 */
        .showcase-geometry {
          position: relative;
          padding-top: 30px;
        }
        
        /* White light effect at top - creates exciting entrance */
        .showcase-geometry-light {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 200px;
          background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.8s ease 0.1s;
        }
        
        .showcase-geometry-light.visible {
          opacity: 1;
        }
        
        .showcase-geometry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .showcase-geometry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1);
          transition-delay: var(--delay, 0s);
          will-change: opacity, transform;
        }
        
        .showcase-geometry-grid.visible .showcase-geometry-item {
          opacity: 1;
          transform: translateY(0);
        }
        
        .showcase-geometry-frame {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          transition: transform 0.3s ease;
        }
        
        .showcase-geometry-frame:active {
          transform: scale(0.92);
        }
        
        .showcase-geometry-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.6s ease;
          transition-delay: inherit;
          pointer-events: none;
        }
        
        .showcase-geometry-grid.visible .showcase-geometry-glow {
          opacity: 0.6;
        }
        
        .showcase-geometry-content {
          position: relative;
          z-index: 2;
          transform: scale(0.6);
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.5s ease;
          transition-delay: inherit;
        }
        
        .showcase-geometry-grid.visible .showcase-geometry-content {
          opacity: 1;
        }
        
        /* Unique scales for each geometry in showcase */
        .showcase-geo-metatron .showcase-geometry-content { transform: scale(0.55); }
        .showcase-geo-spiral .showcase-geometry-content { transform: scale(0.6); }
        .showcase-geo-flower .showcase-geometry-content { transform: scale(0.55); }
        .showcase-geo-lemniscate .showcase-geometry-content { transform: scale(0.7); }
        
        .showcase-geometry-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          transition-delay: calc(var(--delay, 0s) + 0.15s);
        }
        
        .showcase-geometry-grid.visible .showcase-geometry-name {
          opacity: 1;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* SUB-EXPANDED VIEWS - Individual item detail views                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .sub-expanded-view {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 4000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        
        .sub-expanded-view.entering { 
          visibility: visible; 
          pointer-events: auto; 
          opacity: 0; 
        }
        .sub-expanded-view.active { 
          visibility: visible; 
          pointer-events: auto; 
          opacity: 1; 
          transition: opacity 0.15s ease; 
        }
        .sub-expanded-view.exiting { 
          visibility: visible; 
          pointer-events: none; 
          opacity: 0; 
          transition: opacity 0.1s ease;
        }
        
        .sub-expanded-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
        }
        
        .sub-expanded-ambient {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0;
          transition: opacity 0.15s ease;
          pointer-events: none;
        }
        
        .sub-expanded-view.active .sub-expanded-ambient {
          opacity: 1;
        }
        
        .sub-expanded-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 20px;
        }
        
        .sub-expanded-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.12s ease, transform 0.15s ease;
        }
        
        .sub-expanded-view.active .sub-expanded-header {
          opacity: 1;
          transform: translateY(0);
        }
        
        .sub-expanded-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 28px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.02em;
        }
        
        .sub-expanded-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        
        .sub-expanded-content {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.12s ease, transform 0.15s ease;
        }
        
        .sub-expanded-view.active .sub-expanded-content {
          opacity: 1;
          transform: scale(1);
        }
        
        .sub-expanded-glow {
          position: absolute;
          top: -30px; left: -30px; right: -30px; bottom: -30px;
          border-radius: 50%;
          opacity: 0.7;
          pointer-events: none;
          animation: subGlowPulse 4s ease-in-out infinite;
        }
        
        @keyframes subGlowPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        /* Floating X button - INSTANT response */
        .sub-expanded-close {
          width: 44px;
          height: 44px;
          border-radius: 0;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.6;
          transform: scale(1);
          transition: opacity 0.1s ease, transform 0.1s ease;
          z-index: 100;
          margin-top: 8px;
        }
        
        .sub-expanded-view.active .sub-expanded-close {
          opacity: 0.6;
          transform: scale(1);
        }
        
        .sub-expanded-close:hover,
        .sub-expanded-close:active {
          opacity: 1;
          transform: scale(1.1);
        }
        
        .sub-expanded-close svg {
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - 3D ICONS SUB-EXPANDED (BLACK/WHITE)                          */
        /* Pure black background with subtle white glow                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .sub-expanded-bg-black {
          background: #000000 !important;
          backdrop-filter: none !important;
        }
        
        .sub-expanded-3d .sub-expanded-inner {
          background: transparent;
        }
        
        .sub-expanded-content-3d {
          background: #0a0a0a;
          border-radius: 28px;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        .sub-expanded-glow-white {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease 0.2s;
        }
        
        .sub-expanded-view.active .sub-expanded-glow-white {
          opacity: 1;
        }
        
        /* Geometry full expanded - bigger and unique */
        .geometry-full-content {
          width: 300px;
          height: 300px;
        }
        
        .geometry-full-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.6s ease 0.2s;
          pointer-events: none;
        }
        
        .sub-expanded-view.active .geometry-full-glow {
          opacity: 1;
          animation: geometryFullGlow 5s ease-in-out infinite;
        }
        
        @keyframes geometryFullGlow {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.03); filter: brightness(1.15); }
        }
        
        /* Scale up geometries in full view */
        .geometry-full-content > div,
        .geometry-full-content > svg {
          transform: scale(1.4);
        }
        
        .geometry-full-metatron > div,
        .geometry-full-metatron > svg { transform: scale(1.5); filter: drop-shadow(0 0 20px rgba(138, 92, 246, 0.4)); }
        
        .geometry-full-spiral > div,
        .geometry-full-spiral > svg { transform: scale(1.6); filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.35)); }
        
        .geometry-full-flower > div,
        .geometry-full-flower > svg { transform: scale(1.5); filter: drop-shadow(0 0 30px rgba(96, 165, 250, 0.4)); }
        
        .geometry-full-lemniscate > div,
        .geometry-full-lemniscate > svg { transform: scale(1.8); filter: drop-shadow(0 0 25px rgba(74, 222, 128, 0.4)); }
        
        @media (min-width: 600px) {
          .showcase-app-title { font-size: 30px; }
          .showcase-3d-featured-frame { width: 190px; height: 190px; border-radius: 38px; }
          .showcase-3d-featured-name { font-size: 26px; }
          .showcase-3d-selector { gap: 8px; padding: 10px 14px; border-radius: 16px; }
          .showcase-3d-selector-card { width: 44px; height: 44px; border-radius: 11px; }
          .showcase-geometry-grid { gap: 28px; }
          .showcase-geometry-frame { width: 140px; height: 140px; }
          .showcase-geometry-name { font-size: 14px; }
          .sub-expanded-title { font-size: 32px; }
          .sub-expanded-content { width: 320px; height: 320px; }
          .sub-expanded-content-3d { border-radius: 32px; }
          .geometry-full-content { width: 360px; height: 360px; }
          
          .geometry-full-metatron > div,
          .geometry-full-metatron > svg { transform: scale(1.7); }
          .geometry-full-spiral > div,
          .geometry-full-spiral > svg { transform: scale(1.8); }
          .geometry-full-flower > div,
          .geometry-full-flower > svg { transform: scale(1.7); }
          .geometry-full-lemniscate > div,
          .geometry-full-lemniscate > svg { transform: scale(2); }
        }
        
        @media (min-width: 900px) {
          .showcase-app-title { font-size: 34px; }
          .showcase-3d-featured-frame { width: 220px; height: 220px; border-radius: 44px; }
          .showcase-3d-featured-name { font-size: 30px; }
          .showcase-3d-selector { gap: 10px; padding: 12px 18px; border-radius: 18px; }
          .showcase-3d-selector-card { width: 52px; height: 52px; border-radius: 13px; }
          .showcase-geometry-grid { gap: 36px; }
          .showcase-geometry-frame { width: 160px; height: 160px; }
          .showcase-geometry-name { font-size: 15px; }
          .sub-expanded-title { font-size: 36px; }
          .sub-expanded-content { width: 380px; height: 380px; }
          .sub-expanded-content-3d { border-radius: 36px; }
          .geometry-full-content { width: 420px; height: 420px; }
          
          .geometry-full-metatron > div,
          .geometry-full-metatron > svg { transform: scale(1.9); }
          .geometry-full-spiral > div,
          .geometry-full-spiral > svg { transform: scale(2); }
          .geometry-full-flower > div,
          .geometry-full-flower > svg { transform: scale(1.9); }
          .geometry-full-lemniscate > div,
          .geometry-full-lemniscate > svg { transform: scale(2.2); }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - 2D ICONS WHITE CARD GALLERY                                  */
        /* Elegant cream/white paper cards with large symbols                              */
        /* Museum-quality presentation - sophisticated and clean                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .icons-showcase {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 12px;
        }
        
        .icons-showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 10px;
          position: relative;
        }
        
        /* Elegant white/cream paper card */
        .showcase-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          opacity: 0;
          transform: translateY(12px) scale(0.9);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1);
          transition-delay: var(--delay, 0s);
        }
        
        .icons-showcase-grid.visible .showcase-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .showcase-card-inner {
          width: 54px;
          height: 68px;
          border-radius: 10px;
          background: linear-gradient(168deg, 
            #ffffff 0%, 
            #f8f7f4 30%,
            #f2f0eb 70%,
            #eae8e0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.08),
            0 4px 12px rgba(0, 0, 0, 0.15),
            0 8px 24px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        
        .showcase-card-inner:active {
          transform: scale(0.95);
        }
        
        /* Subtle paper highlight */
        .showcase-card-inner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%);
          pointer-events: none;
          z-index: 1;
        }
        
        /* Subtle edge definition */
        .showcase-card-inner::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 10px;
          box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.06);
          pointer-events: none;
          z-index: 2;
        }
        
        /* Large icon inside - black/dark gray */
        .showcase-card-inner svg {
          width: 36px;
          height: 36px;
          position: relative;
          z-index: 3;
          filter: brightness(0) saturate(100%);
          opacity: 0.7;
        }
        
        /* Card label */
        .showcase-card-label {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 9px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
          letter-spacing: 0.02em;
          text-align: center;
          opacity: 0;
          transform: translateY(3px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          transition-delay: calc(var(--delay, 0s) + 0.15s);
        }
        
        .icons-showcase-grid.visible .showcase-card-label {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (min-width: 600px) {
          .creative-grid { gap: 48px 44px; max-width: 400px; }
          .folder-icon { width: 145px; height: 145px; border-radius: 32px; }
          .folder-preview { width: 120px; height: 120px; gap: 7px; }
          .folder-mini-icon { width: 56px; height: 56px; border-radius: 13px; }
          .folder-name { font-size: 13px; }
          .folder-container { padding: 28px; }
          .folder-cards-grid { gap: 20px; }
          .folder-card-icon { width: 80px; height: 80px; border-radius: 18px; }
          .gallery-container { padding: 28px; border-radius: 30px; }
          .gallery-grid { grid-template-columns: repeat(4, 80px); gap: 16px; }
          .gallery-grid.grid-2 { grid-template-columns: repeat(2, 90px); gap: 20px; }
          .gallery-card-icon { width: 72px; height: 72px; border-radius: 18px; }
          .gallery-card-name { font-size: 12px; max-width: 80px; }
          .expanded-content { width: 340px; height: 340px; border-radius: 26px; }
          .icons-showcase-grid { gap: 14px; }
          .showcase-card-inner { width: 64px; height: 80px; border-radius: 12px; }
          .showcase-card-inner svg { width: 42px; height: 42px; }
          .showcase-card-label { font-size: 10px; }
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
          .gallery-container { padding: 32px; }
          .gallery-grid { grid-template-columns: repeat(4, 90px); gap: 20px; }
          .gallery-grid.grid-2 { grid-template-columns: repeat(2, 100px); gap: 24px; }
          .gallery-card-icon { width: 82px; height: 82px; border-radius: 20px; }
          .gallery-card-name { font-size: 13px; max-width: 90px; }
          .icons-showcase-grid { gap: 18px; }
          .showcase-card-inner { width: 72px; height: 90px; border-radius: 14px; }
          .showcase-card-inner svg { width: 48px; height: 48px; }
          .showcase-card-label { font-size: 11px; }
        }
        
        canvas { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - INTERACTIVE 3D EXPERIENCES                                   */
        /* IRON LOCK - NO SCROLL IN ANY DIRECTION (up/down/left/right)                     */
        /* Canvas stays FULLY INTERACTIVE for Three.js                                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .interactive-experience {
          background: radial-gradient(ellipse at center, #0d0d10 0%, #050507 100%);
          position: fixed !important;
          top: 0 !important; 
          left: 0 !important; 
          right: 0 !important; 
          bottom: 0 !important;
          overflow: hidden !important;
          overscroll-behavior: none !important;
          touch-action: none !important;
          -webkit-overflow-scrolling: none !important;
        }
        
        .interactive-ambient {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0;
          transition: opacity 0.8s ease 0.2s;
          pointer-events: none;
        }
        
        .interactive-experience.active .interactive-ambient {
          opacity: 1;
        }
        
        .interactive-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 16px;
          padding-bottom: 60px;
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 2;
          overflow: hidden !important;
          touch-action: none !important;
        }
        
        .interactive-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 2px;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.4s ease 0.15s, transform 0.5s ease 0.15s;
          pointer-events: none;
        }
        
        .interactive-experience.active .interactive-header {
          opacity: 1;
          transform: translateY(0);
        }
        
        .interactive-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.01em;
        }
        
        .interactive-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        
        /* The 3D canvas container - BIGGER and INTERACTIVE */
        .interactive-content {
          width: 320px !important;
          height: 320px !important;
          border-radius: 24px;
          overflow: hidden !important;
          position: relative;
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.5s ease 0.2s, transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s;
        }
        
        .interactive-experience.active .interactive-content {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Canvas itself - fully interactive for Three.js */
        .interactive-content canvas {
          touch-action: manipulation !important;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
        
        .interactive-close {
          margin-top: 16px !important;
          pointer-events: auto;
        }
        
        @media (min-width: 600px) {
          .interactive-content {
            width: 380px !important;
            height: 380px !important;
          }
        }
        
        @media (min-width: 900px) {
          .interactive-content {
            width: 440px !important;
            height: 440px !important;
          }
        }
        
        @media (min-width: 600px) {
          .interactive-title { font-size: 26px; }
          .interactive-content { width: 340px !important; height: 340px !important; }
        }
        
        @media (min-width: 900px) {
          .interactive-title { font-size: 30px; }
          .interactive-content { width: 400px !important; height: 400px !important; }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - 3D ICONS APP EXPERIENCE                                      */
        /* Each icon presented as premium app with ambient lighting                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .app-ambient-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0;
          transition: opacity 0.8s ease 0.2s;
          pointer-events: none;
        }
        
        .expanded-view.active .app-ambient-bg {
          opacity: 1;
        }
        
        .app-experience {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 20px;
          position: relative;
          z-index: 2;
        }
        
        .app-header {
          text-align: center;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.4s ease 0.15s, transform 0.5s ease 0.15s;
        }
        
        .expanded-view.active .app-header {
          opacity: 1;
          transform: translateY(0);
        }
        
        .app-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        }
        
        .app-3d-container {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .app-3d-glow {
          position: absolute;
          top: -30px; left: -30px; right: -30px; bottom: -30px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.6s ease 0.3s;
          pointer-events: none;
          animation: appGlowPulse 4s ease-in-out infinite;
          animation-play-state: paused;
        }
        
        .expanded-view.active .app-3d-glow {
          opacity: 0.8;
          animation-play-state: running;
        }
        
        @keyframes appGlowPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        
        .app-3d-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.5s ease 0.2s, transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s;
        }
        
        .expanded-view.active .app-3d-content {
          opacity: 1;
          transform: scale(1);
        }
        
        .app-footer {
          text-align: center;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease 0.25s, transform 0.5s ease 0.25s;
        }
        
        .expanded-view.active .app-footer {
          opacity: 1;
          transform: translateY(0);
        }
        
        .app-category {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        
        .app-close {
          margin-top: 20px !important;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - GEOMETRY PRESTIGE GALLERY                                    */
        /* Sacred geometry with unique lighting, bigger display, museum feel               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .geometry-view {
          background: radial-gradient(ellipse at center, #0f0f12 0%, #080808 100%);
        }
        
        .geometry-ambient {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0;
          transition: opacity 1s ease 0.3s;
          pointer-events: none;
        }
        
        .expanded-view.active .geometry-ambient {
          opacity: 1;
        }
        
        .geometry-experience {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 16px;
          position: relative;
          z-index: 2;
        }
        
        .geometry-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.4s ease 0.15s, transform 0.5s ease 0.15s;
        }
        
        .expanded-view.active .geometry-header {
          opacity: 1;
          transform: translateY(0);
        }
        
        .geometry-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 26px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 30px rgba(0, 0, 0, 0.5);
        }
        
        .geometry-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        
        .geometry-frame {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        
        .geometry-inner-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.8s ease 0.3s;
          pointer-events: none;
        }
        
        .expanded-view.active .geometry-inner-glow {
          opacity: 1;
          animation: geometryGlow 6s ease-in-out infinite;
        }
        
        @keyframes geometryGlow {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        
        .geometry-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.7) rotate(-10deg);
          transition: opacity 0.6s ease 0.2s, transform 0.8s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s;
        }
        
        .expanded-view.active .geometry-content {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
        
        /* Scale up the actual geometry components */
        .geometry-content > div,
        .geometry-content > svg {
          transform: scale(1.4);
        }
        
        .geometry-close {
          margin-top: 16px !important;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* UNIQUE GEOMETRY FRAMES - Each has different character                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        /* Metatron - Sacred circles, purple mystical */
        .geometry-frame-metatron {
          background: radial-gradient(circle, rgba(90, 60, 140, 0.08) 0%, transparent 70%);
        }
        
        .geometry-frame-metatron .geometry-content > div,
        .geometry-frame-metatron .geometry-content > svg {
          transform: scale(1.5);
          filter: drop-shadow(0 0 20px rgba(138, 92, 246, 0.4));
        }
        
        /* Spiral - Golden ratio, warm amber */
        .geometry-frame-spiral {
          background: radial-gradient(circle, rgba(140, 90, 60, 0.08) 0%, transparent 70%);
        }
        
        .geometry-frame-spiral .geometry-content > div,
        .geometry-frame-spiral .geometry-content > svg {
          transform: scale(1.6);
          filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.35));
        }
        
        /* Flower of Life - Harmony, soft blue-white */
        .geometry-frame-flower {
          background: radial-gradient(circle, rgba(60, 100, 140, 0.1) 0%, transparent 70%);
        }
        
        .geometry-frame-flower .geometry-content > div,
        .geometry-frame-flower .geometry-content > svg {
          transform: scale(1.5);
          filter: drop-shadow(0 0 30px rgba(96, 165, 250, 0.4));
        }
        
        /* Lemniscate/Infinity - Eternal, green energy */
        .geometry-frame-lemniscate {
          background: radial-gradient(circle, rgba(60, 140, 80, 0.08) 0%, transparent 70%);
        }
        
        .geometry-frame-lemniscate .geometry-content > div,
        .geometry-frame-lemniscate .geometry-content > svg {
          transform: scale(1.8);
          filter: drop-shadow(0 0 25px rgba(74, 222, 128, 0.4));
        }
        
        /* Desktop enhancements */
        @media (min-width: 600px) {
          .app-title { font-size: 28px; }
          .app-3d-container { width: 320px; height: 320px; }
          .geometry-title { font-size: 30px; }
          .geometry-frame { width: 360px; height: 360px; }
          
          .geometry-frame-metatron .geometry-content > div,
          .geometry-frame-metatron .geometry-content > svg { transform: scale(1.7); }
          
          .geometry-frame-spiral .geometry-content > div,
          .geometry-frame-spiral .geometry-content > svg { transform: scale(1.8); }
          
          .geometry-frame-flower .geometry-content > div,
          .geometry-frame-flower .geometry-content > svg { transform: scale(1.7); }
          
          .geometry-frame-lemniscate .geometry-content > div,
          .geometry-frame-lemniscate .geometry-content > svg { transform: scale(2); }
        }
        
        @media (min-width: 900px) {
          .app-title { font-size: 32px; }
          .app-3d-container { width: 380px; height: 380px; }
          .geometry-title { font-size: 34px; }
          .geometry-frame { width: 420px; height: 420px; }
          
          .geometry-frame-metatron .geometry-content > div,
          .geometry-frame-metatron .geometry-content > svg { transform: scale(1.9); }
          
          .geometry-frame-spiral .geometry-content > div,
          .geometry-frame-spiral .geometry-content > svg { transform: scale(2); }
          
          .geometry-frame-flower .geometry-content > div,
          .geometry-frame-flower .geometry-content > svg { transform: scale(1.9); }
          
          .geometry-frame-lemniscate .geometry-content > div,
          .geometry-frame-lemniscate .geometry-content > svg { transform: scale(2.2); }
        }
        
        .expanded-content > div {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }
        
        .expanded-view canvas,
        .expanded-content canvas {
          will-change: transform;
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          image-rendering: optimizeQuality;
          -webkit-font-smoothing: antialiased;
        }
        
        @supports (-webkit-touch-callout: none) {
          .expanded-content {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          .expanded-content canvas {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
      `}</style>

      <div className={`creative-page ${folderAnimState !== 'idle' || galleryAnimState !== 'idle' || expandedAnimState !== 'idle' || bridgePhase !== 'idle' ? 'overlay-open' : ''}`} style={{
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

      <div className={`transition-bridge ${bridgePhase}`}>
        <div className="bridge-spinner" />
      </div>

      {/* ENTERTAINMENT FOLDER */}
      <div className={`folder-overlay ${getFolderAnimClass('entertainment')}`}>
        <div className="folder-overlay-bg" onClick={handleCloseFolder} />
        <div className="folder-container">
          <div className="folder-cards-grid">
            {/* 3D Icons - Opens directly to showcase app */}
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('3dicons-showcase')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #1a5040, #0d2820)' }}>
                {render3DIconMini('trade69', folderIconSize)}
              </div>
              <span className="folder-card-name">3D Icons</span>
            </div>
            {/* Geometry - Opens directly to showcase app */}
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('geometry-showcase')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #3a2855, #1e1430)' }}>
                {renderGeometryMini('metatron', folderIconSize)}
              </div>
              <span className="folder-card-name">Geometry</span>
            </div>
            {/* 2D Icons - Opens directly to showcase */}
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('icons-showcase')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #3d4a8f, #1e2550)' }}>
                {render2DIconMini('megaagent-2d', folderIconSize)}
              </div>
              <span className="folder-card-name">Icons</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D INTERACTIVE FOLDER */}
      <div className={`folder-overlay ${getFolderAnimClass('interactive')}`}>
        <div className="folder-overlay-bg" onClick={handleCloseFolder} />
        <div className="folder-container">
          <div className="folder-cards-grid">
            {interactiveApps.map(app => (
              <div key={app.id} className="folder-card" onClick={() => handleOpenExpandedFromFolder(`exp-${app.id}`)}>
                <div className="folder-card-icon" style={{ background: `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})` }}>
                  {renderInteractiveMini(app.id, folderIconSize)}
                </div>
                <span className="folder-card-name">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* STATE OF THE ART - 3D ICONS SHOWCASE APP                                        */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`expanded-view showcase-expanded showcase-3d-expanded ${getExpandedAnimClass('3dicons-showcase')}`}>
        <div className="expanded-inner showcase-inner">
          <div className="expanded-content showcase-content">
            {expandedItem === '3dicons-showcase' && <Icons3DShowcase />}
          </div>
          <button className="expanded-close" onClick={handleCloseExpanded}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* STATE OF THE ART - GEOMETRY SHOWCASE APP                                        */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      <div className={`expanded-view showcase-expanded showcase-geometry-expanded ${getExpandedAnimClass('geometry-showcase')}`}>
        <div className="expanded-inner showcase-inner">
          <div className="expanded-content showcase-content">
            {expandedItem === 'geometry-showcase' && <GeometryShowcase />}
          </div>
          <button className="expanded-close" onClick={handleCloseExpanded}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* SUB-EXPANDED VIEWS - Individual 3D Icons (triggered from showcase)              */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {icons3DItems.map(item => (
        <div
          key={item.id}
          className={`sub-expanded-view sub-expanded-3d ${subExpandedItem === `3d-${item.id}` ? subExpandedAnimState : ''}`}
        >
          <div className="sub-expanded-bg sub-expanded-bg-black" onClick={handleCloseSubExpanded} />
          <div className="sub-expanded-inner">
            <div className="sub-expanded-header">
              <span className="sub-expanded-title">{item.name}</span>
            </div>
            <div className="sub-expanded-content sub-expanded-content-3d">
              <div className="sub-expanded-glow-white" />
              {subExpandedItem === `3d-${item.id}` && render3DIcon(item.id, isMobile ? 180 : 240)}
            </div>
            <button className="sub-expanded-close" onClick={handleCloseSubExpanded}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* SUB-EXPANDED VIEWS - Individual Geometries (triggered from showcase)            */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {geometryItems.map(item => (
        <div
          key={item.id}
          className={`sub-expanded-view geometry-sub ${subExpandedItem === `geo-${item.id}` ? subExpandedAnimState : ''}`}
        >
          <div className="sub-expanded-bg" onClick={handleCloseSubExpanded} />
          <div
            className="sub-expanded-ambient geometry-ambient-full"
            style={{
              background: `
                radial-gradient(ellipse at 50% 40%, ${item.color[0]}40 0%, transparent 50%),
                radial-gradient(ellipse at 30% 60%, ${item.color[1]}30 0%, transparent 45%),
                radial-gradient(ellipse at 70% 60%, ${item.color[0]}25 0%, transparent 45%)
              `
            }}
          />
          <div className="sub-expanded-inner">
            <div className="sub-expanded-header">
              <span className="sub-expanded-title">{item.name}</span>
              <span className="sub-expanded-subtitle">Sacred Geometry</span>
            </div>
            <div className={`sub-expanded-content geometry-full-content geometry-full-${item.id}`}>
              <div className="geometry-full-glow" style={{ boxShadow: `0 0 80px ${item.color[0]}40, 0 0 120px ${item.color[1]}30` }} />
              {subExpandedItem === `geo-${item.id}` && renderGeometry(item.id)}
            </div>
            <button className="sub-expanded-close" onClick={handleCloseSubExpanded}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ))}

      {/* STATE OF THE ART - 2D ICONS SHOWCASE - All 8 icons beautifully presented */}
      <div className={`expanded-view ${getExpandedAnimClass('icons-showcase')}`}>
        <div className="expanded-inner">
          <div className="expanded-content">
            {expandedItem === 'icons-showcase' && <Icons2DShowcase />}
          </div>
          <button className="expanded-close" onClick={handleCloseExpanded}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* EXPANDED - 3D Interactive Experiences */}
      {/* COMPLETE SCROLL LOCK - No scroll in any direction */}
      {interactiveApps.map(app => (
        <div
          key={app.id}
          className={`expanded-view interactive-experience ${getExpandedAnimClass(`exp-${app.id}`)}`}
        >
          <div className="interactive-ambient" style={{ background: `radial-gradient(ellipse at 50% 40%, ${app.color[0]}30 0%, transparent 60%)` }} />
          <div className="expanded-inner interactive-inner">
            <div className="interactive-header">
              <span className="interactive-title">{app.name}</span>
              <span className="interactive-subtitle">Interactive 3D</span>
            </div>
            <div
              className="expanded-content interactive-content"
              style={{
                touchAction: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              {expandedItem === `exp-${app.id}` && renderExperience(app.id)}
            </div>
            <button className="expanded-close interactive-close" onClick={handleCloseExpanded}>
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