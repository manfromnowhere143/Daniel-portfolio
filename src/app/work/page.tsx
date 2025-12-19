"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic imports for 3D components
const QuantumManifold = dynamic(() => import("@/components/QuantumManifold"), { ssr: false });
const QuantumSphere = dynamic(() => import("@/components/QuantumSphere"), { ssr: false });

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - PREMIUM ICON SYSTEM
// Monochromatic elegance - Pure white breathing on void black
// ═══════════════════════════════════════════════════════════════════════════════

const appsItems = [
  { id: 'trade69', name: 'Trade69', href: '/work/trade69', image: '/images/t69app3.png' },
  { id: 'megaagent', name: 'MegaAgent', href: '/work/megaagent', color: ['#1a1a1e', '#0c0c0e'] },
  { id: 'octopus', name: 'Octopus', href: '/work/octopus', image: '/images/octopusapp2.png' },
  { id: 'overmind', name: 'Overmind', href: '/work/overmind', image: '/images/twinkle.png' },
];

const servicesItems = [
  {
    id: 'website',
    name: 'Web Apps',
    color: ['#1a1a1e', '#0c0c0e'],
    desc: 'Full-stack applications with modern frameworks. SEO, responsive design, authentication, databases, and deployment.',
    appImage: '/images/webapplictionsapp.jpg',
    pageImage: '/images/webapplictionspage.jpg'
  },
  {
    id: 'dashboard',
    name: 'Dashboards',
    color: ['#1a1a1e', '#0c0c0e'],
    desc: 'Real-time data visualization and analytics. Interactive charts, live data streams, and beautiful interfaces.',
    appImage: '/images/dashboardapp.jpg',
    pageImage: '/images/dashboardpage.jpg'
  },
  {
    id: 'api',
    name: 'API',
    color: ['#1a1a1e', '#0c0c0e'],
    desc: 'REST and GraphQL APIs. Authentication, rate limiting, documentation, and third-party integrations.',
    appImage: '/images/apiintegrationapp.jpg',
    pageImage: '/images/apiintegrationapp.jpg'
  },
  {
    id: 'llm',
    name: 'LLM',
    color: ['#1a1a1e', '#0c0c0e'],
    desc: 'AI integrations and middleware. Prompt engineering, tool orchestration, and multi-model pipelines.',
    appImage: '/images/llmapp.jpg',
    pageImage: '/images/llmpage.jpg'
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - SOCIAL LINKS WITH GMAIL (5 items - horizontal scroll)
// ═══════════════════════════════════════════════════════════════════════════════

const socialLinks = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/manfromnowhere143' },
  { id: 'x', name: 'X', url: 'https://x.com/satori936' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/overmind143' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@danielwahnich' },
  { id: 'gmail', name: 'Email', url: 'mailto:cogitoergosum143@gmail.com' },
];

// 3D Interactive items
const interactiveItems = [
  { id: 'sphere', name: 'Sphere', image: '/images/sperhaapp2.png' },
  { id: 'manifold', name: 'Manifold', image: '/images/mainfoldapp2.png' },
  { id: 'metatronai', name: 'MetatronAI', url: 'https://metatron-genesis369.vercel.app' },
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
  const [pageReady, setPageReady] = useState(false);
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
    const pageTimer = setTimeout(() => setPageReady(true), 50);
    const contentTimer = setTimeout(() => setIsLoaded(true), 200);
    return () => {
      clearTimeout(pageTimer);
      clearTimeout(contentTimer);
    };
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
        if (target.tagName === 'CANVAS') return;
        if (target.closest('.interactive-content')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      const blockWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.media-container')) return;
        if (target.closest('.image-expanded-content')) return;
        if (target.tagName === 'CANVAS') return;
        if (target.closest('.interactive-content')) return;
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

  useEffect(() => {
    if (interactiveAnimState === 'active' && expandedInteractive) {
      document.body.style.touchAction = 'none';
      const allowCanvasTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'CANVAS') return;
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
    setBridgePhase('loading');
    setTimeout(() => handleCloseFolder(), 150);
    bridgeTimeoutRef.current = setTimeout(() => {
      setExpandedService(index);
      setExpandedAnimState('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setExpandedAnimState('active');
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
    setBridgePhase('loading');
    setTimeout(() => handleCloseFolder(), 150);
    bridgeTimeoutRef.current = setTimeout(() => {
      setGalleryOpen(true);
      setGalleryAnimState('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setGalleryAnimState('active');
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
    setBridgePhase('loading');
    setTimeout(() => handleCloseFolder(), 150);
    bridgeTimeoutRef.current = setTimeout(() => {
      setNotesOpen(true);
      setNotesAnimState('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNotesAnimState('active');
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

  const handleOpenInteractiveWithBridge = useCallback((id: string) => {
    if (interactiveAnimState !== 'idle' || bridgePhase !== 'idle') return;
    setBridgePhase('loading');
    setTimeout(() => handleCloseFolder(), 150);
    bridgeTimeoutRef.current = setTimeout(() => {
      setExpandedInteractive(id);
      setInteractiveAnimState('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setInteractiveAnimState('active');
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
  // STATE OF THE ART - MONOCHROMATIC ICON RENDERERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const renderAppMiniIcon = (app: typeof appsItems[0], size: number = 18) => {
    if (app.image) {
      return <img src={app.image} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />;
    }
    if (app.id === 'megaagent') {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.5" fill="white" opacity="0.9" />
          <circle cx="12" cy="4" r="1.8" fill="white" opacity="0.7"/>
          <circle cx="19" cy="9" r="1.5" fill="white" opacity="0.6"/>
          <circle cx="19" cy="16" r="1.5" fill="white" opacity="0.6"/>
          <circle cx="12" cy="20" r="1.8" fill="white" opacity="0.7"/>
          <circle cx="5" cy="16" r="1.5" fill="white" opacity="0.6"/>
          <circle cx="5" cy="9" r="1.5" fill="white" opacity="0.6"/>
          <path d="M12 5.8V8.5M17.5 9.5L15 10.8M17.5 15.5L15 13.8M12 18.2V15.5M6.5 15.5L9 13.8M6.5 9.5L9 10.8" stroke="white" strokeWidth="0.8" opacity="0.3"/>
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
      case 'gmail': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5" opacity="0.9"/><path d="M2 6l10 7 10-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/></svg>;
      default: return null;
    }
  };

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

  const renderMetatronFull = (size: number = 36) => {
    return (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="24" stroke="white" strokeWidth="1" opacity="0.2"/>
        <circle cx="30" cy="30" r="18" stroke="white" strokeWidth="1" opacity="0.3"/>
        <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="1" opacity="0.4"/>
        <circle cx="30" cy="30" r="6" stroke="white" strokeWidth="1" opacity="0.6"/>
        <circle cx="30" cy="30" r="3" fill="white" opacity="0.9"/>
        <path d="M30 6v48M6 30h48M11 11l38 38M49 11L11 49" stroke="white" strokeWidth="0.8" opacity="0.2"/>
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
      return (
        <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="26" stroke="white" strokeWidth="0.5" opacity="0.2"/>
          <circle cx="30" cy="30" r="9" fill="white" opacity="0.95" />
          <circle cx="30" cy="8" r="4.5" fill="white" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="49" cy="20" r="3.5" fill="white" opacity="0.6"/>
          <circle cx="49" cy="42" r="3.5" fill="white" opacity="0.6"/>
          <circle cx="30" cy="52" r="4.5" fill="white" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
          <circle cx="11" cy="42" r="3.5" fill="white" opacity="0.6"/>
          <circle cx="11" cy="20" r="3.5" fill="white" opacity="0.6"/>
          <circle cx="40" cy="12" r="2" fill="white" opacity="0.4"/>
          <circle cx="20" cy="12" r="2" fill="white" opacity="0.4"/>
          <circle cx="40" cy="48" r="2" fill="white" opacity="0.4"/>
          <circle cx="20" cy="48" r="2" fill="white" opacity="0.4"/>
          <path d="M30 12.5V21M45.5 21.5L38 26M45.5 40.5L38 35M30 47.5V39M14.5 40.5L22 35M14.5 21.5L22 26" stroke="white" strokeWidth="1.2" opacity="0.2" strokeLinecap="round"/>
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
      case 'gmail': return <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2"/><path d="M2 6l10 7 10-7" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>;
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
        /* STATE OF THE ART - MONOCHROMATIC ELEGANCE                                       */
        /* Pure white breathing on void black - Apple + Tesla + NVIDIA proud               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --bg-primary: #050506;
          --bg-secondary: #0a0a0b;
          --bg-card: rgba(40, 40, 45, 0.65);
          --text-primary: #FAFAF8;
          --text-secondary: rgba(255, 255, 255, 0.8);
          --text-tertiary: rgba(255, 255, 255, 0.5);
          --text-muted: rgba(255, 255, 255, 0.3);
          --border-primary: rgba(255, 255, 255, 0.04);
          --border-secondary: rgba(255, 255, 255, 0.08);
          --glow-white: rgba(255, 255, 255, 0.12);
          --glow-white-strong: rgba(255, 255, 255, 0.22);
        }
        
        [data-theme="light"] {
          --bg-primary: #F5F5F0;
          --bg-secondary: #EAEAE5;
          --bg-card: rgba(255, 255, 255, 0.85);
          --text-primary: #1a1a1a;
          --text-secondary: rgba(26, 26, 26, 0.75);
          --text-tertiary: rgba(26, 26, 26, 0.5);
          --text-muted: rgba(26, 26, 26, 0.3);
          --border-primary: rgba(0, 0, 0, 0.06);
          --border-secondary: rgba(0, 0, 0, 0.1);
          --glow-white: rgba(0, 0, 0, 0.06);
          --glow-white-strong: rgba(0, 0, 0, 0.12);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* IRON LOCK - FIXED VIEWPORT                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        html, body {
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          overflow: hidden;
          touch-action: none;
        }
        
        * { -webkit-tap-highlight-color: transparent; }
        
        /* Global GPU acceleration for smooth animations */
        .folder-overlay,
        .folder-overlay-bg,
        .folder-container,
        .folder-app,
        .folder-app-icon,
        .media-overlay,
        .media-overlay-bg,
        .media-container,
        .media-item,
        .media-item-icon,
        .service-expanded,
        .interactive-expanded,
        .image-expanded,
        .transition-bridge {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .work-page { 
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--bg-primary);
          overflow: hidden;
          overscroll-behavior: none;
          touch-action: none;
          -webkit-backface-visibility: hidden; 
          backface-visibility: hidden;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .work-page.page-ready { opacity: 1; }
        .work-page.overlay-open { touch-action: none; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDERS GRID                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .folders-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 36px 32px; 
          max-width: 280px; 
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }
        
        .folders-grid.loaded { opacity: 1; transform: translateY(0); }
        
        .folder-wrapper { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        
        .folder-icon { 
          position: relative; 
          width: 115px; height: 115px; 
          border-radius: 28px; 
          background: var(--bg-card); 
          backdrop-filter: blur(30px) saturate(180%); 
          -webkit-backdrop-filter: blur(30px) saturate(180%); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          cursor: pointer; 
          overflow: hidden; 
          opacity: 0; 
          transform: translateZ(0) scale(0.8) translateY(25px); 
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, opacity 0.5s ease; 
          box-shadow: 
            0 0 0 0.5px var(--border-secondary),
            0 0 30px var(--glow-white),
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2); 
          border: 1px solid var(--border-primary); 
          -webkit-backface-visibility: hidden; 
          backface-visibility: hidden;
        }
        
        .folder-icon::before { 
          content: ''; 
          position: absolute; 
          top: 0; left: 8%; right: 8%; 
          height: 45%; 
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 100%); 
          border-radius: 28px 28px 50% 50%; 
          pointer-events: none; 
          z-index: 10; 
        }
        
        .folder-icon.loaded { opacity: 1; transform: translateZ(0) scale(1) translateY(0); }
        
        .folder-icon:hover {
          transform: translateZ(0) scale(1.05) translateY(-4px);
          box-shadow: 
            0 0 0 0.5px var(--border-secondary),
            0 0 50px var(--glow-white-strong),
            0 12px 40px rgba(0, 0, 0, 0.7),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 -1px 1px rgba(0, 0, 0, 0.25);
        }
        
        .folder-icon:active {
          transform: translateZ(0) scale(0.96) translateY(2px);
          transition: transform 0.1s ease;
        }
        
        [data-theme="light"] .folder-icon {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.06);
          box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 4px 20px rgba(0, 0, 0, 0.1), 0 8px 40px rgba(0, 0, 0, 0.08);
        }
        [data-theme="light"] .folder-icon::before {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 100%);
        }
        
        .folder-wrapper:nth-child(1) .folder-icon { transition-delay: 150ms; }
        .folder-wrapper:nth-child(2) .folder-icon { transition-delay: 220ms; }
        .folder-wrapper:nth-child(3) .folder-icon { transition-delay: 290ms; }
        .folder-wrapper:nth-child(4) .folder-icon { transition-delay: 360ms; }
        .folder-wrapper:nth-child(5) .folder-icon { transition-delay: 430ms; }
        
        .folder-preview { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; width: 95px; height: 95px; position: relative; z-index: 5; }
        
        .folder-mini-icon { 
          width: 44px; height: 44px; 
          border-radius: 11px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          position: relative; 
          overflow: hidden; 
          background: linear-gradient(145deg, #1a1a1e, #0c0c0e);
          box-shadow: 
            0 0 20px var(--glow-white),
            0 4px 12px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          isolation: isolate;
        }
        
        .folder-mini-icon img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .folder-mini-icon::before { 
          content: ''; 
          position: absolute; 
          top: 0; left: 5%; right: 5%; 
          height: 45%; 
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%); 
          border-radius: 11px 11px 50% 50%; 
          pointer-events: none; 
          z-index: 5;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .folder-mini-icon.has-image::before { display: none; }
        .folder-mini-placeholder { width: 44px; height: 44px; }
        
        .folder-name { 
          font-size: 12px; 
          font-weight: 400; 
          color: var(--text-primary); 
          letter-spacing: 0.02em; 
          text-align: center; 
          opacity: 0; 
          transform: translateY(10px); 
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease; 
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8); 
        }
        
        .folder-name.loaded { opacity: 1; transform: translateY(0); }
        [data-theme="light"] .folder-name { text-shadow: none; }
        
        .folder-wrapper:nth-child(1) .folder-name { transition-delay: 250ms; }
        .folder-wrapper:nth-child(2) .folder-name { transition-delay: 320ms; }
        .folder-wrapper:nth-child(3) .folder-name { transition-delay: 390ms; }
        .folder-wrapper:nth-child(4) .folder-name { transition-delay: 460ms; }
        .folder-wrapper:nth-child(5) .folder-name { transition-delay: 530ms; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDER OVERLAY - ZERO FLASH GPU ACCELERATED                                     */
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
          transform: translate3d(0, 0, 0);
          will-change: visibility;
          contain: layout style paint;
        }
        
        .folder-overlay.entering { visibility: visible; pointer-events: auto; }
        .folder-overlay.active { visibility: visible; pointer-events: auto; }
        .folder-overlay.exiting { visibility: visible; pointer-events: none; }
        
        .folder-overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: color-mix(in srgb, var(--bg-primary) 92%, transparent);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          touch-action: none;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: opacity;
        }
        
        .folder-overlay.active .folder-overlay-bg { opacity: 1; }
        .folder-overlay.exiting .folder-overlay-bg { opacity: 0; transition: opacity 0.3s ease; }
        
        .folder-container {
          position: relative;
          z-index: 2;
          background: transparent;
          padding: 24px;
          opacity: 0;
          transform: translate3d(0, 0, 0);
          transition: none;
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity;
        }
        
        .folder-overlay.active .folder-container { 
          opacity: 1; 
          transition: opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1); 
        }
        .folder-overlay.exiting .folder-container { 
          opacity: 0; 
          transition: opacity 0.2s ease; 
        }
        
        .folder-apps-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 24px; 
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .folder-app {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          opacity: 0;
          transform: translate3d(0, 12px, 0) scale(0.7);
          transition: none;
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
          perspective: 1000px;
        }
        
        .folder-app-placeholder { width: 72px; height: 92px; }
        
        .folder-overlay.active .folder-app {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .folder-overlay.exiting .folder-app {
          opacity: 0;
          transform: translate3d(0, 5px, 0) scale(0.85);
          transition: opacity 0.2s ease, transform 0.25s ease;
        }
        
        .folder-overlay.active .folder-app:nth-child(1) { transition-delay: 0.02s; }
        .folder-overlay.active .folder-app:nth-child(2) { transition-delay: 0.05s; }
        .folder-overlay.active .folder-app:nth-child(3) { transition-delay: 0.08s; }
        .folder-overlay.active .folder-app:nth-child(4) { transition-delay: 0.11s; }
        .folder-overlay.active .folder-app:nth-child(5) { transition-delay: 0.14s; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - ALIVE ICONS WITH WHITE BREATHING                             */
        /* GPU-accelerated, zero-flash, Apple-quality transitions                          */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .folder-app-icon {
          width: 72px; height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(145deg, #1a1a1e, #0c0c0e);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 0 25px var(--glow-white),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 25px rgba(0, 0, 0, 0.25),
            0 16px 50px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          animation: iconBreatheWhite 4s ease-in-out infinite;
          animation-delay: var(--breathe-delay, 0s);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: transform, box-shadow;
          transform-style: preserve-3d;
          isolation: isolate;
        }
        
        /* Ensure images inside icons don't flash */
        .folder-app-icon img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: auto;
        }
        
        @keyframes iconBreatheWhite {
          0%, 100% { 
            box-shadow: 
              0 0 0 1px rgba(255, 255, 255, 0.08), 
              0 0 25px var(--glow-white), 
              0 4px 12px rgba(0, 0, 0, 0.3), 
              0 8px 25px rgba(0, 0, 0, 0.25), 
              0 16px 50px rgba(0, 0, 0, 0.2), 
              inset 0 1px 1px rgba(255, 255, 255, 0.15), 
              inset 0 -1px 1px rgba(0, 0, 0, 0.2); 
          }
          50% { 
            box-shadow: 
              0 0 0 1px rgba(255, 255, 255, 0.15), 
              0 0 40px var(--glow-white-strong), 
              0 6px 16px rgba(0, 0, 0, 0.35), 
              0 10px 30px rgba(0, 0, 0, 0.3), 
              0 20px 60px rgba(0, 0, 0, 0.25), 
              inset 0 1px 1px rgba(255, 255, 255, 0.2), 
              inset 0 -1px 1px rgba(0, 0, 0, 0.25); 
          }
        }
        
        .folder-app-icon:hover {
          transform: translate3d(0, -4px, 0) scale(1.05);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.2),
            0 0 50px var(--glow-white-strong),
            0 8px 20px rgba(0, 0, 0, 0.4),
            0 16px 40px rgba(0, 0, 0, 0.35),
            0 24px 70px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.25),
            inset 0 -1px 1px rgba(0, 0, 0, 0.3);
          animation-play-state: paused;
        }
        
        .folder-app-icon:active {
          transform: translate3d(0, 2px, 0) scale(0.95);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 15px var(--glow-white),
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
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .folder-app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1);
          pointer-events: none;
          z-index: 6;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .folder-app-icon.has-image::before {
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%);
        }
        
        .folder-app-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: var(--text-primary);
          text-align: center;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          transition: color 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        [data-theme="light"] .folder-app-name { text-shadow: none; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* SOCIAL FOLDER - 5 ITEMS IN 2x2 + 1 CENTERED GRID                                */
        /* Identical to other folders - Pure Apple elegance                                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        /* 5th item centered on its own row */
        .social-grid .folder-app:nth-child(5) {
          grid-column: 1 / -1;
          justify-self: center;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* SERVICE EXPANDED - GPU ACCELERATED                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .service-expanded {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(80px, 15vh, 150px);
          background: radial-gradient(ellipse at center, 
            color-mix(in srgb, var(--bg-primary) 98%, transparent) 0%, 
            var(--bg-primary) 100%);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          user-select: none;
          overscroll-behavior: none;
          transition: background 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: opacity, visibility;
          contain: layout style paint;
        }
        
        .service-expanded::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 600px; height: 600px;
          transform: translate(-50%, -60%) translate3d(0, 0, 0);
          background: radial-gradient(circle, var(--glow-white-strong) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.8s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .service-expanded.active::before { opacity: 1; }
        
        .service-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .service-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1); }
        .service-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.4s ease; }
        
        .service-expanded-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 24px;
          opacity: 0;
          transform: translate3d(0, 30px, 0) scale(0.92);
          transition: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .service-expanded.active .service-expanded-content {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.6s cubic-bezier(0.32, 0.72, 0, 1) 0.1s, transform 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.1s;
        }
        
        .service-expanded.exiting .service-expanded-content {
          opacity: 0;
          transform: translate3d(0, -20px, 0) scale(0.96);
          transition: opacity 0.3s ease, transform 0.35s ease;
        }
        
        .service-screen-frame {
          width: clamp(220px, 60vw, 280px);
          aspect-ratio: 16/11;
          border-radius: 16px;
          padding: 12px;
          margin-bottom: 24px;
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 247, 0.92) 50%, rgba(235, 235, 240, 0.9) 100%);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.1),
            0 12px 40px rgba(0, 0, 0, 0.25),
            0 30px 80px rgba(0, 0, 0, 0.3);
          position: relative;
          flex-shrink: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          isolation: isolate;
        }
        
        .service-screen-frame::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%);
          border-radius: 16px 16px 0 0;
          pointer-events: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .service-hero-image {
          width: 100%; height: 100%;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(0, 0, 0, 0.05);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .service-hero-image img { 
          width: 100%; height: 100%; object-fit: cover;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .service-expanded-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: clamp(24px, 5.5vw, 30px);
          font-weight: 200;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          text-align: center;
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          transition: color 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .service-expanded.active .service-expanded-title {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.45s ease 0.15s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.15s, color 0.3s ease;
        }
        
        .service-expanded.exiting .service-expanded-title {
          opacity: 0;
          transform: translate3d(0, -8px, 0);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .service-expanded-desc {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: clamp(12px, 3vw, 14px);
          font-weight: 300;
          color: var(--text-secondary);
          text-align: center;
          line-height: 1.65;
          max-width: 300px;
          margin-bottom: 20px;
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          transition: color 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .service-expanded.active .service-expanded-desc {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.45s ease 0.18s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.18s, color 0.3s ease;
        }
        
        .service-expanded.exiting .service-expanded-desc {
          opacity: 0;
          transform: translate3d(0, -8px, 0);
          transition: opacity 0.2s ease, transform 0.25s ease;
        }
        
        .service-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          max-width: 320px;
          margin-bottom: 16px;
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          transition: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .service-expanded.active .service-features {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.45s ease 0.21s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.21s;
        }
        
        .service-expanded.exiting .service-features {
          opacity: 0;
          transform: translate3d(0, -8px, 0);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .service-feature-pill {
          padding: 6px 12px;
          background: var(--border-primary);
          border: 1px solid var(--border-secondary);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: background 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .service-expanded-close {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: -8px;
          opacity: 0;
          transform: translate3d(0, 15px, 0) scale(0.5);
          transition: transform 0.2s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .service-expanded.active .service-expanded-close {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.4s ease 0.24s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.24s;
        }
        
        .service-expanded.exiting .service-expanded-close {
          opacity: 0;
          transform: translate3d(0, 8px, 0) scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .service-expanded-close:hover { transform: translate3d(0, 0, 0) scale(1.1); }
        .service-expanded-close:active { transform: translate3d(0, 0, 0) scale(0.92); }
        .service-expanded-close svg { width: 24px; height: 24px; color: var(--text-primary); transition: color 0.3s ease; }
        
        @media (min-width: 600px) {
          .service-screen-frame { width: clamp(300px, 40vw, 380px); border-radius: 20px; padding: 16px; }
          .service-screen-frame::before { border-radius: 20px 20px 0 0; }
          .service-hero-image { border-radius: 10px; }
          .service-expanded-title { font-size: 36px; }
          .service-expanded-desc { font-size: 15px; max-width: 360px; }
          .service-feature-pill { padding: 8px 16px; font-size: 12px; }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* MEDIA OVERLAY - GPU ACCELERATED                                                 */
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
          transform: translate3d(0, 0, 0);
          will-change: visibility;
          contain: layout style paint;
        }
        
        .media-overlay.entering { visibility: visible; pointer-events: auto; }
        .media-overlay.active { visibility: visible; pointer-events: auto; }
        .media-overlay.exiting { visibility: visible; pointer-events: none; }
        
        .media-overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: color-mix(in srgb, var(--bg-primary) 92%, transparent);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          touch-action: manipulation;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: opacity;
        }
        
        .media-overlay.active .media-overlay-bg { opacity: 1; }
        .media-overlay.exiting .media-overlay-bg { opacity: 0; transition: opacity 0.3s ease; }
        
        .media-container {
          position: relative;
          z-index: 2;
          background: transparent;
          padding: 24px;
          opacity: 0;
          transform: translate3d(0, 0, 0);
          transition: none;
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity;
        }
        
        .media-overlay.active .media-container { opacity: 1; transition: opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1); }
        .media-overlay.exiting .media-container { opacity: 0; transition: opacity 0.2s ease; }
        
        .media-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 18px; 
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .media-item { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 8px; 
          cursor: pointer; 
          opacity: 0; 
          transform: translate3d(0, 12px, 0) scale(0.7); 
          transition: none; 
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
          perspective: 1000px;
        }
        
        .media-overlay.active .media-item { 
          opacity: 1; 
          transform: translate3d(0, 0, 0) scale(1); 
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
        }
        
        .media-overlay.exiting .media-item { 
          opacity: 0; 
          transform: translate3d(0, 5px, 0) scale(0.85); 
          transition: opacity 0.2s ease, transform 0.25s ease; 
        }
        
        .media-overlay.active .media-item:nth-child(1) { transition-delay: 0.02s; }
        .media-overlay.active .media-item:nth-child(2) { transition-delay: 0.05s; }
        .media-overlay.active .media-item:nth-child(3) { transition-delay: 0.08s; }
        .media-overlay.active .media-item:nth-child(4) { transition-delay: 0.11s; }
        .media-overlay.active .media-item:nth-child(5) { transition-delay: 0.14s; }
        
        .media-item-icon { 
          width: 80px; height: 80px; 
          border-radius: 18px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          overflow: hidden; 
          position: relative; 
          box-shadow: 
            0 0 25px var(--glow-white), 
            0 8px 25px rgba(0, 0, 0, 0.5), 
            0 15px 50px rgba(0, 0, 0, 0.3), 
            inset 0 1px 1px rgba(255, 255, 255, 0.25), 
            inset 0 -1px 1px rgba(0, 0, 0, 0.25);
          animation: iconBreatheWhite 4s ease-in-out infinite;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: transform, box-shadow;
          isolation: isolate;
        }
        
        .media-item-icon img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .media-item-icon::before { 
          content: ''; 
          position: absolute; 
          top: 0; left: 8%; right: 8%; 
          height: 35%; 
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%); 
          border-radius: 18px 18px 50% 50%; 
          pointer-events: none; 
          z-index: 10;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .media-item-icon img { width: 100%; height: 100%; object-fit: cover; }
        
        .media-item-name { 
          font-size: 12px; 
          font-weight: 400; 
          color: var(--text-primary); 
          text-align: center; 
          max-width: 76px; 
          transition: color 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .media-close { 
          position: relative; 
          z-index: 2; 
          margin-top: 24px; 
          width: 48px; height: 48px; 
          border-radius: 50%; 
          background: transparent; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          cursor: pointer; 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.5); 
          transition: none; 
          border: none; 
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .media-overlay.active .media-close { 
          opacity: 1; 
          transform: translate3d(0, 0, 0) scale(1); 
          transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1) 0.15s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s; 
        }
        
        .media-overlay.exiting .media-close { 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.8); 
          transition: opacity 0.15s ease, transform 0.2s ease; 
        }
        
        .media-close svg { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); color: var(--text-primary); }
        
        /* Image Expanded - GPU Accelerated */
        .image-expanded { 
          position: fixed; 
          top: 0; left: 0; right: 0; bottom: 0; 
          background: var(--bg-primary); 
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
          user-select: none; 
          overscroll-behavior: none; 
          transition: background 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: opacity, visibility;
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
          transform: translate3d(0, 0, 0) scale(0.88); 
          transition: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .image-expanded.active .image-expanded-inner { 
          opacity: 1; 
          transform: translate3d(0, 0, 0) scale(1); 
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s; 
        }
        
        .image-expanded.exiting .image-expanded-inner { 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.92); 
          transition: opacity 0.25s ease, transform 0.3s ease; 
        }
        
        .image-expanded-content { 
          width: 280px; height: 280px; 
          border-radius: 22px; 
          overflow: hidden; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.08)) drop-shadow(0 25px 60px rgba(0, 0, 0, 0.7)); 
          touch-action: manipulation; 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.9); 
          transition: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
          isolation: isolate;
        }
        
        .image-expanded-content img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        .image-expanded.active .image-expanded-content { 
          opacity: 1; 
          transform: translate3d(0, 0, 0) scale(1); 
          transition: opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1) 0.12s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.12s; 
        }
        
        .image-expanded.exiting .image-expanded-content { 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.95); 
          transition: opacity 0.2s ease, transform 0.25s ease; 
        }
        
        .image-expanded-content img { width: 100%; height: 100%; object-fit: cover; }
        
        .image-expanded-close { 
          margin-top: 40px; 
          width: 52px; height: 52px; 
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
          transform: translate3d(0, 0, 0) scale(0.5); 
          transition: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .image-expanded.active .image-expanded-close { 
          opacity: 1; 
          transform: translate3d(0, 0, 0) scale(1); 
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s; 
        }
        
        .image-expanded.exiting .image-expanded-close { 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.7); 
          transition: opacity 0.15s ease, transform 0.2s ease; 
        }
        
        .image-expanded-close svg { filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6)); color: var(--text-primary); }
        
        /* 3D Interactive Expanded - GPU Accelerated */
        .interactive-expanded { 
          position: fixed; 
          top: 0; left: 0; right: 0; bottom: 0; 
          background: color-mix(in srgb, var(--bg-primary) 98%, transparent); 
          z-index: 3000; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: flex-start; 
          padding-top: clamp(80px, 15vh, 150px); 
          opacity: 0; 
          visibility: hidden; 
          pointer-events: none; 
          transition: background 0.3s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: opacity, visibility;
        }
        
        .interactive-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .interactive-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .interactive-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s ease; }
        
        .interactive-content { 
          width: clamp(280px, 80vw, 400px); 
          height: clamp(280px, 80vw, 400px); 
          border-radius: 24px; 
          overflow: hidden; 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.9); 
          transition: none; 
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .interactive-content canvas { 
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .interactive-expanded.active .interactive-content { 
          opacity: 1; 
          transform: translate3d(0, 0, 0) scale(1); 
          transition: opacity 0.45s ease 0.1s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.1s; 
        }
        
        .interactive-expanded.exiting .interactive-content { 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.95); 
          transition: opacity 0.2s ease, transform 0.25s ease; 
        }
        
        .interactive-close { 
          margin-top: 40px; 
          width: 52px; height: 52px; 
          border-radius: 50%; 
          background: transparent; 
          border: none; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          cursor: pointer; 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.5); 
          transition: none; 
          touch-action: manipulation;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .interactive-expanded.active .interactive-close { 
          opacity: 0.8; 
          transform: translate3d(0, 0, 0) scale(1); 
          transition: opacity 0.35s ease 0.18s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s; 
        }
        
        .interactive-expanded.exiting .interactive-close { 
          opacity: 0; 
          transform: translate3d(0, 0, 0) scale(0.7); 
          transition: opacity 0.15s ease; 
        }
        
        .interactive-close:hover { opacity: 1; transform: translate3d(0, 0, 0) scale(1.1); }
        .interactive-close:active { transform: translate3d(0, 0, 0) scale(0.95); }
        .interactive-close svg { color: var(--text-primary); }
        
        /* Transition Bridge - GPU Accelerated */
        .transition-bridge { 
          position: fixed; 
          top: 0; left: 0; right: 0; bottom: 0; 
          background: var(--bg-primary); 
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
          transform: translate3d(0, 0, 0);
          will-change: opacity; 
          transition: opacity 0.2s ease-out, visibility 0s linear 0.2s;
          contain: layout style paint;
        }
        
        .transition-bridge.loading { 
          opacity: 1; 
          visibility: visible; 
          pointer-events: auto; 
          transition: opacity 0.15s ease-out, visibility 0s; 
        }
        
        .transition-bridge.transitioning { 
          opacity: 0; 
          visibility: visible; 
          pointer-events: none; 
          transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear 0.55s; 
        }
        
        .bridge-spinner { 
          width: 36px; height: 36px; 
          border: 1.5px solid var(--border-primary); 
          border-top-color: var(--text-secondary); 
          border-radius: 50%; 
          animation: bridgeSpin 0.8s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite; 
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.08));
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        @keyframes bridgeSpin { to { transform: rotate(360deg); } }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) { 
          .folders-grid { gap: 48px 44px; max-width: 400px; } 
          .folder-icon { width: 145px; height: 145px; border-radius: 32px; } 
          .folder-preview { width: 120px; height: 120px; gap: 7px; } 
          .folder-mini-icon { width: 56px; height: 56px; border-radius: 13px; } 
          .folder-mini-placeholder { width: 56px; height: 56px; } 
          .folder-name { font-size: 13px; } 
          .folder-container { padding: 28px; } 
          .folder-apps-grid { gap: 28px; } 
          .folder-app-icon { width: 82px; height: 82px; border-radius: 20px; } 
          .folder-app-placeholder { width: 82px; height: 105px; } 
          .media-grid { gap: 24px; } 
          .media-item-icon { width: 90px; height: 90px; border-radius: 20px; } 
          .media-item-name { font-size: 13px; max-width: 95px; } 
          .media-container { padding: 32px; } 
          .image-expanded-content { width: 340px; height: 340px; border-radius: 26px; } 
          .interactive-content { width: 380px; height: 380px; } 
        }
        
        @media (min-width: 900px) { 
          .folders-grid { gap: 54px 50px; max-width: 480px; } 
          .folder-icon { width: 175px; height: 175px; border-radius: 38px; } 
          .folder-preview { width: 145px; height: 145px; gap: 8px; } 
          .folder-mini-icon { width: 68px; height: 68px; border-radius: 15px; } 
          .folder-mini-placeholder { width: 68px; height: 68px; } 
          .folder-name { font-size: 14px; } 
          .folder-container { padding: 36px; } 
          .folder-apps-grid { gap: 32px; } 
          .folder-app-icon { width: 96px; height: 96px; border-radius: 24px; } 
          .folder-app-placeholder { width: 96px; height: 120px; } 
          .interactive-content { width: 440px; height: 440px; } 
        }
      `}</style>

      <div className={`work-page ${pageReady ? 'page-ready' : ''} ${folderAnimState !== 'idle' || expandedAnimState !== 'idle' || galleryAnimState !== 'idle' || notesAnimState !== 'idle' || imageAnimState !== 'idle' || interactiveAnimState !== 'idle' ? 'overlay-open' : ''}`} style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "60px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
        <div className={`folders-grid ${isLoaded ? 'loaded' : ''}`}>
          {/* Row 1: Apps & Services */}
          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('apps')}>
              <div className="folder-preview">
                {appsItems.map((app) => (
                  <div key={app.id} className={`folder-mini-icon ${app.image ? 'has-image' : ''}`}>
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
                  <div key={service.id} className={`folder-mini-icon ${service.appImage ? 'has-image' : ''}`}>
                    {renderServiceMiniIcon(service, miniIconSize)}
                  </div>
                ))}
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Services</span>
          </div>

          {/* Row 2: 3D Interactive & Media */}
          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('interactive')}>
              <div className="folder-preview">
                <div className="folder-mini-icon has-image">
                  <img src="/images/sperhaapp2.png" alt="Sphere" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="folder-mini-icon has-image">
                  <img src="/images/mainfoldapp2.png" alt="Manifold" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="folder-mini-icon">
                  {renderMetatronMini(miniIconSize)}
                </div>
                <div className="folder-mini-placeholder" />
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>3D Interactive</span>
          </div>

          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('entertainment')}>
              <div className="folder-preview">
                <div className="folder-mini-icon has-image">
                  <img src="/images/gallery.jpg" alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="folder-mini-icon has-image">
                  <img src="/images/notes.jpg" alt="Notes" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="folder-mini-placeholder" />
                <div className="folder-mini-placeholder" />
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Media</span>
          </div>

          {/* Row 3: Social */}
          <div className="folder-wrapper">
            <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={() => handleOpenFolder('social')}>
              <div className="folder-preview">
                {socialLinks.slice(0, 4).map((social) => (
                  <div key={social.id} className="folder-mini-icon">
                    {renderSocialMiniIcon(social.id, miniIconSize - 2)}
                  </div>
                ))}
              </div>
            </div>
            <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Social</span>
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
                  <div className={`folder-app-icon ${app.image ? 'has-image' : ''}`} style={{ '--breathe-delay': `${index * 0.5}s` } as React.CSSProperties}>
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
                  <div className={`folder-app-icon ${service.appImage ? 'has-image' : ''}`} style={{ '--breathe-delay': `${index * 0.5}s` } as React.CSSProperties}>
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
            <div className="folder-apps-grid" onClick={(e) => e.stopPropagation()}>
              <div className="folder-app" onClick={handleOpenGalleryWithBridge}>
                <div className="folder-app-icon has-image" style={{ '--breathe-delay': '0s' } as React.CSSProperties}>
                  <img src="/images/gallery.jpg" alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Gallery</span>
              </div>
              <div className="folder-app" onClick={handleOpenNotesWithBridge}>
                <div className="folder-app-icon has-image" style={{ '--breathe-delay': '0.5s' } as React.CSSProperties}>
                  <img src="/images/notes.jpg" alt="Notes" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Notes</span>
              </div>
              <div className="folder-app-placeholder" />
              <div className="folder-app-placeholder" />
            </div>
          </div>
        </div>
      )}

      {/* Social Folder Overlay - Identical to other folders */}
      {openFolder === 'social' && (
        <div className={`folder-overlay ${getFolderAnimClass()}`}>
          <div className="folder-overlay-bg" onClick={handleCloseFolder} />
          <div className="folder-container" onClick={handleCloseFolder}>
            <div className="folder-apps-grid social-grid" onClick={(e) => e.stopPropagation()}>
              {socialLinks.map((social, index) => (
                <Link key={social.id} href={social.url} target={social.id === 'gmail' ? '_self' : '_blank'} rel="noopener noreferrer" className="folder-app" onClick={restoreScroll}>
                  <div className="folder-app-icon" style={{ '--breathe-delay': `${index * 0.4}s` } as React.CSSProperties}>
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
                <div className="folder-app-icon has-image" style={{ '--breathe-delay': '0s' } as React.CSSProperties}>
                  <img src="/images/sperhaapp2.png" alt="Sphere" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Sphere</span>
              </div>
              <div className="folder-app" onClick={() => handleOpenInteractiveWithBridge('manifold')}>
                <div className="folder-app-icon has-image" style={{ '--breathe-delay': '0.5s' } as React.CSSProperties}>
                  <img src="/images/mainfoldapp2.png" alt="Manifold" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <span className="folder-app-name">Manifold</span>
              </div>
              <div className="folder-app" onClick={() => window.open('https://metatron-genesis369.vercel.app', '_blank')}>
                <div className="folder-app-icon" style={{ '--breathe-delay': '1s' } as React.CSSProperties}>
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
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Service Expanded Views */}
      {servicesItems.map((service, index) => (
        <div
          key={service.id}
          className={`service-expanded ${expandedService === index ? getExpandedAnimClass() : ''}`}
          onClick={handleCloseService}
        >
          <div className="service-expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="service-screen-frame">
              <div className="service-hero-image">
                <img src={service.pageImage} alt={service.name} />
              </div>
            </div>
            <h2 className="service-expanded-title">{service.name}</h2>
            <p className="service-expanded-desc">{service.desc}</p>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}