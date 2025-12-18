"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic imports for 3D components
const QuantumManifold = dynamic(() => import("@/components/QuantumManifold"), { ssr: false });
const QuantumSphere = dynamic(() => import("@/components/QuantumSphere"), { ssr: false });

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - PREMIUM ICON SYSTEM
// Real images for Apps AND Services
// ═══════════════════════════════════════════════════════════════════════════════

const appsItems = [
  { id: 'trade69', name: 'Trade69', href: '/work/trade69', color: ['#0a1f1c', '#040d0b'], glow: 'rgba(45, 120, 100, 0.35)', image: '/images/t69app3.png' },
  { id: 'megaagent', name: 'MegaAgent', href: '/work/megaagent', color: ['#1a0f2e', '#0d0718'], glow: 'rgba(120, 80, 180, 0.3)' },
  { id: 'octopus', name: 'Octopus', href: '/work/octopus', color: ['#0a1a24', '#040c12'], glow: 'rgba(60, 140, 180, 0.35)', image: '/images/octopusapp2.png' },
  { id: 'overmind', name: 'Overmind', href: '/work/overmind', color: ['#1a1408', '#0d0a04'], glow: 'rgba(180, 140, 60, 0.35)', image: '/images/twinkle.png' },
];

const servicesItems = [
  {
    id: 'website',
    name: 'Web Apps',
    color: ['#1a0f2e', '#0d0718'],
    glow: 'rgba(100, 80, 160, 0.3)',
    desc: 'Full-stack applications with modern frameworks. SEO, responsive design, authentication, databases, and deployment.',
    appImage: '/images/webapplictionsapp.jpg',
    pageImage: '/images/webapplictionspage.jpg'
  },
  {
    id: 'dashboard',
    name: 'Dashboards',
    color: ['#2a0f1e', '#150810'],
    glow: 'rgba(160, 80, 120, 0.3)',
    desc: 'Real-time data visualization and analytics. Interactive charts, live data streams, and beautiful interfaces.',
    appImage: '/images/dashboardapp.jpg',
    pageImage: '/images/dashboardpage.jpg'
  },
  {
    id: 'api',
    name: 'API',
    color: ['#0a1a14', '#050d0a'],
    glow: 'rgba(80, 160, 120, 0.3)',
    desc: 'REST and GraphQL APIs. Authentication, rate limiting, documentation, and third-party integrations.',
    appImage: '/images/apiintegrationapp.jpg',
    pageImage: '/images/apiintegrationapp.jpg'
  },
  {
    id: 'llm',
    name: 'LLM',
    color: ['#1a140a', '#0d0a05'],
    glow: 'rgba(160, 120, 80, 0.3)',
    desc: 'AI integrations and middleware. Prompt engineering, tool orchestration, and multi-model pipelines.',
    appImage: '/images/llmapp.jpg',
    pageImage: '/images/llmpage.jpg'
  },
];

const socialLinks = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/manfromnowhere143', color: ['#161b22', '#0d1117'], glow: 'rgba(200, 200, 200, 0.15)' },
  { id: 'x', name: 'X', url: 'https://x.com/satori936', color: ['#0a0a0a', '#000000'], glow: 'rgba(255, 255, 255, 0.12)' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/overmind143', color: ['#4a1942', '#1a0818'], glow: 'rgba(180, 60, 140, 0.3)' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@danielwahnich', color: ['#0a0a0a', '#000000'], glow: 'rgba(255, 255, 255, 0.12)' },
];

