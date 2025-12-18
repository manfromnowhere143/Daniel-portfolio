"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
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

const mainFolders = [
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'interactive', name: '3D Interactive' },
];

const entertainmentApps = [
  { id: '3dicons', name: '3D Icons', image: '/images/3diconapp2.png' },
  { id: 'geometry', name: 'Geometry', image: '/images/geometryapp2.png' },
  { id: 'icons', name: 'Icons', image: null },
];

const interactiveApps = [
  { id: 'sphere', name: 'Sphere', image: '/images/sperhaapp2.png' },
  { id: 'manifold', name: 'Manifold', image: '/images/mainfoldapp2.png' },
  { id: 'architecture', name: 'Architecture', image: null },
  { id: 'metatronai', name: 'MetatronAI', image: null, link: 'https://metatron-genesis369.vercel.app' },
];

const icons3DItems = [
  { id: 'trade69', name: 'Trade69' },
  { id: 'megaagent', name: 'MegaAgent' },
  { id: 'octopus', name: 'Octopus' },
  { id: 'overmind', name: 'Overmind' },
  { id: 'website', name: 'Web Apps' },
  { id: 'dashboard', name: 'Dashboards' },
  { id: 'api', name: 'API' },
  { id: 'llm', name: 'LLM' },
];

const geometryItems = [
  { id: 'metatron', name: 'Metatron' },
  { id: 'spiral', name: 'Spiral' },
  { id: 'flower', name: 'Flower' },
  { id: 'lemniscate', name: 'Infinity' },
];

const staticIconItems = [
  { id: 'trade69-2d', name: 'Trade69' },
  { id: 'megaagent-2d', name: 'MegaAgent' },
  { id: 'octopus-2d', name: 'Octopus' },
  { id: 'overmind-2d', name: 'Overmind' },
  { id: 'website-2d', name: 'Web' },
  { id: 'dashboard-2d', name: 'Dashboard' },
  { id: 'api-2d', name: 'API' },
  { id: 'llm-2d', name: 'LLM' },
];

