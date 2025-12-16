"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamic imports for 3D icons
const Trade69Icon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.Trade69Icon3D })), { ssr: false });
const MegaAgentIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.MegaAgentIcon3D })), { ssr: false });
const OctopusIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OctopusIcon3D })), { ssr: false });
const OvermindIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OvermindIcon3D })), { ssr: false });

// ═══════════════════════════════════════════════════════════════════════════════
// DATA DEFINITIONS - EXACT SIZES FOR CONSISTENCY
// ═══════════════════════════════════════════════════════════════════════════════

const appsItems = [
  { id: 'trade69', name: 'Trade69', href: '/work/trade69', color: ['#1a5c50', '#082825'], glow: 'rgba(94, 234, 212, 0.25)' },
  { id: 'megaagent', name: 'MegaAgent', href: '/work/megaagent', color: ['#5c3d7a', '#281840'], glow: 'rgba(192, 132, 252, 0.25)' },
  { id: 'octopus', name: 'Octopus', href: '/work/octopus', color: ['#1a5a70', '#082830'], glow: 'rgba(103, 232, 249, 0.25)' },
  { id: 'overmind', name: 'Overmind', href: '/work/overmind', color: ['#8a6420', '#3d2d0d'], glow: 'rgba(252, 211, 77, 0.25)' },
];

const servicesItems = [
  { id: 'website', name: 'Web Apps', color: ['#3d2860', '#1e1438'], glow: 'rgba(165, 130, 252, 0.25)', desc: 'Full-stack applications with modern frameworks. SEO, responsive design, authentication, databases, and deployment.' },
  { id: 'dashboard', name: 'Dashboards', color: ['#602848', '#381428'], glow: 'rgba(251, 130, 180, 0.25)', desc: 'Real-time data visualization and analytics. Interactive charts, live data streams, and beautiful interfaces.' },
  { id: 'api', name: 'API', color: ['#1a4038', '#0d2420'], glow: 'rgba(134, 239, 172, 0.25)', desc: 'REST and GraphQL APIs. Authentication, rate limiting, documentation, and third-party integrations.' },
  { id: 'llm', name: 'LLM', color: ['#604028', '#382010'], glow: 'rgba(253, 186, 140, 0.25)', desc: 'AI integrations and middleware. Prompt engineering, tool orchestration, and multi-model pipelines.' },
];

const socialLinks = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/manfromnowhere143', color: ['#2d333b', '#161b22'], glow: 'rgba(255, 255, 255, 0.15)' },
  { id: 'x', name: 'X', url: 'https://x.com/satori936', color: ['#1a1a1a', '#000000'], glow: 'rgba(255, 255, 255, 0.15)' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/overmind143', color: ['#833ab4', '#fd1d1d'], glow: 'rgba(225, 48, 108, 0.25)' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@danielwahnich', color: ['#1a1a1a', '#000000'], glow: 'rgba(255, 255, 255, 0.15)' },
];

const galleryItems = [
  { src: "/images/art4.png", name: "Neural Architecture" },
  { src: "/images/art3.jpg", name: "Emergence" },
  { src: "/images/art2.JPEG", name: "Layers" },
  { src: "/images/art1.JPEG", name: "Geometric Abstractions" },
];

const notesItems = [
  { src: "/images/homework1.jpg", name: "Study I" },
  { src: "/images/neural-timeline.jpg", name: "Study II" },
  { src: "/images/homework36.jpg", name: "Study III" },
  { src: "/images/homework4.jpg", name: "Study IV" },
  { src: "/images/homework5.jpg", name: "Study V" },
];

type AnimationState = 'idle' | 'entering' | 'active' | 'exiting';

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - GLOBAL CLEANUP FUNCTION
// This ensures scroll is ALWAYS restored, even on navigation
// ═══════════════════════════════════════════════════════════════════════════════
const restoreScroll = () => {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  if ((window as any).__workSolidRockCleanup) {
    (window as any).__workSolidRockCleanup();
    delete (window as any).__workSolidRockCleanup;
  }
};