// 3D Interactive items - Sphere, Manifold, MetatronAI
const interactiveItems = [
  { id: 'sphere', name: 'Sphere', image: '/images/sperhaapp2.png', glow: 'rgba(100, 180, 255, 0.3)' },
  { id: 'manifold', name: 'Manifold', image: '/images/mainfoldapp2.png', glow: 'rgba(180, 100, 255, 0.3)' },
  { id: 'metatronai', name: 'MetatronAI', url: 'https://metatron-genesis369.vercel.app', glow: 'rgba(255, 200, 100, 0.3)' },
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
  // 3D Interactive states
  const [expandedInteractive, setExpandedInteractive] = useState<string | null>(null);
  const [interactiveAnimState, setInteractiveAnimState] = useState<AnimationState>('idle');

  const loadedImagesRef = useRef<Set<string>>(new Set());
  const folderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const expandedTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const notesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bridgeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const interactiveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      if (expandedTimeoutRef.current) clearTimeout(expandedTimeoutRef.current);
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
      if (notesTimeoutRef.current) clearTimeout(notesTimeoutRef.current);
      if (imageTimeoutRef.current) clearTimeout(imageTimeoutRef.current);
      if (bridgeTimeoutRef.current) clearTimeout(bridgeTimeoutRef.current);
      if (interactiveTimeoutRef.current) clearTimeout(interactiveTimeoutRef.current);
      restoreScroll();
    };
  }, []);

  useEffect(() => {
    const isOpen = folderAnimState !== 'idle' || expandedAnimState !== 'idle' ||
                   galleryAnimState !== 'idle' || notesAnimState !== 'idle' ||
                   imageAnimState !== 'idle' || interactiveAnimState !== 'idle' || bridgePhase !== 'idle';

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const blockAllTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.media-container')) return;
        if (target.closest('.image-expanded-content')) return;
        if (target.tagName === 'CANVAS') return; // Allow 3D canvas interaction
        if (target.closest('.interactive-content')) return; // Allow interactive content
        e.preventDefault();
        e.stopPropagation();
      };

      const blockWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.media-container')) return;
        if (target.closest('.image-expanded-content')) return;
        if (target.tagName === 'CANVAS') return; // Allow 3D canvas interaction
        if (target.closest('.interactive-content')) return; // Allow interactive content
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
      restoreScroll();
    }

    return () => {
      if ((window as any).__workSolidRockCleanup) {
        (window as any).__workSolidRockCleanup();
      }
    };
  }, [folderAnimState, expandedAnimState, galleryAnimState, notesAnimState, imageAnimState, interactiveAnimState, bridgePhase]);

  // Special handling for 3D Interactive - allow full canvas interaction
  useEffect(() => {
    if (interactiveAnimState === 'active' && expandedInteractive) {
      // Enable touch on body but only for canvas
      document.body.style.touchAction = 'none';

      const allowCanvasTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        // Only allow canvas elements to receive touch
        if (target.tagName === 'CANVAS') return;
        // Block everything else inside the interactive expanded
        if (target.closest('.interactive-expanded') && !target.closest('.interactive-close')) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchstart', allowCanvasTouch, { passive: false });

      return () => {
        document.body.style.touchAction = '';
        document.removeEventListener('touchstart', allowCanvasTouch);
      };
    }
  }, [interactiveAnimState, expandedInteractive]);

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

  const handleOpenServiceWithBridge = useCallback((index: number) => {
    if (expandedAnimState !== 'idle' || bridgePhase !== 'idle') return;

    // Show bridge immediately - covers everything
    setBridgePhase('loading');

    // Wait for bridge to be fully visible before closing folder
    setTimeout(() => {
      handleCloseFolder();
    }, 150);

    // Then open service after folder is closing
    bridgeTimeoutRef.current = setTimeout(() => {
      setExpandedService(index);
      setExpandedAnimState('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setExpandedAnimState('active');
          // Fade out bridge smoothly
          setBridgePhase('transitioning');
          setTimeout(() => setBridgePhase('idle'), 500);
        });
      });
    }, 450);
  }, [expandedAnimState, bridgePhase, handleCloseFolder]);

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

    // Show bridge immediately
    setBridgePhase('loading');

    // Close folder while bridge is visible
    setTimeout(() => {
      handleCloseFolder();
    }, 150);

    // Set up content BEHIND the bridge (it will be invisible but ready)
    bridgeTimeoutRef.current = setTimeout(() => {
      setGalleryOpen(true);
      setGalleryAnimState('entering');

      // Let content start animating behind the bridge
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setGalleryAnimState('active');

          // Small delay to let content animation start, THEN fade bridge
          setTimeout(() => {
            setBridgePhase('transitioning');
            setTimeout(() => setBridgePhase('idle'), 600);
          }, 100);
        });
      });
    }, 400);
  }, [galleryAnimState, bridgePhase, handleCloseFolder]);

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

    // Show bridge immediately
    setBridgePhase('loading');

    // Close folder while bridge is visible
    setTimeout(() => {
      handleCloseFolder();
    }, 150);

    // Set up content BEHIND the bridge
    bridgeTimeoutRef.current = setTimeout(() => {
      setNotesOpen(true);
      setNotesAnimState('entering');

      // Let content start animating behind the bridge
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNotesAnimState('active');

          // Small delay to let content animation start, THEN fade bridge
          setTimeout(() => {
            setBridgePhase('transitioning');
            setTimeout(() => setBridgePhase('idle'), 600);
          }, 100);
        });
      });
    }, 400);
  }, [notesAnimState, bridgePhase, handleCloseFolder]);

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
    const isAlreadyLoaded = loadedImagesRef.current.has(image.src);
    if (isAlreadyLoaded) {
      setExpandedImage(image);
      setImageAnimState('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setImageAnimState('active'));
      });
    } else {
      setBridgePhase('loading');
      const img = new Image();
      const showImage = () => {
        loadedImagesRef.current.add(image.src);
        setExpandedImage(image);
        setImageAnimState('entering');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setImageAnimState('active');
            setBridgePhase('transitioning');
            setTimeout(() => setBridgePhase('idle'), 450);
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

  // 3D Interactive handlers
  const handleOpenInteractiveWithBridge = useCallback((id: string) => {
    if (interactiveAnimState !== 'idle' || bridgePhase !== 'idle') return;

    // Show bridge immediately
    setBridgePhase('loading');

    // Close folder while bridge is visible
    setTimeout(() => {
      handleCloseFolder();
    }, 150);

    // Set up content BEHIND the bridge
    bridgeTimeoutRef.current = setTimeout(() => {
      setExpandedInteractive(id);
      setInteractiveAnimState('entering');

      // Let content start animating behind the bridge
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setInteractiveAnimState('active');

          // Small delay to let content animation start, THEN fade bridge
          setTimeout(() => {
            setBridgePhase('transitioning');
            setTimeout(() => setBridgePhase('idle'), 600);
          }, 100);
        });
      });
    }, 400);
  }, [interactiveAnimState, bridgePhase, handleCloseFolder]);

  const handleCloseInteractive = useCallback(() => {
    if (interactiveAnimState !== 'active') return;
    setInteractiveAnimState('exiting');
    interactiveTimeoutRef.current = setTimeout(() => {
      setExpandedInteractive(null);
      setInteractiveAnimState('idle');
    }, 400);
  }, [interactiveAnimState]);

  const getInteractiveAnimClass = useCallback(() => {
    switch (interactiveAnimState) {
      case 'entering': return 'entering';
      case 'active': return 'active';
      case 'exiting': return 'exiting';
      default: return '';
    }
  }, [interactiveAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // ICON RENDERERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const renderAppMiniIcon = (app: typeof appsItems[0], size: number = 18) => {
    if (app.image) {
      return <img src={app.image} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />;
    }
    if (app.id === 'megaagent') {
      // State of the art MegaAgent icon - Neural network constellation
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          {/* Central brain/core */}
          <circle cx="12" cy="12" r="3.5" fill="url(#megaMiniGrad)" />
          {/* Orbiting nodes */}
          <circle cx="12" cy="4" r="1.8" fill="white" opacity="0.9"/>
          <circle cx="19" cy="9" r="1.5" fill="white" opacity="0.75"/>
          <circle cx="19" cy="16" r="1.5" fill="white" opacity="0.75"/>
          <circle cx="12" cy="20" r="1.8" fill="white" opacity="0.9"/>
          <circle cx="5" cy="16" r="1.5" fill="white" opacity="0.75"/>
          <circle cx="5" cy="9" r="1.5" fill="white" opacity="0.75"/>
          {/* Connection lines */}
          <path d="M12 5.8V8.5M17.5 9.5L15 10.8M17.5 15.5L15 13.8M12 18.2V15.5M6.5 15.5L9 13.8M6.5 9.5L9 10.8" stroke="white" strokeWidth="0.8" opacity="0.35"/>
          <defs>
            <radialGradient id="megaMiniGrad" cx="0.3" cy="0.3" r="0.7">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#b8a0ff"/>
            </radialGradient>
          </defs>
        </svg>
      );
    }
    return null;
  };

  const renderServiceMiniIcon = (service: typeof servicesItems[0], size: number = 18) => {
    if (service.appImage) {
      return <img src={service.appImage} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />;
    }
    return null;
  };

  const renderSocialMiniIcon = (id: string, size: number = 16) => {
    switch (id) {
      case 'github': return <svg width={size} height={size} viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
      case 'x': return <svg width={size - 2} height={size - 2} viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
      case 'instagram': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" opacity="0.9"/><circle cx="18" cy="6" r="1" fill="white" opacity="0.9"/></svg>;
      case 'tiktok': return <svg width={size - 2} height={size - 2} viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>;
      default: return null;
    }
  };

  // MetatronAI mini icon - Sacred geometry dodecahedron
  const renderMetatronMini = (size: number = 18) => {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="0.8" opacity="0.3"/>
        <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="0.8" opacity="0.4"/>
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="0.8" opacity="0.6"/>
        <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/>
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="white" strokeWidth="0.6" opacity="0.25"/>
      </svg>
    );
  };

  // MetatronAI full icon for folder
  const renderMetatronFull = (size: number = 36) => {
    return (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="24" stroke="white" strokeWidth="1" opacity="0.2"/>
        <circle cx="30" cy="30" r="18" stroke="white" strokeWidth="1" opacity="0.3"/>
        <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="1" opacity="0.4"/>
        <circle cx="30" cy="30" r="6" stroke="white" strokeWidth="1" opacity="0.6"/>
        <circle cx="30" cy="30" r="3" fill="white" opacity="0.9"/>
        <path d="M30 6v48M6 30h48M11 11l38 38M49 11L11 49" stroke="white" strokeWidth="0.8" opacity="0.2"/>
        {/* Hexagonal points */}
        <circle cx="30" cy="6" r="2" fill="white" opacity="0.6"/>
        <circle cx="30" cy="54" r="2" fill="white" opacity="0.6"/>
        <circle cx="6" cy="30" r="2" fill="white" opacity="0.6"/>
        <circle cx="54" cy="30" r="2" fill="white" opacity="0.6"/>
        <circle cx="11" cy="11" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="49" cy="49" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="49" cy="11" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="11" cy="49" r="1.5" fill="white" opacity="0.4"/>
      </svg>
    );
  };

  const renderAppFullIcon = (app: typeof appsItems[0], size: number = 48) => {
    if (app.image) {
      return <img src={app.image} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />;
    }
    if (app.id === 'megaagent') {
      // State of the art MegaAgent icon - Neural constellation with glow
      return (
        <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
          {/* Outer glow ring */}
          <circle cx="30" cy="30" r="26" stroke="url(#megaRingGrad)" strokeWidth="0.5" opacity="0.3"/>

          {/* Central core with gradient */}
          <circle cx="30" cy="30" r="9" fill="url(#megaCoreGrad)" />
          <circle cx="30" cy="30" r="9" fill="url(#megaShine)" />

          {/* Primary orbital nodes */}
          <circle cx="30" cy="8" r="4.5" fill="white" opacity="0.95">
            <animate attributeName="opacity" values="0.95;0.7;0.95" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="49" cy="20" r="3.5" fill="white" opacity="0.8"/>
          <circle cx="49" cy="42" r="3.5" fill="white" opacity="0.8"/>
          <circle cx="30" cy="52" r="4.5" fill="white" opacity="0.95">
            <animate attributeName="opacity" values="0.95;0.7;0.95" dur="3s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
          <circle cx="11" cy="42" r="3.5" fill="white" opacity="0.8"/>
          <circle cx="11" cy="20" r="3.5" fill="white" opacity="0.8"/>

          {/* Secondary micro nodes */}
          <circle cx="40" cy="12" r="2" fill="white" opacity="0.5"/>
          <circle cx="20" cy="12" r="2" fill="white" opacity="0.5"/>
          <circle cx="40" cy="48" r="2" fill="white" opacity="0.5"/>
          <circle cx="20" cy="48" r="2" fill="white" opacity="0.5"/>

          {/* Connection paths */}
          <path d="M30 12.5V21M45.5 21.5L38 26M45.5 40.5L38 35M30 47.5V39M14.5 40.5L22 35M14.5 21.5L22 26"
                stroke="white" strokeWidth="1.2" opacity="0.25" strokeLinecap="round"/>

          {/* Cross connections */}
          <path d="M38 12.5L35 21M22 12.5L25 21M38 47.5L35 39M22 47.5L25 39"
                stroke="white" strokeWidth="0.8" opacity="0.15" strokeLinecap="round"/>

          <defs>
            <radialGradient id="megaCoreGrad" cx="0.3" cy="0.3" r="0.8">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="60%" stopColor="#c4b5fd"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </radialGradient>
            <radialGradient id="megaShine" cx="0.35" cy="0.35" r="0.5">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="megaRingGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c4b5fd"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      );
    }
    return null;
  };

  const renderServiceFullIcon = (service: typeof servicesItems[0]) => {
    if (service.appImage) {
      return <img src={service.appImage} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />;
    }
    return null;
  };

  const renderSocialIcon = (id: string, size: number = 32) => {
    switch (id) {
      case 'github': return <svg width={size} height={size} viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
      case 'x': return <svg width={size - 6} height={size - 6} viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
      case 'instagram': return <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/><circle cx="18" cy="6" r="1.5" fill="white"/></svg>;
      case 'tiktok': return <svg width={size - 6} height={size - 6} viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>;
      default: return null;
    }
  };

  const getFolderAnimClass = () => folderAnimState === 'idle' ? '' : folderAnimState;
  const getExpandedAnimClass = () => expandedAnimState === 'idle' ? '' : expandedAnimState;
  const getGalleryAnimClass = () => galleryAnimState === 'idle' ? '' : galleryAnimState;
  const getNotesAnimClass = () => notesAnimState === 'idle' ? '' : notesAnimState;
  const getImageAnimClass = () => imageAnimState === 'idle' ? '' : imageAnimState;

  const miniIconSize = isMobile ? 18 : 22;
  const folderIconSize = isMobile ? 48 : 58;

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - LOCKED SCREEN (NO SCROLL)                                    */
        /* Like iPhone home screen - fixed, no bounce                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        html, body {
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          overflow: hidden;
          touch-action: none;
        }
        
        * { -webkit-tap-highlight-color: transparent; }
        
        .work-page { 
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #050506;
          overflow: hidden;
          overscroll-behavior: none;
          touch-action: none;
          -webkit-backface-visibility: hidden; 
          backface-visibility: hidden;
        }
        
        .work-page.overlay-open { 
          touch-action: none; 
        }
        
        .folders-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 36px 32px; max-width: 280px; margin: 0 auto; }
        .folder-wrapper { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .folder-icon { position: relative; width: 115px; height: 115px; border-radius: 28px; background: rgba(40, 40, 45, 0.65); backdrop-filter: blur(30px) saturate(180%); -webkit-backdrop-filter: blur(30px) saturate(180%); display: flex; align-items: center; justify-content: center; cursor: pointer; overflow: hidden; opacity: 0; transform: translateZ(0) scale(0.85) translateY(15px); transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, opacity 0.5s ease; box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 0 40px rgba(0, 0, 0, 0.5), 0 8px 32px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 -1px 1px rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.04); -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        .folder-icon::before { content: ''; position: absolute; top: 0; left: 8%; right: 8%; height: 45%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 100%); border-radius: 28px 28px 50% 50%; pointer-events: none; z-index: 10; }
        .folder-icon.loaded { opacity: 1; transform: translateZ(0) scale(1) translateY(0); }
        .folder-wrapper:nth-child(1) .folder-icon { transition-delay: 0ms; }
        .folder-wrapper:nth-child(2) .folder-icon { transition-delay: 60ms; }
        .folder-wrapper:nth-child(3) .folder-icon { transition-delay: 120ms; }
        .folder-wrapper:nth-child(4) .folder-icon { transition-delay: 180ms; }
        .folder-preview { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; width: 95px; height: 95px; position: relative; z-index: 5; }
        .folder-preview-2 { grid-template-columns: repeat(2, 1fr); grid-template-rows: 1fr; height: auto; align-content: center; }
        .folder-mini-icon { width: 44px; height: 44px; border-radius: 11px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: 0 0 20px var(--glow-color, rgba(255, 255, 255, 0.08)), 0 4px 12px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3); }
        .folder-mini-icon::before { content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 45%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%); border-radius: 11px 11px 50% 50%; pointer-events: none; z-index: 5; }
        .folder-mini-icon.has-image::before { display: none; }
        .folder-mini-placeholder { width: 44px; height: 44px; }
        .folder-name { font-size: 12px; font-weight: 400; color: #FAFAF8; letter-spacing: 0.02em; text-align: center; opacity: 0; transform: translateY(8px); transition: opacity 0.4s ease, transform 0.4s ease; text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8); }
        .folder-name.loaded { opacity: 1; transform: translateY(0); }
        .folder-name-future { color: rgba(255, 255, 255, 0.3); }
        .folder-wrapper:nth-child(1) .folder-name { transition-delay: 60ms; }
        .folder-wrapper:nth-child(2) .folder-name { transition-delay: 120ms; }
        .folder-wrapper:nth-child(3) .folder-name { transition-delay: 180ms; }
        .folder-wrapper:nth-child(4) .folder-name { transition-delay: 240ms; }
        .folder-wrapper:nth-child(5) .folder-name { transition-delay: 300ms; }
        .folder-wrapper:nth-child(6) .folder-name { transition-delay: 360ms; }
        
        /* Future folder placeholder */
        .folder-icon-future { background: rgba(30, 30, 35, 0.4); border: 1px dashed rgba(255, 255, 255, 0.1); cursor: default; }
        .folder-icon-future::before { display: none; }
        .folder-icon-future:hover { transform: translateZ(0) scale(1) translateY(0); }
        .folder-future-content { display: flex; align-items: center; justify-content: center; }
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FOLDER OVERLAY                                               */
        /* Identical to Creative page - Pure Apple elegance, Steve Jobs proud              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
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
        
        .folder-overlay.entering { visibility: visible; pointer-events: auto; }
        .folder-overlay.active { visibility: visible; pointer-events: auto; }
        .folder-overlay.exiting { visibility: visible; pointer-events: none; }
        
        .folder-overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(5, 5, 6, 0.92);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          touch-action: none;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .folder-overlay.active .folder-overlay-bg { opacity: 1; }
        .folder-overlay.exiting .folder-overlay-bg { opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .folder-container {
          position: relative;
          z-index: 2;
          background: transparent;
          padding: 24px;
          opacity: 0;
          transform: translateZ(0);
          transition: none;
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
        
        .folder-apps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; touch-action: none; }
        .folder-apps-grid-2 { grid-template-columns: repeat(2, 1fr); max-width: 200px; margin: 0 auto; }
        
        .folder-app {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          opacity: 0;
          transform: translateZ(0) scale(0.7) translateY(12px);
          transition: none;
          touch-action: none;
        }
        
        .folder-app-placeholder { width: 72px; height: 92px; }
        
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
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - ALIVE ICONS                                                  */
        /* Breathing glow, hover lift, active press - Pure life                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .folder-app-icon {
          width: 72px; height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 0 25px var(--glow-color, rgba(100, 100, 100, 0.2)),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 25px rgba(0, 0, 0, 0.25),
            0 16px 50px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          animation: iconBreathe 4s ease-in-out infinite;
          animation-delay: var(--breathe-delay, 0s);
        }
        
        @keyframes iconBreathe {
          0%, 100% { box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 25px var(--glow-color, rgba(100, 100, 100, 0.2)), 0 4px 12px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.25), 0 16px 50px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.2); }
          50% { box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12), 0 0 35px var(--glow-color, rgba(100, 100, 100, 0.3)), 0 6px 16px rgba(0, 0, 0, 0.35), 0 10px 30px rgba(0, 0, 0, 0.3), 0 20px 60px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(0, 0, 0, 0.25); }
        }
        
        .folder-app-icon:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.15),
            0 0 40px var(--glow-color, rgba(100, 100, 100, 0.35)),
            0 8px 20px rgba(0, 0, 0, 0.4),
            0 16px 40px rgba(0, 0, 0, 0.35),
            0 24px 70px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.25),
            inset 0 -1px 1px rgba(0, 0, 0, 0.3);
          animation-play-state: paused;
        }
        
        .folder-app-icon:active {
          transform: translateY(2px) scale(0.95);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 20px var(--glow-color, rgba(100, 100, 100, 0.25)),
            0 2px 8px rgba(0, 0, 0, 0.3),
            0 4px 16px rgba(0, 0, 0, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -1px 1px rgba(0, 0, 0, 0.15);
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        
        .folder-app-icon::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 100%);
          border-radius: 18px 18px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .folder-app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1);
          pointer-events: none;
          z-index: 6;
        }
        
        .folder-app-icon.has-image::before {
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%);
        }
        
        .folder-app-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #FFFFFF;
          text-align: center;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - SERVICE EXPANDED                                             */
        /* Floating image, pure dark elegance, Leonardo da Vinci proud                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .service-expanded {
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
          padding-top: clamp(80px, 15vh, 150px);
          background: radial-gradient(ellipse at center, rgba(15, 15, 18, 0.98) 0%, rgba(5, 5, 6, 0.99) 100%);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          -webkit-touch-callout: none;
          user-select: none;
          overscroll-behavior: none;
        }
        
        .service-expanded::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          transform: translate(-50%, -60%);
          background: radial-gradient(circle, var(--service-glow, rgba(100, 100, 255, 0.08)) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        
        .service-expanded.active::before {
          opacity: 1;
        }
        
        .service-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .service-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1); }
        .service-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .service-expanded-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 24px;
          opacity: 0;
          transform: translateY(30px) scale(0.92);
          transition: none;
        }
        
        .service-expanded.active .service-expanded-content {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: opacity 0.6s cubic-bezier(0.32, 0.72, 0, 1) 0.1s, transform 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.1s;
        }
        
        .service-expanded.exiting .service-expanded-content {
          opacity: 0;
          transform: translateY(-20px) scale(0.96);
          transition: opacity 0.3s ease, transform 0.35s ease;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FLOATING SCREEN FRAME - White pearl background                                  */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .service-screen-frame {
          width: clamp(220px, 60vw, 280px);
          aspect-ratio: 16/11;
          border-radius: 16px;
          padding: 12px;
          margin-bottom: 24px;
          background: linear-gradient(165deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(245, 245, 247, 0.92) 50%,
            rgba(235, 235, 240, 0.9) 100%);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.1),
            0 12px 40px rgba(0, 0, 0, 0.25),
            0 30px 80px rgba(0, 0, 0, 0.3);
          position: relative;
          flex-shrink: 0;
        }
        
        .service-screen-frame::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%);
          border-radius: 16px 16px 0 0;
          pointer-events: none;
        }
        
        .service-hero-image {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.15),
            inset 0 0 0 1px rgba(0, 0, 0, 0.05);
        }
        
        .service-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TYPOGRAPHY - White and fully visible                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .service-expanded-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: clamp(24px, 5.5vw, 30px);
          font-weight: 200;
          color: #FFFFFF;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          text-align: center;
          opacity: 0;
          transform: translateY(12px);
          transition: none;
        }
        
        .service-expanded.active .service-expanded-title {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.45s ease 0.15s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.15s;
        }
        
        .service-expanded.exiting .service-expanded-title {
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .service-expanded-desc {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: clamp(12px, 3vw, 14px);
          font-weight: 300;
          color: #FFFFFF;
          text-align: center;
          line-height: 1.65;
          max-width: 300px;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(12px);
          transition: none;
        }
        
        .service-expanded.active .service-expanded-desc {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.45s ease 0.18s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.18s;
        }
        
        .service-expanded.exiting .service-expanded-desc {
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.2s ease, transform 0.25s ease;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FEATURE PILLS - White text, visible                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .service-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          max-width: 320px;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(12px);
          transition: none;
        }
        
        .service-expanded.active .service-features {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.45s ease 0.21s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.21s;
        }
        
        .service-expanded.exiting .service-features {
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .service-feature-pill {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 400;
          color: #FFFFFF;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* CLOSE BUTTON - Floating, minimal, no border                                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .service-expanded-close {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: -8px;
          opacity: 0;
          transform: scale(0.5) translateY(15px);
          transition: transform 0.2s ease;
        }
        
        .service-expanded.active .service-expanded-close {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition: opacity 0.4s ease 0.24s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.24s;
        }
        
        .service-expanded.exiting .service-expanded-close {
          opacity: 0;
          transform: scale(0.8) translateY(8px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .service-expanded-close:hover {
          transform: scale(1.1) translateY(0);
        }
        
        .service-expanded-close:active {
          transform: scale(0.92) translateY(0);
        }
        
        .service-expanded-close svg {
          width: 24px;
          height: 24px;
          color: #FFFFFF;
        }
        
        @media (min-width: 600px) {
          .service-screen-frame {
            width: clamp(300px, 40vw, 380px);
            border-radius: 20px;
            padding: 16px;
          }
          .service-screen-frame::before { border-radius: 20px 20px 0 0; }
          .service-hero-image { border-radius: 10px; }
          .service-expanded-title { font-size: 36px; }
          .service-expanded-desc { font-size: 15px; max-width: 360px; }
          .service-feature-pill { padding: 8px 16px; font-size: 12px; }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - MEDIA OVERLAY                                                */
        /* Identical styling - Pure Apple elegance                                         */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .media-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(100px, 18vh, 180px);
          visibility: hidden;
          pointer-events: none;
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .media-overlay.entering { visibility: visible; pointer-events: auto; }
        .media-overlay.active { visibility: visible; pointer-events: auto; }
        .media-overlay.exiting { visibility: visible; pointer-events: none; }
        
        .media-overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(5, 5, 6, 0.92);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          touch-action: manipulation;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
        }
        
        .media-overlay.active .media-overlay-bg { opacity: 1; }
        .media-overlay.exiting .media-overlay-bg { opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .media-container {
          position: relative;
          z-index: 2;
          background: transparent;
          padding: 24px;
          opacity: 0;
          transform: translateZ(0);
          transition: none;
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
        .media-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; touch-action: manipulation; }
        .media-item { display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; opacity: 0; transform: translateZ(0) scale(0.7) translateY(12px); transition: none; touch-action: manipulation; }
        .media-overlay.active .media-item { opacity: 1; transform: translateZ(0) scale(1) translateY(0); transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .media-overlay.exiting .media-item { opacity: 0; transform: translateZ(0) scale(0.85) translateY(5px); transition: opacity 0.15s ease, transform 0.2s ease; }
        .media-overlay.active .media-item:nth-child(1) { transition-delay: 0.04s; }
        .media-overlay.active .media-item:nth-child(2) { transition-delay: 0.07s; }
        .media-overlay.active .media-item:nth-child(3) { transition-delay: 0.10s; }
        .media-overlay.active .media-item:nth-child(4) { transition-delay: 0.13s; }
        .media-overlay.active .media-item:nth-child(5) { transition-delay: 0.16s; }
        .media-item-icon { width: 80px; height: 80px; border-radius: 18px; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; box-shadow: 0 0 25px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.5), 0 15px 50px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.25); }
        .media-item-icon::before { content: ''; position: absolute; top: 0; left: 8%; right: 8%; height: 35%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%); border-radius: 18px 18px 50% 50%; pointer-events: none; z-index: 10; }
        .media-item-icon img { width: 100%; height: 100%; object-fit: cover; }
        .media-item-name { font-size: 12px; font-weight: 400; color: #FFFFFF; text-align: center; max-width: 76px; }
        .media-close { position: relative; z-index: 2; margin-top: 24px; width: 48px; height: 48px; border-radius: 50%; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; transform: scale(0.5); transition: none; border: none; touch-action: manipulation; }
        .media-overlay.active .media-close { opacity: 1; transform: scale(1); transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.15s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s; }
        .media-overlay.exiting .media-close { opacity: 0; transform: scale(0.8); transition: opacity 0.15s ease, transform 0.2s ease; }
        .media-close svg { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); }
        .image-expanded { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #050506; z-index: 3000; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: clamp(80px, 15vh, 150px); opacity: 0; visibility: hidden; pointer-events: none; touch-action: none; -webkit-touch-callout: none; user-select: none; overscroll-behavior: none; }
        .image-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .image-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .image-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .image-expanded-inner { display: flex; flex-direction: column; align-items: center; touch-action: manipulation; opacity: 0; transform: translateZ(0) scale(0.88); transition: none; }
        .image-expanded.active .image-expanded-inner { opacity: 1; transform: translateZ(0) scale(1); transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s; }
        .image-expanded.exiting .image-expanded-inner { opacity: 0; transform: translateZ(0) scale(0.92); transition: opacity 0.25s ease, transform 0.3s ease; }
        .image-expanded-content { width: 280px; height: 280px; border-radius: 22px; overflow: hidden; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.08)) drop-shadow(0 25px 60px rgba(0, 0, 0, 0.7)); touch-action: manipulation; opacity: 0; transform: translateZ(0) scale(0.9); transition: none; }
        .image-expanded.active .image-expanded-content { opacity: 1; transform: translateZ(0) scale(1); transition: opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1) 0.12s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.12s; }
        .image-expanded.exiting .image-expanded-content { opacity: 0; transform: translateZ(0) scale(0.95); transition: opacity 0.2s ease, transform 0.25s ease; }
        .image-expanded-content img { width: 100%; height: 100%; object-fit: cover; }
        .image-expanded-close { margin-top: 40px; width: 52px; height: 52px; border-radius: 50%; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; border: none; touch-action: manipulation; z-index: 10; opacity: 0; transform: scale(0.5); transition: none; }
        .image-expanded.active .image-expanded-close { opacity: 1; transform: scale(1); transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s; }
        .image-expanded.exiting .image-expanded-close { opacity: 0; transform: scale(0.7); transition: opacity 0.15s ease, transform 0.2s ease; }
        .image-expanded-close svg { filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6)); }
        
        /* 3D Interactive Expanded */
        .interactive-expanded { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(5, 5, 6, 0.98); z-index: 3000; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: clamp(80px, 15vh, 150px); opacity: 0; visibility: hidden; pointer-events: none; }
        .interactive-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .interactive-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .interactive-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s ease; }
        .interactive-content { width: clamp(280px, 80vw, 400px); height: clamp(280px, 80vw, 400px); border-radius: 24px; overflow: hidden; opacity: 0; transform: scale(0.9); transition: none; touch-action: manipulation; }
        .interactive-content canvas { touch-action: manipulation; }
        .interactive-expanded.active .interactive-content { opacity: 1; transform: scale(1); transition: opacity 0.45s ease 0.1s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.1s; }
        .interactive-expanded.exiting .interactive-content { opacity: 0; transform: scale(0.95); transition: opacity 0.2s ease, transform 0.25s ease; }
        .interactive-close { margin-top: 40px; width: 52px; height: 52px; border-radius: 50%; background: transparent; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; transform: scale(0.5); transition: none; touch-action: manipulation; }
        .interactive-expanded.active .interactive-close { opacity: 0.8; transform: scale(1); transition: opacity: 0.35s ease 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s; }
        .interactive-expanded.exiting .interactive-close { opacity: 0; transform: scale(0.7); transition: opacity 0.15s ease; }
        .interactive-close:hover { opacity: 1; transform: scale(1.1); }
        .interactive-close:active { transform: scale(0.95); }
        
        .transition-bridge { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #050506; z-index: 2500; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: clamp(180px, 30vh, 280px); opacity: 0; visibility: hidden; pointer-events: none; touch-action: none; -webkit-backface-visibility: hidden; backface-visibility: hidden; will-change: opacity; transition: opacity 0.2s ease-out, visibility 0s linear 0.2s; }
        .transition-bridge.loading { opacity: 1; visibility: visible; pointer-events: auto; transition: opacity 0.15s ease-out, visibility 0s; }
        .transition-bridge.transitioning { opacity: 0; visibility: visible; pointer-events: none; transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear 0.55s; }
        .bridge-spinner { width: 36px; height: 36px; border: 1.5px solid rgba(255, 255, 255, 0.06); border-top-color: rgba(255, 255, 255, 0.7); border-radius: 50%; animation: bridgeSpin 0.8s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite; filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.08)); }
        @keyframes bridgeSpin { to { transform: rotate(360deg); } }
        @media (min-width: 600px) { .folders-grid { gap: 48px 44px; max-width: 400px; } .folder-icon { width: 145px; height: 145px; border-radius: 32px; } .folder-preview { width: 120px; height: 120px; gap: 7px; } .folder-mini-icon { width: 56px; height: 56px; border-radius: 13px; } .folder-mini-placeholder { width: 56px; height: 56px; } .folder-name { font-size: 13px; } .folder-container { padding: 28px; } .folder-apps-grid { gap: 28px; } .folder-apps-grid-2 { max-width: 220px; } .folder-app-icon { width: 82px; height: 82px; border-radius: 20px; } .folder-app-placeholder { width: 82px; height: 105px; } .media-grid { gap: 24px; } .media-item-icon { width: 90px; height: 90px; border-radius: 20px; } .media-item-name { font-size: 13px; max-width: 95px; } .media-container { padding: 32px; } .image-expanded-content { width: 340px; height: 340px; border-radius: 26px; } .interactive-content { width: 380px; height: 380px; } }
        @media (min-width: 900px) { .folders-grid { gap: 54px 50px; max-width: 480px; } .folder-icon { width: 175px; height: 175px; border-radius: 38px; } .folder-preview { width: 145px; height: 145px; gap: 8px; } .folder-mini-icon { width: 68px; height: 68px; border-radius: 15px; } .folder-mini-placeholder { width: 68px; height: 68px; } .folder-name { font-size: 14px; } .folder-container { padding: 36px; } .folder-apps-grid { gap: 32px; } .folder-apps-grid-2 { max-width: 260px; } .folder-app-icon { width: 96px; height: 96px; border-radius: 24px; } .folder-app-placeholder { width: 96px; height: 120px; } .interactive-content { width: 440px; height: 440px; } }
      `}</style>

      <div className={`work-page ${folderAnimState !== 'idle' || expandedAnimState !== 'idle' || galleryAnimState !== 'idle' || notesAnimState !== 'idle' || imageAnimState !== 'idle' || interactiveAnimState !== 'idle' ? 'overlay-open' : ''}`} style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "60px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
        <div className="folders-grid">
          {/* Row 1: Apps & Services */}
          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('apps')}>
              <div className="folder-preview">
                {appsItems.map((app) => (
                  <div key={app.id} className={`folder-mini-icon ${app.image ? 'has-image' : ''}`} style={{ background: app.image ? 'transparent' : `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})`, '--glow-color': app.glow } as React.CSSProperties}>
                    {renderAppMiniIcon(app, miniIconSize)}
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
                  <div key={service.id} className={`folder-mini-icon ${service.appImage ? 'has-image' : ''}`} style={{ background: service.appImage ? 'transparent' : `linear-gradient(145deg, ${service.color[0]}, ${service.color[1]})`, '--glow-color': service.glow } as React.CSSProperties}>
                    {renderServiceMiniIcon(service, miniIconSize)}
                  </div>
                ))}
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Services</span>
          </div>

          {/* Row 2: 3D Interactive & Media */}
          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('interactive')} style={{ transitionDelay: '240ms' }}>
              <div className="folder-preview">
                <div className="folder-mini-icon has-image" style={{ '--glow-color': 'rgba(100, 180, 255, 0.35)' } as React.CSSProperties}>
                  <img src="/images/sperhaapp2.png" alt="Sphere" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="folder-mini-icon has-image" style={{ '--glow-color': 'rgba(180, 100, 255, 0.35)' } as React.CSSProperties}>
                  <img src="/images/mainfoldapp2.png" alt="Manifold" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="folder-mini-icon" style={{ background: 'linear-gradient(145deg, #151518, #0a0a0c)', '--glow-color': 'rgba(255, 200, 100, 0.35)' } as React.CSSProperties}>
                  {renderMetatronMini(miniIconSize)}
                </div>
                <div className="folder-mini-placeholder" />
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`} style={{ transitionDelay: '300ms' }}>3D Interactive</span>
          </div>

          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('entertainment')} style={{ transitionDelay: '300ms' }}>
              <div className="folder-preview folder-preview-2">
                <div className="folder-mini-icon has-image" style={{ '--glow-color': 'rgba(100, 60, 160, 0.35)' } as React.CSSProperties}>
                  <img src="/images/gallery.jpg" alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="folder-mini-icon has-image" style={{ '--glow-color': 'rgba(160, 120, 60, 0.35)' } as React.CSSProperties}>
                  <img src="/images/notes.jpg" alt="Notes" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`} style={{ transitionDelay: '360ms' }}>Media</span>
          </div>

          {/* Row 3: Social */}
          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('social')} style={{ transitionDelay: '360ms' }}>
              <div className="folder-preview">
                {socialLinks.map((social) => (
                  <div key={social.id} className="folder-mini-icon" style={{ background: social.id === 'instagram' ? 'linear-gradient(145deg, #4a1942, #1a0818)' : `linear-gradient(145deg, ${social.color[0]}, ${social.color[1]})`, '--glow-color': social.glow } as React.CSSProperties}>
                    {renderSocialMiniIcon(social.id, miniIconSize - 2)}
                  </div>
                ))}
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`} style={{ transitionDelay: '420ms' }}>Social</span>
          </div>
        </div>
      </div>

      {/* Apps Folder Overlay */}
      {openFolder === 'apps' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              {appsItems.map((app, index) => (
                <Link key={app.id} href={app.href} className="folder-app" onClick={restoreScroll}>
                  <div className={`folder-app-icon ${app.image ? 'has-image' : ''}`} style={{ background: app.image ? 'transparent' : `linear-gradient(145deg, ${app.color[0]}, ${app.color[1]})`, '--glow-color': app.glow, '--breathe-delay': `${index * 0.5}s` } as React.CSSProperties}>
                    {renderAppFullIcon(app, folderIconSize)}
                  </div>
                  <span className="folder-app-name">{app.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Folder Overlay */}
      {openFolder === 'services' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              {servicesItems.map((service, index) => (
                <div key={service.id} className="folder-app" onClick={() => handleOpenServiceWithBridge(index)}>
                  <div className={`folder-app-icon ${service.appImage ? 'has-image' : ''}`} style={{ background: service.appImage ? 'transparent' : `linear-gradient(145deg, ${service.color[0]}, ${service.color[1]})`, '--glow-color': service.glow, '--breathe-delay': `${index * 0.5}s` } as React.CSSProperties}>
                    {renderServiceFullIcon(service)}
                  </div>
                  <span className="folder-app-name">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Media Folder Overlay */}
      {openFolder === 'entertainment' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid folder-apps-grid-2" onClick={(e) => e.stopPropagation()}>
              <div className="folder-app" onClick={handleOpenGalleryWithBridge}>
                <div className="folder-app-icon has-image" style={{ '--glow-color': 'rgba(100, 60, 160, 0.35)', '--breathe-delay': '0s' } as React.CSSProperties}>
                  <img src="/images/gallery.jpg" alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Gallery</span>
              </div>
              <div className="folder-app" onClick={handleOpenNotesWithBridge}>
                <div className="folder-app-icon has-image" style={{ '--glow-color': 'rgba(160, 120, 60, 0.35)', '--breathe-delay': '0.5s' } as React.CSSProperties}>
                  <img src="/images/notes.jpg" alt="Notes" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Notes</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Folder Overlay */}
      {openFolder === 'social' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              {socialLinks.map((social, index) => (
                <Link key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="folder-app" onClick={restoreScroll}>
                  <div className="folder-app-icon" style={{ background: social.id === 'instagram' ? 'linear-gradient(145deg, #4a1942, #1a0818)' : `linear-gradient(145deg, ${social.color[0]}, ${social.color[1]})`, '--glow-color': social.glow, '--breathe-delay': `${index * 0.4}s` } as React.CSSProperties}>
                    {renderSocialIcon(social.id, 32)}
                  </div>
                  <span className="folder-app-name">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3D Interactive Folder Overlay */}
      {openFolder === 'interactive' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              <div className="folder-app" onClick={() => handleOpenInteractiveWithBridge('sphere')}>
                <div className="folder-app-icon has-image" style={{ '--glow-color': 'rgba(100, 180, 255, 0.35)', '--breathe-delay': '0s' } as React.CSSProperties}>
                  <img src="/images/sperhaapp2.png" alt="Sphere" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Sphere</span>
              </div>
              <div className="folder-app" onClick={() => handleOpenInteractiveWithBridge('manifold')}>
                <div className="folder-app-icon has-image" style={{ '--glow-color': 'rgba(180, 100, 255, 0.35)', '--breathe-delay': '0.5s' } as React.CSSProperties}>
                  <img src="/images/mainfoldapp2.png" alt="Manifold" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Manifold</span>
              </div>
              <div className="folder-app" onClick={() => window.open('https://metatron-genesis369.vercel.app', '_blank')}>
                <div className="folder-app-icon" style={{ background: 'linear-gradient(145deg, #151518, #0a0a0c)', '--glow-color': 'rgba(255, 200, 100, 0.35)', '--breathe-delay': '1s' } as React.CSSProperties}>
                  {renderMetatronFull(folderIconSize)}
                </div>
                <span className="folder-app-name">MetatronAI</span>
              </div>
              <div className="folder-app-placeholder" />
            </div>
          </div>
        </div>
      )}

      {/* 3D Interactive Expanded Views */}
      {expandedInteractive === 'sphere' && (
        <div className={`interactive-expanded ${getInteractiveAnimClass()}`}>
          <div className="interactive-content">
            <QuantumSphere />
          </div>
          <button className="interactive-close" onClick={handleCloseInteractive}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}

      {expandedInteractive === 'manifold' && (
        <div className={`interactive-expanded ${getInteractiveAnimClass()}`}>
          <div className="interactive-content">
            <QuantumManifold />
          </div>
          <button className="interactive-close" onClick={handleCloseInteractive}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Service Expanded Views - TRUE STATE OF THE ART */}
      {servicesItems.map((service, index) => (
        <div
          key={service.id}
          className={`service-expanded ${expandedService === index ? getExpandedAnimClass() : ''}`}
          style={{ '--service-glow': service.glow } as React.CSSProperties}
          onClick={handleCloseService}
        >
          <div className="service-expanded-content" onClick={(e) => e.stopPropagation()}>
            {/* Floating Screen Frame with Hero Image */}
            <div className="service-screen-frame">
              <div className="service-hero-image">
                <img src={service.pageImage} alt={service.name} />
              </div>
            </div>

            {/* Title */}
            <h2 className="service-expanded-title">{service.name}</h2>

            {/* Description */}
            <p className="service-expanded-desc">{service.desc}</p>

            {/* Feature Pills */}
            <div className="service-features">
              {service.id === 'website' && (
                <>
                  <span className="service-feature-pill">React</span>
                  <span className="service-feature-pill">Next.js</span>
                  <span className="service-feature-pill">Vue</span>
                  <span className="service-feature-pill">Full-Stack</span>
                  <span className="service-feature-pill">SEO</span>
                  <span className="service-feature-pill">Responsive</span>
                </>
              )}
              {service.id === 'dashboard' && (
                <>
                  <span className="service-feature-pill">Charts</span>
                  <span className="service-feature-pill">Real-time</span>
                  <span className="service-feature-pill">Analytics</span>
                  <span className="service-feature-pill">D3.js</span>
                  <span className="service-feature-pill">Widgets</span>
                </>
              )}
              {service.id === 'api' && (
                <>
                  <span className="service-feature-pill">REST</span>
                  <span className="service-feature-pill">GraphQL</span>
                  <span className="service-feature-pill">Auth</span>
                  <span className="service-feature-pill">Rate Limiting</span>
                  <span className="service-feature-pill">Docs</span>
                </>
              )}
              {service.id === 'llm' && (
                <>
                  <span className="service-feature-pill">GPT-4</span>
                  <span className="service-feature-pill">Claude</span>
                  <span className="service-feature-pill">RAG</span>
                  <span className="service-feature-pill">Agents</span>
                  <span className="service-feature-pill">Fine-tuning</span>
                </>
              )}
            </div>

            {/* Close Button */}
            <button className="service-expanded-close" onClick={handleCloseService}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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
      <div className={`transition-bridge ${bridgePhase}`}><div className="bridge-spinner" /></div>

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