type AnimationState = 'idle' | 'entering' | 'active' | 'exiting';

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
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [folderAnimState, setFolderAnimState] = useState<AnimationState>('idle');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedAnimState, setExpandedAnimState] = useState<AnimationState>('idle');
  const [subExpandedItem, setSubExpandedItem] = useState<string | null>(null);
  const [subExpandedAnimState, setSubExpandedAnimState] = useState<AnimationState>('idle');
  const [bridgePhase, setBridgePhase] = useState<'idle' | 'in' | 'hold' | 'out'>('idle');
  const [icons3DShowReady, setIcons3DShowReady] = useState(false);
  const [geometryShowReady, setGeometryShowReady] = useState(false);
  const [icons2DShowReady, setIcons2DShowReady] = useState(false);
  const [icons3DFeaturedIndex, setIcons3DFeaturedIndex] = useState(0);

  const folderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const expandedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';
    return () => {
      document.documentElement.style.overscrollBehavior = '';
      document.body.style.overscrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (folderTimeoutRef.current) clearTimeout(folderTimeoutRef.current);
      if (expandedTimeoutRef.current) clearTimeout(expandedTimeoutRef.current);
      restoreScroll();
    };
  }, []);

  useEffect(() => {
    const isInteractive = expandedItem?.startsWith('exp-');
    if (isInteractive && expandedAnimState === 'active') {
      const preventAllMove = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'CANVAS') return;
        e.preventDefault();
        e.stopPropagation();
      };
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('touchmove', preventAllMove, { passive: false, capture: true });
      return () => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.documentElement.style.overflow = '';
        document.removeEventListener('touchmove', preventAllMove, { capture: true } as any);
      };
    }
  }, [expandedItem, expandedAnimState]);

  useEffect(() => {
    const isOpen = folderAnimState !== 'idle' || expandedAnimState !== 'idle' || bridgePhase !== 'idle';
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      restoreScroll();
    }
  }, [folderAnimState, expandedAnimState, bridgePhase]);

  useEffect(() => {
    if (expandedItem === '3dicons-showcase' && expandedAnimState === 'active') {
      const timer = setTimeout(() => setIcons3DShowReady(true), 380);
      return () => clearTimeout(timer);
    } else if (expandedItem !== '3dicons-showcase') {
      setIcons3DShowReady(false);
    }
  }, [expandedItem, expandedAnimState]);

  useEffect(() => {
    if (expandedItem === 'geometry-showcase' && expandedAnimState === 'active') {
      const timer = setTimeout(() => setGeometryShowReady(true), 50);
      return () => clearTimeout(timer);
    } else if (expandedItem !== 'geometry-showcase') {
      setGeometryShowReady(false);
    }
  }, [expandedItem, expandedAnimState]);

  useEffect(() => {
    if (expandedItem === 'icons-showcase' && expandedAnimState === 'active') {
      const timer = setTimeout(() => setIcons2DShowReady(true), 50);
      return () => clearTimeout(timer);
    } else if (expandedItem !== 'icons-showcase') {
      setIcons2DShowReady(false);
    }
  }, [expandedItem, expandedAnimState]);

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

  const handleOpenExpandedFromFolder = useCallback((itemId: string) => {
    if (folderAnimState !== 'active') return;
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
            // Keep bridge visible longer - wait for content to mount and render
            // This prevents the flash between spinner and content
            setTimeout(() => {
              setBridgePhase('out');
              setTimeout(() => setBridgePhase('idle'), 400);
            }, 150);
          });
        });
      }, 180);
    }, 120);
  }, [folderAnimState]);

  const handleCloseExpanded = useCallback(() => {
    if (expandedAnimState !== 'active') return;
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
    }, 100);
  }, [subExpandedAnimState]);

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

  const render3DIconMini = (size: number = miniIconSize) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" opacity="0.95"/>
      <circle cx="5" cy="17" r="3" stroke="white" strokeWidth="1.8" opacity="0.8"/>
      <circle cx="19" cy="17" r="3" stroke="white" strokeWidth="1.8" opacity="0.8"/>
    </svg>
  );

  // STATE OF THE ART - Dodecahedron Icon for MetatronAI (White Lighting)
  const renderDodecahedronIcon = (size: number = miniIconSize) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Outer dodecahedron shell */}
      <path
        d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        opacity="0.85"
      />
      {/* Inner pentagon */}
      <path
        d="M8 9L16 9L18 14L12 18L6 14L8 9Z"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Vertex connections */}
      <path d="M12 2V9M4 7L8 9M20 7L16 9M4 17L6 14M20 17L18 14M12 22V18" stroke="white" strokeWidth="0.8" opacity="0.35"/>
      {/* Center sacred point */}
      <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
      <circle cx="12" cy="12" r="1" fill="white" opacity="1"/>
    </svg>
  );

  // Full size Dodecahedron Icon - Premium White Design
  const renderDodecahedronIconLarge = (size: number = folderIconSize) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        {/* Subtle white glow */}
        <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        {/* Radial fade for depth */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1"/>
          <stop offset="70%" stopColor="white" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Outer dodecahedron - 12-sided sacred geometry */}
      <path
        d="M24 4L40 14V34L24 44L8 34V14L24 4Z"
        stroke="white"
        strokeWidth="1.8"
        fill="none"
        filter="url(#whiteGlow)"
        opacity="0.9"
      />

      {/* Secondary inner shell */}
      <path
        d="M24 9L36 16V32L24 39L12 32V16L24 9Z"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
        opacity="0.45"
      />

      {/* Vertex ray connections - sacred lines */}
      <g stroke="white" strokeWidth="0.8" opacity="0.3">
        <path d="M24 4V16"/>
        <path d="M40 14L30 18"/>
        <path d="M40 34L30 30"/>
        <path d="M24 44V32"/>
        <path d="M8 34L18 30"/>
        <path d="M8 14L18 18"/>
      </g>

      {/* Central pentagon - heart of the dodecahedron */}
      <path
        d="M18 18L30 18L34 28L24 34L14 28L18 18Z"
        stroke="white"
        strokeWidth="1.3"
        fill="none"
        opacity="0.65"
      />

      {/* Inner star pattern */}
      <g stroke="white" strokeWidth="0.6" opacity="0.25">
        <path d="M24 16L30 18L28 26L24 28L20 26L18 18L24 16Z"/>
        <path d="M24 24L30 26L24 32L18 26L24 24Z"/>
      </g>

      {/* Sacred center - triple ring */}
      <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="0.8" fill="none" opacity="0.35"/>
      <circle cx="24" cy="24" r="3.5" fill="white" opacity="0.25"/>
      <circle cx="24" cy="24" r="2.2" fill="white" opacity="0.7"/>
      <circle cx="24" cy="24" r="1.2" fill="white" opacity="1"/>

      {/* Corner vertices - 6 points */}
      <g fill="white" opacity="0.6">
        <circle cx="24" cy="6" r="1"/>
        <circle cx="39" cy="15" r="1"/>
        <circle cx="39" cy="33" r="1"/>
        <circle cx="24" cy="42" r="1"/>
        <circle cx="9" cy="33" r="1"/>
        <circle cx="9" cy="15" r="1"/>
      </g>
    </svg>
  );

  const getFolderAnimClass = (folderId: string) => openFolder === folderId ? folderAnimState : '';
  const getExpandedAnimClass = (itemId: string) => expandedItem === itemId ? expandedAnimState : '';

  const renderFolderPreview = (folderId: string) => {
    if (folderId === 'entertainment') {
      // 3 apps in 2x2 grid - one empty spot
      return (
        <div className="folder-preview folder-preview-4">
          <div className="folder-mini-icon folder-mini-png">
            <Image src="/images/3diconapp2.png" alt="3D Icons" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="folder-mini-icon folder-mini-png">
            <Image src="/images/geometryapp2.png" alt="Geometry" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #1a1a1f, #0d0d10)' }}>
            {render3DIconMini(miniIconSize)}
          </div>
          <div className="folder-mini-icon folder-mini-empty" />
        </div>
      );
    } else {
      // Interactive - 4 apps in 2x2 grid
      return (
        <div className="folder-preview folder-preview-4">
          <div className="folder-mini-icon folder-mini-png">
            <Image src="/images/sperhaapp2.png" alt="Sphere" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="folder-mini-icon folder-mini-png">
            <Image src="/images/mainfoldapp2.png" alt="Manifold" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #0f1215, #070809)' }}>
            {renderInteractiveMini('architecture', miniIconSize)}
          </div>
          <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #151518, #0a0a0c)' }}>
            {renderDodecahedronIcon(miniIconSize)}
          </div>
        </div>
      );
    }
  };

  const Icons3DShowcase = () => {
    const featuredItem = icons3DItems[icons3DFeaturedIndex];
    return (
      <div className="showcase-app showcase-3d-minimal">
        <div className={`showcase-3d-featured ${icons3DShowReady ? 'visible' : ''}`} onClick={() => handleOpenSubExpanded(`3d-${featuredItem.id}`)}>
          <div className="showcase-3d-featured-frame">
            <div className="showcase-3d-featured-icon">
              {render3DIcon(featuredItem.id, isMobile ? 140 : 185)}
            </div>
          </div>
        </div>
        <div className={`showcase-3d-selector ${icons3DShowReady ? 'visible' : ''}`}>
          {icons3DItems.map((item, index) => (
            <div key={item.id} className={`showcase-3d-selector-item ${index === icons3DFeaturedIndex ? 'active' : ''}`} style={{ ['--delay' as any]: `${0.08 + index * 0.03}s` }} onClick={(e) => { e.stopPropagation(); setIcons3DFeaturedIndex(index); }}>
              <div className="showcase-3d-selector-card">
                {render3DIcon(item.id, isMobile ? 18 : 24)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const GeometryShowcase = () => (
    <div className="showcase-app showcase-geometry">
      <div className={`showcase-geometry-light ${geometryShowReady ? 'visible' : ''}`} />
      <div className={`showcase-geometry-grid ${geometryShowReady ? 'visible' : ''}`}>
        {geometryItems.map((item, index) => (
          <div key={item.id} className="showcase-geometry-item" style={{ ['--delay' as any]: `${index * 0.1}s` }} onClick={() => handleOpenSubExpanded(`geo-${item.id}`)}>
            <div className={`showcase-geometry-frame showcase-geo-${item.id}`}>
              <div className="showcase-geometry-content">
                {renderGeometry(item.id)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Icons2DShowcase = () => (
    <div className="icons-showcase">
      <div className={`icons-showcase-grid ${icons2DShowReady ? 'visible' : ''}`}>
        {staticIconItems.map((item, index) => (
          <div key={item.id} className="showcase-card" style={{ ['--delay' as any]: `${index * 0.04}s` }}>
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
  return (
    <>
      <style>{`
        * { -webkit-tap-highlight-color: transparent; }
        html, body { overscroll-behavior: none; }
        
        .creative-page {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          overflow: hidden;
          overscroll-behavior: none;
          touch-action: pan-x;
        }
        
        .creative-page.overlay-open { touch-action: none; }
        
        .transition-bridge {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1500;
          background: #050505;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: clamp(180px, 30vh, 280px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .transition-bridge.in { 
          opacity: 1; 
          visibility: visible; 
          transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .transition-bridge.hold { 
          opacity: 1; 
          visibility: visible; 
        }
        .transition-bridge.out { 
          opacity: 0; 
          visibility: visible; 
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        
        .bridge-spinner {
          width: 32px; height: 32px;
          position: relative;
        }
        
        .bridge-spinner::before {
          content: '';
          position: absolute;
          width: 100%; height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.08);
        }
        
        .bridge-spinner::after {
          content: '';
          position: absolute;
          width: 100%; height: 100%;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.7);
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin { to { transform: rotate(360deg); } }
        
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
          width: 118px;
          height: 118px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          opacity: 0;
          transform: translateZ(0) scale(0.8) translateY(20px);
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, opacity 0.5s ease;
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.2),
            0 8px 32px rgba(0, 0, 0, 0.35),
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .folder-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 30px 30px 60% 60%;
          pointer-events: none;
          z-index: 10;
        }
        
        .folder-icon.loaded {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        .folder-icon:active {
          transform: translateZ(0) scale(0.94) translateY(0);
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.25),
            0 4px 16px rgba(0, 0, 0, 0.3),
            0 2px 6px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
        }
        
        .folder-wrapper:nth-child(1) .folder-icon { transition-delay: 0ms; }
        .folder-wrapper:nth-child(2) .folder-icon { transition-delay: 100ms; }
        
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 7px;
          width: 100px;
          height: 100px;
          position: relative;
          z-index: 5;
        }
        
        .folder-preview-3 { grid-template-rows: 1fr 1fr; }
        .folder-preview-3 .folder-mini-icon:nth-child(3) { grid-column: 1 / -1; justify-self: center; }
        
        .folder-preview-4 { 
          grid-template-rows: 1fr 1fr; 
        }
        
        .folder-mini-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.12),
            0 4px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .folder-mini-icon.folder-mini-empty {
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }
        
        .folder-mini-icon.folder-mini-png {
          background: transparent;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .folder-mini-icon.folder-mini-png::before {
          display: none;
        }
        
        .folder-mini-icon:not(.folder-mini-png)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 60%, transparent 100%);
          border-radius: 12px 12px 50% 50%;
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
        
        .folder-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(100px, 18vh, 180px);
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .folder-overlay.entering { 
          visibility: visible; 
          pointer-events: auto; 
        }
        .folder-overlay.active { 
          visibility: visible; 
          pointer-events: auto; 
        }
        .folder-overlay.exiting { 
          visibility: visible; 
          pointer-events: none; 
        }
        
        .folder-overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          touch-action: none;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .folder-overlay.active .folder-overlay-bg {
          opacity: 1;
        }
        
        .folder-overlay.exiting .folder-overlay-bg {
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .folder-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border-radius: 32px;
          padding: 26px;
          opacity: 0;
          transform: translateZ(0) scale(0.92);
          transition: none;
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.8),
            0 25px 80px -10px rgba(0, 0, 0, 0.35),
            0 10px 30px -5px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }
        
        .folder-overlay.active .folder-container { 
          opacity: 1; 
          transform: translateZ(0) scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.02s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.02s; 
        }
        .folder-overlay.exiting .folder-container { 
          opacity: 0; 
          transform: translateZ(0) scale(0.95);
          transition: opacity 0.25s ease, transform 0.3s ease; 
        }
        
        .folder-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 20px;
        }
        
        .folder-cards-grid-3 {
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 1fr;
        }
        
        .folder-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0;
          transform: translateZ(0) scale(0.6) translateY(20px);
          transition: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .folder-overlay.active .folder-card {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.exiting .folder-card {
          opacity: 0;
          transform: translateZ(0) scale(0.8) translateY(10px);
          transition: opacity 0.2s ease, transform 0.25s ease;
        }
        
        .folder-overlay.active .folder-card:nth-child(1) { transition-delay: 0.05s; }
        .folder-overlay.active .folder-card:nth-child(2) { transition-delay: 0.09s; }
        .folder-overlay.active .folder-card:nth-child(3) { transition-delay: 0.13s; }
        .folder-overlay.active .folder-card:nth-child(4) { transition-delay: 0.17s; }
        
        .folder-card-icon {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 4px 8px rgba(0, 0, 0, 0.08),
            0 8px 16px rgba(0, 0, 0, 0.06),
            0 16px 32px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform;
        }
        
        .folder-card-icon:active {
          transform: scale(0.92);
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 4px 8px rgba(0, 0, 0, 0.06);
        }
        .folder-card-icon.folder-card-png { background: transparent; }
        .folder-card-icon.folder-card-png::before { display: none; }
        .folder-card-icon:not(.folder-card-png):not(.folder-card-icon-empty) { background: linear-gradient(145deg, #1a1a1f, #0d0d10); }
        
        .folder-card-icon.folder-card-icon-empty {
          background: rgba(0, 0, 0, 0.15);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            inset 0 0 0 1px rgba(0, 0, 0, 0.1);
          cursor: default;
        }
        
        .folder-card.folder-card-empty {
          pointer-events: none;
          opacity: 0.4;
        }
        
        .folder-card-icon:not(.folder-card-png)::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%; height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
          border-radius: 17px 17px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-card-icon.folder-card-icon-empty::before {
          display: none;
        }
        
        .folder-card-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #1a1a1a;
          text-align: center;
          text-shadow: none;
        }
        
        .expanded-view {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #050505;
          z-index: 3000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(80px, 15vh, 150px);
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .expanded-view.entering { 
          visibility: visible; 
          pointer-events: auto;
        }
        .expanded-view.active { 
          visibility: visible; 
          pointer-events: auto;
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
          transition: opacity 0.25s ease; 
        }
        
        .expanded-content {
          width: 280px; height: 280px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6));
          opacity: 0;
          transform: translateZ(0) scale(0.9);
          transition: none;
        }
        
        .expanded-view.active .expanded-content { 
          opacity: 1; 
          transform: translateZ(0) scale(1); 
          transition: opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1) 0.12s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.12s; 
        }
        .expanded-view.exiting .expanded-content { 
          opacity: 0; 
          transform: translateZ(0) scale(0.95); 
          transition: opacity 0.2s ease; 
        }
        
        .expanded-close {
          margin-top: 40px;
          width: 52px; height: 52px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          z-index: 10;
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .expanded-view.active .expanded-close { opacity: 1; transform: scale(1); transition: opacity 0.35s ease 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s; }
        .expanded-view.exiting .expanded-close { opacity: 0; transform: scale(0.7); transition: opacity 0.15s ease; }
        .expanded-close svg { filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6)); }
        
        .showcase-expanded .expanded-content, .showcase-content {
          width: 100%; height: 100%;
          max-width: 400px; max-height: 500px;
          border-radius: 0;
          filter: none;
        }
        
        .showcase-expanded .expanded-inner { width: 100%; height: auto; max-height: 90vh; }
        .showcase-3d-expanded { background: #050505; }
        .showcase-geometry-expanded { background: radial-gradient(ellipse at center, #08080a 0%, #030304 100%); }
        .showcase-icons-expanded { background: radial-gradient(ellipse at center, #08080a 0%, #030304 100%); }
        
        .showcase-app {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 8px;
        }
        
        .showcase-3d-minimal {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 60px 16px 28px;
          background: #050505;
          overflow: hidden;
        }
        
        .showcase-3d-featured {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.94);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .showcase-3d-featured.visible { opacity: 1; transform: scale(1); }
        
        .showcase-3d-featured-frame {
          width: 240px; height: 240px;
          border-radius: 52px;
          background: linear-gradient(165deg, #101012 0%, #080809 50%, #050506 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04), 0 40px 80px -20px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.03);
          transition: transform 0.25s ease;
        }
        
        .showcase-3d-featured:active .showcase-3d-featured-frame { transform: scale(0.97); }
        .showcase-3d-featured-icon { filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.45)); }
        
        .showcase-3d-selector {
          display: flex;
          gap: 5px;
          padding: 7px 10px;
          background: rgba(15, 15, 18, 0.8);
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(40px);
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease 0.12s, transform 0.45s ease 0.12s;
        }
        
        .showcase-3d-selector.visible { opacity: 1; transform: translateY(0); }
        
        .showcase-3d-selector-item {
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.3s ease, transform 0.3s ease;
          transition-delay: var(--delay, 0s);
        }
        
        .showcase-3d-selector.visible .showcase-3d-selector-item { opacity: 1; transform: scale(1); }
        .showcase-3d-selector-item.active { transform: scale(1.06); }
        
        .showcase-3d-selector-card {
          width: 36px; height: 36px;
          border-radius: 9px;
          background: linear-gradient(165deg, #151518 0%, #0c0c0e 50%, #080809 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.05), 0 2px 6px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03);
          transition: all 0.18s ease;
        }
        
        .showcase-3d-selector-item.active .showcase-3d-selector-card {
          background: linear-gradient(165deg, #1e1e22 0%, #121214 50%, #0c0c0e 100%);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 16px rgba(255, 255, 255, 0.03), 0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        
        .showcase-geometry {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .showcase-geometry-light {
          position: absolute;
          top: 15%; left: 50%;
          transform: translateX(-50%);
          width: 400px; height: 300px;
          background: radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        
        .showcase-geometry-light.visible { opacity: 1; }
        
        .showcase-geometry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: -40px;
        }
        
        .showcase-geometry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(24px) scale(0.9);
          transition: opacity 0.6s ease, transform 0.7s cubic-bezier(0.34, 1.4, 0.64, 1);
          transition-delay: var(--delay, 0s);
        }
        
        .showcase-geometry-grid.visible .showcase-geometry-item { opacity: 1; transform: translateY(0) scale(1); }
        
        .showcase-geometry-frame {
          width: 130px; height: 130px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.015) 0%, transparent 70%);
          transition: transform 0.35s ease;
        }
        
        .showcase-geometry-frame::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        
        .showcase-geometry-frame:active { transform: scale(0.94); }
        
        .showcase-geometry-content {
          position: relative;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: inherit;
        }
        
        .showcase-geometry-grid.visible .showcase-geometry-content { opacity: 1; }
        
        .showcase-geo-metatron .showcase-geometry-content { transform: scale(0.55); }
        .showcase-geo-spiral .showcase-geometry-content { transform: scale(0.6); }
        .showcase-geo-flower .showcase-geometry-content { transform: scale(0.55); }
        .showcase-geo-lemniscate .showcase-geometry-content { transform: scale(0.7); }
        
        .icons-showcase {
          width: 100%; height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
        }
        
        .icons-showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 10px;
        }
        
        .showcase-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          opacity: 0;
          transform: translateY(12px) scale(0.9);
          transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1);
          transition-delay: var(--delay, 0s);
        }
        
        .icons-showcase-grid.visible .showcase-card { opacity: 1; transform: translateY(0) scale(1); }
        
        .showcase-card-inner {
          width: 54px; height: 68px;
          border-radius: 10px;
          background: linear-gradient(168deg, #ffffff 0%, #f8f7f4 30%, #f2f0eb 70%, #eae8e0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1);
          transition: transform 0.25s ease;
        }
        
        .showcase-card-inner:active { transform: scale(0.95); }
        .showcase-card-inner svg { width: 36px; height: 36px; filter: brightness(0) saturate(100%); opacity: 0.7; }
        
        .showcase-card-label {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 9px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
          text-align: center;
          opacity: 0;
          transform: translateY(3px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          transition-delay: calc(var(--delay, 0s) + 0.15s);
        }
        
        .icons-showcase-grid.visible .showcase-card-label { opacity: 1; transform: translateY(0); }
        
        .sub-expanded-view {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 4000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        
        .sub-expanded-view.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .sub-expanded-view.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.15s ease; }
        .sub-expanded-view.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.1s ease; }
        
        .sub-expanded-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(5, 5, 5, 0.96);
          backdrop-filter: blur(40px);
        }
        
        .sub-expanded-bg-black { background: #030303 !important; backdrop-filter: none !important; }
        
        .sub-expanded-inner {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -60%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .sub-expanded-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.15s ease 0.05s, transform 0.18s ease 0.05s;
        }
        
        .sub-expanded-view.active .sub-expanded-header { opacity: 1; transform: translateY(0); }
        
        .sub-expanded-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 28px;
          font-weight: 600;
          color: #ffffff;
        }
        
        .sub-expanded-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        
        .sub-expanded-content {
          position: relative;
          width: 280px; height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 0.14s ease, transform 0.16s ease;
        }
        
        .sub-expanded-view.active .sub-expanded-content { opacity: 1; transform: scale(1); }
        
        .sub-expanded-content-3d {
          background: #080808;
          border-radius: 28px;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        .sub-expanded-glow-white {
          position: absolute;
          top: 50%; left: 50%;
          width: 200px; height: 200px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease 0.2s;
        }
        
        .sub-expanded-view.active .sub-expanded-glow-white { opacity: 1; }
        
        .sub-expanded-close {
          width: 44px; height: 44px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.1s ease, transform 0.1s ease;
          margin-top: 8px;
        }
        
        .sub-expanded-close:hover, .sub-expanded-close:active { opacity: 1; transform: scale(1.1); }
        
        .geometry-full-content { width: 300px; height: 300px; }
        .geometry-full-content > div { transform: scale(1.4); }
        .geometry-full-metatron > div { transform: scale(1.5); filter: drop-shadow(0 0 20px rgba(138, 92, 246, 0.3)); }
        .geometry-full-spiral > div { transform: scale(1.6); filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.25)); }
        .geometry-full-flower > div { transform: scale(1.5); filter: drop-shadow(0 0 30px rgba(96, 165, 250, 0.3)); }
        .geometry-full-lemniscate > div { transform: scale(1.8); filter: drop-shadow(0 0 25px rgba(74, 222, 128, 0.3)); }
        
        .interactive-experience {
          background: radial-gradient(ellipse at center, #080809 0%, #030304 100%);
          position: fixed !important;
          top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
          overflow: hidden !important;
          touch-action: none !important;
        }
        
        .interactive-ambient {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0;
          transition: opacity 0.8s ease 0.2s;
          pointer-events: none;
        }
        
        .interactive-experience.active .interactive-ambient { opacity: 1; }
        
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
        
        .interactive-experience.active .interactive-header { opacity: 1; transform: translateY(0); }
        
        .interactive-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
        }
        
        .interactive-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        
        .interactive-content {
          width: 320px !important; height: 320px !important;
          border-radius: 24px;
          overflow: hidden !important;
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.5s ease 0.2s, transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s;
        }
        
        .interactive-experience.active .interactive-content { opacity: 1; transform: scale(1); }
        .interactive-content canvas { touch-action: manipulation !important; }
        .interactive-close { margin-top: 16px !important; pointer-events: auto; }
        
        @media (min-width: 600px) {
          .creative-grid { gap: 48px 44px; max-width: 420px; }
          .folder-icon { width: 148px; height: 148px; border-radius: 36px; }
          .folder-preview { width: 125px; height: 125px; gap: 8px; }
          .folder-mini-icon { width: 58px; height: 58px; border-radius: 14px; }
          .folder-container { padding: 30px; border-radius: 36px; }
          .folder-cards-grid { gap: 22px; }
          .folder-card-icon { width: 82px; height: 82px; border-radius: 20px; }
          .expanded-content { width: 340px; height: 340px; }
          .showcase-3d-featured-frame { width: 280px; height: 280px; border-radius: 58px; }
          .showcase-3d-selector { gap: 6px; padding: 9px 14px; border-radius: 16px; }
          .showcase-3d-selector-card { width: 44px; height: 44px; border-radius: 11px; }
          .showcase-geometry-grid { gap: 40px; }
          .showcase-geometry-frame { width: 160px; height: 160px; }
          .sub-expanded-content { width: 320px; height: 320px; }
          .geometry-full-content { width: 400px; height: 400px; }
          .icons-showcase-grid { gap: 14px; }
          .showcase-card-inner { width: 64px; height: 80px; }
          .interactive-content { width: 380px !important; height: 380px !important; }
        }
        
        @media (min-width: 900px) {
          .creative-grid { gap: 56px 52px; max-width: 520px; }
          .folder-icon { width: 180px; height: 180px; border-radius: 42px; }
          .folder-preview { width: 152px; height: 152px; gap: 10px; }
          .folder-mini-icon { width: 70px; height: 70px; border-radius: 16px; }
          .folder-container { padding: 38px; border-radius: 42px; }
          .folder-cards-grid { gap: 28px; }
          .folder-card-icon { width: 98px; height: 98px; border-radius: 24px; }
          .showcase-3d-featured-frame { width: 340px; height: 340px; border-radius: 70px; }
          .showcase-3d-selector { gap: 8px; padding: 10px 18px; }
          .showcase-3d-selector-card { width: 54px; height: 54px; border-radius: 14px; }
          .showcase-geometry-grid { gap: 52px; }
          .showcase-geometry-frame { width: 190px; height: 190px; }
          .sub-expanded-content { width: 380px; height: 380px; }
          .geometry-full-content { width: 480px; height: 480px; }
          .icons-showcase-grid { gap: 18px; }
          .showcase-card-inner { width: 72px; height: 90px; }
          .interactive-content { width: 440px !important; height: 440px !important; }
        }
      `}</style>

      <div className={`creative-page ${folderAnimState !== 'idle' || expandedAnimState !== 'idle' || bridgePhase !== 'idle' ? 'overlay-open' : ''}`} style={{ minHeight: "100vh", backgroundColor: "#080808", paddingTop: "clamp(100px, 15vh, 160px)", paddingBottom: "100px", paddingLeft: "20px", paddingRight: "20px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
        <div className="creative-grid">
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

      <div className={`transition-bridge ${bridgePhase}`}><div className="bridge-spinner" /></div>

      {/* Entertainment Folder - 3 apps in 2x2 grid */}
      <div className={`folder-overlay ${getFolderAnimClass('entertainment')}`}>
        <div className="folder-overlay-bg" onClick={handleCloseFolder} />
        <div className="folder-container">
          <div className="folder-cards-grid">
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('3dicons-showcase')}>
              <div className="folder-card-icon folder-card-png">
                <Image src="/images/3diconapp2.png" alt="3D Icons" fill style={{ objectFit: 'cover', borderRadius: '18px' }} />
              </div>
              <span className="folder-card-name">3D Icons</span>
            </div>
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('geometry-showcase')}>
              <div className="folder-card-icon folder-card-png">
                <Image src="/images/geometryapp2.png" alt="Geometry" fill style={{ objectFit: 'cover', borderRadius: '18px' }} />
              </div>
              <span className="folder-card-name">Geometry</span>
            </div>
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('icons-showcase')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #1a1a1f, #0d0d10)' }}>
                {render3DIconMini(folderIconSize)}
              </div>
              <span className="folder-card-name">Icons</span>
            </div>
            <div className="folder-card folder-card-empty">
              <div className="folder-card-icon folder-card-icon-empty" />
              <span className="folder-card-name">&nbsp;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Folder - 4 apps in 2x2 grid */}
      <div className={`folder-overlay ${getFolderAnimClass('interactive')}`}>
        <div className="folder-overlay-bg" onClick={handleCloseFolder} />
        <div className="folder-container">
          <div className="folder-cards-grid">
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('exp-sphere')}>
              <div className="folder-card-icon folder-card-png">
                <Image src="/images/sperhaapp2.png" alt="Sphere" fill style={{ objectFit: 'cover', borderRadius: '18px' }} />
              </div>
              <span className="folder-card-name">Sphere</span>
            </div>
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('exp-manifold')}>
              <div className="folder-card-icon folder-card-png">
                <Image src="/images/mainfoldapp2.png" alt="Manifold" fill style={{ objectFit: 'cover', borderRadius: '18px' }} />
              </div>
              <span className="folder-card-name">Manifold</span>
            </div>
            <div className="folder-card" onClick={() => handleOpenExpandedFromFolder('exp-architecture')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #0f1215, #070809)' }}>
                {renderInteractiveMini('architecture', folderIconSize)}
              </div>
              <span className="folder-card-name">Architecture</span>
            </div>
            <div className="folder-card" onClick={() => window.open('https://metatron-genesis369.vercel.app', '_blank')}>
              <div className="folder-card-icon" style={{ background: 'linear-gradient(145deg, #151518, #0a0a0c)' }}>
                {renderDodecahedronIconLarge(folderIconSize)}
              </div>
              <span className="folder-card-name">MetatronAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Icons Showcase */}
      <div className={`expanded-view showcase-expanded showcase-3d-expanded ${getExpandedAnimClass('3dicons-showcase')}`}>
        <div className="expanded-inner showcase-inner">
          <div className="expanded-content showcase-content">
            {expandedItem === '3dicons-showcase' && <Icons3DShowcase />}
          </div>
          <button className="expanded-close" onClick={handleCloseExpanded}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Geometry Showcase */}
      <div className={`expanded-view showcase-expanded showcase-geometry-expanded ${getExpandedAnimClass('geometry-showcase')}`}>
        <div className="expanded-inner showcase-inner">
          <div className="expanded-content showcase-content">
            {expandedItem === 'geometry-showcase' && <GeometryShowcase />}
          </div>
          <button className="expanded-close" onClick={handleCloseExpanded}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* 2D Icons Showcase */}
      <div className={`expanded-view showcase-expanded showcase-icons-expanded ${getExpandedAnimClass('icons-showcase')}`}>
        <div className="expanded-inner showcase-inner">
          <div className="expanded-content showcase-content">
            {expandedItem === 'icons-showcase' && <Icons2DShowcase />}
          </div>
          <button className="expanded-close" onClick={handleCloseExpanded}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Sub-expanded 3D Icons */}
      {icons3DItems.map(item => (
        <div key={item.id} className={`sub-expanded-view sub-expanded-3d ${subExpandedItem === `3d-${item.id}` ? subExpandedAnimState : ''}`}>
          <div className="sub-expanded-bg sub-expanded-bg-black" onClick={handleCloseSubExpanded} />
          <div className="sub-expanded-inner">
            <div className="sub-expanded-header"><span className="sub-expanded-title">{item.name}</span></div>
            <div className="sub-expanded-content sub-expanded-content-3d">
              <div className="sub-expanded-glow-white" />
              {subExpandedItem === `3d-${item.id}` && render3DIcon(item.id, isMobile ? 180 : 240)}
            </div>
            <button className="sub-expanded-close" onClick={handleCloseSubExpanded}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}

      {/* Sub-expanded Geometries */}
      {geometryItems.map(item => (
        <div key={item.id} className={`sub-expanded-view geometry-sub ${subExpandedItem === `geo-${item.id}` ? subExpandedAnimState : ''}`}>
          <div className="sub-expanded-bg" onClick={handleCloseSubExpanded} />
          <div className="sub-expanded-inner">
            <div className="sub-expanded-header">
              <span className="sub-expanded-title">{item.name}</span>
              <span className="sub-expanded-subtitle">Sacred Geometry</span>
            </div>
            <div className={`sub-expanded-content geometry-full-content geometry-full-${item.id}`}>
              {subExpandedItem === `geo-${item.id}` && renderGeometry(item.id)}
            </div>
            <button className="sub-expanded-close" onClick={handleCloseSubExpanded}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}

      {/* Interactive 3D Experiences */}
      {interactiveApps.map(app => (
        <div key={app.id} className={`expanded-view interactive-experience ${getExpandedAnimClass(`exp-${app.id}`)}`}>
          <div className="interactive-ambient" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 60%)' }} />
          <div className="expanded-inner interactive-inner">
            <div className="interactive-header">
              <span className="interactive-title">{app.name}</span>
              <span className="interactive-subtitle">Interactive 3D</span>
            </div>
            <div className="expanded-content interactive-content" style={{ touchAction: 'none' }}>
              {expandedItem === `exp-${app.id}` && renderExperience(app.id)}
            </div>
            <button className="expanded-close interactive-close" onClick={handleCloseExpanded}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}