export default function Work() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [folderAnimState, setFolderAnimState] = useState<AnimationState>('idle');

  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedAnimState, setExpandedAnimState] = useState<AnimationState>('idle');

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryAnimState, setGalleryAnimState] = useState<AnimationState>('idle');
  const [notesOpen, setNotesOpen] = useState(false);
  const [notesAnimState, setNotesAnimState] = useState<AnimationState>('idle');

  const [expandedImage, setExpandedImage] = useState<{src: string, name: string} | null>(null);
  const [imageAnimState, setImageAnimState] = useState<AnimationState>('idle');
  const [bridgePhase, setBridgePhase] = useState<'idle' | 'loading' | 'transitioning'>('idle');
  const [pendingImage, setPendingImage] = useState<{src: string, name: string} | null>(null);

  // STATE OF THE ART - Image cache to skip loading spinner for already-loaded images
  const loadedImagesRef = useRef<Set<string>>(new Set());

  const folderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const expandedTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const notesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - CLEANUP ON UNMOUNT (navigation away)
  // This is the KEY fix - restore scroll when component unmounts
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    return () => {
      // Clear all timeouts
      if (folderTimeoutRef.current) clearTimeout(folderTimeoutRef.current);
      if (expandedTimeoutRef.current) clearTimeout(expandedTimeoutRef.current);
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
      if (notesTimeoutRef.current) clearTimeout(notesTimeoutRef.current);
      if (imageTimeoutRef.current) clearTimeout(imageTimeoutRef.current);
      if (bridgeTimeoutRef.current) clearTimeout(bridgeTimeoutRef.current);

      // CRITICAL: Restore scroll on unmount (navigation away)
      restoreScroll();
    };
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE OF THE ART - SOLID ROCK LOCK (only when overlays are open)
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const isOpen = folderAnimState !== 'idle' || expandedAnimState !== 'idle' ||
                   galleryAnimState !== 'idle' || notesAnimState !== 'idle' ||
                   imageAnimState !== 'idle' || bridgePhase !== 'idle';

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const blockAllTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.media-container')) return;
        if (target.closest('.image-expanded-content')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      const blockWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.media-container')) return;
        if (target.closest('.image-expanded-content')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      document.addEventListener('touchmove', blockAllTouch, { passive: false, capture: true });
      document.addEventListener('wheel', blockWheel, { passive: false, capture: true });

      (window as any).__workSolidRockCleanup = () => {
        document.removeEventListener('touchmove', blockAllTouch, { capture: true } as any);
        document.removeEventListener('wheel', blockWheel, { capture: true } as any);
      };

    } else {
      // Restore scroll when all overlays are closed
      restoreScroll();
    }

    // Cleanup on effect re-run
    return () => {
      if ((window as any).__workSolidRockCleanup) {
        (window as any).__workSolidRockCleanup();
      }
    };
  }, [folderAnimState, expandedAnimState, galleryAnimState, notesAnimState, imageAnimState, bridgePhase]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // HANDLERS
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
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenServiceWithBridge = useCallback((index: number) => {
    if (expandedAnimState !== 'idle' || bridgePhase !== 'idle') return;

    setBridgePhase('loading');
    handleCloseFolder();

    bridgeTimeoutRef.current = setTimeout(() => {
      setExpandedService(index);
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

  const handleOpenService = useCallback((index: number) => {
    if (expandedAnimState !== 'idle') return;
    setExpandedService(index);
    setExpandedAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpandedAnimState('active'));
    });
  }, [expandedAnimState]);

  const handleCloseService = useCallback(() => {
    if (expandedAnimState !== 'active') return;
    setExpandedAnimState('exiting');
    expandedTimeoutRef.current = setTimeout(() => {
      setExpandedService(null);
      setExpandedAnimState('idle');
    }, 400);
  }, [expandedAnimState]);

  const handleOpenGalleryWithBridge = useCallback(() => {
    if (galleryAnimState !== 'idle' || bridgePhase !== 'idle') return;

    setBridgePhase('loading');
    handleCloseFolder();

    bridgeTimeoutRef.current = setTimeout(() => {
      setGalleryOpen(true);
      setGalleryAnimState('entering');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setGalleryAnimState('active');
          setBridgePhase('transitioning');

          setTimeout(() => {
            setBridgePhase('idle');
          }, 450);
        });
      });
    }, 400);
  }, [galleryAnimState, bridgePhase, handleCloseFolder]);

  const handleOpenGallery = useCallback(() => {
    if (galleryAnimState !== 'idle') return;
    setGalleryOpen(true);
    setGalleryAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setGalleryAnimState('active'));
    });
  }, [galleryAnimState]);

  const handleCloseGallery = useCallback(() => {
    if (galleryAnimState !== 'active') return;
    setGalleryAnimState('exiting');
    galleryTimeoutRef.current = setTimeout(() => {
      setGalleryOpen(false);
      setGalleryAnimState('idle');
    }, 350);
  }, [galleryAnimState]);

  const handleOpenNotesWithBridge = useCallback(() => {
    if (notesAnimState !== 'idle' || bridgePhase !== 'idle') return;

    setBridgePhase('loading');
    handleCloseFolder();

    bridgeTimeoutRef.current = setTimeout(() => {
      setNotesOpen(true);
      setNotesAnimState('entering');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNotesAnimState('active');
          setBridgePhase('transitioning');

          setTimeout(() => {
            setBridgePhase('idle');
          }, 450);
        });
      });
    }, 400);
  }, [notesAnimState, bridgePhase, handleCloseFolder]);

  const handleOpenNotes = useCallback(() => {
    if (notesAnimState !== 'idle') return;
    setNotesOpen(true);
    setNotesAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNotesAnimState('active'));
    });
  }, [notesAnimState]);

  const handleCloseNotes = useCallback(() => {
    if (notesAnimState !== 'active') return;
    setNotesAnimState('exiting');
    notesTimeoutRef.current = setTimeout(() => {
      setNotesOpen(false);
      setNotesAnimState('idle');
    }, 350);
  }, [notesAnimState]);

  const handleOpenImage = useCallback((image: {src: string, name: string}) => {
    if (imageAnimState !== 'idle' || bridgePhase !== 'idle') return;

    // STATE OF THE ART - Check if image is already cached
    const isAlreadyLoaded = loadedImagesRef.current.has(image.src);

    if (isAlreadyLoaded) {
      // INSTANT transition - no spinner needed, image is cached
      setExpandedImage(image);
      setImageAnimState('entering');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setImageAnimState('active');
        });
      });
    } else {
      // FIRST TIME - show spinner while preloading
      setPendingImage(image);
      setBridgePhase('loading');

      const img = new Image();
      const showImage = () => {
        // Mark as loaded for future opens
        loadedImagesRef.current.add(image.src);

        setExpandedImage(image);
        setImageAnimState('entering');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setImageAnimState('active');
            setBridgePhase('transitioning');

            setTimeout(() => {
              setBridgePhase('idle');
              setPendingImage(null);
            }, 450);
          });
        });
      };

      img.onload = showImage;
      img.onerror = showImage;
      img.src = image.src;
    }
  }, [imageAnimState, bridgePhase]);

  const handleCloseImage = useCallback(() => {
    if (imageAnimState !== 'active') return;
    setImageAnimState('exiting');
    imageTimeoutRef.current = setTimeout(() => {
      setExpandedImage(null);
      setImageAnimState('idle');
    }, 400);
  }, [imageAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // RENDER ICONS
  // ═══════════════════════════════════════════════════════════════════════════════

  const renderAppMiniIcon = (id: string, size: number = 18) => {
    switch (id) {
      case 'trade69':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/><path d="M17 7h4v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/></svg>;
      case 'megaagent':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="6" cy="16" r="3" stroke="white" strokeWidth="1.5" opacity="0.7"/><circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.5" opacity="0.7"/><path d="M12 12v2M8.5 14l-1 1M15.5 14l1 1" stroke="white" strokeWidth="1.5" opacity="0.5"/></svg>;
      case 'octopus':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="5" stroke="white" strokeWidth="1.5" opacity="0.9"/><path d="M7 15c-1 2-2 4-1 5M10 14c0 3-1 5 0 6M14 14c0 3 1 5 0 6M17 15c1 2 2 4 1 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/><circle cx="10" cy="9" r="1" fill="white" opacity="0.9"/><circle cx="14" cy="9" r="1" fill="white" opacity="0.9"/></svg>;
      case 'overmind':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" opacity="0.5"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" opacity="0.7"/><circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="white" strokeWidth="1" opacity="0.4"/></svg>;
      default: return null;
    }
  };

  const renderServiceMiniIcon = (id: string, size: number = 18) => {
    switch (id) {
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

  const renderSocialMiniIcon = (id: string, size: number = 16) => {
    switch (id) {
      case 'github':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
      case 'x':
        return <svg width={size - 2} height={size - 2} viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
      case 'instagram':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="18" cy="6" r="1" fill="white" opacity="0.9"/></svg>;
      case 'tiktok':
        return <svg width={size - 2} height={size - 2} viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>;
      default: return null;
    }
  };

  const renderServiceIcon = (id: string, size: number = 48) => {
    switch (id) {
      case 'website':
        return <svg width={size} height={size} viewBox="0 0 60 60" fill="none"><rect x="8" y="12" width="44" height="32" rx="4" stroke="white" strokeWidth="2" opacity="0.9"/><path d="M8 20h44" stroke="white" strokeWidth="1.5" opacity="0.6"/><circle cx="13" cy="16" r="2" fill="white" opacity="0.8"/><circle cx="19" cy="16" r="2" fill="white" opacity="0.8"/><circle cx="25" cy="16" r="2" fill="white" opacity="0.8"/><rect x="14" y="26" width="14" height="12" rx="1" fill="white" opacity="0.5"/><rect x="32" y="26" width="14" height="4" rx="1" fill="white" opacity="0.4"/><rect x="32" y="33" width="10" height="3" rx="1" fill="white" opacity="0.3"/></svg>;
      case 'dashboard':
        return <svg width={size} height={size} viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="22" stroke="white" strokeWidth="2" opacity="0.9"/><circle cx="30" cy="30" r="16" stroke="white" strokeWidth="1.5" opacity="0.5"/><path d="M30 12v6M30 42v6M12 30h6M42 30h6" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/><circle cx="30" cy="30" r="5" fill="white" opacity="0.9"/><path d="M30 30l8-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/></svg>;
      case 'api':
        return <svg width={size} height={size} viewBox="0 0 60 60" fill="none"><circle cx="30" cy="10" r="6" stroke="white" strokeWidth="2" opacity="0.9"/><circle cx="10" cy="30" r="6" stroke="white" strokeWidth="2" opacity="0.9"/><circle cx="50" cy="30" r="6" stroke="white" strokeWidth="2" opacity="0.9"/><circle cx="30" cy="50" r="6" stroke="white" strokeWidth="2" opacity="0.9"/><path d="M30 16v8M30 36v8M16 30h8M36 30h8" stroke="white" strokeWidth="2" opacity="0.6"/><circle cx="30" cy="30" r="8" fill="white" opacity="0.9"/></svg>;
      case 'llm':
        return <svg width={size} height={size} viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="30" rx="24" ry="14" stroke="white" strokeWidth="1.5" opacity="0.5"/><ellipse cx="30" cy="30" rx="24" ry="14" stroke="white" strokeWidth="1.5" opacity="0.5" transform="rotate(60 30 30)"/><ellipse cx="30" cy="30" rx="24" ry="14" stroke="white" strokeWidth="1.5" opacity="0.5" transform="rotate(120 30 30)"/><circle cx="30" cy="30" r="10" fill="white" opacity="0.9"/><circle cx="30" cy="30" r="5" fill="white" opacity="1"/></svg>;
      default: return null;
    }
  };

  const renderSocialIcon = (id: string, size: number = 32) => {
    switch (id) {
      case 'github':
        return <svg width={size} height={size} viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
      case 'x':
        return <svg width={size - 6} height={size - 6} viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
      case 'instagram':
        return <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/><circle cx="18" cy="6" r="1.5" fill="white"/></svg>;
      case 'tiktok':
        return <svg width={size - 6} height={size - 6} viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>;
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

  const getExpandedAnimClass = () => {
    switch (expandedAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const getGalleryAnimClass = () => {
    switch (galleryAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const getNotesAnimClass = () => {
    switch (notesAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const getImageAnimClass = () => {
    switch (imageAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  };

  const miniIconSize = isMobile ? 18 : 22;
  const folderIconSize = isMobile ? 48 : 58;

  return (
    <>
      <style>{`
        * { -webkit-tap-highlight-color: transparent; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - iPHONE-STYLE SCROLL LOCK                                     */
        /* Lock vertical scroll on main page, preserve horizontal swipe navigation         */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .work-page {
          /* LOCK vertical scroll - iPhone home screen style */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          /* Allow horizontal touch for swipe navigation */
          touch-action: pan-x;
        }
        
        .work-page.overlay-open {
          touch-action: none;
          overflow: hidden;
        }
        
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
        .folder-wrapper:nth-child(3) .folder-icon { transition-delay: 120ms; }
        .folder-wrapper:nth-child(4) .folder-icon { transition-delay: 180ms; }
        
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          width: 95px;
          height: 95px;
          position: relative;
          z-index: 5;
        }
        
        .folder-preview-2 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          height: auto;
          align-content: center;
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
        .folder-wrapper:nth-child(3) .folder-name { transition-delay: 180ms; }
        .folder-wrapper:nth-child(4) .folder-name { transition-delay: 240ms; }
        
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
        
        .folder-apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          touch-action: none;
        }
        
        .folder-app {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          text-decoration: none;
          opacity: 0;
          transform: translateZ(0) scale(0.7) translateY(12px);
          transition: none;
          touch-action: none;
        }
        
        .folder-overlay.active .folder-app {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.exiting .folder-app {
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(5px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .folder-overlay.active .folder-app:nth-child(1) { transition-delay: 0.04s; }
        .folder-overlay.active .folder-app:nth-child(2) { transition-delay: 0.07s; }
        .folder-overlay.active .folder-app:nth-child(3) { transition-delay: 0.10s; }
        .folder-overlay.active .folder-app:nth-child(4) { transition-delay: 0.13s; }
        
        .folder-app-icon {
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
          z-index: 5;
        }
        
        .folder-app-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
        }
        
        .service-expanded {
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
          padding-top: clamp(80px, 15vh, 150px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: none;
        }
        
        .service-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .service-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .service-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .service-expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateZ(0) scale(0.88);
          transition: none;
        }
        
        .service-expanded.active .service-expanded-inner {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .service-expanded.exiting .service-expanded-inner {
          opacity: 0;
          transform: translateZ(0) scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .service-expanded-icon {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.08));
        }
        
        .service-expanded-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 22px;
          font-weight: 300;
          color: #FFFFFF;
          margin-bottom: 14px;
          letter-spacing: 0.03em;
        }
        
        .service-expanded-desc {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #FFFFFF;
          max-width: 300px;
          text-align: center;
          line-height: 1.75;
        }
        
        .service-expanded-close {
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
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .service-expanded.active .service-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s;
        }
        
        .service-expanded.exiting .service-expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .media-overlay {
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
        
        .media-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .media-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .media-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .media-overlay-bg {
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
        
        .media-container {
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
        
        .media-overlay.active .media-container {
          opacity: 1;
          transform: translateZ(0);
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.02s;
        }
        
        .media-overlay.exiting .media-container {
          opacity: 0;
          transform: translateZ(0);
          transition: opacity 0.25s ease;
        }
        
        .media-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          touch-action: manipulation;
        }
        
        .media-item {
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
        
        .media-overlay.active .media-item {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .media-overlay.exiting .media-item {
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(5px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .media-overlay.active .media-item:nth-child(1) { transition-delay: 0.04s; }
        .media-overlay.active .media-item:nth-child(2) { transition-delay: 0.07s; }
        .media-overlay.active .media-item:nth-child(3) { transition-delay: 0.10s; }
        .media-overlay.active .media-item:nth-child(4) { transition-delay: 0.13s; }
        .media-overlay.active .media-item:nth-child(5) { transition-delay: 0.16s; }
        
        .media-item-icon {
          width: 80px;
          height: 80px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.12), 0 6px 20px rgba(0, 0, 0, 0.45), 0 12px 40px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.2);
        }
        
        .media-item-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          border-radius: 18px 18px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .media-item-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .media-item-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          text-align: center;
          max-width: 76px;
        }
        
        .media-close {
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
        
        .media-overlay.active .media-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.15s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
        }
        
        .media-overlay.exiting .media-close {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .media-close svg { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); }
        
        .image-expanded {
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
        
        .image-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .image-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .image-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .image-expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          touch-action: manipulation;
          opacity: 0;
          transform: translateZ(0) scale(0.88);
          transition: none;
        }
        
        .image-expanded.active .image-expanded-inner {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .image-expanded.exiting .image-expanded-inner {
          opacity: 0;
          transform: translateZ(0) scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .image-expanded-content {
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
        }
        
        .image-expanded.active .image-expanded-content {
          opacity: 1;
          transform: translateZ(0) scale(1);
          transition: opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1) 0.12s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.12s;
        }
        
        .image-expanded.exiting .image-expanded-content {
          opacity: 0;
          transform: translateZ(0) scale(0.95);
          transition: opacity 0.2s ease, transform 0.25s ease;
        }
        
        .image-expanded-content img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .image-expanded-close {
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
        
        .image-expanded.active .image-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s;
        }
        
        .image-expanded.exiting .image-expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .image-expanded-close svg { filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6)); }
        
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
        
        @media (min-width: 600px) {
          .folders-grid { gap: 48px 44px; max-width: 400px; }
          .folder-icon { width: 145px; height: 145px; border-radius: 32px; }
          .folder-preview { width: 120px; height: 120px; gap: 7px; }
          .folder-mini-icon { width: 56px; height: 56px; border-radius: 13px; }
          .folder-name { font-size: 13px; }
          .folder-container { padding: 28px; }
          .folder-apps-grid { gap: 20px; }
          .folder-app-icon { width: 80px; height: 80px; border-radius: 18px; }
          .media-grid { gap: 24px; }
          .media-item-icon { width: 90px; height: 90px; border-radius: 20px; }
          .media-item-name { font-size: 13px; max-width: 95px; }
          .media-container { padding: 32px; border-radius: 30px; }
          .image-expanded-content { width: 340px; height: 340px; border-radius: 26px; }
          .service-expanded-icon { width: 180px; height: 180px; }
          .service-expanded-title { font-size: 26px; }
          .service-expanded-desc { font-size: 15px; max-width: 360px; }
        }
        
        @media (min-width: 900px) {
          .folders-grid { gap: 54px 50px; max-width: 480px; }
          .folder-icon { width: 175px; height: 175px; border-radius: 38px; }
          .folder-preview { width: 145px; height: 145px; gap: 8px; }
          .folder-mini-icon { width: 68px; height: 68px; border-radius: 15px; }
          .folder-name { font-size: 14px; }
          .folder-container { padding: 36px; }
          .folder-apps-grid { gap: 26px; }
          .folder-app-icon { width: 95px; height: 95px; border-radius: 22px; }
        }
      `}</style>

      <div className={`work-page ${folderAnimState !== 'idle' || expandedAnimState !== 'idle' || galleryAnimState !== 'idle' || notesAnimState !== 'idle' || imageAnimState !== 'idle' ? 'overlay-open' : ''}`} style={{ minHeight: "100vh", backgroundColor: "#0A0A0A", paddingTop: "clamp(100px, 15vh, 160px)", paddingBottom: "100px", paddingLeft: "20px", paddingRight: "20px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
        <div className="folders-grid">
          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('apps')}>
              <div className="folder-preview">
                {appsItems.map((app) => (
                  <div key={app.id} className="folder-mini-icon" style={{ background: `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})`, '--glow-color': app.glow } as React.CSSProperties}>
                    {renderAppMiniIcon(app.id, miniIconSize)}
                  </div>
                ))}
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Apps</span>
          </div>

          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('services')}>
              <div className="folder-preview">
                {servicesItems.map((service) => (
                  <div key={service.id} className="folder-mini-icon" style={{ background: `linear-gradient(145deg, ${service.color[0]}, ${service.color[1]})`, '--glow-color': service.glow } as React.CSSProperties}>
                    {renderServiceMiniIcon(service.id, miniIconSize)}
                  </div>
                ))}
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Services</span>
          </div>

          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('entertainment')}>
              <div className="folder-preview folder-preview-2">
                <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #7C3AED, #4C1D95)', '--glow-color': 'rgba(139, 92, 246, 0.3)' } as React.CSSProperties}>
                  <svg width={miniIconSize} height={miniIconSize} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="8" cy="8" r="2" fill="white" opacity="0.8"/><path d="M3 16l5-5 4 4 5-5 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/></svg>
                </div>
                <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #F59E0B, #B45309)', '--glow-color': 'rgba(245, 158, 11, 0.3)' } as React.CSSProperties}>
                  <svg width={miniIconSize} height={miniIconSize} viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" fill="white" opacity="0.95"/><path d="M8 7h8M8 11h6M8 15h4" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/></svg>
                </div>
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Media</span>
          </div>

          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('social')}>
              <div className="folder-preview">
                {socialLinks.map((social) => (
                  <div key={social.id} className="folder-mini-icon" style={{ background: social.id === 'instagram' ? 'linear-gradient(145deg, #833ab4, #fd1d1d, #fcb045)' : `linear-gradient(145deg, ${social.color[0]}, ${social.color[1]})`, '--glow-color': social.glow } as React.CSSProperties}>
                    {renderSocialMiniIcon(social.id, miniIconSize - 2)}
                  </div>
                ))}
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Social</span>
          </div>
        </div>
      </div>

      {/* Apps Folder */}
      {openFolder === 'apps' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              {appsItems.map((app) => (
                <Link key={app.id} href={app.href} className="folder-app" onClick={restoreScroll}>
                  <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})` }}>
                    {app.id === 'trade69' && <Trade69Icon3D size={folderIconSize} />}
                    {app.id === 'megaagent' && <MegaAgentIcon3D size={folderIconSize} />}
                    {app.id === 'octopus' && <OctopusIcon3D size={folderIconSize} />}
                    {app.id === 'overmind' && <OvermindIcon3D size={folderIconSize} />}
                  </div>
                  <span className="folder-app-name">{app.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Folder */}
      {openFolder === 'services' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              {servicesItems.map((service, index) => (
                <div key={service.id} className="folder-app" onClick={() => handleOpenServiceWithBridge(index)}>
                  <div className="folder-app-icon" style={{ background: `linear-gradient(145deg, ${service.color[0]}, ${service.color[1]})` }}>
                    {renderServiceIcon(service.id, folderIconSize * 0.75)}
                  </div>
                  <span className="folder-app-name">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Entertainment Folder */}
      {openFolder === 'entertainment' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              <div className="folder-app" onClick={handleOpenGalleryWithBridge}>
                <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #7C3AED, #4C1D95)' }}>
                  <svg width="36" height="36" viewBox="0 0 60 60" fill="none"><rect x="8" y="8" width="44" height="44" rx="4" stroke="white" strokeWidth="2" opacity="0.9"/><circle cx="20" cy="20" r="5" fill="white" opacity="0.8"/><path d="M8 42l12-12 10 10 12-12 10 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/></svg>
                </div>
                <span className="folder-app-name">Gallery</span>
              </div>
              <div className="folder-app" onClick={handleOpenNotesWithBridge}>
                <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #F59E0B, #B45309)' }}>
                  <svg width="36" height="36" viewBox="0 0 60 60" fill="none"><rect x="10" y="6" width="40" height="48" rx="4" fill="white" opacity="0.95"/><path d="M18 18h24M18 28h20M18 38h14" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/><rect x="10" y="6" width="40" height="8" rx="4" fill="#F59E0B" opacity="0.3"/></svg>
                </div>
                <span className="folder-app-name">Notes</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Folder */}
      {openFolder === 'social' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              {socialLinks.map((social) => (
                <Link key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="folder-app" onClick={restoreScroll}>
                  <div className="folder-app-icon" style={{ background: social.id === 'instagram' ? 'linear-gradient(145deg, #833ab4, #fd1d1d, #fcb045)' : `linear-gradient(145deg, ${social.color[0]}, ${social.color[1]})` }}>
                    {renderSocialIcon(social.id, 32)}
                  </div>
                  <span className="folder-app-name">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Service Expanded Views */}
      {servicesItems.map((service, index) => (
        <div key={service.id} className={`service-expanded ${expandedService === index ? getExpandedAnimClass() : ''}`}>
          <div className="service-expanded-inner">
            <div className="service-expanded-icon">{renderServiceIcon(service.id, isMobile ? 100 : 140)}</div>
            <div className="service-expanded-title">{service.name}</div>
            <div className="service-expanded-desc">{service.desc}</div>
            <button className="service-expanded-close" onClick={handleCloseService}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      ))}

      {/* Gallery Overlay */}
      {galleryOpen && (
        <div className={`media-overlay ${getGalleryAnimClass()}`}>
          <div className="media-overlay-bg" onClick={handleCloseGallery} />
          <div className="media-container" onClick={handleCloseGallery}>
            <div className="media-grid" onClick={(e) => e.stopPropagation()}>
              {galleryItems.map((item, i) => (
                <div key={i} className="media-item" onClick={() => handleOpenImage(item)}>
                  <div className="media-item-icon"><img src={item.src} alt={item.name} /></div>
                  <span className="media-item-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Notes Overlay */}
      {notesOpen && (
        <div className={`media-overlay ${getNotesAnimClass()}`}>
          <div className="media-overlay-bg" onClick={handleCloseNotes} />
          <div className="media-container" onClick={handleCloseNotes}>
            <div className="media-grid" onClick={(e) => e.stopPropagation()}>
              {notesItems.slice(0, 4).map((item, i) => (
                <div key={i} className="media-item" onClick={() => handleOpenImage(item)}>
                  <div className="media-item-icon"><img src={item.src} alt={item.name} /></div>
                  <span className="media-item-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Transition Bridge */}
      <div className={`transition-bridge ${bridgePhase}`}>
        <div className="bridge-spinner" />
      </div>

      {/* Image Expanded View */}
      {expandedImage && (
        <div className={`image-expanded ${getImageAnimClass()}`}>
          <div className="image-expanded-inner">
            <div className="image-expanded-content"><img src={expandedImage.src} alt={expandedImage.name} /></div>
            <div className="image-expanded-close" onClick={handleCloseImage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}